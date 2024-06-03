"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1117],{87542:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>j,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=i(74848),t=i(28453);const r={},p="CentOS7.5\u5b89\u88c5jenkins-2.176",a={id:"linux/\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0/jenkins/jenkins\u5b89\u88c5/CentOS7.5\u5b89\u88c5jenkins-2.176",title:"CentOS7.5\u5b89\u88c5jenkins-2.176",description:"[toc]",source:"@site/docs/linux/\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0/jenkins/jenkins\u5b89\u88c5/CentOS7.5\u5b89\u88c5jenkins-2.176.md",sourceDirName:"linux/\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0/jenkins/jenkins\u5b89\u88c5",slug:"/linux/\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0/jenkins/jenkins\u5b89\u88c5/CentOS7.5\u5b89\u88c5jenkins-2.176",permalink:"/docs/linux/\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0/jenkins/jenkins\u5b89\u88c5/CentOS7.5\u5b89\u88c5jenkins-2.176",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gitlab\u975e22\u7aef\u53e3\u95ee\u9898",permalink:"/docs/linux/\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0/gitlab/gitlab\u95ee\u9898/gitlab\u975e22\u7aef\u53e3\u95ee\u9898"},next:{title:"docker\u5b89\u88c5jenkins",permalink:"/docs/linux/\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0/jenkins/jenkins\u5b89\u88c5/docker\u5b89\u88c5jenkins"}},o={},c=[{value:"1.\u5b89\u88c5jdk8",id:"1\u5b89\u88c5jdk8",level:2},{value:"2.\u5b89\u88c5jenkins\uff0c\u8fd9\u91cc\u5b89\u88c5\u957f\u671f\u652f\u6301\u7248",id:"2\u5b89\u88c5jenkins\u8fd9\u91cc\u5b89\u88c5\u957f\u671f\u652f\u6301\u7248",level:2},{value:"3.\u4fee\u6539jenkins\u914d\u7f6e\u6587\u4ef6\uff0c\u8ba9jenkins\u4ee5root\u7528\u6237\u8fd0\u884c",id:"3\u4fee\u6539jenkins\u914d\u7f6e\u6587\u4ef6\u8ba9jenkins\u4ee5root\u7528\u6237\u8fd0\u884c",level:2},{value:"4.\u542f\u52a8jenkins",id:"4\u542f\u52a8jenkins",level:2},{value:"<strong>5.\u6d4f\u89c8\u5668\u8bbf\u95eejenkins</strong>",id:"5\u6d4f\u89c8\u5668\u8bbf\u95eejenkins",level:2},{value:"6.\u8bbe\u7f6ejenkins\u9ed8\u8ba4\u8bed\u8a00\u4e3a\u4e2d\u6587",id:"6\u8bbe\u7f6ejenkins\u9ed8\u8ba4\u8bed\u8a00\u4e3a\u4e2d\u6587",level:2}];function h(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"[toc]"}),"\n",(0,s.jsx)(e.h1,{id:"centos75\u5b89\u88c5jenkins-2176",children:"CentOS7.5\u5b89\u88c5jenkins-2.176"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://jenkins.io/zh/",children:"jenkins\u4e2d\u6587\u5b98\u7f51"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://jenkins.io",children:"jenkins\u5b98\u7f51"})}),"\n",(0,s.jsx)(e.h2,{id:"1\u5b89\u88c5jdk8",children:"1.\u5b89\u88c5jdk8"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"jenkins\u8fd0\u884c\u4f9d\u8d56jdk"})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.strong,{children:["\u81ea\u884c\u5230",(0,s.jsx)(e.a,{href:"https://www.oracle.com/technetwork/java/javase/downloads/index.html",children:"oracle\u5b98\u7f51"}),"\u4e0b\u8f7djdk"]})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"1.\u89e3\u538b\u7f29\u5305\n[root@jenkins ~]# tar xf jdk-8u211-linux-x64.tar.gz -C /usr/local\n\n2.\u5bfc\u51fa\u73af\u5883\u53d8\u91cf\n[root@jenkins ~]# cat >/etc/profile.d/jdk8.sh<<'EOF'\nexport JAVA_HOME=/usr/local/jdk1.8.0_211\nexport PATH=$JAVA_HOME/bin:$JAVA_HOME/jre:$JAVA_HOME/lib:$PATH\nexport CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar\nexport JAVA_HOME PATH CLASSPATH\nEOF\n\n3.\u4f7f\u914d\u7f6e\u751f\u6548\n[root@jenkins ~]# source /etc/profile\n\n4.\u94fe\u63a5java\u547d\u4ee4\uff0c\u5426\u5219\u540e\u7eed\u542f\u52a8jenkins\u4f1a\u62a5\u9519\n[root@jenkins ~]# ln -s /usr/local/jdk1.8.0_211/bin/java /usr/bin/java\n\n5.\u67e5\u770bjava\u7248\u672c\n[root@jenkins ~]# java -version\njava version \"1.8.0_211\"\nJava(TM) SE Runtime Environment (build 1.8.0_211-b12)\nJava HotSpot(TM) 64-Bit Server VM (build 25.211-b12, mixed mode)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"2\u5b89\u88c5jenkins\u8fd9\u91cc\u5b89\u88c5\u957f\u671f\u652f\u6301\u7248",children:"2.\u5b89\u88c5jenkins\uff0c\u8fd9\u91cc\u5b89\u88c5\u957f\u671f\u652f\u6301\u7248"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"#\u5b89\u88c5LTS(\u957f\u671f\u652f\u6301\u7248)\nLTS (\u957f\u671f\u652f\u6301) \u7248\u672c\u6bcf12\u5468\u4ece\u5e38\u89c4\u7248\u672c\u6d41\u4e2d\u9009\u62e9\uff0c\u4f5c\u4e3a\u8be5\u65f6\u95f4\u6bb5\u7684\u7a33\u5b9a\u7248\u672c\u3002\n[root@jenkins ~]# curl -o /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo\n\n[root@jenkins ~]# rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key\n\n[root@jenkins ~]# yum -y install jenkins\n\n\n#\u5b89\u88c5\u6bcf\u5468\u66f4\u65b0\u7248\n\u6bcf\u5468\u90fd\u4f1a\u53d1\u5e03\u4e00\u4e2a\u65b0\u7248\u672c\uff0c\u4e3a\u7528\u6237\u548c\u63d2\u4ef6\u5f00\u53d1\u4eba\u5458\u63d0\u4f9b\u9519\u8bef\u4fee\u590d\u548c\u529f\u80fd\u3002\n[root@jenkins ~]# curl -o /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat/jenkins.repo\n\n[root@jenkins ~]# rpm --import https://pkg.jenkins.io/redhat/jenkins.io.key\n\n[root@jenkins ~]# yum -y install jenkins\n\n\n#\u5b89\u88c5\u6307\u5b9a\u7248\u672c\nhttps://pkg.jenkins.io/redhat-stable/\n"})}),"\n",(0,s.jsx)(e.h2,{id:"3\u4fee\u6539jenkins\u914d\u7f6e\u6587\u4ef6\u8ba9jenkins\u4ee5root\u7528\u6237\u8fd0\u884c",children:"3.\u4fee\u6539jenkins\u914d\u7f6e\u6587\u4ef6\uff0c\u8ba9jenkins\u4ee5root\u7528\u6237\u8fd0\u884c"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"[root@jenkins ~]# sed -i.bak '29cJENKINS_USER=\"root\"' /etc/sysconfig/jenkins\n"})}),"\n",(0,s.jsx)(e.h2,{id:"4\u542f\u52a8jenkins",children:"4.\u542f\u52a8jenkins"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"#\u542f\u52a8jenins\u5e76\u52a0\u5165\u5f00\u673a\u81ea\u542f\n[root@jenkins ~]# systemctl enable jenkins && systemctl start jenkins\n"})}),"\n",(0,s.jsx)(e.h2,{id:"5\u6d4f\u89c8\u5668\u8bbf\u95eejenkins",children:(0,s.jsx)(e.strong,{children:"5.\u6d4f\u89c8\u5668\u8bbf\u95eejenkins"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"jenkins\u521a\u542f\u52a8\u6bd4\u8f83\u6162\uff0c\u7b49\u5f85\u542f\u52a8\u5b8c\u6210"})}),"\n",(0,s.jsxs)(e.p,{children:["![iShot2020-10-14 15.38.40](",(0,s.jsx)(e.a,{href:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-10-14",children:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-10-14"})," 15.38.40.png)"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u4ece/var/lib/jenkins/secrets/initialAdminPassword\u6587\u4ef6\u6309\u4e2d\u83b7\u53d6\u5bc6\u7801"})}),"\n",(0,s.jsxs)(e.p,{children:["![iShot2020-10-14 15.39.13](",(0,s.jsx)(e.a,{href:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-10-14",children:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-10-14"})," 15.39.13.png)"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u662f\u5426\u5b89\u88c5\u63d2\u4ef6\uff0c\u81ea\u884c\u9009\u62e9"})}),"\n",(0,s.jsxs)(e.p,{children:["![iShot2020-10-14 15.39.41](",(0,s.jsx)(e.a,{href:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-10-14",children:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-10-14"})," 15.39.41.png)"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u9009\u62e9\u63d2\u4ef6\u8fdb\u884c\u5b89\u88c5\uff0c\u5fc5\u987b\u9009\u62e9Locale\u63d2\u4ef6\uff0c\u4fee\u6539jenkins\u8bed\u8a00"})}),"\n",(0,s.jsxs)(e.p,{children:["![iShot2020-10-14 15.41.02](",(0,s.jsx)(e.a,{href:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-10-14",children:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-10-14"})," 15.41.02.png)"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u7b49\u5f85\u5b89\u88c5\u5b8c\u6210"})}),"\n",(0,s.jsxs)(e.p,{children:["![iShot2020-10-14 15.41.27](",(0,s.jsx)(e.a,{href:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-10-14",children:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-10-14"})," 15.41.27.png)"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u63d2\u4ef6\u5b89\u88c5\u5b8c\u6210\u540e\u521b\u5efa\u7ba1\u7406\u5458\u7528\u6237\uff0c\u8f93\u5165\u5bc6\u7801\u3001\u7528\u6237\u5168\u540d\u3001\u90ae\u4ef6\u5730\u5740"})}),"\n",(0,s.jsxs)(e.p,{children:["![iShot2020-10-14 15.41.44](",(0,s.jsx)(e.a,{href:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-10-14",children:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-10-14"})," 15.41.44.png)"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"jenkins URL\u9ed8\u8ba4\u4e3a\u4e3b\u673aIP\u5730\u5740\u52a08080\u7aef\u53e3"})}),"\n",(0,s.jsxs)(e.p,{children:["![iShot2020-10-14 15.42.01](",(0,s.jsx)(e.a,{href:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-10-14",children:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-10-14"})," 15.42.01.png)"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"jenkins\u9996\u754c\u9762"})}),"\n",(0,s.jsxs)(e.p,{children:["![iShot2020-10-14 15.42.22](",(0,s.jsx)(e.a,{href:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-10-14",children:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-10-14"})," 15.42.22.png)"]}),"\n",(0,s.jsx)(e.h2,{id:"6\u8bbe\u7f6ejenkins\u9ed8\u8ba4\u8bed\u8a00\u4e3a\u4e2d\u6587",children:"6.\u8bbe\u7f6ejenkins\u9ed8\u8ba4\u8bed\u8a00\u4e3a\u4e2d\u6587"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u9009\u62e9jenkins\u7ba1\u7406"})}),"\n",(0,s.jsxs)(e.p,{children:["![iShot2020-10-14 15.42.47](",(0,s.jsx)(e.a,{href:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-10-14",children:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-10-14"})," 15.42.47.png)"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u914d\u7f6e\u7cfb\u7edf"})}),"\n",(0,s.jsxs)(e.p,{children:["![iShot2020-10-14 15.43.04](",(0,s.jsx)(e.a,{href:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-10-14",children:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-10-14"})," 15.43.04.png)"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u9ed8\u8ba4\u8bed\u8a00\u586b\u5199zh_CN"})}),"\n",(0,s.jsxs)(e.p,{children:["![iShot2020-10-14 15.43.24](",(0,s.jsx)(e.a,{href:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-10-14",children:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-10-14"})," 15.43.24.png)"]})]})}function j(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>p,x:()=>a});var s=i(96540);const t={},r=s.createContext(t);function p(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:p(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);