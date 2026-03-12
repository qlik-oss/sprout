import{j as e,r as T}from"./iframe-Bp0nu8X6.js";import{A as W,a as _}from"./icons-BRaEcZ2A.js";import{c as g}from"./classNames-BUd7eP-S.js";import{I as q}from"./IconButton-Bu152FGZ.js";import"./preload-helper-PPVm8Dsz.js";import"./sprout-rpr_484f.js";import"./Button-CBkOB6z4.js";import"./Button.module-BRCMjQTg.js";import"./common-bQH3ZR03.js";import"./Badge-Br2oOa7d.js";import"./Tooltip-B3oqGcOh.js";import"./sprout-tokens-C4H4srAS.js";import"./renderOrClone-D5e_-V2O.js";import"./useId-C38y77Da.js";import"./ProgressCircular-DO25q9z0.js";import"./useI18n-D2jaKmf9.js";const H="_highlight_default_hmkkh_1",k="_highlight_active_hmkkh_8",j={highlight_default:H,highlight_active:k},I=a=>a.normalize("NFKC"),C=(a,t,o=0)=>{const s=I(a),l=a.length<s.length?a.length:s.length,c=I(t).indexOf(s,o);if(c>-1)for(let r=0;r<t.length;r+=1){const n=t.substring(c,l+r).trim(),i=I(n);if(s===i)return{index:c,length:n.length,resultMatch:n}}return{length:-1,index:-1,resultMatch:null}};function h(a){const{query:t,caseSensitive:o=!1,children:s,activeIndex:l,onMatchCount:c,"data-testid":r,...n}=a,i=s||"";let b=0,m=0;if(!t||!i)return e.jsx("span",{"data-testid":r,...n,children:i});let d=0;const p=[],w=[],M=o?i.toString():i.toString().toUpperCase(),N=o?t.toString():t.toString().toUpperCase();if(N.length>0){for(;d!==-1;){const S=C(N,M,d),u=S.index;if(u!==-1){p.push(i.substring(d,u));const y=l!==void 0&&m===l;p.push(e.jsx("span",{role:"mark","aria-current":y?"true":void 0,"data-match-index":m,className:g({[j.highlight_active]:y,[j.highlight_default]:!y}),children:i.substring(u,u+S.length)},`${b}`)),w.push(m),m+=1,d=u+S.length}else{p.push(i.substring(d,i.length)),d=-1;break}b+=1}c&&c(w.length)}else return e.jsx("span",{"data-testid":r,...n,children:i});return e.jsx("span",{"data-testid":r,...n,children:p})}const J={title:"Components/SearchHighlight",component:h},x={parameters:{chromatic:{disableSnapshot:!0}},render:({...a})=>e.jsx(h,{...a}),args:{query:"search",children:"This is a search result with multiple search terms.",caseSensitive:!1},argTypes:{query:{control:"text",description:"The search query to highlight in the text"},children:{control:"text",description:"The text content to search within"},activeIndex:{control:"number",description:"The index of the match to highlight as active (0-based)"},caseSensitive:{control:"boolean",description:"Whether the search should be case-sensitive"}}},v={render:function(){const[t,o]=T.useState(0),[s,l]=T.useState(0),c=()=>{o(n=>Math.max(0,n-1))},r=()=>{o(n=>Math.min(s-1,n+1))};return e.jsxs("div",{className:g("flex","flex-col","gap-m"),children:[e.jsxs("div",{className:g("flex","flex-row","gap-xs","items-center"),children:[e.jsx(q,{variant:"quiet",size:"small","aria-label":"Previous match",icon:e.jsx(W,{height:void 0}),onClick:c,disabled:t===0}),e.jsx("span",{className:g("font-body-s","text-default"),children:s>0?`${t+1} of ${s}`:"No matches"}),e.jsx(q,{variant:"quiet",size:"small","aria-label":"Next match",icon:e.jsx(_,{height:void 0}),onClick:r,disabled:t===s-1})]}),e.jsx("p",{children:e.jsx(h,{query:"test",activeIndex:t,onMatchCount:l,children:"This is a test string with multiple test occurrences for test purposes. Each test word is highlighted, and you can navigate between test matches using the buttons above."})})]})}},f={render:()=>e.jsxs("div",{className:g("flex","flex-col","gap-m"),children:[e.jsx(h,{query:"variant",children:"Default variant."}),e.jsx(h,{query:"search",activeIndex:0,children:"This is a search result with activeIndex."}),e.jsx(h,{query:"test",activeIndex:1,children:"This is a test string with multiple test occurrences for test purposes with activeIndex set to 1"}),e.jsx(h,{query:"WORD",children:"This word is matched regardless of case: Word, word, WORD"}),e.jsx(h,{query:"Word",caseSensitive:!0,children:"Only Word is matched, not word or WORD"})]})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: ({
    ...props
  }) => {
    return <SearchHighlight {...props} />;
  },
  args: {
    query: "search",
    children: "This is a search result with multiple search terms.",
    caseSensitive: false
  },
  argTypes: {
    query: {
      control: "text",
      description: "The search query to highlight in the text"
    },
    children: {
      control: "text",
      description: "The text content to search within"
    },
    activeIndex: {
      control: "number",
      description: "The index of the match to highlight as active (0-based)"
    },
    caseSensitive: {
      control: "boolean",
      description: "Whether the search should be case-sensitive"
    }
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function WithNavigationStory() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [totalMatches, setTotalMatches] = useState(0);
    const handlePrevious = () => {
      setActiveIndex(prev => Math.max(0, prev - 1));
    };
    const handleNext = () => {
      setActiveIndex(prev => Math.min(totalMatches - 1, prev + 1));
    };
    return <div className={classNames("flex", "flex-col", "gap-m")}>
        <div className={classNames("flex", "flex-row", "gap-xs", "items-center")}>
          <IconButton variant="quiet" size="small" aria-label="Previous match" icon={<ArrowLeftIcon height={undefined} />} onClick={handlePrevious} disabled={activeIndex === 0} />
          <span className={classNames("font-body-s", "text-default")}>
            {totalMatches > 0 ? \`\${activeIndex + 1} of \${totalMatches}\` : "No matches"}
          </span>
          <IconButton variant="quiet" size="small" aria-label="Next match" icon={<ArrowRightIcon height={undefined} />} onClick={handleNext} disabled={activeIndex === totalMatches - 1} />
        </div>
        <p>
          <SearchHighlight query="test" activeIndex={activeIndex} onMatchCount={setTotalMatches}>
            This is a test string with multiple test occurrences for test
            purposes. Each test word is highlighted, and you can navigate
            between test matches using the buttons above.
          </SearchHighlight>
        </p>
      </div>;
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className={classNames("flex", "flex-col", "gap-m")}>
        <SearchHighlight query="variant">Default variant.</SearchHighlight>
        <SearchHighlight query="search" activeIndex={0}>
          This is a search result with activeIndex.
        </SearchHighlight>
        <SearchHighlight query="test" activeIndex={1}>
          This is a test string with multiple test occurrences for test purposes
          with activeIndex set to 1
        </SearchHighlight>
        <SearchHighlight query="WORD">
          This word is matched regardless of case: Word, word, WORD
        </SearchHighlight>
        <SearchHighlight query="Word" caseSensitive>
          Only Word is matched, not word or WORD
        </SearchHighlight>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};const X=["Playground","WithNavigation","VisualTest"];export{x as Playground,f as VisualTest,v as WithNavigation,X as __namedExportsOrder,J as default};
