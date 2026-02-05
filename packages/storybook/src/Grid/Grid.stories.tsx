import { useMedia } from "@qlik/sprout-css-hooks";
import { Grid, classNames } from "@qlik/sprout-css-react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta = {
  title: "Components/Grid",
};
export default meta;

export const ResponsiveStyles: StoryObj = {
  parameters: {
    chromatic: {
      modes: {
        breakpoint_s: {
          viewport: "s", // 480
        },
        breakpoint_m: {
          viewport: "m", // 768
        },
        breakpoint_l: {
          viewport: "l", // 1280
        },
      },
    },
  },
  render: () => {
    // FIXME: replace by the incoming useMedia when available in sprout-css-hooks
    const media = useMedia();
    return (
      <Grid.Container
        className={media.classNames({
          s: ["p_l"],
          m: ["p_xl"],
        })}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid.Column
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            s="col_span_6"
            m="col_span_4"
            className={media.classNames(
              {
                s: ["border_dashed", "p_m"],
                m: ["border_default", "p_l"],
              },
              classNames("items-center", "flex", "border-box"),
            )}
          >
            <span>{index + 1}</span>
          </Grid.Column>
        ))}
      </Grid.Container>
    );
  },
};
