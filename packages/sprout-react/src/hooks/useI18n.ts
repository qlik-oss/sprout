import { type RefObject, useEffect, useState } from "react";

import de from "../translations/de.json";
import dePlural from "../translations/de.plural.json";
import en from "../translations/en.json";
import enPlural from "../translations/en.plural.json";
import es from "../translations/es.json";
import esPlural from "../translations/es.plural.json";
import fr from "../translations/fr.json";
import frPlural from "../translations/fr.plural.json";
import it from "../translations/it.json";
import itPlural from "../translations/it.plural.json";
import ja from "../translations/ja.json";
import jaPlural from "../translations/ja.plural.json";
import ko from "../translations/ko.json";
import koPlural from "../translations/ko.plural.json";
import nl from "../translations/nl.json";
import nlPlural from "../translations/nl.plural.json";
import pl from "../translations/pl.json";
import plPlural from "../translations/pl.plural.json";
import pt from "../translations/pt.json";
import ptPlural from "../translations/pt.plural.json";
import ru from "../translations/ru.json";
import ruPlural from "../translations/ru.plural.json";
import sv from "../translations/sv.json";
import svPlural from "../translations/sv.plural.json";
import tr from "../translations/tr.json";
import trPlural from "../translations/tr.plural.json";
import zhCN from "../translations/zh-CN.json";
import zhCNPlural from "../translations/zh-CN.plural.json";
import zhTW from "../translations/zh-TW.json";
import zhTWPlural from "../translations/zh-TW.plural.json";

const DEFAULT_LANG: HTMLHtmlElement["lang"] = "en";

export type TranslationSlot = {
  value: string;
  comment: string;
};

export type TranslationPluralSlot = {
  value: {
    zero?: string;
    one?: string;
    other: string;
    many?: string;
    few?: string;
  };
  comment: string;
};

const cachePlurals: Record<
  HTMLHtmlElement["lang"],
  Record<string, TranslationPluralSlot>
> = {
  de: dePlural,
  en: enPlural,
  es: esPlural,
  fr: frPlural,
  it: itPlural,
  ja: jaPlural,
  ko: koPlural,
  nl: nlPlural,
  pl: plPlural,
  pt: ptPlural,
  ru: ruPlural,
  sv: svPlural,
  tr: trPlural,
  "zh-CN": zhCNPlural,
  "zh-TW": zhTWPlural,
};

const cache: Record<
  HTMLHtmlElement["lang"],
  Record<string, TranslationSlot>
> = {
  de,
  en,
  es,
  fr,
  it,
  ja,
  ko,
  nl,
  pl,
  pt,
  ru,
  sv,
  tr,
  "zh-CN": zhCN,
  "zh-TW": zhTW,
};

function sanitizeLang(lang?: string): HTMLHtmlElement["lang"] {
  if (!lang) {
    return DEFAULT_LANG;
  }
  if (lang === "zh-CN" || lang === "zh-TW") {
    return lang;
  }
  return lang.split("-")[0];
}

function getTranslations(
  langCode: HTMLHtmlElement["lang"]
): Record<string, TranslationSlot> {
  return cache[langCode] ?? {};
}

function getPluralTranslations(
  langCode: HTMLHtmlElement["lang"]
): Record<string, TranslationPluralSlot> {
  return cachePlurals[langCode] ?? {};
}

export function useI18n(ref?: RefObject<HTMLElement | null>) {
  let queryFn = (selector: string) => document.querySelector(selector);
  if (ref) {
    queryFn = (selector) => {
      if (ref.current) {
        return ref.current.lang
          ? ref.current
          : ref.current.closest(selector) || null;
      }
      return null;
    };
  }
  const [langState, setLangState] = useState(DEFAULT_LANG);

  useEffect(() => {
    const withLangEl = queryFn("[lang]") as HTMLElement | null;
    const lang: HTMLHtmlElement["lang"] = sanitizeLang(
      withLangEl?.getAttribute("lang") || undefined
    );
    if (langState !== lang) {
      setLangState(lang);
    }
    // observe changes to lang attribute
    const observer = new MutationObserver(() => {
      const newLang = sanitizeLang(
        withLangEl?.getAttribute("lang") || undefined
      );
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

  const [translations, setTranslations] = useState<
    Record<string, TranslationSlot>
  >(getTranslations(langState));

  const [plurals, setPlurals] = useState<Record<string, TranslationPluralSlot>>(
    getPluralTranslations(langState)
  );

  useEffect(() => {
    const validTranslations = getTranslations(langState);
    const validPlurals = getPluralTranslations(langState);

    if (validTranslations !== translations) {
      setTranslations(validTranslations);
    }

    if (validPlurals !== plurals) {
      setPlurals(validPlurals);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [langState]);

  return (key: string, plural?: number, opts?: Record<string, string>) => {
    if (plural !== undefined && key in plurals) {
      const zero = plurals[key].value.zero || plurals[key].value.other;
      const one = plurals[key].value.one || plurals[key].value.other;
      const other = plurals[key].value.other;

      if (plural === 0 && zero) {
        return interpolate(zero, {
          count: `${plural}`,
          ...(opts || {}),
        });
      }
      if (plural === 1 && one) {
        return interpolate(one, { count: `${plural}`, ...(opts || {}) });
      }
      if (plural > 1) {
        return interpolate(other, { count: `${plural}`, ...(opts || {}) });
      }
      return key;
    }
    if (key in translations) {
      return translations[key].value;
    }
    return key;
  };
}

/**
 * Interpolate a string with an object
 * the template contains double brackets with the key {{ key }} or {{key}}
 */
function interpolate(tpl: string, obj: Record<string, string>) {
  return tpl.replace(/{{\s*([\w.]+)\s*}}/g, (match, key) => {
    return obj[key] || "";
  });
}
