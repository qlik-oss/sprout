/* eslint-disable react-hooks/rules-of-hooks */
import { AlertModal, Button, classNames } from "@qlik/sprout-react";
import { useContainer } from "@qlik/sprout-react-hooks";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { AlertModalArgTypes } from "./AlertModal.argTypes";

const meta: Meta<typeof AlertModal> = {
  title: "Components/AlertModal",
  component: AlertModal,
};

export default meta;

export const ErrorVariant: StoryObj<typeof AlertModal> = {
  name: "Error",
  args: {
    visible: true,
    title: "Could not fetch data",
    children: "The system could not connect to the server, or the server has timed out.",
    variant: "error",
  },
  argTypes: AlertModalArgTypes,
  parameters: {},
  render: ({ children, ...props }) => {
    const container = useContainer({ boxSizing: "border-box" });

    return (
      <AlertModal
        ref={container.ref}
        {...props}
        footerRight={
          <Button label="Ok" variant="default" justified={container.get<boolean>({ xxs: true, s: false })} />
        }
      >
        {children}
      </AlertModal>
    );
  },
};

export const WarningVariant: StoryObj<typeof AlertModal> = {
  name: "Warning",
  args: {
    visible: true,
    title: "Incomplete form",
    children: "Some values may be missing. Do you want to continue?",
    variant: "warning",
  },
  argTypes: AlertModalArgTypes,
  parameters: {},
  render: ({ children, ...props }) => {
    const container = useContainer({ boxSizing: "border-box" });

    return (
      <AlertModal
        ref={container.ref}
        {...props}
        footerRight={
          <>
            <Button label="Cancel" variant="quiet" justified={container.get<boolean>({ xxs: true, s: false })} />
            <Button label="Continue" variant="default" justified={container.get<boolean>({ xxs: true, s: false })} />
          </>
        }
      >
        {children}
      </AlertModal>
    );
  },
};

export const InformationVariant: StoryObj<typeof AlertModal> = {
  name: "Information",
  args: {
    visible: true,
    title: "Dialog Title",
    children: "Lorem ipsum dolor sit amet.",
    variant: "information",
  },
  argTypes: AlertModalArgTypes,
  parameters: {},
  render: ({ children, ...props }) => {
    const container = useContainer({ boxSizing: "border-box" });
    return (
      <AlertModal
        ref={container.ref}
        {...props}
        footerRight={
          <>
            <Button label="Cancel" variant="quiet" justified={container.get<boolean>({ xxs: true, s: false })} />
            <Button label="Continue" variant="default" justified={container.get<boolean>({ xxs: true, s: false })} />
          </>
        }
      >
        {children}
      </AlertModal>
    );
  },
};

export const Details: StoryObj<typeof AlertModal> = {
  args: {
    visible: true,
    title: "Account suspended",
    children: "Your account has been suspended due to suspicious activity. Contact customer service for assistance.",
    details: (
      <span className={classNames("text-default", "break-all")}>
        The requested service &apos;GoogleDriveConnector
        (Qlik.Connectors.SDK.Common.Source.IFileHostingProviderSource)&apos; has not been registered. To avoid this
        exception, either register a component to provide the service, check for service registration using
        IsRegistered(), or use the ResolveOptional() method to resolve an optional dependency.
      </span>
    ),
    variant: "error",
  },
  argTypes: AlertModalArgTypes,
  parameters: {},
  render: ({ children, ...props }) => {
    const container = useContainer({ boxSizing: "border-box" });
    return (
      <AlertModal
        ref={container.ref}
        {...props}
        footerRight={
          <>
            <Button label="Cancel" variant="quiet" justified={container.get<boolean>({ xxs: true, s: false })} />
            <Button label="Continue" variant="default" justified={container.get<boolean>({ xxs: true, s: false })} />
          </>
        }
      >
        {children}
      </AlertModal>
    );
  },
};

export const TextContentWithEllipsis: StoryObj<typeof AlertModal> = {
  args: {
    visible: true,
    title: "Delete account",
    children: (
      <div className={classNames("truncate", "overflow-hidden")}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
        dapibus diam.
        2025-09-26_project_backup_user_documents_financial_reports_Q3_Q4_consolidated_version_final_review_approved_by_john_doe_confidential_v2.0_extra_long_filename_example_with_additional_metadata_and_hash_3f4a9b1c.tar.gz
      </div>
    ),
    variant: "error",
  },
  argTypes: AlertModalArgTypes,
  parameters: {},
  render: ({ children, ...props }) => (
    <AlertModal {...props} footerRight={<Button label="Cancel now" variant="quiet" />}>
      {children}
    </AlertModal>
  ),
};

export const TextContentWithoutEllipsis: StoryObj<typeof AlertModal> = {
  args: {
    visible: true,
    title: "Delete account",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis sed felis at laoreet. Praesent pellentesque odio vel tellus elementum, quis vulputate est sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec nec urna eget dolor molestie interdum imperdiet nec ex. Sed et neque tempus, finibus augue sed, egestas mauris. Vivamus vitae magna congue, eleifend massa vel, fringilla massa. Fusce fermentum, lectus feugiat scelerisque viverra, nulla enim finibus turpis, in vulputate leo nunc ac felis. Duis non elementum felis. Aliquam molestie tortor eu nunc pulvinar, nec tempor tellus faucibus. Maecenas euismod nisi sed tortor tincidunt, quis vestibulum odio venenatis. ",
    variant: "error",
  },
  argTypes: AlertModalArgTypes,
  parameters: {},
  render: ({ children, ...props }) => (
    <AlertModal {...props} footerRight={<Button label="Cancel now" variant="quiet" />}>
      {children}
    </AlertModal>
  ),
};
