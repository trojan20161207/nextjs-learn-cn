(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[348],{5960:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quiz-component",function(){return s(42)}])},42:function(e,t,s){"use strict";s.r(t);var n=s(5893),i=s(7294),a=s(2489),l=s(9417);t.default=e=>{let{name:t,answers:s=[],correctAnswer:c}=e,[d,r]=(0,i.useState)(""),[o,u]=(0,i.useState)(""),m=e=>{r(e.target.value)};return(0,n.jsxs)("div",{className:"max-w-md mx-auto p-5 m-12 border rounded-md shadow-md",children:[(0,n.jsxs)("h2",{className:"py-2 text-2xl font-bold mb-4 flex items-center justify-center",children:[(0,n.jsx)("span",{role:"img","aria-label":"question mark",className:"mr-2",children:(0,n.jsx)(a.G,{icon:l.Fuz,className:"text-blue-500 h-7 w-7"})}),(0,n.jsx)("span",{children:"是时候做个测验了！"})]}),(0,n.jsx)("legend",{class:"text-sm font-semibold leading-6 text-gray-900",children:t}),(0,n.jsx)("div",{class:"mt-6 space-y-4",children:s.map((e,t)=>(0,n.jsxs)("div",{class:"flex items-center gap-x-3",children:[(0,n.jsx)("input",{value:e,checked:d===e,onChange:m,id:t,name:"push-notifications",type:"radio",class:"h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"}),(0,n.jsx)("label",{for:t,class:"block text-sm font-medium leading-6 text-gray-900",children:e})]},t))}),(0,n.jsx)("div",{className:"mt-4 text-right",children:(0,n.jsx)("button",{onClick:()=>{d===c?u("回答正确！\uD83C\uDF89"):u("回答错误，请再试一次。")},className:"px-3 py-1.5 bg-blue-500 text-white rounded-md",children:"检查答案"})}),o&&(0,n.jsx)("div",{className:"mt-4 text-lg font-semibold ".concat(o.includes("正确")?"text-green-500":"text-red-500"),children:o})]})}}},function(e){e.O(0,[976,603,774,888,179],function(){return e(e.s=5960)}),_N_E=e.O()}]);