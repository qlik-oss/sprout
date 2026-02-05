/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-array-index-key */
import {
  Children,
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import sproutTokens from "@qlik/design-tokens/generated/tokens/json/sprout-tokens.json";
import sprout from "@qlik/sprout-css-modules";
import {
  TextField,
  Toast,
  type ToastProps,
  classNames,
} from "@qlik/sprout-css-react";
import {
  type ColumnDef,
  Table,
  type TableCellParams,
} from "@qlik/sprout-css-table";

export default {
  title: "CSS/Tokens",
};

type TokenData = {
  name: string;
  dimension: string;
  defaultVariant?: string;
  semantic: string;
  usage: string;
};

function getSemantic(key: string) {
  const splitted = key.split("-");
  const slot = splitted[3];
  if (slot === "brand" && splitted[4] === "primary") {
    return "brand-primary";
  }
  return slot;
}

function getUsage(key: string) {
  const splitted = key.split("-");
  let indice = 4;
  const semantic = getSemantic(key);
  if (semantic === "brand-primary") {
    indice = 5;
  }
  let value = splitted[indice];
  if (value === "foreground" && splitted[indice + 1] === "color") {
    value = "foreground-color";
  } else if (value === "background" && splitted[indice + 1] === "color") {
    value = "background-color";
  } else if (value === "border" && splitted[splitted.length - 1] === "width") {
    value = "border-width";
  } else if (value === "border" && splitted[splitted.length - 1] === "style") {
    value = "border-style";
  } else if (value === "border" && splitted[splitted.length - 1] === "color") {
    value = "border-color";
  } else if (value === "border" && splitted[indice + 1] === "radius") {
    value = "border-radius";
  } else if (value === "divider" && splitted[splitted.length - 1] === "width") {
    value = "divider-width";
  } else if (value === "divider" && splitted[splitted.length - 1] === "style") {
    value = "divider-style";
  } else if (value === "divider" && splitted[splitted.length - 1] === "color") {
    value = "divider-color";
  } else if (value === "font") {
    if (splitted[splitted.length - 1] === "size") {
      value = "font-size";
    } else if (splitted[splitted.length - 1] === "weight") {
      value = "font-weight";
    } else if (splitted[splitted.length - 1] === "style") {
      value = "font-style";
    } else if (splitted[splitted.length - 1] === "familly") {
      value = "font-familly";
    } else if (splitted.length === 5) {
      value = "font";
    }
  } else if (value === "nested" || value === "twice") {
    value = "border";
    if (splitted.includes("radius")) {
      value = "border-radius";
    }
  }
  return value;
}

function getTokens() {
  const buff: Array<TokenData> = [];
  Object.keys(sproutTokens)
    .filter(Boolean)
    .forEach((key) => {
      const name = key.replaceAll("_", "-");
      buff.push({
        name,
        defaultVariant: sproutTokens[key as keyof typeof sproutTokens].$value,
        dimension: sproutTokens[key as keyof typeof sproutTokens].$type,
        semantic: getSemantic(name),
        usage: getUsage(name),
      });
    });
  buff.sort((a, b) => a.name.localeCompare(b.name));
  return buff;
}

const ToastContext = createContext<(props: ToastProps["Content"]) => void>(
  () => {},
);

function ToastContainerStory({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Array<ToastProps["Content"]>>([]);
  const addToast = useCallback(
    (message: ToastProps["Content"]) => {
      const id = Math.random().toString();
      setToasts((mystate) => [...mystate, { "data-id": id, ...message }]);
      setTimeout(() => {
        setToasts((current) => current.filter((t) => t["data-id"] !== id));
      }, 3000);
    },
    [setToasts],
  );
  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <Toast.Container placement="bottom">
        {toasts.map((toast, index) => (
          <Toast.Content
            key={index}
            {...toast}
            onClose={() => {
              setToasts((current) => current.filter((t) => t.id !== toast.id));
            }}
          />
        ))}
      </Toast.Container>
    </ToastContext.Provider>
  );
}

function CSSToken({
  children,
  wrap,
}: {
  children: ReactNode;
  wrap: "var" | "sprout";
}) {
  const toastContext = useContext(ToastContext);
  const childString = (Children.toArray(children).join("") || "").toString();
  return (
    <button
      type="button"
      onClick={() => {
        const value =
          wrap === "var" ? `var(${childString})` : `sprout.${childString}`;
        navigator.clipboard
          .writeText(value)
          .then(() => {
            toastContext({ message: "token copied" });
          })
          .catch(() => {
            toastContext({ message: "failed to copy token" });
          });
      }}
      className={sprout.classNames(
        "flex",
        "flex-row",
        "ai-start",
        "border-none",
        "font-script-m",
        "bg-transparent",
        "text-default",
        "w-full",
        "overflow-hidden",
        {
          "px-m": wrap === "sprout",
        },
      )}
      style={{ cursor: "copy", textWrap: "nowrap" }}
    >
      <span style={{ color: "var(--sprout-script-color-string)" }}>
        {childString}
      </span>
    </button>
  );
}

const TOKEN_DATA: Array<TokenData> = getTokens();
const TOKEN_DIMENSIONS = TOKEN_DATA.reduce<Array<string>>((acc, token) => {
  if (!acc.includes(token.dimension)) {
    acc.push(token.dimension);
  }
  return acc;
}, []);
TOKEN_DIMENSIONS.sort();

const TOKEN_SEMANTICS = TOKEN_DATA.reduce<Array<string>>((acc, token) => {
  if (!acc.includes(token.semantic)) {
    acc.push(token.semantic);
  }
  return acc;
}, []);
TOKEN_SEMANTICS.sort();

const TOKEN_USAGES = TOKEN_DATA.reduce<Array<string>>((acc, token) => {
  if (!acc.includes(token.usage)) {
    acc.push(token.usage);
  }
  return acc;
}, []);
TOKEN_USAGES.sort();

function TokenNameCellRenderer({ colDef, row }: TableCellParams<TokenData>) {
  const colId = colDef.field;
  if (colId) {
    return <CSSToken wrap="var">{row[colId]}</CSSToken>;
  }
  return null;
}

function TokenValueCellRenderer({ colDef, row }: TableCellParams<TokenData>) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(colDef.field ? row[colDef.field] : "");
  useEffect(() => {
    if (ref.current) {
      setValue(
        getComputedStyle(ref.current).getPropertyValue(
          ref.current.dataset.key || "color",
        ),
      );
    }
  }, []);
  if (row.usage === "border") {
    return (
      <div
        className={classNames(
          "flex",
          "flex-row",
          "border-box",
          "items-center",
          "bg-default",
          "p-s",
          "h-full",
        )}
      >
        <div
          className={classNames("flex", "flex-row", "border-box")}
          style={{
            border: `var(${row.name})`,
            inlineSize: "20px",
            blockSize: "20px",
          }}
        />
      </div>
    );
  }
  if (row.usage === "divider") {
    return (
      <div
        className={classNames(
          "flex",
          "flex-row",
          "border-box",
          "items-center",
          "bg-default",
          "p-s",
          "h-full",
        )}
      >
        <div
          className={classNames("flex", "flex-row", "border-box")}
          style={{
            borderBlockStart: `var(${row.name})`,
            inlineSize: "100px",
            blockSize: "2px",
          }}
        />
      </div>
    );
  }
  if (row.usage === "foreground-color") {
    return (
      <div
        className={classNames(
          "flex",
          "flex-row",
          "border-box",
          "items-center",
          "p-s",
          "h-full",
          "w-full",
          {
            "bg-default": row.semantic !== "inverse",
            "bg-inverse": row.semantic === "inverse",
          },
        )}
      >
        <div
          className={classNames(
            "flex",
            "flex-row",
            "border-box",
            "font-label-s",
            "radius-round",
          )}
          ref={ref}
          data-key="color"
          style={{ color: `var(${row.name})` }}
        >
          {value}
        </div>
      </div>
    );
  }
  if (
    ["background-color", "color", "border-color", "divider-color"].includes(
      row.usage,
    )
  ) {
    return (
      <div
        className={classNames(
          "flex",
          "flex-row",
          "border-box",
          "items-center",
          "p-s",
          "gap-s",
          "size-full",
          "font-label-s",
          {
            "bg-default": row.semantic !== "inverse",
            "bg-inverse": row.semantic === "inverse",
            "text-inverse": row.semantic === "inverse",
            "text-default": row.semantic !== "inverse",
          },
        )}
      >
        <div
          className={classNames(
            "flex",
            "flex-row",
            "border-box",
            "radius-round",
            "border-default",
          )}
          ref={ref}
          data-key="background-color"
          style={{
            backgroundColor: `var(${row.name})`,
            inlineSize: "20px",
            blockSize: "20px",
          }}
        />
        {value}
      </div>
    );
  }
  if (row.usage === "elevation") {
    return (
      <div
        className={classNames(
          "flex",
          "flex-row",
          "border-box",
          "items-center",
          "h-full",
          {
            "bg-inverse": row.semantic === "inverse",
            "bg-default": row.semantic !== "inverse",
          },
        )}
      >
        <div
          className={classNames(
            "flex",
            "flex-row",
            "border-box",
            "items-center",
            "justify-center",
            "radius-subtle",
            "w-fit",
            "bg-default",
            "font-label-xs",
          )}
          style={{
            boxShadow: `var(${row.name})`,
            blockSize: "var(--sprout-common-sizing-xl)",
            whiteSpace: "nowrap",
          }}
        >
          {colDef.field ? row[colDef.field] : null}
        </div>
      </div>
    );
  }
  if (row.dimension === "typography" && row.usage === "font") {
    return (
      <div
        className={classNames(
          "flex",
          "flex-row",
          "border-box",
          "items-center",
          "p-s",
          "h-full",
          {
            "bg-inverse": row.semantic === "inverse",
            "bg-default": row.semantic !== "inverse",
          },
        )}
      >
        <div
          className={classNames(
            "flex",
            "flex-row",
            "border-box",
            "items-center",
            "justify-center",
            "radius-subtle",
            "bg-default",
            "text-nowrap",
            "w-fit",
          )}
          style={{ font: `var(${row.name})` }}
        >
          {colDef.field ? row[colDef.field] : null}
        </div>
      </div>
    );
  }
  return (
    <div
      className={classNames(
        "flex",
        "flex-row",
        "border-box",
        "items-center",
        "h-full",
      )}
    >
      {colDef.field ? row[colDef.field] : null}
    </div>
  );
}

// name: string;
// dimension: string;
// defaultVariant?: Record<string, string>;
// semantic: string;
// variants: Record<string, Record<string, string>>;
const colDef: Array<ColumnDef<TokenData>> = [
  {
    field: "name",
    headerName: "Name",
    renderCell: TokenNameCellRenderer,
    flex: 1,
  },
  {
    field: "defaultVariant",
    headerName: "Default Variant",
    renderCell: TokenValueCellRenderer,
    width: 300,
  },
  { field: "dimension", headerName: "Dimension", width: 128 },
  { field: "semantic", headerName: "Semantic", width: 128 },
  { field: "usage", headerName: "Usage", width: 128 },
];

export const DataTable = {
  name: "All Tokens",
  render: ({
    name,
    dimension,
    semantic,
    usage,
  }: {
    name?: string;
    dimension?: string;
    semantic?: string;
    usage?: string;
  }) => {
    const [rowData, setRowData] = useState(TOKEN_DATA);
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
      setRowData(
        TOKEN_DATA.filter((token) => {
          const matchName = token.name
            .toLowerCase()
            .includes((name || "").toLowerCase());
          const matchDimension =
            !dimension ||
            token.dimension.toLowerCase() === (dimension || "").toLowerCase();
          const matchSemantic =
            !semantic ||
            token.semantic.toLowerCase() === (semantic || "").toLowerCase();
          const matchUsage =
            !usage || token.usage.toLowerCase() === (usage || "").toLowerCase();

          return matchName && matchDimension && matchSemantic && matchUsage;
        }),
      );
    }, [name, dimension, semantic, usage]);

    const filteredRows = useMemo(
      () =>
        rowData.filter((row) =>
          [
            row.name,
            row.usage,
            row.dimension,
            row.semantic,
            row.defaultVariant,
          ].some((v) => v?.toLowerCase().includes(searchTerm.toLowerCase())),
        ),
      [rowData, searchTerm],
    );

    return (
      <ToastContainerStory>
        <div
          className={classNames(
            "flex",
            "flex-col",
            "border-box",
            "h-screen",
            "overflow-hidden",
            "p-l",
          )}
        >
          <div
            className={classNames(
              "flex",
              "flex-col",
              "gap-m",
              "border-box",
              "size-full",
            )}
          >
            <div className={classNames("flex", "items-center", "w-s")}>
              <TextField
                value={searchTerm}
                type="search"
                placeholder="Search all tokens"
                onChange={(e) => {
                  setSearchTerm(e.target.value || "");
                }}
              />
            </div>
            <div className={classNames("flex-auto", "min-h-0", "w-full")}>
              <Table
                variant="data"
                columns={colDef}
                rowHeight={40}
                rows={filteredRows}
              />
            </div>
          </div>
        </div>
      </ToastContainerStory>
    );
  },

  argTypes: {
    name: {
      control: {
        type: "text",
      },
    },
    dimension: {
      control: {
        type: "select",
      },
      options: [""].concat(TOKEN_DIMENSIONS),
    },
    semantic: {
      control: {
        type: "select",
      },
      options: [""].concat(TOKEN_SEMANTICS),
    },
    usage: {
      control: {
        type: "select",
      },
      options: [""].concat(TOKEN_USAGES),
    },
  },
  parameters: {
    layout: "fullscreen",
    chromatic: { disableSnapshot: true },
  },
};
