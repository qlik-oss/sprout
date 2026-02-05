export const PAGE_SIZE = 10;

export type WithFocus = {
  focus: HTMLElement["focus"];
};

export type GetAllItems = (ref: HTMLElement) => NodeList;

export function getEmptyNodeList() {
  return document.querySelectorAll("empty-not-existing");
}
