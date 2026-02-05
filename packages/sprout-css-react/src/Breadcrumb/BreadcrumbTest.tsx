import { Breadcrumb } from "./Breadcrumb";

export function BreadcrumbTest() {
  return (
    <div>
      <Breadcrumb
        items={[
          {
            children: "Root",
            href: "/",
          },
          {
            children: "Folder",
            href: "/folder",
          },
          {
            children: "Page",
            href: "/page",
          },
        ]}
      />
    </div>
  );
}
