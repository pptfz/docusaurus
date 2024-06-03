"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4926],{64493:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>i,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var l=s(74848),t=s(28453);const a={},r="\u65e0\u6cd5\u5220\u9664replicasets",d={id:"\u4e91\u539f\u751f/k8s/k8s\u6545\u969c/\u65e0\u6cd5\u5220\u9664replicasets",title:"\u65e0\u6cd5\u5220\u9664replicasets",description:"\u96c6\u7fa4\u4e2d\u6709\u4e00\u4e2a\u5f02\u5e38\u7684pod",source:"@site/docs/\u4e91\u539f\u751f/k8s/k8s\u6545\u969c/\u65e0\u6cd5\u5220\u9664replicasets.md",sourceDirName:"\u4e91\u539f\u751f/k8s/k8s\u6545\u969c",slug:"/\u4e91\u539f\u751f/k8s/k8s\u6545\u969c/\u65e0\u6cd5\u5220\u9664replicasets",permalink:"/docs/\u4e91\u539f\u751f/k8s/k8s\u6545\u969c/\u65e0\u6cd5\u5220\u9664replicasets",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528config\u8fde\u63a5k8s\u96c6\u7fa4\u9047\u5230\u7684\u95ee\u9898",permalink:"/docs/\u4e91\u539f\u751f/k8s/k8s\u6545\u969c/\u4f7f\u7528config\u6587\u4ef6\u8fde\u63a5k8s\u96c6\u7fa4\u9047\u5230\u7684\u95ee\u9898"},next:{title:"k8s\u57fa\u7840\u64cd\u4f5c",permalink:"/docs/\u4e91\u539f\u751f/k8s/k8s\u77e5\u8bc6\u70b9/k8s\u57fa\u7840\u64cd\u4f5c"}},c={},o=[];function p(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"\u65e0\u6cd5\u5220\u9664replicasets",children:"\u65e0\u6cd5\u5220\u9664replicasets"}),"\n",(0,l.jsx)(n.p,{children:"\u96c6\u7fa4\u4e2d\u6709\u4e00\u4e2a\u5f02\u5e38\u7684pod"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pod|grep uc-admin\nuc-admin.stage-default.ten.ratel-pod-deploy-57bb47794b-hchqr      0/1     CrashLoopBackOff   2716       2y18d\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u4f46\u662fdeployment\u5374\u4e0d\u5b58\u5728\uff0c\u8fc7\u6ee4\u4e3a\u7a7a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"kubectl get deploy|grep uc-admin\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u67e5\u770b\u76f8\u5e94\u7684rs"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl get rs |grep uc-admin\nuc-admin.stage-default.ten.ratel-pod-deploy-57bb47794b                                 1         1         0       2y277d\nuc-admin.stage-default.ten.ratel-pod-deploy-8696449756                                 0         0         0       2y296d\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5c1d\u8bd5\u5220\u9664rs"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'$ kubectl delete rs uc-admin.stage-default.ten.ratel-pod-deploy-57bb47794b\nreplicaset.apps "uc-admin.stage-default.ten.ratel-pod-deploy-57bb47794b" deleted\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u4f46\u662f\u521a\u88ab\u5220\u9664\u7684rs\u53c8\u4f1a\u81ea\u52a8\u521b\u5efa"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl get rs |grep uc-admin\nuc-admin.stage-default.ten.ratel-pod-deploy-57bb47794b                                 1         1         0       9s\nuc-admin.stage-default.ten.ratel-pod-deploy-8696449756                                 0         0         0       2y296d\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u67e5\u770b\u4e00\u4e0b\u8fd9\u4e2ars"}),"\n",(0,l.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\u662f\u901a\u8fc7 ",(0,l.jsx)(n.code,{children:"CanaryDeployment"})," \u7ba1\u7406\u7684\uff0c\u8fd9\u4e2a\u5c31\u662f ",(0,l.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#canary-deployment",children:"\u91d1\u4e1d\u96c0"})," \u90e8\u7f72"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl describe rs uc-admin.stage-default.ten.ratel-pod-deploy-57bb47794b|grep Controlled\nControlled By:  CanaryDeployment/uc-admin.stage-default.ten.ratel-pod-deploy\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u67e5\u770b\u8fd9\u4e2aCanaryDeployment"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl get CanaryDeployment|grep uc-admin\nuc-admin.stage-default.ten.ratel-pod-deploy                    0/0   0/1   0/0     0/0      3y35d\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5220\u9664\u8fd9\u4e2aCanaryDeployment"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'$ kubectl delete CanaryDeployment uc-admin.stage-default.ten.ratel-pod-deploy\ncanarydeployment.infra.vipkid.com.cn "uc-admin.stage-default.ten.ratel-pod-deploy" deleted\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u5220\u9664CanaryDeployment\u5c31\u4f1a\u81ea\u52a8\u5220\u9664rs"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ kubectl get rs|grep uc-admin\n"})})]})}function i(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var l=s(96540);const t={},a=l.createContext(t);function r(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);