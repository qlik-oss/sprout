import type { ColumnDef } from "../../props";

import people from "./person.json";

export type Person = {
  uuid: string;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: "single" | "married" | "complicated" | "relationship";
  progress: number;
  jobArea: string;
  jobDescriptor: string;
  jobTitle: string;
  jobType:
    | "Administrator"
    | "Agent"
    | "Analyst"
    | "Architect"
    | "Assistant"
    | "Designer"
    | "Developer"
    | "Executive"
    | "Facilitator"
    | "Manager"
    | "Other";
  veryLongContent?: string;
};

export function makePerson(lens: number): Array<Person> {
  return (people as Array<Person>).slice(0, lens);
}

type QualityProps = {
  error: number;
  info: number;
  success: number;
};

function QualityIndicator({ error, info, success }: QualityProps) {
  return (
    <svg
      viewBox="0 0 100 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      height="6px"
      width="100%"
      preserveAspectRatio="none"
    >
      <rect x="0" y="2" width={error} height="4" rx="1" fill="var(--sprout-danger-color-default)" />
      <rect x={error} y="2" width={info} height="4" rx="1" fill="var(--sprout-info-color-default)" />
      <rect x={info} y="2" width={success} height="4" rx="1" fill="var(--sprout-success-color-default)" />
    </svg>
  );
}

export const personColDef: Array<ColumnDef<Person>> = [
  {
    field: "firstName",
    headerName: "First Name",
    headerDescription: "String",
    headerPlaceholder: () => <QualityIndicator error={0} info={30} success={70} />,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    headerDescription: "String",
    headerPlaceholder: () => <QualityIndicator error={10} info={10} success={80} />,
  },
  {
    field: "age",
    headerName: "Age",
    headerDescription: "Age",
    headerPlaceholder: () => <QualityIndicator error={20} info={0} success={80} />,
  },
  {
    field: "visits",
    type: "number",
    headerName: "Visits",
    headerDescription: "Number",
    headerPlaceholder: () => <QualityIndicator error={0} info={0} success={100} />,
  },
  {
    headerName: "Status",
    field: "status",
    headerDescription: "Enum",
    headerPlaceholder: () => <QualityIndicator error={0} info={30} success={70} />,
  },
  {
    field: "progress",
    type: "number",
    headerName: "Progress",
    headerDescription: "Number",
    headerPlaceholder: () => <QualityIndicator error={0} info={30} success={70} />,
  },
  {
    field: "veryLongContent",
    headerName: "Very long content header title",
    headerDescription: "String",
    headerPlaceholder: () => <QualityIndicator error={0} info={30} success={70} />,
  },
  {
    headerName: "Job Area",
    field: "jobArea",
    headerDescription: "Enum",
    headerPlaceholder: () => <QualityIndicator error={0} info={30} success={70} />,
  },
  {
    field: "jobDescriptor",
    headerName: "Job Descriptor",
    headerDescription: "String",
    headerPlaceholder: () => <QualityIndicator error={0} info={30} success={70} />,
  },
  {
    field: "jobTitle",
    headerName: "Job Title",
    headerDescription: "Enum",
    headerPlaceholder: () => <QualityIndicator error={0} info={30} success={70} />,
  },
  {
    field: "jobType",
    headerName: "Job Type",
    headerDescription: "Enum",
    headerPlaceholder: () => <QualityIndicator error={0} info={30} success={70} />,
    resizable: false,
  },
];
