"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8308],{62673:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var t=r(74848),s=r(28453);const n={},o="gitlab\u5fd8\u8bb0root\u5bc6\u7801",a={id:"linux/\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0/gitlab/gitlab\u77e5\u8bc6\u70b9/gitlab\u5fd8\u8bb0root\u5bc6\u7801",title:"gitlab\u5fd8\u8bb0root\u5bc6\u7801",description:"[toc]",source:"@site/docs/linux/\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0/gitlab/gitlab\u77e5\u8bc6\u70b9/6.gitlab\u5fd8\u8bb0root\u5bc6\u7801.md",sourceDirName:"linux/\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0/gitlab/gitlab\u77e5\u8bc6\u70b9",slug:"/linux/\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0/gitlab/gitlab\u77e5\u8bc6\u70b9/gitlab\u5fd8\u8bb0root\u5bc6\u7801",permalink:"/docs/linux/\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0/gitlab/gitlab\u77e5\u8bc6\u70b9/gitlab\u5fd8\u8bb0root\u5bc6\u7801",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5173\u95edgitlab\u53cc\u91cd\u8ba4\u8bc1",permalink:"/docs/linux/\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0/gitlab/gitlab\u77e5\u8bc6\u70b9/\u5173\u95edgitlab\u53cc\u91cd\u8ba4\u8bc1"},next:{title:"gitlab\u8fc1\u79fb",permalink:"/docs/linux/\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0/gitlab/gitlab\u77e5\u8bc6\u70b9/gitlab\u8fc1\u79fb"}},l={},d=[{value:"1.\u5207\u6362\u5230 git \u7528\u6237",id:"1\u5207\u6362\u5230-git-\u7528\u6237",level:2},{value:"2.\u767b\u5f55gitLab\u7684rails\u63a7\u5236\u53f0",id:"2\u767b\u5f55gitlab\u7684rails\u63a7\u5236\u53f0",level:2},{value:"3.\u6267\u884c\u547d\u4ee4\u5b9a\u4f4d\u5230root\u7528\u6237 <code>user = User.where(id: 1).first</code>",id:"3\u6267\u884c\u547d\u4ee4\u5b9a\u4f4d\u5230root\u7528\u6237-user--userwhereid-1first",level:2},{value:"4.\u4fee\u6539root\u5bc6\u7801\t<code>user.password=&#39;xxx&#39;</code>",id:"4\u4fee\u6539root\u5bc6\u7801userpasswordxxx",level:2},{value:"5.\u4fdd\u5b58\u5bc6\u7801\t<code>user.save!</code>",id:"5\u4fdd\u5b58\u5bc6\u7801usersave",level:2}];function c(e){const i={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"gitlab\u5fd8\u8bb0root\u5bc6\u7801",children:"gitlab\u5fd8\u8bb0root\u5bc6\u7801"}),"\n",(0,t.jsx)(i.p,{children:"[toc]"}),"\n",(0,t.jsx)(i.h2,{id:"1\u5207\u6362\u5230-git-\u7528\u6237",children:"1.\u5207\u6362\u5230 git \u7528\u6237"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sh",children:"su - git\n"})}),"\n",(0,t.jsx)(i.h2,{id:"2\u767b\u5f55gitlab\u7684rails\u63a7\u5236\u53f0",children:"2.\u767b\u5f55gitLab\u7684rails\u63a7\u5236\u53f0"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sh",children:"$ gitlab-rails console\n--------------------------------------------------------------------------------\n GitLab:       12.10.1 (e658772bd63) FOSS\n GitLab Shell: 12.2.0\n PostgreSQL:   11.7\n--------------------------------------------------------------------------------\nLoading production environment (Rails 6.0.2)\nirb(main):001:0>\n"})}),"\n",(0,t.jsxs)(i.h2,{id:"3\u6267\u884c\u547d\u4ee4\u5b9a\u4f4d\u5230root\u7528\u6237-user--userwhereid-1first",children:["3.\u6267\u884c\u547d\u4ee4\u5b9a\u4f4d\u5230root\u7528\u6237 ",(0,t.jsx)(i.code,{children:"user = User.where(id: 1).first"})]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sh",children:"irb(main):003:0> user = User.where(id: 1).first\n=> #<User id:1 @root>\n"})}),"\n",(0,t.jsxs)(i.h2,{id:"4\u4fee\u6539root\u5bc6\u7801userpasswordxxx",children:["4.\u4fee\u6539root\u5bc6\u7801\t",(0,t.jsx)(i.code,{children:"user.password='xxx'"})]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sh",children:"irb(main):004:0> user.password='xxx'\n=> \"xxx\"\n"})}),"\n",(0,t.jsxs)(i.h2,{id:"5\u4fdd\u5b58\u5bc6\u7801usersave",children:["5.\u4fdd\u5b58\u5bc6\u7801\t",(0,t.jsx)(i.code,{children:"user.save!"})]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sh",children:'irb(main):005:0> user.save!\nEnqueued ActionMailer::DeliveryJob (Job ID: 20ec0a5f-9762-473a-9db6-b2eb14b091c1) to Sidekiq(mailers) with arguments: "DeviseMailer", "password_change", "deliver_now", #<GlobalID:0x00007f47ec470460 @uri=#<URI::GID gid://gitlab/User/1>>\n=> true\n'})}),"\n",(0,t.jsx)(i.p,{children:"\u4fdd\u5b58\u5bc6\u7801\u91cd\u65b0\u4f7f\u7528root\u7528\u6237\u767b\u9646\u5373\u53ef"})]})}function u(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,i,r)=>{r.d(i,{R:()=>o,x:()=>a});var t=r(96540);const s={},n=t.createContext(s);function o(e){const i=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(n.Provider,{value:i},e.children)}}}]);