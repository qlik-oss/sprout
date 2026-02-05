const camelToKebab = (str) => str.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);

const baseMap = new Map([
  // spacing
  ["marginLeft", "marginInlineStart"],
  ["marginRight", "marginInlineEnd"],
  ["marginTop", "marginBlockStart"],
  ["marginBottom", "marginBlockEnd"],
  ["paddingLeft", "paddingInlineStart"],
  ["paddingRight", "paddingInlineEnd"],
  ["paddingTop", "paddingBlockStart"],
  ["paddingBottom", "paddingBlockEnd"],

  // positioning
  ["left", "insetInlineStart"],
  ["right", "insetInlineEnd"],
  ["top", "insetBlockStart"],
  ["bottom", "insetBlockEnd"],

  // border shorthands
  ["borderLeft", "borderInlineStart"],
  ["borderRight", "borderInlineEnd"],
  ["borderTop", "borderBlockStart"],
  ["borderBottom", "borderBlockEnd"],
  ["borderLeftColor", "borderInlineStartColor"],
  ["borderRightColor", "borderInlineEndColor"],
  ["borderTopColor", "borderBlockStartColor"],
  ["borderBottomColor", "borderBlockEndColor"],
  ["borderLeftStyle", "borderInlineStartStyle"],
  ["borderRightStyle", "borderInlineEndStyle"],
  ["borderTopStyle", "borderBlockStartStyle"],
  ["borderBottomStyle", "borderBlockEndStyle"],
  ["borderLeftWidth", "borderInlineStartWidth"],
  ["borderRightWidth", "borderInlineEndWidth"],
  ["borderTopWidth", "borderBlockStartWidth"],
  ["borderBottomWidth", "borderBlockEndWidth"],

  // border radius
  ["borderTopLeftRadius", "borderStartStartRadius"],
  ["borderTopRightRadius", "borderStartEndRadius"],
  ["borderBottomLeftRadius", "borderEndStartRadius"],
  ["borderBottomRightRadius", "borderEndEndRadius"],

  // overflow
  ["overflowX", "overflowInline"],
  ["overflowY", "overflowBlock"],

  // overscroll
  ["overscrollBehaviorX", "overscrollBehaviorInline"],
  ["overscrollBehaviorY", "overscrollBehaviorBlock"],

  // size
  ["width", "inlineSize"],
  ["minWidth", "minInlineSize"],
  ["maxWidth", "maxInlineSize"],
  ["height", "blockSize"],
  ["minHeight", "minBlockSize"],
  ["maxHeight", "maxBlockSize"],
]);

// kebab-case mirror of the map so we support both JS objects and CSS-in-JS strings
const kebabMap = new Map();
for (const [physical, logical] of baseMap.entries()) {
  kebabMap.set(camelToKebab(physical), camelToKebab(logical));
}

// helpers mirroring the example structure
function mapPropName(name, ignored) {
  if (ignored.has(name)) {
    return null;
  }

  if (baseMap.has(name)) {
    return baseMap.get(name);
  }
  if (kebabMap.has(name)) {
    return kebabMap.get(name);
  }

  const lower = name.toLowerCase();
  if (kebabMap.has(lower)) {
    return kebabMap.get(lower);
  }

  return null;
}

function checkAndReport(context, nodeProp, keyName, logicalName) {
  context.report({
    node: nodeProp,
    messageId: "useLogicalProp",
    data: { logical: logicalName, physical: keyName },
    fix(fixer) {
      const isValidIdentifier = /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(logicalName);

      if (nodeProp.type === "Identifier" && isValidIdentifier) {
        return fixer.replaceText(nodeProp, logicalName);
      }

      if (nodeProp.type === "Literal" && typeof nodeProp.value === "string") {
        return fixer.replaceText(nodeProp, `'${logicalName}'`);
      }

      return null;
    },
  });
}

function handleJSXAttribute(context) {
  const options = context.options?.[0] || {};
  const ignored = new Set(options.ignore || []);

  function checkStyleObject(objExpr) {
    for (const prop of objExpr.properties) {
      if (prop && prop.type === "Property" && !prop.method && !prop.shorthand) {
        let keyName = null;
        if (prop.key.type === "Identifier" && !prop.computed) keyName = prop.key.name;
        else if (prop.key.type === "Literal" && typeof prop.key.value === "string") keyName = prop.key.value;

        if (keyName) {
          const logicalName = mapPropName(keyName, ignored);
          if (logicalName) {
            checkAndReport(context, prop.key, keyName, logicalName);
          }
        }
      }
    }
  }

  function checkJSXStyleAttribute(node) {
    if (node.name && node.name.name === "style" && node.value && node.value.type === "JSXExpressionContainer") {
      const expr = node.value.expression;
      if (expr && expr.type === "ObjectExpression") {
        checkStyleObject(expr);
      }
    }
  }

  return checkJSXStyleAttribute;
}

export default {
  meta: {
    docs: {
      description: "Enforce CSS logical properties in inline JSX style for better internationalization support",
      category: "Build",
      recommended: true,
    },
    fixable: "code",
    schema: [],
    messages: {
      useLogicalProp: "Use logical property '{{logical}}' instead of physical property '{{physical}}'.",
    },
  },
  create(context) {
    return {
      JSXAttribute: handleJSXAttribute(context),
    };
  },
};
