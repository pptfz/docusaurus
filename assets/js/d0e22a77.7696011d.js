"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1200],{19338:(n,e,d)=>{d.r(e),d.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>r});var p=d(74848),i=d(28453);const a={},c="\u5b89\u88c5phpLDAPadmin\u7ba1\u7406LDAP",s={id:"linux/linux\u670d\u52a1/ldap/\u5b89\u88c5phpLDAPadmin\u7ba1\u7406LDAP",title:"\u5b89\u88c5phpLDAPadmin\u7ba1\u7406LDAP",description:"phpLDAPadmin\u5b98\u7f51",source:"@site/docs/linux/linux\u670d\u52a1/ldap/\u5b89\u88c5phpLDAPadmin\u7ba1\u7406LDAP.md",sourceDirName:"linux/linux\u670d\u52a1/ldap",slug:"/linux/linux\u670d\u52a1/ldap/\u5b89\u88c5phpLDAPadmin\u7ba1\u7406LDAP",permalink:"/docs/linux/linux\u670d\u52a1/ldap/\u5b89\u88c5phpLDAPadmin\u7ba1\u7406LDAP",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"phpLDAPadmin\u521b\u5efa\u7528\u6237",permalink:"/docs/linux/linux\u670d\u52a1/ldap/phpLDAPadmin\u521b\u5efa\u7528\u6237"},next:{title:"centos7\u642d\u5efaNFS",permalink:"/docs/linux/linux\u670d\u52a1/nfs/centos7\u642d\u5efaNFS"}},l={},r=[{value:"\u6807\u51c6\u5b89\u88c5",id:"\u6807\u51c6\u5b89\u88c5",level:2},{value:"1.\u5b89\u88c5phpldapadmin",id:"1\u5b89\u88c5phpldapadmin",level:3},{value:"2.\u914d\u7f6ephpldapadmin",id:"2\u914d\u7f6ephpldapadmin",level:3},{value:"2.1 \u7f16\u8f91 <code>/etc/httpd/conf.d/phpldapadmin.conf</code> \u5141\u8bb8\u4ece\u8fdc\u7a0b\u8bbf\u95ee",id:"21-\u7f16\u8f91-etchttpdconfdphpldapadminconf-\u5141\u8bb8\u4ece\u8fdc\u7a0b\u8bbf\u95ee",level:4},{value:"2.2 \u7f16\u8f91 <code>/etc/httpd/conf/httpd.conf</code>",id:"22-\u7f16\u8f91-etchttpdconfhttpdconf",level:4},{value:"2.3 \u7f16\u8f91 <code>/etc/phpldapadmin/config.php</code>",id:"23-\u7f16\u8f91-etcphpldapadminconfigphp",level:4},{value:"2.4 \u91cd\u542fhttpd",id:"24-\u91cd\u542fhttpd",level:4},{value:"3.\u8bbf\u95eephpldapadmin",id:"3\u8bbf\u95eephpldapadmin",level:3},{value:"4.\u89e3\u51b3 phpldapadmin\u7ba1\u7406\u9875\u9762\u63d0\u793a <code>This base cannot be created with PLA</code> \u95ee\u9898",id:"4\u89e3\u51b3-phpldapadmin\u7ba1\u7406\u9875\u9762\u63d0\u793a-this-base-cannot-be-created-with-pla-\u95ee\u9898",level:3},{value:"5.\u5173\u95ed\u533f\u540d\u8bbf\u95ee",id:"5\u5173\u95ed\u533f\u540d\u8bbf\u95ee",level:3},{value:"6.\u89e3\u51b3\u6a21\u7248\u4e0d\u80fd\u4f7f\u7528\u95ee\u9898",id:"6\u89e3\u51b3\u6a21\u7248\u4e0d\u80fd\u4f7f\u7528\u95ee\u9898",level:3},{value:"6.1 \u5bfc\u5165\u57fa\u672cschema",id:"61-\u5bfc\u5165\u57fa\u672cschema",level:4},{value:"6.2 \u7f16\u8f91 <code>/etc/phpldapadmin/config.php</code>",id:"62-\u7f16\u8f91-etcphpldapadminconfigphp",level:4},{value:"docker\u5b89\u88c5",id:"docker\u5b89\u88c5",level:2}];function t(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...n.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(e.h1,{id:"\u5b89\u88c5phpldapadmin\u7ba1\u7406ldap",children:"\u5b89\u88c5phpLDAPadmin\u7ba1\u7406LDAP"}),"\n",(0,p.jsx)(e.p,{children:(0,p.jsx)(e.a,{href:"http://phpldapadmin.sourceforge.net/wiki/index.php/Main_Page",children:"phpLDAPadmin\u5b98\u7f51"})}),"\n",(0,p.jsx)(e.h2,{id:"\u6807\u51c6\u5b89\u88c5",children:"\u6807\u51c6\u5b89\u88c5"}),"\n",(0,p.jsx)(e.h3,{id:"1\u5b89\u88c5phpldapadmin",children:"1.\u5b89\u88c5phpldapadmin"}),"\n",(0,p.jsxs)(e.blockquote,{children:["\n",(0,p.jsx)(e.p,{children:(0,p.jsx)(e.strong,{children:"\u5b89\u88c5phpldapadmin\u4f1a\u540c\u65f6\u5b89\u88c5php5.4\u4ee5\u53cahttpd2.4"})}),"\n"]}),"\n",(0,p.jsx)(e.pre,{children:(0,p.jsx)(e.code,{className:"language-shell",children:"yum -y install phpldapadmin\n"})}),"\n",(0,p.jsx)(e.p,{children:(0,p.jsx)(e.strong,{children:"\u67e5\u770b\u5b89\u88c5"})}),"\n",(0,p.jsx)(e.pre,{children:(0,p.jsx)(e.code,{className:"language-shell",children:"$ rpm -qa | grep  phpldapadmin\nphpldapadmin-1.2.5-1.el7.noarch\n"})}),"\n",(0,p.jsx)(e.h3,{id:"2\u914d\u7f6ephpldapadmin",children:"2.\u914d\u7f6ephpldapadmin"}),"\n",(0,p.jsxs)(e.h4,{id:"21-\u7f16\u8f91-etchttpdconfdphpldapadminconf-\u5141\u8bb8\u4ece\u8fdc\u7a0b\u8bbf\u95ee",children:["2.1 \u7f16\u8f91 ",(0,p.jsx)(e.code,{children:"/etc/httpd/conf.d/phpldapadmin.conf"})," \u5141\u8bb8\u4ece\u8fdc\u7a0b\u8bbf\u95ee"]}),"\n",(0,p.jsx)(e.pre,{children:(0,p.jsx)(e.code,{className:"language-shell",children:"# \u5907\u4efd\u6587\u4ef6\ncp /etc/httpd/conf.d/phpldapadmin.conf{,.old}\n\n# \u91cd\u65b0\u7f16\u8f91\u6587\u4ef6\ncat > /etc/httpd/conf.d/phpldapadmin.conf <<EOF\nAlias /phpldapadmin /usr/share/phpldapadmin/htdocs\nAlias /ldapadmin /usr/share/phpldapadmin/htdocs\n\n<Directory /usr/share/phpldapadmin/htdocs>\n  Order Deny,Allow\n  Allow from all\n</Directory>\nEOF\n"})}),"\n",(0,p.jsxs)(e.h4,{id:"22-\u7f16\u8f91-etchttpdconfhttpdconf",children:["2.2 \u7f16\u8f91 ",(0,p.jsx)(e.code,{children:"/etc/httpd/conf/httpd.conf"})]}),"\n",(0,p.jsx)(e.pre,{children:(0,p.jsx)(e.code,{className:"language-shell",children:"# \u6ce8\u91ca102\u884c\u5230105\u884c\n<Directory />\n    AllowOverride none\n    Require all denied\n</Directory>\n\n# 106\u884c\u65b0\u589e\u5982\u4e0b\n<Directory />\n    Options Indexes FollowSymLinks\n    AllowOverride None\n</Directory>\n"})}),"\n",(0,p.jsxs)(e.h4,{id:"23-\u7f16\u8f91-etcphpldapadminconfigphp",children:["2.3 \u7f16\u8f91 ",(0,p.jsx)(e.code,{children:"/etc/phpldapadmin/config.php"})]}),"\n",(0,p.jsxs)(e.blockquote,{children:["\n",(0,p.jsx)(e.p,{children:(0,p.jsx)(e.strong,{children:"\u914d\u7f6e\u4f7f\u7528dn\u767b\u9646"})}),"\n"]}),"\n",(0,p.jsx)(e.pre,{children:(0,p.jsx)(e.code,{className:"language-shell",children:"\u4fee\u6539\n\t$servers->setValue('login','attr','uid');\n\u4fee\u6539\u4e3a\n\t$servers->setValue('login','attr','dn');\n"})}),"\n",(0,p.jsx)(e.h4,{id:"24-\u91cd\u542fhttpd",children:"2.4 \u91cd\u542fhttpd"}),"\n",(0,p.jsx)(e.pre,{children:(0,p.jsx)(e.code,{className:"language-shell",children:"systemctl restart httpd\n"})}),"\n",(0,p.jsx)(e.h3,{id:"3\u8bbf\u95eephpldapadmin",children:"3.\u8bbf\u95eephpldapadmin"}),"\n",(0,p.jsxs)(e.p,{children:["\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,p.jsx)(e.code,{children:"IP/phpldapadmin"})]}),"\n",(0,p.jsx)(e.p,{children:"\u8bbf\u95ee\u9996\u9875\u9762"}),"\n",(0,p.jsx)(e.p,{children:(0,p.jsx)(e.img,{src:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2021-07-01%2014.55.33.png",alt:"iShot2021-07-01 14.55.33"})}),"\n",(0,p.jsxs)(e.blockquote,{children:["\n",(0,p.jsx)(e.p,{children:(0,p.jsxs)(e.strong,{children:["\u4e4b\u524d\u642d\u5efaopenldap\u670d\u52a1\u7aef\u4e2d\u8bbe\u7f6e\u7684\u7528\u6237\u540d\u4e3a ",(0,p.jsx)(e.code,{children:"cn=ldap,dc=pptfz,dc=com"}),"\uff0c\u5bc6\u7801\u4e3a ",(0,p.jsx)(e.code,{children:"123456"})]})}),"\n"]}),"\n",(0,p.jsxs)(e.p,{children:["\u7528\u6237\u540d\u4e3a ",(0,p.jsx)(e.code,{children:"cn=ldap,dc=pptfz,dc=com"})]}),"\n",(0,p.jsxs)(e.p,{children:["\u5bc6\u7801\u4e3a ",(0,p.jsx)(e.code,{children:"123456"})]}),"\n",(0,p.jsx)(e.p,{children:(0,p.jsx)(e.img,{src:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2021-07-01%2014.56.57.png",alt:"iShot2021-07-01 14.56.57"})}),"\n",(0,p.jsxs)(e.h3,{id:"4\u89e3\u51b3-phpldapadmin\u7ba1\u7406\u9875\u9762\u63d0\u793a-this-base-cannot-be-created-with-pla-\u95ee\u9898",children:["4.\u89e3\u51b3 phpldapadmin\u7ba1\u7406\u9875\u9762\u63d0\u793a ",(0,p.jsx)(e.code,{children:"This base cannot be created with PLA"})," \u95ee\u9898"]}),"\n",(0,p.jsxs)(e.p,{children:["phpldapadmin\u767b\u9646\u6210\u529f\u540e\u4f1a\u62a5\u9519 ",(0,p.jsx)(e.code,{children:"This base cannot be created with PLA"})]}),"\n",(0,p.jsx)(e.p,{children:(0,p.jsx)(e.img,{src:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2021-07-01%2014.57.52.png",alt:"iShot2021-07-01 14.57.52"})}),"\n",(0,p.jsx)(e.p,{children:(0,p.jsx)(e.strong,{children:"\u89e3\u51b3\u65b9\u6cd5"})}),"\n",(0,p.jsxs)(e.p,{children:["\u5728 ",(0,p.jsx)(e.code,{children:"/etc/openldap"})," \u76ee\u5f55\u4e0b\u65b0\u5efa\u4e00\u4e2a ",(0,p.jsx)(e.code,{children:"base.ldif"})," \u6587\u4ef6\uff0c\u4e3a\u521d\u59cb\u5316\u6839\u8282\u70b9\u505a\u51c6\u5907\u5de5\u4f5c\uff0c\u8fd9\u91cc\u9700\u8981\u4fee\u6539dn\u4e00\u884c\u4e3a\u81ea\u5df1\u7684\u4fe1\u606f"]}),"\n",(0,p.jsx)(e.pre,{children:(0,p.jsx)(e.code,{className:"language-shell",children:"cat > /etc/openldap/base.ldif <<EOF\ndn: dc=pptfz,dc=com\no: ldap\nobjectclass: dcObject\nobjectclass: organization\nEOF\n"})}),"\n",(0,p.jsx)(e.p,{children:"\u6267\u884c\u547d\u4ee4\uff0c\u4f1a\u63d0\u793a\u8f93\u5165\u5bc6\u7801\uff0c\u8fd9\u91cc\u8f93\u5165\u642d\u5efaopenldap\u65f6\u8bbe\u7f6e\u7684\u7ba1\u7406\u5458\u5bc6\u7801"}),"\n",(0,p.jsx)(e.pre,{children:(0,p.jsx)(e.code,{className:"language-shell",children:'$ ldapadd -f /etc/openldap/base.ldif -x -D cn=admin,dc=pptfz,dc=com -W\nEnter LDAP Password: \nadding new entry "dc=pptfz,dc=com"\n'})}),"\n",(0,p.jsx)(e.p,{children:"\u6267\u884c\u6210\u529f\u540e\u91cd\u65b0\u767b\u9646 phpldapadmin\uff0c\u53ef\u4ee5\u770b\u5230\u4e4b\u524d\u7684\u62a5\u9519\u5df2\u7ecf\u6ca1\u6709\u4e86"}),"\n",(0,p.jsx)(e.p,{children:(0,p.jsx)(e.img,{src:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2021-07-01%2015.16.16.png",alt:"iShot2021-07-01 15.16.16"})}),"\n",(0,p.jsx)(e.h3,{id:"5\u5173\u95ed\u533f\u540d\u8bbf\u95ee",children:"5.\u5173\u95ed\u533f\u540d\u8bbf\u95ee"}),"\n",(0,p.jsx)(e.p,{children:"ldap\u9ed8\u8ba4\u662f\u5141\u8bb8\u533f\u540d\u8bbf\u95ee\u7684"}),"\n",(0,p.jsx)(e.p,{children:(0,p.jsx)(e.img,{src:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2021-07-01%2018.09.42.png",alt:"iShot2021-07-01 18.09.42"})}),"\n",(0,p.jsxs)(e.p,{children:["\u7f16\u8f91 ",(0,p.jsx)(e.code,{children:"/etc/phpldapadmin/config.php"})]}),"\n",(0,p.jsx)(e.pre,{children:(0,p.jsx)(e.code,{className:"language-shell",children:"# \u5173\u95ed\u533f\u540d\u8bbf\u95ee\n\u4fee\u6539\n\t// $servers->setValue('login','anon_bind',true);\n\u4fee\u6539\u4e3a\n\t$servers->setValue('login','anon_bind',false);\n\t\n# \u8bbe\u7f6e\u53ea\u6709\u7ba1\u7406\u5458\u80fd\u767b\u9646\n\u5728\u4e0a\u8fb9\u90a3\u884c\u4e0b\u65b0\u589e\u4e00\u884c\n\t$servers->setValue('login','allowed_dns',array('cn=admin,dc=pptfz,dc=com'));\n"})}),"\n",(0,p.jsx)(e.p,{children:"\u91cd\u542f\u670d\u52a1"}),"\n",(0,p.jsx)(e.pre,{children:(0,p.jsx)(e.code,{className:"language-shell",children:"systemctl restart slapd\n"})}),"\n",(0,p.jsx)(e.p,{children:"\u914d\u7f6e\u5b8c\u6210\u540e\u533f\u540d\u767b\u9646\u6309\u94ae\u5c31\u53d6\u6d88\u4e86"}),"\n",(0,p.jsx)(e.p,{children:(0,p.jsx)(e.img,{src:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2021-07-01%2018.16.55.png",alt:"iShot2021-07-01 18.16.55"})}),"\n",(0,p.jsx)(e.h3,{id:"6\u89e3\u51b3\u6a21\u7248\u4e0d\u80fd\u4f7f\u7528\u95ee\u9898",children:"6.\u89e3\u51b3\u6a21\u7248\u4e0d\u80fd\u4f7f\u7528\u95ee\u9898"}),"\n",(0,p.jsx)(e.p,{children:"\u6709\u4e9b\u6a21\u7248\u63d0\u793a\u4e0d\u80fd\u4f7f\u7528"}),"\n",(0,p.jsx)(e.p,{children:(0,p.jsx)(e.img,{src:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2021-07-01%2015.23.17.png",alt:"iShot2021-07-01 15.23.17"})}),"\n",(0,p.jsx)(e.h4,{id:"61-\u5bfc\u5165\u57fa\u672cschema",children:"6.1 \u5bfc\u5165\u57fa\u672cschema"}),"\n",(0,p.jsxs)(e.p,{children:["\u5bfc\u5165 ",(0,p.jsx)(e.code,{children:"cosine.ldif"})]}),"\n",(0,p.jsx)(e.pre,{children:(0,p.jsx)(e.code,{className:"language-shell",children:'$ ldapadd -Y EXTERNAL -H ldapi:/// -f /etc/openldap/schema/cosine.ldif\n\nSASL/EXTERNAL authentication started\nSASL username: gidNumber=0+uidNumber=0,cn=peercred,cn=external,cn=auth\nSASL SSF: 0\nadding new entry "cn=cosine,cn=schema,cn=config"\n'})}),"\n",(0,p.jsxs)(e.p,{children:["\u5bfc\u5165 ",(0,p.jsx)(e.code,{children:"nis.ldif"})]}),"\n",(0,p.jsx)(e.pre,{children:(0,p.jsx)(e.code,{className:"language-sh",children:'$ ldapadd -Y EXTERNAL -H ldapi:/// -f /etc/openldap/schema/nis.ldif\n\nSASL/EXTERNAL authentication started\nSASL username: gidNumber=0+uidNumber=0,cn=peercred,cn=external,cn=auth\nSASL SSF: 0\nadding new entry "cn=nis,cn=schema,cn=config"\n'})}),"\n",(0,p.jsxs)(e.p,{children:["\u5bfc\u5165 ",(0,p.jsx)(e.code,{children:"inetorgperson.ldif"})]}),"\n",(0,p.jsx)(e.pre,{children:(0,p.jsx)(e.code,{className:"language-shell",children:'$ ldapadd -Y EXTERNAL -H ldapi:/// -f /etc/openldap/schema/inetorgperson.ldif\n\nSASL/EXTERNAL authentication started\nSASL username: gidNumber=0+uidNumber=0,cn=peercred,cn=external,cn=auth\nSASL SSF: 0\nadding new entry "cn=inetorgperson,cn=schema,cn=config"\n'})}),"\n",(0,p.jsxs)(e.h4,{id:"62-\u7f16\u8f91-etcphpldapadminconfigphp",children:["6.2 \u7f16\u8f91 ",(0,p.jsx)(e.code,{children:"/etc/phpldapadmin/config.php"})]}),"\n",(0,p.jsx)(e.pre,{children:(0,p.jsx)(e.code,{className:"language-shell",children:"# \u5907\u4efd\u6587\u4ef6\ncp /etc/phpldapadmin/config.php{,.old}\n\n# 530\u884c\u5de6\u53f3\u63d2\u5165\u4ee5\u4e0b\u5185\u5bb9\n$servers->newServer('ldap_pla');\n$servers->setValue('server','name','LDAP Server');\n$servers->setValue('server','host','127.0.0.1');\n$servers->setValue('server','port',389);\n$servers->setValue('server','base',array('dc=pptfz,dc=com'));   // \u9700\u8981\u4fee\u6539\n$servers->setValue('login','auth_type','cookie');\n$servers->setValue('login','bind_id','cn=admin,dc=pptfz,dc=com'); // \u9700\u8981\u4fee\u6539\n$servers->setValue('login','bind_pass','123456'); // \u9700\u8981\u4fee\u6539\u7ba1\u7406\u5458\u5bc6\u7801\n$servers->setValue('server','tls',false);\n"})}),"\n",(0,p.jsx)(e.p,{children:(0,p.jsx)(e.strong,{children:"\u91cd\u542f\u670d\u52a1"})}),"\n",(0,p.jsx)(e.pre,{children:(0,p.jsx)(e.code,{children:"systemctl restart slapd httpd\n"})}),"\n",(0,p.jsx)(e.p,{children:"\u6a21\u677f\u4e0d\u80fd\u4f7f\u7528\u63d0\u793a\u6ca1\u4e86"}),"\n",(0,p.jsx)(e.p,{children:(0,p.jsx)(e.img,{src:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2021-07-01%2015.39.58.png",alt:"iShot2021-07-01 15.39.58"})}),"\n",(0,p.jsx)(e.h2,{id:"docker\u5b89\u88c5",children:"docker\u5b89\u88c5"}),"\n",(0,p.jsx)(e.p,{children:(0,p.jsx)(e.a,{href:"https://github.com/osixia/docker-phpLDAPadmin",children:"phpldapadmin github\u5730\u5740"})}),"\n",(0,p.jsx)(e.p,{children:"\u542f\u52a8\u5bb9\u5668"}),"\n",(0,p.jsx)(e.pre,{children:(0,p.jsx)(e.code,{className:"language-shell",children:"docker run \\\n  -d \\\n  -p 8081:80 \\\n  -v phpldapadmin:/container/service/phpldapadmin/assets/config \\\n  --privileged \\\n  --name phpldapadmin \\\n  --hostname phpldapadmin \\\n  --env PHPLDAPADMIN_HTTPS=false \\\n  --env PHPLDAPADMIN_LDAP_HOSTS=10.0.8.4 \\\n  --restart=always \\\n  --detach \\\n  osixia/phpldapadmin:0.9.0\n"})}),"\n",(0,p.jsx)(e.p,{children:"\u6d4f\u89c8\u5668\u8bbf\u95ee"}),"\n",(0,p.jsx)(e.p,{children:(0,p.jsx)(e.code,{children:"IP:\u7aef\u53e3"})}),"\n",(0,p.jsx)(e.p,{children:(0,p.jsx)(e.img,{src:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot_2022-09-09_22.16.56.png",alt:"iShot_2022-09-09_22.16.56"})}),"\n",(0,p.jsx)(e.p,{children:"\u767b\u5f55\u540e"}),"\n",(0,p.jsx)(e.p,{children:(0,p.jsx)(e.img,{src:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot_2022-09-09_22.17.54.png",alt:"iShot_2022-09-09_22.17.54"})})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,p.jsx)(e,{...n,children:(0,p.jsx)(t,{...n})}):t(n)}},28453:(n,e,d)=>{d.d(e,{R:()=>c,x:()=>s});var p=d(96540);const i={},a=p.createContext(i);function c(n){const e=p.useContext(a);return p.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),p.createElement(a.Provider,{value:e},n.children)}}}]);