import { useEffect, useRef } from "react";

import type { Meta, StoryFn } from "@storybook/react-vite";

export default {
  title: "Integration/canvas",
} as Meta;

function CanvasComponent() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const width = 640;
  const height = 400;

  useEffect(() => {
    // note that ligth/dark mode switch do not trigger re-render ...
    // so please reload the page when you switch

    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const style = getComputedStyle(canvas);
    const context = canvas.getContext("2d");

    if (!context) return;

    // Set canvas size
    canvas.width = width;
    canvas.height = height;

    // Draw a rectangle
    context.fillStyle = style.getPropertyValue(
      "--sprout-common-background-color-default",
    );
    context.fillRect(50, 50, 200, 100);

    // Draw a border around the rectangle
    context.strokeStyle = style.getPropertyValue(
      "--sprout-common-border-default-color",
    );
    context.lineWidth = 1;
    context.strokeRect(50, 50, 200, 100);

    // Draw some text
    context.fillStyle = style.getPropertyValue(
      "--sprout-common-foreground-color-default",
    );
    context.font = style.getPropertyValue("--sprout-heading-font-m");
    context.fillText("Hello, Canvas!", 60, 120);
  });

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
}

export const Canvas = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: () => <CanvasComponent />,
};
