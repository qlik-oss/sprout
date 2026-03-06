import{j as t,M as l,a as n,C as a}from"./iframe-lMEil1TA.js";import{useMDXComponents as s}from"./index-Wkq3wkd2.js";import{S as c,P as r,V as p,I as m}from"./Button.stories-tljV-waP.js";import"./preload-helper-PPVm8Dsz.js";import"./add-OoYVhzw8.js";import"./Button.argTypes-CNHQ9iqd.js";import"./Icons-DXhpQYiC.js";import"./index-XQNqsQ5O.js";import"./move-right-CxgFVc5X.js";import"./bookmark-CXl6cost.js";import"./text-Dvq4klSt.js";import"./close-CrtKz3TF.js";import"./upload-531rT3Nn.js";import"./sort-descending-DBF7-f7_.js";import"./undo-DPBprsjr.js";import"./settings-oS6F6h_p.js";import"./copy-8HFCGFIv.js";import"./delete-CG-UgknF.js";import"./documentation-3Ki2NWn5.js";import"./edit-Bij8o67D.js";import"./error-D8ruDyrJ.js";import"./favorited-eFV-EpYm.js";import"./generate-with-ai-DxtmBI1k.js";import"./subtract-BFWMKw7W.js";import"./hide-J1VEVLcZ.js";import"./history-DsyI5OdF.js";import"./search-Cjd_t8Yd.js";import"./info-B4Qytw2Z.js";import"./person-6TmEe_Ks.js";import"./map-Bw_UfIsn.js";import"./more-vertical-3Ccbf6lb.js";import"./move-left-BJhvkpSj.js";import"./new-tab-CrWdziAn.js";import"./notification-BvurbYEj.js";import"./paste-CWtbLVgn.js";import"./show-CL2zF-Fm.js";import"./warning-X1qrbfM3.js";import"./tenant-DisbRmPu.js";import"./ButtonGroup-PefbUIxw.js";import"./classNames-B_Twdkca.js";import"./sprout-fe7_-ZbP.js";import"./FloatingWrapper-C19CkbJo.js";import"./Button-B3VC5XuI.js";import"./Button.module-ZjqCyrss.js";import"./common-bQH3ZR03.js";import"./Badge-BUdEAQ9u.js";import"./Tooltip-wsnfK-o5.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-ikaB6BKo.js";import"./useId-BL8g_bWL.js";import"./ProgressCircular-DzkpdMMq.js";import"./useI18n-CDksjSf0.js";import"./IconButton-CuZnXk5P.js";import"./Menu-BuAoSxI5.js";import"./useControl-Crf27nxo.js";import"./Divider-DoFQjC9R.js";import"./list-B1zo5gaH.js";import"./Skeleton-ByVVQwn0.js";function e(i){const o={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Components/Button",of:c}),`
`,t.jsx(o.h1,{id:"button",children:"Button"}),`
`,t.jsx(o.p,{children:`Buttons are clickable items used for actions. They can have different styles depending on the needs.
To use it you just have to import the Button component like this:`}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`import { Button, IconButton, ButtonFloating } from "@qlik/sprout-react";
import { FavoriteIcon } from "@qlik/sprout-icons/react";

<Button variant="primary" size="small" label="Click me" onClick={() => {}} />

<IconButton variant="default" icon={<FavoriteIcon />} label="Click me" onClick={() => {}} />

<ButtonFloating>
    <Button variant="primary" size="small" label="Click me" onClick={() => {}} />
</ButtonFloating>

<ButtonFloating>
    <IconButton variant="default" icon={<FavoriteIcon />} label="Click me" onClick={() => {}} />
</ButtonFloating>
`})}),`
`,t.jsx(n,{of:r}),`
`,t.jsx(a,{of:r}),`
`,t.jsx(o.h2,{id:"accessibility",children:"Accessibility"}),`
`,t.jsx(o.p,{children:t.jsx(o.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/button/",rel:"nofollow",children:"W3/WAI/ARIA/APG Button"})}),`
`,t.jsx(o.p,{children:"HTML Structure"}),`
`,t.jsxs(o.ul,{children:[`
`,t.jsxs(o.li,{children:["Button and IconButton use the native HTML ",t.jsx(o.code,{children:"button"})," so it has the implicit role ",t.jsx(o.code,{children:"button"}),"."]}),`
`,t.jsxs(o.li,{children:["Button and IconButton support all props to have an ",t.jsx(o.a,{href:"https://www.w3.org/WAI/tutorials/forms/labels/",rel:"nofollow",children:"accessible label"})]}),`
`,t.jsxs(o.li,{children:["Button and IconButton support ",t.jsx(o.code,{children:"aria-describedby"})," props."]}),`
`,t.jsxs(o.li,{children:["Button and IconButton use explicit ",t.jsx(o.code,{children:"disabled"})," props to show it has unavailable. Question: should we add ",t.jsx(o.code,{children:"aria-disabled"}),"?"]}),`
`]}),`
`,t.jsx(o.p,{children:"Keyboard Navigation"}),`
`,t.jsxs(o.ul,{children:[`
`,t.jsxs(o.li,{children:[t.jsx(o.code,{children:"Space"}),": Activates the button."]}),`
`,t.jsxs(o.li,{children:[t.jsx(o.code,{children:"Enter"}),": Activates the button."]}),`
`]}),`
`,t.jsx(o.h2,{id:"variations",children:"Variations"}),`
`,t.jsx(n,{of:p}),`
`,t.jsx(o.h2,{id:"iconbutton",children:"IconButton"}),`
`,t.jsxs(o.p,{children:[`This variant is a shortcut to use the Button but label is moved inside a Tooltip.
Accessibility is covered using the tooltip with the `,t.jsx(o.code,{children:"aria-label"})," attribute."]}),`
`,t.jsx(n,{of:m})]})}function jt(i={}){const{wrapper:o}={...s(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(e,{...i})}):e(i)}export{jt as default};
