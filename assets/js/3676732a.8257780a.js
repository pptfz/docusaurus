"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7638],{86046:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>o,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var t=s(74848),d=s(28453);const r={},p="ansible\u53d8\u91cf\u6ce8\u518cregister",a={id:"linux/\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0/ansible/ansible\u53d8\u91cf/ansible\u53d8\u91cf\u6ce8\u518cregister",title:"ansible\u53d8\u91cf\u6ce8\u518cregister",description:"ansible\u53d8\u91cf\u6ce8\u518cregister\u5c31\u662f\u5728\u6267\u884c\u7684playbook\u4e2d\u5982\u679c\u60f3\u83b7\u53d6\u67d0\u4e9b\u4fe1\u606f\uff0c\u4f46\u662fplabybook\u53c8\u4e0d\u652f\u6301\u8f93\u51fa\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\uff0c\u8fd9\u4e2a\u65f6\u5019\u4f7f\u7528register\u628a\u60f3\u8981\u83b7\u53d6\u7684\u8f93\u5165\u7684\u4fe1\u606f\u653e\u5230\u4e00\u4e2a\u53d8\u91cf\u4e2d\uff0c\u7136\u540e\u901a\u8fc7\u8fd9\u4e2a\u53d8\u91cf\u518d\u8f93\u51fa",source:"@site/docs/linux/\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0/ansible/ansible\u53d8\u91cf/ansible\u53d8\u91cf\u6ce8\u518cregister.md",sourceDirName:"linux/\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0/ansible/ansible\u53d8\u91cf",slug:"/linux/\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0/ansible/ansible\u53d8\u91cf/ansible\u53d8\u91cf\u6ce8\u518cregister",permalink:"/docs/linux/\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0/ansible/ansible\u53d8\u91cf/ansible\u53d8\u91cf\u6ce8\u518cregister",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ansible Facts\u53d8\u91cf",permalink:"/docs/linux/\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0/ansible/ansible\u53d8\u91cf/ansible Facts\u53d8\u91cf"},next:{title:"ansible\u5b9a\u4e49\u53d8\u91cf",permalink:"/docs/linux/\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0/ansible/ansible\u53d8\u91cf/ansible\u5b9a\u4e49\u53d8\u91cf"}},i={},h=[];function l(n){const e={blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"ansible\u53d8\u91cf\u6ce8\u518cregister",children:"ansible\u53d8\u91cf\u6ce8\u518cregister"}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"ansible\u53d8\u91cf\u6ce8\u518cregister\u5c31\u662f\u5728\u6267\u884c\u7684playbook\u4e2d\u5982\u679c\u60f3\u83b7\u53d6\u67d0\u4e9b\u4fe1\u606f\uff0c\u4f46\u662fplabybook\u53c8\u4e0d\u652f\u6301\u8f93\u51fa\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\uff0c\u8fd9\u4e2a\u65f6\u5019\u4f7f\u7528register\u628a\u60f3\u8981\u83b7\u53d6\u7684\u8f93\u5165\u7684\u4fe1\u606f\u653e\u5230\u4e00\u4e2a\u53d8\u91cf\u4e2d\uff0c\u7136\u540e\u901a\u8fc7\u8fd9\u4e2a\u53d8\u91cf\u518d\u8f93\u51fa"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u793a\u4f8b\uff1a\u5b89\u88c5\u542f\u52a8httpd\u7684\u540c\u65f6\u60f3\u8981\u67e5\u770bhttpd\u7684\u542f\u52a8\u72b6\u6001"}),"\n",(0,t.jsxs)(e.p,{children:["\u8fd9\u91cc\u901a\u8fc7shell\u6a21\u5757\u6267\u884c ",(0,t.jsx)(e.code,{children:"ps aux"})," \u547d\u4ee4"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-yaml",children:"- hosts: devops\n  \n  tasks:\n    - name: install httpd \n      yum: \n        name: \n          - httpd\n        state:\n          present\n    \n    - name: start httpd\n      service:\n        name: httpd\n        state: started\n\n    - name: check httpd status\n      shell:\n        ps aux|grep httpd\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u4f46\u662f\u6ca1\u6709\u5f97\u5230\u6211\u4eec\u60f3\u8981\u7684\u8f93\u51fa"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-yaml",children:"$ ansible-playbook install_httpd.yml \n\nPLAY [devops] ******************************************************************************************************************************************\n\nTASK [Gathering Facts] *********************************************************************************************************************************\nok: [devops02]\nok: [devops03]\nok: [devops01]\n\nTASK [install httpd] ***********************************************************************************************************************************\nok: [devops02]\nok: [devops03]\nok: [devops01]\n\nTASK [start httpd] *************************************************************************************************************************************\nok: [devops02]\nok: [devops03]\nok: [devops01]\n\nTASK [check httpd status] ******************************************************************************************************************************\nchanged: [devops02]\nchanged: [devops03]\nchanged: [devops01]\n\nPLAY RECAP *********************************************************************************************************************************************\ndevops01                   : ok=4    changed=1    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   \ndevops02                   : ok=4    changed=1    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   \ndevops03                   : ok=4    changed=1    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0 \n"})}),"\n",(0,t.jsx)(e.p,{children:"\u4fee\u6539\u4e00\u4e0byml\u6587\u4ef6"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-yaml",children:'- hosts: devops\n  \n  tasks:\n    - name: install httpd \n      yum: \n        name: \n          - httpd\n        state:\n          present\n    \n    - name: start httpd\n      service:\n        name: httpd\n        state: started\n\n    - name: check httpd status\n      shell:\n        ps aux|grep httpd\n      # \u8fd9\u91cc\u589e\u52a0\u4e00\u4e2aregister\u5173\u952e\u5b57\uff0c\u4e0b\u8fb9\u662f\u53d8\u91cf\u7684\u540d\u79f0\n      # register\u7684\u4f5c\u7528\u662f\u63a5\u6536\u4e0a\u4e00\u6b65shell\u6a21\u5757\u7684\u8f93\u51fa\n      register:\n        check_httpd\n        \n    - name: print output\n      debug:\n        msg: \n          "{{ check_httpd }}"\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u53ef\u4ee5\u770b\u5230\u6709\u5f88\u591a\u7684\u8f93\u51fa\uff0c\u5982\u679c\u4e0d\u60f3\u770b\u5230\u6240\u6709\u7684\u8f93\u51fa\uff0c\u5219\u9700\u8981\u6307\u5b9a\u5173\u952e\u5b57\u8f93\u51fa"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-yaml",children:'$ ansible-playbook install_httpd.yml \n\nPLAY [devops] ******************************************************************************************************************************************\n\nTASK [Gathering Facts] *********************************************************************************************************************************\nok: [devops02]\nok: [devops03]\nok: [devops01]\n\nTASK [install httpd] ***********************************************************************************************************************************\nok: [devops02]\nok: [devops03]\nok: [devops01]\n\nTASK [start httpd] *************************************************************************************************************************************\nok: [devops02]\nok: [devops03]\nok: [devops01]\n\nTASK [check httpd status] ******************************************************************************************************************************\nchanged: [devops02]\nchanged: [devops03]\nchanged: [devops01]\n\nTASK [print output] ************************************************************************************************************************************\nok: [devops01] => {\n    "msg": {\n        "changed": true, \n        "cmd": "ps aux|grep httpd", \n        "delta": "0:00:00.042416", \n        "end": "2021-09-12 23:11:20.304771", \n        "failed": false, \n        "rc": 0, \n        "start": "2021-09-12 23:11:20.262355", \n        "stderr": "", \n        "stderr_lines": [], \n        "stdout": "root     25808  0.0  0.1 224080  5036 ?        Ss   22:31   0:00 /usr/sbin/httpd -DFOREGROUND\\napache   25810  0.0  0.0 226164  3092 ?        S    22:31   0:00 /usr/sbin/httpd -DFOREGROUND\\napache   25811  0.0  0.0 226164  3092 ?        S    22:31   0:00 /usr/sbin/httpd -DFOREGROUND\\napache   25812  0.0  0.0 226164  3092 ?        S    22:31   0:00 /usr/sbin/httpd -DFOREGROUND\\napache   25813  0.0  0.0 226164  3092 ?        S    22:31   0:00 /usr/sbin/httpd -DFOREGROUND\\napache   25814  0.0  0.0 226164  3092 ?        S    22:31   0:00 /usr/sbin/httpd -DFOREGROUND\\nroot     30483 17.4  1.1 392188 44092 pts/0    Sl+  23:11   0:00 /usr/bin/python2 /usr/bin/ansible-playbook install_httpd.yml\\nroot     31578  6.0  1.1 395864 41904 pts/0    S+   23:11   0:00 /usr/bin/python2 /usr/bin/ansible-playbook install_httpd.yml\\nroot     31580 14.0  1.3 403088 49884 pts/0    S+   23:11   0:00 /usr/bin/python2 /usr/bin/ansible-playbook install_httpd.yml\\nroot     31591  7.0  1.0 394384 40928 pts/0    S+   23:11   0:00 /usr/bin/python2 /usr/bin/ansible-playbook install_httpd.yml\\nroot     31840  0.0  0.0 113280  1196 pts/4    S+   23:11   0:00 /bin/sh -c ps aux|grep httpd\\nroot     31844  0.0  0.0 112812   948 pts/4    S+   23:11   0:00 grep httpd", \n        "stdout_lines": [\n            "root     25808  0.0  0.1 224080  5036 ?        Ss   22:31   0:00 /usr/sbin/httpd -DFOREGROUND", \n            "apache   25810  0.0  0.0 226164  3092 ?        S    22:31   0:00 /usr/sbin/httpd -DFOREGROUND", \n            "apache   25811  0.0  0.0 226164  3092 ?        S    22:31   0:00 /usr/sbin/httpd -DFOREGROUND", \n            "apache   25812  0.0  0.0 226164  3092 ?        S    22:31   0:00 /usr/sbin/httpd -DFOREGROUND", \n            "apache   25813  0.0  0.0 226164  3092 ?        S    22:31   0:00 /usr/sbin/httpd -DFOREGROUND", \n            "apache   25814  0.0  0.0 226164  3092 ?        S    22:31   0:00 /usr/sbin/httpd -DFOREGROUND", \n            "root     30483 17.4  1.1 392188 44092 pts/0    Sl+  23:11   0:00 /usr/bin/python2 /usr/bin/ansible-playbook install_httpd.yml", \n            "root     31578  6.0  1.1 395864 41904 pts/0    S+   23:11   0:00 /usr/bin/python2 /usr/bin/ansible-playbook install_httpd.yml", \n            "root     31580 14.0  1.3 403088 49884 pts/0    S+   23:11   0:00 /usr/bin/python2 /usr/bin/ansible-playbook install_httpd.yml", \n            "root     31591  7.0  1.0 394384 40928 pts/0    S+   23:11   0:00 /usr/bin/python2 /usr/bin/ansible-playbook install_httpd.yml", \n            "root     31840  0.0  0.0 113280  1196 pts/4    S+   23:11   0:00 /bin/sh -c ps aux|grep httpd", \n            "root     31844  0.0  0.0 112812   948 pts/4    S+   23:11   0:00 grep httpd"\n        ]\n    }\n}\nok: [devops02] => {\n    "msg": {\n        "changed": true, \n        "cmd": "ps aux|grep httpd", \n        "delta": "0:00:00.037817", \n        "end": "2021-09-12 23:11:20.254390", \n        "failed": false, \n        "rc": 0, \n        "start": "2021-09-12 23:11:20.216573", \n        "stderr": "", \n        "stderr_lines": [], \n        "stdout": "root      3190  0.0  0.4 224084  5036 ?        Ss   22:33   0:00 /usr/sbin/httpd -DFOREGROUND\\napache    3191  0.0  0.3 226168  3092 ?        S    22:33   0:00 /usr/sbin/httpd -DFOREGROUND\\napache    3192  0.0  0.3 226168  3092 ?        S    22:33   0:00 /usr/sbin/httpd -DFOREGROUND\\napache    3193  0.0  0.3 226168  3092 ?        S    22:33   0:00 /usr/sbin/httpd -DFOREGROUND\\napache    3194  0.0  0.3 226168  3092 ?        S    22:33   0:00 /usr/sbin/httpd -DFOREGROUND\\napache    3195  0.0  0.3 226168  3092 ?        S    22:33   0:00 /usr/sbin/httpd -DFOREGROUND\\nroot      9953  0.0  0.1 113280  1196 pts/1    S+   23:11   0:00 /bin/sh -c ps aux|grep httpd\\nroot      9955  0.0  0.0 112808   952 pts/1    S+   23:11   0:00 grep httpd", \n        "stdout_lines": [\n            "root      3190  0.0  0.4 224084  5036 ?        Ss   22:33   0:00 /usr/sbin/httpd -DFOREGROUND", \n            "apache    3191  0.0  0.3 226168  3092 ?        S    22:33   0:00 /usr/sbin/httpd -DFOREGROUND", \n            "apache    3192  0.0  0.3 226168  3092 ?        S    22:33   0:00 /usr/sbin/httpd -DFOREGROUND", \n            "apache    3193  0.0  0.3 226168  3092 ?        S    22:33   0:00 /usr/sbin/httpd -DFOREGROUND", \n            "apache    3194  0.0  0.3 226168  3092 ?        S    22:33   0:00 /usr/sbin/httpd -DFOREGROUND", \n            "apache    3195  0.0  0.3 226168  3092 ?        S    22:33   0:00 /usr/sbin/httpd -DFOREGROUND", \n            "root      9953  0.0  0.1 113280  1196 pts/1    S+   23:11   0:00 /bin/sh -c ps aux|grep httpd", \n            "root      9955  0.0  0.0 112808   952 pts/1    S+   23:11   0:00 grep httpd"\n        ]\n    }\n}\nok: [devops03] => {\n    "msg": {\n        "changed": true, \n        "cmd": "ps aux|grep httpd", \n        "delta": "0:00:00.037784", \n        "end": "2021-09-12 23:11:20.266617", \n        "failed": false, \n        "rc": 0, \n        "start": "2021-09-12 23:11:20.228833", \n        "stderr": "", \n        "stderr_lines": [], \n        "stdout": "root     25572  0.0  0.4 224084  5036 ?        Ss   22:31   0:00 /usr/sbin/httpd -DFOREGROUND\\napache   25573  0.0  0.3 226168  3092 ?        S    22:31   0:00 /usr/sbin/httpd -DFOREGROUND\\napache   25574  0.0  0.3 226168  3092 ?        S    22:31   0:00 /usr/sbin/httpd -DFOREGROUND\\napache   25575  0.0  0.3 226168  3092 ?        S    22:31   0:00 /usr/sbin/httpd -DFOREGROUND\\napache   25576  0.0  0.3 226168  3092 ?        S    22:31   0:00 /usr/sbin/httpd -DFOREGROUND\\napache   25577  0.0  0.3 226168  3092 ?        S    22:31   0:00 /usr/sbin/httpd -DFOREGROUND\\nroot     30803  0.0  0.1 113280  1196 pts/0    S+   23:11   0:00 /bin/sh -c ps aux|grep httpd\\nroot     30805  0.0  0.0 112808   952 pts/0    S+   23:11   0:00 grep httpd", \n        "stdout_lines": [\n            "root     25572  0.0  0.4 224084  5036 ?        Ss   22:31   0:00 /usr/sbin/httpd -DFOREGROUND", \n            "apache   25573  0.0  0.3 226168  3092 ?        S    22:31   0:00 /usr/sbin/httpd -DFOREGROUND", \n            "apache   25574  0.0  0.3 226168  3092 ?        S    22:31   0:00 /usr/sbin/httpd -DFOREGROUND", \n            "apache   25575  0.0  0.3 226168  3092 ?        S    22:31   0:00 /usr/sbin/httpd -DFOREGROUND", \n            "apache   25576  0.0  0.3 226168  3092 ?        S    22:31   0:00 /usr/sbin/httpd -DFOREGROUND", \n            "apache   25577  0.0  0.3 226168  3092 ?        S    22:31   0:00 /usr/sbin/httpd -DFOREGROUND", \n            "root     30803  0.0  0.1 113280  1196 pts/0    S+   23:11   0:00 /bin/sh -c ps aux|grep httpd", \n            "root     30805  0.0  0.0 112808   952 pts/0    S+   23:11   0:00 grep httpd"\n        ]\n    }\n}\n\nPLAY RECAP *********************************************************************************************************************************************\ndevops01                   : ok=5    changed=1    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   \ndevops02                   : ok=5    changed=1    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   \ndevops03                   : ok=5    changed=1    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   \n'})}),"\n",(0,t.jsx)(e.p,{children:"msg\u8f93\u51fa\u7684\u5173\u952e\u5b57\u8bf4\u660e"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u5173\u952e\u5b57"}),(0,t.jsx)(e.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"changed"}),(0,t.jsx)(e.td,{children:"\u662f\u5426\u6539\u53d8"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"cmd"}),(0,t.jsx)(e.td,{children:"register\u4e0a\u4e00\u6b65\u6267\u884c\u7684\u547d\u4ee4"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"delta"}),(0,t.jsx)(e.td,{children:"\u6267\u884c\u82b1\u8d39\u7684\u65f6\u95f4"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"end"}),(0,t.jsx)(e.td,{children:"\u7ed3\u675f\u65f6\u95f4"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"failed"}),(0,t.jsx)(e.td,{children:"\u662f\u5426\u5931\u8d25"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"rc"}),(0,t.jsx)(e.td,{children:"\u8fd4\u56de0\u8868\u660e\u6267\u884c\u6210\u529f\uff0c\u8fd4\u56de1\u8868\u660e\u6267\u884c\u5931\u8d25"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"start"}),(0,t.jsx)(e.td,{children:"\u5f00\u59cb\u65f6\u95f4"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"stderr"}),(0,t.jsx)(e.td,{children:"\u9519\u8bef\u8f93\u51fa"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"stderr_lines"}),(0,t.jsx)(e.td,{children:"\u9519\u8bef\u8f93\u51fa\uff0c\u4ee5\u884c\u5c55\u793a"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"stdout"}),(0,t.jsx)(e.td,{children:"\u8f93\u51fa\u4fe1\u606f"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"stdout_lines"}),(0,t.jsx)(e.td,{children:"\u8f93\u51fa\u4fe1\u606f\uff0c\u4ee5\u884c\u5c55\u793a"})]})]})]}),"\n",(0,t.jsx)(e.p,{children:"\u518d\u6b21\u4fee\u6539yml\u6587\u4ef6\uff0c\u8fd9\u6b21\u6211\u4eec\u53ea\u83b7\u53d6rc\u4fe1\u606f"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-yaml",children:'- hosts: devops\n  \n  tasks:\n    - name: install httpd \n      yum: \n        name: \n          - httpd\n        state:\n          present\n    \n    - name: start httpd\n      service:\n        name: httpd\n        state: started\n\n    - name: check httpd status\n      shell:\n        ps aux|grep httpd\n      # \u8fd9\u91cc\u589e\u52a0\u4e00\u4e2aregister\u5173\u952e\u5b57\uff0c\u4e0b\u8fb9\u662f\u53d8\u91cf\u7684\u540d\u79f0\n      # register\u7684\u4f5c\u7528\u662f\u63a5\u6536\u4e0a\u4e00\u6b65shell\u6a21\u5757\u7684\u8f93\u51fa\n      register:\n        check_httpd\n        \n    - name: print output\n      debug:\n        msg: \n          # \u53d8\u91cf.\u5173\u952e\u5b57 \u5c31\u662f\u8f93\u51fa\u6307\u5b9a\u7684\u4fe1\u606f\n          "{{ check_httpd.rc }}"\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u53ef\u4ee5\u770b\u5230\uff0c\u53ea\u8f93\u51fa\u4e86rc\u7684\u76f8\u5173\u4fe1\u606f"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-yaml",children:'$ ansible-playbook install_httpd.yml \n\nPLAY [devops] ******************************************************************************************************************************************\n\nTASK [Gathering Facts] *********************************************************************************************************************************\nok: [devops02]\nok: [devops03]\nok: [devops01]\n\nTASK [install httpd] ***********************************************************************************************************************************\nok: [devops02]\nok: [devops03]\nok: [devops01]\n\nTASK [start httpd] *************************************************************************************************************************************\nok: [devops02]\nok: [devops03]\nok: [devops01]\n\nTASK [check httpd status] ******************************************************************************************************************************\nchanged: [devops02]\nchanged: [devops03]\nchanged: [devops01]\n\nTASK [print output] ************************************************************************************************************************************\nok: [devops01] => {\n    "msg": "0"\n}\nok: [devops02] => {\n    "msg": "0"\n}\nok: [devops03] => {\n    "msg": "0"\n}\n\nPLAY RECAP *********************************************************************************************************************************************\ndevops01                   : ok=5    changed=1    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   \ndevops02                   : ok=5    changed=1    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   \ndevops03                   : ok=5    changed=1    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0\n'})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"ansible\u53d8\u91cf\u6ce8\u518cregister\u7684\u4f7f\u7528\u6b65\u9aa4\u5982\u4e0b"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"1.ansible playbook\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u65e0\u6cd5\u76f4\u63a5\u8f93\u51fa\uff0c\u56e0\u6b64\u4f7f\u7528register\u6765\u83b7\u53d6\u6211\u4eec\u60f3\u8981\u7684\u8f93\u51fa\u7ed3\u679c\uff0c\u4f8b\u5982\u60f3\u8981\u83b7\u53d6shell\u6a21\u5757\u6267\u884c\u7684\u547d\u4ee4\u7684\u8f93\u51fa"}),"\n",(0,t.jsx)(e.p,{children:"2.register\u7684\u4f5c\u7528\u5c31\u662f\u5c06\u547d\u4ee4\u7684\u8f93\u51fa\u4fdd\u5b58\u5230\u4e00\u4e2a\u53d8\u91cf\u4e2d\uff0c\u53d8\u91cf\u540d\u4efb\u610f"}),"\n",(0,t.jsx)(e.p,{children:"3.\u901a\u8fc7debug\u6a21\u5757\u7684msg\u65b9\u6cd5\u8f93\u51fa\u5168\u90e8\u7ed3\u679c\uff0c\u5982\u679c\u60f3\u8981\u6307\u5b9a\u67d0\u4e9b\u5b57\u6bb5\u7684\u8f93\u51fa\uff0c\u5219\u9700\u8981\u4f7f\u7528 \u53d8\u91cf\u540d.\u5173\u952e\u5b57 \u7684\u65b9\u6cd5\u6765\u83b7\u53d6\u6307\u5b9a\u7684\u8f93\u51fa"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-yaml",children:'   - name: check httpd status\n      shell:\n        ps aux|grep httpd\n      # \u8fd9\u91cc\u589e\u52a0\u4e00\u4e2aregister\u5173\u952e\u5b57\uff0c\u4e0b\u8fb9\u662f\u53d8\u91cf\u7684\u540d\u79f0\n      # register\u7684\u4f5c\u7528\u662f\u63a5\u6536\u4e0a\u4e00\u6b65shell\u6a21\u5757\u7684\u8f93\u51fa\n      register:\n        check_httpd\n        \n    - name: print output\n      debug:\n        msg: \n          # \u53d8\u91cf.\u5173\u952e\u5b57 \u5c31\u662f\u8f93\u51fa\u6307\u5b9a\u7684\u4fe1\u606f\n          "{{ check_httpd.rc }}"\n'})})]})}function o(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>p,x:()=>a});var t=s(96540);const d={},r=t.createContext(d);function p(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:p(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);