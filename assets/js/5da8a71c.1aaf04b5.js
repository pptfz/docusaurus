"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9875],{35649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var i=n(74848),r=n(28453);const s={},l="kvm\u5b89\u88c5",c={id:"linux/kvm/\u5b89\u88c5/kvm\u5b89\u88c5",title:"kvm\u5b89\u88c5",description:"1.\u5b89\u88c5\u8f6f\u4ef6\u5305",source:"@site/docs/linux/kvm/\u5b89\u88c5/kvm\u5b89\u88c5.md",sourceDirName:"linux/kvm/\u5b89\u88c5",slug:"/linux/kvm/\u5b89\u88c5/kvm\u5b89\u88c5",permalink:"/docs/linux/kvm/\u5b89\u88c5/kvm\u5b89\u88c5",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"git\u914d\u7f6e\u591a\u4e2a\u8fdc\u7a0b\u4ed3\u5e93",permalink:"/docs/linux/git/git\u914d\u7f6e\u591a\u4e2a\u8fdc\u7a0b\u4ed3\u5e93"},next:{title:"kvm\u865a\u62df\u673a\u57fa\u672c\u64cd\u4f5c",permalink:"/docs/linux/kvm/\u64cd\u4f5c/kvm\u865a\u62df\u673a\u57fa\u672c\u64cd\u4f5c"}},d={},a=[{value:"1.\u5b89\u88c5\u8f6f\u4ef6\u5305",id:"1\u5b89\u88c5\u8f6f\u4ef6\u5305",level:2},{value:"2.\u542f\u52a8\u670d\u52a1\u5e76\u8bbe\u7f6e\u5f00\u673a\u81ea\u542f",id:"2\u542f\u52a8\u670d\u52a1\u5e76\u8bbe\u7f6e\u5f00\u673a\u81ea\u542f",level:2},{value:"3.\u5b89\u88c5\u56fe\u5f62\u5316\u7ba1\u7406\u5de5\u5177 <code>virt-manager</code>",id:"3\u5b89\u88c5\u56fe\u5f62\u5316\u7ba1\u7406\u5de5\u5177-virt-manager",level:2}];function o(e){const t={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"kvm\u5b89\u88c5",children:"kvm\u5b89\u88c5"}),"\n",(0,i.jsx)(t.h2,{id:"1\u5b89\u88c5\u8f6f\u4ef6\u5305",children:"1.\u5b89\u88c5\u8f6f\u4ef6\u5305"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"yum -y install libvirt* virt-* qemu-kvm* \n"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"\u8f6f\u4ef6\u5305\u540d"}),(0,i.jsx)(t.th,{children:"\u4f5c\u7528"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"libvirt"}),(0,i.jsx)(t.td,{children:"\u865a\u62df\u673a\u7684\u7ba1\u7406\u8f6f\u4ef6"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"virt\u3001virt-install\u3001virt-clone"}),(0,i.jsx)(t.td,{children:"\u865a\u62df\u673a\u7684\u5b89\u88c5\u548c\u514b\u9686"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"qemu-kvm\u3001qemu-img"}),(0,i.jsx)(t.td,{children:"\u590d\u5236\u7ba1\u7406\u865a\u62df\u673a\u7684\u78c1\u76d8"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"2\u542f\u52a8\u670d\u52a1\u5e76\u8bbe\u7f6e\u5f00\u673a\u81ea\u542f",children:"2.\u542f\u52a8\u670d\u52a1\u5e76\u8bbe\u7f6e\u5f00\u673a\u81ea\u542f"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"systemctl start libvirtd && systemctl enable libvirtd\n"})}),"\n",(0,i.jsxs)(t.h2,{id:"3\u5b89\u88c5\u56fe\u5f62\u5316\u7ba1\u7406\u5de5\u5177-virt-manager",children:["3.\u5b89\u88c5\u56fe\u5f62\u5316\u7ba1\u7406\u5de5\u5177 ",(0,i.jsx)(t.code,{children:"virt-manager"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"yum -y install virt-manager\n"})}),"\n",(0,i.jsxs)(t.p,{children:["\u5b89\u88c5\u5b8c\u6210\u540e\u5728 ",(0,i.jsx)(t.code,{children:"Applications"})," -> ",(0,i.jsx)(t.code,{children:"System Tools"})," -> ",(0,i.jsx)(t.code,{children:"Virtual Machine Manager(kvm\u56fe\u5f62\u5316\u7ba1\u7406\u5de5\u5177)"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2021-11-27%2021.47.45.png",alt:"iShot2021-11-27 21.47.45"})}),"\n",(0,i.jsx)(t.p,{children:"\u6253\u5f00\u540e\u662f\u8fd9\u6837\u7684"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2021-11-27%2022.06.03.png",alt:"iShot2021-11-27 22.06.03"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>c});var i=n(96540);const r={},s=i.createContext(r);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);