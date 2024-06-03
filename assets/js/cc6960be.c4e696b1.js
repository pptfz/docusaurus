"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3871],{76625:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>x});var t=i(74848),s=i(28453);const r={},l="nginx\u52a8\u9759\u5206\u79bb",c={id:"linux/linux\u670d\u52a1/nginx/nginx\u52a8\u9759\u5206\u79bb",title:"nginx\u52a8\u9759\u5206\u79bb",description:"[toc]",source:"@site/docs/linux/linux\u670d\u52a1/nginx/13.nginx\u52a8\u9759\u5206\u79bb.md",sourceDirName:"linux/linux\u670d\u52a1/nginx",slug:"/linux/linux\u670d\u52a1/nginx/nginx\u52a8\u9759\u5206\u79bb",permalink:"/docs/linux/linux\u670d\u52a1/nginx/nginx\u52a8\u9759\u5206\u79bb",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"nginx rewrite",permalink:"/docs/linux/linux\u670d\u52a1/nginx/nginx rewrite"},next:{title:"nginx+keepalived\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861\u9ad8\u53ef\u7528",permalink:"/docs/linux/linux\u670d\u52a1/nginx/nginx+keepalived\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861\u9ad8\u53ef\u7528"}},d={},x=[{value:"1.\u52a8\u9759\u5206\u79bb\u7b80\u4ecb",id:"1\u52a8\u9759\u5206\u79bb\u7b80\u4ecb",level:2},{value:"2.\u914d\u7f6e\u8fc7\u7a0b",id:"2\u914d\u7f6e\u8fc7\u7a0b",level:2},{value:"2.1 \u8d1f\u8f7d\u5747\u8861\u914d\u7f6e",id:"21-\u8d1f\u8f7d\u5747\u8861\u914d\u7f6e",level:3},{value:"2.2 web01\u914d\u7f6e\u9759\u6001\u8d44\u6e90",id:"22-web01\u914d\u7f6e\u9759\u6001\u8d44\u6e90",level:3},{value:"2.3 tomcat\u914d\u7f6e\u52a8\u6001\u8d44\u6e90",id:"23-tomcat\u914d\u7f6e\u52a8\u6001\u8d44\u6e90",level:3},{value:"3.\u8bbf\u95ee\u6d4b\u8bd5",id:"3\u8bbf\u95ee\u6d4b\u8bd5",level:2}];function o(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"[toc]"}),"\n",(0,t.jsx)(e.h1,{id:"nginx\u52a8\u9759\u5206\u79bb",children:"nginx\u52a8\u9759\u5206\u79bb"}),"\n",(0,t.jsx)(e.h2,{id:"1\u52a8\u9759\u5206\u79bb\u7b80\u4ecb",children:"1.\u52a8\u9759\u5206\u79bb\u7b80\u4ecb"}),"\n",(0,t.jsx)(e.p,{children:"\u52a8\u9759\u5206\u79bb\uff0c\u901a\u8fc7\u4e2d\u95f4\u4ef6\u5c06\u52a8\u6001\u8bf7\u6c42\u548c\u9759\u6001\u8bf7\u6c42\u8fdb\u884c\u5206\u79bb, \u5206\u79bb\u8d44\u6e90, \u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u8bf7\u6c42\u6d88\u8017, \u51cf\u5c11\u8bf7\u6c42\u5ef6\u65f6\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u597d\u5904"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u52a8\u9759\u5206\u79bb\u540e, \u5373\u4f7f\u52a8\u6001\u670d\u52a1\u4e0d\u53ef\u7528, \u4f46\u9759\u6001\u8d44\u6e90\u4e0d\u4f1a\u53d7\u5230\u5f71\u54cd"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u5b9e\u9a8c\u73af\u5883"})}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:(0,t.jsx)(e.strong,{children:"\u89d2\u8272"})}),(0,t.jsx)(e.th,{children:(0,t.jsx)(e.strong,{children:"\u670d\u52a1"})}),(0,t.jsx)(e.th,{children:(0,t.jsx)(e.strong,{children:"IP\u5730\u5740"})}),(0,t.jsx)(e.th,{children:(0,t.jsx)(e.strong,{children:"\u4e3b\u673a\u540d"})})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"\u8d1f\u8f7d\u5747\u8861"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"Nginx Proxy"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"10.0.0.10"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"lb01"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"\u9759\u6001\u8d44\u6e90"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"Nginx Static"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"10.0.0.51"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"web01"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"\u52a8\u6001\u8d44\u6e90"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"Tomcat Server"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"10.0.0.52"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"tomcat"})})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"2\u914d\u7f6e\u8fc7\u7a0b",children:"2.\u914d\u7f6e\u8fc7\u7a0b"}),"\n",(0,t.jsx)(e.h3,{id:"21-\u8d1f\u8f7d\u5747\u8861\u914d\u7f6e",children:"2.1 \u8d1f\u8f7d\u5747\u8861\u914d\u7f6e"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u7f16\u8f91nginx\u914d\u7f6e\u6587\u4ef6"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-nginx",children:"upstream static {\n  server 10.0.0.51:80;\n}\n\nupstream tomcat {\n  server 10.0.0.52:8080;\n}\n\nserver {\n  listen 80;\n  server_name _;\n  location / {\n    root /website;\n    index index.html;\n  }\n  \n  location ~* .*\\.(png|jpg|gif)$ {\n    proxy_pass http://static;\n  }\n  \n  location ~* .*\\.jsp$ {\n    proxy_pass http://tomcat;\n  }\n}\n"})}),"\n",(0,t.jsx)(e.h3,{id:"22-web01\u914d\u7f6e\u9759\u6001\u8d44\u6e90",children:"2.2 web01\u914d\u7f6e\u9759\u6001\u8d44\u6e90"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u7f16\u8f91nginx\u914d\u7f6e\u6587\u4ef6"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-nginx",children:"server {\n  listen 80;\n  server_name _;\n\n  location ~* .*\\.(png|jpg|gif)$ {\n    root /website/images;\n  }\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u521b\u5efa\u7f51\u7ad9\u6839\u76ee\u5f55"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"#\u521b\u5efa\u7f51\u7ad9\u6839\u76ee\u5f55\nmkdir -p /website/images && cd /website/images\n\n#\u4e0b\u8f7d\u4e00\u4e2a\u56fe\u7247\nwget -O /website/images/nginx.png https://nginx.org/nginx.png\n"})}),"\n",(0,t.jsx)(e.h3,{id:"23-tomcat\u914d\u7f6e\u52a8\u6001\u8d44\u6e90",children:"2.3 tomcat\u914d\u7f6e\u52a8\u6001\u8d44\u6e90"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u7f16\u8f91jsp\u6d4b\u8bd5\u6587\u4ef6"})}),"\n",(0,t.jsx)(e.p,{children:"\u26a0\ufe0f\u8fd9\u91cc\u5df2\u7ecf\u4e8c\u8fdb\u5236\u5b89\u88c5tomcat8.5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsp",children:'cat > /usr/local/tomcat-8.5.56/webapps/ROOT/tomcat_test.jsp <<\'EOF\'\n<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>\n<HTML>\n    <HEAD>\n        <TITLE>JSP Test Page</TITLE>\n    </HEAD>\n    <BODY>\n      <%\n        Random rand = new Random();\n        out.println("<h1>Random number:</h1>");\n        out.println(rand.nextInt(99)+100);\n      %>\n    </BODY>\n</HTML>\nEOF\n'})}),"\n",(0,t.jsx)(e.h2,{id:"3\u8bbf\u95ee\u6d4b\u8bd5",children:"3.\u8bbf\u95ee\u6d4b\u8bd5"}),"\n",(0,t.jsx)(e.p,{children:"\u8bbf\u95ee\u9759\u6001\u8d44\u6e90"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-06-2310.06.48.png",alt:"iShot2020-06-2310.06.48"})}),"\n",(0,t.jsx)(e.p,{children:"\u8bbf\u95ee\u52a8\u6001\u8d44\u6e90"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-06-2310.07.33.png",alt:"iShot2020-06-2310.07.33"})})]})}function a(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>c});var t=i(96540);const s={},r=t.createContext(s);function l(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);