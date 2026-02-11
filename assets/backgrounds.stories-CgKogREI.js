import{j as s}from"./iframe-B-fqCePV.js";import{s as e}from"./sprout-DqOLOcsj.js";import{C as a}from"./Content-50ftW1Zy.js";import"./preload-helper-PPVm8Dsz.js";const n={title:"CSS/sprout-css-modules/backgrounds"},i={name:"background-color",args:{gap:"xl",p:"xl"},parameters:{chromatic:{disableSnapshot:!0},controls:{disable:!0},pseudo:{hover:'[data-state="hover"]',active:'[data-state="active"]',focusVisible:'[data-state="focus"]'}},render:()=>s.jsxs("div",{className:e.classNames("flex","flex-col","gap-xl","px-xl"),children:[s.jsxs("div",{className:e.classNames("flex","border-box","flex-row","gap-xl","py-xl"),children:[s.jsx("div",{className:e.classNames(...a,"bg-disabled"),children:"bg-disabled"}),s.jsx("div",{className:e.classNames(...a,"bg-transparent"),children:"bg-transparent"}),s.jsx("div",{className:e.classNames(...a,"bg-weak"),children:"bg-weak"}),s.jsx("div",{className:e.classNames(...a,"bg-default"),children:"bg-default"}),s.jsx("div",{className:e.classNames(...a,"bg-enabled"),children:"bg-enabled"}),s.jsx("div",{className:e.classNames(...a,"bg-interactive"),children:"bg-interactive"}),s.jsx("div",{className:e.classNames(...a,"bg-pressed"),children:"bg-pressed"}),s.jsx("div",{className:e.classNames(...a,"bg-moderate"),children:"bg-moderate"}),s.jsx("div",{className:e.classNames(...a,"bg-strong"),children:"bg-strong"}),s.jsx("div",{className:e.classNames(...a,"bg-inverse","text-inverse"),children:"bg-inverse"})]}),s.jsxs("div",{className:e.classNames("flex","border-box","flex-row","gap-xl","py-xl"),children:[s.jsx("div",{className:e.classNames(...a,"bg-danger","text-danger-inverse"),children:"bg-danger (text-danger-inverse)"}),s.jsx("div",{className:e.classNames(...a,"bg-danger-weak"),children:"bg-danger-weak (text-default)"}),["default","focus","active","hover","disabled"].map(r=>s.jsxs("button",{"data-state":r,disabled:r==="disabled",type:"button",className:e.classNames(...a,"bg-danger-interactive","text-danger-inverse"),children:["bg-danger-interactive (text-danger-inverse) / ",r]},r))]}),s.jsxs("div",{className:e.classNames("flex","border-box","flex-row","gap-xl","py-xl"),children:[s.jsx("div",{className:e.classNames(...a,"bg-warning","text-warning-inverse"),children:"bg-warning (text-warning-inverse)"}),s.jsx("div",{className:e.classNames(...a,"bg-warning-weak"),children:"bg-warning-weak (text-default)"}),s.jsx("div",{className:e.classNames(...a,"bg-warning-inverse","text-warning"),children:"bg-warning-inverse (text-warning)"})]}),s.jsxs("div",{className:e.classNames("flex","border-box","flex-row","gap-xl","py-xl"),children:[s.jsx("div",{className:e.classNames(...a,"bg-info","text-info-inverse"),children:"bg-info (text-info-inverse)"}),s.jsx("div",{className:e.classNames(...a,"bg-info-weak"),children:"bg-info-weak (text-default)"}),s.jsx("div",{className:e.classNames(...a,"bg-info-inverse","text-info"),children:"bg-info-inverse (text-info)"})]}),s.jsxs("div",{className:e.classNames("flex","border-box","flex-row","gap-xl","py-xl"),children:[s.jsx("div",{className:e.classNames(...a,"bg-success","text-success-inverse"),children:"bg-success (text-success-inverse)"}),s.jsx("div",{className:e.classNames(...a,"bg-success-weak"),children:"bg-success-weak (text-default)"}),s.jsx("div",{className:e.classNames(...a,"bg-success-inverse","text-success"),children:"bg-success-inverse (text-success)"})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "background-color",
  args: {
    gap: "xl",
    p: "xl"
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    },
    controls: {
      disable: true
    },
    pseudo: {
      hover: '[data-state="hover"]',
      active: '[data-state="active"]',
      focusVisible: '[data-state="focus"]'
    }
  },
  render: () => <div className={sprout.classNames("flex", "flex-col", "gap-xl", "px-xl")}>
      <div className={sprout.classNames("flex", "border-box", "flex-row", "gap-xl", "py-xl")}>
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-disabled")}>
          bg-disabled
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-transparent")}>
          bg-transparent
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-weak")}>
          bg-weak
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-default")}>
          bg-default
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-enabled")}>
          bg-enabled
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-interactive")}>
          bg-interactive
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-pressed")}>
          bg-pressed
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-moderate")}>
          bg-moderate
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-strong")}>
          bg-strong
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-inverse", "text-inverse")}>
          bg-inverse
        </div>
      </div>
      <div className={sprout.classNames("flex", "border-box", "flex-row", "gap-xl", "py-xl")}>
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-danger", "text-danger-inverse")}>
          bg-danger (text-danger-inverse)
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-danger-weak")}>
          bg-danger-weak (text-default)
        </div>
        {["default", "focus", "active", "hover", "disabled"].map(state => <button key={state} data-state={state} disabled={state === "disabled"} type="button" className={sprout.classNames(...CONTENT_CLASSES, "bg-danger-interactive", "text-danger-inverse")}>
            bg-danger-interactive (text-danger-inverse) / {state}
          </button>)}
      </div>
      <div className={sprout.classNames("flex", "border-box", "flex-row", "gap-xl", "py-xl")}>
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-warning", "text-warning-inverse")}>
          bg-warning (text-warning-inverse)
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-warning-weak")}>
          bg-warning-weak (text-default)
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-warning-inverse", "text-warning")}>
          bg-warning-inverse (text-warning)
        </div>
      </div>
      <div className={sprout.classNames("flex", "border-box", "flex-row", "gap-xl", "py-xl")}>
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-info", "text-info-inverse")}>
          bg-info (text-info-inverse)
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-info-weak")}>
          bg-info-weak (text-default)
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-info-inverse", "text-info")}>
          bg-info-inverse (text-info)
        </div>
      </div>
      <div className={sprout.classNames("flex", "border-box", "flex-row", "gap-xl", "py-xl")}>
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-success", "text-success-inverse")}>
          bg-success (text-success-inverse)
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-success-weak")}>
          bg-success-weak (text-default)
        </div>
        <div className={sprout.classNames(...CONTENT_CLASSES, "bg-success-inverse", "text-success")}>
          bg-success-inverse (text-success)
        </div>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};const N=["Background"];export{i as Background,N as __namedExportsOrder,n as default};
