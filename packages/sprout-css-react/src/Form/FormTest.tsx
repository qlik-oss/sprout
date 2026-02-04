import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { TextField } from "../Input";
import { RadioGroup } from "../RadioGroup";
import { Select } from "../Select";
import { Switch } from "../Switch";
import { Textarea } from "../Textarea";
import { classNames } from "../classNames";

type FormDataSimple = {
  description: string;
  name: string;
};

export function FormDefaultValuesTest() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormDataSimple>({
    mode: "onChange",
    defaultValues: { description: "default description", name: "default name" },
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [formData, setFormData] = useState<FormDataSimple>();

  const onSubmit = async (data: FormDataSimple): Promise<FormDataSimple> => {
    setFormData(data);
    return Promise.resolve(data);
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
        className={classNames(
          "flex",
          "flex-col",
          "border-box",
          "gap-xl",
          "justify-stretch",
          "align_content_stretch",
        )}
        style={{ inlineSize: "300px" }}
      >
        <TextField data-testid="name" label="name" {...register("name")} />
        <Textarea
          data-testid="description"
          label="description"
          {...register("description")}
        />
      </div>
    </form>
  );
}

export type MyFormData = {
  color?: string;
  description: string;
  light?: boolean;
  fruit?: string;
  vegetables?: Array<string>;
  name: string;
  newsletter?: boolean;
  terms?: boolean;
};

export function Form() {
  const { register, handleSubmit, formState } = useForm<MyFormData>();
  const [formData, setFormData] = useState<MyFormData>();

  const onSubmit = handleSubmit(async (data: MyFormData) => {
    setFormData(data);
  });

  // eslint-disable-next-line no-console
  console.log("Form valid:", formState.isValid);

  return (
    <>
      <pre>
        <code data-testid="formdata">{JSON.stringify(formData, null, 2)}</code>
      </pre>
      <form
        onSubmit={(e) => {
          void onSubmit(e);
        }}
        data-testid="wrapper"
        id="component-testing"
      >
        <div
          className={classNames(
            "flex",
            "flex-col",
            "border-box",
            "gap-xl",
            "justify-stretch",
            "align_content_stretch",
          )}
          style={{ inlineSize: "300px" }}
        >
          <TextField data-testid="name" label="name" {...register("name")} />
          <Textarea
            data-testid="description"
            label="description"
            {...register("description")}
          />
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
          <Checkbox
            data-testid="terms"
            label="I agree to the terms and conditions"
            {...register("terms")}
          />
          <Checkbox
            data-testid="newsletter"
            label="I want to subscribe the newsletter"
            {...register("newsletter")}
          />
          <Select.Select
            data-testid="select-fruit"
            label="Fruit"
            placeholder="Select a fruit"
            {...register("fruit")}
          >
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
          <Switch
            data-testid="switch-light"
            label="Light"
            {...register("light")}
          />
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
          <Button type="submit" label="Submit" variant="primary" />
        </div>
      </form>
    </>
  );
}
export type FormRerenderData = {
  fruit?: string;
  vegetables?: Array<string>;
};
export function FormRerenderTest() {
  const { register, watch } = useForm<FormRerenderData>({
    mode: "onChange",
    defaultValues: { fruit: "apple" },
  });
  const fruitValues = watch("fruit");

  // This log is necessary to raise the issue
  // eslint-disable-next-line no-console
  console.log("Form fruit value:", JSON.stringify(fruitValues));

  return (
    <div style={{ inlineSize: "300px" }}>
      <TextField
        readOnly
        data-testid="watched-values"
        value={`Default selected fruit: ${JSON.stringify(fruitValues, null, 2)}`}
      />
      <form data-testid="form">
        <div
          className={classNames(
            "flex",
            "flex-col",
            "border-box",
            "gap-xl",
            "justify-stretch",
            "align_content_stretch",
          )}
        >
          <Select.Select
            data-testid="select-fruit"
            label="Fruit"
            placeholder="Select a fruit"
            {...register("fruit")}
          >
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
        </div>
      </form>
    </div>
  );
}

export function FormDefaultValuesMultiSelectTest() {
  const { register } = useForm<FormRerenderData>({
    mode: "onChange",
    defaultValues: { fruit: "apple", vegetables: ["beans"] },
  });

  return (
    <div style={{ inlineSize: "300px" }}>
      <form data-testid="form">
        <div
          className={classNames(
            "flex",
            "flex-col",
            "border-box",
            "gap-xl",
            "justify-stretch",
            "align_content_stretch",
          )}
        >
          <Select.Select
            data-testid="select-fruit"
            label="Fruit"
            placeholder="Select a fruit"
            {...register("fruit")}
          >
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
        </div>
      </form>
    </div>
  );
}
