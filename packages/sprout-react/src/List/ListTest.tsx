import { useState } from "react";

import {
  List,
  ListDivider,
  ListItem,
  type ListItemProps,
  type ListProps,
} from ".";
import { Menu } from "../Menu";

const items: Array<ListItemProps> = [
  { children: "item 1" },
  { children: "item 2", disabled: true },
  { children: "item 3" },
  { children: "item 4" },
];

export function ListTest(props: ListProps) {
  const [selected, setSelected] = useState(2);
  return (
    <List {...props}>
      {items.map((item, index) => (
        <ListItem
          key={item.children as string}
          {...item}
          selected={selected === index}
          onClick={() => {
            setSelected(index);
          }}
        />
      ))}
      <ListDivider />
      <Menu.Trigger
        onOpenChange={(isOpen) => {
          if (isOpen) {
            setSelected(items.length + 1);
          }
        }}
        menu={
          <>
            <Menu.GroupLabel label="User" />
            <Menu.Item label="Logout" />
            <Menu.Item label="Reload" />
            <Menu.Item label="Share" />
          </>
        }
      >
        <ListItem selected={selected === items.length + 1}>
          Menu Integration
        </ListItem>
      </Menu.Trigger>
      <ListItem onClick={() => {}}>
        With native <input type="checkbox" aria-label="test input" />
      </ListItem>
    </List>
  );
}
