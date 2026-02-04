export type NestedObject = {
  [key: string]: NestedObject | number | string | undefined | null;
};

function isNestedObject(obj: unknown) {
  return typeof obj === "object" && obj !== null && !Array.isArray(obj);
}

export function mergeObjects(obj1: NestedObject, obj2: NestedObject): NestedObject {
  const merged: NestedObject = { ...obj1 };

  for (const key in obj2) {
    // Allow falsy values like 0 or ""
    if (obj2[key] !== undefined) {
      const val1 = obj1[key];
      const val2 = obj2[key];

      if (isNestedObject(val1) && isNestedObject(val2)) {
        merged[key] = mergeObjects(val1 as NestedObject, val2 as NestedObject);
      } else {
        merged[key] = val2;
      }
    }
  }

  return merged;
}

export function createNestedObject(keyString: string, value: NestedObject): NestedObject {
  const keys = keyString.split("/");
  const result: NestedObject = {};

  let currentLevel: NestedObject = result;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    if (i === keys.length - 1) {
      // Last key, set the value
      currentLevel[key] = value;
    } else {
      // Nested key, create an empty object if it doesn't exist
      currentLevel[key] = currentLevel[key] || {};
      // Move to the next level
      currentLevel = currentLevel[key] as NestedObject;
    }
  }

  return result;
}

function kebabToCamel(kebabCaseString: string): string {
  return kebabCaseString.replace(/-([a-z])/g, (_, match) => match.toUpperCase());
}

export function camelToKebab(camelCaseString: string) {
  return camelCaseString.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

export function createNestedObjectWithFormat(
  keys: string[],
  value: NestedObject,
  format: "kebab" | "camel" = "camel",
): NestedObject {
  return keys.reduceRight<NestedObject>(
    (acc, key) => ({ [format === "kebab" ? camelToKebab(key) : kebabToCamel(key)]: acc }),
    value,
  );
}

// Function to filter objects based on the presence of a property
export function filterProps(obj: NestedObject, prop: string, propValue?: string): NestedObject | null {
  if (obj[prop] && (!propValue || obj[prop] === propValue)) {
    return obj;
  }

  const result: NestedObject = {};

  // Iterate over the properties
  for (const key in obj) {
    if (obj[key]) {
      const value = obj[key];

      if (typeof value === "object" && !Array.isArray(value)) {
        // Recursively filter nested objects
        const nestedResult = filterProps(value, prop, propValue);
        if (nestedResult) {
          result[key] = nestedResult;
        }
      }
    }
  }

  // Return null if no matching subobject is found
  return Object.keys(result).length > 0 ? result : null;
}
