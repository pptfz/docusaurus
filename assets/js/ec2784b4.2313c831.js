"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5040],{95622:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>o,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var l=t(74848),d=t(28453);const s={},a="date\u547d\u4ee4",i={id:"linux/linux\u547d\u4ee4/date\u547d\u4ee4",title:"date\u547d\u4ee4",description:"[toc]",source:"@site/docs/linux/linux\u547d\u4ee4/date\u547d\u4ee4.md",sourceDirName:"linux/linux\u547d\u4ee4",slug:"/linux/linux\u547d\u4ee4/date\u547d\u4ee4",permalink:"/docs/linux/linux\u547d\u4ee4/date\u547d\u4ee4",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"awk\u51fd\u6570",permalink:"/docs/linux/linux\u547d\u4ee4/awk/awk\u51fd\u6570"},next:{title:"echo\u547d\u4ee4",permalink:"/docs/linux/linux\u547d\u4ee4/echo\u547d\u4ee4"}},r={},c=[{value:"1.\u547d\u4ee4\u8bf4\u660e",id:"1\u547d\u4ee4\u8bf4\u660e",level:2},{value:"2.\u547d\u4ee4\u683c\u5f0f",id:"2\u547d\u4ee4\u683c\u5f0f",level:2},{value:"3.\u5e38\u7528\u9009\u9879",id:"3\u5e38\u7528\u9009\u9879",level:2},{value:"3.1 -d\t\u6839\u636e\u63cf\u8ff0\u663e\u793a\u6307\u5b9a\u65e5\u671f",id:"31--d\u6839\u636e\u63cf\u8ff0\u663e\u793a\u6307\u5b9a\u65e5\u671f",level:3},{value:"3.2 -s\t\u624b\u52a8\u8bbe\u7f6e\u65f6\u95f4",id:"32--s\u624b\u52a8\u8bbe\u7f6e\u65f6\u95f4",level:3},{value:"4.\u5e38\u7528\u8f93\u51fa",id:"4\u5e38\u7528\u8f93\u51fa",level:2},{value:"4.1 +%F\t\u8f93\u51fa\u65e5\u671f",id:"41-f\u8f93\u51fa\u65e5\u671f",level:3},{value:"4.2 +%T\t\u8f93\u51fa\u65f6\u95f4",id:"42-t\u8f93\u51fa\u65f6\u95f4",level:3},{value:"4.3 +%j\t\u8f93\u51fa\u5f53\u524d\u5929\u662f\u4e00\u5e74\u4e2d\u7684\u7b2c\u51e0\u5929",id:"43-j\u8f93\u51fa\u5f53\u524d\u5929\u662f\u4e00\u5e74\u4e2d\u7684\u7b2c\u51e0\u5929",level:3},{value:"4.4 +%w\t\u8f93\u51fa\u661f\u671f",id:"44-w\u8f93\u51fa\u661f\u671f",level:3},{value:"4.5 +%s\t1970-01-01 00:00:00 \u5f00\u59cb\u5230\u73b0\u5728\u7ecf\u8fc7\u7684\u79d2\u6570",id:"45-s1970-01-01-000000-\u5f00\u59cb\u5230\u73b0\u5728\u7ecf\u8fc7\u7684\u79d2\u6570",level:3},{value:"5.\u5176\u4ed6\u8f93\u51fa",id:"5\u5176\u4ed6\u8f93\u51fa",level:2},{value:"5.1 \u5e74\u4efd\u76f8\u5173",id:"51-\u5e74\u4efd\u76f8\u5173",level:3},{value:"5.1.1 +%Y\t\u8f93\u51fa\u5e74\u4efd(4\u4f4d\u6570)",id:"511-y\u8f93\u51fa\u5e74\u4efd4\u4f4d\u6570",level:4},{value:"5.1.2 +%y\t\u8f93\u51fa\u5e74\u4efd(00-99\u8868\u793a)",id:"512-y\u8f93\u51fa\u5e74\u4efd00-99\u8868\u793a",level:4},{value:"5.2 \u6708\u4efd\u76f8\u5173",id:"52-\u6708\u4efd\u76f8\u5173",level:3},{value:"5.2.1 +%m\t\u8f93\u51fa\u6708\u4efd(0-12\u8868\u793a)",id:"521-m\u8f93\u51fa\u6708\u4efd0-12\u8868\u793a",level:4},{value:"5.2.2 +%b\t\u6708\u4efd\u82f1\u6587\u7f29\u5199",id:"522-b\u6708\u4efd\u82f1\u6587\u7f29\u5199",level:4},{value:"5.2.3 +%B\t\u6708\u4efd\u82f1\u6587\u5168\u5199",id:"523-b\u6708\u4efd\u82f1\u6587\u5168\u5199",level:4},{value:"5.3 \u65e5\u671f\u76f8\u5173",id:"53-\u65e5\u671f\u76f8\u5173",level:3},{value:"5.3.1 +%w\t\u8f93\u51fa\u661f\u671f(0\u4ee3\u8868\u5468\u65e5)",id:"531-w\u8f93\u51fa\u661f\u671f0\u4ee3\u8868\u5468\u65e5",level:4},{value:"5.3.2 +%c\t\u8f93\u51fa\u65e5\u671f(\u4e0edate\u547d\u4ee4\u8f93\u51fa\u7a0d\u5fae\u6709\u5dee\u522b)",id:"532-c\u8f93\u51fa\u65e5\u671f\u4e0edate\u547d\u4ee4\u8f93\u51fa\u7a0d\u5fae\u6709\u5dee\u522b",level:4},{value:"5.3.3 +%d\t\u8f93\u51fa\u65e5\u671f(1-31\u8868\u793a)",id:"533-d\u8f93\u51fa\u65e5\u671f1-31\u8868\u793a",level:4},{value:"5.3.4 +%D\t\u8f93\u51fa\u65e5\u671f(\u6708/\u65e5/\u5e74)",id:"534-d\u8f93\u51fa\u65e5\u671f\u6708\u65e5\u5e74",level:4},{value:"5.4 \u661f\u671f\u76f8\u5173",id:"54-\u661f\u671f\u76f8\u5173",level:3},{value:"5.4.1 +%a\t\u8f93\u51fa\u661f\u671f(\u82f1\u6587\u7f29\u5199)",id:"541-a\u8f93\u51fa\u661f\u671f\u82f1\u6587\u7f29\u5199",level:4},{value:"5.4.2 +%A\t\u8f93\u51fa\u661f\u671f(\u82f1\u6587\u5168\u79f0)",id:"542-a\u8f93\u51fa\u661f\u671f\u82f1\u6587\u5168\u79f0",level:4},{value:"5.4.3 +%W\t\u8f93\u51fa\u661f\u671f(\u6570\u5b57\u8868\u793a)",id:"543-w\u8f93\u51fa\u661f\u671f\u6570\u5b57\u8868\u793a",level:4},{value:"5.5 \u5c0f\u65f6\u76f8\u5173",id:"55-\u5c0f\u65f6\u76f8\u5173",level:3},{value:"5.5.1 +%H\u3001+%k\t\u8f93\u51fa\u5c0f\u65f6(00-23\u8868\u793a)",id:"551-hk\u8f93\u51fa\u5c0f\u65f600-23\u8868\u793a",level:4},{value:"5.5.2 +%l\t\u8f93\u51fa\u5c0f\u65f6(01-12\u8868\u793a)",id:"552-l\u8f93\u51fa\u5c0f\u65f601-12\u8868\u793a",level:4},{value:"5.6 \u5206\u949f\u76f8\u5173",id:"56-\u5206\u949f\u76f8\u5173",level:3},{value:"5.6.1 +%M\t\u8f93\u51fa\u5206\u949f(00-59\u8868\u793a)",id:"561-m\u8f93\u51fa\u5206\u949f00-59\u8868\u793a",level:4},{value:"5.7 \u79d2\u6570\u76f8\u5173",id:"57-\u79d2\u6570\u76f8\u5173",level:3},{value:"5.7.1 +%S\t\u8f93\u51fa\u79d2\u6570",id:"571-s\u8f93\u51fa\u79d2\u6570",level:4},{value:"5.7.2 +%N\t\u8f93\u51fa\u7eb3\u79d2",id:"572-n\u8f93\u51fa\u7eb3\u79d2",level:4},{value:"5.8 \u65f6\u533a\u76f8\u5173",id:"58-\u65f6\u533a\u76f8\u5173",level:3},{value:"5.8.1 +%Z\t\u8f93\u51fa\u65f6\u533a",id:"581-z\u8f93\u51fa\u65f6\u533a",level:4},{value:"5.9 \u5176\u4ed6\u76f8\u5173",id:"59-\u5176\u4ed6\u76f8\u5173",level:3},{value:"5.9.1 +%P\u3001+%p\t\u8f93\u51faAM\u6216\u8005PM",id:"591-pp\u8f93\u51faam\u6216\u8005pm",level:4},{value:"5.9.2 +%r\u3001+%X\t\u8f93\u51fa\u65f6\u95f4(\u542b\u65f6\u5206\u79d2\uff0c\u5c0f\u65f6\u4ee512\u5c0f\u65f6AM/PM\u6765\u8868\u793a)",id:"592-rx\u8f93\u51fa\u65f6\u95f4\u542b\u65f6\u5206\u79d2\u5c0f\u65f6\u4ee512\u5c0f\u65f6ampm\u6765\u8868\u793a",level:4},{value:"5.9.3 +%x\t\u4ee5\u6708/\u65e5/\u5e74\u8f93\u51fa\u65e5\u671f",id:"593-x\u4ee5\u6708\u65e5\u5e74\u8f93\u51fa\u65e5\u671f",level:4},{value:"5.9.4 +%n\t\u8f93\u51fa\u65f6\u663e\u793a\u65b0\u7684\u4e00\u884c",id:"594-n\u8f93\u51fa\u65f6\u663e\u793a\u65b0\u7684\u4e00\u884c",level:4},{value:"5.9.5 +%t\t\u8f93\u51fa\u65f6\u63d2\u5165tab",id:"595-t\u8f93\u51fa\u65f6\u63d2\u5165tab",level:4}];function h(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"[toc]"}),"\n",(0,l.jsx)(n.h1,{id:"date\u547d\u4ee4",children:"date\u547d\u4ee4"}),"\n",(0,l.jsx)(n.h2,{id:"1\u547d\u4ee4\u8bf4\u660e",children:"1.\u547d\u4ee4\u8bf4\u660e"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"date\u547d\u4ee4\u6839\u636e\u7ed9\u5b9a\u683c\u5f0f\u663e\u793a\u65e5\u671f\u6216\u8bbe\u7f6e\u7cfb\u7edf\u65e5\u671f\u65f6\u95f4\uff0cprint or set the system date and time"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"centos7\u4e2ddate\u547d\u4ee4\u6240\u5728\u8def\u5f84"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[root@aliyun ~]# which date\n/usr/bin/date\n"})}),"\n",(0,l.jsx)(n.h2,{id:"2\u547d\u4ee4\u683c\u5f0f",children:"2.\u547d\u4ee4\u683c\u5f0f"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"date [OPTION]\u2026[+FORMAT]"}),"\n",(0,l.jsx)(n.p,{children:"date [\u9009\u9879] [\u683c\u5f0f]"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"3\u5e38\u7528\u9009\u9879",children:"3.\u5e38\u7528\u9009\u9879"}),"\n",(0,l.jsx)(n.h3,{id:"31--d\u6839\u636e\u63cf\u8ff0\u663e\u793a\u6307\u5b9a\u65e5\u671f",children:"3.1 -d\t\u6839\u636e\u63cf\u8ff0\u663e\u793a\u6307\u5b9a\u65e5\u671f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'//\u67e5\u770b\u5f53\u524d\u7cfb\u7edf\u65e5\u671f\n[root@test1 ~]# date\nMon Aug 20 21:15:32 CST 2018\n\n//\u8bbe\u7f6e\u65f6\u95f4\u4e3a\u4e00\u5929\u524d\n[root@test1 ~]# date -d "-1 day"\nSun Aug 19 21:15:34 CST 2018\n'})}),"\n",(0,l.jsx)(n.h3,{id:"32--s\u624b\u52a8\u8bbe\u7f6e\u65f6\u95f4",children:"3.2 -s\t\u624b\u52a8\u8bbe\u7f6e\u65f6\u95f4"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"//\u624b\u52a8\u8bbe\u7f6e\u65f6\u95f4\n[root@test1 ~]# date -s '2022-2-22 22:22:22'\nTue Feb 22 22:22:22 CST 2022\n\n//\u67e5\u770b\u5f53\u524d\u65f6\u95f4\n[root@test1 ~]# date\nTue Feb 22 22:22:22 CST 2022\n"})}),"\n",(0,l.jsx)(n.h2,{id:"4\u5e38\u7528\u8f93\u51fa",children:"4.\u5e38\u7528\u8f93\u51fa"}),"\n",(0,l.jsx)(n.h3,{id:"41-f\u8f93\u51fa\u65e5\u671f",children:"4.1 +%F\t\u8f93\u51fa\u65e5\u671f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[root@test ~]# date +%F\n2018-08-29\n"})}),"\n",(0,l.jsx)(n.h3,{id:"42-t\u8f93\u51fa\u65f6\u95f4",children:"4.2 +%T\t\u8f93\u51fa\u65f6\u95f4"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[root@test1 ~]# date +%T\n10:08:38\n"})}),"\n",(0,l.jsx)(n.h3,{id:"43-j\u8f93\u51fa\u5f53\u524d\u5929\u662f\u4e00\u5e74\u4e2d\u7684\u7b2c\u51e0\u5929",children:"4.3 +%j\t\u8f93\u51fa\u5f53\u524d\u5929\u662f\u4e00\u5e74\u4e2d\u7684\u7b2c\u51e0\u5929"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[root@test1 ~]# date +%j\n251\n"})}),"\n",(0,l.jsx)(n.h3,{id:"44-w\u8f93\u51fa\u661f\u671f",children:"4.4 +%w\t\u8f93\u51fa\u661f\u671f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"\u26a0\ufe0f0\u8868\u793a\u5468\u65e5\n\n[root@test1 ~]# date +%w\n1\n"})}),"\n",(0,l.jsx)(n.h3,{id:"45-s1970-01-01-000000-\u5f00\u59cb\u5230\u73b0\u5728\u7ecf\u8fc7\u7684\u79d2\u6570",children:"4.5 +%s\t1970-01-01 00:00:00 \u5f00\u59cb\u5230\u73b0\u5728\u7ecf\u8fc7\u7684\u79d2\u6570"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[root@test1 ~]# date +%s\n1535508552\n"})}),"\n",(0,l.jsx)(n.h2,{id:"5\u5176\u4ed6\u8f93\u51fa",children:"5.\u5176\u4ed6\u8f93\u51fa"}),"\n",(0,l.jsx)(n.h3,{id:"51-\u5e74\u4efd\u76f8\u5173",children:"5.1 \u5e74\u4efd\u76f8\u5173"}),"\n",(0,l.jsx)(n.h4,{id:"511-y\u8f93\u51fa\u5e74\u4efd4\u4f4d\u6570",children:"5.1.1 +%Y\t\u8f93\u51fa\u5e74\u4efd(4\u4f4d\u6570)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[root@test1 ~]# date +%Y\n2018\n"})}),"\n",(0,l.jsx)(n.h4,{id:"512-y\u8f93\u51fa\u5e74\u4efd00-99\u8868\u793a",children:"5.1.2 +%y\t\u8f93\u51fa\u5e74\u4efd(00-99\u8868\u793a)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[root@test1 ~]# date +%y\n18\n"})}),"\n",(0,l.jsx)(n.h3,{id:"52-\u6708\u4efd\u76f8\u5173",children:"5.2 \u6708\u4efd\u76f8\u5173"}),"\n",(0,l.jsx)(n.h4,{id:"521-m\u8f93\u51fa\u6708\u4efd0-12\u8868\u793a",children:"5.2.1 +%m\t\u8f93\u51fa\u6708\u4efd(0-12\u8868\u793a)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[root@test1 ~]# date +%m\n08\n"})}),"\n",(0,l.jsx)(n.h4,{id:"522-b\u6708\u4efd\u82f1\u6587\u7f29\u5199",children:"5.2.2 +%b\t\u6708\u4efd\u82f1\u6587\u7f29\u5199"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[root@test1 ~]# date +%b\nAug\n"})}),"\n",(0,l.jsx)(n.h4,{id:"523-b\u6708\u4efd\u82f1\u6587\u5168\u5199",children:"5.2.3 +%B\t\u6708\u4efd\u82f1\u6587\u5168\u5199"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[root@test1 ~]# date +%B\nAugust\n"})}),"\n",(0,l.jsx)(n.h3,{id:"53-\u65e5\u671f\u76f8\u5173",children:"5.3 \u65e5\u671f\u76f8\u5173"}),"\n",(0,l.jsx)(n.h4,{id:"531-w\u8f93\u51fa\u661f\u671f0\u4ee3\u8868\u5468\u65e5",children:"5.3.1 +%w\t\u8f93\u51fa\u661f\u671f(0\u4ee3\u8868\u5468\u65e5)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[root@test1 ~]# date +%w\n3\n"})}),"\n",(0,l.jsx)(n.h4,{id:"532-c\u8f93\u51fa\u65e5\u671f\u4e0edate\u547d\u4ee4\u8f93\u51fa\u7a0d\u5fae\u6709\u5dee\u522b",children:"5.3.2 +%c\t\u8f93\u51fa\u65e5\u671f(\u4e0edate\u547d\u4ee4\u8f93\u51fa\u7a0d\u5fae\u6709\u5dee\u522b)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[root@test1 ~]# date +%c\nWed 29 Aug 2018 10:11:12 AM CST\n\n[root@test1 ~]# date\nWed Aug 29 10:11:12 CST 2018\n"})}),"\n",(0,l.jsx)(n.h4,{id:"533-d\u8f93\u51fa\u65e5\u671f1-31\u8868\u793a",children:"5.3.3 +%d\t\u8f93\u51fa\u65e5\u671f(1-31\u8868\u793a)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[root@test1 ~]# date +%d\n29\n"})}),"\n",(0,l.jsx)(n.h4,{id:"534-d\u8f93\u51fa\u65e5\u671f\u6708\u65e5\u5e74",children:"5.3.4 +%D\t\u8f93\u51fa\u65e5\u671f(\u6708/\u65e5/\u5e74)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[root@test1 ~]# date +%D\n08/29/18\n"})}),"\n",(0,l.jsx)(n.h3,{id:"54-\u661f\u671f\u76f8\u5173",children:"5.4 \u661f\u671f\u76f8\u5173"}),"\n",(0,l.jsx)(n.h4,{id:"541-a\u8f93\u51fa\u661f\u671f\u82f1\u6587\u7f29\u5199",children:"5.4.1 +%a\t\u8f93\u51fa\u661f\u671f(\u82f1\u6587\u7f29\u5199)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[root@test1 ~]# date +%a\nWed\n"})}),"\n",(0,l.jsx)(n.h4,{id:"542-a\u8f93\u51fa\u661f\u671f\u82f1\u6587\u5168\u79f0",children:"5.4.2 +%A\t\u8f93\u51fa\u661f\u671f(\u82f1\u6587\u5168\u79f0)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[root@test1 ~]# date +%A\nWednesday\n"})}),"\n",(0,l.jsx)(n.h4,{id:"543-w\u8f93\u51fa\u661f\u671f\u6570\u5b57\u8868\u793a",children:"5.4.3 +%W\t\u8f93\u51fa\u661f\u671f(\u6570\u5b57\u8868\u793a)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[root@test1 ~]# date +%w\n3\n"})}),"\n",(0,l.jsx)(n.h3,{id:"55-\u5c0f\u65f6\u76f8\u5173",children:"5.5 \u5c0f\u65f6\u76f8\u5173"}),"\n",(0,l.jsx)(n.h4,{id:"551-hk\u8f93\u51fa\u5c0f\u65f600-23\u8868\u793a",children:"5.5.1 +%H\u3001+%k\t\u8f93\u51fa\u5c0f\u65f6(00-23\u8868\u793a)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[root@test1 ~]# date +%H\n10\n\n[root@test1 ~]# date +%k\n10\n"})}),"\n",(0,l.jsx)(n.h4,{id:"552-l\u8f93\u51fa\u5c0f\u65f601-12\u8868\u793a",children:"5.5.2 +%l\t\u8f93\u51fa\u5c0f\u65f6(01-12\u8868\u793a)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[root@test1 ~]# date +%l\n10\n"})}),"\n",(0,l.jsx)(n.h3,{id:"56-\u5206\u949f\u76f8\u5173",children:"5.6 \u5206\u949f\u76f8\u5173"}),"\n",(0,l.jsx)(n.h4,{id:"561-m\u8f93\u51fa\u5206\u949f00-59\u8868\u793a",children:"5.6.1 +%M\t\u8f93\u51fa\u5206\u949f(00-59\u8868\u793a)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[root@test1 ~]# date +%M\n30\n"})}),"\n",(0,l.jsx)(n.h3,{id:"57-\u79d2\u6570\u76f8\u5173",children:"5.7 \u79d2\u6570\u76f8\u5173"}),"\n",(0,l.jsx)(n.h4,{id:"571-s\u8f93\u51fa\u79d2\u6570",children:"5.7.1 +%S\t\u8f93\u51fa\u79d2\u6570"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[root@test1 ~]# date +%S\n28\n"})}),"\n",(0,l.jsx)(n.h4,{id:"572-n\u8f93\u51fa\u7eb3\u79d2",children:"5.7.2 +%N\t\u8f93\u51fa\u7eb3\u79d2"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"\u7eb3\u79d2nanoseconds (000000000..999999999)\n\n[root@test1 ~]# date +%N\n121213066\n"})}),"\n",(0,l.jsx)(n.h3,{id:"58-\u65f6\u533a\u76f8\u5173",children:"5.8 \u65f6\u533a\u76f8\u5173"}),"\n",(0,l.jsx)(n.h4,{id:"581-z\u8f93\u51fa\u65f6\u533a",children:"5.8.1 +%Z\t\u8f93\u51fa\u65f6\u533a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"CST\u8868\u793a\u4e2d\u90e8\u6807\u51c6\u65f6\u95f4\n[root@test1 ~]# date +%Z\nCST\n"})}),"\n",(0,l.jsx)(n.h3,{id:"59-\u5176\u4ed6\u76f8\u5173",children:"5.9 \u5176\u4ed6\u76f8\u5173"}),"\n",(0,l.jsx)(n.h4,{id:"591-pp\u8f93\u51faam\u6216\u8005pm",children:"5.9.1 +%P\u3001+%p\t\u8f93\u51faAM\u6216\u8005PM"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"\xa0[root@test1 ~]# date +%p\n\xa0PM\n\xa0\n\xa0[root@test1 ~]# date +%P\n\xa0pm\n"})}),"\n",(0,l.jsx)(n.h4,{id:"592-rx\u8f93\u51fa\u65f6\u95f4\u542b\u65f6\u5206\u79d2\u5c0f\u65f6\u4ee512\u5c0f\u65f6ampm\u6765\u8868\u793a",children:"5.9.2 +%r\u3001+%X\t\u8f93\u51fa\u65f6\u95f4(\u542b\u65f6\u5206\u79d2\uff0c\u5c0f\u65f6\u4ee512\u5c0f\u65f6AM/PM\u6765\u8868\u793a)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[root@test1 ~]# date +%r\n10:40:15 AM\n\n[root@test1 ~]# date +%X\n10:40:25 AM\n"})}),"\n",(0,l.jsx)(n.h4,{id:"593-x\u4ee5\u6708\u65e5\u5e74\u8f93\u51fa\u65e5\u671f",children:"5.9.3 +%x\t\u4ee5\u6708/\u65e5/\u5e74\u8f93\u51fa\u65e5\u671f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"[root@test1 ~]# date +%x\n08/29/2018\n"})}),"\n",(0,l.jsx)(n.h4,{id:"594-n\u8f93\u51fa\u65f6\u663e\u793a\u65b0\u7684\u4e00\u884c",children:"5.9.4 +%n\t\u8f93\u51fa\u65f6\u663e\u793a\u65b0\u7684\u4e00\u884c"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"//\u6ce8\u610f\u6709\u4e24\u884c\n[root@test1 ~]# date +%n\n\n\n[root@test1 ~]# \n"})}),"\n",(0,l.jsx)(n.h4,{id:"595-t\u8f93\u51fa\u65f6\u63d2\u5165tab",children:"5.9.5 +%t\t\u8f93\u51fa\u65f6\u63d2\u5165tab"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"//\u6709\u4e00\u4e2a\u7a7a\u884c\n[root@test1 ~]# date +%t\t\n\n[root@test1 ~]# \n"})})]})}function o(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var l=t(96540);const d={},s=l.createContext(d);function a(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);