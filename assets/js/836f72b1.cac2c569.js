"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2060],{26634:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var r=s(74848),i=s(28453);const l={},t="nginx https",d={id:"linux/linux\u670d\u52a1/nginx/nginx https",title:"nginx https",description:"[toc]",source:"@site/docs/linux/linux\u670d\u52a1/nginx/11.nginx https.md",sourceDirName:"linux/linux\u670d\u52a1/nginx",slug:"/linux/linux\u670d\u52a1/nginx/nginx https",permalink:"/docs/linux/linux\u670d\u52a1/nginx/nginx https",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"lnmp\u5e73\u53f0",permalink:"/docs/linux/linux\u670d\u52a1/nginx/lnmp\u5e73\u53f0"},next:{title:"nginx rewrite",permalink:"/docs/linux/linux\u670d\u52a1/nginx/nginx rewrite"}},c={},h=[{value:"1.\u68c0\u67e5\u73af\u5883\u5e76\u521b\u5efa\u5b58\u653e\u8bc1\u4e66\u76ee\u5f55",id:"1\u68c0\u67e5\u73af\u5883\u5e76\u521b\u5efa\u5b58\u653e\u8bc1\u4e66\u76ee\u5f55",level:2},{value:"1.1 openssl\u7248\u672c1.0.2\u4ee5\u4e0a",id:"11-openssl\u7248\u672c102\u4ee5\u4e0a",level:3},{value:"1.2 nginx\u5fc5\u987b\u652f\u6301<code>--with-http_ssl_module</code>\u6a21\u5757",id:"12-nginx\u5fc5\u987b\u652f\u6301--with-http_ssl_module\u6a21\u5757",level:3},{value:"1.3 \u521b\u5efa\u5b58\u653enginx\u8bc1\u4e66\u7684\u76ee\u5f55",id:"13-\u521b\u5efa\u5b58\u653enginx\u8bc1\u4e66\u7684\u76ee\u5f55",level:3},{value:"2.\u751f\u6210\u8bc1\u4e66",id:"2\u751f\u6210\u8bc1\u4e66",level:2},{value:"2.1 \u751f\u6210\u79c1\u94a5",id:"21-\u751f\u6210\u79c1\u94a5",level:3},{value:"2.2 \u751f\u6210\u81ea\u7b7e\u8bc1\u4e66",id:"22-\u751f\u6210\u81ea\u7b7e\u8bc1\u4e66",level:3},{value:"3.\u914d\u7f6enginx\u4ee5https\u65b9\u5f0f\u8bbf\u95ee",id:"3\u914d\u7f6enginx\u4ee5https\u65b9\u5f0f\u8bbf\u95ee",level:2},{value:"3.1 \u7f16\u8f91nginx\u914d\u7f6e\u6587\u4ef6",id:"31-\u7f16\u8f91nginx\u914d\u7f6e\u6587\u4ef6",level:3},{value:"3.2 \u521b\u5efa\u7f51\u7ad9\u6839\u76ee\u5f55",id:"32-\u521b\u5efa\u7f51\u7ad9\u6839\u76ee\u5f55",level:3},{value:"3.3 \u672c\u5730\u7ed1\u5b9ahosts\u6d4f\u89c8\u5668\u8bbf\u95ee",id:"33-\u672c\u5730\u7ed1\u5b9ahosts\u6d4f\u89c8\u5668\u8bbf\u95ee",level:3}];function x(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"[toc]"}),"\n",(0,r.jsx)(e.h1,{id:"nginx-https",children:"nginx https"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://www.openssl.org/",children:"openssl\u5b98\u7f51"})}),"\n",(0,r.jsx)(e.h2,{id:"1\u68c0\u67e5\u73af\u5883\u5e76\u521b\u5efa\u5b58\u653e\u8bc1\u4e66\u76ee\u5f55",children:"1.\u68c0\u67e5\u73af\u5883\u5e76\u521b\u5efa\u5b58\u653e\u8bc1\u4e66\u76ee\u5f55"}),"\n",(0,r.jsx)(e.h3,{id:"11-openssl\u7248\u672c102\u4ee5\u4e0a",children:"1.1 openssl\u7248\u672c1.0.2\u4ee5\u4e0a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"$ openssl version\nOpenSSL 1.0.2k-fips  26 Jan 2017\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"12-nginx\u5fc5\u987b\u652f\u6301--with-http_ssl_module\u6a21\u5757",children:["1.2 nginx\u5fc5\u987b\u652f\u6301",(0,r.jsx)(e.code,{children:"--with-http_ssl_module"}),"\u6a21\u5757"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"#\u5148\u628a\u8f93\u51fa\u653e\u5230\u4e00\u4e2a\u6587\u4ef6\u4e2d\uff0c\u7136\u540e\u4ece\u6587\u4ef6\u4e2d\u8fc7\u6ee4\nnginx -V &> nginx.txt\n"})}),"\n",(0,r.jsx)(e.h3,{id:"13-\u521b\u5efa\u5b58\u653enginx\u8bc1\u4e66\u7684\u76ee\u5f55",children:"1.3 \u521b\u5efa\u5b58\u653enginx\u8bc1\u4e66\u7684\u76ee\u5f55"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"mkdir /etc/nginx/ssl_key && cd /etc/nginx/ssl_key\n"})}),"\n",(0,r.jsx)(e.h2,{id:"2\u751f\u6210\u8bc1\u4e66",children:"2.\u751f\u6210\u8bc1\u4e66"}),"\n",(0,r.jsx)(e.h3,{id:"21-\u751f\u6210\u79c1\u94a5",children:"2.1 \u751f\u6210\u79c1\u94a5"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u4f7f\u7528openssl\u5145\u5f53CA\u6743\u5a01\u673a\u6784\u521b\u5efa\u79c1\u94a5(\u751f\u4ea7\u4e0d\u53ef\u80fd\u4f7f\u7528\u6b64\u65b9\u5f0f\u751f\u6210\u8bc1\u4e66\uff0c\u4e0d\u88ab\u4e92\u8054\u7f51CA\u6743\u5a01\u627f\u8ba4\u7684\u9ed1\u6237\u8bc1\u4e66)"})}),"\n",(0,r.jsxs)(e.p,{children:["\u52a0",(0,r.jsx)(e.code,{children:"-idea"}),"\u53c2\u6570\u5c31\u4f1a\u63d0\u793a\u8f93\u5165\u5bc6\u7801\uff0c\u6700\u5c114\u4f4d"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"openssl genrsa -out ca.key 2048\n"})}),"\n",(0,r.jsx)(e.h3,{id:"22-\u751f\u6210\u81ea\u7b7e\u8bc1\u4e66",children:"2.2 \u751f\u6210\u81ea\u7b7e\u8bc1\u4e66"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"\u4ea4\u4e92\u5f0f"})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"openssl req -x509 -new -nodes -sha256 -days 36500 -key ca.key -out ca.crt\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u53c2\u6570\u8bf4\u660e"})}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u53c2\u6570"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u8bf4\u660e"})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"req"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"\u8bf7\u6c42\u5b50\u547d\u4ee4"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"-x509"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"\u8bc1\u4e66\u683c\u5f0f"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"-new"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"\u751f\u6210\u8bc1\u4e66\u8bf7\u6c42"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"-nodes"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"\u79c1\u94a5\u4e0d\u52a0\u5bc6"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"-days"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"\u8bc1\u4e66\u6709\u6548\u671f"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"-key"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"\u6307\u5b9a\u79c1\u94a5\u6587\u4ef6"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"-out"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"\u8f93\u5165\u8bc1\u4e66\u6587\u4ef6"})})]})]})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"\u514d\u4ea4\u4e92\u5f0f"})}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:'openssl req -x509 -new -nodes -sha256 -days 36500 \\\n -subj "/C=CN/ST=Beijing/L=Beijing/O=dev/OU=devops/CN=www.yzbpdcnm.com" \\\n -key ca.key \\\n -out ca.crt\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["\u514d\u4ea4\u4e92\u5f0f",(0,r.jsx)(e.code,{children:"-subj"}),"\u53c2\u6570"]})}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u7b80\u5199"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u5b8c\u6574\u5355\u8bcd"})}),(0,r.jsx)(e.th,{children:(0,r.jsx)(e.strong,{children:"\u542b\u4e49"})})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"C"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Country Name"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"\u56fd\u5bb6"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"ST"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"State or Province Name"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"\u7701"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"L"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Locality Name"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"\u57ce\u5e02"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"O"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Organization Name"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"\u7ec4\u7ec7\u540d\u79f0"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"OU"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Organization Unit Name"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"\u7ec4\u7ec7\u5355\u4f4d\u540d\u79f0"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"CN"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"Common Name"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"\u57df\u540d"})})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"3\u914d\u7f6enginx\u4ee5https\u65b9\u5f0f\u8bbf\u95ee",children:"3.\u914d\u7f6enginx\u4ee5https\u65b9\u5f0f\u8bbf\u95ee"}),"\n",(0,r.jsx)(e.h3,{id:"31-\u7f16\u8f91nginx\u914d\u7f6e\u6587\u4ef6",children:"3.1 \u7f16\u8f91nginx\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-nginx",children:"cat > /etc/nginx/conf.d/https-test.conf <<'EOF'\nserver {\n  listen 80;\n  server_name www.test.com;\n  rewrite (.*) https://$server_name$request_uri redirect;\n}\n\nserver {\n  #\u9ad8\u7248\u672c\u7684nginx\u5df2\u7ecf\u5f03\u7528ssl on\n  listen 443 ssl;\n  server_name www.test.com;\n  ssl_certificate ssl_key/ca.crt;\n  ssl_certificate_key ssl_key/ca.key;\n\n  location / {\n    root /code;\n    index index.html;\n  }\n}\nEOF\n"})}),"\n",(0,r.jsx)(e.h3,{id:"32-\u521b\u5efa\u7f51\u7ad9\u6839\u76ee\u5f55",children:"3.2 \u521b\u5efa\u7f51\u7ad9\u6839\u76ee\u5f55"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"mkdir /code && echo 'https test' >/code/index.html\n"})}),"\n",(0,r.jsx)(e.h3,{id:"33-\u672c\u5730\u7ed1\u5b9ahosts\u6d4f\u89c8\u5668\u8bbf\u95ee",children:"3.3 \u672c\u5730\u7ed1\u5b9ahosts\u6d4f\u89c8\u5668\u8bbf\u95ee"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-06-2209.22.29.png",alt:"iShot2020-06-2209.22.29"})})]})}function o(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(x,{...n})}):x(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>d});var r=s(96540);const i={},l=r.createContext(i);function t(n){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);