export type Region =
  | "APAC"
  | "Europe"
  | "Caribbean"
  | "Middle East"
  | "South and Central Asia";

export type PopulationDataType = { region: Region; value: number };

export const PopulationData: Array<PopulationDataType> = [
  { region: "APAC", value: 28131565903 },
  { region: "Europe", value: 16491553204 },
  { region: "Caribbean", value: 91660488 },
  { region: "Middle East", value: 26850287394 },
  { region: "South and Central Asia", value: 4678000500 },
];
