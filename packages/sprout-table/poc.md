import { classNames } from "@qlik/sprout-react";
import { makeEntity } from "./examples/entity";

export default {
title: "poc/grid",
};

export const Grid = {
render: (props) => {
const colInfo = {
type: { width: 100 },
name: { width: 200 },
department: { width: 150 },
status: { width: 120 },
};
return (

<div
role="grid"
className={classNames(
"flex",
"flex_col",
"border_box",
"w_full",
"radius_subtle",
"border_default",
"overflow_auto",
)}
style={{
          blockSize: "400px",
          inlineSize: "400px",
          scrollbarWidth: "none",
        }} >
{/_ Wrapper crucial : force la largeur min pour que les bordures ne s'arrêtent pas _/}
<div style={{ minInlineSize: "max-content", display: "flex", flexDirection: "column" }}>
<div
role="row"
className={classNames("flex_noreset", "flex_nowrap", "border_box", "border_b_default", "bg_default")}
style={{
              position: "sticky",
              insetBlockStart: 0,
              zIndex: 1,
            }} >
<div
role="columnheader"
className={classNames("flex", "shrink_0", "break_words", "items_center", "px_m", "py_m", "border_box")}
style={{
                inlineSize: `${colInfo.type.width}px`,
                position: "sticky",
                insetInlineStart: 0,
                zIndex: 3,
              }} >
Type
</div>
<div
role="columnheader"
className={classNames("flex", "shrink_0", "break_words", "items_center", "px_m", "py_m", "border_box")}
style={{
                inlineSize: `${colInfo.name.width}px`,
              }} >
Name
</div>
<div
role="columnheader"
className={classNames("flex", "shrink_0", "break_words", "items_center", "px_m", "py_m", "border_box")}
style={{
                inlineSize: `${colInfo.department.width}px`,
              }} >
Department
</div>
<div
role="columnheader"
className={classNames("flex", "shrink_0", "break_words", "items_center", "px_m", "py_m", "border_box")}
style={{
                inlineSize: `${colInfo.status.width}px`,
              }} >
Status
</div>
</div>

          {/* Data Rows */}
          {props.rows.map((row, index) => (
            <div
              key={row.id}
              role="row"
              className={classNames("flex_noreset", "flex_nowrap", "border_box", "border_b_default")}
              style={{}}
            >
              <div
                role="gridcell"
                className={classNames("flex", "shrink_0", "break_words", "items_center", "px_m", "py_m", "border_box")}
                style={{
                  inlineSize: `${colInfo.type.width}px`,
                  position: "sticky",
                  insetInlineStart: 0,
                  zIndex: 3,
                }}
              >
                {row.type}
              </div>
              <div
                role="gridcell"
                className={classNames("flex", "shrink_0", "break_words", "items_center", "px_m", "py_m", "border_box")}
                style={{
                  inlineSize: `${colInfo.name.width}px`,
                }}
              >
                {row.name}
              </div>
              <div
                role="gridcell"
                className={classNames("flex", "shrink_0", "break_words", "items_center", "px_m", "py_m", "border_box")}
                style={{
                  inlineSize: `${colInfo.department.width}px`,
                }}
              >
                {row.type}
              </div>
              <div
                role="gridcell"
                className={classNames(
                  "flex",
                  "shrink_0",
                  "break_words",
                  "items_center",
                  "px_m",
                  "py_m",
                  "border_box",
                  "shrink_0",
                )}
                style={{
                  inlineSize: `${colInfo.status.width}px`,
                }}
              >
                <span className={classNames("py_xs", "px_s", "radius_subtle")} style={{}}>
                  {row.space}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

},
args: {
rows: makeEntity(100),
},
};
