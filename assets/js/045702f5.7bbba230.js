"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6986],{85443:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var t=c(74848),s=c(28453);const r={},i="\u672c\u673a\u901a\u8fc7config\u6587\u4ef6\u8fde\u63a5\u591a\u4e2ak8s\u96c6\u7fa4",o={id:"\u4e91\u539f\u751f/k8s/k8s\u77e5\u8bc6\u70b9/\u6587\u7ae0/\u672c\u673a\u901a\u8fc7config\u6587\u4ef6\u8fde\u63a5\u591a\u4e2ak8s\u96c6\u7fa4",title:"\u672c\u673a\u901a\u8fc7config\u6587\u4ef6\u8fde\u63a5\u591a\u4e2ak8s\u96c6\u7fa4",description:"\u80cc\u666f\u8bf4\u660e",source:"@site/docs/\u4e91\u539f\u751f/k8s/k8s\u77e5\u8bc6\u70b9/\u6587\u7ae0/\u672c\u673a\u901a\u8fc7config\u6587\u4ef6\u8fde\u63a5\u591a\u4e2ak8s\u96c6\u7fa4.md",sourceDirName:"\u4e91\u539f\u751f/k8s/k8s\u77e5\u8bc6\u70b9/\u6587\u7ae0",slug:"/\u4e91\u539f\u751f/k8s/k8s\u77e5\u8bc6\u70b9/\u6587\u7ae0/\u672c\u673a\u901a\u8fc7config\u6587\u4ef6\u8fde\u63a5\u591a\u4e2ak8s\u96c6\u7fa4",permalink:"/docs/\u4e91\u539f\u751f/k8s/k8s\u77e5\u8bc6\u70b9/\u6587\u7ae0/\u672c\u673a\u901a\u8fc7config\u6587\u4ef6\u8fde\u63a5\u591a\u4e2ak8s\u96c6\u7fa4",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"kubeadm \u4e13\u9898 \u4e00 init \u7a76\u7adf\u5e72\u4e86\u4e9b\u4ec0\u4e48",permalink:"/docs/\u4e91\u539f\u751f/k8s/k8s\u77e5\u8bc6\u70b9/\u6587\u7ae0/kubeadm \u4e13\u9898 \u4e00 init \u7a76\u7adf\u5e72\u4e86\u4e9b\u4ec0\u4e48"},next:{title:"ingress-nginx\u5b89\u88c5",permalink:"/docs/\u4e91\u539f\u751f/k8s/k8s\u77e5\u8bc6\u70b9/\u670d\u52a1\u3001\u8d1f\u8f7d\u5747\u8861\u548c\u8054\u7f51/ingress/ingress-nginx/ingress-nginx\u5b89\u88c5"}},d={},a=[{value:"\u80cc\u666f\u8bf4\u660e",id:"\u80cc\u666f\u8bf4\u660e",level:2},{value:"config\u6587\u4ef6\u4fe1\u606f",id:"config\u6587\u4ef6\u4fe1\u606f",level:2},{value:"\u5408\u5e76config\u6587\u4ef6",id:"\u5408\u5e76config\u6587\u4ef6",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u67e5\u770b <code>cluster name</code> \u4ee5\u53ca <code>context name</code>",id:"\u67e5\u770b-cluster-name-\u4ee5\u53ca-context-name",level:3},{value:"\u67e5\u770b\u5f53\u524d\u4f7f\u7528\u7684\u96c6\u7fa4",id:"\u67e5\u770b\u5f53\u524d\u4f7f\u7528\u7684\u96c6\u7fa4",level:3},{value:"\u4fee\u6539\u5f53\u524d\u4f7f\u7528\u7684\u96c6\u7fa4",id:"\u4fee\u6539\u5f53\u524d\u4f7f\u7528\u7684\u96c6\u7fa4",level:3}];function l(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u672c\u673a\u901a\u8fc7config\u6587\u4ef6\u8fde\u63a5\u591a\u4e2ak8s\u96c6\u7fa4",children:"\u672c\u673a\u901a\u8fc7config\u6587\u4ef6\u8fde\u63a5\u591a\u4e2ak8s\u96c6\u7fa4"}),"\n",(0,t.jsx)(n.h2,{id:"\u80cc\u666f\u8bf4\u660e",children:"\u80cc\u666f\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["\u6211\u4eec\u6709\u591a\u4e2ak8s\u96c6\u7fa4\uff0c\u5e76\u4e14\u60f3\u8981\u901a\u8fc7config\u6587\u4ef6\u6765\u8fde\u63a5\u591a\u4e2ak8s\u96c6\u7fa4\uff0c\u65b9\u6cd5\u5c31\u662f\u5c062\u4e2a\u96c6\u7fa4\u7684 ",(0,t.jsx)(n.code,{children:"config"})," \u6587\u4ef6\u5408\u5e76\u5230\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"config"})," \u6587\u4ef6\u4e2d\uff0c\u901a\u8fc7\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"kubectl config use-context context_name"})," \u6765\u8bbf\u95ee\u96c6\u7fa4\u3002\u7b80\u800c\u8a00\u4e4b\u5c31\u662f\u901a\u8fc7\u8bbe\u7f6e ",(0,t.jsx)(n.code,{children:"context"})," \u6765\u8ba9 ",(0,t.jsx)(n.code,{children:"kubectl"})," \u8bbf\u95ee\u4e0d\u540c\u7684k8s\u96c6\u7fa4\u3002"]})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"config\u6587\u4ef6\u4fe1\u606f",children:"config\u6587\u4ef6\u4fe1\u606f"}),"\n",(0,t.jsxs)(n.p,{children:["\u73b0\u5728\u67092\u4e2a ",(0,t.jsx)(n.code,{children:"config"})," \u6587\u4ef6\uff0c\u4e00\u4e2a\u662fmac\u672c\u673ak8s\u96c6\u7fa4\u6587\u4ef6 ",(0,t.jsx)(n.code,{children:"config-mac"}),"\uff0c\u53e6\u5916\u4e00\u4e2a\u662f\u516c\u53f8\u5185\u7f51\u6d4b\u8bd5\u96c6\u7fa4\u6587\u4ef6 ",(0,t.jsx)(n.code,{children:"config-company"}),"\uff0c \u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"config"})," \u4fe1\u606f\uff0c\u53ef\u4ee5\u770b\u5230\u4e24\u4e2a\u96c6\u7fa4\u7684 ",(0,t.jsx)(n.code,{children:"cluster name"})," \u3001",(0,t.jsx)(n.code,{children:"context name"})," \u4ee5\u53ca\u7528\u6237\u4fe1\u606f\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["config\u6587\u4ef61 ",(0,t.jsx)(n.code,{children:"config-mac"})," \u5185\u5bb9"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: xxx\n    server: https://kubernetes.docker.internal:6443\n  name: docker-desktop\ncontexts:\n- context:\n    cluster: docker-desktop\n    user: docker-desktop\n  name: docker-desktop\ncurrent-context: docker-desktop\nkind: Config\npreferences: {}\nusers:\n- name: docker-desktop\n  user:\n    client-certificate-data: xxx\n    client-key-data: xxx\n"})}),"\n",(0,t.jsxs)(n.p,{children:["config\u6587\u4ef62 ",(0,t.jsx)(n.code,{children:"config-company"})," \u5185\u5bb9"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: xxx\n    server: https://10.0.19.31:6443\n  name: kubernetes\ncontexts:\n- context:\n    cluster: kubernetes\n    user: kubernetes-admin\n  name: kubernetes-admin@kubernetes\ncurrent-context: kubernetes-admin@kubernetes\nkind: Config\npreferences: {}\nusers:\n- name: kubernetes-admin\n  user:\n    client-certificate-data: xxx\n    client-key-data: xxx\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5408\u5e76config\u6587\u4ef6",children:"\u5408\u5e76config\u6587\u4ef6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"cd $HOME/.kube/config\nKUBECONFIG=config-mac:config-company kubectl config view --flatten > $HOME/.kube/config\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528\u8bf4\u660e",children:"\u4f7f\u7528\u8bf4\u660e"}),"\n",(0,t.jsxs)(n.h3,{id:"\u67e5\u770b-cluster-name-\u4ee5\u53ca-context-name",children:["\u67e5\u770b ",(0,t.jsx)(n.code,{children:"cluster name"})," \u4ee5\u53ca ",(0,t.jsx)(n.code,{children:"context name"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"$ kubectl config view\napiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: DATA+OMITTED\n    server: https://kubernetes.docker.internal:6443\n  name: docker-desktop\n- cluster:\n    certificate-authority-data: DATA+OMITTED\n    server: https://10.0.19.31:6443\n  name: kubernetes\ncontexts:\n- context:\n    cluster: docker-desktop\n    user: docker-desktop\n  name: docker-desktop\n- context:\n    cluster: kubernetes\n    user: kubernetes-admin\n  name: kubernetes-admin@kubernetes\ncurrent-context: kubernetes-admin@kubernetes\nkind: Config\npreferences: {}\nusers:\n- name: docker-desktop\n  user:\n    client-certificate-data: REDACTED\n    client-key-data: REDACTED\n- name: kubernetes-admin\n  user:\n    client-certificate-data: REDACTED\n    client-key-data: REDACTED\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u67e5\u770b\u5f53\u524d\u4f7f\u7528\u7684\u96c6\u7fa4",children:"\u67e5\u770b\u5f53\u524d\u4f7f\u7528\u7684\u96c6\u7fa4"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kubectl config current-context\ndocker-desktop\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u4fee\u6539\u5f53\u524d\u4f7f\u7528\u7684\u96c6\u7fa4",children:"\u4fee\u6539\u5f53\u524d\u4f7f\u7528\u7684\u96c6\u7fa4"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"kubernetes-admin@kubernetes"})," \u662f\u901a\u8fc7\u547d\u4ee4 ",(0,t.jsx)(n.code,{children:"kubectl config view"})," \u67e5\u8be2\u7ed3\u679c\u4e2d\u4e0e ",(0,t.jsx)(n.code,{children:"context"})," \u540c\u7ea7\u7684 ",(0,t.jsx)(n.code,{children:"name"})," \u4e2d\u7684\u96c6\u7fa4\u540d\u5b57"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'$ kubectl config use-context kubernetes-admin@kubernetes\nSwitched to context "kubernetes-admin@kubernetes".\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>i,x:()=>o});var t=c(96540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);