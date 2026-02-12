import sprout from "@qlik/sprout-css-modules";

export default {
  title: "CSS/sprout-css-modules/typography",
};

export const font = {
  name: "font",
  render: () => (
    <div
      className={sprout.classNames(
        "flex",
        "border-box",
        "gap-m",
        "flex-col",
        "w-m",
      )}
    >
      <div
        className={sprout.classNames("flex", "border-box", "gap-m", "flex-col")}
      >
        <span className={sprout.classNames("font-heading-xxl", "text-default")}>
          font-heading-xxl
        </span>
        <span className={sprout.classNames("font-heading-xl", "text-default")}>
          font-heading-xl
        </span>
        <span className={sprout.classNames("font-heading-l", "text-default")}>
          font-heading-l
        </span>
        <span className={sprout.classNames("font-heading-m", "text-default")}>
          font-heading-m
        </span>
        <span className={sprout.classNames("font-heading-s", "text-default")}>
          font-heading-s
        </span>
        <span className={sprout.classNames("font-heading-xs", "text-default")}>
          font-heading-xs
        </span>
      </div>
      <div
        className={sprout.classNames("flex", "border-box", "gap-m", "flex-col")}
      >
        <span className={sprout.classNames("font-body-xxl", "text-default")}>
          font-body-xxl
        </span>
        <span className={sprout.classNames("font-body-xl", "text-default")}>
          font-body-xl
        </span>
        <span className={sprout.classNames("font-body-l", "text-default")}>
          font-body-l
        </span>
        <span className={sprout.classNames("font-body-m", "text-default")}>
          font-body-m
        </span>
        <span className={sprout.classNames("font-body-s", "text-default")}>
          font-body-s
        </span>
        <small className={sprout.classNames("font-body-xs", "text-default")}>
          font-body-xs
        </small>
      </div>
      <div
        className={sprout.classNames("flex", "border-box", "gap-m", "flex-col")}
      >
        <span className={sprout.classNames("font-label-l", "text-default")}>
          font-label-l
        </span>
        <span
          className={sprout.classNames(
            "font-label-l-emphasized",
            "text-default",
          )}
        >
          font-label-l-emphasized
        </span>
        <span className={sprout.classNames("font-label-m", "text-default")}>
          font-label-m
        </span>
        <span
          className={sprout.classNames(
            "font-label-m-emphasized",
            "text-default",
          )}
        >
          font-label-m-emphasized
        </span>
        <span className={sprout.classNames("font-label-s", "text-default")}>
          font-label-s
        </span>
        <span
          className={sprout.classNames(
            "font-label-s-emphasized",
            "text-default",
          )}
        >
          font-label-s-emphasized
        </span>
        <span className={sprout.classNames("font-label-xs", "text-default")}>
          font-label-xs
        </span>
        <span
          className={sprout.classNames(
            "font-label-xs-emphasized",
            "text-default",
          )}
        >
          font-label-xs-emphasized
        </span>
      </div>
      <div
        className={sprout.classNames("flex", "border-box", "gap-m", "flex-col")}
      >
        <span className={sprout.classNames("font-script-s", "text-default")}>
          font-script-s
        </span>
        <span
          className={sprout.classNames(
            "font-script-s-emphasized",
            "text-default",
          )}
        >
          font-script-s-emphasized
        </span>
        <span className={sprout.classNames("font-script-m", "text-default")}>
          font-script-m
        </span>
        <span
          className={sprout.classNames(
            "font-script-m-emphasized",
            "text-default",
          )}
        >
          font-script-m-emphasized
        </span>
      </div>
      <div
        className={sprout.classNames("flex", "border-box", "gap-m", "flex-col")}
      >
        <span className={sprout.classNames("font-body-s")}>undefined</span>
        <span className={sprout.classNames("font-body-s", "text-weak")}>
          text-weak
        </span>
        <span className={sprout.classNames("font-body-s", "text-default")}>
          text-default
        </span>
        <button
          disabled
          type="button"
          className={sprout.classNames(
            "font-body-s",
            "text-disabled",
            "border-none",
            "bg-transparent",
            "text-start",
            "p-0",
            "m-0",
          )}
        >
          text-disabled
        </button>
        <span
          className={sprout.classNames(
            "bg-inverse",
            "font-body-s",
            "text-inverse",
          )}
        >
          text-inverse
        </span>
      </div>
      <div
        className={sprout.classNames(
          "flex",
          "border-box",
          "gap-m",
          "flex-col",
          "overflow-hidden",
        )}
        style={{ inlineSize: 180 }}
      >
        <span
          className={sprout.classNames(
            "font-body-s",
            "text-default",
            "truncate",
          )}
        >
          truncate option make my text overflow
        </span>
      </div>
    </div>
  ),
};

export const FontStyle = {
  name: "font-style",
  render: () => (
    <div
      className={sprout.classNames(
        "flex",
        "border-box",
        "gap-m",
        "flex-col",
        "w-m",
        "text-default",
        "bg-default",
      )}
    >
      <span className={sprout.classNames("font-body-m")}>
        This is normal font style.
      </span>
      <span className={sprout.classNames("font-body-m", "italic")}>
        This is italic font style.
      </span>
      <div lang="zh">
        <span className={sprout.classNames("font-body-m", "italic")}>
          This is italic font style with lang=zh. 这是斜体字体样式，但由于
          lang=zh，因此未应用。
        </span>
      </div>
    </div>
  ),
};

const TEXT_CONTENT = (
  <>
    So I started to walk into the water. I won&apos;t lie to you boys, I was
    terrified. But I pressed on, and as I made my way past the breakers a
    strange calm came over me. I don&apos;t know if it was divine intervention
    or the kinship of all living things but I tell you Jerry at that moment, I{" "}
    <em>was</em> a marine biologist.
  </>
);

export const TextAlign = {
  name: "text-align",
  render: () => (
    <div
      className={sprout.classNames(
        "flex",
        "border-box",
        "gap-m",
        "p-m",
        "flex-col",
        "w-m",
        "text-default",
        "bg-default",
        "max-w-s",
      )}
    >
      <h1 className={sprout.classNames("p-0", "m-0", "font-heading-m")}>
        text-left === text-start
      </h1>
      <p className={sprout.classNames("text-left", "border-weak", "p-m")}>
        {TEXT_CONTENT}
      </p>
      <h1 className={sprout.classNames("p-0", "m-0", "font-heading-m")}>
        text-right === text-end
      </h1>
      <p className={sprout.classNames("text-right", "border-weak", "p-m")}>
        {TEXT_CONTENT}
      </p>
      <h1 className={sprout.classNames("p-0", "m-0", "font-heading-m")}>
        text-center
      </h1>
      <p className={sprout.classNames("text-center", "border-weak", "p-m")}>
        {TEXT_CONTENT}
      </p>
      <h1 className={sprout.classNames("p-0", "m-0", "font-heading-m")}>
        text-justify
      </h1>
      <p className={sprout.classNames("text-justify", "border-weak", "p-m")}>
        {TEXT_CONTENT}
      </p>
    </div>
  ),
};

export const TextOverflow = {
  name: "text-overflow",
  render: () => (
    <div
      className={sprout.classNames(
        "flex",
        "border-box",
        "gap-m",
        "p-m",
        "flex-col",
        "w-m",
        "text-default",
        "bg-default",
        "max-w-s",
      )}
    >
      <h1 className={sprout.classNames("p-0", "m-0", "font-heading-m")}>
        truncate
      </h1>
      <p
        className={sprout.classNames("truncate", "border-weak", "p-m")}
        style={{ inlineSize: 200 }}
      >
        {TEXT_CONTENT}
      </p>
      <h1 className={sprout.classNames("p-0", "m-0", "font-heading-m")}>
        text-ellipsis
      </h1>
      <p
        className={sprout.classNames(
          "max-w-xs",
          "overflow-hidden",
          "border-default",
          "py-m",
          "text-ellipsis",
        )}
      >
        The longest word in any of the major English language dictionaries is{" "}
        <span className={sprout.classNames("font-label-m-emphasized")}>
          pneumonoultramicroscopicsilicovolcanoconiosis,
        </span>{" "}
        a word that refers to a lung disease contracted from the inhalation of
        very fine silica particles, specifically from a volcano; medically, it
        is the same as silicosis.
      </p>
      <h1 className={sprout.classNames("p-0", "m-0", "font-heading-m")}>
        text-clip
      </h1>
      <p
        className={sprout.classNames("text-clip", "border-weak", "p-m")}
        style={{ inlineSize: 200 }}
      >
        {TEXT_CONTENT}
      </p>
    </div>
  ),
};

export const WhiteSpace = {
  name: "white-space",
  render: () => {
    const text = `
      But ere she from the church-door stepped She smiled and told us why: 'It
      was a wicked woman's curse,' Quoth she, 'and what care I?' She smiled, and
      smiled, and passed it off Ere from the door she stept—
    `;

    return (
      <div
        className={sprout.classNames(
          "flex",
          "border-box",
          "gap-m",
          "p-m",
          "flex-col",
          "w-m",
          "text-default",
          "bg-default",
        )}
      >
        <span className={sprout.classNames("font-heading-m")}>
          whitespace-normal
        </span>
        <div
          className={sprout.classNames(
            "w-xxs",
            "whitespace-normal",
            "border-weak",
            "p-m",
          )}
        >
          {text}
        </div>

        <span className={sprout.classNames("font-heading-m")}>
          whitespace-pre
        </span>
        <div
          className={sprout.classNames(
            "w-xxs",
            "whitespace-pre",
            "border-weak",
            "p-m",
          )}
        >
          {text}
        </div>

        <span className={sprout.classNames("font-heading-m")}>
          whitespace-pre-wrap
        </span>
        <div
          className={sprout.classNames(
            "w-xxs",
            "whitespace-pre-wrap",
            "border-weak",
            "p-m",
          )}
        >
          {text}
        </div>

        <span className={sprout.classNames("font-heading-m")}>
          whitespace-pre-line
        </span>
        <div
          className={sprout.classNames(
            "w-xxs",
            "whitespace-pre-line",
            "border-weak",
            "p-m",
          )}
        >
          {text}
        </div>

        <span className={sprout.classNames("font-heading-m")}>
          whitespace-nowrap
        </span>
        <div
          className={sprout.classNames(
            "w-xxs",
            "whitespace-nowrap",
            "border-weak",
            "p-m",
          )}
        >
          {text}
        </div>

        <span className={sprout.classNames("font-heading-m")}>
          whitespace-wrap
        </span>
        <div
          className={sprout.classNames(
            "w-xxs",
            "whitespace-wrap",
            "border-weak",
            "p-m",
          )}
        >
          {text}
        </div>

        <span className={sprout.classNames("font-heading-m")}>
          whitespace-break-spaces
        </span>
        <div
          className={sprout.classNames(
            "w-xxs",
            "whitespace-break-spaces",
            "border-weak",
            "p-m",
          )}
        >
          {text}
        </div>

        <span className={sprout.classNames("font-heading-m")}>
          whitespace-collapse
        </span>
        <div
          className={sprout.classNames(
            "w-xxs",
            "whitespace-collapse",
            "border-weak",
            "p-m",
          )}
        >
          {text}
        </div>

        <span className={sprout.classNames("font-heading-m")}>
          whitespace-preserve-nowrap
        </span>
        <div
          className={sprout.classNames(
            "w-xxs",
            "whitespace-preserve-nowrap",
            "border-weak",
            "p-m",
          )}
        >
          {text}
        </div>
      </div>
    );
  },
};

export const Color = {
  name: "color",
  render: () => (
    <div
      className={sprout.classNames(
        "flex",
        "border-box",
        "gap-m",
        "flex-col",
        "w-m",
      )}
    >
      <span className={sprout.classNames("text-default")}>text-default</span>
      <span className={sprout.classNames("text-weak")}>text-weak</span>
      <button
        disabled
        type="button"
        className={sprout.classNames(
          "border-none",
          "bg-transparent",
          "text-start",
          "p-0",
          "m-0",
          "text-disabled",
        )}
      >
        text-disabled
      </button>
      <span className={sprout.classNames("bg-inverse", "text-inverse")}>
        text-inverse
      </span>
      <span className={sprout.classNames("text-danger")}>text-danger</span>
      <span className={sprout.classNames("bg-danger", "text-danger-inverse")}>
        text-danger-inverse
      </span>
      <span className={sprout.classNames("text-warning")}>text-warning</span>
      <span className={sprout.classNames("bg-warning", "text-warning-inverse")}>
        text-warning-inverse
      </span>
      <span className={sprout.classNames("text-info")}>text-info</span>
      <span className={sprout.classNames("bg-info", "text-info-inverse")}>
        text-info-inverse
      </span>
      <span className={sprout.classNames("text-success")}>text-success</span>
      <span className={sprout.classNames("bg-success", "text-success-inverse")}>
        text-success-inverse
      </span>
    </div>
  ),
};
