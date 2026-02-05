import { fn } from "storybook/test";

import { AddIcon, CopyIcon, LinkIcon, MailIcon, NumericIcon, SubtractIcon } from "@qlik/sprout-icons/react";
import {
  AffixWrapper,
  Button,
  ButtonGroup,
  Field,
  IconButton,
  Tag,
  TextField,
  type TextFieldProps,
  classNames,
} from "@qlik/sprout-react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { TextFieldArgTypes } from "./TextField.argTypes";

export default {
  title: "Components/TextField",
  component: TextField,
  parameters: {},
  argTypes: TextFieldArgTypes,
} as Meta;

const errorMessages = ["Error message 1"];
const longErrorMessage = ["A very very very very very very very very long error message"];
const longHelpText = "A very very very very very very very very long help text";

export const Overview: StoryObj<typeof TextField> = {
  render: (props: Partial<TextFieldProps>) => (
    <div className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s")}>
      <TextField id="input1" label="Default" helpText="help me" placeholder="Give me a value" {...props} />
      <TextField
        id="input-hover"
        label="Hover"
        helpText="help me"
        placeholder="Give me a value"
        {...props}
        data-testid="hover"
      />
      <TextField id="input-focus" label="Focus" placeholder="Focus" {...props} data-testid="focus" />

      <TextField id="input-disabled" label="Disabled" placeholder="Disabled Input" disabled {...props} />
      <TextField id="input-readonly" label="Readonly" placeholder="Readonly Input" readOnly {...props} />
      <TextField
        id="input-error-message"
        label="Error"
        placeholder="Input in error with message"
        errorMessages={errorMessages}
        {...props}
      />
      <TextField id="input-error" label="Error" placeholder="Input in error" hasError {...props} />
      <TextField id="input-error" label="MaxCharacterCount" placeholder="Input has counter" maxCharacterCount={10} />
    </div>
  ),

  args: {
    designSize: "default",
  },
  argTypes: TextFieldArgTypes,
  parameters: {
    chromatic: { disableSnapshot: true },
    pseudo: {
      hover: '[data-testid="hover"]',
      focus: 'div:has(> div > [data-testid="focus"])',
    },
  },
};

export const Playground: StoryObj<typeof TextField> = {
  render: (props: TextFieldProps) => (
    <span className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s", "gap-s")}>
      <TextField {...props} />
    </span>
  ),
  args: {
    label: "Label",
    id: "input",
    placeholder: "Placeholder",
    defaultValue: "Value",
    helpText: "help me",
    maxCharacterCount: 20,
  },
  argTypes: TextFieldArgTypes,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const Adornment: StoryObj<typeof TextField> = {
  render: ({ leftAdornment = "Left", rightAdornment = "Right", ...props }: Partial<TextFieldProps>) => (
    <div className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s", "gap-m")}>
      <TextField id="left-adornment" label="Left adornment" {...props} leftAdornment={leftAdornment} />
      <TextField id="right-adornment" label="Right adornment" {...props} rightAdornment={rightAdornment} />
      <TextField
        id="adornment"
        label="Both adornment"
        {...props}
        leftAdornment={leftAdornment}
        rightAdornment={rightAdornment}
      />
    </div>
  ),
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const Affix: StoryObj<typeof TextField> = {
  render: ({ ...props }: Partial<TextFieldProps>) => (
    <div className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s")}>
      <TextField
        label="Phone number"
        defaultValue="737 00 00 00"
        {...props}
        leftAffix={
          <AffixWrapper>
            <Button variant="quiet" size="small" label="+46" asDropdown />
          </AffixWrapper>
        }
      />
      <TextField
        label="Licence key"
        defaultValue="ABC-123-DEF-456"
        {...props}
        rightAffix={
          <AffixWrapper>
            <IconButton
              variant="quiet"
              size="small"
              label="Copy the key"
              icon={<CopyIcon width={undefined} height={undefined} />}
            />
          </AffixWrapper>
        }
      />
      <TextField
        label="Value"
        defaultValue="140"
        {...props}
        rightAffix={
          <div className={classNames("flex", "gap-s", "flex-row")}>
            <AffixWrapper>
              <IconButton
                variant="quiet"
                size="small"
                label="Decrement"
                icon={<SubtractIcon width={undefined} height={undefined} />}
              />
            </AffixWrapper>
            <AffixWrapper>
              <IconButton
                variant="quiet"
                size="small"
                label="Increment"
                icon={<AddIcon width={undefined} height={undefined} />}
              />
            </AffixWrapper>
          </div>
        }
      />
      <h2 className={classNames("font-heading-m", "text-default")}>Previous deprecated Design</h2>
      <Field label="Left me" htmlFor="left-affix">
        <ButtonGroup fullWidth>
          <Button label="Left" onClick={fn()} />
          <TextField id="left-affix" {...props} />
        </ButtonGroup>
      </Field>
      <Field label="Right me" htmlFor="right-affix">
        <ButtonGroup fullWidth>
          <TextField id="right-affix" {...props} />
          <Button label="Right" onClick={fn()} />
        </ButtonGroup>
      </Field>
      <Field label="Affix" htmlFor="affix">
        <ButtonGroup fullWidth>
          <Button label="Left" onClick={fn()} />
          <TextField id="affix" {...props} />
          <Button label="Right" onClick={fn()} />
        </ButtonGroup>
      </Field>
    </div>
  ),
  args: {},
  argTypes: TextFieldArgTypes,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const Search: StoryObj<typeof TextField> = {
  render: (props: TextFieldProps) => (
    <div className={classNames("flex", "flex-row", "border-box", "w-fit", "p-s")}>
      <TextField type="search" {...props} />
    </div>
  ),

  args: {
    label: "Search",
  },
  argTypes: {},
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

const RIGHT_AFFIX_DEPRECATED = {
  label: "Right",
  onClick: () => {},
  disabled: false,
  icon: <AddIcon width={undefined} height={undefined} />,
};

const LEFT_AFFIX_DEPRECATED = {
  label: "Left",
  onClick: () => {},
  disabled: false,
  icon: <AddIcon width={undefined} height={undefined} />,
};

export const VisualTest: StoryObj<typeof TextField> = {
  render: () => (
    <div className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s")} style={{ inlineSize: 600 }}>
      <h2 className={classNames("font-heading-m", "text-default")}>States</h2>
      <div className={classNames("flex", "flex-row", "gap-m", "w-full")}>
        <div className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s", "gap-l")}>
          <TextField label="Default" helpText="help me" placeholder="Give me a value" />
          <TextField label="Hover" helpText="help me" placeholder="Give me a value" data-testid="hover" />
          <TextField label="Focus" placeholder="Focus" data-testid="focus" />
          <TextField label="Disabled" placeholder="Disabled Input" disabled />
          <TextField label="Readonly" placeholder="Readonly Input" readOnly />
          <TextField
            label="Really long value should ellipsis"
            helpText="help me"
            value="Est anim exercitation veniam exercitation officia ad anim sit et est. Aliquip commodo anim ad laboris magna velit qui enim reprehenderit cillum."
          />
          <TextField
            label="Error"
            placeholder="Input in error with message"
            errorMessages={errorMessages}
            helpText="help me"
          />
          <TextField label="Error" placeholder="Input in error" hasError />
          <TextField
            id="input-counter"
            label="Counter"
            placeholder="With max character count"
            value=""
            maxCharacterCount={20}
          />
          <TextField
            id="input-counter-error"
            label="Counter above limit"
            placeholder="Input in error with message"
            maxCharacterCount={20}
            helpText={longHelpText}
            value="Character count above max limit"
          />
          <TextField
            id="input-counter-error-message"
            label="Counter and Error"
            placeholder="Input in error with message and max character counter"
            maxCharacterCount={120}
            value=""
            errorMessages={longErrorMessage}
          />
        </div>
        <div className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s", "gap-l")}>
          <TextField designSize="small" label="Default" helpText="help me" placeholder="Give me a value" />
          <TextField
            designSize="small"
            label="Hover"
            helpText="help me"
            placeholder="Give me a value"
            data-testid="hover"
          />
          <TextField designSize="small" label="Focus" placeholder="Focus" data-testid="focus" />
          <TextField designSize="small" label="Disabled" placeholder="Disabled Input" disabled />
          <TextField designSize="small" label="Readonly" placeholder="Readonly Input" readOnly />
          <TextField
            designSize="small"
            label="Really long placeholder should ellipsis"
            helpText="help me"
            placeholder="Est anim exercitation veniam exercitation officia ad anim sit et est. Aliquip commodo anim ad laboris magna velit qui enim reprehenderit cillum."
          />
          <TextField
            designSize="small"
            label="Error"
            placeholder="Input in error with message"
            errorMessages={errorMessages}
          />
          <TextField designSize="small" label="Error" placeholder="Input in error" hasError />
          <TextField
            designSize="small"
            id="input-counter"
            label="Counter"
            value=""
            placeholder="With max character count"
            maxCharacterCount={20}
          />
          <TextField
            designSize="small"
            id="input-counter-error"
            label="Counter above limit"
            placeholder="Input in error with message"
            maxCharacterCount={20}
            helpText={longHelpText}
            value="Character count above max limit"
          />
          <TextField
            designSize="small"
            id="input-counter-error-message"
            label="Counter and Error"
            placeholder="Input in error with message and max character counter"
            maxCharacterCount={120}
            value=""
            errorMessages={longErrorMessage}
          />
        </div>
      </div>
      <h2 className={classNames("font-heading-m", "text-default")}>Adornment</h2>
      <div className={classNames("flex", "flex-row", "gap-m", "w-full")}>
        <div className={classNames("flex", "flex-row", "border-box", "w-fit", "p-s")}>
          <div className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s")}>
            <TextField id="left-adornment" label="Left adornment" leftAdornment="left" />
            <TextField id="right-adornment" label="Right adornment" rightAdornment="right" />
            <TextField id="adornment" label="Both adornment" leftAdornment="left" rightAdornment="right" />
          </div>
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "w-fit", "p-s")}>
          <div className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s")}>
            <TextField designSize="small" id="small-left-adornment" label="Left adornment" leftAdornment="left" />
            <TextField designSize="small" id="small-right-adornment" label="Right adornment" rightAdornment="right" />
            <TextField
              designSize="small"
              id="small-adornment"
              label="Both adornment"
              leftAdornment="left"
              rightAdornment="right"
            />
          </div>
        </div>
      </div>
      <div className={classNames("flex", "flex-row", "gap-m", "w-full")}>
        <div className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s")}>
          <h2 className={classNames("font-heading-m", "text-default")}>Affix</h2>
          <TextField
            label="Phone number"
            defaultValue="737 00 00 00"
            leftAffix={
              <AffixWrapper>
                <Button variant="quiet" size="small" label="+46" asDropdown />
              </AffixWrapper>
            }
          />
          <TextField
            label="Licence key"
            defaultValue="ABC-123-DEF-456"
            rightAffix={
              <AffixWrapper>
                <IconButton
                  variant="quiet"
                  size="small"
                  label="Copy the key"
                  icon={<CopyIcon width={undefined} height={undefined} />}
                />
              </AffixWrapper>
            }
          />
          <TextField
            label="Value"
            defaultValue="140"
            rightAffix={
              <div className={classNames("flex", "gap-s", "flex-row")}>
                <AffixWrapper>
                  <IconButton
                    variant="quiet"
                    size="small"
                    label="Decrement"
                    icon={<SubtractIcon width={undefined} height={undefined} />}
                  />
                </AffixWrapper>
                <AffixWrapper>
                  <IconButton
                    variant="quiet"
                    size="small"
                    label="Increment"
                    icon={<AddIcon width={undefined} height={undefined} />}
                  />
                </AffixWrapper>
              </div>
            }
          />
          <TextField
            id="readonly-affixes"
            label="Both affixes in readonly"
            readOnly
            leftAffix={<Tag size="s" text="left" />}
            rightAffix={<Tag size="s" text="right" />}
          />
        </div>
        <div className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s", "gap-m")}>
          <h2 className={classNames("font-heading-m", "text-default")}>Inline TextField: no label/helpText</h2>
          <TextField defaultValue="value" aria-label="label" />
          <TextField defaultValue="with useField property" aria-label="inline property" useField />
        </div>
      </div>
      <h2 className={classNames("font-heading-m", "text-default")}>Depreacted ButtonGroup</h2>
      <div className={classNames("flex", "flex-row", "gap-m", "w-full")}>
        <div className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s", "gap-m")}>
          <TextField label="Affix" leftAffix={LEFT_AFFIX_DEPRECATED} rightAffix={RIGHT_AFFIX_DEPRECATED} />
          <Field label="Left me" htmlFor="left-affix">
            <ButtonGroup fullWidth>
              <Button label="Left" onClick={fn()} />
              <TextField id="left-affix" />
            </ButtonGroup>
          </Field>
          <Field label="Right me" htmlFor="right-affix">
            <ButtonGroup fullWidth>
              <TextField id="right-affix" />
              <Button label="Right" onClick={fn()} />
            </ButtonGroup>
          </Field>
          <Field label="Affix" htmlFor="affix">
            <ButtonGroup fullWidth>
              <Button label="Left" onClick={fn()} />
              <TextField id="affix" />
              <Button label="Right" onClick={fn()} />
            </ButtonGroup>
          </Field>
        </div>
      </div>

      <h2 className={classNames("font-heading-m", "text-default")}>Search</h2>
      <div className={classNames("flex", "flex-row", "gap-m", "w-full")}>
        <div className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s", "gap-m")}>
          <TextField type="search" label="Search" />
          <TextField type="search" label="Search" value="Search string" />
        </div>
        <div className={classNames("flex", "flex-col", "border-box", "w-fit", "p-s", "gap-m")}>
          <TextField designSize="small" type="search" label="Search" />
          <TextField designSize="small" type="search" label="Search" value="Search string" />
        </div>
      </div>

      <h2 className={classNames("font-heading-m", "text-default")}>Input types</h2>
      <div className={classNames("flex", "flex-col", "gap-m", "w-m")}>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <TextField
            label="number"
            type="number"
            leftAffix={
              <span className={classNames("pl-s", "flex", "items-center", "text-default")}>
                <NumericIcon />
              </span>
            }
          />
          <TextField label="time" type="time" />
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <TextField
            label="url"
            type="url"
            leftAffix={
              <span className={classNames("pl-s", "flex", "items-center", "text-default")}>
                <LinkIcon />
              </span>
            }
          />
          <TextField
            label="tel"
            type="tel"
            leftAffix={
              <AffixWrapper>
                <Button variant="quiet" size="small" label="+46" asDropdown />
              </AffixWrapper>
            }
          />
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <TextField
            label="email"
            type="email"
            leftAffix={
              <span className={classNames("pl-s", "flex", "items-center", "text-default")}>
                <MailIcon />
              </span>
            }
          />
          <TextField label="date" type="date" />
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <TextField label="month" type="month" />
          <TextField label="week" type="week" />
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <TextField label="datetime-local" type="datetime-local" />
          <TextField
            label="password"
            type="password"
            rightAffix={
              <AffixWrapper>
                <Button
                  aria-label="Copy password"
                  variant="quiet"
                  size="small"
                  icon={<CopyIcon height="undefined" />}
                />
              </AffixWrapper>
            }
          />
        </div>
      </div>

      <h2 className={classNames("font-heading-m", "text-default")}>
        Input types <code>designSize=&quot;small&quot;</code> doesn&apos;t support prefix and suffix
      </h2>
      <div className={classNames("flex", "flex-col", "gap-m", "w-m")}>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <TextField designSize="small" label="number" type="number" />
          <TextField designSize="small" label="time" type="time" />
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <TextField designSize="small" label="url" type="url" />
          <TextField designSize="small" label="tel" type="tel" />
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <TextField designSize="small" label="email" type="email" />
          <TextField designSize="small" label="date" type="date" />
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <TextField designSize="small" label="month" type="month" />
          <TextField designSize="small" label="week" type="week" />
        </div>
        <div className={classNames("flex", "flex-row", "border-box", "gap-m")}>
          <TextField designSize="small" label="datetime-local" type="datetime-local" />
          <TextField designSize="small" label="password" type="password" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: {
      disable: true,
    },
    pseudo: {
      hover: 'div:has(> div > div > [data-testid="hover"])',
      focus: '[data-testid="focus"]',
    },
  },
};
