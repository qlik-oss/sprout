import { classNames } from "../classNames";
import type { HTMLSpanProps } from "../htmlTypes";

import styles from "./SearchHighlight.module.css";

const normalizeString = (text: string) => text.normalize("NFKC");

const normalizedStringSearch = (
  searchString: string,
  fieldString: string,
  startIndex = 0,
) => {
  const normalizedSearchString = normalizeString(searchString);
  const matchLength =
    searchString.length < normalizedSearchString.length
      ? searchString.length
      : normalizedSearchString.length;
  const matchStartIndex = normalizeString(fieldString).indexOf(
    normalizedSearchString,
    startIndex,
  );

  if (matchStartIndex > -1) {
    for (let i = 0; i < fieldString.length; i += 1) {
      const fieldSubString = fieldString
        .substring(matchStartIndex, matchLength + i)
        .trim();
      const normalizedSubString = normalizeString(fieldSubString);

      if (normalizedSearchString === normalizedSubString) {
        return {
          index: matchStartIndex,
          length: fieldSubString.length,
          resultMatch: fieldSubString,
        };
      }
    }
  }
  return {
    length: -1,
    index: -1,
    resultMatch: null,
  };
};

export type SearchHighlightProps = Omit<HTMLSpanProps, "children"> & {
  /**
   * The search query to highlight in the text
   */
  query: string;
  /**
   * Whether the search should be case-sensitive
   * @default false
   */
  caseSensitive?: boolean;
  /**
   * The text content to search within
   */
  children?: string;
  /**
   * The index of the match to highlight as active (0-based)
   * All other matches will use the default variant
   */
  activeIndex?: number;
  /**
   * Callback fired after matches are found, providing the total count
   */
  onMatchCount?: (count: number) => void;
};

/**
 * SearchHighlight component for emphasizing search matches within text.
 * Automatically splits text and wraps matching substrings in styled spans.
 *
 * @example
 * ```tsx
 * <SearchHighlight query="search" activeIndex={0} onMatchCount={(count) => setTotal(count)}>
 *   This is a search result
 * </SearchHighlight>
 * ```
 */
export function SearchHighlight(props: SearchHighlightProps) {
  const {
    query,
    caseSensitive = false,
    children,
    activeIndex,
    onMatchCount,
    "data-testid": datatestid,
    ...restProps
  } = props;
  const incomingText = children || "";
  let key = 0;
  let matchIndex = 0;

  if (!query || !incomingText) {
    return (
      <span data-testid={datatestid} {...restProps}>
        {incomingText}
      </span>
    );
  }

  let currentIndex = 0;
  const result = [];
  const matches = [];
  const searchText = caseSensitive
    ? incomingText.toString()
    : incomingText.toString().toUpperCase();
  const searchQuery = caseSensitive
    ? query.toString()
    : query.toString().toUpperCase();

  if (searchQuery.length > 0) {
    while (currentIndex !== -1) {
      const searchResult = normalizedStringSearch(
        searchQuery,
        searchText,
        currentIndex,
      );
      const updatedIndex = searchResult.index;

      if (updatedIndex !== -1) {
        result.push(incomingText.substring(currentIndex, updatedIndex));

        const isActive =
          activeIndex !== undefined && matchIndex === activeIndex;

        result.push(
          <span
            key={`${key}`}
            role="mark"
            aria-current={isActive ? "true" : undefined}
            data-match-index={matchIndex}
            className={classNames({
              [styles.highlight_active]: isActive,
              [styles.highlight_default]: !isActive,
            })}
          >
            {incomingText.substring(
              updatedIndex,
              updatedIndex + searchResult.length,
            )}
          </span>,
        );

        matches.push(matchIndex);
        matchIndex += 1;
        currentIndex = updatedIndex + searchResult.length;
      } else {
        result.push(incomingText.substring(currentIndex, incomingText.length));
        currentIndex = -1;
        break;
      }
      key += 1;
    }

    if (onMatchCount) {
      onMatchCount(matches.length);
    }
  } else {
    return (
      <span data-testid={datatestid} {...restProps}>
        {incomingText}
      </span>
    );
  }

  return (
    <span data-testid={datatestid} {...restProps}>
      {result}
    </span>
  );
}
