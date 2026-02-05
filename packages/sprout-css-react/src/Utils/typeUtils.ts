//#region Distributive Omit and Pick
/**
 * https://stackoverflow.com/questions/57103834/omit-a-property-from-all-interfaces-in-a-union-but-keep-the-union-structure
 *
 * https://davidgarciasantes.medium.com/understanding-why-omit-and-pick-fail-with-union-types-5ca3d754a7cb
 *
 * https://x.com/mattpocockuk/status/1727262116405707060
 */

export type DistributiveOmit<T, K extends PropertyKey> = T extends unknown
  ? Omit<T, K>
  : never;

export type DistributivePick<T, K extends keyof T> = T extends unknown
  ? Pick<T, K>
  : never;
//#endregion
