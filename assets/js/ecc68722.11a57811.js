"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2911],{95783:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=t(74848),r=t(28453);const s={},i="Mitaka\u7248\u4f7f\u7528\u547d\u4ee4\u542f\u52a8\u4e00\u4e2a\u793a\u4f8b",o={id:"linux/openstack/mitaka/Mitaka\u7248\u4f7f\u7528\u547d\u4ee4\u542f\u52a8\u4e00\u4e2a\u5b9e\u4f8b",title:"Mitaka\u7248\u4f7f\u7528\u547d\u4ee4\u542f\u52a8\u4e00\u4e2a\u5b9e\u4f8b",description:"[toc]",source:"@site/docs/linux/openstack/mitaka/2.Mitaka\u7248\u4f7f\u7528\u547d\u4ee4\u542f\u52a8\u4e00\u4e2a\u5b9e\u4f8b.md",sourceDirName:"linux/openstack/mitaka",slug:"/linux/openstack/mitaka/Mitaka\u7248\u4f7f\u7528\u547d\u4ee4\u542f\u52a8\u4e00\u4e2a\u5b9e\u4f8b",permalink:"/docs/linux/openstack/mitaka/Mitaka\u7248\u4f7f\u7528\u547d\u4ee4\u542f\u52a8\u4e00\u4e2a\u5b9e\u4f8b",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"centos7.8\u642d\u5efaopenstack Mitaka\u7248",permalink:"/docs/linux/openstack/mitaka/centos7.8\u642d\u5efaopenstack Mitaka\u7248"},next:{title:"Mitaka\u7248web\u754c\u9762\u542f\u52a8\u4e00\u4e2a\u5b9e\u4f8b",permalink:"/docs/linux/openstack/mitaka/Mitaka\u7248web\u754c\u9762\u542f\u52a8\u4e00\u4e2a\u5b9e\u4f8b"}},c={},d=[{value:"1.\u521b\u5efa\u7f51\u7edc\uff08\u7f51\u7edc\u540d+\u5b50\u7f51\uff09",id:"1\u521b\u5efa\u7f51\u7edc\u7f51\u7edc\u540d\u5b50\u7f51",level:2},{value:"2.\u521b\u5efa\u4e91\u4e3b\u673a\u7684\u786c\u4ef6\u914d\u7f6e\u65b9\u6848",id:"2\u521b\u5efa\u4e91\u4e3b\u673a\u7684\u786c\u4ef6\u914d\u7f6e\u65b9\u6848",level:2},{value:"3.\u521b\u5efa\u5bc6\u94a5\u5bf9",id:"3\u521b\u5efa\u5bc6\u94a5\u5bf9",level:2},{value:"4.\u521b\u5efa\u5b89\u5168\u7ec4\u89c4\u5219",id:"4\u521b\u5efa\u5b89\u5168\u7ec4\u89c4\u5219",level:2},{value:"5.\u542f\u52a8\u4e00\u4e2a\u5b9e\u4f8b",id:"5\u542f\u52a8\u4e00\u4e2a\u5b9e\u4f8b",level:2}];function p(e){const n={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"[toc]"}),"\n",(0,a.jsx)(n.h1,{id:"mitaka\u7248\u4f7f\u7528\u547d\u4ee4\u542f\u52a8\u4e00\u4e2a\u793a\u4f8b",children:"Mitaka\u7248\u4f7f\u7528\u547d\u4ee4\u542f\u52a8\u4e00\u4e2a\u793a\u4f8b"}),"\n",(0,a.jsx)(n.h2,{id:"1\u521b\u5efa\u7f51\u7edc\u7f51\u7edc\u540d\u5b50\u7f51",children:"1.\u521b\u5efa\u7f51\u7edc\uff08\u7f51\u7edc\u540d+\u5b50\u7f51\uff09"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["\u521b\u5efa\u7f51\u7edc\u540d\nneutron net-create --shared --provider",":physical_network"," provider ",(0,a.jsx)(n.br,{}),"\n","--provider",":network_type"," flat pptfz"]}),"\n",(0,a.jsxs)(n.p,{children:["net-create\t\u521b\u5efa\u7f51\u7edc\n--shared\t\u521b\u5efa\u5171\u4eab\u7f51\u7edc\n--provider",":physical_network","\t\t\u6307\u5b9a\u7269\u7406\u7f51\u5361\u540d\u79f0 \tprovider\u7f51\u7edc\u6807\u7b7e\n--provider",":network_type","\t\t\t\u6307\u5b9a\u7f51\u7edc\u7c7b\u578b\tflat\u6865\u63a5\u7f51\u7edc\tpptfz\u7f51\u7edc\u540d\u79f0"]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["\u521b\u5efa\u5b50\u7f51\nneutron subnet-create --name bxb ",(0,a.jsx)(n.br,{}),"\n","--allocation-pool start=10.0.0.101,end=10.0.0.250 ",(0,a.jsx)(n.br,{}),"\n","--dns-nameserver 223.5.5.5 --gateway 10.0.0.254 ",(0,a.jsx)(n.br,{}),"\n","pptfz 10.0.0.0/24"]}),"\n",(0,a.jsx)(n.p,{children:"subnet-create\t\t\t\t\u521b\u5efa\u5b50\u7f51\n--name\t\t\t   \t\t\t\u6307\u5b9a\u540d\u79f0\tbxb\u5b50\u7f51\u540d\u79f0\n--allocation-pool\t\t\tIP\u5730\u5740\u8303\u56f4\npptfz\t\t\t\t\t\t\t\t\u521b\u5efa\u7684\u5b50\u7f51\u5173\u8054\u5230\u54ea\u4e2a\u7f51\u7edc"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u4ee5\u4e0b\u4e3a\u64cd\u4f5c"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'#\u521b\u5efa\u7f51\u7edc\nneutron net-create --shared --provider:physical_network provider \\\n --provider:network_type flat pptfz\nCreated a new network:\n+---------------------------+--------------------------------------+\n| Field                     | Value                                |\n+---------------------------+--------------------------------------+\n| admin_state_up            | True                                 |\n| availability_zone_hints   |                                      |\n| availability_zones        |                                      |\n| created_at                | 2019-02-03T09:37:39                  |\n| description               |                                      |\n| id                        | 9125ad48-6bbe-4baf-8d78-f91a7c0a8ea2 |\n| ipv4_address_scope        |                                      |\n| ipv6_address_scope        |                                      |\n| mtu                       | 1500                                 |\n| name                      | pptfz                                |\n| port_security_enabled     | True                                 |\n| provider:network_type     | flat                                 |\n| provider:physical_network | provider                             |\n| provider:segmentation_id  |                                      |\n| router:external           | False                                |\n| shared                    | True                                 |\n| status                    | ACTIVE                               |\n| subnets                   |                                      |\n| tags                      |                                      |\n| tenant_id                 | e33e3feaef784a5bb45bd9c766bc0f46     |\n| updated_at                | 2019-02-03T09:37:39                  |\n+---------------------------+--------------------------------------+\n\n#\u521b\u5efa\u5b50\u7f51\nneutron subnet-create --name bxb \\\n --allocation-pool start=10.0.0.101,end=10.0.0.250 \\\n --dns-nameserver 223.5.5.5 --gateway 10.0.0.1 \\\n pptfz 10.0.0.0/24\nCreated a new subnet:\n+-------------------+----------------------------------------------+\n| Field             | Value                                        |\n+-------------------+----------------------------------------------+\n| allocation_pools  | {"start": "10.0.0.101", "end": "10.0.0.250"} |\n| cidr              | 10.0.0.0/24                                  |\n| created_at        | 2019-02-03T09:40:37                          |\n| description       |                                              |\n| dns_nameservers   | 223.5.5.5                                    |\n| enable_dhcp       | True                                         |\n| gateway_ip        | 10.0.0.254                                   |\n| host_routes       |                                              |\n| id                | ad21906e-166d-47e2-8634-18c907c6da3b         |\n| ip_version        | 4                                            |\n| ipv6_address_mode |                                              |\n| ipv6_ra_mode      |                                              |\n| name              | bxb                                          |\n| network_id        | 9125ad48-6bbe-4baf-8d78-f91a7c0a8ea2         |\n| subnetpool_id     |                                              |\n| tenant_id         | e33e3feaef784a5bb45bd9c766bc0f46             |\n| updated_at        | 2019-02-03T09:40:37                          |\n+-------------------+----------------------------------------------+\n'})}),"\n",(0,a.jsx)(n.h2,{id:"2\u521b\u5efa\u4e91\u4e3b\u673a\u7684\u786c\u4ef6\u914d\u7f6e\u65b9\u6848",children:"2.\u521b\u5efa\u4e91\u4e3b\u673a\u7684\u786c\u4ef6\u914d\u7f6e\u65b9\u6848"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"openstack flavor create --id 0 --vcpus 1 --ram 64 --disk 1 m1.nano\n+----------------------------+---------+\n| Field                      | Value   |\n+----------------------------+---------+\n| OS-FLV-DISABLED:disabled   | False   |\n| OS-FLV-EXT-DATA:ephemeral  | 0       |\n| disk                       | 1       |\n| id                         | 0       |\n| name                       | m1.nano |\n| os-flavor-access:is_public | True    |\n| ram                        | 64      |\n| rxtx_factor                | 1.0     |\n| swap                       |         |\n| vcpus                      | 1       |\n+----------------------------+---------+\n\n//\u53c2\u6570\u8bf4\u660e\nopenstack flavor create --id 0 --vcpus 1 --ram 64 --disk 1 m1.nano\nflavor\t\t\u786c\u4ef6\u914d\u7f6e\u65b9\u6848\n--id\t\t\u6307\u5b9a\u7f16\u53f7\n--vcpus\t\tcpu\u4e2a\u6570\n--ram\t\t\u5185\u5b58\uff08\u5355\u4f4d\uff1aM\uff09\n--disk\t\t\u78c1\u76d8\uff08\u5355\u4f4d\uff1aG\uff09\nm1.nano\t\t\u65b9\u6848\u540d\u79f0\n"})}),"\n",(0,a.jsx)(n.h2,{id:"3\u521b\u5efa\u5bc6\u94a5\u5bf9",children:"3.\u521b\u5efa\u5bc6\u94a5\u5bf9"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'ssh-keygen -q -N "" -f ~/.ssh/id_rsa\n\nopenstack keypair create --public-key ~/.ssh/id_rsa.pub mykey\n+-------------+-------------------------------------------------+\n| Field       | Value                                           |\n+-------------+-------------------------------------------------+\n| fingerprint | 0e:af:ab:c3:74:5f:56:1b:e8:46:7d:e5:65:4f:a8:9a |\n| name        | mykey                                           |\n| user_id     | aaa8bfce5b5d451b956bb76dee235b9e                |\n+-------------+-------------------------------------------------+\n//\u53c2\u6570\u8bf4\u660e\nssh-keygen -q -N "" -f ~/.ssh/id_rsa  \u975e\u4ea4\u4e92\u5f0f\u751f\u6210\u5bc6\u94a5\u5bf9\n-q\t\u5b89\u9759\u6a21\u5f0f\n-N\t\u6307\u5b9a\u52a0\u5bc6\u5bc6\u7801\n-f\t\u5bc6\u94a5\u5bf9\u5b58\u653e\u4f4d\u7f6e\nopenstack keypair create --public-key ~/.ssh/id_rsa.pub mykey  \u4e0a\u4f20\u5bc6\u94a5\u5bf9\n'})}),"\n",(0,a.jsx)(n.h2,{id:"4\u521b\u5efa\u5b89\u5168\u7ec4\u89c4\u5219",children:"4.\u521b\u5efa\u5b89\u5168\u7ec4\u89c4\u5219"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"openstack security group rule create --proto icmp default\n+-----------------------+--------------------------------------+\n| Field                 | Value                                |\n+-----------------------+--------------------------------------+\n| id                    | cb340772-4dd8-4d33-8ae0-2be3f43f26de |\n| ip_protocol           | icmp                                 |\n| ip_range              | 0.0.0.0/0                            |\n| parent_group_id       | b6f5f95a-fd52-43c1-bb4c-0625750e4369 |\n| port_range            |                                      |\n| remote_security_group |                                      |\n+-----------------------+--------------------------------------+\n\nopenstack security group rule create --proto tcp --dst-port 22 default\n+-----------------------+--------------------------------------+\n| Field                 | Value                                |\n+-----------------------+--------------------------------------+\n| id                    | 01c1cea4-76c0-4181-aca9-4b3148fb0397 |\n| ip_protocol           | tcp                                  |\n| ip_range              | 0.0.0.0/0                            |\n| parent_group_id       | b6f5f95a-fd52-43c1-bb4c-0625750e4369 |\n| port_range            | 22:22                                |\n| remote_security_group |                                      |\n+-----------------------+--------------------------------------+\n\n#\u9ed8\u8ba4\u6240\u6709\u7aef\u53e3\u5168\u90e8\u7981\u6b62\uff0c\u4e0a\u8fb9\u4e24\u4e2a\u547d\u4ee4\u4e3a\u5141\u8bb8ping\u548cssh\nopenstack security group rule create --proto icmp default\nopenstack security group rule create --proto tcp --dst-port 22 default\n"})}),"\n",(0,a.jsx)(n.h2,{id:"5\u542f\u52a8\u4e00\u4e2a\u5b9e\u4f8b",children:"5.\u542f\u52a8\u4e00\u4e2a\u5b9e\u4f8b"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"openstack server create --flavor m1.nano --image cirros \\\n--nic net-id=`neutron net-list|awk 'NR==4{print $2}'` --security-group default \\\n--key-name mykey pptfz\n+--------------------------------------+-----------------------------------------------+\n| Field                                | Value                                         |\n+--------------------------------------+-----------------------------------------------+\n| OS-DCF:diskConfig                    | MANUAL                                        |\n| OS-EXT-AZ:availability_zone          |                                               |\n| OS-EXT-SRV-ATTR:host                 | None                                          |\n| OS-EXT-SRV-ATTR:hypervisor_hostname  | None                                          |\n| OS-EXT-SRV-ATTR:instance_name        | instance-00000001                             |\n| OS-EXT-STS:power_state               | 0                                             |\n| OS-EXT-STS:task_state                | scheduling                                    |\n| OS-EXT-STS:vm_state                  | building                                      |\n| OS-SRV-USG:launched_at               | None                                          |\n| OS-SRV-USG:terminated_at             | None                                          |\n| accessIPv4                           |                                               |\n| accessIPv6                           |                                               |\n| addresses                            |                                               |\n| adminPass                            | 8KcNG34aXwuK                                  |\n| config_drive                         |                                               |\n| created                              | 2019-02-03T12:10:10Z                          |\n| flavor                               | m1.nano (0)                                   |\n| hostId                               |                                               |\n| id                                   | d5e07f54-c70e-4657-9ec5-778edc941e99          |\n| image                                | cirros (ac21b17b-e910-4ca4-b743-914b8fbd0e55) |\n| key_name                             | mykey                                         |\n| name                                 | pptfz                                         |\n| os-extended-volumes:volumes_attached | []                                            |\n| progress                             | 0                                             |\n| project_id                           | e33e3feaef784a5bb45bd9c766bc0f46              |\n| properties                           |                                               |\n| security_groups                      | [{u'name': u'default'}]                       |\n| status                               | BUILD                                         |\n| updated                              | 2019-02-03T12:10:12Z                          |\n| user_id                              | aaa8bfce5b5d451b956bb76dee235b9e              |\n+--------------------------------------+-----------------------------------------------+\n\n#\u521b\u5efa\u5b8c\u6210\u540e\u67e5\u770b\uff0c\u72b6\u6001\u4e3aACTIVE\u5373\u4e3a\u6b63\u786e\nopenstack server list\n+--------------------------------------+-------+--------+------------------+\n| ID                                   | Name  | Status | Networks         |\n+--------------------------------------+-------+--------+------------------+\n| d5e07f54-c70e-4657-9ec5-778edc941e99 | pptfz | ACTIVE | pptfz=10.0.0.102 |\n+--------------------------------------+-------+--------+------------------+\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u542f\u52a8\u5b9e\u4f8b\u540e\u4f1a\u5728web\u754c\u9762\u663e\u793a"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u9879\u76ee--\x3e\u8ba1\u7b97--\x3e\u793a\u4f8b"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-05-2410.45.01.png",alt:"iShot2020-05-2410.45.01"})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(96540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);