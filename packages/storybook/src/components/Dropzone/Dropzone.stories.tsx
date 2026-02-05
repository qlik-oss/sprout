import { UploadIcon } from "@qlik/sprout-icons/react";
import { AlertInline, Button, Dropzone, type DropzoneProps, classNames } from "@qlik/sprout-react";
import type { Meta, StoryObj } from "@storybook/react";

import { DropzoneArgTypes } from "./Dropzone.argTypes";

export default {
  title: "Components/Dropzone",
  component: Dropzone,
  argTypes: DropzoneArgTypes,
  args: {
    icon: "Upload",
    title: "Upload file",
    description: "Drop file to upload or browse your device.",
    button: {
      label: "Browse",
      variant: "primary",
    },
    secondaryButton: {
      label: "Attach from library",
      variant: "default",
    },
  },
} as Meta<typeof Dropzone>;

export const Playground: StoryObj<typeof Dropzone> = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: ({ icon, ...args }: DropzoneProps) => (
    <div className={classNames("flex", "flex-col", "gap-xl")}>
      <div className={classNames("w-s")}>
        <AlertInline severity="warning" title="Beta">
          This component is early and the spec will be updated soon. If you use it you engage to update it without
          breaking changes.
        </AlertInline>
      </div>
      <div className={classNames("flex-noreset", "flex-row", "gap-xl", "items-start")}>
        <div className={classNames("w-xxs")}>
          <Dropzone {...args} icon={icon ? <UploadIcon /> : null}>
            <AlertInline severity="error" title="Status">
              You should use this to manage state
            </AlertInline>
          </Dropzone>
        </div>
        <Button variant="quiet" label="Draggable" draggable />
      </div>
    </div>
  ),
};

export const VisualTest: StoryObj<typeof Dropzone> = {
  render: () => (
    <div className={classNames("flex", "flex-row", "gap-xl", "w-xxl")}>
      <div className={classNames("flex", "flex-col", "gap-xl", "w-s")}>
        <Dropzone />
        <Dropzone icon={<UploadIcon />} />
        <Dropzone icon={<UploadIcon />} title="Upload file" />
        <Dropzone icon={<UploadIcon />} title="Upload file" description="Drop file to upload or browse your device." />
        <Dropzone
          icon={<UploadIcon />}
          title="Upload file"
          description="Drop file to upload or browse your device."
          button={{ label: "Browse", variant: "primary" }}
          secondaryButton={{ label: "Attach from library", variant: "default" }}
        />
        <Dropzone
          icon={<UploadIcon />}
          title="Upload file"
          description="Drop file to upload or browse your device."
          button={{ label: "Browse", variant: "primary" }}
          secondaryButton={{ label: "Attach from library", variant: "default" }}
        >
          <AlertInline severity="error" title="Status">
            You should use this to manage state
          </AlertInline>
        </Dropzone>
      </div>
      <div className={classNames("flex", "flex-col", "gap-xl", "w-s")}>
        <Dropzone disabled />
        <Dropzone disabled icon={<UploadIcon />} />
        <Dropzone disabled icon={<UploadIcon />} title="Upload file" />
        <Dropzone
          disabled
          icon={<UploadIcon />}
          title="Upload file"
          description="Drop file to upload or browse your device."
        />
        <Dropzone
          disabled
          icon={<UploadIcon />}
          title="Upload file"
          description="Drop file to upload or browse your device."
          button={{ label: "Browse", variant: "primary" }}
          secondaryButton={{ label: "Attach from library", variant: "default" }}
        />
        <Dropzone
          disabled
          icon={<UploadIcon />}
          title="Upload file"
          description="Drop file to upload or browse your device."
          button={{ label: "Browse", variant: "primary" }}
          secondaryButton={{ label: "Attach from library", variant: "default" }}
        >
          <AlertInline severity="error" title="Status">
            You should use this to manage state
          </AlertInline>
        </Dropzone>
      </div>
      <div className={classNames("flex", "flex-col", "gap-xl", "w-s")}>
        <Dropzone data-testid="focusVisible" />
        <Dropzone data-testid="focusVisible" icon={<UploadIcon />} />
        <Dropzone data-testid="focusVisible" icon={<UploadIcon />} title="Upload file" />
        <Dropzone
          data-testid="focusVisible"
          icon={<UploadIcon />}
          title="Upload file"
          description="Drop file to upload or browse your device."
        />
        <Dropzone
          data-testid="focusVisible"
          icon={<UploadIcon />}
          title="Upload file"
          description="Drop file to upload or browse your device."
          button={{ label: "Browse", variant: "primary" }}
          secondaryButton={{ label: "Attach from library", variant: "default" }}
        />
        <Dropzone
          data-testid="focusVisible"
          icon={<UploadIcon />}
          title="Upload file"
          description="Drop file to upload or browse your device."
          button={{ label: "Browse", variant: "primary" }}
          secondaryButton={{ label: "Attach from library", variant: "default" }}
        >
          <AlertInline severity="error" title="Status">
            You should use this to manage state
          </AlertInline>
        </Dropzone>
      </div>
      <div className={classNames("flex", "flex-col", "gap-xl", "w-s")}>
        <Dropzone status="dragging" />
        <Dropzone status="dragging" icon={<UploadIcon />} />
        <Dropzone status="dragging" icon={<UploadIcon />} title="Upload file" />
        <Dropzone
          status="dragging"
          icon={<UploadIcon />}
          title="Upload file"
          description="Drop file to upload or browse your device."
        />
        <Dropzone
          status="dragging"
          icon={<UploadIcon />}
          title="Upload file"
          description="Drop file to upload or browse your device."
          button={{ label: "Browse", variant: "primary" }}
          secondaryButton={{ label: "Attach from library", variant: "default" }}
        />
        <Dropzone
          status="dragging"
          icon={<UploadIcon />}
          title="Upload file"
          description="Drop file to upload or browse your device."
          button={{ label: "Browse", variant: "primary" }}
          secondaryButton={{ label: "Attach from library", variant: "default" }}
        >
          <AlertInline severity="error" title="Status">
            You should use this to manage state
          </AlertInline>
        </Dropzone>
      </div>
    </div>
  ),
  parameters: {
    pseudo: {
      focusVisible: '[data-testid="focusVisible"]',
    },
  },
};
