import { Button, classNames, useSproutI18n, useTheme } from "@qlik/sprout-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";

export function LoadMore({
  onDisplayed,
  containerDistance,
  style,
}: {
  containerDistance?: number;
  onDisplayed: () => void | Promise<void>;
  style: CSSProperties;
}) {
  const t = useSproutI18n();
  const { isTouch } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const paginationMethod = isTouch ? "load-more" : "infinite-scroll";

  const handleLoading = (): void => {
    setLoading(true);
    void Promise.resolve(onDisplayed())
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect((): void => {
    containerRef.current ||= ref.current?.parentElement as HTMLDivElement;
  }, []);

  useEffect((): (() => void) | undefined => {
    if (paginationMethod !== "infinite-scroll") {
      return;
    }
    const observer = new IntersectionObserver(([entry]): void => {
      const containerBB = containerRef.current?.getBoundingClientRect();
      if (entry.boundingClientRect.top - (containerBB?.bottom ?? 0) < (containerDistance ?? 0)) {
        void onDisplayed();
      }
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    // eslint-disable-next-line consistent-return
    return () => {
      observer.disconnect();
    };
  }, [containerDistance, onDisplayed, paginationMethod]);

  return (
    <div role="row" className={classNames("w-full", "flex", "items-center")} ref={ref} style={style}>
      {paginationMethod === "load-more" && (
        <Button loading={loading} label={t("table.body.loadmore.label")} onClick={handleLoading} />
      )}
    </div>
  );
}
