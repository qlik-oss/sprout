/* eslint-disable react/no-array-index-key */
import sprout, { type AllClasses } from "@qlik/sprout-css-modules";

import {
  CONTAINER_CLASSES,
  CONTENT_CLASSES,
  GRID_CONTENT_CLASSES,
  PROPERTY_COL_PROPS,
  PROPERTY_ROW_PROPS,
  PropertyTile,
  PropertyValue,
  omit,
} from "./Content";

export default {
  title: "CSS/sprout-css-modules/flexbox & grid",
};

export function Flex() {
  return (
    <div
      className={sprout.classNames(
        "flex",
        "border-box",
        "flex-col",
        "border-none",
        "font-label-s",
        "text-default",
        "bg-default",
      )}
    >
      <div className={sprout.classNames(...PROPERTY_ROW_PROPS)}>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>flex-row</PropertyValue>
          <div className={sprout.classNames(...omit(CONTAINER_CLASSES, "flex-row"), "flex-row")}>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>1</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>2</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>3</div>
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>flex-row-reverse</PropertyValue>
          <div className={sprout.classNames(...omit(CONTAINER_CLASSES, "flex-row"), "flex-row-reverse")}>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>1</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>2</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>3</div>
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>flex-col (default)</PropertyValue>
          <div className={sprout.classNames(...omit(CONTAINER_CLASSES, "flex-row"), "flex-col")}>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>1</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>2</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>3</div>
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>flex-col-reverse</PropertyValue>
          <div className={sprout.classNames(...omit(CONTAINER_CLASSES, "flex-row"), "flex-col-reverse")}>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>1</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>2</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>3</div>
          </div>
        </div>
      </div>
      <div className={sprout.classNames(...PROPERTY_ROW_PROPS)}>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS, "w-s")}>
          <PropertyValue>flex-nowrap</PropertyValue>
          <div className={sprout.classNames(...CONTAINER_CLASSES, "w-xxs")}>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>1</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>2</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>3</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>4</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>5</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>6</div>
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>flex-wrap</PropertyValue>
          <div className={sprout.classNames(...CONTAINER_CLASSES, "w-xxs", "flex-wrap")}>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>1</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>2</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>3</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>4</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>5</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>6</div>
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>flex-wrap-reverse</PropertyValue>
          <div className={sprout.classNames(...CONTAINER_CLASSES, "w-xxs", "flex-wrap-reverse")}>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>1</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>2</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>3</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>4</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>5</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>6</div>
          </div>
        </div>
      </div>
      <div className={sprout.classNames(...PROPERTY_ROW_PROPS, "flex-wrap")}>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS, "w-s")}>
          <PropertyValue>justify-start (default)</PropertyValue>
          <div className={sprout.classNames(...CONTAINER_CLASSES, "w-s")}>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>1</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>2</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>3</div>
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS, "w-s")}>
          <PropertyValue>justify-end</PropertyValue>
          <div className={sprout.classNames(...CONTAINER_CLASSES, "w-s", "justify-end")}>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>1</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>2</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>3</div>
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS, "w-s")}>
          <PropertyValue>justify-center</PropertyValue>
          <div className={sprout.classNames(...CONTAINER_CLASSES, "w-s", "justify-center")}>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>1</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>2</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>3</div>
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS, "w-s")}>
          <PropertyValue>justify-between</PropertyValue>
          <div className={sprout.classNames(...CONTAINER_CLASSES, "w-s", "justify-between")}>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>1</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>2</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>3</div>
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS, "w-s")}>
          <PropertyValue>justify-around</PropertyValue>
          <div className={sprout.classNames(...CONTAINER_CLASSES, "w-s", "justify-around")}>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>1</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>2</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>3</div>
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS, "w-s")}>
          <PropertyValue>justify-evenly</PropertyValue>
          <div className={sprout.classNames(...CONTAINER_CLASSES, "w-s", "justify-evenly")}>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>1</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>2</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>3</div>
          </div>
        </div>
      </div>
      <PropertyTile>items</PropertyTile>
      <div className={sprout.classNames(...PROPERTY_ROW_PROPS, "flex-wrap")}>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS, "w-s")}>
          <PropertyValue>items-stretch (default)</PropertyValue>
          <div className={sprout.classNames(...CONTAINER_CLASSES)} style={{ blockSize: "150px" }}>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>1</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>2</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>3</div>
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS, "w-s")}>
          <PropertyValue>items-start</PropertyValue>
          <div className={sprout.classNames(...CONTAINER_CLASSES, "items-start")} style={{ blockSize: "150px" }}>
            <div className={sprout.classNames(...CONTENT_CLASSES)} style={{ blockSize: "20px" }}>
              1
            </div>
            <div className={sprout.classNames(...CONTENT_CLASSES)} style={{ blockSize: "100px" }}>
              2
            </div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>3</div>
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS, "w-s")}>
          <PropertyValue>items-end</PropertyValue>
          <div className={sprout.classNames(...CONTAINER_CLASSES, "items-end")} style={{ blockSize: "150px" }}>
            <div className={sprout.classNames(...CONTENT_CLASSES)} style={{ blockSize: "20px" }}>
              1
            </div>
            <div className={sprout.classNames(...CONTENT_CLASSES)} style={{ blockSize: "100px" }}>
              2
            </div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>3</div>
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS, "w-s")}>
          <PropertyValue>items-center</PropertyValue>
          <div className={sprout.classNames(...CONTAINER_CLASSES, "items-center")} style={{ blockSize: "150px" }}>
            <div className={sprout.classNames(...CONTENT_CLASSES)} style={{ blockSize: "20px" }}>
              1
            </div>
            <div className={sprout.classNames(...CONTENT_CLASSES)} style={{ blockSize: "100px" }}>
              2
            </div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>3</div>
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS, "w-s")}>
          <PropertyValue>items-baseline</PropertyValue>
          <div
            className={sprout.classNames(
              "flex",
              "border-box",
              "flex-row",
              "w-fit",
              "gap-xl",
              "border-strong",
              "p-xl",
              "bg-inverse",
              "font-body-s",
              "text-inverse",
              "items-baseline",
            )}
          >
            <div
              className={sprout.classNames(
                "flex",
                "border-box",
                "bg-default",
                "border-moderate",
                "font-body-s",
                "text-default",
                "pt-xs",
                "pb-l",
              )}
            >
              <h1 className={sprout.classNames("font-body-s")}>Text text</h1>
            </div>
            <div
              className={sprout.classNames(
                "flex",
                "border-box",
                "bg-default",
                "border-moderate",
                "font-body-s",
                "text-default",
                "pt-m",
                "pb-l",
              )}
            >
              <p className={sprout.classNames("font-body-s")}>Text text</p>
            </div>
            <div
              className={sprout.classNames(
                "flex",
                "border-box",
                "bg-default",
                "border-moderate",
                "font-body-s",
                "text-default",
                "pt-xl",
                "pb-xs",
              )}
            >
              <h2 className={sprout.classNames("font-body-s")}>Text text</h2>
            </div>
          </div>
        </div>
      </div>
      <PropertyTile>content</PropertyTile>
      <div className={sprout.classNames(...PROPERTY_ROW_PROPS, "flex-wrap")}>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>content-start (default)</PropertyValue>
          <div
            className={sprout.classNames(...CONTAINER_CLASSES, "content-start", "flex-wrap")}
            style={{ blockSize: "250px", inlineSize: "200px" }}
          >
            <div className={sprout.classNames(...CONTENT_CLASSES)} style={{ blockSize: "20px" }}>
              1
            </div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>2</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)} style={{ blockSize: "20px" }}>
              3
            </div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>4</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>5</div>
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>content-end</PropertyValue>
          <div
            className={sprout.classNames(...CONTAINER_CLASSES, "flex-wrap", "content-end")}
            style={{ blockSize: "250px", inlineSize: "200px" }}
          >
            <div className={sprout.classNames(...CONTENT_CLASSES)} style={{ blockSize: "20px" }}>
              1
            </div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>2</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)} style={{ blockSize: "20px" }}>
              3
            </div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>4</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>5</div>
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>content-center</PropertyValue>
          <div
            className={sprout.classNames(...CONTAINER_CLASSES, "flex-wrap", "content-center")}
            style={{ blockSize: "250px", inlineSize: "200px" }}
          >
            <div className={sprout.classNames(...CONTENT_CLASSES)} style={{ blockSize: "20px" }}>
              1
            </div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>2</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)} style={{ blockSize: "20px" }}>
              3
            </div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>4</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>5</div>
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>content-stretch</PropertyValue>
          <div
            className={sprout.classNames(...CONTAINER_CLASSES, "flex-wrap", "content-stretch")}
            style={{ blockSize: "250px", inlineSize: "200px" }}
          >
            <div className={sprout.classNames(...CONTENT_CLASSES)} style={{ blockSize: "20px" }}>
              1
            </div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>2</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)} style={{ blockSize: "20px" }}>
              3
            </div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>4</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>5</div>
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>content-between</PropertyValue>
          <div
            className={sprout.classNames(...CONTAINER_CLASSES, "flex-wrap", "content-between")}
            style={{ blockSize: "250px", inlineSize: "200px" }}
          >
            <div className={sprout.classNames(...CONTENT_CLASSES)} style={{ blockSize: "20px" }}>
              1
            </div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>2</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)} style={{ blockSize: "20px" }}>
              3
            </div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>4</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>5</div>
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>content-around</PropertyValue>
          <div
            className={sprout.classNames(...CONTAINER_CLASSES, "flex-wrap", "content-around")}
            style={{ blockSize: "250px", inlineSize: "200px" }}
          >
            <div className={sprout.classNames(...CONTENT_CLASSES)} style={{ blockSize: "20px" }}>
              1
            </div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>2</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)} style={{ blockSize: "20px" }}>
              3
            </div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>4</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>5</div>
          </div>
        </div>
        <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
          <PropertyValue>content-evenly</PropertyValue>
          <div
            className={sprout.classNames(...CONTAINER_CLASSES, "flex-wrap", "content-evenly")}
            style={{ blockSize: "250px", inlineSize: "200px" }}
          >
            <div className={sprout.classNames(...CONTENT_CLASSES)} style={{ blockSize: "20px" }}>
              1
            </div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>2</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)} style={{ blockSize: "20px" }}>
              3
            </div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>4</div>
            <div className={sprout.classNames(...CONTENT_CLASSES)}>5</div>
          </div>
        </div>
      </div>
      <div className={sprout.classNames("flex", "border-box", "flex-col")}>
        <PropertyTile>gap, gap_y, gap_x</PropertyTile>
        <div className={sprout.classNames(...PROPERTY_ROW_PROPS)}>
          <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
            <PropertyValue>gap-s</PropertyValue>
            <div
              className={sprout.classNames(...CONTAINER_CLASSES, "flex-row", "items-start", "flex-wrap", "gap-s")}
              style={{ inlineSize: 200 }}
            >
              <div className={sprout.classNames(...CONTENT_CLASSES)}>1</div>
              <div className={sprout.classNames(...CONTENT_CLASSES)}>2</div>
              <div className={sprout.classNames(...CONTENT_CLASSES)}>3</div>
            </div>
          </div>
          <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
            <PropertyValue>gap-x-s gap-y-xl</PropertyValue>
            <div
              className={sprout.classNames(
                ...CONTAINER_CLASSES,
                "flex-row",
                "items-start",
                "flex-wrap",

                "gap-y-xl",
                "gap-x-s",
              )}
              style={{ inlineSize: 200 }}
            >
              <div className={sprout.classNames(...CONTENT_CLASSES)}>1</div>
              <div className={sprout.classNames(...CONTENT_CLASSES)}>2</div>
              <div className={sprout.classNames(...CONTENT_CLASSES)}>3</div>
              <div className={sprout.classNames(...CONTENT_CLASSES)}>4</div>
              <div className={sprout.classNames(...CONTENT_CLASSES)}>5</div>
            </div>
          </div>
        </div>
      </div>
      <div className={sprout.classNames("flex", "border-box", "flex-col")}>
        <PropertyTile>grow / shrink</PropertyTile>
        <div className={sprout.classNames(...PROPERTY_ROW_PROPS)}>
          <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
            <PropertyValue>grow</PropertyValue>
            <div className={sprout.classNames(...CONTAINER_CLASSES, "flex-row")} style={{ inlineSize: "300px" }}>
              <div className={sprout.classNames(...CONTENT_CLASSES, "grow-1")}>1</div>
              <div className={sprout.classNames(...CONTENT_CLASSES, "grow-1")}>1</div>
              <div className={sprout.classNames(...CONTENT_CLASSES, "grow-1")}>1</div>
            </div>
          </div>
          <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
            <PropertyValue>shrink</PropertyValue>
            <div className={sprout.classNames(...CONTAINER_CLASSES, "flex-row")} style={{ inlineSize: "280px" }}>
              <div className={sprout.classNames(...CONTENT_CLASSES, "shrink-0")} style={{ flexBasis: "300px" }}>
                shrink_0
              </div>
            </div>
            <div className={sprout.classNames(...CONTAINER_CLASSES, "flex-row")} style={{ inlineSize: "280px" }}>
              <div className={sprout.classNames(...CONTENT_CLASSES, "shrink-1")} style={{ flexBasis: "300px" }}>
                shrink_1
              </div>
              <div className={sprout.classNames(...CONTENT_CLASSES, "shrink-1")} style={{ flexBasis: "300px" }}>
                shrink_1
              </div>
            </div>
          </div>
        </div>
        <div className={sprout.classNames("flex", "border-box", "flex-col")}>
          <PropertyTile>self (align-self)</PropertyTile>
          <div className={sprout.classNames(...PROPERTY_ROW_PROPS)}>
            <div
              className={sprout.classNames(...CONTAINER_CLASSES, "flex-row", "items-start")}
              style={{ blockSize: "250px" }}
            >
              <div className={sprout.classNames(...CONTENT_CLASSES, "self-start")}>self-start</div>
              <div className={sprout.classNames(...CONTENT_CLASSES, "self-center")}>self-center</div>
              <div className={sprout.classNames(...CONTENT_CLASSES, "self-end")}>self-end</div>
              <div className={sprout.classNames(...CONTENT_CLASSES, "self-stretch")}>self-stretch</div>
              <div className={sprout.classNames(...CONTENT_CLASSES)}>4</div>
            </div>
          </div>
        </div>
        <div className={sprout.classNames("flex", "border-box", "flex-col")}>
          <PropertyTile>Overflow</PropertyTile>
          <div className={sprout.classNames(...PROPERTY_ROW_PROPS)}>
            <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
              <PropertyValue>overflow-*</PropertyValue>
              <div className={sprout.classNames(...CONTAINER_CLASSES, "flex-col", "w-fit", "overflow-visible")}>
                <div
                  className={sprout.classNames(...CONTENT_CLASSES, "justify-start", "shrink-0", "overflow-auto")}
                  style={{ inlineSize: "80px" }}
                >
                  <div
                    style={{ inlineSize: "500px" }}
                    className={sprout.classNames("flex", "border-box", "flex-row", "shrink-0", "grow")}
                  >
                    overflow_auto Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt
                  </div>
                </div>
                <div
                  className={sprout.classNames(...CONTENT_CLASSES, "overflow-hidden", "justify-start", "shrink-0")}
                  style={{ inlineSize: "80px" }}
                >
                  <div
                    style={{ inlineSize: "500px" }}
                    className={sprout.classNames("flex", "border-box", "flex-row", "shrink-0", "grow", "items-center")}
                  >
                    overflow_hidden Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt
                  </div>
                </div>
                <div
                  className={sprout.classNames(...CONTENT_CLASSES, "justify-start", "overflow-scroll", "shrink-0")}
                  style={{ inlineSize: "80px" }}
                >
                  <div
                    style={{ inlineSize: "500px" }}
                    className={sprout.classNames("flex", "border-box", "flex-row", "shrink-0", "grow")}
                  >
                    overflow-scroll Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt
                  </div>
                </div>
                <div
                  className={sprout.classNames(...CONTENT_CLASSES, "justify-start", "overflow-visible", "shrink-0")}
                  style={{ inlineSize: "80px" }}
                >
                  <div
                    style={{ inlineSize: "500px" }}
                    className={sprout.classNames(
                      "flex",
                      "border-box",
                      "flex-row",
                      "shrink-0",
                      "grow",
                      "text-default",
                      "font-body-m",
                    )}
                  >
                    overflow-visible Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={sprout.classNames(...PROPERTY_ROW_PROPS)}>
            <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
              <PropertyValue>overflow-x-*</PropertyValue>
              <div className={sprout.classNames(...CONTAINER_CLASSES, "flex-col", "w-fit", "overflow-x-visible")}>
                <div
                  className={sprout.classNames(...CONTENT_CLASSES, "overflow-x-auto", "justify-start", "shrink-0")}
                  style={{ inlineSize: "80px" }}
                >
                  <div className={sprout.classNames("flex", "border-box", "shrink-0", "grow")}>overflow-x-auto</div>
                </div>
                <div
                  className={sprout.classNames(...CONTENT_CLASSES, "overflow-x-hidden", "justify-start", "shrink-0")}
                  style={{ inlineSize: "80px" }}
                >
                  <div className={sprout.classNames("flex", "border-box", "shrink-0", "grow", "items-center")}>
                    overflow-x-hidden
                  </div>
                </div>
                <div
                  className={sprout.classNames(...CONTENT_CLASSES, "overflow-x-scroll", "justify-start", "shrink-0")}
                  style={{ inlineSize: "80px" }}
                >
                  <div className={sprout.classNames("flex", "border-box", "shrink-0", "grow")}>overflow-x-scroll</div>
                </div>
                <div
                  className={sprout.classNames(...CONTENT_CLASSES, "overflow-x-visible", "justify-start", "shrink-0")}
                  style={{ inlineSize: "80px" }}
                >
                  <div className={sprout.classNames("shrink-0", "grow", "text-default", "font-body-m")}>
                    overflow-x-visible
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={sprout.classNames(...PROPERTY_ROW_PROPS)}>
            <div className={sprout.classNames(...PROPERTY_COL_PROPS)}>
              <PropertyValue>overflow-y-*</PropertyValue>
              <div className={sprout.classNames(...CONTAINER_CLASSES, "flex-row", "w-fit")}>
                <div
                  className={sprout.classNames(...CONTENT_CLASSES, "overflow-y-auto", "justify-start", "shrink-0")}
                  style={{ inlineSize: "110px", blockSize: "80px" }}
                >
                  <div className={sprout.classNames("flex", "border-box")} style={{ blockSize: "200px" }}>
                    overflow-y-auto Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt
                  </div>
                </div>
                <div
                  className={sprout.classNames(...CONTENT_CLASSES, "overflow-y-hidden", "justify-start", "shrink-0")}
                  style={{ inlineSize: "110px", blockSize: "80px" }}
                >
                  <div
                    className={sprout.classNames("flex", "border-box", "items-center")}
                    style={{ blockSize: "200px" }}
                  >
                    overflow-y-hidden Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt
                  </div>
                </div>
                <div
                  className={sprout.classNames(...CONTENT_CLASSES, "overflow-y-scroll", "justify-start", "shrink-0")}
                  style={{ inlineSize: "110px", blockSize: "80px" }}
                >
                  <div className={sprout.classNames("flex", "border-box")} style={{ blockSize: "200px" }}>
                    overflow_y_scroll Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt
                  </div>
                </div>
                <div
                  className={sprout.classNames(...CONTENT_CLASSES, "overflow-y-visible", "justify-start", "shrink-0")}
                  style={{ inlineSize: "110px", blockSize: "80px" }}
                >
                  <div
                    className={sprout.classNames("flex", "border-box", "items-center", "font-body-m", "text-default")}
                    style={{ blockSize: "200px" }}
                  >
                    overflow-y-visible Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Grid = {
  name: "grid",
  parameters: {
    controls: false,
  },
  render: () => (
    <div className={sprout.classNames("flex", "flex-col", "bg-default", "text-default", "max-w-xl")}>
      <PropertyTile>grid grid-cols-</PropertyTile>
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className={sprout.classNames(
            "grid",
            `grid-cols-${index + 1}` as AllClasses,
            "gap-m",
            "p-m",
            "border-box",
            "w-full",
          )}
        >
          {Array.from({ length: index + 1 }).map((__, jndex) => (
            <div key={jndex} className={sprout.classNames(...GRID_CONTENT_CLASSES)}>
              {jndex === 0 ? `grid_cols_${index + 1}` : undefined}
            </div>
          ))}
        </div>
      ))}
      <div className={sprout.classNames("grid", "grid-cols-16", "gap-m", "p-m", "border-box", "w-full")}>
        {Array.from({ length: 16 }).map((_, jndex) => (
          <div key={jndex} className={sprout.classNames(...GRID_CONTENT_CLASSES)}>
            {jndex === 0 ? "grid-cols-16" : undefined}
          </div>
        ))}
      </div>

      <PropertyTile>inline-grid</PropertyTile>
      <span className={sprout.classNames("inline-grid", "grid-cols-3", "gap-m")}>
        <span className={sprout.classNames("bg-weak", "p-s", "flex", "items-center")}>01</span>
        <span className={sprout.classNames("bg-weak", "p-s", "flex", "items-center")}>02</span>
        <span className={sprout.classNames("bg-weak", "p-s", "flex", "items-center")}>03</span>
        <span className={sprout.classNames("bg-weak", "p-s", "flex", "items-center")}>04</span>
        <span className={sprout.classNames("bg-weak", "p-s", "flex", "items-center")}>05</span>
        <span className={sprout.classNames("bg-weak", "p-s", "flex", "items-center")}>06</span>
      </span>
      <PropertyTile>col-span-</PropertyTile>
      <div className={sprout.classNames("grid", "grid-cols-16", "gap-m")}>
        {Array.from({ length: 16 }).map((_, index) => (
          <div
            key={index}
            className={sprout.classNames(...GRID_CONTENT_CLASSES, "col-start-1", `col-span-${index + 1}` as AllClasses)}
          >
            {`col-span-${index + 1}`}
          </div>
        ))}
      </div>
      <PropertyTile>col-start- col-end-</PropertyTile>
      <div className={sprout.classNames("grid", "grid-cols-16", "gap-m")}>
        <div className={sprout.classNames("col-end-2", "col-start-1", ...GRID_CONTENT_CLASSES)}>col-end-2</div>
        <div className={sprout.classNames("col-start-16", ...GRID_CONTENT_CLASSES)}>col-start-16</div>
        <div className={sprout.classNames("col-end-3", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-end-3</div>
        <div className={sprout.classNames("col-start-15", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-start-15</div>
        <div className={sprout.classNames("col-end-4", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-end-4</div>
        <div className={sprout.classNames("col-start-14", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-start-14</div>
        <div className={sprout.classNames("col-end-5", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-end-5</div>
        <div className={sprout.classNames("col-start-13", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-start-13</div>
        <div className={sprout.classNames("col-end-6", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-end-6</div>
        <div className={sprout.classNames("col-start-12", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-start-12</div>
        <div className={sprout.classNames("col-end-7", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-end-7</div>
        <div className={sprout.classNames("col-start-11", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-start-11</div>
        <div className={sprout.classNames("col-end-8", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-end-8</div>
        <div className={sprout.classNames("col-start-10", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-start-10</div>
        <div className={sprout.classNames("col-end-9", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-end-9</div>
        <div className={sprout.classNames("col-start-9", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-start-9</div>

        <div className={sprout.classNames("col-start-8", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-start-8</div>
        <div className={sprout.classNames("col-end-10", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-end-10</div>
        <div className={sprout.classNames("col-start-7", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-start-7</div>
        <div className={sprout.classNames("col-end-11", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-end-11</div>
        <div className={sprout.classNames("col-start-6", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-start-6</div>
        <div className={sprout.classNames("col-end-12", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-end-12</div>
        <div className={sprout.classNames("col-start-5", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-start-5</div>
        <div className={sprout.classNames("col-end-13", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-end-13</div>
        <div className={sprout.classNames("col-start-4", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-start-4</div>
        <div className={sprout.classNames("col-end-14", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-end-14</div>
        <div className={sprout.classNames("col-start-3", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-start-3</div>
        <div className={sprout.classNames("col-end-15", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-end-15</div>
        <div className={sprout.classNames("col-start-2", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-start-2</div>
        <div className={sprout.classNames("col-end-16", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-end-16</div>
        <div className={sprout.classNames("col-start-1", "col-span-2", ...GRID_CONTENT_CLASSES)}>col-start-1</div>
        <div className={sprout.classNames("-col-end-1", "col-span-2", ...GRID_CONTENT_CLASSES)}>-col-end-1</div>
      </div>
      <PropertyTile>row-start- row-end-</PropertyTile>
      <div className={sprout.classNames("grid", "grid-cols-8", "grid-rows-4", "gap-m")}>
        <div className={sprout.classNames("row-start-1", "row-end-1", "row-span-1", ...GRID_CONTENT_CLASSES)}>
          row-start-1
        </div>
        <div className={sprout.classNames("row-start-2", "col-start-2", "row-span-1", ...GRID_CONTENT_CLASSES)}>
          row-start-2
        </div>
        <div className={sprout.classNames("row-start-3", "col-start-3", "row-span-1", ...GRID_CONTENT_CLASSES)}>
          row-start-3
        </div>
        <div className={sprout.classNames("row-start-4", "col-start-4", "row-span-1", ...GRID_CONTENT_CLASSES)}>
          row-start-4
        </div>
        <div
          className={sprout.classNames(
            "row-start-1",
            "row-end-1",
            "row-span-1",
            "col-start-8",
            ...GRID_CONTENT_CLASSES,
          )}
        >
          row-end-1
        </div>
        <div
          className={sprout.classNames(
            "row-start-2",
            "row-end-2",
            "row-span-1",
            "col-start-7",
            ...GRID_CONTENT_CLASSES,
          )}
        >
          row-end-2
        </div>
        <div
          className={sprout.classNames(
            "row-start-3",
            "row-end-3",
            "row-span-1",
            "col-start-6",
            ...GRID_CONTENT_CLASSES,
          )}
        >
          row-end-3
        </div>
        <div
          className={sprout.classNames(
            "row-start-4",
            "row-end-4",
            "row-span-1",
            "col-start-5",
            ...GRID_CONTENT_CLASSES,
          )}
        >
          row-end-4
        </div>
      </div>
      <PropertyTile>grid-flow-col</PropertyTile>
      <div className={sprout.classNames("grid", "grid-flow-col", "grid-rows-4", "gap-m")}>
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className={sprout.classNames(...GRID_CONTENT_CLASSES)}>
            {index < 9 ? `0${index + 1}` : index + 1}
          </div>
        ))}
      </div>
      <PropertyTile>grid-flow-dense</PropertyTile>
      <div className={sprout.classNames("grid", "grid-flow-dense", "grid-cols-3", "grid-rows-3", "gap-m")}>
        <div className={sprout.classNames("col-span-2", ...GRID_CONTENT_CLASSES)}>01</div>
        <div className={sprout.classNames("col-span-2", ...GRID_CONTENT_CLASSES)}>02</div>
        <div className={sprout.classNames("row-span-2", ...GRID_CONTENT_CLASSES)}>03</div>
        <div className={sprout.classNames("row-span-2", ...GRID_CONTENT_CLASSES)}>04</div>
        <div className={sprout.classNames("row-span-2", ...GRID_CONTENT_CLASSES)}>05</div>
      </div>
      <PropertyTile>grid-flow-row-dense</PropertyTile>
      <div className={sprout.classNames("grid", "grid-flow-row-dense", "grid-cols-3", "grid-rows-3", "gap-m")}>
        <div className={sprout.classNames("col-span-2", ...GRID_CONTENT_CLASSES)}>01</div>
        <div className={sprout.classNames("col-span-2", ...GRID_CONTENT_CLASSES)}>02</div>
        <div className={sprout.classNames("row-span-2", ...GRID_CONTENT_CLASSES)}>03</div>
        <div className={sprout.classNames("row-span-2", ...GRID_CONTENT_CLASSES)}>04</div>
        <div className={sprout.classNames("row-span-2", ...GRID_CONTENT_CLASSES)}>05</div>
      </div>
      <PropertyTile>grid-flow-col-dense</PropertyTile>
      <div className={sprout.classNames("grid", "grid-flow-col-dense", "grid-cols-3", "grid-rows-3", "gap-m")}>
        <div className={sprout.classNames("col-span-2", ...GRID_CONTENT_CLASSES)}>01</div>
        <div className={sprout.classNames("col-span-2", ...GRID_CONTENT_CLASSES)}>02</div>
        <div className={sprout.classNames("row-span-2", ...GRID_CONTENT_CLASSES)}>03</div>
        <div className={sprout.classNames("row-span-2", ...GRID_CONTENT_CLASSES)}>04</div>
        <div className={sprout.classNames("row-span-2", ...GRID_CONTENT_CLASSES)}>05</div>
      </div>
      <PropertyTile>grid-rows-subgrid</PropertyTile>
      <div className={sprout.classNames("grid", "grid-flow-col", "grid-rows-4", "gap-m")}>
        <div className={sprout.classNames(...GRID_CONTENT_CLASSES)}>01</div>
        <div className={sprout.classNames(...GRID_CONTENT_CLASSES)}>02</div>
        <div className={sprout.classNames(...GRID_CONTENT_CLASSES)}>03</div>
        <div className={sprout.classNames(...GRID_CONTENT_CLASSES)}>04</div>
        <div className={sprout.classNames(...GRID_CONTENT_CLASSES)}>05</div>
        <div className={sprout.classNames("row-span-3", "grid", "grid_rows_subgrid", "gap-m")}>
          <div className={sprout.classNames(...GRID_CONTENT_CLASSES, "row-start-2", "bg-strong")}>06</div>
        </div>
        <div className={sprout.classNames(...GRID_CONTENT_CLASSES)}>07</div>
        <div className={sprout.classNames(...GRID_CONTENT_CLASSES)}>08</div>
        <div className={sprout.classNames(...GRID_CONTENT_CLASSES)}>09</div>
        <div className={sprout.classNames(...GRID_CONTENT_CLASSES)}>10</div>
      </div>
      <PropertyTile>grid-cols-subgrid</PropertyTile>
      <div className={sprout.classNames("grid", "grid-cols-4", "gap-m")}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className={sprout.classNames(...GRID_CONTENT_CLASSES)}>
            0{index + 1}
          </div>
        ))}
        <div className={sprout.classNames("col-span-3", "grid", "grid_cols_subgrid", "gap-m")}>
          <div className={sprout.classNames("col-start-2", "bg-strong", ...GRID_CONTENT_CLASSES)}>06</div>
        </div>
      </div>

      <PropertyTile>row-span</PropertyTile>
      <div className={sprout.classNames("grid", "grid-flow-col", "grid-rows-3", "gap-m")}>
        <div className={sprout.classNames("row-span-3", ...GRID_CONTENT_CLASSES)}>01</div>
        <div className={sprout.classNames("col-span-2", ...GRID_CONTENT_CLASSES)}>02</div>
        <div className={sprout.classNames("col-span-2", "row-span-2", ...GRID_CONTENT_CLASSES)}>03</div>
      </div>
    </div>
  ),
};
