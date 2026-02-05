import{r as u,j as e}from"./iframe-CYyT-rNd.js";import{a as c}from"./Menu.argTypes-BCj-8Voq.js";import{M as t}from"./Menu-BJ4TKxRh.js";import{c as n}from"./classNames-BmP9dLUE.js";import{B as d}from"./Button-B_WU7ehq.js";import"./preload-helper-PPVm8Dsz.js";import"./Button.argTypes-BB49xxDM.js";import"./Icons-CP8MmIFw.js";import"./index-quSI8jkX.js";import"./Add-DcwIOkn_.js";import"./AiSparkles-CDqJAjaL.js";import"./Next-cI6d2vFk.js";import"./Bookmark-w_IQ-P6t.js";import"./Upload-1y14DHO-.js";import"./Text-BZR-PmRB.js";import"./Close-IBeLqb5W.js";import"./SortDescending-CVAYxQhu.js";import"./Undo-BLwRYRdg.js";import"./Person--hO0Fx5n.js";import"./Copy-CTuCBlSc.js";import"./Delete--7nWLgfL.js";import"./Filter-DCjOsxGl.js";import"./Edit-C5Vhfo4K.js";import"./Error-D7GnDcGx.js";import"./History-ClGIlAJq.js";import"./Search-DcLlWkDR.js";import"./Info-kPGn8DpC.js";import"./Subtract-D9yFNKnL.js";import"./Map-BB3BkA5L.js";import"./NewTab-CSZjxaIu.js";import"./Notification-DqLr7fgN.js";import"./Paste-CUVznJnn.js";import"./Warning-BO-41SRA.js";import"./Tenant-1QyupFgC.js";import"./sprout-UDUY6uO8.js";import"./icons-BJP5nzPh.js";import"./useControl-CbxOYg9r.js";import"./Divider-DGcHtPQB.js";import"./Tooltip-Bq8n5z5D.js";import"./sprout-tokens-D9QRO1qB.js";import"./renderOrClone-GWN5S5OT.js";import"./useId-BEfewr8x.js";import"./list-B1zo5gaH.js";import"./useI18n-B8acZ0ym.js";import"./IconButton-DQqeG5o4.js";import"./Skeleton-BcSpZhaC.js";import"./Button.module-C2ELNEem.js";import"./Badge-M4fZ9aOR.js";import"./ProgressCircular-BThLXJeo.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,pe={title:"Components/Menu/Composition/Contextual",component:t.Contextual},a={render:({onClick:m,...l})=>{const[i,o]=u.useState(e.jsx(t.Skeleton,{}));return e.jsx(t.Contextual,{...l,menu:i,wrapperClassName:n("flex","size-full"),onClick:m,onOpenChange:(p,r)=>{if(!p)o(e.jsx(t.Skeleton,{}));else if(r){const s=r.target.tagName;setTimeout(()=>{o(e.jsxs(e.Fragment,{children:[e.jsx(t.GroupLabel,{label:`menu for ${s}`}),s!=="BUTTON"&&e.jsxs(e.Fragment,{children:[e.jsx(t.Item,{label:"Bold"}),e.jsx(t.Item,{label:"Italic"}),e.jsx(t.Item,{label:"Underline"}),e.jsx(t.Trigger,{placement:"right",menu:e.jsxs(e.Fragment,{children:[e.jsx(t.Item,{label:"Lorem"}),e.jsx(t.Item,{label:"Ipsum"})]}),children:e.jsx(t.Item,{label:"Open Submenu",isNested:!0})})]})]}))},1e3)}},children:e.jsxs("div",{className:n("flex","flex-col","p-m","w-full","border-default"),"data-testid":"contextual",children:[e.jsx("h1",{className:n("font-heading-m","text-default"),children:"Main title"}),e.jsx("p",{className:n("font-body-m","text-default"),children:"This a paragraph with a bit of text."}),e.jsx(d,{label:"this is a button",onClick:()=>{}})]})})},argTypes:c,args:{onClick:x(),closeOnRightClickOutside:!0},parameters:{chromatic:{disableSnapshot:!0}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: ({
    onClick,
    ...rest
  }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [menu, setMenu] = useState<ReactNode>(<Menu.Skeleton />);
    return <Menu.Contextual {...rest} menu={menu} wrapperClassName={classNames("flex", "size-full")} onClick={onClick} onOpenChange={(open, e) => {
      if (!open) {
        setMenu(<Menu.Skeleton />);
      } else if (e) {
        const tagName = (e.target as HTMLElement).tagName;
        setTimeout(() => {
          setMenu(<>
                  <Menu.GroupLabel label={\`menu for \${tagName}\`} />
                  {tagName !== "BUTTON" && <>
                      <Menu.Item label="Bold" />
                      <Menu.Item label="Italic" />
                      <Menu.Item label="Underline" />
                      <Menu.Trigger placement="right" menu={<>
                            <Menu.Item label="Lorem" />
                            <Menu.Item label="Ipsum" />
                          </>}>
                        <Menu.Item label="Open Submenu" isNested />
                      </Menu.Trigger>
                    </>}
                </>);
        }, 1000);
      }
    }}>
        <div className={classNames("flex", "flex-col", "p-m", "w-full", "border-default")} data-testid="contextual">
          <h1 className={classNames("font-heading-m", "text-default")}>Main title</h1>
          <p className={classNames("font-body-m", "text-default")}>This a paragraph with a bit of text.</p>
          <Button label="this is a button" onClick={() => {}} />
        </div>
      </Menu.Contextual>;
  },
  argTypes: MenuContextualArgTypes,
  args: {
    onClick: fn(),
    closeOnRightClickOutside: true
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...a.parameters?.docs?.source}}};const ue=["Contextual"];export{a as Contextual,ue as __namedExportsOrder,pe as default};
