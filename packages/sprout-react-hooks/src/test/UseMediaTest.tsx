import sprout from "@qlik/sprout-css-modules";
import { useMedia } from "../useMedia";

const CELL_CLASS = sprout.classNames("border_default", "flex", "ai_center", "p_m");
export function UseMediaTest() {
  const media = useMedia();
  return (
    <div
      data-testid="grid"
      data-viewport={media.getViewportSize()}
      data-get={JSON.stringify(
        media.get<{ test: string }>({ s: { test: "small" }, m: { test: "medium" }, l: { test: "large" } }),
      )}
      className={media.classNames({
        s: ["grid", "grid_cols_16", "gap_m"],
      })}
    >
      <div className={media.classNames({ s: "col_span_16", m: ["col_span_8"], l: "col_span_4" }, CELL_CLASS)}>
        col 1
      </div>
      <div className={media.classNames({ s: "col_span_16", m: ["col_span_8"], l: "col_span_4" }, CELL_CLASS)}>
        col 2
      </div>
      <div className={media.classNames({ s: "col_span_16", m: ["col_span_8"], l: "col_span_4" }, CELL_CLASS)}>
        col 3
      </div>
      <div className={media.classNames({ s: "col_span_16", m: ["col_span_8"], l: "col_span_4" }, CELL_CLASS)}>
        col 4
      </div>
      <div className={media.classNames({ s: "col_span_16", m: ["col_span_8"], l: "col_span_4" }, CELL_CLASS)}>
        col 5
      </div>
    </div>
  );
}
