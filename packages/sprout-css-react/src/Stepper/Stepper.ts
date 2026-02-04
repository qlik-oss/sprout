import { Step, type StepProps } from "./Step";
import {
  StepperContainer,
  type StepperContainerProps,
} from "./StepperContainer";

export const Stepper = {
  Container: StepperContainer,
  Step,
};

export type StepperProps = {
  Container: StepperContainerProps;
  Step: StepProps;
};
