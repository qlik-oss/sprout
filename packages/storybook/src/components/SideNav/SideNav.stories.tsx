import {
  Divider,
  List,
  ListItem,
  SideNav,
  type SideNavProps,
  classNames,
} from "@qlik/sprout-react";
import {
  CloudUploadIcon,
  FavoriteIcon,
  HistoryIcon,
  ShareIcon,
  UploadIcon,
} from "@qlik/sprout-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  SideNavItemArgTypes,
  SideNavLinkArgTypes,
  SideNavNavArgTypes,
  SideNavSectionArgTypes,
} from "./SideNav.argTypes";

const meta: Meta<typeof SideNav.Nav> = {
  title: "Components/SideNavigation",
  component: SideNav.Nav,
};

const disableSnapshot = { chromatic: { disableSnapshot: true } };

export default meta;

export const Nav: StoryObj<SideNavProps["Nav"]> = {
  name: "SideNav.Nav",
  render: (props) => (
    <div
      className={classNames(
        "flex",
        "border-box",
        "w-xl",
        "border-default",
        "radius-subtle"
      )}
    >
      <SideNav.Nav {...props}>
        <SideNav.Section label="Files">
          <List gap="density-s">
            <ListItem hasPadding={false} interactive>
              <SideNav.Link
                href="#upload"
                icon={<UploadIcon />}
                label="Uploads"
              />
            </ListItem>
            <ListItem hasPadding={false} interactive selected>
              <SideNav.Link
                href="#recent"
                aria-current="page"
                icon={<HistoryIcon />}
                label="Recent"
              />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link
                href="#shared"
                icon={<ShareIcon />}
                label="Shared"
              />
            </ListItem>
          </List>
        </SideNav.Section>
        <Divider />
        <SideNav.Section label="Settings">
          <List gap="density-s">
            <ListItem hasPadding={false} interactive>
              <SideNav.Link href="#profile" label="Profile" />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link
                href="#email"
                label="Email"
                isExternal
                indentation={1}
              />
            </ListItem>
          </List>
        </SideNav.Section>
      </SideNav.Nav>
    </div>
  ),
  argTypes: SideNavNavArgTypes,
  parameters: disableSnapshot,
};

export const Item: StoryObj<SideNavProps["Item"]> = {
  name: "SideNav.Item",
  render: (props) => (
    <div
      className={classNames(
        "flex",
        "border-box",
        "w-xl",
        "border-default",
        "radius-subtle"
      )}
    >
      <SideNav.Item {...props} />
    </div>
  ),
  args: {
    label: "Pinned dashboard",
    icon: "FavoriteIcon",
    indentation: 1,
    isExternal: false,
  },
  argTypes: SideNavItemArgTypes,
  parameters: disableSnapshot,
};

export const Section: StoryObj<SideNavProps["Section"]> = {
  name: "SideNav.Section",
  render: (props) => (
    <div
      className={classNames(
        "flex",
        "border-box",
        "w-xl",
        "border-default",
        "radius-subtle"
      )}
    >
      <SideNav.Nav>
        <SideNav.Section {...props}>
          <List gap="density-s">
            <ListItem hasPadding={false} interactive>
              <SideNav.Link
                href="#dashboards"
                icon={<FavoriteIcon />}
                label="Dashboards"
              />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link
                href="#history"
                icon={<HistoryIcon />}
                label="History"
              />
            </ListItem>
          </List>
        </SideNav.Section>
      </SideNav.Nav>
    </div>
  ),
  args: {
    label: "Workspace",
    level: "h2",
  },
  argTypes: SideNavSectionArgTypes,
  parameters: disableSnapshot,
};

export const Link: StoryObj<SideNavProps["Link"]> = {
  name: "SideNav.Link",
  render: (props) => (
    <div
      className={classNames(
        "flex",
        "border-box",
        "w-xl",
        "border-default",
        "radius-subtle"
      )}
    >
      <SideNav.Link {...props} />
    </div>
  ),
  args: {
    label: "Reports",
    icon: "CloudUploadIcon",
    indentation: 1,
    isExternal: false,
  },
  argTypes: SideNavLinkArgTypes,
  parameters: disableSnapshot,
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
        "border-default"
      )}
    >
      <SideNav.Nav>
        <SideNav.Section label="Default">
          <List gap="density-s">
            <ListItem hasPadding={false} interactive>
              <SideNav.Link
                href="#upload"
                icon={<CloudUploadIcon />}
                label="Uploads"
              />
            </ListItem>
            <ListItem hasPadding={false} interactive selected>
              <SideNav.Link
                href="#recent"
                aria-current="page"
                icon={<HistoryIcon />}
                label="Recent"
              />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link
                href="#shared"
                icon={<ShareIcon />}
                label="Shared"
                isExternal
              />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link
                href="#shared"
                icon={<FavoriteIcon />}
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
                  icon={<CloudUploadIcon />}
                  label="Uploads"
                />
              </ListItem>
              <ListItem hasPadding={false} interactive selected>
                <SideNav.Link
                  variant="compact"
                  href="#recent"
                  aria-current="page"
                  icon={<HistoryIcon />}
                  label="Recent"
                />
              </ListItem>
              <ListItem hasPadding={false} interactive>
                <SideNav.Link
                  variant="compact"
                  href="#shared"
                  icon={<ShareIcon />}
                  label="Shared"
                  isExternal
                />
              </ListItem>
              <ListItem hasPadding={false} interactive>
                <SideNav.Link
                  variant="compact"
                  href="#shared"
                  icon={<FavoriteIcon height={undefined} width={undefined} />}
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
                  icon={<CloudUploadIcon />}
                  aria-label="Uploads"
                />
              </ListItem>
              <ListItem hasPadding={false} interactive selected>
                <SideNav.Link
                  variant="compact"
                  href="#recent"
                  aria-current="page"
                  icon={<HistoryIcon />}
                  aria-label="Recent"
                />
              </ListItem>
              <ListItem hasPadding={false} interactive>
                <SideNav.Link
                  variant="compact"
                  href="#shared"
                  icon={<ShareIcon />}
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
                icon={<CloudUploadIcon />}
                label="Uploads"
              />
            </ListItem>
            <ListItem hasPadding={false} interactive selected>
              <SideNav.Link
                variant="compact"
                href="#recent"
                aria-current="page"
                icon={<HistoryIcon />}
                label="Recent"
              />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link
                variant="compact"
                href="#shared"
                icon={<ShareIcon />}
                label="Shared"
                isExternal
              />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link
                variant="compact"
                href="#shared"
                icon={<FavoriteIcon height={undefined} width={undefined} />}
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
                icon={<CloudUploadIcon />}
                aria-label="Uploads"
              />
            </ListItem>
            <ListItem hasPadding={false} interactive selected>
              <SideNav.Link
                variant="compact"
                href="#recent"
                aria-current="page"
                icon={<HistoryIcon />}
                aria-label="Recent"
              />
            </ListItem>
            <ListItem hasPadding={false} interactive>
              <SideNav.Link
                variant="compact"
                href="#shared"
                icon={<ShareIcon />}
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
