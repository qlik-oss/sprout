/**
 * Spec says:
 * When the table consists of many rows the component needs to load in rows as the user interacts with the table, known as paging.
 * For paging the table should use a virtual infinite scroll technique for non touch devices and use paging buttons combined with native scrolling for touch devices.
 */

export type InputType = {
  isTouch: boolean;
};

function getIsTouchPref(): boolean | undefined {
  try {
    // this is set in sense client app
    const buff = localStorage.getItem("localstorageservice.deviceType");
    if (buff) {
      try {
        return JSON.parse(buff).value.value === "touch";
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Error parsing localStorage:", error);
      }
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error accessing localStorage:", error);
  }
  return undefined;
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
const isDeviceTouch = window.matchMedia
  ? window.matchMedia("(any-pointer: coarse)").matches
  : false;

export function getDeviceInputType(): InputType {
  return {
    isTouch: getIsTouchPref() ?? isDeviceTouch,
  };
}
