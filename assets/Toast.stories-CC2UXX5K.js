import{r as b,j as e}from"./iframe-B4-nXs83.js";import{s as i}from"./sprout-SOoz1jzb.js";import{T as t}from"./index-yRxPYi8D.js";import{B as y}from"./Button-Cv6yFaKa.js";import{c as v}from"./classNames-eIMwhIDK.js";import{L as j}from"./Link-BgX08Hyd.js";const h={children:{table:{type:{summary:"ReactNode"},subcategory:"Toast.Container"}},placement:{control:{type:"select"},options:["top-start","top","top-end","bottom-start","bottom","bottom-end"],table:{subcategory:"Toast.Container"}},action:{description:"Optional action button defined by an object",control:{type:"object"},table:{subcategory:"Toast.Content"}},message:{control:{type:"text"},table:{subcategory:"Toast.Content"}},title:{control:{type:"text"},table:{subcategory:"Toast.Content"}},severity:{options:[void 0,"info","warning","error","success"],control:{default:"info",type:"select"},table:{subcategory:"Toast.Content"}},"data-testid":{table:{disable:!0}},onClose:{table:{subcategory:"Toast.Content",summary:"function"}}},{fn:f}=__STORYBOOK_MODULE_TEST__,C={breakpoint_xxs:{viewport:"mobile1"},breakpoint_s:{viewport:"s"},"1200px":{viewport:1200}},x={title:"Components/Toast",component:t.Content},p=Math.random().toString(),a={render:({placement:u,...d})=>{const[m,l]=b.useState([{...d,id:p,onClose:()=>{l(n=>n.filter(c=>c.id!==p))}}]);return e.jsxs("div",{className:i.classNames("flex","border-box","items-start","w-full"),style:{blockSize:"300px"},children:[e.jsx(y,{onClick:()=>{const n={...d,id:Math.random().toString()};n.onClose=()=>{l(c=>c.filter(g=>g.id!==n.id))},l([...m,n])},label:"Show toast"}),e.jsx(t.Container,{placement:u,children:m.map(n=>e.jsx(t.Content,{...n},n.id))})]})},args:{message:"This is a toast message",title:"Toast title",placement:"top","data-testid":"toast",onClose:f(),action:{label:"Action button",onClick:()=>{alert("Action clicked")}}},argTypes:h,parameters:{chromatic:{disableSnapshot:!0},design:{type:"figma",url:"https://www.figma.com/file/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=20392-21400&t=UvcZ2kkbIRtJpkIe-0"}}},o={parameters:{chromatic:{modes:C}},render:()=>e.jsxs("div",{className:i.classNames("flex","border-box","flex-col","gap-l","w-fit"),children:[e.jsx(t.Container,{placement:"top-start",children:e.jsx(t.Content,{severity:"error",message:`javax.servlet.ServletException: Something bad happened
    at com.example.myproject.OpenSessionInViewFilter.doFilter(OpenSessionInViewFilter.java:60)
    at org.mortbay.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1157)
    at com.example.myproject.ExceptionHandlerFilter.doFilter(ExceptionHandlerFilter.java:28)
    at org.mortbay.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1157)
    at com.example.myproject.OutputBufferFilter.doFilter(OutputBufferFilter.java:33)
    at org.mortbay.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1157)
    at org.mortbay.jetty.servlet.ServletHandler.handle(ServletHandler.java:388)
    at org.mortbay.jetty.security.SecurityHandler.handle(SecurityHandler.java:216)
    at org.mortbay.jetty.servlet.SessionHandler.handle(SessionHandler.java:182)
    at org.mortbay.jetty.handler.ContextHandler.handle(ContextHandler.java:765)
    at org.mortbay.jetty.webapp.WebAppContext.handle(WebAppContext.java:418)
    at org.mortbay.jetty.handler.HandlerWrapper.handle(HandlerWrapper.java:152)
    at org.mortbay.jetty.Server.handle(Server.java:326)
    at org.mortbay.jetty.HttpConnection.handleRequest(HttpConnection.java:542)
    at org.mortbay.jetty.HttpConnection$RequestHandler.content(HttpConnection.java:943)
    at org.mortbay.jetty.HttpParser.parseNext(HttpParser.java:756)
    at org.mortbay.jetty.HttpParser.parseAvailable(HttpParser.java:218)
    at org.mortbay.jetty.HttpConnection.handle(HttpConnection.java:404)
    at org.mortbay.jetty.bio.SocketConnector$Connection.run(SocketConnector.java:228)
    at org.mortbay.thread.QueuedThreadPool$PoolThread.run(QueuedThreadPool.java:582)
Caused by: com.example.myproject.MyProjectServletException
    at com.example.myproject.MyServlet.doPost(MyServlet.java:169)
    at javax.servlet.http.HttpServlet.service(HttpServlet.java:727)
    at javax.servlet.http.HttpServlet.service(HttpServlet.java:820)
    at org.mortbay.jetty.servlet.ServletHolder.handle(ServletHolder.java:511)
    at org.mortbay.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1166)
    at com.example.myproject.OpenSessionInViewFilter.doFilter(OpenSessionInViewFilter.java:30)
    ... 27 more
Caused by: org.hibernate.exception.ConstraintViolationException: could not insert: [com.example.myproject.MyEntity]
    at org.hibernate.exception.SQLStateConverter.convert(SQLStateConverter.java:96)
    at org.hibernate.exception.JDBCExceptionHelper.convert(JDBCExceptionHelper.java:66)
    at org.hibernate.id.insert.AbstractSelectingDelegate.performInsert(AbstractSelectingDelegate.java:64)
    at org.hibernate.persister.entity.AbstractEntityPersister.insert(AbstractEntityPersister.java:2329)
    at org.hibernate.persister.entity.AbstractEntityPersister.insert(AbstractEntityPersister.java:2822)
    at org.hibernate.action.EntityIdentityInsertAction.execute(EntityIdentityInsertAction.java:71)
    at org.hibernate.engine.ActionQueue.execute(ActionQueue.java:268)
    at org.hibernate.event.def.AbstractSaveEventListener.performSaveOrReplicate(AbstractSaveEventListener.java:321)
    at org.hibernate.event.def.AbstractSaveEventListener.performSave(AbstractSaveEventListener.java:204)
    at org.hibernate.event.def.AbstractSaveEventListener.saveWithGeneratedId(AbstractSaveEventListener.java:130)
    at org.hibernate.event.def.DefaultSaveOrUpdateEventListener.saveWithGeneratedOrRequestedId(DefaultSaveOrUpdateEventListener.java:210)
    at org.hibernate.event.def.DefaultSaveEventListener.saveWithGeneratedOrRequestedId(DefaultSaveEventListener.java:56)
    at org.hibernate.event.def.DefaultSaveOrUpdateEventListener.entityIsTransient(DefaultSaveOrUpdateEventListener.java:195)
    at org.hibernate.event.def.DefaultSaveEventListener.performSaveOrUpdate(DefaultSaveEventListener.java:50)
    at org.hibernate.event.def.DefaultSaveOrUpdateEventListener.onSaveOrUpdate(DefaultSaveOrUpdateEventListener.java:93)
    at org.hibernate.impl.SessionImpl.fireSave(SessionImpl.java:705)
    at org.hibernate.impl.SessionImpl.save(SessionImpl.java:693)
    at org.hibernate.impl.SessionImpl.save(SessionImpl.java:689)
    at sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)
    at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)
    at java.lang.reflect.Method.invoke(Method.java:597)
    at org.hibernate.context.ThreadLocalSessionContext$TransactionProtectionWrapper.invoke(ThreadLocalSessionContext.java:344)
    at $Proxy19.save(Unknown Source)
    at com.example.myproject.MyEntityService.save(MyEntityService.java:59) <-- relevant call (see notes below)
    at com.example.myproject.MyServlet.doPost(MyServlet.java:164)
    ... 32 more
Caused by: java.sql.SQLException: Violation of unique constraint MY_ENTITY_UK_1: duplicate value(s) for column(s) MY_COLUMN in statement [...]
    at org.hsqldb.jdbc.Util.throwError(Unknown Source)
    at org.hsqldb.jdbc.jdbcPreparedStatement.executeUpdate(Unknown Source)
    at com.mchange.v2.c3p0.impl.NewProxyPreparedStatement.executeUpdate(NewProxyPreparedStatement.java:105)
    at org.hibernate.id.insert.AbstractSelectingDelegate.performInsert(AbstractSelectingDelegate.java:57)
    ... 54 more`,onClose:()=>{}})}),e.jsx(t.Container,{placement:"bottom-start",children:e.jsx(t.Content,{message:"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. "})})]})},r={parameters:{chromatic:{modes:C}},render:()=>e.jsx("div",{className:i.classNames("flex","border-box","flex-col","gap-l","w-fit"),children:e.jsxs(t.Container,{placement:"top",children:[e.jsx(t.Content,{message:"You will find it here"}),e.jsx(t.Content,{message:"You will find it here",title:"Document created"}),e.jsx(t.Content,{message:"You will find it here",onClose:()=>{},title:"Document created"}),e.jsx(t.Content,{title:"Document created",message:"You will find it here",onClose:()=>{},action:{label:"Open",onClick:()=>{}}}),e.jsx(t.Content,{severity:"info",title:"Document created",message:"You will find it here",onClose:()=>{},action:{label:"Undo",onClick:()=>{}}})]})})},s={parameters:{chromatic:{modes:{"1200px":{viewport:"l"}}}},render:()=>e.jsxs("div",{className:i.classNames("flex","border-box","flex-col","gap-l","w-fit"),children:[e.jsxs(t.Container,{placement:"top-start",children:[e.jsx(t.Content,{message:"Copied to clipboard"}),e.jsx(t.Content,{message:"Copied to clipboard",onClose:()=>{}}),e.jsx(t.Content,{message:"You will find it in your drafts folder",onClose:()=>{},title:"Document created "}),e.jsx(t.Content,{message:"You will find it in your drafts folder and this long message should wrap and not overflow the container. It can only be three rows before it ellipsis. Let's make sure it does not overflow the container and that it wraps correctly.",onClose:()=>{},title:"Document created with a really long title that should ellipsis",action:{label:"Open sesame... please?",onClick:()=>{}}}),e.jsx(t.Content,{message:"User permissions removed",onClose:()=>{},action:{label:"Undo",onClick:()=>{}}})]}),e.jsxs(t.Container,{placement:"top",children:[e.jsx(t.Content,{severity:"info",message:"Copied to clipboard"}),e.jsx(t.Content,{severity:"info",message:"Copied to clipboard",onClose:()=>{}}),e.jsx(t.Content,{severity:"info",message:"You will find it in your drafts folder",onClose:()=>{},title:"Document created"}),e.jsx(t.Content,{severity:"info",message:"You will find it in your drafts folder",onClose:()=>{},title:"Document created",action:{label:"Open",onClick:()=>{}}}),e.jsx(t.Content,{severity:"info",message:"User permissions removed",onClose:()=>{},action:{label:"Undo",onClick:()=>{}}})]}),e.jsxs(t.Container,{placement:"top-end",children:[e.jsx(t.Content,{severity:"success",message:"Copied to clipboard"}),e.jsx(t.Content,{severity:"success",message:"Copied to clipboard",onClose:()=>{}}),e.jsx(t.Content,{severity:"success",message:"You will find it in your drafts folder",onClose:()=>{},title:"Document created"}),e.jsx(t.Content,{severity:"success",message:"You will find it in your drafts folder",onClose:()=>{},title:"Document created",action:{label:"Open",onClick:()=>{}}}),e.jsx(t.Content,{severity:"success",message:"User permissions removed",onClose:()=>{},action:{label:"Undo",onClick:()=>{}}})]}),e.jsxs(t.Container,{placement:"bottom",children:[e.jsx(t.Content,{severity:"warning",message:e.jsx("div",{children:"Copied to clipboard"})}),e.jsx(t.Content,{severity:"warning",message:e.jsx("div",{children:"Copied to clipboard"}),onClose:()=>{}}),e.jsx(t.Content,{severity:"warning",message:e.jsx("div",{children:"You will find it in your drafts folder"}),onClose:()=>{},title:"Document created"}),e.jsx(t.Content,{severity:"warning",message:e.jsx("div",{children:"You will find it in your drafts folder"}),onClose:()=>{},title:"Document created",action:{label:"Open",onClick:()=>{}}}),e.jsx(t.Content,{severity:"warning",message:e.jsx("div",{children:"User permissions removed"}),onClose:()=>{},action:{label:"Undo",onClick:()=>{}}})]}),e.jsxs(t.Container,{placement:"bottom-end",children:[e.jsx(t.Content,{severity:"error",message:e.jsx("div",{children:"Copied to clipboard"})}),e.jsx(t.Content,{severity:"error",message:e.jsx("div",{children:"Copied to clipboard"}),onClose:()=>{}}),e.jsx(t.Content,{severity:"error",message:e.jsx("div",{children:"You will find it in your drafts folder"}),onClose:()=>{},title:"Document created"}),e.jsx(t.Content,{severity:"error",message:e.jsx("div",{children:"You will find it in your drafts folder"}),onClose:()=>{},title:"Document created",action:{label:"Open",onClick:()=>{}}}),e.jsx(t.Content,{severity:"error",message:e.jsx("div",{children:"User permissions removed"}),onClose:()=>{},action:{label:"Undo",onClick:()=>{}}})]}),e.jsxs(t.Container,{placement:"bottom-start",children:[e.jsx(t.Content,{message:e.jsx("div",{children:"Lorem ipsum dolor sit amet. Lor "}),onClose:()=>{},action:{label:"Dismiss"}}),e.jsx(t.Content,{message:e.jsx("div",{children:"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. "}),onClose:()=>{}}),e.jsx(t.Content,{message:e.jsxs("div",{className:v("flex","flex-col"),children:[e.jsxs("ul",{className:v("pl-xl","m-0"),children:[e.jsx("li",{children:"Do not respect the guideline so trigger a11y issue."}),e.jsx("li",{children:"In this toast container we have a list with two items."}),e.jsx("li",{children:"When the message is higher than 3 rows, an overflow will occcur."})]}),e.jsxs("p",{children:["Here's a"," ",e.jsx(j,{font:"body-xs",href:"#/foo",children:"link"})," ","that goes nowhere"]})]}),onClose:()=>{},action:{label:"Dismiss"}})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: ({
    placement,
    ...args
  }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [toast, setToast] = useState<Array<ToastProps["Content"]>>([{
      ...args,
      id: intialID,
      onClose: () => {
        setToast(current => current.filter(t => t.id !== intialID));
      }
    }]);
    return <div className={sprout.classNames("flex", "border-box", "items-start", "w-full")} style={{
      blockSize: "300px"
    }}>
        <Button onClick={() => {
        const newToast = {
          ...args,
          id: Math.random().toString()
        };
        newToast.onClose = () => {
          setToast(current => current.filter(t => t.id !== newToast.id));
        };
        setToast([...toast, newToast]);
      }} label="Show toast" />
        <Toast.Container placement={placement}>
          {toast.map(t => <Toast.Content key={t.id} {...t} />)}
        </Toast.Container>
      </div>;
  },
  args: {
    message: "This is a toast message",
    title: "Toast title",
    placement: "top",
    "data-testid": "toast",
    onClose: fn(),
    action: {
      label: "Action button",
      onClick: () => {
        // eslint-disable-next-line no-alert
        alert("Action clicked");
      }
    }
  },
  argTypes: ToastArgTypes,
  parameters: {
    chromatic: {
      disableSnapshot: true
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=20392-21400&t=UvcZ2kkbIRtJpkIe-0"
    }
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      modes
    }
  },
  render: () => <div className={sprout.classNames("flex", "border-box", "flex-col", "gap-l", "w-fit")}>
      <Toast.Container placement="top-start">
        <Toast.Content severity="error" message="javax.servlet.ServletException: Something bad happened
    at com.example.myproject.OpenSessionInViewFilter.doFilter(OpenSessionInViewFilter.java:60)
    at org.mortbay.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1157)
    at com.example.myproject.ExceptionHandlerFilter.doFilter(ExceptionHandlerFilter.java:28)
    at org.mortbay.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1157)
    at com.example.myproject.OutputBufferFilter.doFilter(OutputBufferFilter.java:33)
    at org.mortbay.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1157)
    at org.mortbay.jetty.servlet.ServletHandler.handle(ServletHandler.java:388)
    at org.mortbay.jetty.security.SecurityHandler.handle(SecurityHandler.java:216)
    at org.mortbay.jetty.servlet.SessionHandler.handle(SessionHandler.java:182)
    at org.mortbay.jetty.handler.ContextHandler.handle(ContextHandler.java:765)
    at org.mortbay.jetty.webapp.WebAppContext.handle(WebAppContext.java:418)
    at org.mortbay.jetty.handler.HandlerWrapper.handle(HandlerWrapper.java:152)
    at org.mortbay.jetty.Server.handle(Server.java:326)
    at org.mortbay.jetty.HttpConnection.handleRequest(HttpConnection.java:542)
    at org.mortbay.jetty.HttpConnection$RequestHandler.content(HttpConnection.java:943)
    at org.mortbay.jetty.HttpParser.parseNext(HttpParser.java:756)
    at org.mortbay.jetty.HttpParser.parseAvailable(HttpParser.java:218)
    at org.mortbay.jetty.HttpConnection.handle(HttpConnection.java:404)
    at org.mortbay.jetty.bio.SocketConnector$Connection.run(SocketConnector.java:228)
    at org.mortbay.thread.QueuedThreadPool$PoolThread.run(QueuedThreadPool.java:582)
Caused by: com.example.myproject.MyProjectServletException
    at com.example.myproject.MyServlet.doPost(MyServlet.java:169)
    at javax.servlet.http.HttpServlet.service(HttpServlet.java:727)
    at javax.servlet.http.HttpServlet.service(HttpServlet.java:820)
    at org.mortbay.jetty.servlet.ServletHolder.handle(ServletHolder.java:511)
    at org.mortbay.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1166)
    at com.example.myproject.OpenSessionInViewFilter.doFilter(OpenSessionInViewFilter.java:30)
    ... 27 more
Caused by: org.hibernate.exception.ConstraintViolationException: could not insert: [com.example.myproject.MyEntity]
    at org.hibernate.exception.SQLStateConverter.convert(SQLStateConverter.java:96)
    at org.hibernate.exception.JDBCExceptionHelper.convert(JDBCExceptionHelper.java:66)
    at org.hibernate.id.insert.AbstractSelectingDelegate.performInsert(AbstractSelectingDelegate.java:64)
    at org.hibernate.persister.entity.AbstractEntityPersister.insert(AbstractEntityPersister.java:2329)
    at org.hibernate.persister.entity.AbstractEntityPersister.insert(AbstractEntityPersister.java:2822)
    at org.hibernate.action.EntityIdentityInsertAction.execute(EntityIdentityInsertAction.java:71)
    at org.hibernate.engine.ActionQueue.execute(ActionQueue.java:268)
    at org.hibernate.event.def.AbstractSaveEventListener.performSaveOrReplicate(AbstractSaveEventListener.java:321)
    at org.hibernate.event.def.AbstractSaveEventListener.performSave(AbstractSaveEventListener.java:204)
    at org.hibernate.event.def.AbstractSaveEventListener.saveWithGeneratedId(AbstractSaveEventListener.java:130)
    at org.hibernate.event.def.DefaultSaveOrUpdateEventListener.saveWithGeneratedOrRequestedId(DefaultSaveOrUpdateEventListener.java:210)
    at org.hibernate.event.def.DefaultSaveEventListener.saveWithGeneratedOrRequestedId(DefaultSaveEventListener.java:56)
    at org.hibernate.event.def.DefaultSaveOrUpdateEventListener.entityIsTransient(DefaultSaveOrUpdateEventListener.java:195)
    at org.hibernate.event.def.DefaultSaveEventListener.performSaveOrUpdate(DefaultSaveEventListener.java:50)
    at org.hibernate.event.def.DefaultSaveOrUpdateEventListener.onSaveOrUpdate(DefaultSaveOrUpdateEventListener.java:93)
    at org.hibernate.impl.SessionImpl.fireSave(SessionImpl.java:705)
    at org.hibernate.impl.SessionImpl.save(SessionImpl.java:693)
    at org.hibernate.impl.SessionImpl.save(SessionImpl.java:689)
    at sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)
    at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)
    at java.lang.reflect.Method.invoke(Method.java:597)
    at org.hibernate.context.ThreadLocalSessionContext$TransactionProtectionWrapper.invoke(ThreadLocalSessionContext.java:344)
    at $Proxy19.save(Unknown Source)
    at com.example.myproject.MyEntityService.save(MyEntityService.java:59) <-- relevant call (see notes below)
    at com.example.myproject.MyServlet.doPost(MyServlet.java:164)
    ... 32 more
Caused by: java.sql.SQLException: Violation of unique constraint MY_ENTITY_UK_1: duplicate value(s) for column(s) MY_COLUMN in statement [...]
    at org.hsqldb.jdbc.Util.throwError(Unknown Source)
    at org.hsqldb.jdbc.jdbcPreparedStatement.executeUpdate(Unknown Source)
    at com.mchange.v2.c3p0.impl.NewProxyPreparedStatement.executeUpdate(NewProxyPreparedStatement.java:105)
    at org.hibernate.id.insert.AbstractSelectingDelegate.performInsert(AbstractSelectingDelegate.java:57)
    ... 54 more" onClose={() => {}} />
      </Toast.Container>
      <Toast.Container placement="bottom-start">
        <Toast.Content message="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. " />
      </Toast.Container>
    </div>
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      modes
    }
  },
  render: () => <div className={sprout.classNames("flex", "border-box", "flex-col", "gap-l", "w-fit")}>
      <Toast.Container placement="top">
        <Toast.Content message="You will find it here" />
        <Toast.Content message="You will find it here" title="Document created" />
        <Toast.Content message="You will find it here" onClose={() => {}} title="Document created" />
        <Toast.Content title="Document created" message="You will find it here" onClose={() => {}} action={{
        label: "Open",
        onClick: () => {}
      }} />

        <Toast.Content severity="info" title="Document created" message="You will find it here" onClose={() => {}} action={{
        label: "Undo",
        onClick: () => {}
      }} />
      </Toast.Container>
    </div>
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      modes: {
        "1200px": {
          viewport: "l" // 1280
        }
      }
    }
  },
  render: () => <div className={sprout.classNames("flex", "border-box", "flex-col", "gap-l", "w-fit")}>
      <Toast.Container placement="top-start">
        <Toast.Content message="Copied to clipboard" />
        <Toast.Content message="Copied to clipboard" onClose={() => {}} />
        <Toast.Content message="You will find it in your drafts folder" onClose={() => {}} title="Document created " />
        <Toast.Content message="You will find it in your drafts folder and this long message should wrap and not overflow the container. It can only be three rows before it ellipsis. Let's make sure it does not overflow the container and that it wraps correctly." onClose={() => {}} title="Document created with a really long title that should ellipsis" action={{
        label: "Open sesame... please?",
        onClick: () => {}
      }} />
        <Toast.Content message="User permissions removed" onClose={() => {}} action={{
        label: "Undo",
        onClick: () => {}
      }} />
      </Toast.Container>
      <Toast.Container placement="top">
        <Toast.Content severity="info" message="Copied to clipboard" />
        <Toast.Content severity="info" message="Copied to clipboard" onClose={() => {}} />
        <Toast.Content severity="info" message="You will find it in your drafts folder" onClose={() => {}} title="Document created" />
        <Toast.Content severity="info" message="You will find it in your drafts folder" onClose={() => {}} title="Document created" action={{
        label: "Open",
        onClick: () => {}
      }} />
        <Toast.Content severity="info" message="User permissions removed" onClose={() => {}} action={{
        label: "Undo",
        onClick: () => {}
      }} />
      </Toast.Container>
      <Toast.Container placement="top-end">
        <Toast.Content severity="success" message="Copied to clipboard" />
        <Toast.Content severity="success" message="Copied to clipboard" onClose={() => {}} />
        <Toast.Content severity="success" message="You will find it in your drafts folder" onClose={() => {}} title="Document created" />
        <Toast.Content severity="success" message="You will find it in your drafts folder" onClose={() => {}} title="Document created" action={{
        label: "Open",
        onClick: () => {}
      }} />
        <Toast.Content severity="success" message="User permissions removed" onClose={() => {}} action={{
        label: "Undo",
        onClick: () => {}
      }} />
      </Toast.Container>
      <Toast.Container placement="bottom">
        <Toast.Content severity="warning" message={<div>Copied to clipboard</div>} />
        <Toast.Content severity="warning" message={<div>Copied to clipboard</div>} onClose={() => {}} />
        <Toast.Content severity="warning" message={<div>You will find it in your drafts folder</div>} onClose={() => {}} title="Document created" />
        <Toast.Content severity="warning" message={<div>You will find it in your drafts folder</div>} onClose={() => {}} title="Document created" action={{
        label: "Open",
        onClick: () => {}
      }} />
        <Toast.Content severity="warning" message={<div>User permissions removed</div>} onClose={() => {}} action={{
        label: "Undo",
        onClick: () => {}
      }} />
      </Toast.Container>
      <Toast.Container placement="bottom-end">
        <Toast.Content severity="error" message={<div>Copied to clipboard</div>} />
        <Toast.Content severity="error" message={<div>Copied to clipboard</div>} onClose={() => {}} />
        <Toast.Content severity="error" message={<div>You will find it in your drafts folder</div>} onClose={() => {}} title="Document created" />
        <Toast.Content severity="error" message={<div>You will find it in your drafts folder</div>} onClose={() => {}} title="Document created" action={{
        label: "Open",
        onClick: () => {}
      }} />
        <Toast.Content severity="error" message={<div>User permissions removed</div>} onClose={() => {}} action={{
        label: "Undo",
        onClick: () => {}
      }} />
      </Toast.Container>
      <Toast.Container placement="bottom-start">
        <Toast.Content message={<div>Lorem ipsum dolor sit amet. Lor </div>} onClose={() => {}} action={{
        label: "Dismiss"
      }} />
        <Toast.Content message={<div>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. </div>} onClose={() => {}} />
        <Toast.Content message={<div className={classNames("flex", "flex-col")}>
              <ul className={classNames("pl-xl", "m-0")}>
                <li>Do not respect the guideline so trigger a11y issue.</li>
                <li>In this toast container we have a list with two items.</li>
                <li>When the message is higher than 3 rows, an overflow will occcur.</li>
              </ul>

              <p>
                Here&apos;s a{" "}
                <Link font="body-xs" href="#/foo">
                  link
                </Link>{" "}
                that goes nowhere
              </p>
            </div>} onClose={() => {}} action={{
        label: "Dismiss"
      }} />
      </Toast.Container>
    </div>
}`,...s.parameters?.docs?.source}}};const S=["Playground","ProblematicContent","Responsive","VisualTest"],L=Object.freeze(Object.defineProperty({__proto__:null,Playground:a,ProblematicContent:o,Responsive:r,VisualTest:s,__namedExportsOrder:S,default:x},Symbol.toStringTag,{value:"Module"}));export{a as P,L as S};
