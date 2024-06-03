"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2367],{53723:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(74848),i=n(28453);const o={},d="supervisor\u7ba1\u7406redis",l={id:"linux/linux\u670d\u52a1/supervisor/supervisor\u7ba1\u7406redis",title:"supervisor\u7ba1\u7406redis",description:"supervisor\u914d\u7f6e\u6587\u4ef6 /etc/supervisor/supervisord.conf \u4e2d\u5b9a\u4e49\u4e86include\uff0c\u56e0\u6b64\u5982\u679c\u60f3\u8981\u7ba1\u7406\u670d\u52a1\uff0c\u5c31\u9700\u8981\u7f16\u8f91 /etc/supervisor/config.d/*.ini \u6587\u4ef6",source:"@site/docs/linux/linux\u670d\u52a1/supervisor/supervisor\u7ba1\u7406redis.md",sourceDirName:"linux/linux\u670d\u52a1/supervisor",slug:"/linux/linux\u670d\u52a1/supervisor/supervisor\u7ba1\u7406redis",permalink:"/docs/linux/linux\u670d\u52a1/supervisor/supervisor\u7ba1\u7406redis",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"supervisor\u7ba1\u7406php",permalink:"/docs/linux/linux\u670d\u52a1/supervisor/supervisor\u7ba1\u7406php"},next:{title:"supervisor\u7ba1\u7406tomcat",permalink:"/docs/linux/linux\u670d\u52a1/supervisor/supervisor\u7ba1\u7406tomcat"}},t={},c=[];function a(e){const s={admonition:"admonition",code:"code",h1:"h1",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"supervisor\u7ba1\u7406redis",children:"supervisor\u7ba1\u7406redis"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.strong,{children:["supervisor\u914d\u7f6e\u6587\u4ef6 ",(0,r.jsx)(s.code,{children:"/etc/supervisor/supervisord.conf"})," \u4e2d\u5b9a\u4e49\u4e86include\uff0c\u56e0\u6b64\u5982\u679c\u60f3\u8981\u7ba1\u7406\u670d\u52a1\uff0c\u5c31\u9700\u8981\u7f16\u8f91 ",(0,r.jsx)(s.code,{children:"/etc/supervisor/config.d/*.ini"})," \u6587\u4ef6"]})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"[include] \nfiles = /etc/supervisor/config.d/*.ini\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"supervisor\u7ba1\u7406redis\u6709\u4e00\u4e2a\u5f88\u5947\u602a\u7684\u95ee\u9898"})}),"\n",(0,r.jsxs)(s.admonition,{type:"tip",children:[(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsxs)("span",{style:{color:"red"},children:["redis\u914d\u7f6e\u6587\u4ef6\u4e2d\u5982\u679c\u914d\u7f6e\u4e86\xa0",(0,r.jsx)(s.code,{children:"daemonize yes"})," \u7528supervisor\u7ba1\u7406\u7684\u65f6\u5019\u662f\u4f1a\u62a5\u9519\u5982\u4e0b\xa0",(0,r.jsx)(s.code,{children:"redis                            FATAL     Exited too quickly (process log may have details)"})," \uff0c\u867d\u7136\u6709\u62a5\u9519\u4f46\u662fredis\u8fdb\u7a0b\u5374\u662f\u6b63\u5e38\u8fd0\u884c\u7684\uff0c\u8fdb\u7a0b\u5728\u7aef\u53e3\u4e5f\u80fd\u542f\u52a8\uff01\uff01\uff01"]})})}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsxs)("span",{style:{color:"red"},children:["\u5982\u679c\u628a",(0,r.jsx)(s.code,{children:"daemonize"}),"\u6539\u6210",(0,r.jsx)(s.code,{children:"no"}),"\u5219\u6ca1\u6709\u95ee\u9898\uff0c\u4f46\u662f\u8fd9\u6837\u5c31\u4e0d\u80fd\u628aredis\u4ee5\u5b88\u62a4\u8fdb\u7a0b\u7684\u65b9\u5f0f\u8fd0\u884c\u4e86"]})})})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"daemonize"})," \u8bbe\u7f6e ",(0,r.jsx)(s.code,{children:"yes"})," \u6216\u8005 ",(0,r.jsx)(s.code,{children:"no"})," \u533a\u522b"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"yes"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["redis\u91c7\u7528\u7684\u662f\u5355\u8fdb\u7a0b\u591a\u7ebf\u7a0b\u7684\u6a21\u5f0f\u3002\u5f53 ",(0,r.jsx)(s.code,{children:"redis.conf"})," \u4e2d\u9009\u9879 ",(0,r.jsx)(s.code,{children:"daemonize"})," \u8bbe\u7f6e\u6210yes\u65f6\uff0c\u4ee3\u8868\u5f00\u542f\u5b88\u62a4\u8fdb\u7a0b\u6a21\u5f0f\u3002\u5728\u8be5\u6a21\u5f0f\u4e0b\uff0credis\u4f1a\u5728\u540e\u53f0\u8fd0\u884c\uff0c\u5e76\u5c06\u8fdb\u7a0bpid\u53f7\u5199\u5165\u81f3",(0,r.jsx)(s.code,{children:"redis.conf"})," \u9009\u9879 ",(0,r.jsx)(s.code,{children:"pidfile"})," \u8bbe\u7f6e\u7684\u6587\u4ef6\u4e2d\uff0c\u6b64\u65f6redis\u5c06\u4e00\u76f4\u8fd0\u884c\uff0c\u9664\u975e\u624b\u52a8kill\u8be5\u8fdb\u7a0b\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"no"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u5f53 ",(0,r.jsx)(s.code,{children:"daemonize"})," \u9009\u9879\u8bbe\u7f6e\u6210no\u65f6\uff0c\u5f53\u524d\u754c\u9762\u5c06\u8fdb\u5165redis\u7684\u547d\u4ee4\u884c\u754c\u9762\uff0cexit\u5f3a\u5236\u9000\u51fa\u6216\u8005\u5173\u95ed\u8fde\u63a5\u5de5\u5177(putty,xshell\u7b49)\u90fd\u4f1a\u5bfc\u81f4redis\u8fdb\u7a0b\u9000\u51fa\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.strong,{children:["\u7f16\u8f91redis\u670d\u52a1\u914d\u7f6e\u6587\u4ef6 ",(0,r.jsx)(s.code,{children:"/etc/supervisor/config.d/redis.ini"})]})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"cat > /etc/supervisor/config.d/redis.ini <<'EOF'\n[program:redis]\ncommand=/usr/local/redis-5.0.7/src/redis-server /etc/redis/6379/redis.conf\ndirectory=/usr/local/redis-5.0.7/src\nautostart=true\nstdout_logfile=/var/log/supervisor/redis.log\nEOF\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u5c06redis\u52a0\u5165supervisor"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"$ supervisorctl update redis\nredis: added process group\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u67e5\u770b\u72b6\u6001"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"$ supervisorctl status redis\nredis                            RUNNING   pid 15430, uptime 0:00:06\n"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u8be6\u7ec6\u914d\u7f6e"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"[program:redis]\ncommand=/usr/local/bin/redis-server /data/db/redis/cfg/redis.conf\ndirectory=/usr/local/redis/src/\nautostart=true\nstdout_logfile=/var/log/supervisord/redis.log\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"redis\u914d\u7f6e\u6587\u4ef6"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:'daemonize yes\npidfile /data/db/redis/pid/redis_6379.pid\nport 6379\ntcp-backlog 511\ntimeout 300\ntcp-keepalive 0\nloglevel notice\nlogfile "/data/db/redis/logs/redis_6379.log"\ndatabases 16\nsave 7200 1\nstop-writes-on-bgsave-error yes\nrdbcompression yes\nrdbchecksum yes\ndbfilename dump_6379.rdb\ndir /data/db/redis/data\nslave-serve-stale-data yes\nslave-read-only yes\nrepl-diskless-sync yes\nrepl-diskless-sync-delay 5\nrepl-disable-tcp-nodelay no\nslave-priority 100\nprotected-mode no\nmaxmemory 4gb\nappendonly no\nappendfilename "appendonly_6379.aof"\nno-appendfsync-on-rewrite no \nauto-aof-rewrite-percentage 50\nauto-aof-rewrite-min-size 64mb\naof-load-truncated yes\nlua-time-limit 5000\nslowlog-log-slower-than 50000\nslowlog-max-len 1024\nlatency-monitor-threshold 0\nnotify-keyspace-events ""\nhash-max-ziplist-entries 512\nhash-max-ziplist-value 64\nlist-max-ziplist-entries 512\nlist-max-ziplist-value 64\nset-max-intset-entries 512\nzset-max-ziplist-entries 128\nzset-max-ziplist-value 64\nhll-sparse-max-bytes 3000\nactiverehashing yes\nclient-output-buffer-limit normal 0 0 0\nclient-output-buffer-limit slave 256mb 64mb 60\nclient-output-buffer-limit pubsub 32mb 8mb 60\nhz 10\naof-rewrite-incremental-fsync yes\n'})})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>l});var r=n(96540);const i={},o=r.createContext(i);function d(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);