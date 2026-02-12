import { type ReactNode, useEffect, useState } from "react";

import { sql } from "@codemirror/lang-sql";
import { tags as t } from "@lezer/highlight";
import {
  Accordion,
  Avatar,
  Badge,
  type BadgeProps,
  Button,
  ButtonGroup,
  IconButton,
  List,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabsContainer,
  TextField,
  Thumbnail,
  Toast,
  type ToastProps,
  ToggleButton,
  classNames,
} from "@qlik/sprout-react";
import Add from "@qlik/sprout-icons/react/Add";
import Back from "@qlik/sprout-icons/react/Back";
import CommentOutline from "@qlik/sprout-icons/react/CommentOutline";
import DatabaseArrow from "@qlik/sprout-icons/react/DatabaseArrow";
import DatabaseArrowInOutline from "@qlik/sprout-icons/react/DatabaseArrowInOutline";
import DebugOutline from "@qlik/sprout-icons/react/DebugOutline";
import DropdownArrow from "@qlik/sprout-icons/react/DropdownArrow";
import Folder from "@qlik/sprout-icons/react/Folder";
import Forward from "@qlik/sprout-icons/react/Forward";
import HistoryIcon from "@qlik/sprout-icons/react/History";
import Indent from "@qlik/sprout-icons/react/Indent";
import LockOutline from "@qlik/sprout-icons/react/LockOutline";
import RunScript from "@qlik/sprout-icons/react/RunScript";
import { createTheme } from "@uiw/codemirror-themes";
import CodeMirror from "@uiw/react-codemirror";

export default {
  title: "Examples/DataLoaderEditor",
};

const sproutTheme = createTheme({
  theme: "light",
  settings: {
    background: "var(--sprout-common-background-color-default)",
    backgroundImage: "",
    foreground: "var(--sprout-script-color-default)",
    caret: "var(--sprout-script-color-default)",
    selection: "highlight",
    selectionMatch: "var(--sprout-selected-background-color-weak)",
    gutterBackground: "var(--sprout-common-background-color-weak)",
    gutterForeground: "var(--sprout-common-foreground-color-weak)",
    gutterBorder: "var(--sprout-common-divider-default-color)",
    gutterActiveForeground: "",
    // lineHighlight must be semi transparent DLS-149
    // lineHighlight: 'var(--sprout-NEEDED_TOKEN)',
  },
  styles: [
    { tag: t.keyword, color: "var(--sprout-script-color-keyword)" },
    {
      tag: [t.name, t.deleted, t.character, t.macroName],
      color: "var(--sprout-script-color-variable)",
    },
    { tag: [t.propertyName], color: "var( --sprout-script-color-function)" },
    {
      tag: [t.processingInstruction, t.string, t.inserted, t.special(t.string)],
      color: "var(--sprout-script-color-string)",
    },
    {
      tag: [t.function(t.variableName), t.labelName],
      color: "var( --sprout-script-color-function)",
    },
    {
      tag: [t.color, t.constant(t.name), t.standard(t.name)],
      color: "var(--sprout-script-color-variable)",
    },
    {
      tag: [t.definition(t.name), t.separator],
      color: "var(--sprout-script-color-variable)",
    },
    { tag: [t.className], color: "var(--sprout-script-color-function)" },
    {
      tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace],
      color: "var(--sprout-script-color-measure)",
    },
    { tag: [t.operatorKeyword], color: "var(--sprout-script-color-keyword)" },
    {
      tag: [t.url, t.escape, t.regexp, t.link],
      color: "var(--sprout-script-color-string)",
    },
    { tag: [t.meta, t.comment], color: "var(--sprout-script-color-comment)" },
    { tag: t.tagName, color: "var(--sprout-script-color-keyword)" },
    { tag: t.strong, fontWeight: "bold" },
    { tag: t.emphasis, fontStyle: "italic" },
    { tag: t.link, textDecoration: "underline" },
    {
      tag: t.heading,
      fontWeight: "bold",
      color: "var(--sprout-script-color-default)",
    },
    {
      tag: [t.atom, t.bool, t.special(t.variableName)],
      color: "var(--sprout-script-color-variable)",
    },
    { tag: t.invalid, color: "var(--sprout-danger-color-default)" },
    { tag: t.strikethrough, textDecoration: "line-through" },
  ],
});

function DataSourceItem({
  icon,
  label,
  badge,
}: {
  icon: ReactNode;
  label: string;
  badge?: BadgeProps;
}) {
  return (
    <ListItem hasPadding={false}>
      <div
        className={classNames(
          "flex",
          "flex-row",
          "border-box",
          "gap-m",
          "items-center",
        )}
      >
        <IconButton
          variant="quiet"
          aria-label="open"
          icon={<DropdownArrow />}
        />
        <Thumbnail size="s" type="icon">
          {icon}
        </Thumbnail>
        {label}
        {badge ? <Badge {...badge} /> : null}
      </div>
    </ListItem>
  );
}

export function Default() {
  const [code, setCode] = useState(INITIAL_VALUE);
  const [toast, setToast] = useState<ToastProps["Content"] | null>({
    message: "Connection to My Workday db established",
    severity: "success",
    onClose: () => {},
  });

  useEffect(() => {
    setTimeout(() => {
      setToast(null);
    }, 5000);
  }, []);

  return (
    <div
      className={classNames(
        "flex",
        "flex-col",
        "border-box",
        "size-full",
        "bg-default",
      )}
    >
      <div
        className={classNames(
          "flex",
          "flex-row",
          "border-box",
          "items-center",
          "gap-m",
          "border-default",
        )}
        data-frame="75"
        style={{
          padding:
            "calc(var(--sprout-common-spacing-m) - var(--sprout-common-border-default-width))",
        }}
      >
        <div
          className={classNames(
            "flex",
            "flex-row",
            "border-box",
            "gap-m",
            "items-center",
            "w-full",
          )}
          data-frame="77"
        >
          <ButtonGroup>
            <ToggleButton
              label="Input"
              icon={<DatabaseArrowInOutline />}
              toggled
            />
            <ToggleButton label="History" icon={<HistoryIcon />} />
            <ToggleButton label="Output" icon={<DatabaseArrow />} />
          </ButtonGroup>
          <div
            className={classNames(
              "flex",
              "flex-row",
              "border-box",
              "items-center",
              "grow",
            )}
            data-frame="84"
          >
            <IconButton
              label="Label"
              variant="quiet"
              icon={<CommentOutline />}
            />
            <IconButton label="Label" variant="quiet" icon={<Indent />} />
            <IconButton label="Label" variant="quiet" icon={<Indent />} />
          </div>
          <div
            className={classNames(
              "flex",
              "flex-row",
              "border-box",
              "gap-m",
              "items-center",
            )}
            data-frame="83"
          >
            <Avatar
              size="s"
              text="OP"
              badge={<Badge variant="alphanumeric" text="1" color="success" />}
            />
            <div
              className={classNames(
                "flex",
                "flex-row",
                "border-box",
                "items-center",
                "justify-end",
              )}
            >
              No script changes
            </div>
            <Button variant="primary" label="Run script" icon={<RunScript />} />
          </div>
        </div>
      </div>
      {/* Panel should help to avoid the calc on height */}
      <div
        className={classNames(
          "flex",
          "flex-row",
          "border-box",
          "items-start",
          "w-full",
        )}
        data-frame="Content and panels"
        style={{
          blockSize: "calc(100vh - 48px - 40px)",
        }}
      >
        <div
          className={classNames(
            "flex",
            "flex-row",
            "border-box",
            "h-full",
            "border-b-default",
            "border-r-default",
          )}
          data-frame="68"
        >
          <div
            className={classNames("flex", "flex-col", "border-box", "h-full")}
            data-frame="72"
            style={{
              inlineSize: "var(--sprout-container-sizing-xxs)",
              backgroundColor: "var(--sprout-common-background-color-weak)",
            }}
          >
            <Accordion.Container variant="default" openedDefault={1}>
              <Accordion.Item header="Catalog">Hello Catalog</Accordion.Item>
              <Accordion.Item header="Sources">
                <form
                  className={classNames(
                    "flex",
                    "flex-row",
                    "border-box",
                    "gap-m",
                    "p-m",
                    "border-b-weak",
                  )}
                >
                  <TextField type="search" placeholder="Search sources" />
                </form>
                <List>
                  <DataSourceItem icon={<Folder />} label="Cloud data files" />
                  <DataSourceItem
                    icon={<Snowflake />}
                    label="My Snowflake db"
                  />
                </List>
              </Accordion.Item>
            </Accordion.Container>
          </div>
        </div>
        <div
          className={classNames(
            "flex",
            "flex-col",
            "border-box",
            "h-full",
            "grow",
            "border-b-default",
          )}
          data-frame="70"
        >
          <div
            className={classNames("flex", "flex-row", "border-box", "h-full")}
            data-frame="Content area"
          >
            {/* avoir row number as it will be part of the editor */}
            <div
              className={classNames(
                "flex",
                "flex-col",
                "border-box",
                "items-start",
                "w-full",
              )}
              data-frame="80"
            >
              <div
                className={classNames(
                  "flex",
                  "flex-row",
                  "border-box",
                  "items-center",
                  "border-b-default",
                  "w-full",
                  "pb-xs",
                  "pt-xs",
                )}
                data-frame="71"
              >
                <TabsContainer defaultActiveKey="Main" size="s">
                  <TabList showTrack>
                    <Tab aria-controls="Main" title="Main" />
                    <Tab
                      aria-controls="Auto-generated section"
                      title="Auto-generated section"
                      icon={<LockOutline />}
                    />
                  </TabList>
                  <TabPanel id="lorem">Lorem</TabPanel>
                  <TabPanel id="ipsum">Ipsum</TabPanel>
                  {/* add one tab panel per tab */}
                </TabsContainer>
                <IconButton
                  aria-label="Create a new loader"
                  size="small"
                  variant="quiet"
                  icon={<Add />}
                />
                <div
                  className={classNames(
                    "flex",
                    "flex-row",
                    "border-box",
                    "grow",
                    "items-center",
                    "flex-row",
                    "gap-m",
                    "px-m",
                    "justify-end",
                  )}
                  data-frame="76"
                >
                  <div className={classNames("flex", "border-box", "w-fit")}>
                    <TextField type="search" placeholder="Search script" />
                  </div>
                  <IconButton
                    label="Undo"
                    size="small"
                    variant="quiet"
                    icon={<Back />}
                  />
                  <IconButton
                    label="Redo"
                    size="small"
                    variant="quiet"
                    icon={<Forward />}
                  />
                </div>
              </div>
              <div
                className={classNames(
                  "flex",
                  "flex-row",
                  "border-box",
                  "h-full",
                  "w-full",
                )}
              >
                <CodeMirror
                  theme={sproutTheme}
                  value={code}
                  height="100%"
                  width="100%"
                  extensions={[sql({})]}
                  onChange={(e) => {
                    setCode(e);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          "flex",
          "flex-row",
          "border-box",
          "items-center",
          "justify-end",
          "gap-m",
          "p-m",
          "w-full",
          "bg-weak",
        )}
        data-frame="46 footer"
      >
        <span className={classNames("font-label-s-emphasized", "text-weak")}>
          Last run:
        </span>
        <span className={classNames("font-label-s", "text-weak")}>
          2 days ago
        </span>
        <ToggleButton size="small" label="Debug" icon={<DebugOutline />} />
      </div>
      <Toast.Container placement="bottom">
        {toast ? <Toast.Content {...toast} /> : null}
      </Toast.Container>
    </div>
  );
}

Default.parameters = {
  layout: "fullscreen",
  chromatic: { disableSnapshot: true },
};

const INITIAL_VALUE = `SET ThousandSep=',';
SET DecimalSep='.';
SET MoneyThousandSep=',';
SET MoneyDecimalSep='.';
SET MoneyFormat='$ ###0.00;-$ ###0.00';
SET TimeFormat='h:mm:ss TT';
SET DateFormat='M/D/YYYY';
SET TimestampFormat='M/D/YYYY h:mm:ss[.fff] TT';
SET FirstWeekDay=6;
SET BrokenWeeks=1;
SET ReferenceDay=0;
SET FirstMonthOfYear=1;
SET CollationLocale='en-US';
SET CreateSearchIndexOnReload=1;
SET MonthNames='Jan;Feb;Mar;Apr;May;Jun;Jul;Aug;Sep;Oct;Nov;Dec';
SET LongMonthNames='January;February;March;April;May;June;July;August;September;October;November;December';
SET DayNames='Mon;Tue;Wed;Thu;Fri;Sat;Sun';
SET LongDayNames='Monday;Tuesday;Wednesday;Thursday;Friday;Saturday;Sunday';
SET NumericalAbbreviation='3:k;6:M;9:G;12:T;15:P;18:E;21:Z;24:Y;-3:m;-6:μ;-9:n;-12:p;-15:f;-18:a;-21:z;-24:y';`;

function Snowflake() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_3997_614"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="6"
        y="7"
        width="5"
        height="5"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.60767 7.54626H10.5349V11.8588H6.60767V7.54626Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_3997_614)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.1708 9.07205L7.69772 7.64332C7.3503 7.44333 6.90613 7.56219 6.70507 7.90988C6.62718 8.04652 6.59645 8.19718 6.61128 8.34353V11.1355C6.61128 11.5347 6.93551 11.8589 7.33548 11.8589C7.73464 11.8589 8.05887 11.5347 8.05887 11.1355V9.52997L9.44448 10.3302C9.79189 10.5312 10.2371 10.4113 10.4371 10.0639C10.6382 9.71647 10.5193 9.27203 10.1708 9.07205Z"
          fill="#29B5E8"
        />
      </g>
      <mask
        id="mask1_3997_614"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="3"
        width="5"
        height="6"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.127502 3.86047H4.0204V8.15502H0.127502V3.86047Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask1_3997_614)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.0203 6.01044C4.02462 5.75251 3.88878 5.51237 3.66561 5.383L1.19249 3.95534C1.08495 3.89336 0.96178 3.86047 0.838609 3.86047C0.58499 3.86047 0.349159 3.99631 0.222753 4.21543C0.0270812 4.55449 0.143784 4.98923 0.482841 5.1849L1.90834 6.00721L0.482841 6.83059C0.318703 6.92547 0.200653 7.07801 0.152139 7.26129C0.102817 7.44429 0.128152 7.63592 0.222753 7.80033C0.349159 8.01918 0.58499 8.15502 0.837531 8.15502C0.96178 8.15502 1.08495 8.12241 1.19249 8.06015L3.66561 6.63277C3.88662 6.5042 4.02246 6.26622 4.0203 6.01044Z"
          fill="#29B5E8"
        />
      </g>
      <mask
        id="mask2_3997_614"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="1"
        y="0"
        width="5"
        height="5"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.38977 0.143066H5.33203V4.46904H1.38977V0.143066Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask2_3997_614)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.7536 2.94366L4.22673 4.37131C4.51511 4.53868 4.87088 4.48397 5.09836 4.26189C5.24255 4.12901 5.33203 3.93954 5.33203 3.72904V0.867539C5.33203 0.4673 5.0078 0.143066 4.60891 0.143066C4.20867 0.143066 3.88443 0.4673 3.88443 0.867539V2.49625L2.47996 1.68553C2.13255 1.48447 1.68838 1.60333 1.48731 1.95074C1.28625 2.29816 1.40619 2.7426 1.7536 2.94366Z"
          fill="#29B5E8"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.43971 6.00634V5.99582C6.43971 5.95594 6.41653 5.89988 6.38823 5.8705L6.0985 5.58211C6.0702 5.55246 6.01441 5.52928 5.97344 5.52928H5.96266C5.92277 5.52928 5.86698 5.55246 5.8376 5.58211L5.54894 5.8705C5.52064 5.89907 5.49746 5.95486 5.49746 5.99582V6.00634C5.49746 6.0473 5.52064 6.10309 5.54894 6.13166L5.8376 6.42113C5.86698 6.4497 5.92277 6.47261 5.96266 6.47261H5.97344C6.01441 6.47261 6.0702 6.4497 6.0985 6.42113L6.38823 6.13166C6.41653 6.10309 6.43971 6.0473 6.43971 6.00634ZM7.31457 6.12627C7.31457 6.18099 7.28304 6.25699 7.24396 6.29688L6.26398 7.27713C6.2249 7.31594 6.14809 7.34774 6.09338 7.34774H5.8438C5.78909 7.34774 5.71227 7.31594 5.67319 7.27713L4.69214 6.29688C4.65305 6.25699 4.62152 6.18099 4.62152 6.12627V5.87697C4.62152 5.82117 4.65305 5.74517 4.69214 5.70636L5.67319 4.72503C5.71227 4.68622 5.78909 4.65442 5.8438 4.65442H6.09338C6.14809 4.65442 6.2249 4.68622 6.26398 4.72503L7.24396 5.70636C7.28304 5.74517 7.31457 5.82117 7.31457 5.87697V6.12627Z"
        fill="#29B5E8"
      />
      <mask
        id="mask3_3997_614"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="6"
        y="0"
        width="5"
        height="5"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.60803 0.143066H10.5348V4.46905H6.60803V0.143066Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask3_3997_614)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.6978 4.37119L10.1709 2.94354C10.5183 2.74355 10.6383 2.2983 10.4372 1.95089C10.2362 1.60321 9.79198 1.48435 9.4443 1.68541L8.05896 2.48562V0.867417C8.05896 0.467448 7.73473 0.142944 7.33557 0.142944C6.9356 0.142944 6.61137 0.467448 6.61137 0.867417V3.67205C6.59762 3.81732 6.62592 3.96906 6.70489 4.10598C6.90595 4.45339 7.35039 4.57225 7.6978 4.37119Z"
          fill="#29B5E8"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.72252 7.5592C4.55838 7.52767 4.38239 7.55381 4.2266 7.64329L1.75348 9.07203C1.40607 9.27201 1.28613 9.71645 1.48719 10.0639C1.68825 10.4124 2.13269 10.5312 2.48011 10.3301L3.88458 9.51943V11.1357C3.88458 11.5346 4.20881 11.8589 4.60878 11.8589C5.00794 11.8589 5.33218 11.5346 5.33218 11.1357V8.27397C5.33218 7.91282 5.06778 7.61392 4.72252 7.5592Z"
        fill="#29B5E8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.7164 4.20696C11.5164 3.85847 11.0709 3.73961 10.7235 3.94067L8.25062 5.36833C8.01372 5.50497 7.883 5.75563 7.88731 6.01033C7.88515 6.26421 8.01587 6.51163 8.25062 6.6464L10.7235 8.07513C11.0709 8.27511 11.5153 8.15598 11.7164 7.80857C11.9175 7.46116 11.7975 7.01699 11.4501 6.81592L10.0497 6.00736L11.4501 5.1988C11.7986 4.99881 11.9175 4.55437 11.7164 4.20696Z"
        fill="#29B5E8"
      />
    </svg>
  );
}
