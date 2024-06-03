"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5017],{41482:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>x,contentTitle:()=>r,default:()=>l,frontMatter:()=>b,metadata:()=>s,toc:()=>c});var a=n(74848),t=n(28453);const b={},r="zabbix3.4\u76d1\u63a7\u4e00\u53f0\u4e3b\u673a",s={id:"linux/monitor/zabbix/zabbix3.4/zabbix3.4\u76d1\u63a7\u4e00\u53f0\u4e3b\u673a",title:"zabbix3.4\u76d1\u63a7\u4e00\u53f0\u4e3b\u673a",description:"[toc]",source:"@site/docs/linux/monitor/zabbix/zabbix3.4/3.zabbix3.4\u76d1\u63a7\u4e00\u53f0\u4e3b\u673a.md",sourceDirName:"linux/monitor/zabbix/zabbix3.4",slug:"/linux/monitor/zabbix/zabbix3.4/zabbix3.4\u76d1\u63a7\u4e00\u53f0\u4e3b\u673a",permalink:"/docs/linux/monitor/zabbix/zabbix3.4/zabbix3.4\u76d1\u63a7\u4e00\u53f0\u4e3b\u673a",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6ezabbix\u57fa\u4e8eapache\u3001nginx\u7528\u6237\u8ba4\u8bc1",permalink:"/docs/linux/monitor/zabbix/zabbix3.4/\u914d\u7f6ezabbix\u57fa\u4e8eapache\u3001nginx\u7528\u6237\u8ba4\u8bc1"},next:{title:"zabbix3.4\u521b\u5efa\u81ea\u5b9a\u4e49\u89e6\u53d1\u5668",permalink:"/docs/linux/monitor/zabbix/zabbix3.4/zabbix3.4\u521b\u5efa\u81ea\u5b9a\u4e49\u89e6\u53d1\u5668"}},x={},c=[{value:"1.\u5b89\u88c5zabbix-agent",id:"1\u5b89\u88c5zabbix-agent",level:2},{value:"2.\u914d\u7f6ezabbix-agent",id:"2\u914d\u7f6ezabbix-agent",level:2},{value:"3.\u542f\u52a8zabbix-agent",id:"3\u542f\u52a8zabbix-agent",level:2},{value:"4.\u5728zabbix-server\u7aefweb\u754c\u9762\uff0c\u70b9\u51fb\u914d\u7f6e--&gt;\u4e3b\u673a--&gt;\u521b\u5efa\u4e3b\u673a",id:"4\u5728zabbix-server\u7aefweb\u754c\u9762\u70b9\u51fb\u914d\u7f6e--\u4e3b\u673a--\u521b\u5efa\u4e3b\u673a",level:2},{value:"5.\u70b9\u51fb\u914d\u7f6e--&gt;\u4e3b\u673a--&gt;\u6a21\u677f--&gt;\u94fe\u63a5\u6307\u793a\u5668",id:"5\u70b9\u51fb\u914d\u7f6e--\u4e3b\u673a--\u6a21\u677f--\u94fe\u63a5\u6307\u793a\u5668",level:2}];function o(e){const i={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.p,{children:"[toc]"}),"\n",(0,a.jsx)(i.h1,{id:"zabbix34\u76d1\u63a7\u4e00\u53f0\u4e3b\u673a",children:"zabbix3.4\u76d1\u63a7\u4e00\u53f0\u4e3b\u673a"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:"zabbix-serverIP\u5730\u5740\uff1a10.0.0.200"})}),"\n",(0,a.jsx)(i.h2,{id:"1\u5b89\u88c5zabbix-agent",children:"1.\u5b89\u88c5zabbix-agent"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-shell",children:"rpm -ivh https://mirrors4.tuna.tsinghua.edu.cn/zabbix/zabbix/3.4/rhel/7/x86_64/zabbix-agent-3.4.15-1.el7.x86_64.rpm\n"})}),"\n",(0,a.jsx)(i.h2,{id:"2\u914d\u7f6ezabbix-agent",children:"2.\u914d\u7f6ezabbix-agent"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-shell",children:"# \u6307\u5b9azabbix-server\u5730\u5740\nsed -i.bak 's/Server=127.0.0.1/Server=10.0.0.200/' /etc/zabbix/zabbix_agentd.conf\n"})}),"\n",(0,a.jsx)(i.h2,{id:"3\u542f\u52a8zabbix-agent",children:"3.\u542f\u52a8zabbix-agent"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-shell",children:"# \u542f\u52a8zabbix-agent\u5e76\u8bbe\u7f6e\u5f00\u673a\u81ea\u8d77\nsystemctl start zabbix-agent && systemctl enable zabbix-agent\n"})}),"\n",(0,a.jsx)(i.h2,{id:"4\u5728zabbix-server\u7aefweb\u754c\u9762\u70b9\u51fb\u914d\u7f6e--\u4e3b\u673a--\u521b\u5efa\u4e3b\u673a",children:"4.\u5728zabbix-server\u7aefweb\u754c\u9762\uff0c\u70b9\u51fb\u914d\u7f6e--\x3e\u4e3b\u673a--\x3e\u521b\u5efa\u4e3b\u673a"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{src:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-10-16%2009.12.27.png",alt:"iShot2020-10-16 09.12.27"})}),"\n",(0,a.jsx)(i.h2,{id:"5\u70b9\u51fb\u914d\u7f6e--\u4e3b\u673a--\u6a21\u677f--\u94fe\u63a5\u6307\u793a\u5668",children:"5.\u70b9\u51fb\u914d\u7f6e--\x3e\u4e3b\u673a--\x3e\u6a21\u677f--\x3e\u94fe\u63a5\u6307\u793a\u5668"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{src:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-10-16%2009.12.52.png",alt:"iShot2020-10-16 09.12.52"})}),"\n",(0,a.jsx)(i.p,{children:"\u6dfb\u52a0\u540e\u7684\u4e3b\u673a"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{src:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-10-16%2009.13.15.png",alt:"iShot2020-10-16 09.13.15"})})]})}function l(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>s});var a=n(96540);const t={},b=a.createContext(t);function r(e){const i=a.useContext(b);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(b.Provider,{value:i},e.children)}}}]);