import { useState } from "react";

import { IconButton, SearchHighlight, classNames } from "@qlik/sprout-css-react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowLeftIcon, ArrowRightIcon } from "../icons";

type Story = StoryObj<typeof SearchHighlight>;

const meta: Meta<typeof SearchHighlight> = {
  title: "Components/SearchHighlight",
  component: SearchHighlight,
};
export default meta;

export const Playground: Story = {
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: ({ ...props }) => {
    return <SearchHighlight {...props} />;
  },
  args: {
    query: "search",
    children: "This is a search result with multiple search terms.",
    caseSensitive: false,
  },
  argTypes: {
    query: {
      control: "text",
      description: "The search query to highlight in the text",
    },
    children: {
      control: "text",
      description: "The text content to search within",
    },
    activeIndex: {
      control: "number",
      description: "The index of the match to highlight as active (0-based)",
    },
    caseSensitive: {
      control: "boolean",
      description: "Whether the search should be case-sensitive",
    },
  },
};

export const WithNavigation = {
  render: function WithNavigationStory() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [totalMatches, setTotalMatches] = useState(0);

    const handlePrevious = () => {
      setActiveIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
      setActiveIndex((prev) => Math.min(totalMatches - 1, prev + 1));
    };

    return (
      <div className={classNames("flex", "flex-col", "gap-m")}>
        <div className={classNames("flex", "flex-row", "gap-xs", "items-center")}>
          <IconButton
            variant="quiet"
            size="small"
            aria-label="Previous match"
            icon={<ArrowLeftIcon height={undefined} />}
            onClick={handlePrevious}
            disabled={activeIndex === 0}
          />
          <span className={classNames("font-body-s", "text-default")}>
            {totalMatches > 0 ? `${activeIndex + 1} of ${totalMatches}` : "No matches"}
          </span>
          <IconButton
            variant="quiet"
            size="small"
            aria-label="Next match"
            icon={<ArrowRightIcon height={undefined} />}
            onClick={handleNext}
            disabled={activeIndex === totalMatches - 1}
          />
        </div>
        <p>
          <SearchHighlight query="test" activeIndex={activeIndex} onMatchCount={setTotalMatches}>
            This is a test string with multiple test occurrences for test purposes. Each test word is highlighted, and
            you can navigate between test matches using the buttons above.
          </SearchHighlight>
        </p>
      </div>
    );
  },
};

export const VisualTest = {
  render: () => {
    return (
      <div className={classNames("flex", "flex-col", "gap-m")}>
        <SearchHighlight query="variant">Default variant.</SearchHighlight>
        <SearchHighlight query="search" activeIndex={0}>
          This is a search result with activeIndex.
        </SearchHighlight>
        <SearchHighlight query="test" activeIndex={1}>
          This is a test string with multiple test occurrences for test purposes with activeIndex set to 1
        </SearchHighlight>
        <SearchHighlight query="WORD">This word is matched regardless of case: Word, word, WORD</SearchHighlight>
        <SearchHighlight query="Word" caseSensitive>
          Only Word is matched, not word or WORD
        </SearchHighlight>
      </div>
    );
  },
};
