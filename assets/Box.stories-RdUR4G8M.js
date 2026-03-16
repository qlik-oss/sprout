import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-sE-G6KV_.js";import{t as n}from"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as r}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{R as i,hn as a}from"./iframe-BRSAI4nO.js";function o(e){if(e.font)return;let{family:t,size:n,emphasized:r}=e;if(t)switch(t){case`heading`:case`body`:return`${t}_${n||`m`}`;case`label`:return`${t}_${n||`m`}${r?`_emphasized`:``}`;case`script`:return`${t}_${n||`m`}${r?`_emphasized`:``}`;default:return}}function s(e){if(e.font){let{font:t,color:r,ellipsis:i}=e;return n.classNames(`font_${t}`,{truncate:!!i,[`text_${r||`default`}`]:!!r})}let t=o(e);return t||=o({...e,family:e.familly}),!t||n[`font_${t}`]===void 0?``:n[`font_${t}`]}function c({bgColor:e,className:t,...n}){return{className:a({[t||`not_existing`]:!!t,[`bg_${e||`default`}`]:!!e}),...n}}var l=[`border`,`borderTop`,`borderRight`,`borderBottom`,`borderLeft`,`borderWidth`,`borderRadius`],u={border:e=>({border_none:e===`none`,border_default:e===`default`,border_weak:e===`weak`,border_moderate:e===`moderate`,border_strong:e===`strong`,border_extra_strong:e===`extra-strong`}),borderTop:e=>({border_t_none:e===`none`,border_t_default:e===`default`,border_t_weak:e===`weak`,border_t_moderate:e===`moderate`,border_t_strong:e===`strong`,border_t_extra_strong:e===`extra-strong`}),borderRight:e=>({border_r_none:e===`none`,border_r_default:e===`default`,border_r_weak:e===`weak`,border_r_moderate:e===`moderate`,border_r_strong:e===`strong`,border_r_extra_strong:e===`extra-strong`}),borderBottom:e=>({border_b_none:e===`none`,border_b_default:e===`default`,border_b_weak:e===`weak`,border_b_moderate:e===`moderate`,border_b_strong:e===`strong`,border_b_extra_strong:e===`extra-strong`}),borderLeft:e=>({border_l_none:e===`none`,border_l_default:e===`default`,border_l_weak:e===`weak`,border_l_moderate:e===`moderate`,border_l_strong:e===`strong`,border_l_extra_strong:e===`extra-strong`}),borderWidth:e=>({border_width_0:e===`0`,border_width_default:e===`default`,border_width_strong:e===`strong`}),borderRadius:e=>({radius_subtle:e===`subtle`,radius_soft:e===`soft`,radius_cushiony:e===`cushiony`,radius_pill:e===`pill`,radius_round:e===`round`,radius_nested_subtle_xs:e===`nested-subtle-xs`,radius_nested_soft_xs:e===`nested-soft-xs`,radius_nested_soft_s:e===`nested-soft-s`,radius_nested_cushiony_xs:e===`nested-cushiony-xs`,radius_nested_cushiony_s:e===`nested-cushiony-s`,radius_nested_cushiony_m:e===`nested-cushiony-m`,radius_twice_soft_xs:e===`twice-soft-xs`,radius_twice_cushiony_s_xs:e===`twice-cushiony-s-xs`,radius_twice_cushiony_m_s:e===`twice-cushiony-m-s`})};function d(e){let{className:t,...n}=e;return{className:a(l.reduce((t,r)=>(r in e&&(Object.assign(t,u[r](e[r])),delete n[r]),t),{[t??``]:!!t})),...n}}function f({boxShadow:e,zIndex:t,className:n,...r}){return{className:a({[n||``]:!!n,[`box_shadow_${e||`default`}`]:!!e,[`z_${t||`context`}`]:!!t}),...r}}var p={gap:e=>({gap_0:e===`0`,gap_xs:e===`xs`,gap_s:e===`s`,gap_m:e===`m`,gap_l:e===`l`,gap_xl:e===`xl`,gap_xxl:e===`xxl`,gap_3xl:e===`3xl`,gap_density_xs:e===`density-xs`,gap_density_s:e===`density-s`,gap_density_m:e===`density-m`,gap_density_l:e===`density-l`,gap_density_xl:e===`density-xl`,gap_density_xxl:e===`density-xxl`,gap_density_3xl:e===`density-3xl`}),rowGap:e=>({row_gap_0:e===`0`,row_gap_xs:e===`xs`,row_gap_s:e===`s`,row_gap_m:e===`m`,row_gap_l:e===`l`,row_gap_xl:e===`xl`,row_gap_xxl:e===`xxl`,row_gap_3xl:e===`3xl`}),columnGap:e=>({col_gap_0:e===`0`,col_gap_xs:e===`xs`,col_gap_s:e===`s`,col_gap_m:e===`m`,col_gap_l:e===`l`,col_gap_xl:e===`xl`,col_gap_xxl:e===`xxl`,col_gap_3xl:e===`3xl`}),boxSizing:(e,t={apply:!0})=>({content_box:e===`content-box`,border_box:e!==`content-box`&&t.apply}),wrap:e=>({wrap:e===`wrap`,wrap_reverse:e===`wrap-reverse`,no_wrap:e===`nowrap`}),direction:(e,t={apply:!0})=>({row:e===`row`||t.apply&&!e,row_reverse:e===`row-reverse`,col:e===`col`,col_reverse:e===`col-reverse`}),noShrink:e=>({shrink_0:e}),alignContent:e=>({ac_center:e===`center`,ac_stretch:e===`stretch`,ac_start:e===`start`,ac_end:e===`end`,ac_between:e===`between`,ac_around:e===`around`}),alignItems:e=>({ai_center:e===`center`,ai_stretch:e===`stretch`,ai_start:e===`start`,ai_end:e===`end`,ai_baseline:e===`baseline`}),alignSelf:e=>({as_center:e===`center`,as_stretch:e===`stretch`,as_start:e===`start`,as_end:e===`end`}),justify:e=>({j_around:e===`around`,j_between:e===`between`,j_center:e===`center`,j_end:e===`end`,j_start:e===`start`,j_evenly:e===`evenly`})},m=[`boxSizing`,`wrap`,`direction`,`alignContent`,`alignItems`,`alignSelf`,`gap`,`columnGap`,`rowGap`,`justify`,`noShrink`];function h(e,t={apply:!0}){let{className:n,...r}=e;return{className:a(n,m.reduce((n,i)=>(i in e?(Object.assign(n,p[i](e[i],t)),delete r[i]):(i===`direction`&&t.apply&&Object.assign(n,p.direction(void 0,t)),i===`boxSizing`&&t.apply&&Object.assign(n,p.boxSizing(void 0,t))),n),{flex:t.apply})),...r}}var g=[`xxs`,`xs`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`,`4xl`,`full`,`fit`,`min`,`max`];function _(e){let{shrink:t,basis:n,grow:r,style:i,width:o,height:s,maxHeight:c,maxWidth:l,minWidth:u,minHeight:d,className:f,...p}=e,m={},h={...i||{}};return h.containerType=`normal`,o&&(g.includes(o)?m[`w_${o}`]=!0:h.width=o),s&&(g.includes(s)?m[`h_${s}`]=!0:h.height=s),u&&(g.includes(u)?h.minWidth=`var(--sprout-container-sizing-${u})`:h.minWidth=u),l&&(g.includes(l)?h.maxWidth=`var(--sprout-container-sizing-${l})`:h.maxWidth=l),d&&(h.minHeight=d),c&&(h.maxHeight=c),r&&(typeof r==`number`?h.flexGrow=r:h.flexGrow=1),t!==void 0&&(h.flexShrink=t),n!==void 0&&(h.flexBasis=n),{style:h,className:a(m,{[f||``]:!!f}),...p}}var v={overflow:e=>({overflow_auto:e===`auto`,overflow_hidden:e===`hidden`,overflow_scroll:e===`scroll`,overflow_visible:e===`visible`}),overflowX:e=>({overflow_x_auto:e===`auto`,overflow_x_hidden:e===`hidden`,overflow_x_scroll:e===`scroll`,overflow_x_visible:e===`visible`}),overflowY:e=>({overflow_y_auto:e===`auto`,overflow_y_hidden:e===`hidden`,overflow_y_scroll:e===`scroll`,overflow_y_visible:e===`visible`})},y=[`overflow`,`overflowX`,`overflowY`];function b(e){let{className:t,...n}=e;return{className:a(y.reduce((t,r)=>(r in e&&(Object.assign(t,v[r](e[r])),delete n[r]),t),{[t||``]:!!t})),...n}}var x=r(),S=e(t()),C=(0,S.forwardRef)(w);function w({children:e,...t},n){return(0,x.jsx)(`div`,{...T(t),ref:n,children:e})}w.displayName=`Box`;function T({typography:e,...t},n={apply:!0}){let{className:r,...o}=b(f(c(d(h(i(_(t)),n)))));return{...o,className:a({[`${e&&s(e)}`]:!!e,[r]:!0})}}var E=[void 0,`0`,`xs`,`s`,`m`,`l`,`xl`,`xxl`,`3xl`],D=[void 0,`default`,`weak`,`moderate`,`strong`,`extra-strong`],O=[void 0,`start`,`end`,`center`,`stretch`],k=a(`font-body-s`,`text-default`),A={width:`fit`,gap:`xl`,border:`strong`,p:`xl`,bgColor:`inverse`,typography:{font:`body_s`,color:`inverse`}},j={bgColor:`default`,border:`moderate`,p:`xl`,alignItems:`center`,justify:`center`,typography:{font:`body_s`,color:`default`}};function M(e,t){return Object.fromEntries(Object.entries(e).filter(([e])=>!t.includes(e)))}var N={...M(j,[`border`,`style`])},P={gap:`xl`},F={direction:`col`,alignItems:`start`};function I({children:e}){return(0,x.jsx)(`h2`,{className:a(`flex`,`flex-row`,`border-box`,`font-heading-l`,`text-default`,`py-l`),children:e})}function L({children:e}){return(0,x.jsx)(`h3`,{className:a(`flex`,`flex-row`,`border-box`,`font-label-m`,`text-default`,`py-m`),children:e})}var R={component:C,title:`Components/Box`,args:{direction:`row`,gap:`xs`,border:`default`,typography:{font:`label_s`,color:`default`}},argTypes:{direction:{control:{type:`select`},options:[void 0,`row`,`row-reverse`,`col`,`col-reverse`]},alignContent:{control:{type:`select`},options:O},alignItems:{control:{type:`select`},options:O},alignSelf:{control:{type:`select`},options:O},bgColor:{control:{type:`select`},options:[void 0,`transparent`,`default`,`weak`,`moderate`,`strong`,`enabled`,`disabled`,`interactive`,`inverse`]},boxShadow:{control:{type:`select`},options:[void 0,`none`,`default`,`weak`,`moderate`,`strong`]},justify:{control:{type:`select`},options:[void 0,`start`,`end`,`center`,`between`,`around`]},gap:{control:{type:`select`},options:E},rowGap:{control:{type:`select`},options:E},columnGap:{control:{type:`select`},options:E},border:{control:{type:`select`},options:D},borderTop:{control:{type:`select`},options:D},borderRight:{control:{type:`select`},options:D},borderBottom:{control:{type:`select`},options:D},borderLeft:{control:{type:`select`},options:D},borderWidth:{control:{type:`select`},options:[void 0,`0`,`default`,`strong`]},boxSizing:{control:{type:`select`},options:[void 0,`content-box`,`border-box`]},typography:{control:{type:`object`}},wrap:{control:{type:`select`},options:[void 0,`wrap`,`wrap-reverse`,`nowrap`]},zIndex:{control:{type:`select`},options:[void 0,`stacked`,`floating`,`overlay`,`context`,`time_sensitive`]}}},z=(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(C,{border:`default`,width:`100px`,...N,children:`item 1`}),(0,x.jsxs)(C,{border:`default`,...N,children:[`item 2`,(0,x.jsx)(`br`,{}),`item 2 line 2`]}),(0,x.jsx)(C,{border:`default`,...N,children:`item 3`}),(0,x.jsxs)(C,{border:`default`,...N,children:[`item 4`,(0,x.jsx)(`br`,{}),`item 4 line 2`,(0,x.jsx)(`br`,{}),`item 4 line 3`]})]}),B={name:`Box (deprecated)`,render:e=>(0,x.jsx)(C,{...e,children:z}),args:{gap:`s`},parameters:{chromatic:{disableSnapshot:!0}}},V={name:`getBoxProps (deprecated)`,render:({...e})=>{let[t,n]=(0,S.useState)(0);return(0,x.jsxs)(`button`,{type:`button`,...T(e),onClick:()=>{n(e=>e+1)},style:{background:`var(--sprout-common-background-color-default)`},children:[`Button with deprecated getBoxProps clicked `,t,` times`]})},args:{gap:`m`,border:`default`,p:`xl`,typography:{font:`label_m`,color:`default`}},parameters:{chromatic:{disableSnapshot:!0}}},H={name:`border (deprecated)`,args:{direction:`col`,gap:`0`,border:`none`},parameters:{controls:{disable:!0}},render:e=>(0,x.jsxs)(C,{...e,children:[(0,x.jsx)(I,{children:`border`}),(0,x.jsxs)(C,{...P,children:[(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`none`}),(0,x.jsx)(C,{...N,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`weak`}),(0,x.jsx)(C,{...N,border:`weak`,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`default`}),(0,x.jsx)(C,{...N,border:`default`,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`moderate`}),(0,x.jsx)(C,{...N,border:`moderate`,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`strong`}),(0,x.jsx)(C,{...N,border:`strong`,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`extra-strong`}),(0,x.jsx)(C,{...N,border:`extra-strong`,children:`1`})]})]}),(0,x.jsx)(I,{children:`borderTop`}),(0,x.jsxs)(C,{...P,children:[(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`none`}),(0,x.jsx)(C,{...N,borderTop:`none`,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`weak`}),(0,x.jsx)(C,{...N,borderTop:`weak`,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`default`}),(0,x.jsx)(C,{...N,borderTop:`default`,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`moderate`}),(0,x.jsx)(C,{...N,borderTop:`moderate`,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`strong`}),(0,x.jsx)(C,{...N,borderTop:`strong`,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`extra-strong`}),(0,x.jsx)(C,{...N,borderTop:`extra-strong`,children:`1`})]})]}),(0,x.jsx)(I,{children:`borderRight`}),(0,x.jsxs)(C,{...P,children:[(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`none`}),(0,x.jsx)(C,{...N,borderRight:`none`,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`weak`}),(0,x.jsx)(C,{...N,borderRight:`weak`,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`default`}),(0,x.jsx)(C,{...N,borderRight:`default`,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`moderate`}),(0,x.jsx)(C,{...N,borderRight:`moderate`,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`strong`}),(0,x.jsx)(C,{...N,borderRight:`strong`,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`extra-strong`}),(0,x.jsx)(C,{...N,borderRight:`extra-strong`,children:`1`})]})]}),(0,x.jsx)(I,{children:`borderBottom`}),(0,x.jsxs)(C,{...P,children:[(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`none`}),(0,x.jsx)(C,{...N,borderBottom:`none`,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`weak`}),(0,x.jsx)(C,{...N,borderBottom:`weak`,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`default`}),(0,x.jsx)(C,{...N,borderBottom:`default`,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`moderate`}),(0,x.jsx)(C,{...N,borderBottom:`moderate`,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`strong`}),(0,x.jsx)(C,{...N,borderBottom:`strong`,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`extra-strong`}),(0,x.jsx)(C,{...N,borderBottom:`extra-strong`,children:`1`})]})]}),(0,x.jsx)(I,{children:`borderLeft`}),(0,x.jsxs)(C,{...P,children:[(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`none`}),(0,x.jsx)(C,{...N,borderLeft:`none`,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`weak`}),(0,x.jsx)(C,{...N,borderLeft:`weak`,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`default`}),(0,x.jsx)(C,{...N,borderLeft:`default`,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`moderate`}),(0,x.jsx)(C,{...N,borderLeft:`moderate`,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`strong`}),(0,x.jsx)(C,{...N,borderLeft:`strong`,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`extra-strong`}),(0,x.jsx)(C,{...N,borderLeft:`extra-strong`,children:`1`})]})]}),(0,x.jsx)(I,{children:`borderRadius`}),(0,x.jsxs)(C,{...P,children:[(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`subtle`}),(0,x.jsx)(C,{...N,border:`default`,borderRadius:`subtle`,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`soft`}),(0,x.jsx)(C,{...N,border:`default`,borderRadius:`soft`,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`cushiony`}),(0,x.jsx)(C,{...N,border:`default`,borderRadius:`cushiony`,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`round`}),(0,x.jsx)(C,{...N,border:`default`,borderRadius:`round`,children:`1`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`pill`}),(0,x.jsx)(C,{...N,border:`default`,borderRadius:`pill`,children:`1`})]})]}),(0,x.jsxs)(C,{...P,children:[(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`nested-subtle-xs`}),(0,x.jsx)(C,{...N,border:`default`,borderRadius:`subtle`,children:(0,x.jsx)(C,{...N,border:`default`,borderRadius:`nested-subtle-xs`,children:`1`})})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`nested-soft-s`}),(0,x.jsx)(C,{...N,border:`default`,borderRadius:`soft`,children:(0,x.jsx)(C,{...N,border:`default`,borderRadius:`nested-soft-s`,children:`1`})})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`nested-soft-xs`}),(0,x.jsx)(C,{...N,border:`default`,borderRadius:`soft`,children:(0,x.jsx)(C,{...N,border:`default`,borderRadius:`nested-soft-xs`,children:`1`})})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`nested-cushiony-xs`}),(0,x.jsx)(C,{...N,border:`default`,borderRadius:`cushiony`,children:(0,x.jsx)(C,{...N,border:`default`,borderRadius:`nested-cushiony-xs`,children:`1`})})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`nested-cushiony-s`}),(0,x.jsx)(C,{...N,border:`default`,borderRadius:`cushiony`,children:(0,x.jsx)(C,{...N,border:`default`,borderRadius:`nested-cushiony-s`,children:`1`})})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`nested-cushiony-m`}),(0,x.jsx)(C,{...N,border:`default`,borderRadius:`cushiony`,children:(0,x.jsx)(C,{...N,border:`default`,borderRadius:`nested-cushiony-m`,children:`1`})})]})]}),(0,x.jsxs)(C,{...P,children:[(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`twice-soft-xs`}),(0,x.jsx)(C,{...N,border:`default`,borderRadius:`soft`,children:(0,x.jsx)(C,{...N,border:`default`,borderRadius:`nested-soft-xs`,children:(0,x.jsx)(C,{...N,border:`default`,borderRadius:`twice-soft-xs`,children:`1`})})})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`twice-cushiony-s-xs`}),(0,x.jsx)(C,{...N,border:`default`,borderRadius:`cushiony`,children:(0,x.jsx)(C,{...N,border:`default`,borderRadius:`nested-cushiony-s`,children:(0,x.jsx)(C,{...N,border:`default`,borderRadius:`twice-cushiony-s-xs`,children:`1`})})})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`twice-cushiony-m-s`}),(0,x.jsx)(C,{...N,border:`default`,borderRadius:`cushiony`,children:(0,x.jsx)(C,{...N,border:`default`,borderRadius:`nested-cushiony-m`,children:(0,x.jsx)(C,{...N,border:`default`,borderRadius:`twice-cushiony-m-s`,children:`1`})})})]})]})]})},U={name:`padding (deprecated)`,args:{direction:`col`,border:`none`,gap:`0`},parameters:{controls:{disable:!0}},render:e=>(0,x.jsxs)(C,{...e,children:[(0,x.jsx)(I,{children:`p`}),(0,x.jsxs)(C,{...P,children:[(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`0`}),(0,x.jsx)(C,{...M(j,[`p`]),p:`0`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`s`}),(0,x.jsx)(C,{...M(j,[`p`]),p:`s`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`m`}),(0,x.jsx)(C,{...M(j,[`p`]),p:`m`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`l`}),(0,x.jsx)(C,{...M(j,[`p`]),p:`l`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`xl`}),(0,x.jsx)(C,{...M(j,[`p`]),p:`xl`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`xxl`}),(0,x.jsx)(C,{...M(j,[`p`]),p:`xxl`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`3xl`}),(0,x.jsx)(C,{...M(j,[`p`]),p:`3xl`,children:`content`})]})]}),(0,x.jsx)(I,{children:`px`}),(0,x.jsxs)(C,{...P,children:[(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`0`}),(0,x.jsx)(C,{...M(j,[`p`]),px:`0`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`s`}),(0,x.jsx)(C,{...M(j,[`p`]),px:`s`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`m`}),(0,x.jsx)(C,{...M(j,[`p`]),px:`m`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`l`}),(0,x.jsx)(C,{...M(j,[`p`]),px:`l`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`xl`}),(0,x.jsx)(C,{...M(j,[`p`]),px:`xl`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`xxl`}),(0,x.jsx)(C,{...M(j,[`p`]),px:`xxl`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`3xl`}),(0,x.jsx)(C,{...M(j,[`p`]),px:`3xl`,children:`content`})]})]}),(0,x.jsx)(I,{children:`py`}),(0,x.jsxs)(C,{...P,children:[(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`0`}),(0,x.jsx)(C,{...M(j,[`p`]),py:`0`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`s`}),(0,x.jsx)(C,{...M(j,[`p`]),py:`s`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`m`}),(0,x.jsx)(C,{...M(j,[`p`]),py:`m`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`l`}),(0,x.jsx)(C,{...M(j,[`p`]),py:`l`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`xl`}),(0,x.jsx)(C,{...M(j,[`p`]),py:`xl`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`xxl`}),(0,x.jsx)(C,{...M(j,[`p`]),py:`xxl`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`3xl`}),(0,x.jsx)(C,{...M(j,[`p`]),py:`3xl`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`density-xs`}),(0,x.jsx)(C,{...M(j,[`p`]),py:`density-xs`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`density-s`}),(0,x.jsx)(C,{...M(j,[`p`]),py:`density-s`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`density-m`}),(0,x.jsx)(C,{...M(j,[`p`]),py:`density-m`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`density-l`}),(0,x.jsx)(C,{...M(j,[`p`]),py:`density-l`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`density-xl`}),(0,x.jsx)(C,{...M(j,[`p`]),py:`density-xl`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`density-xxl`}),(0,x.jsx)(C,{...M(j,[`p`]),py:`density-xxl`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`density-3xl`}),(0,x.jsx)(C,{...M(j,[`p`]),py:`density-3xl`,children:`content`})]})]}),(0,x.jsx)(I,{children:`pt`}),(0,x.jsxs)(C,{...P,children:[(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`0`}),(0,x.jsx)(C,{...M(j,[`p`]),pt:`0`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`s`}),(0,x.jsx)(C,{...M(j,[`p`]),pt:`s`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`m`}),(0,x.jsx)(C,{...M(j,[`p`]),pt:`m`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`l`}),(0,x.jsx)(C,{...M(j,[`p`]),pt:`l`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`xl`}),(0,x.jsx)(C,{...M(j,[`p`]),pt:`xl`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`xxl`}),(0,x.jsx)(C,{...M(j,[`p`]),pt:`xxl`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`3xl`}),(0,x.jsx)(C,{...M(j,[`p`]),pt:`3xl`,children:`content`})]})]}),(0,x.jsx)(I,{children:`pr`}),(0,x.jsxs)(C,{...P,children:[(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`0`}),(0,x.jsx)(C,{...M(j,[`p`]),pr:`0`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`s`}),(0,x.jsx)(C,{...M(j,[`p`]),pr:`s`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`m`}),(0,x.jsx)(C,{...M(j,[`p`]),pr:`m`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`l`}),(0,x.jsx)(C,{...M(j,[`p`]),pr:`l`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`xl`}),(0,x.jsx)(C,{...M(j,[`p`]),pr:`xl`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`xxl`}),(0,x.jsx)(C,{...M(j,[`p`]),pr:`xxl`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`3xl`}),(0,x.jsx)(C,{...M(j,[`p`]),pr:`3xl`,children:`content`})]})]}),(0,x.jsx)(I,{children:`pb`}),(0,x.jsxs)(C,{...P,children:[(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`0`}),(0,x.jsx)(C,{...M(j,[`p`]),pb:`0`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`s`}),(0,x.jsx)(C,{...M(j,[`p`]),pb:`s`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`m`}),(0,x.jsx)(C,{...M(j,[`p`]),pb:`m`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`l`}),(0,x.jsx)(C,{...M(j,[`p`]),pb:`l`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`xl`}),(0,x.jsx)(C,{...M(j,[`p`]),pb:`xl`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`xxl`}),(0,x.jsx)(C,{...M(j,[`p`]),pb:`xxl`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`3xl`}),(0,x.jsx)(C,{...M(j,[`p`]),pb:`3xl`,children:`content`})]})]}),(0,x.jsx)(I,{children:`pl`}),(0,x.jsxs)(C,{...P,children:[(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`0`}),(0,x.jsx)(C,{...M(j,[`p`]),pl:`0`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`s`}),(0,x.jsx)(C,{...M(j,[`p`]),pl:`s`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`m`}),(0,x.jsx)(C,{...M(j,[`p`]),pl:`m`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`l`}),(0,x.jsx)(C,{...M(j,[`p`]),pl:`l`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`xl`}),(0,x.jsx)(C,{...M(j,[`p`]),pl:`xl`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`xxl`}),(0,x.jsx)(C,{...M(j,[`p`]),pl:`xxl`,children:`content`})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`3xl`}),(0,x.jsx)(C,{...M(j,[`p`]),pl:`3xl`,children:`content`})]})]})]})},W={name:`boxShadow (deprecated)`,args:{gap:`xl`,p:`xl`},parameters:{controls:{disable:!0},chromatic:{disableSnapshot:!0}},render:e=>(0,x.jsxs)(C,{...e,children:[(0,x.jsx)(C,{boxShadow:`none`,...N,borderRadius:`subtle`,border:`default`,children:`none`}),(0,x.jsx)(C,{boxShadow:`weak`,...N,borderRadius:`subtle`,border:`default`,children:`weak`}),(0,x.jsx)(C,{boxShadow:`default`,...N,borderRadius:`subtle`,border:`default`,children:`default`}),(0,x.jsx)(C,{boxShadow:`moderate`,...N,borderRadius:`subtle`,border:`default`,children:`moderate`}),(0,x.jsx)(C,{boxShadow:`strong`,...N,borderRadius:`subtle`,border:`default`,children:`strong`})]})},G={name:`bgColor (deprecated)`,args:{gap:`xl`,p:`xl`},parameters:{chromatic:{disableSnapshot:!0},controls:{disable:!0}},render:e=>(0,x.jsxs)(C,{...e,children:[(0,x.jsx)(C,{...N,bgColor:`disabled`,borderRadius:`subtle`,border:`default`,children:`disabled`}),(0,x.jsx)(C,{...N,bgColor:`transparent`,borderRadius:`subtle`,border:`default`,children:`transparent`}),(0,x.jsx)(C,{...N,bgColor:`weak`,borderRadius:`subtle`,border:`default`,children:`weak`}),(0,x.jsx)(C,{...N,bgColor:`default`,borderRadius:`subtle`,border:`default`,children:`default`}),(0,x.jsx)(C,{...N,bgColor:`enabled`,borderRadius:`subtle`,border:`default`,children:`enabled`}),(0,x.jsx)(C,{...N,bgColor:`interactive`,borderRadius:`subtle`,border:`default`,children:`interactive`}),(0,x.jsx)(C,{...N,bgColor:`moderate`,borderRadius:`subtle`,border:`default`,children:`moderate`}),(0,x.jsx)(C,{...N,bgColor:`strong`,borderRadius:`subtle`,border:`default`,children:`strong`}),(0,x.jsx)(C,{...N,bgColor:`inverse`,borderRadius:`subtle`,border:`default`,typography:{font:`body_s`,color:`inverse`},children:`inverse`})]})},K={name:`width=container-sizing (deprecated)`,parameters:{chromatic:{disableSnapshot:!0},controls:{disable:!0}},render:()=>(0,x.jsxs)(C,{direction:`col`,gap:`m`,p:`s`,children:[(0,x.jsxs)(C,{direction:`col`,gap:`m`,width:`m`,children:[(0,x.jsx)(`h1`,{className:a(`flex`,`flex-row`,`border-box`,`font-heading-m`,`text-default`),children:`Container`}),(0,x.jsxs)(`p`,{className:a(`font-body-s`,`text-default`),children:[`As we do not have a set of generic layouts in mind and the fact CSS media query doesnt support the usage of tokens we have decided to explain it like this. Media query are simple enought to write so it is ok to use hard coded value for`,` `,(0,x.jsx)(`strong`,{className:a(`font-label-s-emphasized`),children:`breakpoint`}),` `,`based layout. You have already a good examples on the`,` `,(0,x.jsx)(`strong`,{className:a(`font-label-s-emphasized`),children:`Modal`}),` `,`component.`]})]}),(0,x.jsx)(C,{border:`default`,width:`xxs`,...N,children:`xxs`}),(0,x.jsx)(C,{border:`default`,width:`xs`,...N,children:`xs`}),(0,x.jsx)(C,{border:`default`,width:`s`,...N,children:`s`}),(0,x.jsx)(C,{border:`default`,width:`m`,...N,children:`m`}),(0,x.jsx)(C,{border:`default`,width:`l`,...N,children:`l`}),(0,x.jsx)(C,{border:`default`,width:`xl`,...N,children:`xl`}),(0,x.jsx)(C,{border:`default`,width:`xxl`,...N,children:`m`}),(0,x.jsx)(C,{border:`default`,width:`3xl`,...N,children:`3xl`}),(0,x.jsx)(C,{border:`default`,width:`4xl`,...N,children:`4xl`})]})},q={name:`zIndex (deprecated)`,args:{gap:`xl`,p:`xl`},parameters:{controls:{disable:!0},chromatic:{disableSnapshot:!0}},render:e=>(0,x.jsxs)(C,{...e,width:`400px`,gap:`0`,direction:`col`,children:[(0,x.jsx)(C,{zIndex:`cursor`,...N,borderRadius:`subtle`,border:`default`,width:`calc(100% - (6 * var(--sprout-common-sizing-xxl)))`,style:{marginBlockStart:`calc(-1 * var(--sprout-common-sizing-m))`},children:`cursor`}),(0,x.jsx)(C,{zIndex:`time_sensitive`,...N,borderRadius:`subtle`,border:`default`,width:`calc(100% - (5 * var(--sprout-common-sizing-xxl)))`,style:{marginBlockStart:`calc(-1 * var(--sprout-common-sizing-m))`},children:`time_sensitive`}),(0,x.jsx)(C,{zIndex:`context`,...N,borderRadius:`subtle`,border:`default`,width:`calc(100% - (4 * var(--sprout-common-sizing-xxl)))`,style:{marginBlockStart:`calc(-1 * var(--sprout-common-sizing-m))`},children:`context`}),(0,x.jsx)(C,{zIndex:`overlay`,...N,borderRadius:`subtle`,border:`default`,width:`calc(100% - (3 * var(--sprout-common-sizing-xxl)))`,style:{marginBlockStart:`calc(-1 * var(--sprout-common-sizing-m))`},children:`overlay`}),(0,x.jsx)(C,{zIndex:`floating`,...N,borderRadius:`subtle`,border:`default`,width:`calc(100% - (2 * var(--sprout-common-sizing-xxl)))`,style:{marginBlockStart:`calc(-1 * var(--sprout-common-sizing-m))`},children:`floating`}),(0,x.jsx)(C,{zIndex:`stacked`,...N,borderRadius:`subtle`,border:`default`,width:`calc(100% - (1 * var(--sprout-common-sizing-xxl)))`,style:{marginBlockStart:`calc(-1 * var(--sprout-common-sizing-m))`},children:`stacked`}),(0,x.jsx)(C,{zIndex:void 0,...N,borderRadius:`subtle`,border:`default`,style:{marginBlockStart:`calc(-1 * var(--sprout-common-sizing-m))`},children:`undefined`})]})},J={args:{direction:`col`,border:`none`,typography:{font:`label_s`,color:`default`},bgColor:`default`},render:e=>(0,x.jsxs)(C,{...e,children:[(0,x.jsx)(I,{children:`direction`}),(0,x.jsxs)(C,{...P,children:[(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`row (default)`}),(0,x.jsxs)(C,{...A,direction:`row`,children:[(0,x.jsx)(C,{...j,children:`1`}),(0,x.jsx)(C,{...j,children:`2`}),(0,x.jsx)(C,{...j,children:`3`})]})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`row-reverse`}),(0,x.jsxs)(C,{...A,direction:`row-reverse`,children:[(0,x.jsx)(C,{...j,children:`1`}),(0,x.jsx)(C,{...j,children:`2`}),(0,x.jsx)(C,{...j,children:`3`})]})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`col`}),(0,x.jsxs)(C,{...A,direction:`col`,children:[(0,x.jsx)(C,{...j,children:`1`}),(0,x.jsx)(C,{...j,children:`2`}),(0,x.jsx)(C,{...j,children:`3`})]})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`col-reverse`}),(0,x.jsxs)(C,{...A,direction:`col-reverse`,children:[(0,x.jsx)(C,{...j,children:`1`}),(0,x.jsx)(C,{...j,children:`2`}),(0,x.jsx)(C,{...j,children:`3`})]})]})]}),(0,x.jsx)(I,{children:`wrap`}),(0,x.jsxs)(C,{...P,children:[(0,x.jsxs)(C,{...F,width:`400px`,children:[(0,x.jsx)(L,{children:`nowrap (default)`}),(0,x.jsxs)(C,{...A,width:`200px`,children:[(0,x.jsx)(C,{...j,children:`1`}),(0,x.jsx)(C,{...j,children:`2`}),(0,x.jsx)(C,{...j,children:`3`}),(0,x.jsx)(C,{...j,children:`4`}),(0,x.jsx)(C,{...j,children:`5`}),(0,x.jsx)(C,{...j,children:`6`})]})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`wrap`}),(0,x.jsxs)(C,{...A,wrap:`wrap`,width:`200px`,children:[(0,x.jsx)(C,{...j,children:`1`}),(0,x.jsx)(C,{...j,children:`2`}),(0,x.jsx)(C,{...j,children:`3`}),(0,x.jsx)(C,{...j,children:`4`}),(0,x.jsx)(C,{...j,children:`5`}),(0,x.jsx)(C,{...j,children:`6`})]})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`wrap-reverse`}),(0,x.jsxs)(C,{...A,wrap:`wrap-reverse`,width:`200px`,children:[(0,x.jsx)(C,{...j,children:`1`}),(0,x.jsx)(C,{...j,children:`2`}),(0,x.jsx)(C,{...j,children:`3`}),(0,x.jsx)(C,{...j,children:`4`}),(0,x.jsx)(C,{...j,children:`5`}),(0,x.jsx)(C,{...j,children:`6`})]})]})]}),(0,x.jsx)(I,{children:`justify`}),(0,x.jsxs)(C,{...P,wrap:`wrap`,children:[(0,x.jsxs)(C,{...F,width:`400px`,children:[(0,x.jsx)(L,{children:`start (default)`}),(0,x.jsxs)(C,{...A,width:`400px`,children:[(0,x.jsx)(C,{...j,children:`1`}),(0,x.jsx)(C,{...j,children:`2`}),(0,x.jsx)(C,{...j,children:`3`})]})]}),(0,x.jsxs)(C,{...F,width:`400px`,children:[(0,x.jsx)(L,{children:`end`}),(0,x.jsxs)(C,{...A,justify:`end`,width:`400px`,children:[(0,x.jsx)(C,{...j,children:`1`}),(0,x.jsx)(C,{...j,children:`2`}),(0,x.jsx)(C,{...j,children:`3`})]})]}),(0,x.jsxs)(C,{...F,width:`400px`,children:[(0,x.jsx)(L,{children:`center`}),(0,x.jsxs)(C,{...A,justify:`center`,width:`400px`,children:[(0,x.jsx)(C,{...j,children:`1`}),(0,x.jsx)(C,{...j,children:`2`}),(0,x.jsx)(C,{...j,children:`3`})]})]}),(0,x.jsxs)(C,{...F,width:`400px`,children:[(0,x.jsx)(L,{children:`between`}),(0,x.jsxs)(C,{...A,justify:`between`,width:`400px`,children:[(0,x.jsx)(C,{...j,children:`1`}),(0,x.jsx)(C,{...j,children:`2`}),(0,x.jsx)(C,{...j,children:`3`})]})]}),(0,x.jsxs)(C,{...F,width:`400px`,children:[(0,x.jsx)(L,{children:`around`}),(0,x.jsxs)(C,{...A,justify:`around`,width:`400px`,children:[(0,x.jsx)(C,{...j,children:`1`}),(0,x.jsx)(C,{...j,children:`2`}),(0,x.jsx)(C,{...j,children:`3`})]})]}),(0,x.jsxs)(C,{...F,width:`400px`,children:[(0,x.jsx)(L,{children:`evenly`}),(0,x.jsxs)(C,{...A,justify:`evenly`,width:`400px`,children:[(0,x.jsx)(C,{...j,children:`1`}),(0,x.jsx)(C,{...j,children:`2`}),(0,x.jsx)(C,{...j,children:`3`})]})]})]}),(0,x.jsx)(I,{children:`alignItems`}),(0,x.jsxs)(C,{...P,wrap:`wrap`,children:[(0,x.jsxs)(C,{...F,width:`400px`,children:[(0,x.jsx)(L,{children:`stretch (default)`}),(0,x.jsxs)(C,{...A,height:`150px`,children:[(0,x.jsx)(C,{...j,children:`1`}),(0,x.jsx)(C,{...j,children:`2`}),(0,x.jsx)(C,{...j,children:`3`})]})]}),(0,x.jsxs)(C,{...F,width:`400px`,children:[(0,x.jsx)(L,{children:`start`}),(0,x.jsxs)(C,{...A,alignItems:`start`,height:`150px`,children:[(0,x.jsx)(C,{...j,height:`20px`,children:`1`}),(0,x.jsx)(C,{...j,height:`100px`,children:`2`}),(0,x.jsx)(C,{...j,children:`3`})]})]}),(0,x.jsxs)(C,{...F,width:`400px`,children:[(0,x.jsx)(L,{children:`end`}),(0,x.jsxs)(C,{...A,alignItems:`end`,height:`150px`,children:[(0,x.jsx)(C,{...j,height:`20px`,children:`1`}),(0,x.jsx)(C,{...j,height:`100px`,children:`2`}),(0,x.jsx)(C,{...j,children:`3`})]})]}),(0,x.jsxs)(C,{...F,width:`400px`,children:[(0,x.jsx)(L,{children:`center`}),(0,x.jsxs)(C,{...A,alignItems:`center`,height:`150px`,children:[(0,x.jsx)(C,{...j,height:`20px`,children:`1`}),(0,x.jsx)(C,{...j,height:`100px`,children:`2`}),(0,x.jsx)(C,{...j,children:`3`})]})]}),(0,x.jsxs)(C,{...F,width:`400px`,children:[(0,x.jsx)(L,{children:`baseline`}),(0,x.jsxs)(C,{...A,alignItems:`baseline`,height:`150px`,children:[(0,x.jsx)(C,{...j,alignItems:`center`,height:`100px`,children:(0,x.jsx)(`h1`,{className:k,children:`Text text`})}),(0,x.jsx)(C,{...j,alignItems:`end`,height:`100px`,children:(0,x.jsx)(`p`,{className:k,children:`Text text`})}),(0,x.jsx)(C,{...j,alignItems:`start`,height:`100px`,children:(0,x.jsx)(`h2`,{className:k,children:`Text text`})})]})]})]}),(0,x.jsx)(I,{children:`alignContent`}),(0,x.jsxs)(C,{...P,wrap:`wrap`,children:[(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`start (default)`}),(0,x.jsxs)(C,{...A,alignContent:`start`,wrap:`wrap`,height:`250px`,width:`200px`,children:[(0,x.jsx)(C,{...j,height:`20px`,children:`1`}),(0,x.jsx)(C,{...j,children:`2`}),(0,x.jsx)(C,{...j,height:`20px`,children:`3`}),(0,x.jsx)(C,{...j,children:`4`}),(0,x.jsx)(C,{...j,children:`5`})]})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`end`}),(0,x.jsxs)(C,{...A,alignContent:`end`,wrap:`wrap`,height:`250px`,width:`200px`,children:[(0,x.jsx)(C,{...j,height:`20px`,children:`1`}),(0,x.jsx)(C,{...j,children:`2`}),(0,x.jsx)(C,{...j,height:`20px`,children:`3`}),(0,x.jsx)(C,{...j,children:`4`}),(0,x.jsx)(C,{...j,children:`5`})]})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`center`}),(0,x.jsxs)(C,{...A,alignContent:`center`,wrap:`wrap`,height:`250px`,width:`200px`,children:[(0,x.jsx)(C,{...j,height:`20px`,children:`1`}),(0,x.jsx)(C,{...j,children:`2`}),(0,x.jsx)(C,{...j,height:`20px`,children:`3`}),(0,x.jsx)(C,{...j,children:`4`}),(0,x.jsx)(C,{...j,children:`5`})]})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`stretch`}),(0,x.jsxs)(C,{...A,alignContent:`stretch`,wrap:`wrap`,height:`250px`,width:`200px`,children:[(0,x.jsx)(C,{...j,height:`20px`,children:`1`}),(0,x.jsx)(C,{...j,children:`2`}),(0,x.jsx)(C,{...j,height:`20px`,children:`3`}),(0,x.jsx)(C,{...j,children:`4`}),(0,x.jsx)(C,{...j,children:`5`})]})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`between`}),(0,x.jsxs)(C,{...A,alignContent:`between`,wrap:`wrap`,height:`250px`,width:`200px`,children:[(0,x.jsx)(C,{...j,height:`20px`,children:`1`}),(0,x.jsx)(C,{...j,children:`2`}),(0,x.jsx)(C,{...j,height:`20px`,children:`3`}),(0,x.jsx)(C,{...j,children:`4`}),(0,x.jsx)(C,{...j,children:`5`})]})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`around`}),(0,x.jsxs)(C,{...A,alignContent:`around`,wrap:`wrap`,height:`250px`,width:`200px`,children:[(0,x.jsx)(C,{...j,height:`20px`,children:`1`}),(0,x.jsx)(C,{...j,children:`2`}),(0,x.jsx)(C,{...j,height:`20px`,children:`3`}),(0,x.jsx)(C,{...j,children:`4`}),(0,x.jsx)(C,{...j,children:`5`})]})]})]}),(0,x.jsxs)(C,{direction:`col`,children:[(0,x.jsx)(I,{children:`gap, row-gap, column-gap`}),(0,x.jsxs)(C,{...P,children:[(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`gap=s`}),(0,x.jsxs)(C,{...A,direction:`row`,alignItems:`start`,wrap:`wrap`,width:`200px`,gap:`s`,children:[(0,x.jsx)(C,{...j,children:`1`}),(0,x.jsx)(C,{...j,children:`2`}),(0,x.jsx)(C,{...j,children:`3`})]})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`columGap=s rowGap=xl`}),(0,x.jsxs)(C,{...A,direction:`row`,alignItems:`start`,wrap:`wrap`,width:`200px`,rowGap:`xl`,columnGap:`s`,children:[(0,x.jsx)(C,{...j,children:`1`}),(0,x.jsx)(C,{...j,children:`2`}),(0,x.jsx)(C,{...j,children:`3`}),(0,x.jsx)(C,{...j,children:`4`}),(0,x.jsx)(C,{...j,children:`5`})]})]})]})]}),(0,x.jsxs)(C,{direction:`col`,children:[(0,x.jsx)(I,{children:`grow / shrink`}),(0,x.jsxs)(C,{...P,children:[(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`grow`}),(0,x.jsxs)(C,{...A,direction:`row`,width:`300px`,children:[(0,x.jsx)(C,{...j,grow:1,children:`1`}),(0,x.jsx)(C,{...j,grow:1,children:`1`}),(0,x.jsx)(C,{...j,grow:1,children:`1`})]}),(0,x.jsxs)(C,{...A,direction:`row`,width:`300px`,children:[(0,x.jsx)(C,{...j,grow:1,children:`1`}),(0,x.jsx)(C,{...j,grow:2,children:`2`}),(0,x.jsx)(C,{...j,grow:1,children:`1`})]})]}),(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`shrink`}),(0,x.jsx)(C,{...A,direction:`row`,width:`280px`,children:(0,x.jsx)(C,{...j,basis:`300px`,shrink:0,children:`shrink = 0`})}),(0,x.jsxs)(C,{...A,direction:`row`,width:`280px`,children:[(0,x.jsx)(C,{...j,basis:`300px`,shrink:1,children:`shrink = 1`}),(0,x.jsx)(C,{...j,basis:`300px`,shrink:1,children:`shrink = 1`})]}),(0,x.jsxs)(C,{...A,direction:`row`,width:`280px`,children:[(0,x.jsx)(C,{...j,basis:`300px`,shrink:2,children:`shrink = 2`}),(0,x.jsx)(C,{...j,basis:`300px`,shrink:1,children:`shrink = 1`})]})]})]})]}),(0,x.jsxs)(C,{direction:`col`,children:[(0,x.jsx)(I,{children:`align-self`}),(0,x.jsx)(C,{...P,children:(0,x.jsxs)(C,{...A,direction:`row`,height:`250px`,alignItems:`start`,children:[(0,x.jsx)(C,{...j,alignSelf:`start`,children:`start`}),(0,x.jsx)(C,{...j,alignSelf:`center`,children:`center`}),(0,x.jsx)(C,{...j,alignSelf:`end`,children:`end`}),(0,x.jsx)(C,{...j,children:`3`}),(0,x.jsx)(C,{...j,children:`4`})]})})]}),(0,x.jsxs)(C,{direction:`col`,children:[(0,x.jsx)(I,{children:`Overflow`}),(0,x.jsx)(C,{...P,children:(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`overflow`}),(0,x.jsxs)(C,{...A,direction:`row`,width:`fit`,overflow:`visible`,children:[(0,x.jsx)(C,{...j,overflow:`auto`,justify:`start`,width:`80px`,noShrink:!0,tabIndex:0,children:(0,x.jsx)(C,{width:`500px`,noShrink:!0,grow:!0,children:`auto Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`})}),(0,x.jsx)(C,{...j,overflow:`hidden`,justify:`start`,width:`80px`,noShrink:!0,children:(0,x.jsx)(C,{width:`500px`,noShrink:!0,grow:!0,alignItems:`center`,children:`hidden Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`})}),(0,x.jsx)(C,{...j,overflow:`scroll`,justify:`start`,width:`80px`,noShrink:!0,tabIndex:0,children:(0,x.jsx)(C,{width:`500px`,noShrink:!0,grow:!0,children:`scroll Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`})}),(0,x.jsx)(C,{...j,overflow:`visible`,justify:`start`,width:`80px`,noShrink:!0,children:(0,x.jsx)(C,{width:`500px`,noShrink:!0,grow:!0,typography:{font:`body_m`,color:`default`},children:`visible Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`})})]})]})}),(0,x.jsx)(C,{...P,children:(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`overflow-x`}),(0,x.jsxs)(C,{...A,direction:`row`,width:`fit-content`,overflowX:`visible`,children:[(0,x.jsx)(C,{...j,overflowX:`auto`,justify:`start`,width:`80px`,noShrink:!0,tabIndex:0,children:(0,x.jsx)(C,{width:`500px`,noShrink:!0,grow:!0,children:`auto Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`})}),(0,x.jsx)(C,{...j,overflowX:`hidden`,justify:`start`,width:`80px`,noShrink:!0,children:(0,x.jsx)(C,{width:`500px`,noShrink:!0,grow:!0,alignItems:`center`,children:`hidden Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`})}),(0,x.jsx)(C,{...j,overflowX:`scroll`,justify:`start`,width:`80px`,noShrink:!0,tabIndex:0,children:(0,x.jsx)(C,{width:`500px`,noShrink:!0,grow:!0,children:`scroll Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`})}),(0,x.jsx)(C,{...j,overflowX:`visible`,justify:`start`,width:`80px`,noShrink:!0,children:(0,x.jsx)(C,{width:`500px`,noShrink:!0,grow:!0,typography:{font:`body_m`,color:`default`},children:`visible Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`})})]})]})}),(0,x.jsx)(C,{...P,children:(0,x.jsxs)(C,{...F,children:[(0,x.jsx)(L,{children:`overflowY`}),(0,x.jsxs)(C,{...A,direction:`row`,width:`fit-content`,children:[(0,x.jsx)(C,{...j,overflowY:`auto`,justify:`start`,width:`110px`,height:`80px`,noShrink:!0,tabIndex:0,children:(0,x.jsx)(C,{height:`200px`,children:`auto Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`})}),(0,x.jsx)(C,{...j,overflowY:`hidden`,justify:`start`,width:`110px`,height:`80px`,noShrink:!0,children:(0,x.jsx)(C,{height:`200px`,alignItems:`center`,children:`hidden Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`})}),(0,x.jsx)(C,{...j,overflowY:`scroll`,justify:`start`,width:`110px`,height:`80px`,noShrink:!0,tabIndex:0,children:(0,x.jsx)(C,{height:`200px`,children:`scroll Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`})}),(0,x.jsx)(C,{...j,overflowY:`visible`,justify:`start`,width:`110px`,height:`80px`,noShrink:!0,children:(0,x.jsx)(C,{height:`200px`,typography:{font:`body_m`,color:`default`},children:`visible Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt`})})]})]})})]})]}),parameters:{controls:{disable:!0}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}};var Y=[`Playground`,`WithgetBoxProps`,`Border`,`Padding`,`BoxShadow`,`bgColor`,`ContainerSizing`,`ZIndex`,`VisualTest`];export{H as Border,W as BoxShadow,K as ContainerSizing,U as Padding,B as Playground,J as VisualTest,V as WithgetBoxProps,q as ZIndex,Y as __namedExportsOrder,G as bgColor,R as default};