(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[998],{4880:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chapter5",function(){return n(9360)}])},42:function(s,e,n){"use strict";n.r(e);var r=n(5893),l=n(7294),i=n(2489),o=n(9417);e.default=s=>{let{name:e,answers:n=[],correctAnswer:t}=s,[a,c]=(0,l.useState)(""),[h,x]=(0,l.useState)(""),d=s=>{c(s.target.value)};return(0,r.jsxs)("div",{className:"max-w-md mx-auto p-5 m-12 border rounded-md shadow-md",children:[(0,r.jsxs)("h2",{className:"py-2 text-2xl font-bold mb-4 flex items-center justify-center",children:[(0,r.jsx)("span",{role:"img","aria-label":"question mark",className:"mr-2",children:(0,r.jsx)(i.G,{icon:o.Fuz,className:"text-blue-500 h-7 w-7"})}),(0,r.jsx)("span",{children:"是时候做个测验了！"})]}),(0,r.jsx)("legend",{class:"text-sm font-semibold leading-6 text-gray-900",children:e}),(0,r.jsx)("div",{class:"mt-6 space-y-4",children:n.map((s,e)=>(0,r.jsxs)("div",{class:"flex items-center gap-x-3",children:[(0,r.jsx)("input",{value:s,checked:a===s,onChange:d,id:e,name:"push-notifications",type:"radio",class:"h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"}),(0,r.jsx)("label",{for:e,class:"block text-sm font-medium leading-6 text-gray-900",children:s})]},e))}),(0,r.jsx)("div",{className:"mt-4 text-right",children:(0,r.jsx)("button",{onClick:()=>{a===t?x("回答正确！\uD83C\uDF89"):x("回答错误，请再试一次。")},className:"px-3 py-1.5 bg-blue-500 text-white rounded-md",children:"检查答案"})}),h&&(0,r.jsx)("div",{className:"mt-4 text-lg font-semibold ".concat(h.includes("正确")?"text-green-500":"text-red-500"),children:h})]})}},979:function(s,e,n){"use strict";var r=n(5893),l=n(1163);let i=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"description",content:"Learn Next.js 中文教程"})]}),o={head:i,logo:(0,r.jsx)("span",{children:"Learn Next.js 中文教程"}),project:{link:"https://github.com/qufei1993/nextjs-learn-cn"},docsRepositoryBase:"https://github.com/qufei1993/nextjs-learn-cn",search:{placeholder:"Search"},sidebar:{toggleButton:!0,titleComponent(s){let{title:e,type:n}=s;return["Chapter 10","Chapter 11","Chapter 12","Chapter 13","Chapter 14","Chapter 15","Chapter 16"].includes(e.split("：")[0])?(0,r.jsx)("div",{style:{color:"#d8d8d8",pointerEvents:"none"},children:e}):e}},toc:{backToTop:!0,extraContent:(0,r.jsx)(()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{class:"flex flex-col items-center",children:[(0,r.jsx)("img",{src:"/coding-may.jpeg",alt:"Description",class:"mb-4 rounded-md shadow-lg"}),(0,r.jsxs)("p",{class:"nx-text-xs font-bold text-center",children:["扫码备注 “nextjs”",(0,r.jsx)("br",{}),"加入 Next.js 中文技术交流群"]})]})}),{})},feedback:{content:null},useNextSeoProps(){let{asPath:s}=(0,l.useRouter)();return"/"===s?{titleTemplate:"Learn Next.js 中文教程"}:{titleTemplate:"%s - Learn Next.js 中文教程"}},gitTimestamp:null,footer:{text:(0,r.jsx)("span",{children:(0,r.jsx)("a",{href:"https://github.com/qufei1993/nextjs-learn-cn/blob/main/LICENSE",target:"_blank",children:"MIT License - Copyright (c) 2023"})})}};e.Z=o},9360:function(s,e,n){"use strict";n.r(e),n.d(e,{__toc:function(){return c}});var r=n(5893),l=n(2673),i=n(9298),o=n(979);n(9966);var t=n(2643),a=n(42);let c=[{depth:2,value:"为什么要优化导航？",id:"为什么要优化导航"},{depth:2,value:"<Link> 组件",id:"link-组件"},{depth:2,value:"自动代码拆分和预取",id:"自动代码拆分和预取"},{depth:2,value:"模式：显示活动链接",id:"模式显示活动链接"}];function h(s){let e=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",code:"code",h2:"h2",a:"a",pre:"pre",span:"span"},(0,t.a)(),s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{children:"页面之间导航"}),"\n",(0,r.jsx)(e.p,{children:"在上一章中，您创建了 dashboard 的布局和页面。现在，让我们添加一些链接，以便用户可以在仪表板路由之间进行导航。"}),"\n",(0,r.jsx)(e.p,{children:"以下是本章中将涵盖的主题："}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["如何使用 ",(0,r.jsx)(e.code,{children:"next/link"})," 组件。"]}),"\n",(0,r.jsxs)(e.li,{children:["如何使用 ",(0,r.jsx)(e.code,{children:"usePathname()"})," 钩子显示活动链接。"]}),"\n",(0,r.jsx)(e.li,{children:"Next.js 中导航的工作原理。"}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"为什么要优化导航",children:"为什么要优化导航？"}),"\n",(0,r.jsxs)(e.p,{children:["为了在页面之间创建链接，传统上会使用 ",(0,r.jsx)(e.code,{children:"<a>"})," HTML 元素。目前，侧边栏链接使用 ",(0,r.jsx)(e.code,{children:"<a>"})," 元素，但请注意在浏览器中在主页、发票和客户页面之间导航时发生了什么。"]}),"\n",(0,r.jsx)(e.p,{children:"您看到了吗？"}),"\n",(0,r.jsx)(e.p,{children:"每次页面导航时都会出现完整的页面刷新！"}),"\n",(0,r.jsxs)(e.h2,{id:"link-组件",children:[(0,r.jsx)(e.code,{children:"<Link>"})," 组件"]}),"\n",(0,r.jsxs)(e.p,{children:["在 Next.js 中，您可以使用 ",(0,r.jsx)(e.code,{children:"<Link />"})," 组件在应用程序的页面之间进行链接。",(0,r.jsx)(e.code,{children:"<Link>"})," 允许您使用 JavaScript 进行",(0,r.jsx)(e.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#how-routing-and-navigation-works",children:"客户端导航"}),"。"]}),"\n",(0,r.jsxs)(e.p,{children:["要使用 ",(0,r.jsx)(e.code,{children:"<Link />"})," 组件，请打开 ",(0,r.jsx)(e.code,{children:"/app/ui/dashboard/nav-links.tsx"}),"，并从 ",(0,r.jsx)(e.a,{href:"https://nextjs.org/docs/app/api-reference/components/link",children:"next/link"})," 导入 ",(0,r.jsx)(e.code,{children:"Link"})," 组件。然后，将 ",(0,r.jsx)(e.code,{children:"<a>"})," 标签替换为 ",(0,r.jsx)(e.code,{children:"<Link>"}),"："]}),"\n",(0,r.jsx)(e.pre,{"data-language":"jsx","data-theme":"default",filename:"/app/ui/dashboard/nav-links.tsx",hasCopyCode:!0,children:(0,r.jsxs)(e.code,{"data-line-numbers":"","data-language":"jsx","data-theme":"default","data-line-numbers-max-digits":"2",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  UserGroupIcon"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  HomeIcon"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  DocumentDuplicateIcon"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@heroicons/react/24/outline'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(e.span,{className:"line highlighted",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Link "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'next/link'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// ..."})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"NavLinks"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <>"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      {"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"links"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".map"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"((link) "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"LinkIcon"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"link"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".icon;"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,r.jsxs)(e.span,{className:"line highlighted",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Link"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"key"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"link"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".name}"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"href"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"link"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".href}"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"className"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"'})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          >"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"LinkIcon"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"className"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"w-6"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"p"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"className"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"hidden md:block"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">{"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"link"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".name}</"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"p"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line highlighted",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          </"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Link"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        );"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      })}"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    </>"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  );"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsxs)(e.p,{children:["正如您所见，Link 组件类似于使用 ",(0,r.jsx)(e.code,{children:"<a>"})," 标签，但是您使用的不是 ",(0,r.jsx)(e.code,{children:'<a href="…">'}),"，而是 ",(0,r.jsx)(e.code,{children:'<Link href="…">'}),"。"]}),"\n",(0,r.jsx)(e.p,{children:"保存更改并检查它是否在您的 localhost 上运行。现在，您应该能够在页面之间导航，而无需看到完整的刷新。尽管应用程序的某些部分是在服务器上渲染的，但没有完整的页面刷新，使其感觉像一个 web 应用程序。这是为什么呢？"}),"\n",(0,r.jsx)(e.h2,{id:"自动代码拆分和预取",children:"自动代码拆分和预取"}),"\n",(0,r.jsxs)(e.p,{children:["为了提高导航体验，Next.js 会自动按路由段拆分您的应用程序。这与传统的 React ",(0,r.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/SPA",children:"SPA"})," 不同，传统 SPA 在初始加载时会加载应用程序的所有代码。"]}),"\n",(0,r.jsx)(e.p,{children:"按路由拆分代码意味着页面变得隔离。如果某个页面抛出错误，应用程序的其余部分仍将正常工作。"}),"\n",(0,r.jsxs)(e.p,{children:["此外，在生产环境中，每当 ",(0,r.jsx)(e.code,{children:"<Link>"})," 组件出现在浏览器的视口中时，Next.js 会自动在后台预取链接路由的代码。当用户点击链接时，目标页面的代码将在后台已经加载，这就是使页面过渡几乎瞬间完成的原因！"]}),"\n",(0,r.jsxs)(e.p,{children:["了解更多关于",(0,r.jsx)(e.a,{href:"https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#how-routing-and-navigation-works",children:"导航如何工作"}),"的信息。"]}),"\n",(0,r.jsx)(a.default,{name:"当在生产环境中浏览器的视口中出现一个 <Link> 组件时，Next.js 会执行以下哪个操作？",answers:["下载额外的 CSS","预加载图片","预取链接路由的代码","为链接的路由启用懒加载"],correctAnswer:"预取链接路由的代码"}),"\n",(0,r.jsx)(e.h2,{id:"模式显示活动链接",children:"模式：显示活动链接"}),"\n",(0,r.jsxs)(e.p,{children:["一种常见的用户界面模式是显示活动链接，以向用户指示他们当前所在的页面。为了做到这一点，您需要从 URL 中获取用户当前的路径。Next.js 提供了一个名为 ",(0,r.jsx)(e.code,{children:"usePathname()"})," 的钩子，您可以使用它来检查路径并实现此模式。"]}),"\n",(0,r.jsxs)(e.p,{children:["由于 ",(0,r.jsx)(e.a,{href:"https://nextjs.org/docs/app/api-reference/functions/use-pathname",children:"usePathname()"})," 是一个钩子，您需要将 ",(0,r.jsx)(e.code,{children:"nav-links.tsx"})," 转换为客户端组件。在文件顶部添加 React 的 ",(0,r.jsx)(e.code,{children:'"use client"'})," 指令，然后从 ",(0,r.jsx)(e.code,{children:"next/navigation"})," 导入 ",(0,r.jsx)(e.code,{children:"usePathname()"}),"："]}),"\n",(0,r.jsx)(e.pre,{"data-language":"jsx","data-theme":"default",filename:"/app/ui/dashboard/nav-links.tsx",hasCopyCode:!0,children:(0,r.jsxs)(e.code,{"data-line-numbers":"","data-language":"jsx","data-theme":"default","data-line-numbers-max-digits":"2",children:[(0,r.jsxs)(e.span,{className:"line highlighted",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'use client'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  UserGroupIcon"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  HomeIcon"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  InboxIcon"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@heroicons/react/24/outline'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Link "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'next/link'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(e.span,{className:"line highlighted",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { usePathname } "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'next/navigation'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// ..."})})]})}),"\n",(0,r.jsxs)(e.p,{children:["接下来，在你的 ",(0,r.jsx)(e.code,{children:"<NavLinks />"})," 组件内部，将路径赋值给一个名为 pathname 的变量："]}),"\n",(0,r.jsx)(e.pre,{"data-language":"jsx","data-theme":"default",filename:"/app/ui/dashboard/nav-links.tsx",hasCopyCode:!0,children:(0,r.jsxs)(e.code,{"data-language":"jsx","data-theme":"default",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"NavLinks"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line highlighted",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"pathname"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"usePathname"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// ..."})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsxs)(e.p,{children:["你可以使用在 ",(0,r.jsx)(e.a,{href:"https://nextjs.org/learn/dashboard-app/css-styling",children:"CSS 样式"}),"章节介绍的 ",(0,r.jsx)(e.code,{children:"clsx"})," 库，在链接处于活动状态时有条件地应用类名。当 ",(0,r.jsx)(e.code,{children:"link.href"})," 与 ",(0,r.jsx)(e.code,{children:"pathname"})," 匹配时，链接应该显示为蓝色文本和浅蓝色背景。"]}),"\n",(0,r.jsxs)(e.p,{children:["以下是 ",(0,r.jsx)(e.code,{children:"nav-links.tsx"})," 的最终代码："]}),"\n",(0,r.jsx)(e.pre,{"data-language":"jsx","data-theme":"default",filename:"/app/ui/dashboard/nav-links.tsx",hasCopyCode:!0,children:(0,r.jsxs)(e.code,{"data-line-numbers":"","data-language":"jsx","data-theme":"default","data-line-numbers-max-digits":"2",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'use client'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  UserGroupIcon"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  HomeIcon"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  DocumentDuplicateIcon"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@heroicons/react/24/outline'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Link "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'next/link'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { usePathname } "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'next/navigation'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(e.span,{className:"line highlighted",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" clsx "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'clsx'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// ..."})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"NavLinks"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"pathname"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"usePathname"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <>"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      {"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"links"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".map"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"((link) "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"LinkIcon"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"link"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".icon;"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Link"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"key"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"link"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".name}"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"href"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"link"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".href}"})]}),"\n",(0,r.jsxs)(e.span,{className:"line highlighted",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"className"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"clsx"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,r.jsxs)(e.span,{className:"line highlighted",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"              "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line highlighted",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"              {"})}),"\n",(0,r.jsxs)(e.span,{className:"line highlighted",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'bg-sky-100 text-blue-600'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" pathname "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"link"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".href"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line highlighted",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"              }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line highlighted",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            )}"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          >"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"LinkIcon"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"className"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"w-6"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"p"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"className"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"hidden md:block"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">{"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"link"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".name}</"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"p"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          </"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Link"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        );"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      })}"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    </>"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  );"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsx)(e.p,{children:"保存并检查你的本地主机。现在，你应该看到活动链接以蓝色突出显示。"})]})}let x={MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,t.a)(),s.components);return e?(0,r.jsx)(e,{...s,children:(0,r.jsx)(h,{...s})}):h(s)},pageOpts:{filePath:"src/pages/chapter5.mdx",route:"/chapter5",pageMap:[{kind:"Meta",data:{index:{title:"Home",theme:{breadcrumb:!1},display:"hidden"},chapter1:"Chapter 1：入门",chapter2:"Chapter 2：CSS 样式",chapter3:"Chapter 3：优化字体和图片",chapter4:"Chapter 4：创建 Layouts 和 Pages",chapter5:"Chapter 5：页面之间导航",chapter6:"Chapter 6：建立你的数据库",chapter7:"Chapter 7：获取数据",chapter8:"Chapter 8：静态和动态渲染",chapter9:"Chapter 9：流式传输",chapter10:"Chapter 10：部分预渲染（翻译中）",chapter11:"Chapter 11：添加搜索和分页（翻译中）",chapter12:"Chapter 12：Mutating 数据（翻译中）",chapter13:"Chapter 13：错误处理（翻译中）",chapter14:"Chapter 14：提高可访问性（翻译中）",chapter15:"Chapter 15：添加身份验证（翻译中）",chapter16:"Chapter 16：添加元数据（翻译中）",chapter17:"扩展篇 1：Vercel Postgres 搭配本地数据库"}},{kind:"MdxPage",name:"chapter1",route:"/chapter1"},{kind:"MdxPage",name:"chapter10",route:"/chapter10"},{kind:"MdxPage",name:"chapter11",route:"/chapter11"},{kind:"MdxPage",name:"chapter12",route:"/chapter12"},{kind:"MdxPage",name:"chapter13",route:"/chapter13"},{kind:"MdxPage",name:"chapter14",route:"/chapter14"},{kind:"MdxPage",name:"chapter15",route:"/chapter15"},{kind:"MdxPage",name:"chapter16",route:"/chapter16"},{kind:"MdxPage",name:"chapter17",route:"/chapter17"},{kind:"MdxPage",name:"chapter2",route:"/chapter2"},{kind:"MdxPage",name:"chapter3",route:"/chapter3"},{kind:"MdxPage",name:"chapter4",route:"/chapter4"},{kind:"MdxPage",name:"chapter5",route:"/chapter5"},{kind:"MdxPage",name:"chapter6",route:"/chapter6"},{kind:"MdxPage",name:"chapter7",route:"/chapter7"},{kind:"MdxPage",name:"chapter8",route:"/chapter8"},{kind:"MdxPage",name:"chapter9",route:"/chapter9"},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"页面之间导航",headings:c},pageNextRoute:"/chapter5",nextraLayout:i.ZP,themeConfig:o.Z};e.default=(0,l.j)(x)}},function(s){s.O(0,[976,53,603,774,888,179],function(){return s(s.s=4880)}),_N_E=s.O()}]);