import { useRef } from "react";

import { useI18n } from "./useI18n";

function TranslationDisplay({ keyToTranslate }: { keyToTranslate: string }) {
  const translationRef = useRef<HTMLSpanElement>(null);
  const t = useI18n(translationRef);

  return (
    <span ref={translationRef} data-testid="translation">
      {t(keyToTranslate)}
    </span>
  );
}

export function TestComponent({
  lang,
  keyToTranslate,
}: {
  lang: string;
  keyToTranslate: string;
}) {
  return (
    <div lang={lang} id="test-container">
      <TranslationDisplay keyToTranslate={keyToTranslate} />
    </div>
  );
}
