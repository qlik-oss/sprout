// remember to provide dependency free API !

const theme = {
  // color
  backgroundColor: "var(--sprout-common-background-color-default)",
  foregroundColor: "var(--sprout-common-foreground-color-default)",
  // border
  columnBorder: true,
  headerColumnBorder: true,
  borderColor: "var(--sprout-common-border-default-color)",
  borderRadius: "var(--sprout-common-border-radius-subtle)",
  rowBorder: "var(--sprout-common-divider-default)",
  // todo cell border ?
  // spacing
  // spacing: 10,
  // rowHeight: "100%",

  //fonts
  fontFamily: "var(--sprout-label-font-s-font-family)",
  fontSize: "var(--sprout-label-font-s-font-size)",

  headerFontFamily: "var(--sprout-heading-font-s-font-family)",
  headerFontWeight: "var(--sprout-heading-font-s-font-weight)",
  // headerFontLineHeight: "var(--sprout-heading-font-s-line-height)",
  headerFontSize: "var(--sprout-heading-font-s-font-size)",
  headerBackgroundColor: "var(--sprout-common-background-color-weak)",
  wrapperBorderRadius: 4,
};

const DEFAULT_COLUMN_DEFINITIONS = {
  flex: 1,
  resizable: false,
  sortable: true,
  maxWidth: 512,
  minWidth: 128,
};

export const AgGrid33 = {
  DEFAULT_COLUMN_DEFINITIONS,
  theme,
};
