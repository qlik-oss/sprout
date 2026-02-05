import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import {
  Button,
  Checkbox,
  RadioGroup,
  Select,
  Slider,
  Switch,
  TextField,
  Textarea,
  classNames,
} from "@qlik/sprout-react";
import type { Meta } from "@storybook/react-vite";

export default {
  title: "Integration/react-hook-form",
  parameters: {
    controls: { disable: true },
    chromatic: { disableSnapshot: true },
  },
} as Meta;

type FormDataSimple = {
  description: string;
  name: string;
  job?: string;
};

export function FormDefaultValuesTest() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormDataSimple>({
    mode: "onChange",
    defaultValues: {
      description: "default description",
      name: "default name",
      job: "developer",
    },
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [formData, setFormData] = useState<FormDataSimple>();

  const onSubmit = async (data: FormDataSimple) => {
    setFormData(data);
  };

  // This log is necessary to raise the issue
  // eslint-disable-next-line no-console
  console.log("Form valid:", isValid);

  return (
    <form
      onSubmit={(e) => {
        void handleSubmit(onSubmit)(e);
      }}
      data-testid="form"
    >
      <div
        className={classNames("flex", "border-box", "flex-col", "gap-xl", "justify-stretch", "content-stretch")}
        style={{ inlineSize: "300px" }}
      >
        <TextField data-testid="name" label="name" {...register("name")} />
        <Textarea data-testid="description" label="description" {...register("description")} />
        <Select.Select data-testid="select" label="Select" placeholder="Select an option" {...register("job")}>
          <Select.Option value="developer">Developer</Select.Option>
          <Select.Option value="designer">Designer</Select.Option>
          <Select.Option value="manager">Manager</Select.Option>
          <Select.Option value="other">Other</Select.Option>
        </Select.Select>
      </div>
    </form>
  );
}

export type MyFormData = {
  amount?: number;
  color?: string;
  description: string;
  light?: boolean;
  fruit?: string;
  vegetables: Array<string>;
  name: string;
  newsletter?: boolean;
  terms?: boolean;
  priceRange?: Array<number>;
};

export function Form() {
  const { register, handleSubmit, formState, control, watch } = useForm<MyFormData>({
    defaultValues: {
      priceRange: [20, 80],
      fruit: "apple",
      vegetables: ["beans"],
    },
  });
  const [formData, setFormData] = useState<MyFormData>();

  const onSubmit = handleSubmit(async (data: MyFormData) => {
    setFormData(data);
  });

  const fruitValues = watch("fruit");
  const vegetablesValues = watch("vegetables");

  // eslint-disable-next-line no-console
  console.log("Form valid:", formState.isValid);

  return (
    <>
      <pre>
        <code data-testid="formdata">{JSON.stringify(formData, null, 2)}</code>
      </pre>
      <div style={{ inlineSize: "300px" }}>
        <TextField
          readOnly
          data-testid="watched-fruit-values"
          // This is to verify that the watch function works as expected and don't cause
          // re-rendering issues
          value={`Default selected fruit: ${JSON.stringify(fruitValues, null, 2)}`}
        />
        <TextField
          readOnly
          data-testid="watched-vegetables-values"
          // This is to verify that the watch function works as expected and don't cause
          // re-rendering issues
          value={`Default selected vegetables: ${JSON.stringify(vegetablesValues, null, 2)}`}
        />
        <form
          onSubmit={(e) => {
            void onSubmit(e);
          }}
          data-testid="wrapper"
          id="component-testing"
        >
          <div className={classNames("flex", "border-box", "flex-col", "gap-xl", "justify-stretch", "content-stretch")}>
            <TextField data-testid="name" label="name" {...register("name")} />
            <Textarea data-testid="description" label="description" {...register("description")} />
            <RadioGroup
              data-testid="color"
              options={[
                { label: "Green", value: "g", "data-testid": "radio-green" },
                { label: "Red", value: "r", "data-testid": "radio-red" },
                { label: "Blue", value: "b", "data-testid": "radio-blue" },
              ]}
              label="Select a color"
              {...register("color")}
            />
            <Checkbox data-testid="terms" label="I agree to the terms and conditions" {...register("terms")} />
            <Checkbox data-testid="newsletter" label="I want to subscribe the newsletter" {...register("newsletter")} />
            <Select.Select data-testid="select-fruit" label="Fruit" placeholder="Select a fruit" {...register("fruit")}>
              <Select.Option value="apple" data-testid="select-apple">
                Apple
              </Select.Option>
              <Select.Option value="banana" data-testid="select-banana">
                Banana
              </Select.Option>
              <Select.Option value="orange" data-testid="select-orange">
                Orange
              </Select.Option>
            </Select.Select>
            <Switch data-testid="switch-light" label="Light" {...register("light")} />
            <Select.Multi
              data-testid="select-vegetables"
              label="Vegetables"
              placeholder="Select vegetables"
              labelClear="Clear input"
              {...register("vegetables")}
            >
              <Select.OptGroup label="Legumes">
                <Select.Option value="beans" data-testid="select-beans">
                  Beans
                </Select.Option>
                <Select.Option value="peas" data-testid="select-peas">
                  Peas
                </Select.Option>
                <Select.Option value="lentils" data-testid="select-lentils">
                  Lentils
                </Select.Option>
              </Select.OptGroup>
            </Select.Multi>

            <Controller
              control={control}
              name="amount"
              render={({ field: { onChange, value, disabled }, fieldState: { invalid, error } }) => (
                <Slider.Single
                  label="Amount"
                  value={value}
                  onChange={onChange}
                  disabled={disabled}
                  hasError={invalid}
                  errorMessages={error?.message ? [error.message] : undefined}
                />
              )}
            />

            <Controller
              control={control}
              name="priceRange"
              rules={{
                validate: (value) => {
                  if (!Array.isArray(value) || value.length !== 2) {
                    return "Invalid range";
                  }

                  const [min, max] = value;
                  return min !== max || "Start and end values can't be the same";
                },
              }}
              render={({ field: { onChange, value, disabled }, fieldState: { invalid, error } }) => (
                <Slider.Range
                  label="Price Range"
                  value={value}
                  onChange={onChange}
                  disabled={disabled}
                  hasError={invalid}
                  errorMessages={error?.message ? [error.message] : undefined}
                />
              )}
            />
            <Button type="submit" label="Submit" variant="primary" />
          </div>
        </form>
      </div>
    </>
  );
}
