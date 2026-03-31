import{a as e,n as t,r as n}from"./chunk-BneVvdWh.js";import{In as r,Ln as i,ir as a,tt as o,v as s,xt as c}from"./iframe-B0xl5hqz.js";import{i as l,n as u,t as d}from"./icons-BtQCQGrp.js";var f=n({Playground:()=>g,VisualTest:()=>v,WithNavigation:()=>_,__namedExportsOrder:()=>y,default:()=>h}),p,m,h,g,_,v,y,b=t((()=>{p=e(a()),s(),l(),m=i(),h={title:`Components/SearchHighlight`,component:o},g={parameters:{chromatic:{disableSnapshot:!0}},render:({...e})=>(0,m.jsx)(o,{...e}),args:{query:`search`,children:`This is a search result with multiple search terms.`,caseSensitive:!1},argTypes:{query:{control:`text`,description:`The search query to highlight in the text`},children:{control:`text`,description:`The text content to search within`},activeIndex:{control:`number`,description:`The index of the match to highlight as active (0-based)`},caseSensitive:{control:`boolean`,description:`Whether the search should be case-sensitive`}}},_={render:function(){let[e,t]=(0,p.useState)(0),[n,i]=(0,p.useState)(0),a=()=>{t(e=>Math.max(0,e-1))},s=()=>{t(e=>Math.min(n-1,e+1))};return(0,m.jsxs)(`div`,{className:r(`flex`,`flex-col`,`gap-m`),children:[(0,m.jsxs)(`div`,{className:r(`flex`,`flex-row`,`gap-xs`,`items-center`),children:[(0,m.jsx)(c,{variant:`quiet`,size:`small`,"aria-label":`Previous match`,icon:(0,m.jsx)(d,{height:void 0}),onClick:a,disabled:e===0}),(0,m.jsx)(`span`,{className:r(`font-body-s`,`text-default`),children:n>0?`${e+1} of ${n}`:`No matches`}),(0,m.jsx)(c,{variant:`quiet`,size:`small`,"aria-label":`Next match`,icon:(0,m.jsx)(u,{height:void 0}),onClick:s,disabled:e===n-1})]}),(0,m.jsx)(`p`,{children:(0,m.jsx)(o,{query:`test`,activeIndex:e,onMatchCount:i,children:`This is a test string with multiple test occurrences for test purposes. Each test word is highlighted, and you can navigate between test matches using the buttons above.`})})]})}},v={render:()=>(0,m.jsxs)(`div`,{className:r(`flex`,`flex-col`,`gap-m`),children:[(0,m.jsx)(o,{query:`variant`,children:`Default variant.`}),(0,m.jsx)(o,{query:`search`,activeIndex:0,children:`This is a search result with activeIndex.`}),(0,m.jsx)(o,{query:`test`,activeIndex:1,children:`This is a test string with multiple test occurrences for test purposes with activeIndex set to 1`}),(0,m.jsx)(o,{query:`WORD`,children:`This word is matched regardless of case: Word, word, WORD`}),(0,m.jsx)(o,{query:`Word`,caseSensitive:!0,children:`Only Word is matched, not word or WORD`})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Playground`,`WithNavigation`,`VisualTest`]}));b();export{g as Playground,v as VisualTest,_ as WithNavigation,y as __namedExportsOrder,h as default,b as n,f as t};