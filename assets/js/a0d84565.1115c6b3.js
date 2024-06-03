"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2874],{83991:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var l=s(74848),t=s(28453);const r={},i="kvm\u865a\u62df\u673a\u5f00\u673a\u81ea\u542f",c={id:"linux/kvm/\u77e5\u8bc6\u70b9/kvm\u865a\u62df\u673a\u5f00\u673a\u81ea\u542f",title:"kvm\u865a\u62df\u673a\u5f00\u673a\u81ea\u542f",description:"\u4e3a\u4e86\u9632\u6b62\u5bbf\u4e3b\u673a\u56e0\u67d0\u4e9b\u539f\u56e0\u91cd\u542f\u540e\u800c\u5bfc\u81f4kvm\u865a\u62df\u673a\u4e0d\u53ef\u7528\uff0c\u6211\u4eec\u9700\u8981\u5bf9kvm\u865a\u62df\u673a\u8bbe\u7f6e\u5f00\u673a\u81ea\u542f",source:"@site/docs/linux/kvm/\u77e5\u8bc6\u70b9/kvm\u865a\u62df\u673a\u5f00\u673a\u81ea\u542f.md",sourceDirName:"linux/kvm/\u77e5\u8bc6\u70b9",slug:"/linux/kvm/\u77e5\u8bc6\u70b9/kvm\u865a\u62df\u673a\u5f00\u673a\u81ea\u542f",permalink:"/docs/linux/kvm/\u77e5\u8bc6\u70b9/kvm\u865a\u62df\u673a\u5f00\u673a\u81ea\u542f",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"kvm\u865a\u62df\u673aconsole\u767b\u5f55",permalink:"/docs/linux/kvm/\u77e5\u8bc6\u70b9/kvm\u865a\u62df\u673aconsole\u767b\u5f55"},next:{title:"kvm\u865a\u62df\u673a\u6269\u5bb9\u786c\u76d8",permalink:"/docs/linux/kvm/\u77e5\u8bc6\u70b9/kvm\u865a\u62df\u673a\u6269\u5bb9\u786c\u76d8"}},d={},a=[{value:"\u8bbe\u7f6e\u865a\u62df\u673a\u5f00\u673a\u81ea\u542f",id:"\u8bbe\u7f6e\u865a\u62df\u673a\u5f00\u673a\u81ea\u542f",level:2},{value:"kvm\u865a\u62df\u673a\u5f00\u673a\u81ea\u542f\u539f\u7406",id:"kvm\u865a\u62df\u673a\u5f00\u673a\u81ea\u542f\u539f\u7406",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"kvm\u865a\u62df\u673a\u5f00\u673a\u81ea\u542f",children:"kvm\u865a\u62df\u673a\u5f00\u673a\u81ea\u542f"}),"\n",(0,l.jsx)(n.p,{children:"\u4e3a\u4e86\u9632\u6b62\u5bbf\u4e3b\u673a\u56e0\u67d0\u4e9b\u539f\u56e0\u91cd\u542f\u540e\u800c\u5bfc\u81f4kvm\u865a\u62df\u673a\u4e0d\u53ef\u7528\uff0c\u6211\u4eec\u9700\u8981\u5bf9kvm\u865a\u62df\u673a\u8bbe\u7f6e\u5f00\u673a\u81ea\u542f"}),"\n",(0,l.jsx)(n.h2,{id:"\u8bbe\u7f6e\u865a\u62df\u673a\u5f00\u673a\u81ea\u542f",children:"\u8bbe\u7f6e\u865a\u62df\u673a\u5f00\u673a\u81ea\u542f"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u8bbe\u7f6e\u5f00\u673a\u81ea\u542f"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"virsh autostart \u865a\u62df\u673a\u540d\u79f0"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"virsh autostart test\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u67e5\u770b\u865a\u62df\u673a\u72b6\u6001\uff0c\u6b64\u65f6\u4e3a\u5173\u95ed\u72b6\u6001"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ virsh list --all\n Id    Name                           State\n----------------------------------------------------\n -     test                           shut off\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u91cd\u542flibvirtd\u670d\u52a1"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"systemctl restart libvirtd\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["\u91cd\u542f ",(0,l.jsx)(n.code,{children:"libvirtd"})," \u670d\u52a1\u540e\u67e5\u770b\u865a\u62df\u673a\u72b6\u6001\uff0c\u5df2\u7ecf\u542f\u52a8"]})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ virsh list --all\n Id    Name                           State\n----------------------------------------------------\n 1     test                           running\n"})}),"\n",(0,l.jsx)(n.h2,{id:"kvm\u865a\u62df\u673a\u5f00\u673a\u81ea\u542f\u539f\u7406",children:"kvm\u865a\u62df\u673a\u5f00\u673a\u81ea\u542f\u539f\u7406"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"/etc/libvirt/qemu"})," \u591a\u4e86\u4e00\u4e2a  ",(0,l.jsx)(n.code,{children:"autostart"}),"  \u76ee\u5f55\uff0c\u5e76\u4e14\u4f1a\u6709\u4e00\u4e2a\u865a\u62df\u673a\u540d\u79f0\u7684\u8f6f\u8fde\u63a5\u5b58\u5728"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ ll /etc/libvirt/qemu/autostart\ntotal 0\nlrwxrwxrwx 1 root root 26 Feb 27 17:19 test.xml -> /etc/libvirt/qemu/test.xml\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5220\u9664 ",(0,l.jsx)(n.code,{children:"/etc/libvirt/qemu/autostart"})," \u76ee\u5f55"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"rm -rf /etc/libvirt/qemu/autostart\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5173\u95ed\u865a\u62df\u673a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"virsh shutdown test\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6b64\u65f6\u865a\u62df\u673a\u4e3a\u5173\u95ed\u72b6\u6001"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ virsh list --all\n Id    Name                           State\n----------------------------------------------------\n -     test                           shut off\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u91cd\u542f ",(0,l.jsx)(n.code,{children:"libvirtd"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"systemctl restart libvirtd\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u518d\u6b21\u67e5\u770b\u865a\u62df\u673a\u72b6\u6001\uff0c\u5f00\u673a\u81ea\u542f\u5931\u8d25"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ virsh list --all\n Id    Name                           State\n----------------------------------------------------\n -     test                           shut off\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u521b\u5efa ",(0,l.jsx)(n.code,{children:"autostart"})," \u76ee\u5f55\u5e76\u4fee\u6539\u6743\u9650\u4e3a700"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"mkdir /etc/libvirt/qemu/autostart && chmod 700 /etc/libvirt/qemu/autostart\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u521b\u5efa\u8f6f\u8fde\u63a5\uff0c\u60f3\u8981\u8ba9\u54ea\u4e9b\u865a\u62df\u673a\u5f00\u673a\u542f\u52a8\u5c31\u505a\u8f6f\u8fde\u63a5\u5373\u53ef"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"ln -s /etc/libvirt/qemu/test.xml /etc/libvirt/qemu/autostart/\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u91cd\u542f ",(0,l.jsx)(n.code,{children:"libvirtd"})," \uff0c\u9a8c\u8bc1\u5f00\u673a\u81ea\u542f"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"systemctl restart libvirtd\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u518d\u6b21\u67e5\u770b\u865a\u62df\u673a\u72b6\u6001\uff0c\u5df2\u7ecf\u5f00\u673a\u81ea\u542f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ virsh list --all\n Id    Name                           State\n----------------------------------------------------\n 1     test                           running\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var l=s(96540);const t={},r=l.createContext(t);function i(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);