import {
  AccordionContainer,
  type AccordionContainerProps,
} from "./AccordionContainer";
import { AccordionItem, type AccordionItemProps } from "./AccordionItem";

export type AccordionProps = {
  Container: AccordionContainerProps;
  Item: AccordionItemProps;
};

export const Accordion = {
  Container: AccordionContainer,
  Item: AccordionItem,
};
