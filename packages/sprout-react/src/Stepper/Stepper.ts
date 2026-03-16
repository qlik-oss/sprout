import { Step, type StepProps } from "./Step";
import {
  StepperContainer,
  type StepperContainerProps,
} from "./StepperContainer";

/**
 * The Stepper component supports the following sub-components:
 * - `Stepper.Container` — Wrapper that manages step count, ordering, and active state. Accepts `orientation`, `currentStepIndex`, `currentStepError`, and `stateLess`.
 * - `Stepper.Step` — Individual step. Accepts `text`, `semantic`, `state`, and all `HTMLDivElement` attributes.
 */
export const Stepper = {
  Container: StepperContainer,
  Step,
};

export type StepperProps = {
  Container: StepperContainerProps;
  Step: StepProps;
};
