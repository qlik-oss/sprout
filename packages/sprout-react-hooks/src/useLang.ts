import { type RefObject, useEffect, useState } from "react";

function sanitizeLang(lang?: string): HTMLHtmlElement["lang"] {
  if (!lang) {
    return "en";
  }
  if (lang === "zh-CN" || lang === "zh-TW") {
    return lang;
  }
  return lang.split("-")[0];
}

function getLangFromElement(el: HTMLElement | null): HTMLHtmlElement["lang"] {
  return sanitizeLang(el?.getAttribute("lang") || undefined);
}

export function useLang(ref?: RefObject<HTMLElement | null>) {
  let queryFn = (selector: string): HTMLElement | null => document.querySelector(selector);
  if (ref) {
    queryFn = (selector) => {
      if (ref.current) {
        return ref.current.lang ? ref.current : ref.current.closest(selector) || null;
      }
      return null;
    };
  }
  const langInitialValue: HTMLHtmlElement["lang"] = getLangFromElement(queryFn("[lang]"));
  const [langState, setLangState] = useState(langInitialValue);

  useEffect(() => {
    const withLangEl = queryFn("[lang]");
    const lang = getLangFromElement(withLangEl);
    if (langState !== lang) {
      setLangState(lang);
    }
    // observe changes to lang attribute
    const observer = new MutationObserver(() => {
      const newLang = getLangFromElement(queryFn("[lang]"));
      if (langState !== newLang) {
        setLangState(newLang);
      }
    });
    if (withLangEl) {
      observer.observe(withLangEl, { attributes: true });
    }
    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return langState;
}
