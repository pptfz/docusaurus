"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2058],{74769:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=t(74848),c=t(28453);const r={},s=void 0,i={id:"python/python-other/python-TCP\u670d\u52a1\u7aef\u3001\u5ba2\u6237\u7aef",title:"python-TCP\u670d\u52a1\u7aef\u3001\u5ba2\u6237\u7aef",description:"TCP\u670d\u52a1\u7aef",source:"@site/docs/python/python-other/python-TCP\u670d\u52a1\u7aef\u3001\u5ba2\u6237\u7aef.md",sourceDirName:"python/python-other",slug:"/python/python-other/python-TCP\u670d\u52a1\u7aef\u3001\u5ba2\u6237\u7aef",permalink:"/docs/python/python-other/python-TCP\u670d\u52a1\u7aef\u3001\u5ba2\u6237\u7aef",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"nginx+django+uwsgi\u90e8\u7f72\u9879\u76ee",permalink:"/docs/python/python-other/nginx+django+uwsgi\u90e8\u7f72\u9879\u76ee"},next:{title:"python\u53d1\u9001\u90ae\u4ef6\ud83d\udce9",permalink:"/docs/python/python-other/python\u53d1\u9001\u90ae\u4ef6\ud83d\udce9"}},d={},p=[{value:"TCP\u670d\u52a1\u7aef",id:"tcp\u670d\u52a1\u7aef",level:2},{value:"TCP\u5ba2\u6237\u7aef",id:"tcp\u5ba2\u6237\u7aef",level:2}];function a(n){const e={code:"code",h2:"h2",pre:"pre",...(0,c.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"tcp\u670d\u52a1\u7aef",children:"TCP\u670d\u52a1\u7aef"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'#\u5bfc\u5165socket\u6a21\u5757\nfrom socket import *\n\n#\u521b\u5efa\u53ea\u7528\u6765\u76d1\u542c\u7684\u5957\u63a5\u5b57\u5bf9\u8c61\nserverSocket = socket(AF_INET,SOCK_STREAM)\n\n#\u7ed1\u5b9aTCP\u670d\u52a1\u7aefIP\u548c\u7aef\u53e3\naddr = ("192.168.34.90",6666)\nserverSocket.bind(addr)\n\n#\u8bbe\u7f6e\u6700\u5927\u6392\u961f\u7b49\u5f85\u6570\nserverSocket.listen(3)\n\n#\u8fd9\u91cc\u8981\u80fd\u591a\u6b21\u5904\u7406\u5ba2\u6237\u7aef\u8fde\u63a5\u8bf7\u6c42\uff0c\u56e0\u6b64\u5199\u4e00\u4e2awhile\u5faa\u73af\nwhile True:\n    print("\u4e3b\u8fdb\u7a0b\u7b49\u5f85\u65b0\u5ba2\u6237\u7aef\u8fde\u63a5")\n\n    #\u521b\u5efaaccept\uff0c\u7528\u6765\u7b49\u5f85\u5ba2\u6237\u7aefsocket\u8fde\u63a5\n    newSocket,clientAddr = serverSocket.accept()\n    print(newSocket)    #\u6253\u5370\u7ed3\u679c   <socket.socket fd=4, family=AddressFamily.AF_INET, type=SocketKind.SOCK_STREAM, proto=0, laddr=(\'192.168.34.90\', 9999), raddr=(\'192.168.34.90\', 55255)>\n\n    print(clientAddr)   #\u6253\u5370\u7ed3\u679c   (\'192.168.34.90\', 55255)\n\n    #clientAddr[0]\u5c31\u662f\u5ba2\u6237\u7aef\u7684IP\u5730\u5740\uff0cclientAddr[1]\u5c31\u662f\u5ba2\u6237\u7aef\u7684\u7aef\u53e3\n    print(f"\u4e3b\u8fdb\u7a0b\u63a5\u4e0b\u6765\u8d1f\u8d23\u5904\u7406{clientAddr[0]},\u7aef\u53e3{clientAddr[1]}\u7684\u8bf7\u6c42")\n\n    #\u4f20\u8f93\u8fc7\u7a0b\u53ef\u80fd\u4f1a\u51fa\u9519\uff0c\u56e0\u6b64\u5199\u4e00\u4e2a\u5f02\u5e38\u5904\u7406\u907f\u514d\u7a0b\u5e8f\u5d29\u6e83\n    try:\n        while True:\n\n            #\u63a5\u53d7\u6570\u636e\u5e76\u89e3\u7801\uff0c\u7f16\u7801\u7c7b\u578b\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u586b\u5199\n            recvData = newSocket.recv(1024).decode()\n\n            #\u505a\u4e00\u4e2a\u5224\u65ad\uff0c\u5982\u679c\u6536\u5230\u7684\u6570\u636e\u5185\u5bb9\u957f\u5ea6\u5927\u4e8e0\uff0c\u5219\u8bf4\u660e\u662f\u5728\u63a5\u53d7\u6570\u636e\uff0c\u5e76\u6253\u5370\u63a5\u53d7\u7684\u6570\u636e\uff0c\u90fd\u5219\u5c31\u63d0\u793a\u5ba2\u6237\u7aef\u5df2\u5173\u95ed\n            if len(recvData) > 0:\n                print(f"\u63a5\u6536\u5230\u6765\u81ea{clientAddr[0]}\uff0c\u7aef\u53e3{clientAddr[1]}\u7684\u6570\u636e:",recvData)\n            else:\n                print(f"{clientAddr[0]}\u5ba2\u6237\u7aef\u5df2\u5173\u95ed")\n                break\n    except Exception:\n        print("\u63a5\u6536\u6570\u636e\u51fa\u9519\uff01")\n\n    #\u65e0\u8bba\u63a5\u53d7\u662f\u5426\u62a5\u9519\u6700\u540e\u90fd\u6267\u884c\u5173\u95ed\u65b0\u5efa\u7684\u7528\u4e8e\u6536\u53d1\u6570\u636e\u7684\u5957\u63a5\u5b57\n    finally:\n        newSocket.close()\n    break\n\n#\u5173\u95ed\u7528\u4e8e\u76d1\u542c\u7684\u5957\u63a5\u5b57\nserverSocket.close()\n\n'})}),"\n",(0,o.jsx)(e.h2,{id:"tcp\u5ba2\u6237\u7aef",children:"TCP\u5ba2\u6237\u7aef"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'#\u5bfc\u5165socket\u6a21\u5757\nfrom socket import *\n\n#\u521b\u5efasocket\u5957\u63a5\u5b57\u5bf9\u8c61\ntcpSocket = socket(AF_INET,SOCK_STREAM)\n\n#\u521b\u5efaconnect\uff0c\u7528\u4e8e\u8fde\u63a5TCP\u670d\u52a1\u5668\ntcpSocket.connect(("192.168.34.90",6666))\n\n\n#\u5411TCP\u670d\u52a1\u7aef\u53d1\u9001\u6570\u636e\nwhile True:\n    choose = input("\u8bf7\u8f93\u5165\u8981\u53d1\u9001\u7684\u5185\u5bb9>>>")\n    tcpSocket.send(choose.encode("utf-8"))\n    # recvData = tcpSocket.recv(1024).decode()\n    # print(f"---------\x3e\u63a5\u6536\u5230\u670d\u52a1\u5668\u4f20\u6765\u7684\u6570\u636e:{recvData}")\n    #\u5982\u679c\u5ba2\u6237\u7aef\u8f93\u5165\u7684\u662fQ\u6216\u8005q\uff0c\u5219\u5173\u95ed\u5957\u63a5\u5b57\u5bf9\u8c61\u5e76\u9000\u51fa\u7a0b\u5e8f\n    if choose.lower() == "q":\n        tcpSocket.close()\n        break\n\n\n\n#\u63a5\u53d7\u6570\u636e\n# recvData = tcpSocket.recv(1024)         //\u7b49\u5f85\u670d\u52a1\u7aef\u53d1\uff0c\u670d\u52a1\u7aef\u7b49\u5f85\u5ba2\u6237\u7aef\u53d1\uff0c\u6b7b\u9501\n# print(recvData.decode())\n'})})]})}function l(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>i});var o=t(96540);const c={},r=o.createContext(c);function s(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:s(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);