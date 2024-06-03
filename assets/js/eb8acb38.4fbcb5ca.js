"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5485],{47222:(n,s,l)=>{l.r(s),l.d(s,{assets:()=>h,contentTitle:()=>d,default:()=>j,frontMatter:()=>r,metadata:()=>c,toc:()=>t});var i=l(74848),e=l(28453);const r={},d="vim\u547d\u4ee4",c={id:"linux/linux\u547d\u4ee4/vim\u547d\u4ee4",title:"vim\u547d\u4ee4",description:"[toc]",source:"@site/docs/linux/linux\u547d\u4ee4/vim\u547d\u4ee4.md",sourceDirName:"linux/linux\u547d\u4ee4",slug:"/linux/linux\u547d\u4ee4/vim\u547d\u4ee4",permalink:"/docs/linux/linux\u547d\u4ee4/vim\u547d\u4ee4",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sed\u547d\u4ee4",permalink:"/docs/linux/linux\u547d\u4ee4/sed\u547d\u4ee4"},next:{title:"vim\u8fdb\u9636",permalink:"/docs/linux/linux\u547d\u4ee4/vim\u8fdb\u9636"}},h={},t=[{value:"1.vim\u7f16\u8f91\u5668",id:"1vim\u7f16\u8f91\u5668",level:2},{value:"2.vim\u6a21\u5f0f\u53ca\u6a21\u5f0f\u8f6c\u6362",id:"2vim\u6a21\u5f0f\u53ca\u6a21\u5f0f\u8f6c\u6362",level:2},{value:"3.vim\u6253\u5f00\u6587\u4ef6\u65b9\u5f0f",id:"3vim\u6253\u5f00\u6587\u4ef6\u65b9\u5f0f",level:2},{value:"4.vim\u5173\u95ed\u6587\u4ef6\u65b9\u5f0f",id:"4vim\u5173\u95ed\u6587\u4ef6\u65b9\u5f0f",level:2},{value:"4.1 \u672b\u884c\u6a21\u5f0f\u5173\u95ed\u6587\u4ef6",id:"41-\u672b\u884c\u6a21\u5f0f\u5173\u95ed\u6587\u4ef6",level:3},{value:"4.2 \u7f16\u8f91\u6a21\u5f0f\u4e0b\u9000\u51fa",id:"42-\u7f16\u8f91\u6a21\u5f0f\u4e0b\u9000\u51fa",level:3},{value:"5.\u79fb\u52a8\u5149\u6807",id:"5\u79fb\u52a8\u5149\u6807",level:2},{value:"5.1 \u9010\u5b57\u7b26\u79fb\u52a8(\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e0a\u4e0b\u5de6\u53f3\u7bad\u5934)",id:"51-\u9010\u5b57\u7b26\u79fb\u52a8\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e0a\u4e0b\u5de6\u53f3\u7bad\u5934",level:3},{value:"5.2 \u4ee5\u5355\u8bcd\u4e3a\u5355\u4f4d\u79fb\u52a8",id:"52-\u4ee5\u5355\u8bcd\u4e3a\u5355\u4f4d\u79fb\u52a8",level:3},{value:"5.3 \u884c\u5185\u8df3\u8f6c",id:"53-\u884c\u5185\u8df3\u8f6c",level:3},{value:"5.4 \u884c\u95f4\u8df3\u8f6c",id:"54-\u884c\u95f4\u8df3\u8f6c",level:3},{value:"5.4.1 \u7f16\u8f91\u6a21\u5f0f\u8df3\u8f6c",id:"541-\u7f16\u8f91\u6a21\u5f0f\u8df3\u8f6c",level:4},{value:"5.4.2 \u672b\u884c\u6a21\u5f0f\u8df3\u8f6c",id:"542-\u672b\u884c\u6a21\u5f0f\u8df3\u8f6c",level:4},{value:"6.\u7ffb\u5c4f",id:"6\u7ffb\u5c4f",level:2},{value:"7.\u5220\u9664\td",id:"7\u5220\u9664d",level:2},{value:"8.\u590d\u5236\tyy",id:"8\u590d\u5236yy",level:2},{value:"9.\u7c98\u8d34\tp",id:"9\u7c98\u8d34p",level:2},{value:"10.\u4fee\u6539\tc",id:"10\u4fee\u6539c",level:2},{value:"11.\u66ff\u6362\tr",id:"11\u66ff\u6362r",level:2},{value:"12.\u64a4\u9500\tu",id:"12\u64a4\u9500u",level:2},{value:"13.\u91cd\u590d\u524d\u4e00\u6b21\u64cd\u4f5c",id:"13\u91cd\u590d\u524d\u4e00\u6b21\u64cd\u4f5c",level:2},{value:"14.\u53ef\u89c6\u5316\u64cd\u4f5c",id:"14\u53ef\u89c6\u5316\u64cd\u4f5c",level:2},{value:"15.\u67e5\u627e(\u672b\u884c\u6a21\u5f0f)",id:"15\u67e5\u627e\u672b\u884c\u6a21\u5f0f",level:2},{value:"16.\u67e5\u627e\u5e76\u66ff\u6362(\u672b\u884c\u6a21\u5f0f)",id:"16\u67e5\u627e\u5e76\u66ff\u6362\u672b\u884c\u6a21\u5f0f",level:2},{value:"17.vim\u7f16\u8f91\u591a\u4e2a\u6587\u4ef6",id:"17vim\u7f16\u8f91\u591a\u4e2a\u6587\u4ef6",level:2},{value:"18.\u9ad8\u7ea7\u8bdd\u9898",id:"18\u9ad8\u7ea7\u8bdd\u9898",level:2},{value:"18.1 \u663e\u793a\u6216\u53d6\u6d88\u884c\u53f7",id:"181-\u663e\u793a\u6216\u53d6\u6d88\u884c\u53f7",level:3},{value:"18.2 \u67e5\u627e\u5230\u7684\u6587\u672c\u9ad8\u4eae\u663e\u793a\u6216\u53d6\u6d88\u9ad8\u4eae\u663e\u793a",id:"182-\u67e5\u627e\u5230\u7684\u6587\u672c\u9ad8\u4eae\u663e\u793a\u6216\u53d6\u6d88\u9ad8\u4eae\u663e\u793a",level:3},{value:"19.vim\u914d\u7f6e\u6587\u4ef6",id:"19vim\u914d\u7f6e\u6587\u4ef6",level:2}];function x(n){const s={blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,e.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"[toc]"}),"\n",(0,i.jsx)(s.h1,{id:"vim\u547d\u4ee4",children:"vim\u547d\u4ee4"}),"\n",(0,i.jsx)(s.h2,{id:"1vim\u7f16\u8f91\u5668",children:"1.vim\u7f16\u8f91\u5668"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"vi\tVisual Interface\t\u53ef\u89c6\u5316\u754c\u9762"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"vim\tvi\u589e\u5f3a\u7248"})}),"\n",(0,i.jsx)(s.h2,{id:"2vim\u6a21\u5f0f\u53ca\u6a21\u5f0f\u8f6c\u6362",children:"2.vim\u6a21\u5f0f\u53ca\u6a21\u5f0f\u8f6c\u6362"}),"\n",(0,i.jsxs)(s.p,{children:["vim",(0,i.jsx)(s.strong,{children:"\u6a21\u5f0f"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u547d\u4ee4\u6a21\u5f0f\uff0c\u521a\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\u5c31\u662f\u547d\u4ee4\u6a21\u5f0f"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u7f16\u8f91\u6a21\u5f0f\uff0c\u53ef\u4ee5\u7f16\u8f91\u5185\u5bb9"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u672b\u884c\u6a21\u5f0f\uff0c\u53ef\u8fdb\u884c\u641c\u7d22\u3001\u66ff\u6362\u3001\u5207\u6362\u6587\u4ef6\u7b49\u64cd\u4f5c"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"vim\u6a21\u5f0f\u8f6c\u6362"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u547d\u4ee4\u6a21\u5f0f--\x3e\u7f16\u8f91\u6a21\u5f0f"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"i:\t\u5728\u5f53\u524d\u5149\u6807\u6240\u5728\u884c\u7684\u5b57\u7b26\u524d\u9762\uff0c\u8f6c\u6362\u4e3a\u7f16\u8f91\u6a21\u5f0f"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"I:\t\u5728\u5f53\u524d\u5149\u6807\u6240\u5728\u884c\u7684\u884c\u9996\uff0c\u8f6c\u6362\u4e3a\u7f16\u8f91\u6a21\u5f0f"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"a:\t\u5728\u5f53\u524d\u5149\u6807\u6240\u5728\u884c\u7684\u5b57\u7b26\u540e\u9762\uff0c\u8f6c\u6362\u4e3a\u7f16\u8f91\u6a21\u5f0f"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"A:\t\u5728\u5f53\u524d\u5149\u6807\u6240\u5728\u884c\u7684\u884c\u5c3e\uff0c\u8f6c\u6362\u4e3a\u7f16\u8f91\u6a21\u5f0f"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"o:\t\u5728\u5f53\u524d\u5149\u6807\u6240\u5728\u884c\u7684\u4e0b\u65b9\uff0c\u65b0\u5efa\u4e00\u884c"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"O:\t\u5728\u5f53\u524d\u5149\u6807\u6240\u5728\u884c\u7684\u4e0a\u65b9\uff0c\u65b0\u5efa\u4e00\u884c"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u7f16\u8f91\u6a21\u5f0f--\x3e\u547d\u4ee4\u6a21\u5f0f"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"ESC\u952e"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u7f16\u8f91\u6a21\u5f0f--\x3e\u672b\u884c\u6a21\u5f0f"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u5148esc\t\u7136\u540e\uff1a"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\uff1a"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\uff1f"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"/"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-10-15%2021.13.51.png",alt:"iShot2020-10-15 21.13.51"})}),"\n",(0,i.jsx)(s.h2,{id:"3vim\u6253\u5f00\u6587\u4ef6\u65b9\u5f0f",children:"3.vim\u6253\u5f00\u6587\u4ef6\u65b9\u5f0f"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"vim +#\t\t\u6253\u5f00\u6587\u4ef6\uff0c\u5e76\u5b9a\u4f4d\u4e8e\u7b2c#\u884c"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"vim +\t\t\u6253\u5f00\u6587\u4ef6\uff0c\u5b9a\u4f4d\u81f3\u6700\u540e\u4e00\u884c"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"vim + /\u6b63\u5219\u8868\u8fbe\u5f0f\t\u6253\u5f00\u6587\u4ef6\uff0c\u5b9a\u4f4d\u81f3\u7b2c\u4e00\u6b21\u88ab\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u5230\u7684\u884c\u7684\u884c\u9996"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"4vim\u5173\u95ed\u6587\u4ef6\u65b9\u5f0f",children:"4.vim\u5173\u95ed\u6587\u4ef6\u65b9\u5f0f"}),"\n",(0,i.jsx)(s.h3,{id:"41-\u672b\u884c\u6a21\u5f0f\u5173\u95ed\u6587\u4ef6",children:"4.1 \u672b\u884c\u6a21\u5f0f\u5173\u95ed\u6587\u4ef6"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsxs)(s.strong,{children:[":q","\t\t\u9000\u51fa"]})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsxs)(s.strong,{children:[":wq","\t\t\u9000\u51fa\u5e76\u4fdd\u5b58"]})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsxs)(s.strong,{children:[":q","!\t\t\u4e0d\u4fdd\u5b58\u9000\u51fa"]})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsxs)(s.strong,{children:[":w","\t\t\u4fdd\u5b58"]})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsxs)(s.strong,{children:[":wq","!\t\t\u5f3a\u884c\u4fdd\u5b58\u9000\u51fa"]})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"42-\u7f16\u8f91\u6a21\u5f0f\u4e0b\u9000\u51fa",children:"4.2 \u7f16\u8f91\u6a21\u5f0f\u4e0b\u9000\u51fa"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"ZZ\t\t\u4fdd\u5b58\u5e76\u9000\u51fa"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"ZQ\t\t\u4e0d\u4fdd\u5b58\u9000\u51fa"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"5\u79fb\u52a8\u5149\u6807",children:"5.\u79fb\u52a8\u5149\u6807"}),"\n",(0,i.jsx)(s.h3,{id:"51-\u9010\u5b57\u7b26\u79fb\u52a8\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e0a\u4e0b\u5de6\u53f3\u7bad\u5934",children:"5.1 \u9010\u5b57\u7b26\u79fb\u52a8(\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e0a\u4e0b\u5de6\u53f3\u7bad\u5934)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"h\t   \u5411\u5de6"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"j\t\t\u5411\u4e0b"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"k\t   \u5411\u4e0a"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"l\t\t\u5411\u53f3"})}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u4f8b\uff1a5l\t\u5411\u53f3\u79fb\u52a85\u4e2a\u5b57\u7b26"})}),"\n",(0,i.jsx)(s.h3,{id:"52-\u4ee5\u5355\u8bcd\u4e3a\u5355\u4f4d\u79fb\u52a8",children:"5.2 \u4ee5\u5355\u8bcd\u4e3a\u5355\u4f4d\u79fb\u52a8"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"w\t\t\u79fb\u81f3\u4e0b\u4e00\u4e2a\u8bcd\u7684\u8bcd\u9996"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"e\t\t\u8df3\u81f3\u5f53\u524d\u6216\u4e0b\u4e00\u4e2a\u5355\u8bcd\u7684\u8bcd\u5c3e\t\tend"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"b\t\t\u8df3\u81f3\u5f53\u524d\u6216\u524d\u4e00\u4e2a\u5355\u8bcd\u7684\u8bcd\u9996\t\tback"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"53-\u884c\u5185\u8df3\u8f6c",children:"5.3 \u884c\u5185\u8df3\u8f6c"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"0\t\t\u7edd\u5bf9\u884c\u9996"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"^\t\t\u884c\u9996\u7684\u7b2c\u4e00\u4e2a\u975e\u7a7a\u5b57\u7b26"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"$\t\t\u7edd\u5bf9\u884c\u5c3e"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"54-\u884c\u95f4\u8df3\u8f6c",children:"5.4 \u884c\u95f4\u8df3\u8f6c"}),"\n",(0,i.jsx)(s.h4,{id:"541-\u7f16\u8f91\u6a21\u5f0f\u8df3\u8f6c",children:"5.4.1 \u7f16\u8f91\u6a21\u5f0f\u8df3\u8f6c"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"nG\u3001ngg\t\t\u8df3\u8f6c\u81f3n\u884c"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"G\t\t\t\u6700\u540e\u4e00\u884c"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"gg\t\t\t\u7b2c\u4e00\u884c\u7b2c\u4e00\u4e2a\u5b57\u7b26"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"542-\u672b\u884c\u6a21\u5f0f\u8df3\u8f6c",children:"5.4.2 \u672b\u884c\u6a21\u5f0f\u8df3\u8f6c"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsxs)(s.strong,{children:[":n","\t\t\u8df3\u8f6c\u81f3n\u884c"]})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:":$\t\t\u8df3\u8f6c\u81f3\u6700\u540e\u4e00\u884c"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"6\u7ffb\u5c4f",children:"6.\u7ffb\u5c4f"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"Ctrl+f\t\u5411\u4e0b\u7ffb\u4e00\u5c4f"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"Ctrl+b\t\u5411\u4e0a\u7ffb\u4e00\u5c4f"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"Ctrl+d\t\u5411\u4e0b\u7ffb\u534a\u5c4f"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"Ctrl+u\t\u5411\u4e0a\u7ffb\u534a\u5c4f"})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"7\u5220\u9664d",children:"7.\u5220\u9664\td"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"x\t\t      \u5220\u9664\u5f53\u524d\u5149\u6807\u6240\u5728\u5904\u7684\u5355\u4e2a\u5b57\u7b26"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"X\t\t     \u5220\u9664\u5f53\u524d\u5149\u6807\u6240\u5728\u5904\u524d\u9762\u7684\u5355\u4e2a\u5b57\u7b26"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"nx\t\t   \u5220\u9664\u5149\u6807\u6240\u5728\u5904\u53ca\u5411\u540e\u7684n\u4e2a\u5b57\u7b26"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"dd\t\t  \u5220\u9664\u5f53\u524d\u5149\u6807\u6240\u5728\u884c"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"ndd\t\t\u5220\u9664\u5305\u62ec\u5f53\u524d\u5149\u6807\u6240\u5728\u884c\u7684n\u884c"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"dw\t\t  \u5220\u9664\u5149\u6807\u6240\u5728\u5904\u5230\u4e0b\u4e00\u4e2a\u8bcd\u7684\u8bcd\u9996"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"de\t\t   \u5220\u9664\u5149\u6807\u6240\u5728\u5904\u5230\u5f53\u524d\u8bcd\u7684\u8bcd\u5c3e"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"db\t\t   \u5220\u9664\u5149\u6807\u6240\u5728\u5904\u5230\u4e0a\u4e00\u4e2a\u5355\u8bcd\u7684\u8bcd\u9996"})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"8\u590d\u5236yy",children:"8.\u590d\u5236\tyy"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"yy\t\t\u590d\u5236\u5f53\u524d\u5149\u6807\u6240\u5728\u884c"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"nyy\t\t\u590d\u5236\u5f53\u524d\u5149\u6807\u6240\u5728\u884c\u53ca\u540en\u884c"})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"9\u7c98\u8d34p",children:"9.\u7c98\u8d34\tp"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"p\t\t\u7c98\u8d34\u81f3\u5149\u6807\u6240\u5728\u884c\u7684\u4e0b\u4e00\u884c"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"P\t\t\u7c98\u8d34\u81f3\u5149\u6807\u6240\u5728\u884c\u7684\u4e0a\u4e00\u884c"})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"10\u4fee\u6539c",children:"10.\u4fee\u6539\tc"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"cc\t\t\u5220\u9664\u5149\u6807\u6240\u5728\u884c\u5e76\u8fdb\u5165\u7f16\u8f91\u6a21\u5f0f"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"C\t\t\u5220\u9664\u5149\u6807\u6240\u5728\u5904\u5230\u672c\u884c\u7ed3\u5c3e\u5e76\u8fdb\u5165\u7f16\u8f91\u6a21\u5f0f"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"11\u66ff\u6362r",children:"11.\u66ff\u6362\tr"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"r\t\t\u7f16\u8f91\u6a21\u5f0f\u76f4\u63a5\u6309r\u66ff\u6362\uff0c\u4e00\u6b21\u53ea\u80fd\u66ff\u6362\u4e00\u4e2a"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"R\t\t\u66ff\u6362\u6a21\u5f0f\uff0c\u53ef\u4ee5\u66ff\u6362\u591a\u4e2a"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"12\u64a4\u9500u",children:"12.\u64a4\u9500\tu"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"u\t\t\u64a4\u9500\u524d\u4e00\u6b21\u7684\u7f16\u8f91\u64cd\u4f5c\uff0c\u8fde\u7eedu\u547d\u4ee4\u53ef\u4ee5\u64a4\u9500\u6b64\u524d\u7684n\u6b21\u7f16\u8f91\u64cd\u4f5c"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"nu\t\t\u76f4\u63a5\u64a4\u9500\u6700\u8fd1n\u6b21\u7f16\u8f91\u64cd\u4f5c"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Ctrl+r\t\u64a4\u9500\u64a4\u9500\u64cd\u4f5c"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"13\u91cd\u590d\u524d\u4e00\u6b21\u64cd\u4f5c",children:"13.\u91cd\u590d\u524d\u4e00\u6b21\u64cd\u4f5c"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u7f16\u8f91\u6a21\u5f0f\u6309\u201c.\u201d\u952e\uff0c\u4f1a\u91cd\u590d\u524d\u4e00\u6b21\u7684\u64cd\u4f5c\uff0c\u6bd4\u66ff\u6362\u3001\u7f16\u8f91\u3001\u5220\u9664\u7b49"})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"14\u53ef\u89c6\u5316\u64cd\u4f5c",children:"14.\u53ef\u89c6\u5316\u64cd\u4f5c"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"v\t\t\u6309\u5b57\u7b26\u9009\u53d6"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"V\t\t\u6309\u77e9\u5f62\u9009\u53d6"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"ctrl+v\t\u6279\u91cf\u64cd\u4f5c\uff0c\u5148\u9009\u4e2d\u8981\u64cd\u4f5c\u7684\u533a\u57df\uff0c\u7136\u540e\u5927\u5199I\u7f16\u8f91\uff0cesc\uff0c\u56de\u8f66\u5373\u53ef\u5b8c\u6210\u7f16\u8f91"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"15\u67e5\u627e\u672b\u884c\u6a21\u5f0f",children:"15.\u67e5\u627e(\u672b\u884c\u6a21\u5f0f)"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"/\t\t\u4ece\u4e0a\u800c\u4e0b"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\uff1f\t\t\u4ece\u4e0b\u800c\u4e0a"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"16\u67e5\u627e\u5e76\u66ff\u6362\u672b\u884c\u6a21\u5f0f",children:"16.\u67e5\u627e\u5e76\u66ff\u6362(\u672b\u884c\u6a21\u5f0f)"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"s"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"%\u8868\u793a\u5168\u6587"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"g\u8868\u793a\u5168\u90e8\u66ff\u6362"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u793a\u4f8b"})}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"1,3s/A/B"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"1,$s/A/B"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"%s/A/B"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"%s/A/B/g"})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"17vim\u7f16\u8f91\u591a\u4e2a\u6587\u4ef6",children:"17.vim\u7f16\u8f91\u591a\u4e2a\u6587\u4ef6"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"vim file1 file2 file3 ..."})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsxs)(s.strong,{children:[":next","\t    \u5207\u6362\u81f3\u4e0b\u4e00\u4e2a\u6587\u4ef6"]})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsxs)(s.strong,{children:[":prev","\t    \u5207\u6362\u81f3\u4e0a\u4e00\u4e2a\u6587\u4ef6"]})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsxs)(s.strong,{children:[":last","\t\t \u5207\u6362\u81f3\u6700\u540e\u4e00\u4e2a\u6587\u4ef6"]})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsxs)(s.strong,{children:[":first","\t\t\u5207\u6362\u81f3\u7b2c\u4e00\u4e2a\u6587\u4ef6"]})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"18\u9ad8\u7ea7\u8bdd\u9898",children:"18.\u9ad8\u7ea7\u8bdd\u9898"}),"\n",(0,i.jsx)(s.h3,{id:"181-\u663e\u793a\u6216\u53d6\u6d88\u884c\u53f7",children:"18.1 \u663e\u793a\u6216\u53d6\u6d88\u884c\u53f7"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsxs)(s.strong,{children:[":set"," nu"]})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsxs)(s.strong,{children:[":set"," nonu"]})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"182-\u67e5\u627e\u5230\u7684\u6587\u672c\u9ad8\u4eae\u663e\u793a\u6216\u53d6\u6d88\u9ad8\u4eae\u663e\u793a",children:"18.2 \u67e5\u627e\u5230\u7684\u6587\u672c\u9ad8\u4eae\u663e\u793a\u6216\u53d6\u6d88\u9ad8\u4eae\u663e\u793a"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsxs)(s.strong,{children:[":set"," hls"]})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsxs)(s.strong,{children:[":set"," nohls"]})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"19vim\u914d\u7f6e\u6587\u4ef6",children:"19.vim\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"/etc/vimrc"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"~/.vimrc"})}),"\n"]}),"\n"]})]})}function j(n={}){const{wrapper:s}={...(0,e.R)(),...n.components};return s?(0,i.jsx)(s,{...n,children:(0,i.jsx)(x,{...n})}):x(n)}},28453:(n,s,l)=>{l.d(s,{R:()=>d,x:()=>c});var i=l(96540);const e={},r=i.createContext(e);function d(n){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function c(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:d(n.components),i.createElement(r.Provider,{value:s},n.children)}}}]);