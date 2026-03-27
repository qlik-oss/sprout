import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Fn as n,Pn as r,mt as i,nr as a,pt as o,v as s}from"./iframe-RiXBydPV.js";function c(e,t){return Object.fromEntries(Object.entries(e).filter(([e])=>!t.includes(e)))}function l({children:e}){return(0,f.jsx)(`h2`,{className:r(`flex`,`flex-row`,`border-box`,`font-heading-l`,`text-default`,`py-l`),children:e})}function u({children:e}){return(0,f.jsx)(`h3`,{className:r(`flex`,`flex-row`,`border-box`,`font-label-m`,`text-default`,`py-m`),children:e})}var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P=t((()=>{d=e(a()),s(),f=n(),p=[void 0,`0`,`xs`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`],m=[void 0,`default`,`weak`,`moderate`,`strong`,`extra-strong`],h=[void 0,`start`,`end`,`center`,`stretch`],g=r(`font-body-s`,`text-default`),_={width:`fit`,gap:`xl`,border:`strong`,p:`xl`,bgColor:`inverse`,typography:{font:`body_s`,color:`inverse`}},v={bgColor:`default`,border:`moderate`,p:`xl`,alignItems:`center`,justify:`center`,typography:{font:`body_s`,color:`default`}},y={...c(v,[`border`,`style`])},b={gap:`xl`},x={direction:`col`,alignItems:`start`},S={component:o,title:`Components/Box`,args:{direction:`row`,gap:`xs`,border:`default`,typography:{font:`label_s`,color:`default`}},argTypes:{direction:{control:{type:`select`},options:[void 0,`row`,`row-reverse`,`col`,`col-reverse`]},alignContent:{control:{type:`select`},options:h},alignItems:{control:{type:`select`},options:h},alignSelf:{control:{type:`select`},options:h},bgColor:{control:{type:`select`},options:[void 0,`transparent`,`default`,`weak`,`moderate`,`strong`,`enabled`,`disabled`,`interactive`,`inverse`]},boxShadow:{control:{type:`select`},options:[void 0,`none`,`default`,`weak`,`moderate`,`strong`]},justify:{control:{type:`select`},options:[void 0,`start`,`end`,`center`,`between`,`around`]},gap:{control:{type:`select`},options:p},rowGap:{control:{type:`select`},options:p},columnGap:{control:{type:`select`},options:p},border:{control:{type:`select`},options:m},borderTop:{control:{type:`select`},options:m},borderRight:{control:{type:`select`},options:m},borderBottom:{control:{type:`select`},options:m},borderLeft:{control:{type:`select`},options:m},borderWidth:{control:{type:`select`},options:[void 0,`0`,`default`,`strong`]},boxSizing:{control:{type:`select`},options:[void 0,`content-box`,`border-box`]},typography:{control:{type:`object`}},wrap:{control:{type:`select`},options:[void 0,`wrap`,`wrap-reverse`,`nowrap`]},zIndex:{control:{type:`select`},options:[void 0,`stacked`,`floating`,`overlay`,`context`,`time_sensitive`]}}},C=(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{border:`default`,width:`100px`,...y,children:`item 1`}),(0,f.jsxs)(o,{border:`default`,...y,children:[`item 2`,(0,f.jsx)(`br`,{}),`item 2 line 2`]}),(0,f.jsx)(o,{border:`default`,...y,children:`item 3`}),(0,f.jsxs)(o,{border:`default`,...y,children:[`item 4`,(0,f.jsx)(`br`,{}),`item 4 line 2`,(0,f.jsx)(`br`,{}),`item 4 line 3`]})]}),w={name:`Box (deprecated)`,render:e=>(0,f.jsx)(o,{...e,children:C}),args:{gap:`s`},parameters:{chromatic:{disableSnapshot:!0}}},T={name:`getBoxProps (deprecated)`,render:({...e})=>{let[t,n]=(0,d.useState)(0);return(0,f.jsxs)(`button`,{type:`button`,...i(e),onClick:()=>{n(e=>e+1)},style:{background:`var(--sprout-common-background-color-default)`},children:[`Button with deprecated getBoxProps clicked `,t,` times`]})},args:{gap:`m`,border:`default`,p:`xl`,typography:{font:`label_m`,color:`default`}},parameters:{chromatic:{disableSnapshot:!0}}},E={name:`border (deprecated)`,args:{direction:`col`,gap:`0`,border:`none`},parameters:{controls:{disable:!0}},render:e=>(0,f.jsxs)(o,{...e,children:[(0,f.jsx)(l,{children:`border`}),(0,f.jsxs)(o,{...b,children:[(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`none`}),(0,f.jsx)(o,{...y,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`weak`}),(0,f.jsx)(o,{...y,border:`weak`,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`default`}),(0,f.jsx)(o,{...y,border:`default`,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`moderate`}),(0,f.jsx)(o,{...y,border:`moderate`,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`strong`}),(0,f.jsx)(o,{...y,border:`strong`,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`extra-strong`}),(0,f.jsx)(o,{...y,border:`extra-strong`,children:`1`})]})]}),(0,f.jsx)(l,{children:`borderTop`}),(0,f.jsxs)(o,{...b,children:[(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`none`}),(0,f.jsx)(o,{...y,borderTop:`none`,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`weak`}),(0,f.jsx)(o,{...y,borderTop:`weak`,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`default`}),(0,f.jsx)(o,{...y,borderTop:`default`,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`moderate`}),(0,f.jsx)(o,{...y,borderTop:`moderate`,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`strong`}),(0,f.jsx)(o,{...y,borderTop:`strong`,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`extra-strong`}),(0,f.jsx)(o,{...y,borderTop:`extra-strong`,children:`1`})]})]}),(0,f.jsx)(l,{children:`borderRight`}),(0,f.jsxs)(o,{...b,children:[(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`none`}),(0,f.jsx)(o,{...y,borderRight:`none`,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`weak`}),(0,f.jsx)(o,{...y,borderRight:`weak`,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`default`}),(0,f.jsx)(o,{...y,borderRight:`default`,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`moderate`}),(0,f.jsx)(o,{...y,borderRight:`moderate`,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`strong`}),(0,f.jsx)(o,{...y,borderRight:`strong`,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`extra-strong`}),(0,f.jsx)(o,{...y,borderRight:`extra-strong`,children:`1`})]})]}),(0,f.jsx)(l,{children:`borderBottom`}),(0,f.jsxs)(o,{...b,children:[(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`none`}),(0,f.jsx)(o,{...y,borderBottom:`none`,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`weak`}),(0,f.jsx)(o,{...y,borderBottom:`weak`,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`default`}),(0,f.jsx)(o,{...y,borderBottom:`default`,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`moderate`}),(0,f.jsx)(o,{...y,borderBottom:`moderate`,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`strong`}),(0,f.jsx)(o,{...y,borderBottom:`strong`,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`extra-strong`}),(0,f.jsx)(o,{...y,borderBottom:`extra-strong`,children:`1`})]})]}),(0,f.jsx)(l,{children:`borderLeft`}),(0,f.jsxs)(o,{...b,children:[(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`none`}),(0,f.jsx)(o,{...y,borderLeft:`none`,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`weak`}),(0,f.jsx)(o,{...y,borderLeft:`weak`,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`default`}),(0,f.jsx)(o,{...y,borderLeft:`default`,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`moderate`}),(0,f.jsx)(o,{...y,borderLeft:`moderate`,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`strong`}),(0,f.jsx)(o,{...y,borderLeft:`strong`,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`extra-strong`}),(0,f.jsx)(o,{...y,borderLeft:`extra-strong`,children:`1`})]})]}),(0,f.jsx)(l,{children:`borderRadius`}),(0,f.jsxs)(o,{...b,children:[(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`subtle`}),(0,f.jsx)(o,{...y,border:`default`,borderRadius:`subtle`,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`soft`}),(0,f.jsx)(o,{...y,border:`default`,borderRadius:`soft`,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`cushiony`}),(0,f.jsx)(o,{...y,border:`default`,borderRadius:`cushiony`,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`round`}),(0,f.jsx)(o,{...y,border:`default`,borderRadius:`round`,children:`1`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`pill`}),(0,f.jsx)(o,{...y,border:`default`,borderRadius:`pill`,children:`1`})]})]}),(0,f.jsxs)(o,{...b,children:[(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`nested-subtle-xs`}),(0,f.jsx)(o,{...y,border:`default`,borderRadius:`subtle`,children:(0,f.jsx)(o,{...y,border:`default`,borderRadius:`nested-subtle-xs`,children:`1`})})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`nested-soft-s`}),(0,f.jsx)(o,{...y,border:`default`,borderRadius:`soft`,children:(0,f.jsx)(o,{...y,border:`default`,borderRadius:`nested-soft-s`,children:`1`})})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`nested-soft-xs`}),(0,f.jsx)(o,{...y,border:`default`,borderRadius:`soft`,children:(0,f.jsx)(o,{...y,border:`default`,borderRadius:`nested-soft-xs`,children:`1`})})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`nested-cushiony-xs`}),(0,f.jsx)(o,{...y,border:`default`,borderRadius:`cushiony`,children:(0,f.jsx)(o,{...y,border:`default`,borderRadius:`nested-cushiony-xs`,children:`1`})})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`nested-cushiony-s`}),(0,f.jsx)(o,{...y,border:`default`,borderRadius:`cushiony`,children:(0,f.jsx)(o,{...y,border:`default`,borderRadius:`nested-cushiony-s`,children:`1`})})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`nested-cushiony-m`}),(0,f.jsx)(o,{...y,border:`default`,borderRadius:`cushiony`,children:(0,f.jsx)(o,{...y,border:`default`,borderRadius:`nested-cushiony-m`,children:`1`})})]})]}),(0,f.jsxs)(o,{...b,children:[(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`twice-soft-xs`}),(0,f.jsx)(o,{...y,border:`default`,borderRadius:`soft`,children:(0,f.jsx)(o,{...y,border:`default`,borderRadius:`nested-soft-xs`,children:(0,f.jsx)(o,{...y,border:`default`,borderRadius:`twice-soft-xs`,children:`1`})})})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`twice-cushiony-s-xs`}),(0,f.jsx)(o,{...y,border:`default`,borderRadius:`cushiony`,children:(0,f.jsx)(o,{...y,border:`default`,borderRadius:`nested-cushiony-s`,children:(0,f.jsx)(o,{...y,border:`default`,borderRadius:`twice-cushiony-s-xs`,children:`1`})})})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`twice-cushiony-m-s`}),(0,f.jsx)(o,{...y,border:`default`,borderRadius:`cushiony`,children:(0,f.jsx)(o,{...y,border:`default`,borderRadius:`nested-cushiony-m`,children:(0,f.jsx)(o,{...y,border:`default`,borderRadius:`twice-cushiony-m-s`,children:`1`})})})]})]})]})},D={name:`padding (deprecated)`,args:{direction:`col`,border:`none`,gap:`0`},parameters:{controls:{disable:!0}},render:e=>(0,f.jsxs)(o,{...e,children:[(0,f.jsx)(l,{children:`p`}),(0,f.jsxs)(o,{...b,children:[(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`0`}),(0,f.jsx)(o,{...c(v,[`p`]),p:`0`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`s`}),(0,f.jsx)(o,{...c(v,[`p`]),p:`s`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`m`}),(0,f.jsx)(o,{...c(v,[`p`]),p:`m`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`l`}),(0,f.jsx)(o,{...c(v,[`p`]),p:`l`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`xl`}),(0,f.jsx)(o,{...c(v,[`p`]),p:`xl`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`xxl`}),(0,f.jsx)(o,{...c(v,[`p`]),p:`xxl`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`3xl`}),(0,f.jsx)(o,{...c(v,[`p`]),p:`3xl`,children:`content`})]})]}),(0,f.jsx)(l,{children:`px`}),(0,f.jsxs)(o,{...b,children:[(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`0`}),(0,f.jsx)(o,{...c(v,[`p`]),px:`0`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`s`}),(0,f.jsx)(o,{...c(v,[`p`]),px:`s`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`m`}),(0,f.jsx)(o,{...c(v,[`p`]),px:`m`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`l`}),(0,f.jsx)(o,{...c(v,[`p`]),px:`l`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`xl`}),(0,f.jsx)(o,{...c(v,[`p`]),px:`xl`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`xxl`}),(0,f.jsx)(o,{...c(v,[`p`]),px:`xxl`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`3xl`}),(0,f.jsx)(o,{...c(v,[`p`]),px:`3xl`,children:`content`})]})]}),(0,f.jsx)(l,{children:`py`}),(0,f.jsxs)(o,{...b,children:[(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`0`}),(0,f.jsx)(o,{...c(v,[`p`]),py:`0`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`s`}),(0,f.jsx)(o,{...c(v,[`p`]),py:`s`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`m`}),(0,f.jsx)(o,{...c(v,[`p`]),py:`m`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`l`}),(0,f.jsx)(o,{...c(v,[`p`]),py:`l`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`xl`}),(0,f.jsx)(o,{...c(v,[`p`]),py:`xl`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`xxl`}),(0,f.jsx)(o,{...c(v,[`p`]),py:`xxl`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`3xl`}),(0,f.jsx)(o,{...c(v,[`p`]),py:`3xl`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`density-xs`}),(0,f.jsx)(o,{...c(v,[`p`]),py:`density-xs`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`density-s`}),(0,f.jsx)(o,{...c(v,[`p`]),py:`density-s`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`density-m`}),(0,f.jsx)(o,{...c(v,[`p`]),py:`density-m`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`density-l`}),(0,f.jsx)(o,{...c(v,[`p`]),py:`density-l`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`density-xl`}),(0,f.jsx)(o,{...c(v,[`p`]),py:`density-xl`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`density-xxl`}),(0,f.jsx)(o,{...c(v,[`p`]),py:`density-xxl`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`density-3xl`}),(0,f.jsx)(o,{...c(v,[`p`]),py:`density-3xl`,children:`content`})]})]}),(0,f.jsx)(l,{children:`pt`}),(0,f.jsxs)(o,{...b,children:[(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`0`}),(0,f.jsx)(o,{...c(v,[`p`]),pt:`0`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`s`}),(0,f.jsx)(o,{...c(v,[`p`]),pt:`s`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`m`}),(0,f.jsx)(o,{...c(v,[`p`]),pt:`m`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`l`}),(0,f.jsx)(o,{...c(v,[`p`]),pt:`l`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`xl`}),(0,f.jsx)(o,{...c(v,[`p`]),pt:`xl`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`xxl`}),(0,f.jsx)(o,{...c(v,[`p`]),pt:`xxl`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`3xl`}),(0,f.jsx)(o,{...c(v,[`p`]),pt:`3xl`,children:`content`})]})]}),(0,f.jsx)(l,{children:`pr`}),(0,f.jsxs)(o,{...b,children:[(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`0`}),(0,f.jsx)(o,{...c(v,[`p`]),pr:`0`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`s`}),(0,f.jsx)(o,{...c(v,[`p`]),pr:`s`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`m`}),(0,f.jsx)(o,{...c(v,[`p`]),pr:`m`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`l`}),(0,f.jsx)(o,{...c(v,[`p`]),pr:`l`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`xl`}),(0,f.jsx)(o,{...c(v,[`p`]),pr:`xl`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`xxl`}),(0,f.jsx)(o,{...c(v,[`p`]),pr:`xxl`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`3xl`}),(0,f.jsx)(o,{...c(v,[`p`]),pr:`3xl`,children:`content`})]})]}),(0,f.jsx)(l,{children:`pb`}),(0,f.jsxs)(o,{...b,children:[(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`0`}),(0,f.jsx)(o,{...c(v,[`p`]),pb:`0`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`s`}),(0,f.jsx)(o,{...c(v,[`p`]),pb:`s`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`m`}),(0,f.jsx)(o,{...c(v,[`p`]),pb:`m`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`l`}),(0,f.jsx)(o,{...c(v,[`p`]),pb:`l`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`xl`}),(0,f.jsx)(o,{...c(v,[`p`]),pb:`xl`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`xxl`}),(0,f.jsx)(o,{...c(v,[`p`]),pb:`xxl`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`3xl`}),(0,f.jsx)(o,{...c(v,[`p`]),pb:`3xl`,children:`content`})]})]}),(0,f.jsx)(l,{children:`pl`}),(0,f.jsxs)(o,{...b,children:[(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`0`}),(0,f.jsx)(o,{...c(v,[`p`]),pl:`0`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`s`}),(0,f.jsx)(o,{...c(v,[`p`]),pl:`s`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`m`}),(0,f.jsx)(o,{...c(v,[`p`]),pl:`m`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`l`}),(0,f.jsx)(o,{...c(v,[`p`]),pl:`l`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`xl`}),(0,f.jsx)(o,{...c(v,[`p`]),pl:`xl`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`xxl`}),(0,f.jsx)(o,{...c(v,[`p`]),pl:`xxl`,children:`content`})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`3xl`}),(0,f.jsx)(o,{...c(v,[`p`]),pl:`3xl`,children:`content`})]})]})]})},O={name:`boxShadow (deprecated)`,args:{gap:`xl`,p:`xl`},parameters:{controls:{disable:!0},chromatic:{disableSnapshot:!0}},render:e=>(0,f.jsxs)(o,{...e,children:[(0,f.jsx)(o,{boxShadow:`none`,...y,borderRadius:`subtle`,border:`default`,children:`none`}),(0,f.jsx)(o,{boxShadow:`weak`,...y,borderRadius:`subtle`,border:`default`,children:`weak`}),(0,f.jsx)(o,{boxShadow:`default`,...y,borderRadius:`subtle`,border:`default`,children:`default`}),(0,f.jsx)(o,{boxShadow:`moderate`,...y,borderRadius:`subtle`,border:`default`,children:`moderate`}),(0,f.jsx)(o,{boxShadow:`strong`,...y,borderRadius:`subtle`,border:`default`,children:`strong`})]})},k={name:`bgColor (deprecated)`,args:{gap:`xl`,p:`xl`},parameters:{chromatic:{disableSnapshot:!0},controls:{disable:!0}},render:e=>(0,f.jsxs)(o,{...e,children:[(0,f.jsx)(o,{...y,bgColor:`disabled`,borderRadius:`subtle`,border:`default`,children:`disabled`}),(0,f.jsx)(o,{...y,bgColor:`transparent`,borderRadius:`subtle`,border:`default`,children:`transparent`}),(0,f.jsx)(o,{...y,bgColor:`weak`,borderRadius:`subtle`,border:`default`,children:`weak`}),(0,f.jsx)(o,{...y,bgColor:`default`,borderRadius:`subtle`,border:`default`,children:`default`}),(0,f.jsx)(o,{...y,bgColor:`enabled`,borderRadius:`subtle`,border:`default`,children:`enabled`}),(0,f.jsx)(o,{...y,bgColor:`interactive`,borderRadius:`subtle`,border:`default`,children:`interactive`}),(0,f.jsx)(o,{...y,bgColor:`moderate`,borderRadius:`subtle`,border:`default`,children:`moderate`}),(0,f.jsx)(o,{...y,bgColor:`strong`,borderRadius:`subtle`,border:`default`,children:`strong`}),(0,f.jsx)(o,{...y,bgColor:`inverse`,borderRadius:`subtle`,border:`default`,typography:{font:`body_s`,color:`inverse`},children:`inverse`})]})},A={name:`width=container-sizing (deprecated)`,parameters:{chromatic:{disableSnapshot:!0},controls:{disable:!0}},render:()=>(0,f.jsxs)(o,{direction:`col`,gap:`m`,p:`s`,children:[(0,f.jsxs)(o,{direction:`col`,gap:`m`,width:`m`,children:[(0,f.jsx)(`h1`,{className:r(`flex`,`flex-row`,`border-box`,`font-heading-m`,`text-default`),children:`Container`}),(0,f.jsxs)(`p`,{className:r(`font-body-s`,`text-default`),children:[`As we do not have a set of generic layouts in mind and the fact CSS media query doesnt support the usage of tokens we have decided to explain it like this. Media query are simple enought to write so it is ok to use hard coded value for`,` `,(0,f.jsx)(`strong`,{className:r(`font-label-s-emphasized`),children:`breakpoint`}),` `,`based layout. You have already a good examples on the`,` `,(0,f.jsx)(`strong`,{className:r(`font-label-s-emphasized`),children:`Modal`}),` `,`component.`]})]}),(0,f.jsx)(o,{border:`default`,width:`xxs`,...y,children:`xxs`}),(0,f.jsx)(o,{border:`default`,width:`xs`,...y,children:`xs`}),(0,f.jsx)(o,{border:`default`,width:`s`,...y,children:`s`}),(0,f.jsx)(o,{border:`default`,width:`m`,...y,children:`m`}),(0,f.jsx)(o,{border:`default`,width:`l`,...y,children:`l`}),(0,f.jsx)(o,{border:`default`,width:`xl`,...y,children:`xl`}),(0,f.jsx)(o,{border:`default`,width:`xxl`,...y,children:`m`}),(0,f.jsx)(o,{border:`default`,width:`3xl`,...y,children:`3xl`}),(0,f.jsx)(o,{border:`default`,width:`4xl`,...y,children:`4xl`})]})},j={name:`zIndex (deprecated)`,args:{gap:`xl`,p:`xl`},parameters:{controls:{disable:!0},chromatic:{disableSnapshot:!0}},render:e=>(0,f.jsxs)(o,{...e,width:`400px`,gap:`0`,direction:`col`,children:[(0,f.jsx)(o,{zIndex:`cursor`,...y,borderRadius:`subtle`,border:`default`,width:`calc(100% - (6 * var(--sprout-common-sizing-xxl)))`,style:{marginBlockStart:`calc(-1 * var(--sprout-common-sizing-m))`},children:`cursor`}),(0,f.jsx)(o,{zIndex:`time_sensitive`,...y,borderRadius:`subtle`,border:`default`,width:`calc(100% - (5 * var(--sprout-common-sizing-xxl)))`,style:{marginBlockStart:`calc(-1 * var(--sprout-common-sizing-m))`},children:`time_sensitive`}),(0,f.jsx)(o,{zIndex:`context`,...y,borderRadius:`subtle`,border:`default`,width:`calc(100% - (4 * var(--sprout-common-sizing-xxl)))`,style:{marginBlockStart:`calc(-1 * var(--sprout-common-sizing-m))`},children:`context`}),(0,f.jsx)(o,{zIndex:`overlay`,...y,borderRadius:`subtle`,border:`default`,width:`calc(100% - (3 * var(--sprout-common-sizing-xxl)))`,style:{marginBlockStart:`calc(-1 * var(--sprout-common-sizing-m))`},children:`overlay`}),(0,f.jsx)(o,{zIndex:`floating`,...y,borderRadius:`subtle`,border:`default`,width:`calc(100% - (2 * var(--sprout-common-sizing-xxl)))`,style:{marginBlockStart:`calc(-1 * var(--sprout-common-sizing-m))`},children:`floating`}),(0,f.jsx)(o,{zIndex:`stacked`,...y,borderRadius:`subtle`,border:`default`,width:`calc(100% - (1 * var(--sprout-common-sizing-xxl)))`,style:{marginBlockStart:`calc(-1 * var(--sprout-common-sizing-m))`},children:`stacked`}),(0,f.jsx)(o,{zIndex:void 0,...y,borderRadius:`subtle`,border:`default`,style:{marginBlockStart:`calc(-1 * var(--sprout-common-sizing-m))`},children:`undefined`})]})},M={args:{direction:`col`,border:`none`,typography:{font:`label_s`,color:`default`},bgColor:`default`},render:e=>(0,f.jsxs)(o,{...e,children:[(0,f.jsx)(l,{children:`direction`}),(0,f.jsxs)(o,{...b,children:[(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`row (default)`}),(0,f.jsxs)(o,{..._,direction:`row`,children:[(0,f.jsx)(o,{...v,children:`1`}),(0,f.jsx)(o,{...v,children:`2`}),(0,f.jsx)(o,{...v,children:`3`})]})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`row-reverse`}),(0,f.jsxs)(o,{..._,direction:`row-reverse`,children:[(0,f.jsx)(o,{...v,children:`1`}),(0,f.jsx)(o,{...v,children:`2`}),(0,f.jsx)(o,{...v,children:`3`})]})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`col`}),(0,f.jsxs)(o,{..._,direction:`col`,children:[(0,f.jsx)(o,{...v,children:`1`}),(0,f.jsx)(o,{...v,children:`2`}),(0,f.jsx)(o,{...v,children:`3`})]})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`col-reverse`}),(0,f.jsxs)(o,{..._,direction:`col-reverse`,children:[(0,f.jsx)(o,{...v,children:`1`}),(0,f.jsx)(o,{...v,children:`2`}),(0,f.jsx)(o,{...v,children:`3`})]})]})]}),(0,f.jsx)(l,{children:`wrap`}),(0,f.jsxs)(o,{...b,children:[(0,f.jsxs)(o,{...x,width:`400px`,children:[(0,f.jsx)(u,{children:`nowrap (default)`}),(0,f.jsxs)(o,{..._,width:`200px`,children:[(0,f.jsx)(o,{...v,children:`1`}),(0,f.jsx)(o,{...v,children:`2`}),(0,f.jsx)(o,{...v,children:`3`}),(0,f.jsx)(o,{...v,children:`4`}),(0,f.jsx)(o,{...v,children:`5`}),(0,f.jsx)(o,{...v,children:`6`})]})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`wrap`}),(0,f.jsxs)(o,{..._,wrap:`wrap`,width:`200px`,children:[(0,f.jsx)(o,{...v,children:`1`}),(0,f.jsx)(o,{...v,children:`2`}),(0,f.jsx)(o,{...v,children:`3`}),(0,f.jsx)(o,{...v,children:`4`}),(0,f.jsx)(o,{...v,children:`5`}),(0,f.jsx)(o,{...v,children:`6`})]})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`wrap-reverse`}),(0,f.jsxs)(o,{..._,wrap:`wrap-reverse`,width:`200px`,children:[(0,f.jsx)(o,{...v,children:`1`}),(0,f.jsx)(o,{...v,children:`2`}),(0,f.jsx)(o,{...v,children:`3`}),(0,f.jsx)(o,{...v,children:`4`}),(0,f.jsx)(o,{...v,children:`5`}),(0,f.jsx)(o,{...v,children:`6`})]})]})]}),(0,f.jsx)(l,{children:`justify`}),(0,f.jsxs)(o,{...b,wrap:`wrap`,children:[(0,f.jsxs)(o,{...x,width:`400px`,children:[(0,f.jsx)(u,{children:`start (default)`}),(0,f.jsxs)(o,{..._,width:`400px`,children:[(0,f.jsx)(o,{...v,children:`1`}),(0,f.jsx)(o,{...v,children:`2`}),(0,f.jsx)(o,{...v,children:`3`})]})]}),(0,f.jsxs)(o,{...x,width:`400px`,children:[(0,f.jsx)(u,{children:`end`}),(0,f.jsxs)(o,{..._,justify:`end`,width:`400px`,children:[(0,f.jsx)(o,{...v,children:`1`}),(0,f.jsx)(o,{...v,children:`2`}),(0,f.jsx)(o,{...v,children:`3`})]})]}),(0,f.jsxs)(o,{...x,width:`400px`,children:[(0,f.jsx)(u,{children:`center`}),(0,f.jsxs)(o,{..._,justify:`center`,width:`400px`,children:[(0,f.jsx)(o,{...v,children:`1`}),(0,f.jsx)(o,{...v,children:`2`}),(0,f.jsx)(o,{...v,children:`3`})]})]}),(0,f.jsxs)(o,{...x,width:`400px`,children:[(0,f.jsx)(u,{children:`between`}),(0,f.jsxs)(o,{..._,justify:`between`,width:`400px`,children:[(0,f.jsx)(o,{...v,children:`1`}),(0,f.jsx)(o,{...v,children:`2`}),(0,f.jsx)(o,{...v,children:`3`})]})]}),(0,f.jsxs)(o,{...x,width:`400px`,children:[(0,f.jsx)(u,{children:`around`}),(0,f.jsxs)(o,{..._,justify:`around`,width:`400px`,children:[(0,f.jsx)(o,{...v,children:`1`}),(0,f.jsx)(o,{...v,children:`2`}),(0,f.jsx)(o,{...v,children:`3`})]})]}),(0,f.jsxs)(o,{...x,width:`400px`,children:[(0,f.jsx)(u,{children:`evenly`}),(0,f.jsxs)(o,{..._,justify:`evenly`,width:`400px`,children:[(0,f.jsx)(o,{...v,children:`1`}),(0,f.jsx)(o,{...v,children:`2`}),(0,f.jsx)(o,{...v,children:`3`})]})]})]}),(0,f.jsx)(l,{children:`alignItems`}),(0,f.jsxs)(o,{...b,wrap:`wrap`,children:[(0,f.jsxs)(o,{...x,width:`400px`,children:[(0,f.jsx)(u,{children:`stretch (default)`}),(0,f.jsxs)(o,{..._,height:`150px`,children:[(0,f.jsx)(o,{...v,children:`1`}),(0,f.jsx)(o,{...v,children:`2`}),(0,f.jsx)(o,{...v,children:`3`})]})]}),(0,f.jsxs)(o,{...x,width:`400px`,children:[(0,f.jsx)(u,{children:`start`}),(0,f.jsxs)(o,{..._,alignItems:`start`,height:`150px`,children:[(0,f.jsx)(o,{...v,height:`20px`,children:`1`}),(0,f.jsx)(o,{...v,height:`100px`,children:`2`}),(0,f.jsx)(o,{...v,children:`3`})]})]}),(0,f.jsxs)(o,{...x,width:`400px`,children:[(0,f.jsx)(u,{children:`end`}),(0,f.jsxs)(o,{..._,alignItems:`end`,height:`150px`,children:[(0,f.jsx)(o,{...v,height:`20px`,children:`1`}),(0,f.jsx)(o,{...v,height:`100px`,children:`2`}),(0,f.jsx)(o,{...v,children:`3`})]})]}),(0,f.jsxs)(o,{...x,width:`400px`,children:[(0,f.jsx)(u,{children:`center`}),(0,f.jsxs)(o,{..._,alignItems:`center`,height:`150px`,children:[(0,f.jsx)(o,{...v,height:`20px`,children:`1`}),(0,f.jsx)(o,{...v,height:`100px`,children:`2`}),(0,f.jsx)(o,{...v,children:`3`})]})]}),(0,f.jsxs)(o,{...x,width:`400px`,children:[(0,f.jsx)(u,{children:`baseline`}),(0,f.jsxs)(o,{..._,alignItems:`baseline`,height:`150px`,children:[(0,f.jsx)(o,{...v,alignItems:`center`,height:`100px`,children:(0,f.jsx)(`h1`,{className:g,children:`Text text`})}),(0,f.jsx)(o,{...v,alignItems:`end`,height:`100px`,children:(0,f.jsx)(`p`,{className:g,children:`Text text`})}),(0,f.jsx)(o,{...v,alignItems:`start`,height:`100px`,children:(0,f.jsx)(`h2`,{className:g,children:`Text text`})})]})]})]}),(0,f.jsx)(l,{children:`alignContent`}),(0,f.jsxs)(o,{...b,wrap:`wrap`,children:[(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`start (default)`}),(0,f.jsxs)(o,{..._,alignContent:`start`,wrap:`wrap`,height:`250px`,width:`200px`,children:[(0,f.jsx)(o,{...v,height:`20px`,children:`1`}),(0,f.jsx)(o,{...v,children:`2`}),(0,f.jsx)(o,{...v,height:`20px`,children:`3`}),(0,f.jsx)(o,{...v,children:`4`}),(0,f.jsx)(o,{...v,children:`5`})]})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`end`}),(0,f.jsxs)(o,{..._,alignContent:`end`,wrap:`wrap`,height:`250px`,width:`200px`,children:[(0,f.jsx)(o,{...v,height:`20px`,children:`1`}),(0,f.jsx)(o,{...v,children:`2`}),(0,f.jsx)(o,{...v,height:`20px`,children:`3`}),(0,f.jsx)(o,{...v,children:`4`}),(0,f.jsx)(o,{...v,children:`5`})]})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`center`}),(0,f.jsxs)(o,{..._,alignContent:`center`,wrap:`wrap`,height:`250px`,width:`200px`,children:[(0,f.jsx)(o,{...v,height:`20px`,children:`1`}),(0,f.jsx)(o,{...v,children:`2`}),(0,f.jsx)(o,{...v,height:`20px`,children:`3`}),(0,f.jsx)(o,{...v,children:`4`}),(0,f.jsx)(o,{...v,children:`5`})]})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`stretch`}),(0,f.jsxs)(o,{..._,alignContent:`stretch`,wrap:`wrap`,height:`250px`,width:`200px`,children:[(0,f.jsx)(o,{...v,height:`20px`,children:`1`}),(0,f.jsx)(o,{...v,children:`2`}),(0,f.jsx)(o,{...v,height:`20px`,children:`3`}),(0,f.jsx)(o,{...v,children:`4`}),(0,f.jsx)(o,{...v,children:`5`})]})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`between`}),(0,f.jsxs)(o,{..._,alignContent:`between`,wrap:`wrap`,height:`250px`,width:`200px`,children:[(0,f.jsx)(o,{...v,height:`20px`,children:`1`}),(0,f.jsx)(o,{...v,children:`2`}),(0,f.jsx)(o,{...v,height:`20px`,children:`3`}),(0,f.jsx)(o,{...v,children:`4`}),(0,f.jsx)(o,{...v,children:`5`})]})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`around`}),(0,f.jsxs)(o,{..._,alignContent:`around`,wrap:`wrap`,height:`250px`,width:`200px`,children:[(0,f.jsx)(o,{...v,height:`20px`,children:`1`}),(0,f.jsx)(o,{...v,children:`2`}),(0,f.jsx)(o,{...v,height:`20px`,children:`3`}),(0,f.jsx)(o,{...v,children:`4`}),(0,f.jsx)(o,{...v,children:`5`})]})]})]}),(0,f.jsxs)(o,{direction:`col`,children:[(0,f.jsx)(l,{children:`gap, row-gap, column-gap`}),(0,f.jsxs)(o,{...b,children:[(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`gap=s`}),(0,f.jsxs)(o,{..._,direction:`row`,alignItems:`start`,wrap:`wrap`,width:`200px`,gap:`s`,children:[(0,f.jsx)(o,{...v,children:`1`}),(0,f.jsx)(o,{...v,children:`2`}),(0,f.jsx)(o,{...v,children:`3`})]})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`columGap=s rowGap=xl`}),(0,f.jsxs)(o,{..._,direction:`row`,alignItems:`start`,wrap:`wrap`,width:`200px`,rowGap:`xl`,columnGap:`s`,children:[(0,f.jsx)(o,{...v,children:`1`}),(0,f.jsx)(o,{...v,children:`2`}),(0,f.jsx)(o,{...v,children:`3`}),(0,f.jsx)(o,{...v,children:`4`}),(0,f.jsx)(o,{...v,children:`5`})]})]})]})]}),(0,f.jsxs)(o,{direction:`col`,children:[(0,f.jsx)(l,{children:`grow / shrink`}),(0,f.jsxs)(o,{...b,children:[(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`grow`}),(0,f.jsxs)(o,{..._,direction:`row`,width:`300px`,children:[(0,f.jsx)(o,{...v,grow:1,children:`1`}),(0,f.jsx)(o,{...v,grow:1,children:`1`}),(0,f.jsx)(o,{...v,grow:1,children:`1`})]}),(0,f.jsxs)(o,{..._,direction:`row`,width:`300px`,children:[(0,f.jsx)(o,{...v,grow:1,children:`1`}),(0,f.jsx)(o,{...v,grow:2,children:`2`}),(0,f.jsx)(o,{...v,grow:1,children:`1`})]})]}),(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`shrink`}),(0,f.jsx)(o,{..._,direction:`row`,width:`280px`,children:(0,f.jsx)(o,{...v,basis:`300px`,shrink:0,children:`shrink = 0`})}),(0,f.jsxs)(o,{..._,direction:`row`,width:`280px`,children:[(0,f.jsx)(o,{...v,basis:`300px`,shrink:1,children:`shrink = 1`}),(0,f.jsx)(o,{...v,basis:`300px`,shrink:1,children:`shrink = 1`})]}),(0,f.jsxs)(o,{..._,direction:`row`,width:`280px`,children:[(0,f.jsx)(o,{...v,basis:`300px`,shrink:2,children:`shrink = 2`}),(0,f.jsx)(o,{...v,basis:`300px`,shrink:1,children:`shrink = 1`})]})]})]})]}),(0,f.jsxs)(o,{direction:`col`,children:[(0,f.jsx)(l,{children:`align-self`}),(0,f.jsx)(o,{...b,children:(0,f.jsxs)(o,{..._,direction:`row`,height:`250px`,alignItems:`start`,children:[(0,f.jsx)(o,{...v,alignSelf:`start`,children:`start`}),(0,f.jsx)(o,{...v,alignSelf:`center`,children:`center`}),(0,f.jsx)(o,{...v,alignSelf:`end`,children:`end`}),(0,f.jsx)(o,{...v,children:`3`}),(0,f.jsx)(o,{...v,children:`4`})]})})]}),(0,f.jsxs)(o,{direction:`col`,children:[(0,f.jsx)(l,{children:`Overflow`}),(0,f.jsx)(o,{...b,children:(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`overflow`}),(0,f.jsxs)(o,{..._,direction:`row`,width:`fit`,overflow:`visible`,children:[(0,f.jsx)(o,{...v,overflow:`auto`,justify:`start`,width:`80px`,noShrink:!0,tabIndex:0,children:(0,f.jsx)(o,{width:`500px`,noShrink:!0,grow:!0,children:`auto Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`})}),(0,f.jsx)(o,{...v,overflow:`hidden`,justify:`start`,width:`80px`,noShrink:!0,children:(0,f.jsx)(o,{width:`500px`,noShrink:!0,grow:!0,alignItems:`center`,children:`hidden Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`})}),(0,f.jsx)(o,{...v,overflow:`scroll`,justify:`start`,width:`80px`,noShrink:!0,tabIndex:0,children:(0,f.jsx)(o,{width:`500px`,noShrink:!0,grow:!0,children:`scroll Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`})}),(0,f.jsx)(o,{...v,overflow:`visible`,justify:`start`,width:`80px`,noShrink:!0,children:(0,f.jsx)(o,{width:`500px`,noShrink:!0,grow:!0,typography:{font:`body_m`,color:`default`},children:`visible Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`})})]})]})}),(0,f.jsx)(o,{...b,children:(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`overflow-x`}),(0,f.jsxs)(o,{..._,direction:`row`,width:`fit-content`,overflowX:`visible`,children:[(0,f.jsx)(o,{...v,overflowX:`auto`,justify:`start`,width:`80px`,noShrink:!0,tabIndex:0,children:(0,f.jsx)(o,{width:`500px`,noShrink:!0,grow:!0,children:`auto Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`})}),(0,f.jsx)(o,{...v,overflowX:`hidden`,justify:`start`,width:`80px`,noShrink:!0,children:(0,f.jsx)(o,{width:`500px`,noShrink:!0,grow:!0,alignItems:`center`,children:`hidden Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`})}),(0,f.jsx)(o,{...v,overflowX:`scroll`,justify:`start`,width:`80px`,noShrink:!0,tabIndex:0,children:(0,f.jsx)(o,{width:`500px`,noShrink:!0,grow:!0,children:`scroll Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`})}),(0,f.jsx)(o,{...v,overflowX:`visible`,justify:`start`,width:`80px`,noShrink:!0,children:(0,f.jsx)(o,{width:`500px`,noShrink:!0,grow:!0,typography:{font:`body_m`,color:`default`},children:`visible Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`})})]})]})}),(0,f.jsx)(o,{...b,children:(0,f.jsxs)(o,{...x,children:[(0,f.jsx)(u,{children:`overflowY`}),(0,f.jsxs)(o,{..._,direction:`row`,width:`fit-content`,children:[(0,f.jsx)(o,{...v,overflowY:`auto`,justify:`start`,width:`110px`,height:`80px`,noShrink:!0,tabIndex:0,children:(0,f.jsx)(o,{height:`200px`,children:`auto Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`})}),(0,f.jsx)(o,{...v,overflowY:`hidden`,justify:`start`,width:`110px`,height:`80px`,noShrink:!0,children:(0,f.jsx)(o,{height:`200px`,alignItems:`center`,children:`hidden Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`})}),(0,f.jsx)(o,{...v,overflowY:`scroll`,justify:`start`,width:`110px`,height:`80px`,noShrink:!0,tabIndex:0,children:(0,f.jsx)(o,{height:`200px`,children:`scroll Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`})}),(0,f.jsx)(o,{...v,overflowY:`visible`,justify:`start`,width:`110px`,height:`80px`,noShrink:!0,children:(0,f.jsx)(o,{height:`200px`,typography:{font:`body_m`,color:`default`},children:`visible Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`})})]})]})})]})]}),parameters:{controls:{disable:!0}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Box (deprecated)",
  render: props => <Box {...props}>{BoxContent}</Box>,
  args: {
    gap: "s"
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "getBoxProps (deprecated)",
  render: ({
    ...props
  }) => {
    const [state, setState] = useState(0);
    return <button type="button" {...getBoxProps(props)} onClick={() => {
      setState(prev => prev + 1);
    }} style={{
      background: "var(--sprout-common-background-color-default)"
    }}>
        Button with deprecated getBoxProps clicked {state} times
      </button>;
  },
  args: {
    gap: "m",
    border: "default",
    p: "xl",
    typography: {
      font: "label_m",
      color: "default"
    }
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "border (deprecated)",
  args: {
    direction: "col",
    gap: "0",
    border: "none"
  },
  parameters: {
    controls: {
      disable: true
    }
  },
  render: props => <Box {...props}>
      <PropertyTile>border</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>none</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN}>1</Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>weak</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="weak">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>default</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="default">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>moderate</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="moderate">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>strong</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="strong">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>extra-strong</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="extra-strong">
            1
          </Box>
        </Box>
      </Box>
      <PropertyTile>borderTop</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>none</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderTop="none">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>weak</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderTop="weak">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>default</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderTop="default">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>moderate</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderTop="moderate">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>strong</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderTop="strong">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>extra-strong</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderTop="extra-strong">
            1
          </Box>
        </Box>
      </Box>
      <PropertyTile>borderRight</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>none</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderRight="none">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>weak</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderRight="weak">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>default</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderRight="default">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>moderate</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderRight="moderate">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>strong</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderRight="strong">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>extra-strong</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderRight="extra-strong">
            1
          </Box>
        </Box>
      </Box>
      <PropertyTile>borderBottom</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>none</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderBottom="none">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>weak</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderBottom="weak">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>default</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderBottom="default">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>moderate</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderBottom="moderate">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>strong</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderBottom="strong">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>extra-strong</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderBottom="extra-strong">
            1
          </Box>
        </Box>
      </Box>
      <PropertyTile>borderLeft</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>none</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderLeft="none">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>weak</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderLeft="weak">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>default</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderLeft="default">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>moderate</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderLeft="moderate">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>strong</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderLeft="strong">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>extra-strong</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} borderLeft="extra-strong">
            1
          </Box>
        </Box>
      </Box>
      <PropertyTile>borderRadius</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>subtle</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="subtle">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>soft</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="soft">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>cushiony</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="cushiony">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>round</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="round">
            1
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>pill</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="pill">
            1
          </Box>
        </Box>
      </Box>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>nested-subtle-xs</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="subtle">
            <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="nested-subtle-xs">
              1
            </Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>nested-soft-s</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="soft">
            <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="nested-soft-s">
              1
            </Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>nested-soft-xs</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="soft">
            <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="nested-soft-xs">
              1
            </Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>nested-cushiony-xs</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="cushiony">
            <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="nested-cushiony-xs">
              1
            </Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>nested-cushiony-s</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="cushiony">
            <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="nested-cushiony-s">
              1
            </Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>nested-cushiony-m</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="cushiony">
            <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="nested-cushiony-m">
              1
            </Box>
          </Box>
        </Box>
      </Box>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>twice-soft-xs</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="soft">
            <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="nested-soft-xs">
              <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="twice-soft-xs">
                1
              </Box>
            </Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>twice-cushiony-s-xs</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="cushiony">
            <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="nested-cushiony-s">
              <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="twice-cushiony-s-xs">
                1
              </Box>
            </Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>twice-cushiony-m-s</PropertyValue>
          <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="cushiony">
            <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="nested-cushiony-m">
              <Box {...CONTENT_PROPS_TOKEN} border="default" borderRadius="twice-cushiony-m-s">
                1
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "padding (deprecated)",
  args: {
    direction: "col",
    border: "none",
    gap: "0"
  },
  parameters: {
    controls: {
      disable: true
    }
  },
  render: props => <Box {...props}>
      <PropertyTile>p</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>0</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} p="0">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>s</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} p="s">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>m</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} p="m">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>l</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} p="l">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} p="xl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>xxl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} p="xxl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>3xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} p="3xl">
            content
          </Box>
        </Box>
      </Box>
      <PropertyTile>px</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>0</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} px="0">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>s</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} px="s">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>m</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} px="m">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>l</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} px="l">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} px="xl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>xxl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} px="xxl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>3xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} px="3xl">
            content
          </Box>
        </Box>
      </Box>
      <PropertyTile>py</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>0</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} py="0">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>s</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} py="s">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>m</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} py="m">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>l</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} py="l">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} py="xl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>xxl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} py="xxl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>3xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} py="3xl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>density-xs</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} py="density-xs">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>density-s</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} py="density-s">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>density-m</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} py="density-m">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>density-l</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} py="density-l">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>density-xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} py="density-xl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>density-xxl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} py="density-xxl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>density-3xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} py="density-3xl">
            content
          </Box>
        </Box>
      </Box>
      <PropertyTile>pt</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>0</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pt="0">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>s</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pt="s">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>m</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pt="m">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>l</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pt="l">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pt="xl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>xxl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pt="xxl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>3xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pt="3xl">
            content
          </Box>
        </Box>
      </Box>
      <PropertyTile>pr</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>0</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pr="0">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>s</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pr="s">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>m</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pr="m">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>l</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pr="l">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pr="xl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>xxl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pr="xxl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>3xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pr="3xl">
            content
          </Box>
        </Box>
      </Box>
      <PropertyTile>pb</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>0</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pb="0">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>s</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pb="s">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>m</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pb="m">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>l</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pb="l">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pb="xl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>xxl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pb="xxl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>3xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pb="3xl">
            content
          </Box>
        </Box>
      </Box>
      <PropertyTile>pl</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>0</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pl="0">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>s</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pl="s">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>m</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pl="m">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>l</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pl="l">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pl="xl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>xxl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pl="xxl">
            content
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>3xl</PropertyValue>
          <Box {...omit(CONTENT_PROPS, ["p"])} pl="3xl">
            content
          </Box>
        </Box>
      </Box>
    </Box>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "boxShadow (deprecated)",
  args: {
    gap: "xl",
    p: "xl"
  },
  parameters: {
    controls: {
      disable: true
    },
    chromatic: {
      disableSnapshot: true
    }
  },
  render: props => <Box {...props}>
      <Box boxShadow="none" {...CONTENT_PROPS_TOKEN} borderRadius="subtle" border="default">
        none
      </Box>
      <Box boxShadow="weak" {...CONTENT_PROPS_TOKEN} borderRadius="subtle" border="default">
        weak
      </Box>
      <Box boxShadow="default" {...CONTENT_PROPS_TOKEN} borderRadius="subtle" border="default">
        default
      </Box>
      <Box boxShadow="moderate" {...CONTENT_PROPS_TOKEN} borderRadius="subtle" border="default">
        moderate
      </Box>
      <Box boxShadow="strong" {...CONTENT_PROPS_TOKEN} borderRadius="subtle" border="default">
        strong
      </Box>
    </Box>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "bgColor (deprecated)",
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
    }
  },
  render: props => <Box {...props}>
      <Box {...CONTENT_PROPS_TOKEN} bgColor="disabled" borderRadius="subtle" border="default">
        disabled
      </Box>
      <Box {...CONTENT_PROPS_TOKEN} bgColor="transparent" borderRadius="subtle" border="default">
        transparent
      </Box>
      <Box {...CONTENT_PROPS_TOKEN} bgColor="weak" borderRadius="subtle" border="default">
        weak
      </Box>
      <Box {...CONTENT_PROPS_TOKEN} bgColor="default" borderRadius="subtle" border="default">
        default
      </Box>
      <Box {...CONTENT_PROPS_TOKEN} bgColor="enabled" borderRadius="subtle" border="default">
        enabled
      </Box>
      <Box {...CONTENT_PROPS_TOKEN} bgColor="interactive" borderRadius="subtle" border="default">
        interactive
      </Box>
      <Box {...CONTENT_PROPS_TOKEN} bgColor="moderate" borderRadius="subtle" border="default">
        moderate
      </Box>
      <Box {...CONTENT_PROPS_TOKEN} bgColor="strong" borderRadius="subtle" border="default">
        strong
      </Box>
      <Box {...CONTENT_PROPS_TOKEN} bgColor="inverse" borderRadius="subtle" border="default" typography={{
      font: "body_s",
      color: "inverse"
    }}>
        inverse
      </Box>
    </Box>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "width=container-sizing (deprecated)",
  parameters: {
    chromatic: {
      disableSnapshot: true
    },
    controls: {
      disable: true
    }
  },
  render: () => <Box direction="col" gap="m" p="s">
      <Box direction="col" gap="m" width="m">
        <h1 className={classNames("flex", "flex-row", "border-box", "font-heading-m", "text-default")}>
          Container
        </h1>
        <p className={classNames("font-body-s", "text-default")}>
          As we do not have a set of generic layouts in mind and the fact CSS
          media query doesnt support the usage of tokens we have decided to
          explain it like this. Media query are simple enought to write so it is
          ok to use hard coded value for{" "}
          <strong className={classNames("font-label-s-emphasized")}>
            breakpoint
          </strong>{" "}
          based layout. You have already a good examples on the{" "}
          <strong className={classNames("font-label-s-emphasized")}>
            Modal
          </strong>{" "}
          component.
        </p>
      </Box>
      <Box border="default" width="xxs" {...CONTENT_PROPS_TOKEN}>
        xxs
      </Box>
      <Box border="default" width="xs" {...CONTENT_PROPS_TOKEN}>
        xs
      </Box>
      <Box border="default" width="s" {...CONTENT_PROPS_TOKEN}>
        s
      </Box>
      <Box border="default" width="m" {...CONTENT_PROPS_TOKEN}>
        m
      </Box>
      <Box border="default" width="l" {...CONTENT_PROPS_TOKEN}>
        l
      </Box>
      <Box border="default" width="xl" {...CONTENT_PROPS_TOKEN}>
        xl
      </Box>
      <Box border="default" width="xxl" {...CONTENT_PROPS_TOKEN}>
        m
      </Box>
      <Box border="default" width="3xl" {...CONTENT_PROPS_TOKEN}>
        3xl
      </Box>
      <Box border="default" width="4xl" {...CONTENT_PROPS_TOKEN}>
        4xl
      </Box>
    </Box>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "zIndex (deprecated)",
  args: {
    gap: "xl",
    p: "xl"
  },
  parameters: {
    controls: {
      disable: true
    },
    chromatic: {
      disableSnapshot: true
    }
  },
  render: props => <Box {...props} width="400px" gap="0" direction="col">
      <Box zIndex="cursor" {...CONTENT_PROPS_TOKEN} borderRadius="subtle" border="default" width="calc(100% - (6 * var(--sprout-common-sizing-xxl)))" style={{
      marginBlockStart: "calc(-1 * var(--sprout-common-sizing-m))"
    }}>
        cursor
      </Box>
      <Box zIndex="time_sensitive" {...CONTENT_PROPS_TOKEN} borderRadius="subtle" border="default" width="calc(100% - (5 * var(--sprout-common-sizing-xxl)))" style={{
      marginBlockStart: "calc(-1 * var(--sprout-common-sizing-m))"
    }}>
        time_sensitive
      </Box>
      <Box zIndex="context" {...CONTENT_PROPS_TOKEN} borderRadius="subtle" border="default" width="calc(100% - (4 * var(--sprout-common-sizing-xxl)))" style={{
      marginBlockStart: "calc(-1 * var(--sprout-common-sizing-m))"
    }}>
        context
      </Box>
      <Box zIndex="overlay" {...CONTENT_PROPS_TOKEN} borderRadius="subtle" border="default" width="calc(100% - (3 * var(--sprout-common-sizing-xxl)))" style={{
      marginBlockStart: "calc(-1 * var(--sprout-common-sizing-m))"
    }}>
        overlay
      </Box>
      <Box zIndex="floating" {...CONTENT_PROPS_TOKEN} borderRadius="subtle" border="default" width="calc(100% - (2 * var(--sprout-common-sizing-xxl)))" style={{
      marginBlockStart: "calc(-1 * var(--sprout-common-sizing-m))"
    }}>
        floating
      </Box>
      <Box zIndex="stacked" {...CONTENT_PROPS_TOKEN} borderRadius="subtle" border="default" width="calc(100% - (1 * var(--sprout-common-sizing-xxl)))" style={{
      marginBlockStart: "calc(-1 * var(--sprout-common-sizing-m))"
    }}>
        stacked
      </Box>
      <Box zIndex={undefined} {...CONTENT_PROPS_TOKEN} borderRadius="subtle" border="default" style={{
      marginBlockStart: "calc(-1 * var(--sprout-common-sizing-m))"
    }}>
        undefined
      </Box>
    </Box>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "col",
    border: "none",
    typography: {
      font: "label_s",
      color: "default"
    },
    bgColor: "default"
  },
  render: props => <Box {...props}>
      <PropertyTile>direction</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>row (default)</PropertyValue>
          <Box {...CONTAINER_PROPS} direction="row">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>row-reverse</PropertyValue>
          <Box {...CONTAINER_PROPS} direction="row-reverse">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>col</PropertyValue>
          <Box {...CONTAINER_PROPS} direction="col">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>col-reverse</PropertyValue>
          <Box {...CONTAINER_PROPS} direction="col-reverse">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
      </Box>
      <PropertyTile>wrap</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS}>
        <Box {...PROPERTY_COL_PROPS} width="400px">
          <PropertyValue>nowrap (default)</PropertyValue>
          <Box {...CONTAINER_PROPS} width="200px">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
            <Box {...CONTENT_PROPS}>4</Box>
            <Box {...CONTENT_PROPS}>5</Box>
            <Box {...CONTENT_PROPS}>6</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>wrap</PropertyValue>
          <Box {...CONTAINER_PROPS} wrap="wrap" width="200px">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
            <Box {...CONTENT_PROPS}>4</Box>
            <Box {...CONTENT_PROPS}>5</Box>
            <Box {...CONTENT_PROPS}>6</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>wrap-reverse</PropertyValue>
          <Box {...CONTAINER_PROPS} wrap="wrap-reverse" width="200px">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
            <Box {...CONTENT_PROPS}>4</Box>
            <Box {...CONTENT_PROPS}>5</Box>
            <Box {...CONTENT_PROPS}>6</Box>
          </Box>
        </Box>
      </Box>
      <PropertyTile>justify</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS} wrap="wrap">
        <Box {...PROPERTY_COL_PROPS} width="400px">
          <PropertyValue>start (default)</PropertyValue>
          <Box {...CONTAINER_PROPS} width="400px">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS} width="400px">
          <PropertyValue>end</PropertyValue>
          <Box {...CONTAINER_PROPS} justify="end" width="400px">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS} width="400px">
          <PropertyValue>center</PropertyValue>
          <Box {...CONTAINER_PROPS} justify="center" width="400px">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS} width="400px">
          <PropertyValue>between</PropertyValue>
          <Box {...CONTAINER_PROPS} justify="between" width="400px">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS} width="400px">
          <PropertyValue>around</PropertyValue>
          <Box {...CONTAINER_PROPS} justify="around" width="400px">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS} width="400px">
          <PropertyValue>evenly</PropertyValue>
          <Box {...CONTAINER_PROPS} justify="evenly" width="400px">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
      </Box>
      <PropertyTile>alignItems</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS} wrap="wrap">
        <Box {...PROPERTY_COL_PROPS} width="400px">
          <PropertyValue>stretch (default)</PropertyValue>
          <Box {...CONTAINER_PROPS} height="150px">
            <Box {...CONTENT_PROPS}>1</Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS} width="400px">
          <PropertyValue>start</PropertyValue>
          <Box {...CONTAINER_PROPS} alignItems="start" height="150px">
            <Box {...CONTENT_PROPS} height="20px">
              1
            </Box>
            <Box {...CONTENT_PROPS} height="100px">
              2
            </Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS} width="400px">
          <PropertyValue>end</PropertyValue>
          <Box {...CONTAINER_PROPS} alignItems="end" height="150px">
            <Box {...CONTENT_PROPS} height="20px">
              1
            </Box>
            <Box {...CONTENT_PROPS} height="100px">
              2
            </Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS} width="400px">
          <PropertyValue>center</PropertyValue>
          <Box {...CONTAINER_PROPS} alignItems="center" height="150px">
            <Box {...CONTENT_PROPS} height="20px">
              1
            </Box>
            <Box {...CONTENT_PROPS} height="100px">
              2
            </Box>
            <Box {...CONTENT_PROPS}>3</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS} width="400px">
          <PropertyValue>baseline</PropertyValue>
          <Box {...CONTAINER_PROPS} alignItems="baseline" height="150px">
            <Box {...CONTENT_PROPS} alignItems="center" height="100px">
              <h1 className={BodyS}>Text text</h1>
            </Box>
            <Box {...CONTENT_PROPS} alignItems="end" height="100px">
              <p className={BodyS}>Text text</p>
            </Box>
            <Box {...CONTENT_PROPS} alignItems="start" height="100px">
              <h2 className={BodyS}>Text text</h2>
            </Box>
          </Box>
        </Box>
      </Box>
      <PropertyTile>alignContent</PropertyTile>
      <Box {...PROPERTY_ROW_PROPS} wrap="wrap">
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>start (default)</PropertyValue>
          <Box {...CONTAINER_PROPS} alignContent="start" wrap="wrap" height="250px" width="200px">
            <Box {...CONTENT_PROPS} height="20px">
              1
            </Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS} height="20px">
              3
            </Box>
            <Box {...CONTENT_PROPS}>4</Box>
            <Box {...CONTENT_PROPS}>5</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>end</PropertyValue>
          <Box {...CONTAINER_PROPS} alignContent="end" wrap="wrap" height="250px" width="200px">
            <Box {...CONTENT_PROPS} height="20px">
              1
            </Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS} height="20px">
              3
            </Box>
            <Box {...CONTENT_PROPS}>4</Box>
            <Box {...CONTENT_PROPS}>5</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>center</PropertyValue>
          <Box {...CONTAINER_PROPS} alignContent="center" wrap="wrap" height="250px" width="200px">
            <Box {...CONTENT_PROPS} height="20px">
              1
            </Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS} height="20px">
              3
            </Box>
            <Box {...CONTENT_PROPS}>4</Box>
            <Box {...CONTENT_PROPS}>5</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>stretch</PropertyValue>
          <Box {...CONTAINER_PROPS} alignContent="stretch" wrap="wrap" height="250px" width="200px">
            <Box {...CONTENT_PROPS} height="20px">
              1
            </Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS} height="20px">
              3
            </Box>
            <Box {...CONTENT_PROPS}>4</Box>
            <Box {...CONTENT_PROPS}>5</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>between</PropertyValue>
          <Box {...CONTAINER_PROPS} alignContent="between" wrap="wrap" height="250px" width="200px">
            <Box {...CONTENT_PROPS} height="20px">
              1
            </Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS} height="20px">
              3
            </Box>
            <Box {...CONTENT_PROPS}>4</Box>
            <Box {...CONTENT_PROPS}>5</Box>
          </Box>
        </Box>
        <Box {...PROPERTY_COL_PROPS}>
          <PropertyValue>around</PropertyValue>
          <Box {...CONTAINER_PROPS} alignContent="around" wrap="wrap" height="250px" width="200px">
            <Box {...CONTENT_PROPS} height="20px">
              1
            </Box>
            <Box {...CONTENT_PROPS}>2</Box>
            <Box {...CONTENT_PROPS} height="20px">
              3
            </Box>
            <Box {...CONTENT_PROPS}>4</Box>
            <Box {...CONTENT_PROPS}>5</Box>
          </Box>
        </Box>
      </Box>
      <Box direction="col">
        <PropertyTile>gap, row-gap, column-gap</PropertyTile>
        <Box {...PROPERTY_ROW_PROPS}>
          <Box {...PROPERTY_COL_PROPS}>
            <PropertyValue>gap=s</PropertyValue>
            <Box {...CONTAINER_PROPS} direction="row" alignItems="start" wrap="wrap" width="200px" gap="s">
              <Box {...CONTENT_PROPS}>1</Box>
              <Box {...CONTENT_PROPS}>2</Box>
              <Box {...CONTENT_PROPS}>3</Box>
            </Box>
          </Box>
          <Box {...PROPERTY_COL_PROPS}>
            <PropertyValue>columGap=s rowGap=xl</PropertyValue>
            <Box {...CONTAINER_PROPS} direction="row" alignItems="start" wrap="wrap" width="200px" rowGap="xl" columnGap="s">
              <Box {...CONTENT_PROPS}>1</Box>
              <Box {...CONTENT_PROPS}>2</Box>
              <Box {...CONTENT_PROPS}>3</Box>
              <Box {...CONTENT_PROPS}>4</Box>
              <Box {...CONTENT_PROPS}>5</Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box direction="col">
        <PropertyTile>grow / shrink</PropertyTile>
        <Box {...PROPERTY_ROW_PROPS}>
          <Box {...PROPERTY_COL_PROPS}>
            <PropertyValue>grow</PropertyValue>
            <Box {...CONTAINER_PROPS} direction="row" width="300px">
              <Box {...CONTENT_PROPS} grow={1}>
                1
              </Box>
              <Box {...CONTENT_PROPS} grow={1}>
                1
              </Box>
              <Box {...CONTENT_PROPS} grow={1}>
                1
              </Box>
            </Box>
            <Box {...CONTAINER_PROPS} direction="row" width="300px">
              <Box {...CONTENT_PROPS} grow={1}>
                1
              </Box>
              <Box {...CONTENT_PROPS} grow={2}>
                2
              </Box>
              <Box {...CONTENT_PROPS} grow={1}>
                1
              </Box>
            </Box>
          </Box>
          <Box {...PROPERTY_COL_PROPS}>
            <PropertyValue>shrink</PropertyValue>
            <Box {...CONTAINER_PROPS} direction="row" width="280px">
              <Box {...CONTENT_PROPS} basis="300px" shrink={0}>
                shrink = 0
              </Box>
            </Box>
            <Box {...CONTAINER_PROPS} direction="row" width="280px">
              <Box {...CONTENT_PROPS} basis="300px" shrink={1}>
                shrink = 1
              </Box>
              <Box {...CONTENT_PROPS} basis="300px" shrink={1}>
                shrink = 1
              </Box>
            </Box>
            <Box {...CONTAINER_PROPS} direction="row" width="280px">
              <Box {...CONTENT_PROPS} basis="300px" shrink={2}>
                shrink = 2
              </Box>
              <Box {...CONTENT_PROPS} basis="300px" shrink={1}>
                shrink = 1
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box direction="col">
        <PropertyTile>align-self</PropertyTile>
        <Box {...PROPERTY_ROW_PROPS}>
          <Box {...CONTAINER_PROPS} direction="row" height="250px" alignItems="start">
            <Box {...CONTENT_PROPS} alignSelf="start">
              start
            </Box>
            <Box {...CONTENT_PROPS} alignSelf="center">
              center
            </Box>
            <Box {...CONTENT_PROPS} alignSelf="end">
              end
            </Box>
            <Box {...CONTENT_PROPS}>3</Box>
            <Box {...CONTENT_PROPS}>4</Box>
          </Box>
        </Box>
      </Box>
      <Box direction="col">
        <PropertyTile>Overflow</PropertyTile>
        <Box {...PROPERTY_ROW_PROPS}>
          <Box {...PROPERTY_COL_PROPS}>
            <PropertyValue>overflow</PropertyValue>
            <Box {...CONTAINER_PROPS} direction="row" width="fit" overflow="visible">
              <Box {...CONTENT_PROPS} overflow="auto" justify="start" width="80px" noShrink tabIndex={0}>
                <Box width="500px" noShrink grow>
                  auto Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt
                </Box>
              </Box>
              <Box {...CONTENT_PROPS} overflow="hidden" justify="start" width="80px" noShrink>
                <Box width="500px" noShrink grow alignItems="center">
                  hidden Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt
                </Box>
              </Box>
              <Box {...CONTENT_PROPS} overflow="scroll" justify="start" width="80px" noShrink tabIndex={0}>
                <Box width="500px" noShrink grow>
                  scroll Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt
                </Box>
              </Box>
              <Box {...CONTENT_PROPS} overflow="visible" justify="start" width="80px" noShrink>
                <Box width="500px" noShrink grow typography={{
                font: "body_m",
                color: "default"
              }}>
                  visible Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box {...PROPERTY_ROW_PROPS}>
          <Box {...PROPERTY_COL_PROPS}>
            <PropertyValue>overflow-x</PropertyValue>
            <Box {...CONTAINER_PROPS} direction="row" width="fit-content" overflowX="visible">
              <Box {...CONTENT_PROPS} overflowX="auto" justify="start" width="80px" noShrink tabIndex={0}>
                <Box width="500px" noShrink grow>
                  auto Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt
                </Box>
              </Box>
              <Box {...CONTENT_PROPS} overflowX="hidden" justify="start" width="80px" noShrink>
                <Box width="500px" noShrink grow alignItems="center">
                  hidden Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt
                </Box>
              </Box>
              <Box {...CONTENT_PROPS} overflowX="scroll" justify="start" width="80px" noShrink tabIndex={0}>
                <Box width="500px" noShrink grow>
                  scroll Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt
                </Box>
              </Box>
              <Box {...CONTENT_PROPS} overflowX="visible" justify="start" width="80px" noShrink>
                <Box width="500px" noShrink grow typography={{
                font: "body_m",
                color: "default"
              }}>
                  visible Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box {...PROPERTY_ROW_PROPS}>
          <Box {...PROPERTY_COL_PROPS}>
            <PropertyValue>overflowY</PropertyValue>
            <Box {...CONTAINER_PROPS} direction="row" width="fit-content">
              <Box {...CONTENT_PROPS} overflowY="auto" justify="start" width="110px" height="80px" noShrink tabIndex={0}>
                <Box height="200px">
                  auto Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt
                </Box>
              </Box>
              <Box {...CONTENT_PROPS} overflowY="hidden" justify="start" width="110px" height="80px" noShrink>
                <Box height="200px" alignItems="center">
                  hidden Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt
                </Box>
              </Box>
              <Box {...CONTENT_PROPS} overflowY="scroll" justify="start" width="110px" height="80px" noShrink tabIndex={0}>
                <Box height="200px">
                  scroll Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt
                </Box>
              </Box>
              <Box {...CONTENT_PROPS} overflowY="visible" justify="start" width="110px" height="80px" noShrink>
                <Box height="200px" typography={{
                font: "body_m",
                color: "default"
              }}>
                  visible Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...M.parameters?.docs?.source}}},N=[`Playground`,`WithgetBoxProps`,`Border`,`Padding`,`BoxShadow`,`bgColor`,`ContainerSizing`,`ZIndex`,`VisualTest`]}));P();export{E as Border,O as BoxShadow,A as ContainerSizing,D as Padding,w as Playground,M as VisualTest,T as WithgetBoxProps,j as ZIndex,N as __namedExportsOrder,k as bgColor,S as default,P as t};