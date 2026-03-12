import{r as $,j as e}from"./iframe-s7Iwh0oT.js";import{c as u}from"./classNames-BgUAGgdt.js";import{g as F}from"./padding-BXgzSss2.js";import{s as Y}from"./sprout-Bvx94sbk.js";import"./preload-helper-PPVm8Dsz.js";function W(r){if(r.font)return;const{family:d,size:a,emphasized:c}=r;if(d)switch(d){case"heading":case"body":return`${d}_${a||"m"}`;case"label":return`${d}_${a||"m"}${c?"_emphasized":""}`;case"script":return`${d}_${a||"m"}${c?"_emphasized":""}`;default:return}}function G(r){if(r.font){const{font:a,color:c,ellipsis:_}=r;return Y.classNames(`font_${a}`,{truncate:!!_,[`text_${c||"default"}`]:!!c})}let d=W(r);return d||(d=W({...r,family:r.familly})),!d||Y[`font_${d}`]===void 0?"":Y[`font_${d}`]}function H({bgColor:r,className:d,...a}){return{className:u({[d||"not_existing"]:!!d,[`bg_${r||"default"}`]:!!r}),...a}}const M=["border","borderTop","borderRight","borderBottom","borderLeft","borderWidth","borderRadius"],Z={border:r=>({border_none:r==="none",border_default:r==="default",border_weak:r==="weak",border_moderate:r==="moderate",border_strong:r==="strong",border_extra_strong:r==="extra-strong"}),borderTop:r=>({border_t_none:r==="none",border_t_default:r==="default",border_t_weak:r==="weak",border_t_moderate:r==="moderate",border_t_strong:r==="strong",border_t_extra_strong:r==="extra-strong"}),borderRight:r=>({border_r_none:r==="none",border_r_default:r==="default",border_r_weak:r==="weak",border_r_moderate:r==="moderate",border_r_strong:r==="strong",border_r_extra_strong:r==="extra-strong"}),borderBottom:r=>({border_b_none:r==="none",border_b_default:r==="default",border_b_weak:r==="weak",border_b_moderate:r==="moderate",border_b_strong:r==="strong",border_b_extra_strong:r==="extra-strong"}),borderLeft:r=>({border_l_none:r==="none",border_l_default:r==="default",border_l_weak:r==="weak",border_l_moderate:r==="moderate",border_l_strong:r==="strong",border_l_extra_strong:r==="extra-strong"}),borderWidth:r=>({border_width_0:r==="0",border_width_default:r==="default",border_width_strong:r==="strong"}),borderRadius:r=>({radius_subtle:r==="subtle",radius_soft:r==="soft",radius_cushiony:r==="cushiony",radius_pill:r==="pill",radius_round:r==="round",radius_nested_subtle_xs:r==="nested-subtle-xs",radius_nested_soft_xs:r==="nested-soft-xs",radius_nested_soft_s:r==="nested-soft-s",radius_nested_cushiony_xs:r==="nested-cushiony-xs",radius_nested_cushiony_s:r==="nested-cushiony-s",radius_nested_cushiony_m:r==="nested-cushiony-m",radius_twice_soft_xs:r==="twice-soft-xs",radius_twice_cushiony_s_xs:r==="twice-cushiony-s-xs",radius_twice_cushiony_m_s:r==="twice-cushiony-m-s"})};function J(r){const{className:d,...a}=r,c=M.reduce((B,p)=>(p in r&&(Object.assign(B,Z[p](r[p])),delete a[p]),B),{[d??""]:!!d});return{className:u(c),...a}}function Q({boxShadow:r,zIndex:d,className:a,...c}){return{className:u({[a||""]:!!a,[`box_shadow_${r||"default"}`]:!!r,[`z_${d||"context"}`]:!!d}),...c}}const v={gap:r=>({gap_0:r==="0",gap_xs:r==="xs",gap_s:r==="s",gap_m:r==="m",gap_l:r==="l",gap_xl:r==="xl",gap_xxl:r==="xxl",gap_3xl:r==="3xl",gap_density_xs:r==="density-xs",gap_density_s:r==="density-s",gap_density_m:r==="density-m",gap_density_l:r==="density-l",gap_density_xl:r==="density-xl",gap_density_xxl:r==="density-xxl",gap_density_3xl:r==="density-3xl"}),rowGap:r=>({row_gap_0:r==="0",row_gap_xs:r==="xs",row_gap_s:r==="s",row_gap_m:r==="m",row_gap_l:r==="l",row_gap_xl:r==="xl",row_gap_xxl:r==="xxl",row_gap_3xl:r==="3xl"}),columnGap:r=>({col_gap_0:r==="0",col_gap_xs:r==="xs",col_gap_s:r==="s",col_gap_m:r==="m",col_gap_l:r==="l",col_gap_xl:r==="xl",col_gap_xxl:r==="xxl",col_gap_3xl:r==="3xl"}),boxSizing:(r,d={apply:!0})=>({content_box:r==="content-box",border_box:r!=="content-box"&&d.apply}),wrap:r=>({wrap:r==="wrap",wrap_reverse:r==="wrap-reverse",no_wrap:r==="nowrap"}),direction:(r,d={apply:!0})=>({row:r==="row"||d.apply&&!r,row_reverse:r==="row-reverse",col:r==="col",col_reverse:r==="col-reverse"}),noShrink:r=>({shrink_0:r}),alignContent:r=>({ac_center:r==="center",ac_stretch:r==="stretch",ac_start:r==="start",ac_end:r==="end",ac_between:r==="between",ac_around:r==="around"}),alignItems:r=>({ai_center:r==="center",ai_stretch:r==="stretch",ai_start:r==="start",ai_end:r==="end",ai_baseline:r==="baseline"}),alignSelf:r=>({as_center:r==="center",as_stretch:r==="stretch",as_start:r==="start",as_end:r==="end"}),justify:r=>({j_around:r==="around",j_between:r==="between",j_center:r==="center",j_end:r==="end",j_start:r==="start",j_evenly:r==="evenly"})},U=["boxSizing","wrap","direction","alignContent","alignItems","alignSelf","gap","columnGap","rowGap","justify","noShrink"];function ee(r,d={apply:!0}){const{className:a,...c}=r,_=U.reduce((p,R)=>(R in r?(Object.assign(p,v[R](r[R],d)),delete c[R]):(R==="direction"&&d.apply&&Object.assign(p,v.direction(void 0,d)),R==="boxSizing"&&d.apply&&Object.assign(p,v.boxSizing(void 0,d))),p),{flex:d.apply});return{className:u(a,_),...c}}const m=["xxs","xs","s","m","l","xl","xxl","3xl","4xl","full","fit","min","max"];function ne(r){const{shrink:d,basis:a,grow:c,style:_,width:B,height:p,maxHeight:R,maxWidth:N,minWidth:j,minHeight:z,className:A,...q}=r,L={},O={..._||{}};return O.containerType="normal",B&&(m.includes(B)?L[`w_${B}`]=!0:O.width=B),p&&(m.includes(p)?L[`h_${p}`]=!0:O.height=p),j&&(m.includes(j)?O.minWidth=`var(--sprout-container-sizing-${j})`:O.minWidth=j),N&&(m.includes(N)?O.maxWidth=`var(--sprout-container-sizing-${N})`:O.maxWidth=N),z&&(O.minHeight=z),R&&(O.maxHeight=R),c&&(typeof c=="number"?O.flexGrow=c:O.flexGrow=1),d!==void 0&&(O.flexShrink=d),a!==void 0&&(O.flexBasis=a),{style:O,className:u(L,{[A||""]:!!A}),...q}}const re={overflow:r=>({overflow_auto:r==="auto",overflow_hidden:r==="hidden",overflow_scroll:r==="scroll",overflow_visible:r==="visible"}),overflowX:r=>({overflow_x_auto:r==="auto",overflow_x_hidden:r==="hidden",overflow_x_scroll:r==="scroll",overflow_x_visible:r==="visible"}),overflowY:r=>({overflow_y_auto:r==="auto",overflow_y_hidden:r==="hidden",overflow_y_scroll:r==="scroll",overflow_y_visible:r==="visible"})},oe=["overflow","overflowX","overflowY"];function te(r){const{className:d,...a}=r,c=oe.reduce((B,p)=>(p in r&&(Object.assign(B,re[p](r[p])),delete a[p]),B),{[d||""]:!!d});return{className:u(c),...a}}const n=$.forwardRef(X);function X({children:r,...d},a){return e.jsx("div",{...D(d),ref:a,children:r})}X.displayName="Box";function D({typography:r,...d},a={apply:!0}){const{className:c,..._}=te(Q(H(J(ee(F(ne(d)),a)))));return{..._,className:u({[`${r&&G(r)}`]:!!r,[c]:!0})}}const k=[void 0,"0","xs","s","m","l","xl","xxl","3xl"],T=[void 0,"default","weak","moderate","strong","extra-strong"],I=[void 0,"start","end","center","stretch"],K=u("font-body-s","text-default"),l={width:"fit",gap:"xl",border:"strong",p:"xl",bgColor:"inverse",typography:{font:"body_s",color:"inverse"}},o={bgColor:"default",border:"moderate",p:"xl",alignItems:"center",justify:"center",typography:{font:"body_s",color:"default"}};function i(r,d){return Object.fromEntries(Object.entries(r).filter(([a])=>!d.includes(a)))}const x={...i(o,["border","style"])},P={gap:"xl"},t={direction:"col",alignItems:"start"};function h({children:r}){return e.jsx("h2",{className:u("flex","flex-row","border-box","font-heading-l","text-default","py-l"),children:r})}function s({children:r}){return e.jsx("h3",{className:u("flex","flex-row","border-box","font-label-m","text-default","py-m"),children:r})}const Pe={component:n,title:"Components/Box",args:{direction:"row",gap:"xs",border:"default",typography:{font:"label_s",color:"default"}},argTypes:{direction:{control:{type:"select"},options:[void 0,"row","row-reverse","col","col-reverse"]},alignContent:{control:{type:"select"},options:I},alignItems:{control:{type:"select"},options:I},alignSelf:{control:{type:"select"},options:I},bgColor:{control:{type:"select"},options:[void 0,"transparent","default","weak","moderate","strong","enabled","disabled","interactive","inverse"]},boxShadow:{control:{type:"select"},options:[void 0,"none","default","weak","moderate","strong"]},justify:{control:{type:"select"},options:[void 0,"start","end","center","between","around"]},gap:{control:{type:"select"},options:k},rowGap:{control:{type:"select"},options:k},columnGap:{control:{type:"select"},options:k},border:{control:{type:"select"},options:T},borderTop:{control:{type:"select"},options:T},borderRight:{control:{type:"select"},options:T},borderBottom:{control:{type:"select"},options:T},borderLeft:{control:{type:"select"},options:T},borderWidth:{control:{type:"select"},options:[void 0,"0","default","strong"]},boxSizing:{control:{type:"select"},options:[void 0,"content-box","border-box"]},typography:{control:{type:"object"}},wrap:{control:{type:"select"},options:[void 0,"wrap","wrap-reverse","nowrap"]},zIndex:{control:{type:"select"},options:[void 0,"stacked","floating","overlay","context","time_sensitive"]}}},se=e.jsxs(e.Fragment,{children:[e.jsx(n,{border:"default",width:"100px",...x,children:"item 1"}),e.jsxs(n,{border:"default",...x,children:["item 2",e.jsx("br",{}),"item 2 line 2"]}),e.jsx(n,{border:"default",...x,children:"item 3"}),e.jsxs(n,{border:"default",...x,children:["item 4",e.jsx("br",{}),"item 4 line 2",e.jsx("br",{}),"item 4 line 3"]})]}),S={name:"Box (deprecated)",render:r=>e.jsx(n,{...r,children:se}),args:{gap:"s"},parameters:{chromatic:{disableSnapshot:!0}}},b={name:"getBoxProps (deprecated)",render:({...r})=>{const[d,a]=$.useState(0);return e.jsxs("button",{type:"button",...D(r),onClick:()=>{a(c=>c+1)},style:{background:"var(--sprout-common-background-color-default)"},children:["Button with deprecated getBoxProps clicked ",d," times"]})},args:{gap:"m",border:"default",p:"xl",typography:{font:"label_m",color:"default"}},parameters:{chromatic:{disableSnapshot:!0}}},y={name:"border (deprecated)",args:{direction:"col",gap:"0",border:"none"},parameters:{controls:{disable:!0}},render:r=>e.jsxs(n,{...r,children:[e.jsx(h,{children:"border"}),e.jsxs(n,{...P,children:[e.jsxs(n,{...t,children:[e.jsx(s,{children:"none"}),e.jsx(n,{...x,children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"weak"}),e.jsx(n,{...x,border:"weak",children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"default"}),e.jsx(n,{...x,border:"default",children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"moderate"}),e.jsx(n,{...x,border:"moderate",children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"strong"}),e.jsx(n,{...x,border:"strong",children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"extra-strong"}),e.jsx(n,{...x,border:"extra-strong",children:"1"})]})]}),e.jsx(h,{children:"borderTop"}),e.jsxs(n,{...P,children:[e.jsxs(n,{...t,children:[e.jsx(s,{children:"none"}),e.jsx(n,{...x,borderTop:"none",children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"weak"}),e.jsx(n,{...x,borderTop:"weak",children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"default"}),e.jsx(n,{...x,borderTop:"default",children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"moderate"}),e.jsx(n,{...x,borderTop:"moderate",children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"strong"}),e.jsx(n,{...x,borderTop:"strong",children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"extra-strong"}),e.jsx(n,{...x,borderTop:"extra-strong",children:"1"})]})]}),e.jsx(h,{children:"borderRight"}),e.jsxs(n,{...P,children:[e.jsxs(n,{...t,children:[e.jsx(s,{children:"none"}),e.jsx(n,{...x,borderRight:"none",children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"weak"}),e.jsx(n,{...x,borderRight:"weak",children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"default"}),e.jsx(n,{...x,borderRight:"default",children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"moderate"}),e.jsx(n,{...x,borderRight:"moderate",children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"strong"}),e.jsx(n,{...x,borderRight:"strong",children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"extra-strong"}),e.jsx(n,{...x,borderRight:"extra-strong",children:"1"})]})]}),e.jsx(h,{children:"borderBottom"}),e.jsxs(n,{...P,children:[e.jsxs(n,{...t,children:[e.jsx(s,{children:"none"}),e.jsx(n,{...x,borderBottom:"none",children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"weak"}),e.jsx(n,{...x,borderBottom:"weak",children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"default"}),e.jsx(n,{...x,borderBottom:"default",children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"moderate"}),e.jsx(n,{...x,borderBottom:"moderate",children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"strong"}),e.jsx(n,{...x,borderBottom:"strong",children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"extra-strong"}),e.jsx(n,{...x,borderBottom:"extra-strong",children:"1"})]})]}),e.jsx(h,{children:"borderLeft"}),e.jsxs(n,{...P,children:[e.jsxs(n,{...t,children:[e.jsx(s,{children:"none"}),e.jsx(n,{...x,borderLeft:"none",children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"weak"}),e.jsx(n,{...x,borderLeft:"weak",children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"default"}),e.jsx(n,{...x,borderLeft:"default",children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"moderate"}),e.jsx(n,{...x,borderLeft:"moderate",children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"strong"}),e.jsx(n,{...x,borderLeft:"strong",children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"extra-strong"}),e.jsx(n,{...x,borderLeft:"extra-strong",children:"1"})]})]}),e.jsx(h,{children:"borderRadius"}),e.jsxs(n,{...P,children:[e.jsxs(n,{...t,children:[e.jsx(s,{children:"subtle"}),e.jsx(n,{...x,border:"default",borderRadius:"subtle",children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"soft"}),e.jsx(n,{...x,border:"default",borderRadius:"soft",children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"cushiony"}),e.jsx(n,{...x,border:"default",borderRadius:"cushiony",children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"round"}),e.jsx(n,{...x,border:"default",borderRadius:"round",children:"1"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"pill"}),e.jsx(n,{...x,border:"default",borderRadius:"pill",children:"1"})]})]}),e.jsxs(n,{...P,children:[e.jsxs(n,{...t,children:[e.jsx(s,{children:"nested-subtle-xs"}),e.jsx(n,{...x,border:"default",borderRadius:"subtle",children:e.jsx(n,{...x,border:"default",borderRadius:"nested-subtle-xs",children:"1"})})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"nested-soft-s"}),e.jsx(n,{...x,border:"default",borderRadius:"soft",children:e.jsx(n,{...x,border:"default",borderRadius:"nested-soft-s",children:"1"})})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"nested-soft-xs"}),e.jsx(n,{...x,border:"default",borderRadius:"soft",children:e.jsx(n,{...x,border:"default",borderRadius:"nested-soft-xs",children:"1"})})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"nested-cushiony-xs"}),e.jsx(n,{...x,border:"default",borderRadius:"cushiony",children:e.jsx(n,{...x,border:"default",borderRadius:"nested-cushiony-xs",children:"1"})})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"nested-cushiony-s"}),e.jsx(n,{...x,border:"default",borderRadius:"cushiony",children:e.jsx(n,{...x,border:"default",borderRadius:"nested-cushiony-s",children:"1"})})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"nested-cushiony-m"}),e.jsx(n,{...x,border:"default",borderRadius:"cushiony",children:e.jsx(n,{...x,border:"default",borderRadius:"nested-cushiony-m",children:"1"})})]})]}),e.jsxs(n,{...P,children:[e.jsxs(n,{...t,children:[e.jsx(s,{children:"twice-soft-xs"}),e.jsx(n,{...x,border:"default",borderRadius:"soft",children:e.jsx(n,{...x,border:"default",borderRadius:"nested-soft-xs",children:e.jsx(n,{...x,border:"default",borderRadius:"twice-soft-xs",children:"1"})})})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"twice-cushiony-s-xs"}),e.jsx(n,{...x,border:"default",borderRadius:"cushiony",children:e.jsx(n,{...x,border:"default",borderRadius:"nested-cushiony-s",children:e.jsx(n,{...x,border:"default",borderRadius:"twice-cushiony-s-xs",children:"1"})})})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"twice-cushiony-m-s"}),e.jsx(n,{...x,border:"default",borderRadius:"cushiony",children:e.jsx(n,{...x,border:"default",borderRadius:"nested-cushiony-m",children:e.jsx(n,{...x,border:"default",borderRadius:"twice-cushiony-m-s",children:"1"})})})]})]})]})},E={name:"padding (deprecated)",args:{direction:"col",border:"none",gap:"0"},parameters:{controls:{disable:!0}},render:r=>e.jsxs(n,{...r,children:[e.jsx(h,{children:"p"}),e.jsxs(n,{...P,children:[e.jsxs(n,{...t,children:[e.jsx(s,{children:"0"}),e.jsx(n,{...i(o,["p"]),p:"0",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"s"}),e.jsx(n,{...i(o,["p"]),p:"s",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"m"}),e.jsx(n,{...i(o,["p"]),p:"m",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"l"}),e.jsx(n,{...i(o,["p"]),p:"l",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"xl"}),e.jsx(n,{...i(o,["p"]),p:"xl",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"xxl"}),e.jsx(n,{...i(o,["p"]),p:"xxl",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"3xl"}),e.jsx(n,{...i(o,["p"]),p:"3xl",children:"content"})]})]}),e.jsx(h,{children:"px"}),e.jsxs(n,{...P,children:[e.jsxs(n,{...t,children:[e.jsx(s,{children:"0"}),e.jsx(n,{...i(o,["p"]),px:"0",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"s"}),e.jsx(n,{...i(o,["p"]),px:"s",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"m"}),e.jsx(n,{...i(o,["p"]),px:"m",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"l"}),e.jsx(n,{...i(o,["p"]),px:"l",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"xl"}),e.jsx(n,{...i(o,["p"]),px:"xl",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"xxl"}),e.jsx(n,{...i(o,["p"]),px:"xxl",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"3xl"}),e.jsx(n,{...i(o,["p"]),px:"3xl",children:"content"})]})]}),e.jsx(h,{children:"py"}),e.jsxs(n,{...P,children:[e.jsxs(n,{...t,children:[e.jsx(s,{children:"0"}),e.jsx(n,{...i(o,["p"]),py:"0",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"s"}),e.jsx(n,{...i(o,["p"]),py:"s",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"m"}),e.jsx(n,{...i(o,["p"]),py:"m",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"l"}),e.jsx(n,{...i(o,["p"]),py:"l",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"xl"}),e.jsx(n,{...i(o,["p"]),py:"xl",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"xxl"}),e.jsx(n,{...i(o,["p"]),py:"xxl",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"3xl"}),e.jsx(n,{...i(o,["p"]),py:"3xl",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"density-xs"}),e.jsx(n,{...i(o,["p"]),py:"density-xs",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"density-s"}),e.jsx(n,{...i(o,["p"]),py:"density-s",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"density-m"}),e.jsx(n,{...i(o,["p"]),py:"density-m",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"density-l"}),e.jsx(n,{...i(o,["p"]),py:"density-l",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"density-xl"}),e.jsx(n,{...i(o,["p"]),py:"density-xl",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"density-xxl"}),e.jsx(n,{...i(o,["p"]),py:"density-xxl",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"density-3xl"}),e.jsx(n,{...i(o,["p"]),py:"density-3xl",children:"content"})]})]}),e.jsx(h,{children:"pt"}),e.jsxs(n,{...P,children:[e.jsxs(n,{...t,children:[e.jsx(s,{children:"0"}),e.jsx(n,{...i(o,["p"]),pt:"0",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"s"}),e.jsx(n,{...i(o,["p"]),pt:"s",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"m"}),e.jsx(n,{...i(o,["p"]),pt:"m",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"l"}),e.jsx(n,{...i(o,["p"]),pt:"l",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"xl"}),e.jsx(n,{...i(o,["p"]),pt:"xl",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"xxl"}),e.jsx(n,{...i(o,["p"]),pt:"xxl",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"3xl"}),e.jsx(n,{...i(o,["p"]),pt:"3xl",children:"content"})]})]}),e.jsx(h,{children:"pr"}),e.jsxs(n,{...P,children:[e.jsxs(n,{...t,children:[e.jsx(s,{children:"0"}),e.jsx(n,{...i(o,["p"]),pr:"0",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"s"}),e.jsx(n,{...i(o,["p"]),pr:"s",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"m"}),e.jsx(n,{...i(o,["p"]),pr:"m",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"l"}),e.jsx(n,{...i(o,["p"]),pr:"l",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"xl"}),e.jsx(n,{...i(o,["p"]),pr:"xl",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"xxl"}),e.jsx(n,{...i(o,["p"]),pr:"xxl",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"3xl"}),e.jsx(n,{...i(o,["p"]),pr:"3xl",children:"content"})]})]}),e.jsx(h,{children:"pb"}),e.jsxs(n,{...P,children:[e.jsxs(n,{...t,children:[e.jsx(s,{children:"0"}),e.jsx(n,{...i(o,["p"]),pb:"0",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"s"}),e.jsx(n,{...i(o,["p"]),pb:"s",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"m"}),e.jsx(n,{...i(o,["p"]),pb:"m",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"l"}),e.jsx(n,{...i(o,["p"]),pb:"l",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"xl"}),e.jsx(n,{...i(o,["p"]),pb:"xl",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"xxl"}),e.jsx(n,{...i(o,["p"]),pb:"xxl",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"3xl"}),e.jsx(n,{...i(o,["p"]),pb:"3xl",children:"content"})]})]}),e.jsx(h,{children:"pl"}),e.jsxs(n,{...P,children:[e.jsxs(n,{...t,children:[e.jsx(s,{children:"0"}),e.jsx(n,{...i(o,["p"]),pl:"0",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"s"}),e.jsx(n,{...i(o,["p"]),pl:"s",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"m"}),e.jsx(n,{...i(o,["p"]),pl:"m",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"l"}),e.jsx(n,{...i(o,["p"]),pl:"l",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"xl"}),e.jsx(n,{...i(o,["p"]),pl:"xl",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"xxl"}),e.jsx(n,{...i(o,["p"]),pl:"xxl",children:"content"})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"3xl"}),e.jsx(n,{...i(o,["p"]),pl:"3xl",children:"content"})]})]})]})},g={name:"boxShadow (deprecated)",args:{gap:"xl",p:"xl"},parameters:{controls:{disable:!0},chromatic:{disableSnapshot:!0}},render:r=>e.jsxs(n,{...r,children:[e.jsx(n,{boxShadow:"none",...x,borderRadius:"subtle",border:"default",children:"none"}),e.jsx(n,{boxShadow:"weak",...x,borderRadius:"subtle",border:"default",children:"weak"}),e.jsx(n,{boxShadow:"default",...x,borderRadius:"subtle",border:"default",children:"default"}),e.jsx(n,{boxShadow:"moderate",...x,borderRadius:"subtle",border:"default",children:"moderate"}),e.jsx(n,{boxShadow:"strong",...x,borderRadius:"subtle",border:"default",children:"strong"})]})},C={name:"bgColor (deprecated)",args:{gap:"xl",p:"xl"},parameters:{chromatic:{disableSnapshot:!0},controls:{disable:!0}},render:r=>e.jsxs(n,{...r,children:[e.jsx(n,{...x,bgColor:"disabled",borderRadius:"subtle",border:"default",children:"disabled"}),e.jsx(n,{...x,bgColor:"transparent",borderRadius:"subtle",border:"default",children:"transparent"}),e.jsx(n,{...x,bgColor:"weak",borderRadius:"subtle",border:"default",children:"weak"}),e.jsx(n,{...x,bgColor:"default",borderRadius:"subtle",border:"default",children:"default"}),e.jsx(n,{...x,bgColor:"enabled",borderRadius:"subtle",border:"default",children:"enabled"}),e.jsx(n,{...x,bgColor:"interactive",borderRadius:"subtle",border:"default",children:"interactive"}),e.jsx(n,{...x,bgColor:"moderate",borderRadius:"subtle",border:"default",children:"moderate"}),e.jsx(n,{...x,bgColor:"strong",borderRadius:"subtle",border:"default",children:"strong"}),e.jsx(n,{...x,bgColor:"inverse",borderRadius:"subtle",border:"default",typography:{font:"body_s",color:"inverse"},children:"inverse"})]})},w={name:"width=container-sizing (deprecated)",parameters:{chromatic:{disableSnapshot:!0},controls:{disable:!0}},render:()=>e.jsxs(n,{direction:"col",gap:"m",p:"s",children:[e.jsxs(n,{direction:"col",gap:"m",width:"m",children:[e.jsx("h1",{className:u("flex","flex-row","border-box","font-heading-m","text-default"),children:"Container"}),e.jsxs("p",{className:u("font-body-s","text-default"),children:["As we do not have a set of generic layouts in mind and the fact CSS media query doesnt support the usage of tokens we have decided to explain it like this. Media query are simple enought to write so it is ok to use hard coded value for"," ",e.jsx("strong",{className:u("font-label-s-emphasized"),children:"breakpoint"})," ","based layout. You have already a good examples on the"," ",e.jsx("strong",{className:u("font-label-s-emphasized"),children:"Modal"})," ","component."]})]}),e.jsx(n,{border:"default",width:"xxs",...x,children:"xxs"}),e.jsx(n,{border:"default",width:"xs",...x,children:"xs"}),e.jsx(n,{border:"default",width:"s",...x,children:"s"}),e.jsx(n,{border:"default",width:"m",...x,children:"m"}),e.jsx(n,{border:"default",width:"l",...x,children:"l"}),e.jsx(n,{border:"default",width:"xl",...x,children:"xl"}),e.jsx(n,{border:"default",width:"xxl",...x,children:"m"}),e.jsx(n,{border:"default",width:"3xl",...x,children:"3xl"}),e.jsx(n,{border:"default",width:"4xl",...x,children:"4xl"})]})},f={name:"zIndex (deprecated)",args:{gap:"xl",p:"xl"},parameters:{controls:{disable:!0},chromatic:{disableSnapshot:!0}},render:r=>e.jsxs(n,{...r,width:"400px",gap:"0",direction:"col",children:[e.jsx(n,{zIndex:"cursor",...x,borderRadius:"subtle",border:"default",width:"calc(100% - (6 * var(--sprout-common-sizing-xxl)))",style:{marginBlockStart:"calc(-1 * var(--sprout-common-sizing-m))"},children:"cursor"}),e.jsx(n,{zIndex:"time_sensitive",...x,borderRadius:"subtle",border:"default",width:"calc(100% - (5 * var(--sprout-common-sizing-xxl)))",style:{marginBlockStart:"calc(-1 * var(--sprout-common-sizing-m))"},children:"time_sensitive"}),e.jsx(n,{zIndex:"context",...x,borderRadius:"subtle",border:"default",width:"calc(100% - (4 * var(--sprout-common-sizing-xxl)))",style:{marginBlockStart:"calc(-1 * var(--sprout-common-sizing-m))"},children:"context"}),e.jsx(n,{zIndex:"overlay",...x,borderRadius:"subtle",border:"default",width:"calc(100% - (3 * var(--sprout-common-sizing-xxl)))",style:{marginBlockStart:"calc(-1 * var(--sprout-common-sizing-m))"},children:"overlay"}),e.jsx(n,{zIndex:"floating",...x,borderRadius:"subtle",border:"default",width:"calc(100% - (2 * var(--sprout-common-sizing-xxl)))",style:{marginBlockStart:"calc(-1 * var(--sprout-common-sizing-m))"},children:"floating"}),e.jsx(n,{zIndex:"stacked",...x,borderRadius:"subtle",border:"default",width:"calc(100% - (1 * var(--sprout-common-sizing-xxl)))",style:{marginBlockStart:"calc(-1 * var(--sprout-common-sizing-m))"},children:"stacked"}),e.jsx(n,{zIndex:void 0,...x,borderRadius:"subtle",border:"default",style:{marginBlockStart:"calc(-1 * var(--sprout-common-sizing-m))"},children:"undefined"})]})},V={args:{direction:"col",border:"none",typography:{font:"label_s",color:"default"},bgColor:"default"},render:r=>e.jsxs(n,{...r,children:[e.jsx(h,{children:"direction"}),e.jsxs(n,{...P,children:[e.jsxs(n,{...t,children:[e.jsx(s,{children:"row (default)"}),e.jsxs(n,{...l,direction:"row",children:[e.jsx(n,{...o,children:"1"}),e.jsx(n,{...o,children:"2"}),e.jsx(n,{...o,children:"3"})]})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"row-reverse"}),e.jsxs(n,{...l,direction:"row-reverse",children:[e.jsx(n,{...o,children:"1"}),e.jsx(n,{...o,children:"2"}),e.jsx(n,{...o,children:"3"})]})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"col"}),e.jsxs(n,{...l,direction:"col",children:[e.jsx(n,{...o,children:"1"}),e.jsx(n,{...o,children:"2"}),e.jsx(n,{...o,children:"3"})]})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"col-reverse"}),e.jsxs(n,{...l,direction:"col-reverse",children:[e.jsx(n,{...o,children:"1"}),e.jsx(n,{...o,children:"2"}),e.jsx(n,{...o,children:"3"})]})]})]}),e.jsx(h,{children:"wrap"}),e.jsxs(n,{...P,children:[e.jsxs(n,{...t,width:"400px",children:[e.jsx(s,{children:"nowrap (default)"}),e.jsxs(n,{...l,width:"200px",children:[e.jsx(n,{...o,children:"1"}),e.jsx(n,{...o,children:"2"}),e.jsx(n,{...o,children:"3"}),e.jsx(n,{...o,children:"4"}),e.jsx(n,{...o,children:"5"}),e.jsx(n,{...o,children:"6"})]})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"wrap"}),e.jsxs(n,{...l,wrap:"wrap",width:"200px",children:[e.jsx(n,{...o,children:"1"}),e.jsx(n,{...o,children:"2"}),e.jsx(n,{...o,children:"3"}),e.jsx(n,{...o,children:"4"}),e.jsx(n,{...o,children:"5"}),e.jsx(n,{...o,children:"6"})]})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"wrap-reverse"}),e.jsxs(n,{...l,wrap:"wrap-reverse",width:"200px",children:[e.jsx(n,{...o,children:"1"}),e.jsx(n,{...o,children:"2"}),e.jsx(n,{...o,children:"3"}),e.jsx(n,{...o,children:"4"}),e.jsx(n,{...o,children:"5"}),e.jsx(n,{...o,children:"6"})]})]})]}),e.jsx(h,{children:"justify"}),e.jsxs(n,{...P,wrap:"wrap",children:[e.jsxs(n,{...t,width:"400px",children:[e.jsx(s,{children:"start (default)"}),e.jsxs(n,{...l,width:"400px",children:[e.jsx(n,{...o,children:"1"}),e.jsx(n,{...o,children:"2"}),e.jsx(n,{...o,children:"3"})]})]}),e.jsxs(n,{...t,width:"400px",children:[e.jsx(s,{children:"end"}),e.jsxs(n,{...l,justify:"end",width:"400px",children:[e.jsx(n,{...o,children:"1"}),e.jsx(n,{...o,children:"2"}),e.jsx(n,{...o,children:"3"})]})]}),e.jsxs(n,{...t,width:"400px",children:[e.jsx(s,{children:"center"}),e.jsxs(n,{...l,justify:"center",width:"400px",children:[e.jsx(n,{...o,children:"1"}),e.jsx(n,{...o,children:"2"}),e.jsx(n,{...o,children:"3"})]})]}),e.jsxs(n,{...t,width:"400px",children:[e.jsx(s,{children:"between"}),e.jsxs(n,{...l,justify:"between",width:"400px",children:[e.jsx(n,{...o,children:"1"}),e.jsx(n,{...o,children:"2"}),e.jsx(n,{...o,children:"3"})]})]}),e.jsxs(n,{...t,width:"400px",children:[e.jsx(s,{children:"around"}),e.jsxs(n,{...l,justify:"around",width:"400px",children:[e.jsx(n,{...o,children:"1"}),e.jsx(n,{...o,children:"2"}),e.jsx(n,{...o,children:"3"})]})]}),e.jsxs(n,{...t,width:"400px",children:[e.jsx(s,{children:"evenly"}),e.jsxs(n,{...l,justify:"evenly",width:"400px",children:[e.jsx(n,{...o,children:"1"}),e.jsx(n,{...o,children:"2"}),e.jsx(n,{...o,children:"3"})]})]})]}),e.jsx(h,{children:"alignItems"}),e.jsxs(n,{...P,wrap:"wrap",children:[e.jsxs(n,{...t,width:"400px",children:[e.jsx(s,{children:"stretch (default)"}),e.jsxs(n,{...l,height:"150px",children:[e.jsx(n,{...o,children:"1"}),e.jsx(n,{...o,children:"2"}),e.jsx(n,{...o,children:"3"})]})]}),e.jsxs(n,{...t,width:"400px",children:[e.jsx(s,{children:"start"}),e.jsxs(n,{...l,alignItems:"start",height:"150px",children:[e.jsx(n,{...o,height:"20px",children:"1"}),e.jsx(n,{...o,height:"100px",children:"2"}),e.jsx(n,{...o,children:"3"})]})]}),e.jsxs(n,{...t,width:"400px",children:[e.jsx(s,{children:"end"}),e.jsxs(n,{...l,alignItems:"end",height:"150px",children:[e.jsx(n,{...o,height:"20px",children:"1"}),e.jsx(n,{...o,height:"100px",children:"2"}),e.jsx(n,{...o,children:"3"})]})]}),e.jsxs(n,{...t,width:"400px",children:[e.jsx(s,{children:"center"}),e.jsxs(n,{...l,alignItems:"center",height:"150px",children:[e.jsx(n,{...o,height:"20px",children:"1"}),e.jsx(n,{...o,height:"100px",children:"2"}),e.jsx(n,{...o,children:"3"})]})]}),e.jsxs(n,{...t,width:"400px",children:[e.jsx(s,{children:"baseline"}),e.jsxs(n,{...l,alignItems:"baseline",height:"150px",children:[e.jsx(n,{...o,alignItems:"center",height:"100px",children:e.jsx("h1",{className:K,children:"Text text"})}),e.jsx(n,{...o,alignItems:"end",height:"100px",children:e.jsx("p",{className:K,children:"Text text"})}),e.jsx(n,{...o,alignItems:"start",height:"100px",children:e.jsx("h2",{className:K,children:"Text text"})})]})]})]}),e.jsx(h,{children:"alignContent"}),e.jsxs(n,{...P,wrap:"wrap",children:[e.jsxs(n,{...t,children:[e.jsx(s,{children:"start (default)"}),e.jsxs(n,{...l,alignContent:"start",wrap:"wrap",height:"250px",width:"200px",children:[e.jsx(n,{...o,height:"20px",children:"1"}),e.jsx(n,{...o,children:"2"}),e.jsx(n,{...o,height:"20px",children:"3"}),e.jsx(n,{...o,children:"4"}),e.jsx(n,{...o,children:"5"})]})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"end"}),e.jsxs(n,{...l,alignContent:"end",wrap:"wrap",height:"250px",width:"200px",children:[e.jsx(n,{...o,height:"20px",children:"1"}),e.jsx(n,{...o,children:"2"}),e.jsx(n,{...o,height:"20px",children:"3"}),e.jsx(n,{...o,children:"4"}),e.jsx(n,{...o,children:"5"})]})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"center"}),e.jsxs(n,{...l,alignContent:"center",wrap:"wrap",height:"250px",width:"200px",children:[e.jsx(n,{...o,height:"20px",children:"1"}),e.jsx(n,{...o,children:"2"}),e.jsx(n,{...o,height:"20px",children:"3"}),e.jsx(n,{...o,children:"4"}),e.jsx(n,{...o,children:"5"})]})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"stretch"}),e.jsxs(n,{...l,alignContent:"stretch",wrap:"wrap",height:"250px",width:"200px",children:[e.jsx(n,{...o,height:"20px",children:"1"}),e.jsx(n,{...o,children:"2"}),e.jsx(n,{...o,height:"20px",children:"3"}),e.jsx(n,{...o,children:"4"}),e.jsx(n,{...o,children:"5"})]})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"between"}),e.jsxs(n,{...l,alignContent:"between",wrap:"wrap",height:"250px",width:"200px",children:[e.jsx(n,{...o,height:"20px",children:"1"}),e.jsx(n,{...o,children:"2"}),e.jsx(n,{...o,height:"20px",children:"3"}),e.jsx(n,{...o,children:"4"}),e.jsx(n,{...o,children:"5"})]})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"around"}),e.jsxs(n,{...l,alignContent:"around",wrap:"wrap",height:"250px",width:"200px",children:[e.jsx(n,{...o,height:"20px",children:"1"}),e.jsx(n,{...o,children:"2"}),e.jsx(n,{...o,height:"20px",children:"3"}),e.jsx(n,{...o,children:"4"}),e.jsx(n,{...o,children:"5"})]})]})]}),e.jsxs(n,{direction:"col",children:[e.jsx(h,{children:"gap, row-gap, column-gap"}),e.jsxs(n,{...P,children:[e.jsxs(n,{...t,children:[e.jsx(s,{children:"gap=s"}),e.jsxs(n,{...l,direction:"row",alignItems:"start",wrap:"wrap",width:"200px",gap:"s",children:[e.jsx(n,{...o,children:"1"}),e.jsx(n,{...o,children:"2"}),e.jsx(n,{...o,children:"3"})]})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"columGap=s rowGap=xl"}),e.jsxs(n,{...l,direction:"row",alignItems:"start",wrap:"wrap",width:"200px",rowGap:"xl",columnGap:"s",children:[e.jsx(n,{...o,children:"1"}),e.jsx(n,{...o,children:"2"}),e.jsx(n,{...o,children:"3"}),e.jsx(n,{...o,children:"4"}),e.jsx(n,{...o,children:"5"})]})]})]})]}),e.jsxs(n,{direction:"col",children:[e.jsx(h,{children:"grow / shrink"}),e.jsxs(n,{...P,children:[e.jsxs(n,{...t,children:[e.jsx(s,{children:"grow"}),e.jsxs(n,{...l,direction:"row",width:"300px",children:[e.jsx(n,{...o,grow:1,children:"1"}),e.jsx(n,{...o,grow:1,children:"1"}),e.jsx(n,{...o,grow:1,children:"1"})]}),e.jsxs(n,{...l,direction:"row",width:"300px",children:[e.jsx(n,{...o,grow:1,children:"1"}),e.jsx(n,{...o,grow:2,children:"2"}),e.jsx(n,{...o,grow:1,children:"1"})]})]}),e.jsxs(n,{...t,children:[e.jsx(s,{children:"shrink"}),e.jsx(n,{...l,direction:"row",width:"280px",children:e.jsx(n,{...o,basis:"300px",shrink:0,children:"shrink = 0"})}),e.jsxs(n,{...l,direction:"row",width:"280px",children:[e.jsx(n,{...o,basis:"300px",shrink:1,children:"shrink = 1"}),e.jsx(n,{...o,basis:"300px",shrink:1,children:"shrink = 1"})]}),e.jsxs(n,{...l,direction:"row",width:"280px",children:[e.jsx(n,{...o,basis:"300px",shrink:2,children:"shrink = 2"}),e.jsx(n,{...o,basis:"300px",shrink:1,children:"shrink = 1"})]})]})]})]}),e.jsxs(n,{direction:"col",children:[e.jsx(h,{children:"align-self"}),e.jsx(n,{...P,children:e.jsxs(n,{...l,direction:"row",height:"250px",alignItems:"start",children:[e.jsx(n,{...o,alignSelf:"start",children:"start"}),e.jsx(n,{...o,alignSelf:"center",children:"center"}),e.jsx(n,{...o,alignSelf:"end",children:"end"}),e.jsx(n,{...o,children:"3"}),e.jsx(n,{...o,children:"4"})]})})]}),e.jsxs(n,{direction:"col",children:[e.jsx(h,{children:"Overflow"}),e.jsx(n,{...P,children:e.jsxs(n,{...t,children:[e.jsx(s,{children:"overflow"}),e.jsxs(n,{...l,direction:"row",width:"fit",overflow:"visible",children:[e.jsx(n,{...o,overflow:"auto",justify:"start",width:"80px",noShrink:!0,tabIndex:0,children:e.jsx(n,{width:"500px",noShrink:!0,grow:!0,children:"auto Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"})}),e.jsx(n,{...o,overflow:"hidden",justify:"start",width:"80px",noShrink:!0,children:e.jsx(n,{width:"500px",noShrink:!0,grow:!0,alignItems:"center",children:"hidden Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"})}),e.jsx(n,{...o,overflow:"scroll",justify:"start",width:"80px",noShrink:!0,tabIndex:0,children:e.jsx(n,{width:"500px",noShrink:!0,grow:!0,children:"scroll Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"})}),e.jsx(n,{...o,overflow:"visible",justify:"start",width:"80px",noShrink:!0,children:e.jsx(n,{width:"500px",noShrink:!0,grow:!0,typography:{font:"body_m",color:"default"},children:"visible Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"})})]})]})}),e.jsx(n,{...P,children:e.jsxs(n,{...t,children:[e.jsx(s,{children:"overflow-x"}),e.jsxs(n,{...l,direction:"row",width:"fit-content",overflowX:"visible",children:[e.jsx(n,{...o,overflowX:"auto",justify:"start",width:"80px",noShrink:!0,tabIndex:0,children:e.jsx(n,{width:"500px",noShrink:!0,grow:!0,children:"auto Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"})}),e.jsx(n,{...o,overflowX:"hidden",justify:"start",width:"80px",noShrink:!0,children:e.jsx(n,{width:"500px",noShrink:!0,grow:!0,alignItems:"center",children:"hidden Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"})}),e.jsx(n,{...o,overflowX:"scroll",justify:"start",width:"80px",noShrink:!0,tabIndex:0,children:e.jsx(n,{width:"500px",noShrink:!0,grow:!0,children:"scroll Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"})}),e.jsx(n,{...o,overflowX:"visible",justify:"start",width:"80px",noShrink:!0,children:e.jsx(n,{width:"500px",noShrink:!0,grow:!0,typography:{font:"body_m",color:"default"},children:"visible Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"})})]})]})}),e.jsx(n,{...P,children:e.jsxs(n,{...t,children:[e.jsx(s,{children:"overflowY"}),e.jsxs(n,{...l,direction:"row",width:"fit-content",children:[e.jsx(n,{...o,overflowY:"auto",justify:"start",width:"110px",height:"80px",noShrink:!0,tabIndex:0,children:e.jsx(n,{height:"200px",children:"auto Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"})}),e.jsx(n,{...o,overflowY:"hidden",justify:"start",width:"110px",height:"80px",noShrink:!0,children:e.jsx(n,{height:"200px",alignItems:"center",children:"hidden Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"})}),e.jsx(n,{...o,overflowY:"scroll",justify:"start",width:"110px",height:"80px",noShrink:!0,tabIndex:0,children:e.jsx(n,{height:"200px",children:"scroll Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"})}),e.jsx(n,{...o,overflowY:"visible",justify:"start",width:"110px",height:"80px",noShrink:!0,children:e.jsx(n,{height:"200px",typography:{font:"body_m",color:"default"},children:"visible Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"})})]})]})})]})]}),parameters:{controls:{disable:!0}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};const ce=["Playground","WithgetBoxProps","Border","Padding","BoxShadow","bgColor","ContainerSizing","ZIndex","VisualTest"];export{y as Border,g as BoxShadow,w as ContainerSizing,E as Padding,S as Playground,V as VisualTest,b as WithgetBoxProps,f as ZIndex,ce as __namedExportsOrder,C as bgColor,Pe as default};
