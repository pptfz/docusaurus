"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8875],{74082:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>m,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var r=s(74848),i=s(28453);const t={},o="mysql\u4e2d\u8868\u4e0e\u8868\u4e4b\u95f4\u7684\u5173\u7cfb",l={id:"\u6570\u636e\u5e93/mysql/mysql\u57fa\u7840/mysql\u4e2d\u8868\u4e0e\u8868\u4e4b\u95f4\u7684\u5173\u7cfb",title:"mysql\u4e2d\u8868\u4e0e\u8868\u4e4b\u95f4\u7684\u5173\u7cfb",description:"[toc]",source:"@site/docs/\u6570\u636e\u5e93/mysql/mysql\u57fa\u7840/mysql\u4e2d\u8868\u4e0e\u8868\u4e4b\u95f4\u7684\u5173\u7cfb.md",sourceDirName:"\u6570\u636e\u5e93/mysql/mysql\u57fa\u7840",slug:"/\u6570\u636e\u5e93/mysql/mysql\u57fa\u7840/mysql\u4e2d\u8868\u4e0e\u8868\u4e4b\u95f4\u7684\u5173\u7cfb",permalink:"/docs/\u6570\u636e\u5e93/mysql/mysql\u57fa\u7840/mysql\u4e2d\u8868\u4e0e\u8868\u4e4b\u95f4\u7684\u5173\u7cfb",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CentOS7\u7f16\u8bd1\u5b89\u88c5MySQL8.0",permalink:"/docs/\u6570\u636e\u5e93/mysql/mysql\u57fa\u7840/CentOS7\u7f16\u8bd1\u5b89\u88c5MySQL8.0"},next:{title:"mysql\u5173\u952e\u5b57\u548csql\u8bed\u53e5\u6267\u884c\u987a\u5e8f",permalink:"/docs/\u6570\u636e\u5e93/mysql/mysql\u57fa\u7840/mysql\u5173\u952e\u5b57\u548csql\u8bed\u53e5\u6267\u884c\u987a\u5e8f"}},a={},c=[{value:"1.\u5982\u4f55\u5206\u6790\u8868\u4e0e\u8868\u4e4b\u95f4\u7684\u5173\u7cfb",id:"1\u5982\u4f55\u5206\u6790\u8868\u4e0e\u8868\u4e4b\u95f4\u7684\u5173\u7cfb",level:2},{value:"2.mysql\u4e2d\u8868\u4e0e\u8868\u4e4b\u95f4\u7684\u5173\u7cfb",id:"2mysql\u4e2d\u8868\u4e0e\u8868\u4e4b\u95f4\u7684\u5173\u7cfb",level:2},{value:"2.1 \u4e00\u5bf9\u591a",id:"21-\u4e00\u5bf9\u591a",level:3},{value:"<strong>2.1.1 \u793a\u4f8b1\uff0c\u51fa\u7248\u793e\u8868\u4e0e\u56fe\u4e66\u8868</strong>",id:"211-\u793a\u4f8b1\u51fa\u7248\u793e\u8868\u4e0e\u56fe\u4e66\u8868",level:4},{value:"<strong>2.1.2 \u793a\u4f8b2\uff0c\u5b66\u751f\u8868\u548c\u73ed\u7ea7\u8868</strong>",id:"212-\u793a\u4f8b2\u5b66\u751f\u8868\u548c\u73ed\u7ea7\u8868",level:4},{value:"2.1.3 \u793a\u4f8b3\uff0c\u673a\u623f\u8868\u4e0e\u670d\u52a1\u5668\u8868",id:"213-\u793a\u4f8b3\u673a\u623f\u8868\u4e0e\u670d\u52a1\u5668\u8868",level:4},{value:"2.2 \u4e00\u5bf9\u4e00",id:"22-\u4e00\u5bf9\u4e00",level:3},{value:"2.2.1 \u793a\u4f8b1\uff0c\u5458\u5de5\u8868\u4e0e\u4f01\u4e1a\u90ae\u7bb1\u8868",id:"221-\u793a\u4f8b1\u5458\u5de5\u8868\u4e0e\u4f01\u4e1a\u90ae\u7bb1\u8868",level:4},{value:"2.3 \u591a\u5bf9\u591a",id:"23-\u591a\u5bf9\u591a",level:3},{value:"2.3.1 \u793a\u4f8b1\uff0c\u4e66\u7c4d\u8868\u3001\u4f5c\u8005\u8868\u3001\u5173\u8054\u4e66\u7c4d\u8868\u4e0e\u4f5c\u8005\u8868\u7684\u7b2c3\u5f20\u8868",id:"231-\u793a\u4f8b1\u4e66\u7c4d\u8868\u4f5c\u8005\u8868\u5173\u8054\u4e66\u7c4d\u8868\u4e0e\u4f5c\u8005\u8868\u7684\u7b2c3\u5f20\u8868",level:4}];function d(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"[toc]"}),"\n",(0,r.jsx)(e.h1,{id:"mysql\u4e2d\u8868\u4e0e\u8868\u4e4b\u95f4\u7684\u5173\u7cfb",children:"mysql\u4e2d\u8868\u4e0e\u8868\u4e4b\u95f4\u7684\u5173\u7cfb"}),"\n",(0,r.jsx)(e.h2,{id:"1\u5982\u4f55\u5206\u6790\u8868\u4e0e\u8868\u4e4b\u95f4\u7684\u5173\u7cfb",children:"1.\u5982\u4f55\u5206\u6790\u8868\u4e0e\u8868\u4e4b\u95f4\u7684\u5173\u7cfb"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"\u5206\u6790\u6b65\u9aa4\uff1a\n#1\u3001\u5148\u7ad9\u5728\u5de6\u8868\u7684\u89d2\u5ea6\u53bb\u627e\n\u662f\u5426\u5de6\u8868\u7684\u591a\u6761\u8bb0\u5f55\u53ef\u4ee5\u5bf9\u5e94\u53f3\u8868\u7684\u4e00\u6761\u8bb0\u5f55\uff0c\u5982\u679c\u662f\uff0c\u5219\u8bc1\u660e\u5de6\u8868\u7684\u4e00\u4e2a\u5b57\u6bb5foreign key \u53f3\u8868\u4e00\u4e2a\u5b57\u6bb5\uff08\u901a\u5e38\u662fid\uff09\n\n#2\u3001\u518d\u7ad9\u5728\u53f3\u8868\u7684\u89d2\u5ea6\u53bb\u627e\n\u662f\u5426\u53f3\u8868\u7684\u591a\u6761\u8bb0\u5f55\u53ef\u4ee5\u5bf9\u5e94\u5de6\u8868\u7684\u4e00\u6761\u8bb0\u5f55\uff0c\u5982\u679c\u662f\uff0c\u5219\u8bc1\u660e\u53f3\u8868\u7684\u4e00\u4e2a\u5b57\u6bb5foreign key \u5de6\u8868\u4e00\u4e2a\u5b57\u6bb5\uff08\u901a\u5e38\u662fid\uff09\n\n#3\u3001\u603b\u7ed3\uff1a\n#\u591a\u5bf9\u4e00\uff1a\n\u5982\u679c\u53ea\u6709\u6b65\u9aa41\u6210\u7acb\uff0c\u5219\u662f\u5de6\u8868\u591a\u5bf9\u4e00\u53f3\u8868\n\u5982\u679c\u53ea\u6709\u6b65\u9aa42\u6210\u7acb\uff0c\u5219\u662f\u53f3\u8868\u591a\u5bf9\u4e00\u5de6\u8868\n\n#\u591a\u5bf9\u591a\n\u5982\u679c\u6b65\u9aa41\u548c2\u540c\u65f6\u6210\u7acb\uff0c\u5219\u8bc1\u660e\u8fd9\u4e24\u5f20\u8868\u65f6\u4e00\u4e2a\u53cc\u5411\u7684\u591a\u5bf9\u4e00\uff0c\u5373\u591a\u5bf9\u591a,\u9700\u8981\u5b9a\u4e49\u4e00\u4e2a\u8fd9\u4e24\u5f20\u8868\u7684\u5173\u7cfb\u8868\u6765\u4e13\u95e8\u5b58\u653e\u4e8c\u8005\u7684\u5173\u7cfb\n\n#\u4e00\u5bf9\u4e00:\n\u5982\u679c1\u548c2\u90fd\u4e0d\u6210\u7acb\uff0c\u800c\u662f\u5de6\u8868\u7684\u4e00\u6761\u8bb0\u5f55\u552f\u4e00\u5bf9\u5e94\u53f3\u8868\u7684\u4e00\u6761\u8bb0\u5f55\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002\u8fd9\u79cd\u60c5\u51b5\u5f88\u7b80\u5355\uff0c\u5c31\u662f\u5728\u5de6\u8868foreign key\u53f3\u8868\u7684\u57fa\u7840\u4e0a\uff0c\u5c06\u5de6\u8868\u7684\u5916\u952e\u5b57\u6bb5\u8bbe\u7f6e\u6210unique\u5373\u53ef\n"})}),"\n",(0,r.jsx)(e.h2,{id:"2mysql\u4e2d\u8868\u4e0e\u8868\u4e4b\u95f4\u7684\u5173\u7cfb",children:"2.mysql\u4e2d\u8868\u4e0e\u8868\u4e4b\u95f4\u7684\u5173\u7cfb"}),"\n",(0,r.jsx)(e.h3,{id:"21-\u4e00\u5bf9\u591a",children:"2.1 \u4e00\u5bf9\u591a"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u5173\u8054\u65b9\u5f0f"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"\u5916\u952e\tforeign key"})}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u8868\u4e0e\u8868\u4e4b\u95f4\u7684\u5173\u7cfb\u4e3a\u4e00\u5bf9\u591a"}),"\n",(0,r.jsx)(e.p,{children:"\u4f8b\u5982\uff0c\u51fa\u7248\u793e\u4e0e\u4e66\u4e4b\u95f4\u7684\u5173\u7cfb\u5c31\u662f\u4e00\u5bf9\u591a\uff0c\u4e00\u4e2a\u51fa\u7248\u793e\u53ef\u4ee5\u51fa\u7248\u591a\u4e2a\u4e66"}),"\n",(0,r.jsx)(e.p,{children:"\u4f8b\u5982\uff0c\u73ed\u7ea7\u8868\u548c\u5b66\u751f\u8868\uff0c\u4e00\u4e2a\u73ed\u7ea7\u53ef\u4ee5\u6709\u591a\u4e2a\u5b66\u751f\uff0c\u4f46\u662f\u4e00\u4e2a\u5b66\u751f\u53ea\u80fd\u5c5e\u4e8e\u4e00\u4e2a\u73ed\u7ea7"}),"\n",(0,r.jsx)(e.p,{children:"\u4f8b\u5982\uff0c\u670d\u52a1\u5668\u548c\u673a\u623f\uff0c\u4e00\u4e2a\u673a\u623f\u53ef\u4ee5\u6709\u591a\u53f0\u670d\u52a1\u5668\uff0c\u4f46\u662f\u4e00\u4e2a\u670d\u52a1\u5668\u53ea\u80fd\u5c5e\u4e8e\u4e00\u4e2a\u673a\u623f"}),"\n"]}),"\n",(0,r.jsx)(e.h4,{id:"211-\u793a\u4f8b1\u51fa\u7248\u793e\u8868\u4e0e\u56fe\u4e66\u8868",children:(0,r.jsx)(e.strong,{children:"2.1.1 \u793a\u4f8b1\uff0c\u51fa\u7248\u793e\u8868\u4e0e\u56fe\u4e66\u8868"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u4e00\u4e2a\u51fa\u7248\u793e\u53ef\u4ee5\u51fa\u7248\u591a\u4e2a\u4e66"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"#\u521b\u5efa\u51fa\u7248\u793e\u8868\nmysql> create table chubanshe(id int primary key auto_increment,name char(10));\nQuery OK, 0 rows affected (0.02 sec)\n\n#\u521b\u5efa\u56fe\u4e66\u8868\nmysql> create table book(\n  id int primary key auto_increment,\n  name char(20),\n  chubanshe_id int not null,\n  foreign key(chubanshe_id) references chubanshe(id) on delete cascade on update cascade);\nQuery OK, 0 rows affected (0.04 sec)\n\n//\u5411\u51fa\u7248\u793e\u8868\u4e2d\u63d2\u5165\u6570\u636e\nmysql> insert into chubanshe(name) values\n       ('\u4eba\u6c11\u51fa\u7248\u793e'),\n       ('\u90ae\u7535\u51fa\u7248\u793e'),\n       ('\u673a\u68b0\u51fa\u7248\u793e');\nQuery OK, 3 rows affected (0.01 sec)\nRecords: 3  Duplicates: 0  Warnings: 0\n\nmysql> select * from chubanshe;\n+----+-----------------+\n| id | name            |\n+----+-----------------+\n|  1 | \u4eba\u6c11\u51fa\u7248\u793e      |\n|  2 | \u90ae\u7535\u51fa\u7248\u793e      |\n|  3 | \u673a\u68b0\u51fa\u7248\u793e      |\n+----+-----------------+\n3 rows in set (0.00 sec)\n\n\n//\u5411\u56fe\u4e66\u8868\u4e2d\u63d2\u5165\u6570\u636e\nmysql> insert into book(name,chubanshe_id) values\n       ('\u7ae5\u8bdd\u6545\u4e8b',1),\n       ('\u963f\u7ae5\u6728',2),\n       ('\u8001\u4eba\u4e0e\u6d77',1),\n       ('\u4f1a\u98de\u7684\u9e1f',3),\n       ('\u8475\u82b1\u5b9d\u5178',2);\nQuery OK, 5 rows affected (0.00 sec)\nRecords: 5  Duplicates: 0  Warnings: 0\n\nmysql> select * from book;\n+----+--------------+--------------+\n| id | name         | chubanshe_id |\n+----+--------------+--------------+\n|  1 | \u7ae5\u8bdd\u6545\u4e8b     |            1 |\n|  2 | \u963f\u7ae5\u6728       |            2 |\n|  3 | \u8001\u4eba\u4e0e\u6d77     |            1 |\n|  4 | \u4f1a\u98de\u7684\u9e1f     |            3 |\n|  5 | \u8475\u82b1\u5b9d\u5178     |            2 |\n+----+--------------+--------------+\n5 rows in set (0.00 sec)\n\n\n\u73b0\u5728\u51fa\u7248\u793e\u8868\u4e0e\u56fe\u4e66\u8868\u5c31\u662f\u4e00\u5bf9\u591a\u5173\u7cfb\uff0c\u56fe\u4e66\u8868\u4e2d\u7684chubanshe_id\u5bf9\u5e94\u51fa\u7248\u793e\u8868\u4e2d\u7684\u51fa\u7248\u793eid\uff0c\u4e00\u4e2a\u51fa\u7248\u793e\u53ef\u4ee5\u51fa\u7248\u591a\u4e2a\u4e66\n"})}),"\n",(0,r.jsx)(e.h4,{id:"212-\u793a\u4f8b2\u5b66\u751f\u8868\u548c\u73ed\u7ea7\u8868",children:(0,r.jsx)(e.strong,{children:"2.1.2 \u793a\u4f8b2\uff0c\u5b66\u751f\u8868\u548c\u73ed\u7ea7\u8868"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u4e00\u4e2a\u73ed\u7ea7\u53ef\u4ee5\u6709\u591a\u4e2a\u5b66\u751f\uff0c\u4f46\u662f\u4e00\u4e2a\u5b66\u751f\u53ea\u80fd\u5c5e\u4e8e\u4e00\u4e2a\u73ed\u7ea7"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"#\u521b\u5efa\u5b66\u751f\u8868\nmysql> create table student(\n       sid int primary key auto_increment,\n       sname char(10) not null,\n       class_id int not null,\n       foreign key(class_id) references class(cid));\nQuery OK, 0 rows affected (0.02 sec)\n\n#\u521b\u5efa\u73ed\u7ea7\u8868\nmysql> create table class(cid int auto_increment primary key);\nQuery OK, 0 rows affected (0.04 sec)\n\n\n//\u5411\u5b66\u751f\u8868\u4e2d\u63d2\u5165\u6570\u636e\nmysql> insert into student(sname,class_id) values('\u5c0f\u660e',1),('\u5c0f\u7ea2',1),('\u5c0f\u6d32',2),('\u5c0f\u8096',3),('\u5c0f\u4e3d',3);\nQuery OK, 5 rows affected (0.00 sec)\nRecords: 5  Duplicates: 0  Warnings: 0\n      \n\nmysql> select * from student;\n+-----+--------+----------+\n| sid | sname  | class_id |\n+-----+--------+----------+\n|   1 | \u5c0f\u660e   |        1 |\n|   2 | \u5c0f\u7ea2   |        1 |\n|   3 | \u5c0f\u6d32   |        2 |\n|   4 | \u5c0f\u8096   |        3 |\n|   5 | \u5c0f\u4e3d   |        3 |\n+-----+--------+----------+\n5 rows in set (0.00 sec)   \n      \n//\u5411\u73ed\u7ea7\u8868\u4e2d\u63d2\u5165\u6570\u636e\uff0c\u56e0\u4e3a\u53ea\u6709\u4e00\u4e2acid\uff0c\u81ea\u52a8\u589e\u957f\nmysql> insert into class values();\nQuery OK, 1 row affected (0.01 sec)\n\nmysql> select * from class;\n+-----+\n| cid |\n+-----+\n|   1 |\n|   2 |\n|   3 |\n+-----+\n3 rows in set (0.00 sec)\n\n\n\n//\u9519\u8bef\u793a\u4f8b\uff0c\u5411\u5b66\u751f\u8868\u4e2d\u63d2\u5165\u4e00\u6761\u6570\u636e\uff0c\u73ed\u7ea7id\u6307\u5b9a\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\uff0c\u4f1a\u62a5\u9519\nmysql> insert into student(sname,class_id) values('\u5c0f\u9ed1',4);\nERROR 1452 (23000): Cannot add or update a child row: a foreign key constraint fails (`ppp`.`student`, CONSTRAINT `student_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `class` (`cid`))\n    \n//\u9519\u8bef\u793a\u4f8b\uff0c\u5c1d\u8bd5\u5220\u9664\u73ed\u7ea7\u8868\u4e2d\u7684\u4e00\u4e2a\u8bb0\u5f55\uff0c\u62a5\u9519\uff0c\u4e0d\u53ef\u4ee5\u5220\u9664\uff0c\u56e0\u4e3a\u5b66\u751f\u8868\u4e2d\u6709\u5bf9\u5e94\u7684\u73ed\u7ea7\uff0c\u8fd9\u4e2a\u65e0\u6cd5\u5220\u9664\nmysql> delete from class where cid=1;\nERROR 1451 (23000): Cannot delete or update a parent row: a foreign key constraint fails (`ppp`.`student`, CONSTRAINT `student_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `class` (`cid`))\n"})}),"\n",(0,r.jsx)(e.h4,{id:"213-\u793a\u4f8b3\u673a\u623f\u8868\u4e0e\u670d\u52a1\u5668\u8868",children:"2.1.3 \u793a\u4f8b3\uff0c\u673a\u623f\u8868\u4e0e\u670d\u52a1\u5668\u8868"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u4e00\u4e2a\u673a\u623f\u53ef\u4ee5\u6709\u591a\u4e2a\u670d\u52a1\u5668\uff0c\u4f46\u662f\u4e00\u4e2a\u670d\u52a1\u5668\u53ea\u80fd\u5f52\u5c5e\u4e00\u4e2a\u673a\u623f"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"#\u521b\u5efa\u673a\u623f\u8868\nmysql> create table server_room(\n       rid int primary key auto_increment,\n       rname char(10) not null);\nQuery OK, 0 rows affected (0.03 sec)\n\n#\u521b\u5efa\u670d\u52a1\u5668\u8868\nmysql> create table server(\n       sid int primary key auto_increment,\n       sname char(10) not null,room_id int not null,\n       foreign key(room_id) references server_room(rid));\nQuery OK, 0 rows affected (0.02 sec)\n\n\n//\u5411\u673a\u623f\u8868\u4e2d\u63d2\u5165\u6570\u636e\nmysql> insert into server_room(rname) values('\u623f\u5c71\u673a\u623f'),('\u77f3\u666f\u5c71\u673a\u623f'),('\u4e30\u53f0 \u673a\u623f');\nQuery OK, 3 rows affected (0.00 sec)\nRecords: 3  Duplicates: 0  Warnings: 0\n\nmysql> select * from server_room;\n+-----+-----------------+\n| rid | rname           |\n+-----+-----------------+\n|   1 | \u623f\u5c71\u673a\u623f        |\n|   2 | \u77f3\u666f\u5c71\u673a\u623f      |\n|   3 | \u4e30\u53f0\u673a\u623f        |\n+-----+-----------------+\n3 rows in set (0.00 sec)\n\n//\u5411\u670d\u52a1\u5668\u8868\u4e2d\u63d2\u5165\u6570\u636e\nmysql> insert into server(sname,room_id) values('HP',1),('DELL',1),('\u8054\u60f3',2),('IBM',3),('\u534e\u4e3a',3);\nQuery OK, 5 rows affected (0.00 sec)\nRecords: 5  Duplicates: 0  Warnings: 0\n\nmysql> select * from server;\n+-----+--------+---------+\n| sid | sname  | room_id |\n+-----+--------+---------+\n|   1 | HP     |       1 |\n|   2 | DELL   |       1 |\n|   3 | \u8054\u60f3   |       2 |\n|   4 | IBM    |       3 |\n|   5 | \u534e\u4e3a   |       3 |\n+-----+--------+---------+\n5 rows in set (0.00 sec)\n\n\n//\u9519\u8bef\u793a\u4f8b\uff0c\u5c1d\u8bd5\u4fee\u6539\u673a\u623f\u8868\u4e2d\u7684\u673a\u623f\u7f16\u53f7\uff0c\u7ed3\u679c\u62a5\u9519\uff0c\u56e0\u4e3a\u670d\u52a1\u5668\u8868\u4e2d\u6709\u5bf9\u5e94\u7f16\u53f7\u4e3a3\u7684\u4e30\u53f0\u673a\u623f\u7684\u670d\u52a1\u5668\nmysql> select * from server_room;\n+-----+-----------------+\n| rid | rname           |\n+-----+-----------------+\n|   1 | \u623f\u5c71\u673a\u623f        |\n|   2 | \u77f3\u666f\u5c71\u673a\u623f      |\n|   3 | \u4e30\u53f0\u673a\u623f        |\n+-----+-----------------+\n3 rows in set (0.00 sec)\n\nmysql> update server_room set rid=5 where rid=3;\nERROR 1451 (23000): Cannot delete or update a parent row: a foreign key constraint fails (`ppp`.`server`, CONSTRAINT `server_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `server_room` (`rid`))\n"})}),"\n",(0,r.jsx)(e.h3,{id:"22-\u4e00\u5bf9\u4e00",children:"2.2 \u4e00\u5bf9\u4e00"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u5173\u8054\u65b9\u5f0f"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"foreign\tkey+unique"})}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u8868\u4e0e\u8868\u4e4b\u95f4\u7684\u5173\u7cfb\u662f\u4e00\u5bf9\u4e00"}),"\n",(0,r.jsx)(e.p,{children:"\u4f8b\u5982\uff0c\u516c\u53f8\u4e2d\u5458\u5de5\u4e0e\u5458\u5de5\u7684\u4f01\u4e1a\u90ae\u7bb1\u5c31\u662f\u4e00\u5bf9\u4e00\u5173\u7cfb"}),"\n"]}),"\n",(0,r.jsx)(e.h4,{id:"221-\u793a\u4f8b1\u5458\u5de5\u8868\u4e0e\u4f01\u4e1a\u90ae\u7bb1\u8868",children:"2.2.1 \u793a\u4f8b1\uff0c\u5458\u5de5\u8868\u4e0e\u4f01\u4e1a\u90ae\u7bb1\u8868"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"#\u521b\u5efa\u5458\u5de5\u8868\nmysql> create table employee(\n  eid int primary key auto_increment,\t#\u5458\u5de5id\uff0c\u4e3b\u952e\uff0c\u81ea\u589e\n  ename char(20) not null,\t#\u5458\u5de5\u59d3\u540d\n  sex enum('F','M'),\t#\u5458\u5de5\u6027\u522b\n  enterprise_mail_id int unique);\t#\u4f01\u4e1a\u90ae\u7bb1id\uff0c\u4e0d\u80fd\u91cd\u590d\nQuery OK, 0 rows affected (0.03 sec)\n\n#\u521b\u5efa\u4f01\u4e1a\u90ae\u7bb1\u8868\nmysql> create table enterprise_mail(\n  mid int primary key,\t#\u4f01\u4e1a\u90ae\u7bb1id\uff0c\u4e3b\u952e\n  email char(50),\t\t\t\t#\u90ae\u7bb1\u4fe1\u606f\n  employee_id int unique not null,\t#\u5458\u5de5id\uff0c\u4e0d\u80fd\u91cd\u590d\n  foreign key(employee_id) references employee(eid));\t#\u4f01\u4e1a\u90ae\u7bb1\u8868\u4e2d\u7684\u5458\u5de5id\u662f\u5916\u952e\uff0c\u5173\u8054\u5458\u5de5\u8868\u4e2d\u7684\u5458\u5de5id\nQuery OK, 0 rows affected (0.03 sec)\n\n\n//\u5411\u5458\u5de5\u8868\u4e2d\u63d2\u5165\u6570\u636e\nmysql> insert into employee(ename,sex,enterprise_mail_id) values\n    -> ('\u5c0f\u660e','M',101),\n    -> ('\u5c0f\u6d32','M',102),\n    -> ('\u5c0f\u9896','F',103);\nQuery OK, 3 rows affected (0.00 sec)\nRecords: 3  Duplicates: 0  Warnings: 0\n\nmysql> select * from employee;\n+-----+--------+------+--------------------+\n| eid | ename  | sex  | enterprise_mail_id |\n+-----+--------+------+--------------------+\n|   1 | \u5c0f\u660e   | M    |                101 |\n|   2 | \u5c0f\u6d32   | M    |                102 |\n|   3 | \u5c0f\u9896   | F    |                103 |\n+-----+--------+------+--------------------+\n3 rows in set (0.00 sec)\n\n\n//\u5411\u4f01\u4e1a\u90ae\u7bb1\u8868\u4e2d\u63d2\u5165\u6570\u636e\nmysql> insert into enterprise_mail values\n     (101,'xiaoming@testin.cn',1),\n     (102,'xiaozhou@testin.cn',2),\n     (103,'xiaoying@testin.cn',3);\nQuery OK, 3 rows affected (0.01 sec)\nRecords: 3  Duplicates: 0  Warnings: 0\n\nmysql> select * from enterprise_mail;\n+-----+--------------------+-------------+\n| mid | email              | employee_id |\n+-----+--------------------+-------------+\n| 101 | xiaoming@testin.cn |           1 |\n| 102 | xiaozhou@testin.cn |           2 |\n| 103 | xiaoying@testin.cn |           3 |\n+-----+--------------------+-------------+\n3 rows in set (0.00 sec)\n\n\n//\u5c1d\u8bd5\u5220\u9664\u5458\u5de5\u8868\u4e2d\u7684\u4efb\u610f\u4e00\u6761\u6570\u636e\uff0c\u56e0\u4e3a\u6709\u5916\u952e\u7ea6\u675f\uff0c\u56e0\u6b64\u65e0\u6cd5\u5220\u9664\nmysql> delete from employee where eid=1;\nERROR 1451 (23000): Cannot delete or update a parent row: a foreign key constraint fails (`db1`.`enterprise_mail`, CONSTRAINT `enterprise_mail_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`eid`))\n    \n//\u5c1d\u8bd5\u5220\u9664\u4f01\u4e1a\u90ae\u7bb1\u8868\u4e2d\u7684\u4efb\u610f\u4e00\u6761\u6570\u636e\nmysql> delete from enterprise_mail where mid=101;\nQuery OK, 1 row affected (0.01 sec)\n"})}),"\n",(0,r.jsx)(e.h3,{id:"23-\u591a\u5bf9\u591a",children:"2.3 \u591a\u5bf9\u591a"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u5173\u8054\u65b9\u5f0f"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"\u5916\u952eforeign key+\u4e00\u5f20\u65b0\u7684\u8868"})}),"\n"]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"\u8868\u4e0e\u8868\u4e4b\u95f4\u7684\u5173\u7cfb\u662f\u591a\u5bf9\u591a"}),"\n",(0,r.jsx)(e.p,{children:"\u4f8b\u5982\uff0c\u4e00\u672c\u4e66\u53ef\u4ee5\u6709\u591a\u4e2a\u4f5c\u8005\uff0c\u4e00\u4e2a\u4f5c\u8005\u53ef\u4ee5\u5199\u591a\u672c\u4e66"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://gitea.pptfz.cn/pptfz/picgo-images/raw/branch/master/img/iShot2020-10-14%2014.06.28.png",alt:"iShot2020-10-14 14.06.28"})}),"\n",(0,r.jsx)(e.h4,{id:"231-\u793a\u4f8b1\u4e66\u7c4d\u8868\u4f5c\u8005\u8868\u5173\u8054\u4e66\u7c4d\u8868\u4e0e\u4f5c\u8005\u8868\u7684\u7b2c3\u5f20\u8868",children:"2.3.1 \u793a\u4f8b1\uff0c\u4e66\u7c4d\u8868\u3001\u4f5c\u8005\u8868\u3001\u5173\u8054\u4e66\u7c4d\u8868\u4e0e\u4f5c\u8005\u8868\u7684\u7b2c3\u5f20\u8868"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"#\u521b\u5efa\u4e66\u7c4d\u8868\nmysql> create table book(\n       bid int primary key auto_increment,\n       bname char(20) not null);\nQuery OK, 0 rows affected (0.02 sec)\n\n#\u521b\u5efa\u4f5c\u8005\u8868\nmysql> create table author(\n       aid int primary key auto_increment,\n       aname char(20) not null);\nQuery OK, 0 rows affected (0.03 sec)\n\n#\u521b\u5efa\u5173\u8054\u4e66\u7c4d\u4e0e\u4f5c\u8005\u8868\uff0c\u8868\u4e2d\u6709\u4e66\u7c4did\u548c\u4f5c\u8005id\uff0c\u5206\u522b\u4f5c\u4e3a\u4e66\u7c4d\u8868\u4e2dbid\u548c\u4f5c\u8005\u8868\u4e2daid\u7684\u5916\u952e\nmysql> create table book_and_author(\n       book_id int not null,\n       author_id int not null,\n       foreign key(book_id) references book(bid),\n       foreign key(author_id) references author(aid));\nQuery OK, 0 rows affected (0.03 sec)\n\n\n//\u5411\u4e66\u7c4d\u8868\u4e2d\u63d2\u5165\u6570\u636e\nmysql> insert into book(bname) values('\u7ae5\u8bdd\u6545\u4e8b'),('\u90a3\u4e2a\u5973\u5b69'),('\u4e0a\u8bfe\u5fc5\u5907\u4e09\u4ef6\u5957');\nQuery OK, 3 rows affected (0.00 sec)\nRecords: 3  Duplicates: 0  Warnings: 0\n      \nmysql> select * from book;\n+-----+-----------------------+\n| bid | bname                 |\n+-----+-----------------------+\n|   1 | \u7ae5\u8bdd\u6545\u4e8b              |\n|   2 | \u90a3\u4e2a\u5973\u5b69              |\n|   3 | \u4e0a\u8bfe\u5fc5\u5907\u4e09\u4ef6\u5957        |\n+-----+-----------------------+\n3 rows in set (0.00 sec)      \n\n\n//\u5411\u4f5c\u8005\u8868\u4e2d\u63d2\u5165\u6570\u636e\nmysql> insert into author(aname) values('\u4f5c\u8005\u5c0f\u660e'),('\u4f5c\u8005\u5c0f\u4e3d'),('\u4f5c\u8005\u5c0f\u6d32');\nQuery OK, 3 rows affected (0.01 sec)\nRecords: 3  Duplicates: 0  Warnings: 0\n\nmysql> select * from author;\n+-----+--------------+\n| aid | aname        |\n+-----+--------------+\n|   1 | \u4f5c\u8005\u5c0f\u660e     |\n|   2 | \u4f5c\u8005\u5c0f\u4e3d     |\n|   3 | \u4f5c\u8005\u5c0f\u6d32     |\n+-----+--------------+\n3 rows in set (0.00 sec)\n\n\n//\u5411\u5173\u8054\u8868\u4e2d\u63d2\u5165\u6570\u636e\nmysql> insert into book_and_author values(1,1),(1,2),(2,2),(2,3),(3,1),(3,3);\nQuery OK, 6 rows affected (0.00 sec)\nRecords: 6  Duplicates: 0  Warnings: 0\n\nmysql> select * from book_and_author;\n+---------+-----------+\n| book_id | author_id |\n+---------+-----------+\n|       1 |         1 |\t#\u7ae5\u8bdd\u6545\u4e8b\u7684\u4f5c\u8005\u662f\u5c0f\u660e\n|       1 |         2 |\t#\u7ae5\u8bdd\u6545\u4e8b\u7684\u4f5c\u8005\u662f\u5c0f\u4e3d\n|       2 |         2 |\t#\u90a3\u4e2a\u5973\u5b69\u7684\u4f5c\u8005\u662f\u5c0f\u4e3d\n|       2 |         3 |\t#\u90a3\u4e2a\u5973\u5b69\u7684\u4f5c\u8005\u662f\u5c0f\u6d32\n|       3 |         1 |\t#\u4e0a\u8bfe\u5fc5\u5907\u4e09\u4ef6\u5957\u7684\u4f5c\u8005\u662f\u5c0f\u660e\t\n|       3 |         3 |\t#\u4e0a\u8bfe\u5fc5\u5907\u4e09\u4ef6\u5957\u7684\u4f5c\u8005\u662f\u5c0f\u6d32\n+---------+-----------+\n6 rows in set (0.00 sec)\n\u8fd9\u4e2a\u5173\u8054\u4e66\u7c4d\u8868\u4e0e\u4f5c\u8005\u8868\u7684\u5173\u8054\u8868\u4e2d\u5c31\u662f\u4e00\u4e2a\u4f5c\u8005\u5199\u4e86\u591a\u672c\u4e66\uff0c\u4e00\u672c\u4e66\u6709\u591a\u4e2a\u4f5c\u8005\n\n\n//\u9519\u8bef\u793a\u8303\uff0c\u5c1d\u8bd5\u5220\u9664\u4e66\u7c4d\u8868\u4e0e\u4f5c\u8005\u8868\u4e2d\u7684\u4efb\u610f\u4e00\u6761\u6570\u636e\nmysql> delete from book where bid=1;\nERROR 1451 (23000): Cannot delete or update a parent row: a foreign key constraint fails (`db1`.`book_and_author`, CONSTRAINT `book_and_author_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `book` (`bid`))\n    \nmysql> delete from author where aid=3;\nERROR 1451 (23000): Cannot delete or update a parent row: a foreign key constraint fails (`db1`.`book_and_author`, CONSTRAINT `book_and_author_ibfk_2` FOREIGN KEY (`author_id`) REFERENCES `author` (`aid`))\n    \n    \n//\u5220\u9664\u5173\u8054\u8868\u4e2d\u7684\u6570\u636e\uff0c\u662f\u53ef\u4ee5\u5220\u9664\u7684\uff0c\u56e0\u4e3a\u8fd9\u53ea\u662f\u4e00\u4e2a\u5173\u8054\u8868\uff0c\u5220\u9664\u4e86\u5173\u8054id\uff0c\u53ea\u662f\u628a\u539f\u6765\u4e24\u5f20\u8868\u7684\u5173\u8054\u5173\u7cfb\u5220\u9664\u4e86\n\u8fd9\u91cc\u5220\u9664\u4e86\u5173\u8054\u8868\u4e2d\u7684\u56fe\u4e66id\uff0c\u8fd9\u6837\u5c31\u662f\u539f\u6765\u7684\u56fe\u4e66\u8868\u4e2d\u4e3a1\u7684\u4e66\u627e\u4e0d\u5230\u5bf9\u5e94\u7684\u4f5c\u8005\u4e86\nmysql> delete from book_and_author where book_id=1;\nQuery OK, 2 rows affected (0.01 sec)\n\nmysql> select * from book_and_author;\n+---------+-----------+\n| book_id | author_id |\n+---------+-----------+\n|       2 |         2 |\n|       2 |         3 |\n|       3 |         1 |\n|       3 |         3 |\n+---------+-----------+\n4 rows in set (0.00 sec)\n\n//\u5220\u9664\u5173\u8054id\u540e\u5c31\u53ef\u4ee5\u5220\u9664\u539f\u5148\u4e0d\u80fd\u5220\u9664\u7684\u56fe\u4e66\u6216\u8005\u4f5c\u8005id\u4e86\nmysql> delete from book where bid=1;\nQuery OK, 1 row affected (0.00 sec)\n\n//\u5173\u8054id\u4e3a2\u7684\u6ca1\u6709\u5220\u9664\uff0c\u56e0\u6b64\u4e0d\u80fd\u5220\u9664\u56fe\u4e66\u8868\u4e2dbid\u4e3a2\u7684\nmysql> delete from book where bid=2;\nERROR 1451 (23000): Cannot delete or update a parent row: a foreign key constraint fails (`db1`.`book_and_author`, CONSTRAINT `book_and_author_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `book` (`bid`))\n"})})]})}function m(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>l});var r=s(96540);const i={},t=r.createContext(i);function o(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);