import {
  Divider,
  List,
  ListItem,
  SideNav,
  type SideNavProps,
  classNames,
} from "@qlik/sprout-react";
import CloudUploadIcon from "@qlik/sprout-icons/react/CloudUpload";
import HistoryIcon from "@qlik/sprout-icons/react/History";
import ShareIcon from "@qlik/sprout-icons/react/Share";
import Star2Icon from "@qlik/sprout-icons/react/Star2";
import UploadIcon from "@qlik/sprout-icons/react/Upload";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta = {
  title: "Components/SideNavigation",
  component: SideNav.Nav,
};

const UNZIED_PROPS = { width: undefined, height: undefined };

export default meta;

type PlaygroundArgs = { label: string } & Pick<
  SideNavProps["Item"],
  "indentation" | "isExternal" | "variant"
>;

export const Playground: StoryObj<PlaygroundArgs> = {
  render: ({ label, indentation, isExternal, variant }) => (
    <SideNav.Nav variant={variant}>
      <SideNav.Section label="Files">
        <List gap="density-s">
          <ListItem hasPadding={false} interactive>
            <SideNav.Link
              href="#upload"
              icon={<UploadIcon {...UNZIED_PROPS} />}
              label="Uploads"
              variant={variant}
            />
          </ListItem>
          <ListItem hasPadding={false} interactive selected>
            <SideNav.Link
              href="#recent"
              aria-current="page"
              icon={<HistoryIcon {...UNZIED_PROPS} />}
              label="Recent"
              variant={variant}
            />
          </ListItem>
          <ListItem hasPadding={false} interactive>
            <SideNav.Link
              href="#shared"
              icon={<ShareIcon {...UNZIED_PROPS} />}
              label="Shared"
              variant={variant}
            />
          </ListItem>
        </List>
      </SideNav.Section>
      <Divider />
      <SideNav.Section label="Settings">
        <List>
          <ListItem hasPadding={false} interactive>
            <SideNav.Link href="#profile" label="Profile" variant={variant} />
          </ListItem>
          <ListItem hasPadding={false} interactive>
            <SideNav.Link
              href="#email"
              label="email"
              variant={variant}
              isExternal={isExternal}
              indentation={indentation}
            />
          </ListItem>
          <ListItem hasPadding={false} interactive>
            <a
              href="#password"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <SideNav.Item label={label} variant={variant} />
            </a>
          </ListItem>
        </List>
      </SideNav.Section>
    </SideNav.Nav>
  ),
  args: {
    indentation: 1,
    isExternal: true,
    label: "Custom link",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: [undefined, "compact"],
    },
    indentation: {
      control: {
        type: "number",
      },
    },
    isExternal: {
      control: {
        type: "select",
      },
      options: [undefined, true, false],
    },
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const VisualTest = {
  render: () => (
    <div
      className={classNames(
        "flex",
        "flex-row",
        "w-xl",
        "gap-3xl",
        "p-s",
        "border-default",
      )}
    >
      <SideNav.Nav>
        <SideNav.Section label="Default">
          <List gap="density-s">
            <ListItem hasPadding={false} interactive>
              <SideNav.Link
                href="#upload"
                icon={<CloudUploadIcon {...UNZIED_PROPS} />}
                label="Uploads"
              />
            </ListItem>
            <ListItem hasPadding={false} interactive selected>
              <SideNav.Link
                href="#recent"
                aria-current="page"
                icon={<HistoryIcon {...UNZIED_PROPS} />}
                label="Recent"
              />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link
                href="#shared"
                icon={<ShareIcon {...UNZIED_PROPS} />}
                label="Shared"
                isExternal
              />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link
                href="#shared"
                icon={<Star2Icon {...UNZIED_PROPS} />}
                label="Extra long label with icon"
              />
            </ListItem>
          </List>
        </SideNav.Section>
        <Divider />
        <SideNav.Section label="Settings">
          <List>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link href="#profile" label="Profile" />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link
                href="#email"
                label="email"
                isExternal
                indentation={1}
              />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <a
                href="#password"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", inlineSize: "100%" }}
              >
                <SideNav.Item label="Custom link" />
              </a>
            </ListItem>
          </List>
        </SideNav.Section>
      </SideNav.Nav>
      <div className={classNames("flex", "w-fit")}>
        <SideNav.Nav variant="compact">
          <SideNav.Section label="Compact">
            <List gap="density-s">
              <ListItem hasPadding={false} interactive>
                <SideNav.Link
                  variant="compact"
                  href="#upload"
                  icon={<CloudUploadIcon {...UNZIED_PROPS} />}
                  label="Uploads"
                />
              </ListItem>
              <ListItem hasPadding={false} interactive selected>
                <SideNav.Link
                  variant="compact"
                  href="#recent"
                  aria-current="page"
                  icon={<HistoryIcon {...UNZIED_PROPS} />}
                  label="Recent"
                />
              </ListItem>
              <ListItem hasPadding={false} interactive>
                <SideNav.Link
                  variant="compact"
                  href="#shared"
                  icon={<ShareIcon {...UNZIED_PROPS} />}
                  label="Shared"
                  isExternal
                />
              </ListItem>
              <ListItem hasPadding={false} interactive>
                <SideNav.Link
                  variant="compact"
                  href="#shared"
                  icon={<Star2Icon {...UNZIED_PROPS} />}
                  iconSize="large"
                  label="Extra long label with large icon"
                />
              </ListItem>
            </List>
          </SideNav.Section>
          <Divider />
          <SideNav.Section label="Only Icons">
            <List>
              <ListItem hasPadding={false} interactive>
                <SideNav.Link
                  variant="compact"
                  href="#upload"
                  icon={<CloudUploadIcon {...UNZIED_PROPS} />}
                  aria-label="Uploads"
                />
              </ListItem>
              <ListItem hasPadding={false} interactive selected>
                <SideNav.Link
                  variant="compact"
                  href="#recent"
                  aria-current="page"
                  icon={<HistoryIcon {...UNZIED_PROPS} />}
                  aria-label="Recent"
                />
              </ListItem>
              <ListItem hasPadding={false} interactive>
                <SideNav.Link
                  variant="compact"
                  href="#shared"
                  icon={<ShareIcon {...UNZIED_PROPS} />}
                  aria-label="Shared"
                  isExternal
                />
              </ListItem>
            </List>
          </SideNav.Section>
        </SideNav.Nav>
      </div>

      <SideNav.Nav variant="compact">
        <SideNav.Section label="Compact with more space">
          <List gap="density-s">
            <ListItem hasPadding={false} interactive>
              <SideNav.Link
                variant="compact"
                href="#upload"
                icon={<CloudUploadIcon {...UNZIED_PROPS} />}
                label="Uploads"
              />
            </ListItem>
            <ListItem hasPadding={false} interactive selected>
              <SideNav.Link
                variant="compact"
                href="#recent"
                aria-current="page"
                icon={<HistoryIcon {...UNZIED_PROPS} />}
                label="Recent"
              />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link
                variant="compact"
                href="#shared"
                icon={<ShareIcon {...UNZIED_PROPS} />}
                label="Shared"
                isExternal
              />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link
                variant="compact"
                href="#shared"
                icon={<Star2Icon {...UNZIED_PROPS} />}
                iconSize="large"
                label="Extra long label with large icon"
              />
            </ListItem>
          </List>
        </SideNav.Section>
        <Divider />
        <SideNav.Section label="Only Icons">
          <List>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link
                variant="compact"
                href="#upload"
                icon={<CloudUploadIcon {...UNZIED_PROPS} />}
                aria-label="Uploads"
              />
            </ListItem>
            <ListItem hasPadding={false} interactive selected>
              <SideNav.Link
                variant="compact"
                href="#recent"
                aria-current="page"
                icon={<HistoryIcon {...UNZIED_PROPS} />}
                aria-label="Recent"
              />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link
                variant="compact"
                href="#shared"
                icon={<ShareIcon {...UNZIED_PROPS} />}
                aria-label="Shared"
                isExternal
              />
            </ListItem>
          </List>
        </SideNav.Section>
      </SideNav.Nav>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};
