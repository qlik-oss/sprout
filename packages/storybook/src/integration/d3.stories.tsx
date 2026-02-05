/* eslint-disable @typescript-eslint/no-explicit-any */
import * as d3 from "d3";
import { useEffect, useRef } from "react";

import { tokens } from "@qlik/design-tokens";
import sprout from "@qlik/sprout-css-modules";
import type { Meta, StoryFn } from "@storybook/react-vite";

import { PopulationData, type PopulationDataType, type Region } from "./data";

export default {
  title: "Integration/d3",
} as Meta;

const regionColors: Record<Region, string> = {
  APAC: tokens.data_color_categorical_0_0,
  Europe: tokens.data_color_categorical_0_1,
  Caribbean: tokens.data_color_categorical_0_2,
  "Middle East": tokens.data_color_categorical_0_3,
  "South and Central Asia": tokens.data_color_categorical_0_4,
};

// eslint-disable-next-line react/function-component-definition
export const BarChartDemo: StoryFn<{ data: Array<PopulationDataType> }> = ({
  data,
}) => {
  const width = 640;
  const height = 400;
  const marginTop = 20;
  const marginRight = 20;
  const marginBottom = 30;
  const marginLeft = 40;
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous content

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.region))
      .range([marginLeft, width - marginRight])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value) || 0])
      .nice()
      .range([height - marginBottom, marginTop]);

    const xAxis = (g: any) =>
      g
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(d3.axisBottom(x).tickSizeOuter(0));

    const yAxis = (g: any) =>
      g
        .attr("transform", `translate(${marginLeft},0)`)
        .call(d3.axisLeft(y).ticks(null, "s"))
        .call((sg: any) => sg.select(".domain").remove());

    svg.append("g").call(xAxis);
    svg.append("g").call(yAxis);

    svg
      .append("g")
      .selectAll("rect")
      .data(data)
      .join("rect")
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      .attr("x", (d) => x(d.region)!)
      .attr("y", (d) => y(d.value))
      .attr("height", (d) => y(0) - y(d.value))
      .attr("width", x.bandwidth())
      .attr("fill", (d) => regionColors[d.region]);
  }, [data, width, height, marginTop, marginRight, marginBottom, marginLeft]);

  return (
    <div>
      <svg
        ref={svgRef}
        className={sprout.classNames("text-default")}
        width={width}
        height={height}
      />
      ;
    </div>
  );
};
BarChartDemo.args = {
  data: PopulationData,
};
BarChartDemo.argTypes = {
  data: {
    control: {
      type: "object",
    },
  },
};
BarChartDemo.parameters = {
  chromatic: { disableSnapshot: true },
};
