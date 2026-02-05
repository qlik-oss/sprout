import { Panel } from ".";
import { classNames } from "../classNames";

export function PanelTest() {
  return (
    <div
      className={classNames(
        "flex",
        "flex-row",
        "border-box",
        "w-full",
        "p-l",
        "border-default",
      )}
      style={{ blockSize: "300px" }}
      id="component-testing"
    >
      <Panel.Container overlay>
        <div className={classNames("flex", "flex-row", "border-box")}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            dui nec nunc ultricies tincidunt. Nullam
          </p>
        </div>
        <Panel.Left>
          <div
            className={classNames(
              "flex",
              "flex-row",
              "border-box",
              "p-s",
              "font-body-m",
              "text-default",
            )}
          >
            Panel content
          </div>
        </Panel.Left>
      </Panel.Container>
    </div>
  );
}

export function PanelResizeTest() {
  return (
    <div
      className={classNames(
        "flex",
        "flex-row",
        "border-box",
        "w-full",
        "border-default",
      )}
      style={{ blockSize: "300px" }}
      id="component-testing"
    >
      <Panel.Container overlay>
        <div className={classNames("flex", "flex-row", "border-box")}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            dui nec nunc ultricies tincidunt. Nullam
          </p>
        </div>
        <Panel.Left resizable maxWidth={250}>
          <div
            className={classNames(
              "flex",
              "flex-row",
              "border-box",
              "p-s",
              "font-body-m",
              "text-default",
            )}
          >
            Panel content
          </div>
        </Panel.Left>
      </Panel.Container>
    </div>
  );
}
