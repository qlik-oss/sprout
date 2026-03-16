import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-sE-G6KV_.js";import"./sprout-DH_pwd-g.js";import"./lib-Btq7eDYl.js";import{t as n}from"./jsx-runtime-BtS28q-4.js";import"./react-dom-1IKd54jX.js";import{K as r,hn as i}from"./iframe-BRSAI4nO.js";import{n as a,t as o}from"./icons-CsjC9TfL.js";var s={highlight_default:`_highlight_default_hmkkh_1`,highlight_active:`_highlight_active_hmkkh_8`},c=n(),l=e=>e.normalize(`NFKC`),u=(e,t,n=0)=>{let r=l(e),i=e.length<r.length?e.length:r.length,a=l(t).indexOf(r,n);if(a>-1)for(let e=0;e<t.length;e+=1){let n=t.substring(a,i+e).trim();if(r===l(n))return{index:a,length:n.length,resultMatch:n}}return{length:-1,index:-1,resultMatch:null}};function d(e){let{query:t,caseSensitive:n=!1,children:r,activeIndex:a,onMatchCount:o,"data-testid":l,...d}=e,f=r||``,p=0,m=0;if(!t||!f)return(0,c.jsx)(`span`,{"data-testid":l,...d,children:f});let h=0,g=[],_=[],v=n?f.toString():f.toString().toUpperCase(),y=n?t.toString():t.toString().toUpperCase();if(y.length>0){for(;h!==-1;){let e=u(y,v,h),t=e.index;if(t!==-1){g.push(f.substring(h,t));let n=a!==void 0&&m===a;g.push((0,c.jsx)(`span`,{role:`mark`,"aria-current":n?`true`:void 0,"data-match-index":m,className:i({[s.highlight_active]:n,[s.highlight_default]:!n}),children:f.substring(t,t+e.length)},`${p}`)),_.push(m),m+=1,h=t+e.length}else{g.push(f.substring(h,f.length)),h=-1;break}p+=1}o&&o(_.length)}else return(0,c.jsx)(`span`,{"data-testid":l,...d,children:f});return(0,c.jsx)(`span`,{"data-testid":l,...d,children:g})}var f=e(t()),p={title:`Components/SearchHighlight`,component:d},m={parameters:{chromatic:{disableSnapshot:!0}},render:({...e})=>(0,c.jsx)(d,{...e}),args:{query:`search`,children:`This is a search result with multiple search terms.`,caseSensitive:!1},argTypes:{query:{control:`text`,description:`The search query to highlight in the text`},children:{control:`text`,description:`The text content to search within`},activeIndex:{control:`number`,description:`The index of the match to highlight as active (0-based)`},caseSensitive:{control:`boolean`,description:`Whether the search should be case-sensitive`}}},h={render:function(){let[e,t]=(0,f.useState)(0),[n,s]=(0,f.useState)(0),l=()=>{t(e=>Math.max(0,e-1))},u=()=>{t(e=>Math.min(n-1,e+1))};return(0,c.jsxs)(`div`,{className:i(`flex`,`flex-col`,`gap-m`),children:[(0,c.jsxs)(`div`,{className:i(`flex`,`flex-row`,`gap-xs`,`items-center`),children:[(0,c.jsx)(r,{variant:`quiet`,size:`small`,"aria-label":`Previous match`,icon:(0,c.jsx)(o,{height:void 0}),onClick:l,disabled:e===0}),(0,c.jsx)(`span`,{className:i(`font-body-s`,`text-default`),children:n>0?`${e+1} of ${n}`:`No matches`}),(0,c.jsx)(r,{variant:`quiet`,size:`small`,"aria-label":`Next match`,icon:(0,c.jsx)(a,{height:void 0}),onClick:u,disabled:e===n-1})]}),(0,c.jsx)(`p`,{children:(0,c.jsx)(d,{query:`test`,activeIndex:e,onMatchCount:s,children:`This is a test string with multiple test occurrences for test purposes. Each test word is highlighted, and you can navigate between test matches using the buttons above.`})})]})}},g={render:()=>(0,c.jsxs)(`div`,{className:i(`flex`,`flex-col`,`gap-m`),children:[(0,c.jsx)(d,{query:`variant`,children:`Default variant.`}),(0,c.jsx)(d,{query:`search`,activeIndex:0,children:`This is a search result with activeIndex.`}),(0,c.jsx)(d,{query:`test`,activeIndex:1,children:`This is a test string with multiple test occurrences for test purposes with activeIndex set to 1`}),(0,c.jsx)(d,{query:`WORD`,children:`This word is matched regardless of case: Word, word, WORD`}),(0,c.jsx)(d,{query:`Word`,caseSensitive:!0,children:`Only Word is matched, not word or WORD`})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};var _=[`Playground`,`WithNavigation`,`VisualTest`];export{m as Playground,g as VisualTest,h as WithNavigation,_ as __namedExportsOrder,p as default};