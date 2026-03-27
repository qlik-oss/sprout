import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Fn as n,Pn as r,nr as i,tt as a,v as o,xt as s}from"./iframe-RiXBydPV.js";import{i as c,n as l,t as u}from"./icons-CFhwHQjC.js";var d,f,p,m,h,g,_;t((()=>{d=e(i()),o(),c(),f=n(),p={title:`Components/SearchHighlight`,component:a},m={parameters:{chromatic:{disableSnapshot:!0}},render:({...e})=>(0,f.jsx)(a,{...e}),args:{query:`search`,children:`This is a search result with multiple search terms.`,caseSensitive:!1},argTypes:{query:{control:`text`,description:`The search query to highlight in the text`},children:{control:`text`,description:`The text content to search within`},activeIndex:{control:`number`,description:`The index of the match to highlight as active (0-based)`},caseSensitive:{control:`boolean`,description:`Whether the search should be case-sensitive`}}},h={render:function(){let[e,t]=(0,d.useState)(0),[n,i]=(0,d.useState)(0),o=()=>{t(e=>Math.max(0,e-1))},c=()=>{t(e=>Math.min(n-1,e+1))};return(0,f.jsxs)(`div`,{className:r(`flex`,`flex-col`,`gap-m`),children:[(0,f.jsxs)(`div`,{className:r(`flex`,`flex-row`,`gap-xs`,`items-center`),children:[(0,f.jsx)(s,{variant:`quiet`,size:`small`,"aria-label":`Previous match`,icon:(0,f.jsx)(u,{height:void 0}),onClick:o,disabled:e===0}),(0,f.jsx)(`span`,{className:r(`font-body-s`,`text-default`),children:n>0?`${e+1} of ${n}`:`No matches`}),(0,f.jsx)(s,{variant:`quiet`,size:`small`,"aria-label":`Next match`,icon:(0,f.jsx)(l,{height:void 0}),onClick:c,disabled:e===n-1})]}),(0,f.jsx)(`p`,{children:(0,f.jsx)(a,{query:`test`,activeIndex:e,onMatchCount:i,children:`This is a test string with multiple test occurrences for test purposes. Each test word is highlighted, and you can navigate between test matches using the buttons above.`})})]})}},g={render:()=>(0,f.jsxs)(`div`,{className:r(`flex`,`flex-col`,`gap-m`),children:[(0,f.jsx)(a,{query:`variant`,children:`Default variant.`}),(0,f.jsx)(a,{query:`search`,activeIndex:0,children:`This is a search result with activeIndex.`}),(0,f.jsx)(a,{query:`test`,activeIndex:1,children:`This is a test string with multiple test occurrences for test purposes with activeIndex set to 1`}),(0,f.jsx)(a,{query:`WORD`,children:`This word is matched regardless of case: Word, word, WORD`}),(0,f.jsx)(a,{query:`Word`,caseSensitive:!0,children:`Only Word is matched, not word or WORD`})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`WithNavigation`,`VisualTest`]}))();export{m as Playground,g as VisualTest,h as WithNavigation,_ as __namedExportsOrder,p as default};