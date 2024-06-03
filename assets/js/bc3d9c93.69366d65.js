"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4815],{96598:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var l=s(74848),a=s(28453);const r={},d="ansible\u5b9a\u4e49\u53d8\u91cf",o={id:"linux/\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0/ansible/ansible\u53d8\u91cf/ansible\u5b9a\u4e49\u53d8\u91cf",title:"ansible\u5b9a\u4e49\u53d8\u91cf",description:"[toc]",source:"@site/docs/linux/\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0/ansible/ansible\u53d8\u91cf/ansible\u5b9a\u4e49\u53d8\u91cf.md",sourceDirName:"linux/\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0/ansible/ansible\u53d8\u91cf",slug:"/linux/\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0/ansible/ansible\u53d8\u91cf/ansible\u5b9a\u4e49\u53d8\u91cf",permalink:"/docs/linux/\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0/ansible/ansible\u53d8\u91cf/ansible\u5b9a\u4e49\u53d8\u91cf",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ansible\u53d8\u91cf\u6ce8\u518cregister",permalink:"/docs/linux/\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0/ansible/ansible\u53d8\u91cf/ansible\u53d8\u91cf\u6ce8\u518cregister"},next:{title:"ansible\u57fa\u7840\u77e5\u8bc6",permalink:"/docs/linux/\u81ea\u52a8\u5316\u8fd0\u7ef4\u5e73\u53f0/ansible/ansible\u57fa\u7840/ansible\u57fa\u7840\u77e5\u8bc6"}},i={},c=[{value:"1.ansible\u5b9a\u4e49\u53d8\u91cf",id:"1ansible\u5b9a\u4e49\u53d8\u91cf",level:2},{value:"1.1 \u5728playbook\u4e2d\u7684play\u8fdb\u884c\u5b9a\u4e49",id:"11-\u5728playbook\u4e2d\u7684play\u8fdb\u884c\u5b9a\u4e49",level:3},{value:"1.2 \u901a\u8fc7inventory\u4e3b\u673a\u6e05\u5355\u8fdb\u884c\u5b9a\u4e49",id:"12-\u901a\u8fc7inventory\u4e3b\u673a\u6e05\u5355\u8fdb\u884c\u5b9a\u4e49",level:3},{value:"1.2.1 <code>group_vars</code> \u4e0e <code>host_vars</code>",id:"121-group_vars-\u4e0e-host_vars",level:4},{value:"1.2.1.1 <code>group_vars</code> \u4f7f\u7528\u793a\u4f8b",id:"1211-group_vars-\u4f7f\u7528\u793a\u4f8b",level:5},{value:"1.2.1.2 <code>host_vars</code> \u4f7f\u7528\u793a\u4f8b",id:"1212-host_vars-\u4f7f\u7528\u793a\u4f8b",level:5},{value:"1.2.2 \u7279\u6b8a\u7ec4 <code>all</code>",id:"122-\u7279\u6b8a\u7ec4-all",level:4},{value:"1.3 \u901a\u8fc7\u6267\u884cplaybook\u65f6\u8fdb\u884c\u5b9a\u4e49",id:"13-\u901a\u8fc7\u6267\u884cplaybook\u65f6\u8fdb\u884c\u5b9a\u4e49",level:3},{value:"2.ansible\u53d8\u91cf\u4f18\u5148\u7ea7",id:"2ansible\u53d8\u91cf\u4f18\u5148\u7ea7",level:2}];function h(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.p,{children:"[toc]"}),"\n",(0,l.jsx)(e.h1,{id:"ansible\u5b9a\u4e49\u53d8\u91cf",children:"ansible\u5b9a\u4e49\u53d8\u91cf"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"https://docs.ansible.com/ansible/2.9/user_guide/playbooks_variables.html",children:"ansible2.9\u53d8\u91cf\u5b98\u65b9\u6587\u6863"})}),"\n",(0,l.jsx)(e.h2,{id:"1ansible\u5b9a\u4e49\u53d8\u91cf",children:"1.ansible\u5b9a\u4e49\u53d8\u91cf"}),"\n",(0,l.jsx)(e.h3,{id:"11-\u5728playbook\u4e2d\u7684play\u8fdb\u884c\u5b9a\u4e49",children:"1.1 \u5728playbook\u4e2d\u7684play\u8fdb\u884c\u5b9a\u4e49"}),"\n",(0,l.jsxs)(e.p,{children:["\u5728yml\u6587\u4ef6\u4e2d\u901a\u8fc7 ",(0,l.jsx)(e.code,{children:"vars"})," \u5173\u952e\u5b57\u5b9a\u4e49\u53d8\u91cf\uff0c\u5f15\u7528\u53d8\u91cf\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"{{}}"})]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-yaml",children:"vars:\n  - \u53d8\u91cf\u540d1\uff1a \u53d8\u91cf\u503c1\n  - \u53d8\u91cf\u540d2\uff1a \u53d8\u91cf\u503c2\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-yaml",children:'- hosts: all\n  vars:\n    - pkg_name1: httpd\n    - pkg_name2: nginx\n\n  tasks:\n    - name: install httpd\n      yum: \n        name: \n          - "{{ pkg_name1 }}"\n          - "{{ pkg_name2 }}"\n        state:\n          present\n'})}),"\n",(0,l.jsxs)(e.p,{children:["\u5728playbook\u4e2d\u8fd8\u53ef\u4ee5\u901a\u8fc7 ",(0,l.jsx)(e.code,{children:"vars_files"})," \u5173\u952e\u5b57\u5f15\u7528\u53d8\u91cf\u6587\u4ef6"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-yaml",children:"vars_files: \u53d8\u91cf\u6587\u4ef6\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u7f16\u8f91\u4e00\u4e2a\u53d8\u91cf\u6587\u4ef6"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-yaml",children:"pkg_name1: httpd\npkg_name2: nginx\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5728yml\u6587\u4ef6\u4f7f\u7528\u5173\u952e\u5b57 ",(0,l.jsx)(e.code,{children:"vars_files"})," \u5f15\u7528\u53d8\u91cf\u6587\u4ef6"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-yaml",children:'- hosts: devops02\n  \n  vars_files:\n    ./vars_pub.yml\n  \n  tasks:\n    - name: install httpd nginx\n      yum: \n        name: \n          - "{{ pkg_name1 }}"\n          - "{{ pkg_name2 }}"\n        state:\n          present\n'})}),"\n",(0,l.jsx)(e.h3,{id:"12-\u901a\u8fc7inventory\u4e3b\u673a\u6e05\u5355\u8fdb\u884c\u5b9a\u4e49",children:"1.2 \u901a\u8fc7inventory\u4e3b\u673a\u6e05\u5355\u8fdb\u884c\u5b9a\u4e49"}),"\n",(0,l.jsxs)(e.p,{children:["\u5728inventory\u4e3b\u673a\u6e05\u5355\u4e2d\u901a\u8fc7 ",(0,l.jsx)(e.code,{children:"[\u7ec4\u540d:vars]"})," \u5b9a\u4e49\u53d8\u91cf\uff0c\u8fd9\u4e2a\u53d8\u91cf\u65e2\u53ef\u4ee5\u5728inventory\u4e2d\u5f15\u7528\uff0c\u4e5f\u53ef\u4ee5\u5728playbook\u4e2d\u5f15\u7528"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sh",children:"[all_server:vars]\nansible_ssh_user=ops\nansible_ssh_port=2233\nansible_ssh_private_key_file=/home/ops/.ssh/id_rsa_ops\nansible_become=true \nansible_become_method=sudo \nansible_become_user=root\n\n[all_server]\ndevops01\ndevops02\n"})}),"\n",(0,l.jsxs)(e.h4,{id:"121-group_vars-\u4e0e-host_vars",children:["1.2.1 ",(0,l.jsx)(e.code,{children:"group_vars"})," \u4e0e ",(0,l.jsx)(e.code,{children:"host_vars"})]}),"\n",(0,l.jsxs)(e.p,{children:["\u5b98\u65b9\u63a8\u8350\u5728\u9879\u76ee\u76ee\u5f55\u4e0b\uff0c\u521b\u5efa\u4e24\u4e2a\u53d8\u91cf\u76ee\u5f55 ",(0,l.jsx)(e.code,{children:"host_vars"}),"\u3001",(0,l.jsx)(e.code,{children:"group_vars"})," \uff0c\u5728\u8fd92\u4e2a\u76ee\u5f55\u4e0b\u5b58\u653e\u53d8\u91cf\u7684\u6587\u4ef6"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5728\u7ec4(group_vars)\u4e0b\u9762\u521b\u5efa\u4e00\u4e2a\u548cinventory\u4e2d\u7ec4\u540d\u76f8\u540c\u7684\u53d8\u91cf\u6587\u4ef6\uff0c\u90a3\u4e48inventory\u4e2d\u67d0\u4e2a\u7ec4\u4e0b\u9762\u7684\u4e3b\u673a\u5c31\u4f1a\u5f15\u7528 ",(0,l.jsx)(e.code,{children:"group_vars"})," \u76ee\u5f55\u4e0b\u4e0e\u7ec4\u540d\u540c\u540d\u7684\u53d8\u91cf\u6587\u4ef6\u4e2d\u7684\u53d8\u91cf"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5728\u4e3b\u673a(host_vars)\u4e0b\u9762\u521b\u5efa\u4e00\u4e2a\u548cinventory\u4e2d\u4e3b\u673a\u540d\u76f8\u540c\u7684\u53d8\u91cf\u6587\u4ef6\uff0c\u90a3\u4e48invertory\u4e2d\u7684\u67d0\u4e2a\u4e3b\u673a\u5c31\u4f1a\u5f15\u7528 ",(0,l.jsx)(e.code,{children:"host_vars"})," \u76ee\u5f55\u4e0b\u548c\u4e3b\u673a\u540c\u540d\u7684\u53d8\u91cf\u6587\u4ef6\u4e2d\u7684\u53d8\u91cf"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.h5,{id:"1211-group_vars-\u4f7f\u7528\u793a\u4f8b",children:["1.2.1.1 ",(0,l.jsx)(e.code,{children:"group_vars"})," \u4f7f\u7528\u793a\u4f8b"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u9879\u76ee\u4e0b\u521b\u5efa ",(0,l.jsx)(e.code,{children:"group_vars"})," \u76ee\u5f55"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"mkdir group_vars\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u9879\u76ee\u4e0bhosts\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"[devops]\ndevops01\ndevops02\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5728 ",(0,l.jsx)(e.code,{children:"group_vars"})," \u76ee\u5f55\u4e0b\u521b\u5efa\u4e0e\u7ec4\u540d\u540c\u540d\u7684\u6587\u4ef6\u5e76\u5199\u5165\u53d8\u91cf"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"cat > group_vars/devops <<EOF\npkg_name1: nginx\npkg_name2: httpd\nEOF\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u7f16\u8f91yml\u6587\u4ef6"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-yaml",children:'cat > vars01.yml <<EOF\n- hosts: devops\n  \n  tasks:\n    - name: install httpd nginx\n      yum: \n        name: \n          - "{{ pkg_name1 }}"\n          - "{{ pkg_name2 }}"\n        state:\n          present\nEOF\n'})}),"\n",(0,l.jsxs)(e.p,{children:["\u6267\u884cplaybook\uff0c\u53ef\u4ee5\u770b\u5230\u5728yml\u6587\u4ef6\u4e2d\u6ca1\u6709\u6307\u5b9a\u53d8\u91cf\u6587\u4ef6\u7684\u60c5\u51b5\u4e0b\u4f1a\u81ea\u52a8\u8bfb\u53d6 ",(0,l.jsx)(e.code,{children:"group_vars"})," \u76ee\u5f55\u4e0b\u4e0einvertory\u4e2d\u7ec4\u540d\u540c\u540d\u7684\u53d8\u91cf\u6587\u4ef6\u4e2d\u7684\u53d8\u91cf"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"$ ansible-playbook vars01.yml -i hosts\n\nPLAY [devops] ******************************************************************************************************************************************\n\nTASK [Gathering Facts] *********************************************************************************************************************************\nok: [devops02]\nok: [devops01]\n\nTASK [install httpd nginx] *****************************************************************************************************************************\nok: [devops02]\nok: [devops01]\n\nPLAY RECAP *********************************************************************************************************************************************\ndevops01                   : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   \ndevops02                   : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   \n\n"})}),"\n",(0,l.jsxs)(e.h5,{id:"1212-host_vars-\u4f7f\u7528\u793a\u4f8b",children:["1.2.1.2 ",(0,l.jsx)(e.code,{children:"host_vars"})," \u4f7f\u7528\u793a\u4f8b"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u9879\u76ee\u4e0b\u521b\u5efa ",(0,l.jsx)(e.code,{children:"host_vars"})," \u76ee\u5f55"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"mkdir host_vars\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u9879\u76ee\u4e0bhosts\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"[devops]\ndevops01\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5728 ",(0,l.jsx)(e.code,{children:"host_vars"})," \u76ee\u5f55\u4e0b\u521b\u5efa\u4e0e\u4e3b\u673a\u540c\u540d\u7684\u6587\u4ef6\u5e76\u5199\u5165\u53d8\u91cf"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"cat > host_vars/devops01 <<EOF\npkg_name1: nginx\npkg_name2: httpd\nEOF\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u7f16\u8f91yml\u6587\u4ef6"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-yaml",children:'cat > vars02.yml <<EOF\n- hosts: devops01\n  \n  tasks:\n    - name: install httpd nginx\n      yum: \n        name: \n          - "{{ pkg_name1 }}"\n          - "{{ pkg_name2 }}"\n        state:\n          present\nEOF\n'})}),"\n",(0,l.jsxs)(e.p,{children:["\u6267\u884cplaybook\uff0c\u53ef\u4ee5\u770b\u5230\u5728yml\u6587\u4ef6\u4e2d\u6ca1\u6709\u6307\u5b9a\u53d8\u91cf\u6587\u4ef6\u7684\u60c5\u51b5\u4e0b\u4f1a\u81ea\u52a8\u8bfb\u53d6 ",(0,l.jsx)(e.code,{children:"host_vars"})," \u76ee\u5f55\u4e0b\u4e0einvertory\u4e2d\u4e3b\u673a\u540d\u540c\u540d\u7684\u53d8\u91cf\u6587\u4ef6\u4e2d\u7684\u53d8\u91cf"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"$ ansible-playbook vars02.yml -i hosts\n\nPLAY [devops01] ****************************************************************************************************************************************\n\nTASK [Gathering Facts] *********************************************************************************************************************************\nok: [devops01]\n\nTASK [install httpd nginx] *****************************************************************************************************************************\nok: [devops01]\n\nPLAY RECAP *********************************************************************************************************************************************\ndevops01                   : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   \n"})}),"\n",(0,l.jsxs)(e.h4,{id:"122-\u7279\u6b8a\u7ec4-all",children:["1.2.2 \u7279\u6b8a\u7ec4 ",(0,l.jsx)(e.code,{children:"all"})]}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"group_vars"})," \u4e0e ",(0,l.jsx)(e.code,{children:"host_vars"})," \u6709\u4e00\u4e2a\u5171\u540c\u7684\u7f3a\u70b9\uff0c\u5982\u679c\u6709\u591a\u4e2a\u7ec4\u6216\u8005\u591a\u53f0\u4e3b\u673a\u7684\u8bdd\uff0c\u90a3\u5c31\u5f97\u7f16\u8f91\u591a\u4e2a\u53d8\u91cf\u6587\u4ef6\uff0c\u5373\u4f7f\u53d8\u91cf\u6587\u4ef6\u5185\u5bb9\u4e00\u81f4\u4e5f\u9700\u8981\u7f16\u8f91\u591a\u4e2a\u4e0e\u7ec4\u540d\u76f8\u540c\u7684\u53d8\u91cf\u6587\u4ef6\uff0c\u8fd9\u6837\u7684\u8bdd\u5c31\u4f1a\u6709\u5f88\u591a\u91cd\u590d\u7684\u5de5\u4f5c"]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\u4f8b\u5982\u5728 ",(0,l.jsx)(e.code,{children:"group_vars"})," \u76ee\u5f55\u4e0b\u67092\u4e2a\u4e0e\u7ec4\u540d\u76f8\u540c\u7684\u53d8\u91cf\u6587\u4ef6v1\u4e0ev2\uff0cv1\u4e0ev2\u6587\u4ef6\u5185\u5bb9\u662f\u76f8\u540c\u7684\uff0c\u4f46\u662fv1\u4e0ev2\u4e0d\u80fd\u4e92\u76f8\u8c03\u7528\u5bf9\u65b9\u7684\u53d8\u91cf\uff0c\u6b64\u65f6\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"all"})," \u8fd9\u4e2a\u7ec4\u5c31\u53ef\u4ee5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898"]}),"\n",(0,l.jsxs)(e.p,{children:["\u9879\u76ee\u4e0b ",(0,l.jsx)(e.code,{children:"hosts"})," \u6587\u4ef6\u5185\u5bb9\u5982\u4e0b"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"[d1]\ndevops01\n\n[d2]\ndevops02\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5728 ",(0,l.jsx)(e.code,{children:"host_vars"})," \u76ee\u5f55\u4e0b\u521b\u5efa ",(0,l.jsx)(e.code,{children:"all"})," \u7ec4\u5e76\u5199\u5165\u53d8\u91cf"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"cat > group_vars/all <<EOF\npkg_name1: nginx\npkg_name2: httpd\nEOF\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u7f16\u8f91yml\u6587\u4ef6d1"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:'cat > d1.yml <<EOF\n- hosts: d1\n  \n  tasks:\n    - name: install httpd nginx\n      yum: \n        name: \n          - "{{ pkg_name1 }}"\n          - "{{ pkg_name2 }}"\n        state:\n          present\nEOF\n'})}),"\n",(0,l.jsxs)(e.p,{children:["\u6267\u884cplaybook\uff0c\u53ef\u4ee5\u4ece ",(0,l.jsx)(e.code,{children:"group_vars"})," \u76ee\u5f55\u4e0b\u8bfb\u53d6 ",(0,l.jsx)(e.code,{children:"all"})," \u7ec4\u4e2d\u7684\u53d8\u91cf"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"$ ansible-playbook d1.yml -i hosts\n\nPLAY [d1] **********************************************************************************************************************************************\n\nTASK [Gathering Facts] *********************************************************************************************************************************\nok: [devops01]\n\nTASK [install httpd nginx] *****************************************************************************************************************************\nok: [devops01]\n\nPLAY RECAP *********************************************************************************************************************************************\ndevops01                   : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   \n"})}),"\n",(0,l.jsx)(e.p,{children:"\u7f16\u8f91yml\u6587\u4ef6d2"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:'cat > d2.yml <<EOF\n- hosts: d2\n  \n  tasks:\n    - name: install httpd nginx\n      yum: \n        name: \n          - "{{ pkg_name1 }}"\n          - "{{ pkg_name2 }}"\n        state:\n          present\nEOF\n'})}),"\n",(0,l.jsxs)(e.p,{children:["\u6267\u884cplaybook\uff0c\u53ef\u4ee5\u4ece ",(0,l.jsx)(e.code,{children:"group_vars"})," \u76ee\u5f55\u4e0b\u8bfb\u53d6 ",(0,l.jsx)(e.code,{children:"all"})," \u7ec4\u4e2d\u7684\u53d8\u91cf"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"$ ansible-playbook d2.yml -i hosts\n\nPLAY [d2] **********************************************************************************************************************************************\n\nTASK [Gathering Facts] *********************************************************************************************************************************\nok: [devops02]\n\nTASK [install httpd nginx] *****************************************************************************************************************************\nok: [devops02]\n\nPLAY RECAP *********************************************************************************************************************************************\ndevops02                   : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   \n"})}),"\n",(0,l.jsxs)(e.p,{children:["playbook\u6307\u5b9a\u6267\u884c\u5355\u4e2a\u4e3b\u673a\u7684\u65f6\u5019\uff0c\u4f1a\u5148\u4ece ",(0,l.jsx)(e.code,{children:"host_vars"})," \u4e0b\u67e5\u627e\u53d8\u91cf\uff0c\u5982\u679c\u6ca1\u6709\u5c31\u4ece ",(0,l.jsx)(e.code,{children:"group_vars"})," \u4e2d\u67e5\u627e\uff0c\u6700\u540e\u4ece ",(0,l.jsx)(e.code,{children:"group_vars/all"})," \u4e2d\u67e5\u627e"]}),"\n",(0,l.jsx)(e.h3,{id:"13-\u901a\u8fc7\u6267\u884cplaybook\u65f6\u8fdb\u884c\u5b9a\u4e49",children:"1.3 \u901a\u8fc7\u6267\u884cplaybook\u65f6\u8fdb\u884c\u5b9a\u4e49"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:["\u6267\u884cplaybook\u901a\u8fc7 ",(0,l.jsx)(e.code,{children:"-e"})," \u53c2\u6570\u6307\u5b9a\u53d8\u91cf"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u9879\u76ee\u4e0bhosts\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-yaml",children:"[prod]\ndevops01\n\n[test]\ndevops02\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u7f16\u8f91yml\u6587\u4ef6\uff0c\u4e3b\u673a\u5904\u5b9a\u4e49\u4e00\u4e2a\u53d8\u91cf\uff0c\u5728\u6267\u884cplaybook\u7684\u65f6\u5019\u901a\u8fc7 ",(0,l.jsx)(e.code,{children:"-e"})," \u53c2\u6570\u6307\u5b9a\u8981\u6267\u884c\u7684\u4e3b\u673a\u7ec4"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-yaml",children:'cat > var.yml <<EOF\n- hosts: "{{ hosts }}"\n  \n  tasks:\n    - name: install nginx\n      yum: \n        name: \n          - nginx\n        state:\n          present\nEOF\n'})}),"\n",(0,l.jsxs)(e.p,{children:["\u6267\u884cplaybook\u7684\u65f6\u5019\uff0c\u901a\u8fc7 ",(0,l.jsx)(e.code,{children:"-e"})," \u6307\u5b9a\u8981\u6267\u884c\u7684\u4e3b\u673a\u7ec4"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:'$ ansible-playbook -i hosts var.yml -e "hosts=prod"\n[WARNING]: Found variable using reserved name: hosts\n\nPLAY [prod] ********************************************************************************************************************************************\n\nTASK [Gathering Facts] *********************************************************************************************************************************\nok: [devops01]\n\nTASK [install nginx] ***********************************************************************************************************************************\nok: [devops01]\n\nPLAY RECAP *********************************************************************************************************************************************\ndevops01                   : ok=2    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   \n'})}),"\n",(0,l.jsx)(e.h2,{id:"2ansible\u53d8\u91cf\u4f18\u5148\u7ea7",children:"2.ansible\u53d8\u91cf\u4f18\u5148\u7ea7"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"-e"})," \u4f20\u53c2 > ",(0,l.jsx)(e.code,{children:"vars_files(playbook)"})," > ",(0,l.jsx)(e.code,{children:"vars(playbook)"}),"  > ",(0,l.jsx)(e.code,{children:"host_vars(inventory)"})," > ",(0,l.jsx)(e.code,{children:"group_vars(inventory)"}),"> \u7279\u6b8a\u7ec4all"]})]})}function p(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(h,{...n})}):h(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>o});var l=s(96540);const a={},r=l.createContext(a);function d(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:d(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);