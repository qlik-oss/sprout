type ProgressA11yProps = {
  role: "progressbar" | "status";
  "aria-valuenow"?: number;
  "aria-valuemin"?: number;
  "aria-valuemax"?: number;
  "aria-busy"?: boolean;
};

export function getA11yProgressProps({
  percent,
}: {
  percent?: number;
}): ProgressA11yProps {
  const type = typeof percent === "number" ? "determined" : "undetermined";
  if (type === "determined") {
    return {
      role: "progressbar",
      "aria-valuenow": percent,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
    };
  }
  return {
    role: "status",
    "aria-busy": true,
  };
}
