"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3074],{43171:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>r});var s=t(74848),a=t(28453);const l={},o="DaemonSet\u6eda\u52a8\u66f4\u65b0\u548c\u56de\u6eda",d={id:"\u4e91\u539f\u751f/k8s/k8s\u77e5\u8bc6\u70b9/\u5de5\u4f5c\u8d1f\u8f7d/DaemonSet/DaemonSet\u6eda\u52a8\u66f4\u65b0\u548c\u56de\u6eda",title:"DaemonSet\u6eda\u52a8\u66f4\u65b0\u548c\u56de\u6eda",description:"DaemonSet\u6eda\u52a8\u66f4\u65b0\u5b98\u65b9\u6587\u6863",source:"@site/docs/\u4e91\u539f\u751f/k8s/k8s\u77e5\u8bc6\u70b9/\u5de5\u4f5c\u8d1f\u8f7d/DaemonSet/DaemonSet\u6eda\u52a8\u66f4\u65b0\u548c\u56de\u6eda.md",sourceDirName:"\u4e91\u539f\u751f/k8s/k8s\u77e5\u8bc6\u70b9/\u5de5\u4f5c\u8d1f\u8f7d/DaemonSet",slug:"/\u4e91\u539f\u751f/k8s/k8s\u77e5\u8bc6\u70b9/\u5de5\u4f5c\u8d1f\u8f7d/DaemonSet/DaemonSet\u6eda\u52a8\u66f4\u65b0\u548c\u56de\u6eda",permalink:"/docs/\u4e91\u539f\u751f/k8s/k8s\u77e5\u8bc6\u70b9/\u5de5\u4f5c\u8d1f\u8f7d/DaemonSet/DaemonSet\u6eda\u52a8\u66f4\u65b0\u548c\u56de\u6eda",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528CronJob\u8fd0\u884c\u81ea\u52a8\u5316\u4efb\u52a1",permalink:"/docs/\u4e91\u539f\u751f/k8s/k8s\u77e5\u8bc6\u70b9/\u5de5\u4f5c\u8d1f\u8f7d/CronJob/\u4f7f\u7528CronJob\u8fd0\u884c\u81ea\u52a8\u5316\u4efb\u52a1"},next:{title:"DaemonSet\u7b80\u4ecb",permalink:"/docs/\u4e91\u539f\u751f/k8s/k8s\u77e5\u8bc6\u70b9/\u5de5\u4f5c\u8d1f\u8f7d/DaemonSet/DaemonSet\u7b80\u4ecb"}},i={},r=[{value:"DaemonSet \u66f4\u65b0\u7b56\u7565",id:"daemonset-\u66f4\u65b0\u7b56\u7565",level:2},{value:"\u6267\u884c\u6eda\u52a8\u66f4\u65b0",id:"\u6267\u884c\u6eda\u52a8\u66f4\u65b0",level:2},{value:"\u521b\u5efa\u5e26\u6709 <code>RollingUpdate</code> \u66f4\u65b0\u7b56\u7565\u7684 DaemonSet",id:"\u521b\u5efa\u5e26\u6709-rollingupdate-\u66f4\u65b0\u7b56\u7565\u7684-daemonset",level:3},{value:"\u68c0\u67e5 DaemonSet \u7684\u6eda\u52a8\u66f4\u65b0\u7b56\u7565",id:"\u68c0\u67e5-daemonset-\u7684\u6eda\u52a8\u66f4\u65b0\u7b56\u7565",level:3},{value:"\u66f4\u65b0 DaemonSet \u6a21\u677f",id:"\u66f4\u65b0-daemonset-\u6a21\u677f",level:3},{value:"\u76d1\u89c6\u6eda\u52a8\u66f4\u65b0\u72b6\u6001",id:"\u76d1\u89c6\u6eda\u52a8\u66f4\u65b0\u72b6\u6001",level:3},{value:"\u6545\u969c\u6392\u67e5",id:"\u6545\u969c\u6392\u67e5",level:2},{value:"DaemonSet \u6eda\u52a8\u66f4\u65b0\u5361\u4f4f",id:"daemonset-\u6eda\u52a8\u66f4\u65b0\u5361\u4f4f",level:3},{value:"\u4e00\u4e9b\u8282\u70b9\u53ef\u7528\u8d44\u6e90\u8017\u5c3d",id:"\u4e00\u4e9b\u8282\u70b9\u53ef\u7528\u8d44\u6e90\u8017\u5c3d",level:4},{value:"\u4e0d\u5b8c\u6574\u7684\u6eda\u52a8\u66f4\u65b0",id:"\u4e0d\u5b8c\u6574\u7684\u6eda\u52a8\u66f4\u65b0",level:4},{value:"\u65f6\u949f\u504f\u5dee",id:"\u65f6\u949f\u504f\u5dee",level:4},{value:"\u6e05\u7406",id:"\u6e05\u7406",level:2},{value:"DaemonSet\u56de\u6eda",id:"daemonset\u56de\u6eda",level:2},{value:"\u6b65\u9aa4 1\uff1a\u627e\u5230\u60f3\u8981 DaemonSet \u56de\u6eda\u5230\u7684\u5386\u53f2\u4fee\u8ba2\u7248\u672c\uff08revision\uff09",id:"\u6b65\u9aa4-1\u627e\u5230\u60f3\u8981-daemonset-\u56de\u6eda\u5230\u7684\u5386\u53f2\u4fee\u8ba2\u7248\u672crevision",level:3},{value:"\u6b65\u9aa4 2\uff1a\u56de\u6eda\u5230\u6307\u5b9a\u7248\u672c",id:"\u6b65\u9aa4-2\u56de\u6eda\u5230\u6307\u5b9a\u7248\u672c",level:3},{value:"\u6b65\u9aa4 3\uff1a\u76d1\u89c6 DaemonSet \u56de\u6eda\u8fdb\u5ea6",id:"\u6b65\u9aa4-3\u76d1\u89c6-daemonset-\u56de\u6eda\u8fdb\u5ea6",level:3},{value:"\u7406\u89e3 DaemonSet \u4fee\u8ba2\u7248\u672c",id:"\u7406\u89e3-daemonset-\u4fee\u8ba2\u7248\u672c",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"daemonset\u6eda\u52a8\u66f4\u65b0\u548c\u56de\u6eda",children:"DaemonSet\u6eda\u52a8\u66f4\u65b0\u548c\u56de\u6eda"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://kubernetes.io/zh-cn/docs/tasks/manage-daemon/update-daemon-set/",children:"DaemonSet\u6eda\u52a8\u66f4\u65b0\u5b98\u65b9\u6587\u6863"})}),"\n",(0,s.jsx)(n.h2,{id:"daemonset-\u66f4\u65b0\u7b56\u7565",children:"DaemonSet \u66f4\u65b0\u7b56\u7565"}),"\n",(0,s.jsx)(n.p,{children:"DaemonSet \u6709\u4e24\u79cd\u66f4\u65b0\u7b56\u7565\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"OnDelete"}),": \u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"OnDelete"})," \u66f4\u65b0\u7b56\u7565\u65f6\uff0c\u5728\u66f4\u65b0 DaemonSet \u6a21\u677f\u540e\uff0c\u53ea\u6709\u5f53\u4f60\u624b\u52a8\u5220\u9664\u8001\u7684 DaemonSet pods \u4e4b\u540e\uff0c\u65b0\u7684 DaemonSet Pod ",(0,s.jsx)(n.strong,{children:"\u624d\u4f1a"}),"\u88ab\u81ea\u52a8\u521b\u5efa\u3002\u8ddf Kubernetes 1.6 \u4ee5\u524d\u7684\u7248\u672c\u7c7b\u4f3c\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"RollingUpdate"}),": \u8fd9\u662f\u9ed8\u8ba4\u7684\u66f4\u65b0\u7b56\u7565\u3002\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"RollingUpdate"})," \u66f4\u65b0\u7b56\u7565\u65f6\uff0c\u5728\u66f4\u65b0 DaemonSet \u6a21\u677f\u540e\uff0c \u8001\u7684 DaemonSet Pod \u5c06\u88ab\u7ec8\u6b62\uff0c\u5e76\u4e14\u5c06\u4ee5\u53d7\u63a7\u65b9\u5f0f\u81ea\u52a8\u521b\u5efa\u65b0\u7684 DaemonSet Pod\u3002 ",(0,s.jsx)(n.strong,{children:"\u66f4\u65b0\u671f\u95f4\uff0c\u6700\u591a\u53ea\u80fd\u6709 DaemonSet \u7684\u4e00\u4e2a Pod \u8fd0\u884c\u4e8e\u6bcf\u4e2a\u8282\u70b9\u4e0a\u3002"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6267\u884c\u6eda\u52a8\u66f4\u65b0",children:"\u6267\u884c\u6eda\u52a8\u66f4\u65b0"}),"\n",(0,s.jsxs)(n.p,{children:["\u8981\u542f\u7528 DaemonSet \u7684\u6eda\u52a8\u66f4\u65b0\u529f\u80fd\uff0c\u5fc5\u987b\u8bbe\u7f6e ",(0,s.jsx)(n.code,{children:".spec.updateStrategy.type"})," \u4e3a ",(0,s.jsx)(n.code,{children:"RollingUpdate"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f60\u53ef\u80fd\u60f3\u8bbe\u7f6e ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/zh-cn/docs/reference/kubernetes-api/workload-resources/daemon-set-v1/#DaemonSetSpec",children:(0,s.jsx)(n.code,{children:".spec.updateStrategy.rollingUpdate.maxUnavailable"})})," (\u9ed8\u8ba4\u4e3a 1)\uff0c ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/zh-cn/docs/reference/kubernetes-api/workload-resources/daemon-set-v1/#DaemonSetSpec",children:(0,s.jsx)(n.code,{children:".spec.minReadySeconds"})})," (\u9ed8\u8ba4\u4e3a 0) \u548c ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/zh-cn/docs/reference/kubernetes-api/workload-resources/daemon-set-v1/#DaemonSetSpec",children:(0,s.jsx)(n.code,{children:".spec.updateStrategy.rollingUpdate.maxSurge"})})," \uff08\u9ed8\u8ba4\u4e3a 0\uff09\u3002"]}),"\n",(0,s.jsxs)(n.h3,{id:"\u521b\u5efa\u5e26\u6709-rollingupdate-\u66f4\u65b0\u7b56\u7565\u7684-daemonset",children:["\u521b\u5efa\u5e26\u6709 ",(0,s.jsx)(n.code,{children:"RollingUpdate"})," \u66f4\u65b0\u7b56\u7565\u7684 DaemonSet"]}),"\n",(0,s.jsx)(n.p,{children:"\u7f16\u8f91yaml\u6587\u4ef6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"cat > fluentd-daemonset.yaml << EOF\napiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: fluentd-elasticsearch\n  namespace: kube-system\n  labels:\n    k8s-app: fluentd-logging\nspec:\n  selector:\n    matchLabels:\n      name: fluentd-elasticsearch\n  updateStrategy:\n    type: RollingUpdate\n    rollingUpdate:\n      maxUnavailable: 1\n  template:\n    metadata:\n      labels:\n        name: fluentd-elasticsearch\n    spec:\n      tolerations:\n      # \u8fd9\u4e9b\u5bb9\u5fcd\u5ea6\u8bbe\u7f6e\u662f\u4e3a\u4e86\u8ba9\u8be5\u5b88\u62a4\u8fdb\u7a0b\u96c6\u5728\u63a7\u5236\u5e73\u9762\u8282\u70b9\u4e0a\u8fd0\u884c\n      # \u5982\u679c\u4f60\u4e0d\u5e0c\u671b\u81ea\u5df1\u7684\u63a7\u5236\u5e73\u9762\u8282\u70b9\u8fd0\u884c Pod\uff0c\u53ef\u4ee5\u5220\u9664\u5b83\u4eec\n      - key: node-role.kubernetes.io/master\n        effect: NoSchedule\n      containers:\n      - name: fluentd-elasticsearch\n        image: quay.io/fluentd_elasticsearch/fluentd:v2.5.2\n        volumeMounts:\n        - name: varlog\n          mountPath: /var/log\n        - name: varlibdockercontainers\n          mountPath: /var/lib/docker/containers\n          readOnly: true\n      terminationGracePeriodSeconds: 30\n      volumes:\n      - name: varlog\n        hostPath:\n          path: /var/log\n      - name: varlibdockercontainers\n        hostPath:\n          path: /var/lib/docker/containers\nEOF\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u521b\u5efadaemonset"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f fluentd-daemonset.yaml --record=true\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u67e5\u770bdaemonset"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl get ds -n kube-system\nNAME                    DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR            AGE\nfluentd-elasticsearch   3         3         3       3            3           <none>                   19s\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u68c0\u67e5-daemonset-\u7684\u6eda\u52a8\u66f4\u65b0\u7b56\u7565",children:"\u68c0\u67e5 DaemonSet \u7684\u6eda\u52a8\u66f4\u65b0\u7b56\u7565"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl get ds/fluentd-elasticsearch -o go-template='{{.spec.updateStrategy.type}}{{\"\\n\"}}' -n kube-system\nRollingUpdate\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl apply -f fluentd-daemonset.yaml --dry-run=client -o go-template='{{.spec.updateStrategy.type}}{{\"\\n\"}}'\nRollingUpdate\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u66f4\u65b0-daemonset-\u6a21\u677f",children:"\u66f4\u65b0 DaemonSet \u6a21\u677f"}),"\n",(0,s.jsxs)(n.p,{children:["\u5bf9 ",(0,s.jsx)(n.code,{children:"RollingUpdate"})," DaemonSet \u7684 ",(0,s.jsx)(n.code,{children:".spec.template"})," \u7684\u4efb\u4f55\u66f4\u65b0\u90fd\u5c06\u89e6\u53d1\u6eda\u52a8\u66f4\u65b0\u3002 \u8fd9\u53ef\u4ee5\u901a\u8fc7\u51e0\u4e2a\u4e0d\u540c\u7684 ",(0,s.jsx)(n.code,{children:"kubectl"})," \u547d\u4ee4\u6765\u5b8c\u6210\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u7f16\u8f91yaml\u6587\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:":::tip\u8bf4\u660e"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u53ea\u66f4\u65b0\u5bb9\u5668\u955c\u50cf\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl set image ds/fluentd-elasticsearch fluentd-elasticsearch=quay.io/fluentd_elasticsearch/fluentd:v2.6.0 -n kube-system\n"})}),"\n",(0,s.jsx)(n.p,{children:":::"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"cat > fluentd-daemonset-update.yaml << EOF\napiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: fluentd-elasticsearch\n  namespace: kube-system\n  labels:\n    k8s-app: fluentd-logging\nspec:\n  selector:\n    matchLabels:\n      name: fluentd-elasticsearch\n  updateStrategy:\n    type: RollingUpdate\n    rollingUpdate:\n      maxUnavailable: 1\n  template:\n    metadata:\n      labels:\n        name: fluentd-elasticsearch\n    spec:\n      tolerations:\n      # \u8fd9\u4e9b\u5bb9\u5fcd\u5ea6\u8bbe\u7f6e\u662f\u4e3a\u4e86\u8ba9\u8be5\u5b88\u62a4\u8fdb\u7a0b\u96c6\u5728\u63a7\u5236\u5e73\u9762\u8282\u70b9\u4e0a\u8fd0\u884c\n      # \u5982\u679c\u4f60\u4e0d\u5e0c\u671b\u81ea\u5df1\u7684\u63a7\u5236\u5e73\u9762\u8282\u70b9\u8fd0\u884c Pod\uff0c\u53ef\u4ee5\u5220\u9664\u5b83\u4eec\n      - key: node-role.kubernetes.io/control-plane\n        operator: Exists\n        effect: NoSchedule\n      - key: node-role.kubernetes.io/master\n        operator: Exists\n        effect: NoSchedule\n      containers:\n      - name: fluentd-elasticsearch\n        image: quay.io/fluentd_elasticsearch/fluentd:v2.5.2\n        resources:\n          limits:\n            memory: 200Mi\n          requests:\n            cpu: 100m\n            memory: 200Mi\n        volumeMounts:\n        - name: varlog\n          mountPath: /var/log\n        - name: varlibdockercontainers\n          mountPath: /var/lib/docker/containers\n          readOnly: true\n      terminationGracePeriodSeconds: 30\n      volumes:\n      - name: varlog\n        hostPath:\n          path: /var/log\n      - name: varlibdockercontainers\n        hostPath:\n          path: /var/lib/docker/containers\nEOF\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u76d1\u89c6\u6eda\u52a8\u66f4\u65b0\u72b6\u6001",children:"\u76d1\u89c6\u6eda\u52a8\u66f4\u65b0\u72b6\u6001"}),"\n",(0,s.jsx)(n.p,{children:"\u521b\u5efadaemonset"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl apply -f fluentd-daemonset-update.yaml --record=true\ndaemonset.apps/fluentd-elasticsearch configured\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u67e5\u770b\u6eda\u52a8\u66f4\u65b0\u8fdb\u5ea6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ kubectl rollout status ds/fluentd-elasticsearch -n kube-system\nWaiting for daemon set "fluentd-elasticsearch" rollout to finish: 0 out of 3 new pods have been updated...\nWaiting for daemon set "fluentd-elasticsearch" rollout to finish: 0 out of 3 new pods have been updated...\nWaiting for daemon set "fluentd-elasticsearch" rollout to finish: 0 out of 3 new pods have been updated...\nWaiting for daemon set "fluentd-elasticsearch" rollout to finish: 1 out of 3 new pods have been updated...\nWaiting for daemon set "fluentd-elasticsearch" rollout to finish: 1 out of 3 new pods have been updated...\nWaiting for daemon set "fluentd-elasticsearch" rollout to finish: 1 out of 3 new pods have been updated...\nWaiting for daemon set "fluentd-elasticsearch" rollout to finish: 2 out of 3 new pods have been updated...\nWaiting for daemon set "fluentd-elasticsearch" rollout to finish: 2 out of 3 new pods have been updated...\nWaiting for daemon set "fluentd-elasticsearch" rollout to finish: 2 out of 3 new pods have been updated...\nWaiting for daemon set "fluentd-elasticsearch" rollout to finish: 2 of 3 updated pods are available...\ndaemon set "fluentd-elasticsearch" successfully rolled out\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u6545\u969c\u6392\u67e5",children:"\u6545\u969c\u6392\u67e5"}),"\n",(0,s.jsx)(n.h3,{id:"daemonset-\u6eda\u52a8\u66f4\u65b0\u5361\u4f4f",children:"DaemonSet \u6eda\u52a8\u66f4\u65b0\u5361\u4f4f"}),"\n",(0,s.jsx)(n.p,{children:"\u6709\u65f6\uff0cDaemonSet \u6eda\u52a8\u66f4\u65b0\u53ef\u80fd\u5361\u4f4f\uff0c\u4ee5\u4e0b\u662f\u4e00\u4e9b\u53ef\u80fd\u7684\u539f\u56e0\uff1a"}),"\n",(0,s.jsx)(n.h4,{id:"\u4e00\u4e9b\u8282\u70b9\u53ef\u7528\u8d44\u6e90\u8017\u5c3d",children:"\u4e00\u4e9b\u8282\u70b9\u53ef\u7528\u8d44\u6e90\u8017\u5c3d"}),"\n",(0,s.jsxs)(n.p,{children:["DaemonSet \u6eda\u52a8\u66f4\u65b0\u53ef\u80fd\u4f1a\u5361\u4f4f\uff0c\u5176 Pod \u81f3\u5c11\u5728\u67d0\u4e2a\u8282\u70b9\u4e0a\u65e0\u6cd5\u8c03\u5ea6\u8fd0\u884c\u3002 \u5f53\u8282\u70b9\u4e0a",(0,s.jsx)(n.a,{href:"https://kubernetes.io/zh-cn/docs/concepts/scheduling-eviction/node-pressure-eviction/",children:"\u53ef\u7528\u8d44\u6e90\u8017\u5c3d"}),"\u65f6\uff0c \u8fd9\u662f\u53ef\u80fd\u7684\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5\u65f6\uff0c\u901a\u8fc7\u5bf9 ",(0,s.jsx)(n.code,{children:"kubectl get nodes"})," \u548c\u4e0b\u9762\u547d\u4ee4\u884c\u7684\u8f93\u51fa\u4f5c\u6bd4\u8f83\uff0c \u627e\u51fa\u6ca1\u6709\u8c03\u5ea6 DaemonSet Pod \u7684\u8282\u70b9\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl get pods -l name=fluentd-elasticsearch -o wide -n kube-system\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u65e6\u627e\u5230\u8fd9\u4e9b\u8282\u70b9\uff0c\u4ece\u8282\u70b9\u4e0a\u5220\u9664\u4e00\u4e9b\u975e DaemonSet Pod\uff0c\u4e3a\u65b0\u7684 DaemonSet Pod \u817e\u51fa\u7a7a\u95f4\u3002"}),"\n",(0,s.jsx)(n.p,{children:":::tip\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53\u6240\u5220\u9664\u7684 Pod \u4e0d\u53d7\u4efb\u4f55\u63a7\u5236\u5668\u7ba1\u7406\uff0c\u4e5f\u4e0d\u662f\u591a\u526f\u672c\u7684 Pod\u65f6\uff0c\u4e0a\u8ff0\u64cd\u4f5c\u5c06\u5bfc\u81f4\u670d\u52a1\u4e2d\u65ad\u3002 \u540c\u65f6\uff0c\u4e0a\u8ff0\u64cd\u4f5c\u4e5f\u4e0d\u4f1a\u8003\u8651 ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/zh-cn/docs/tasks/run-application/configure-pdb/",children:"PodDisruptionBudget"})," \u6240\u65bd\u52a0\u7684\u7ea6\u675f\u3002"]}),"\n",(0,s.jsx)(n.p,{children:":::"}),"\n",(0,s.jsx)(n.h4,{id:"\u4e0d\u5b8c\u6574\u7684\u6eda\u52a8\u66f4\u65b0",children:"\u4e0d\u5b8c\u6574\u7684\u6eda\u52a8\u66f4\u65b0"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u6700\u8fd1\u7684 DaemonSet \u6a21\u677f\u66f4\u65b0\u88ab\u7834\u574f\u4e86\uff0c\u6bd4\u5982\uff0c\u5bb9\u5668\u5904\u4e8e\u5d29\u6e83\u5faa\u73af\u72b6\u6001\u6216\u8005\u5bb9\u5668\u955c\u50cf\u4e0d\u5b58\u5728 \uff08\u901a\u5e38\u7531\u4e8e\u62fc\u5199\u9519\u8bef\uff09\uff0c\u5c31\u4f1a\u53d1\u751f DaemonSet \u6eda\u52a8\u66f4\u65b0\u4e2d\u65ad\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8981\u89e3\u51b3\u6b64\u95ee\u9898\uff0c\u9700\u518d\u6b21\u66f4\u65b0 DaemonSet \u6a21\u677f\u3002\u65b0\u7684\u6eda\u52a8\u66f4\u65b0\u4e0d\u4f1a\u88ab\u4ee5\u524d\u7684\u4e0d\u5065\u5eb7\u7684\u6eda\u52a8\u66f4\u65b0\u963b\u6b62\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"\u65f6\u949f\u504f\u5dee",children:"\u65f6\u949f\u504f\u5dee"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u5728 DaemonSet \u4e2d\u6307\u5b9a\u4e86 ",(0,s.jsx)(n.code,{children:".spec.minReadySeconds"}),"\uff0c\u4e3b\u63a7\u8282\u70b9\u548c\u5de5\u4f5c\u8282\u70b9\u4e4b\u95f4\u7684\u65f6\u949f\u504f\u5dee\u4f1a\u4f7f DaemonSet \u65e0\u6cd5\u68c0\u6d4b\u5230\u6b63\u786e\u7684\u6eda\u52a8\u66f4\u65b0\u8fdb\u5ea6\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6e05\u7406",children:"\u6e05\u7406"}),"\n",(0,s.jsx)(n.p,{children:"\u4ece\u540d\u5b57\u7a7a\u95f4\u4e2d\u5220\u9664 DaemonSet\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl delete ds fluentd-elasticsearch -n kube-system\n"})}),"\n",(0,s.jsx)(n.h2,{id:"daemonset\u56de\u6eda",children:"DaemonSet\u56de\u6eda"}),"\n",(0,s.jsx)(n.h3,{id:"\u6b65\u9aa4-1\u627e\u5230\u60f3\u8981-daemonset-\u56de\u6eda\u5230\u7684\u5386\u53f2\u4fee\u8ba2\u7248\u672crevision",children:"\u6b65\u9aa4 1\uff1a\u627e\u5230\u60f3\u8981 DaemonSet \u56de\u6eda\u5230\u7684\u5386\u53f2\u4fee\u8ba2\u7248\u672c\uff08revision\uff09"}),"\n",(0,s.jsx)(n.p,{children:"\u5217\u51fa DaemonSet \u7684\u6240\u6709\u7248\u672c\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl rollout history daemonset fluentd-elasticsearch \ndaemonset.apps/fluentd-elasticsearch \nREVISION  CHANGE-CAUSE\n1         kubectl apply --filename=daemonset.yaml --record=true\n2         kubectl apply --filename=fluentd-daemonset.yaml --record=true\n3         kubectl apply --filename=fluentd-daemonset-update.yaml --record=true\n"})}),"\n",(0,s.jsx)(n.p,{children:":::tip\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u521b\u5efa\u65f6\uff0cDaemonSet \u7684\u53d8\u5316\u539f\u56e0\u4ece ",(0,s.jsx)(n.code,{children:"kubernetes.io/change-cause"})," \u6ce8\u89e3\uff08annotation\uff09 \u590d\u5236\u5230\u5176\u4fee\u8ba2\u7248\u672c\u4e2d\u3002\u7528\u6237\u53ef\u4ee5\u5728 ",(0,s.jsx)(n.code,{children:"kubectl"})," \u547d\u4ee4\u4e2d\u8bbe\u7f6e ",(0,s.jsx)(n.code,{children:"--record=true"}),"\uff0c \u5c06\u6267\u884c\u7684\u547d\u4ee4\u8bb0\u5f55\u5728\u53d8\u5316\u539f\u56e0\u6ce8\u89e3\u4e2d\u3002"]}),"\n",(0,s.jsx)(n.p,{children:":::"}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u6765\u67e5\u770b\u6307\u5b9a\u7248\u672c\u7684\u8be6\u7ec6\u4fe1\u606f\uff1a"}),"\n",(0,s.jsx)(n.p,{children:":::tip\u8bf4\u660e"}),"\n",(0,s.jsxs)(n.p,{children:["\u6267\u884c\u547d\u4ee4 ",(0,s.jsx)(n.code,{children:"kubectl rollout history daemonset <daemonset-name> --revision=<revision>"})," \u67e5\u770bds\u5386\u53f2\u4fee\u6539\u8bb0\u5f55"]}),"\n",(0,s.jsx)(n.p,{children:":::"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl rollout history daemonset fluentd-elasticsearch --revision=1\ndaemonset.apps/fluentd-elasticsearch with revision #1\nPod Template:\n  Labels:\tname=fluentd-elasticsearch\n  Containers:\n   fluentd-elasticsearch:\n    Image:\tquay.io/fluentd_elasticsearch/fluentd:v2.5.2\n    Port:\t<none>\n    Host Port:\t<none>\n    Limits:\n      memory:\t200Mi\n    Requests:\n      cpu:\t100m\n      memory:\t200Mi\n    Environment:\t<none>\n    Mounts:\n      /var/log from varlog (rw)\n  Volumes:\n   varlog:\n    Type:\tHostPath (bare host directory volume)\n    Path:\t/var/log\n    HostPathType:\t\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u6b65\u9aa4-2\u56de\u6eda\u5230\u6307\u5b9a\u7248\u672c",children:"\u6b65\u9aa4 2\uff1a\u56de\u6eda\u5230\u6307\u5b9a\u7248\u672c"}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["\u6267\u884c\u547d\u4ee4 ",(0,s.jsx)(n.code,{children:"kubectl rollout undo daemonset <daemonset-name> --to-revision=<revision>"})," \u56de\u6eda\u5230\u6307\u5b9a\u7248\u672c"]}),(0,s.jsxs)(n.p,{children:["\u5982\u679c ",(0,s.jsx)(n.code,{children:"--to-revision"})," \u53c2\u6570\u672a\u6307\u5b9a\uff0c\u5c06\u56de\u6eda\u5230\u6700\u8fd1\u7684\u7248\u672c"]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl rollout undo daemonset fluentd-elasticsearch --to-revision=2\ndaemonset.apps/fluentd-elasticsearch rolled back\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u6b65\u9aa4-3\u76d1\u89c6-daemonset-\u56de\u6eda\u8fdb\u5ea6",children:"\u6b65\u9aa4 3\uff1a\u76d1\u89c6 DaemonSet \u56de\u6eda\u8fdb\u5ea6"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["\u6267\u884c\u547d\u4ee4 ",(0,s.jsx)(n.code,{children:"kubectl rollout status ds ds-name"})," \u67e5\u770b\u56de\u6eda\u8fdb\u5ea6"]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ kubectl rollout status ds/fluentd-elasticsearch\nWaiting for daemon set "fluentd-elasticsearch" rollout to finish: 1 out of 3 new pods have been updated...\nWaiting for daemon set "fluentd-elasticsearch" rollout to finish: 1 out of 3 new pods have been updated...\nWaiting for daemon set "fluentd-elasticsearch" rollout to finish: 1 out of 3 new pods have been updated...\nWaiting for daemon set "fluentd-elasticsearch" rollout to finish: 1 out of 3 new pods have been updated...\nWaiting for daemon set "fluentd-elasticsearch" rollout to finish: 2 out of 3 new pods have been updated...\nWaiting for daemon set "fluentd-elasticsearch" rollout to finish: 2 out of 3 new pods have been updated...\nWaiting for daemon set "fluentd-elasticsearch" rollout to finish: 2 out of 3 new pods have been updated...\nWaiting for daemon set "fluentd-elasticsearch" rollout to finish: 2 out of 3 new pods have been updated...\nWaiting for daemon set "fluentd-elasticsearch" rollout to finish: 2 of 3 updated pods are available...\ndaemon set "fluentd-elasticsearch" successfully rolled out\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u7406\u89e3-daemonset-\u4fee\u8ba2\u7248\u672c",children:"\u7406\u89e3 DaemonSet \u4fee\u8ba2\u7248\u672c"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u524d\u9762\u7684 ",(0,s.jsx)(n.code,{children:"kubectl rollout history"})," \u6b65\u9aa4\u4e2d\uff0c\u4f60\u83b7\u5f97\u4e86\u4e00\u4e2a\u4fee\u8ba2\u7248\u672c\u5217\u8868\uff0c\u6bcf\u4e2a\u4fee\u8ba2\u7248\u672c\u90fd\u5b58\u50a8\u5728\u540d\u4e3a ",(0,s.jsx)(n.code,{children:"ControllerRevision"})," \u7684\u8d44\u6e90\u4e2d\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u8981\u67e5\u770b\u6bcf\u4e2a\u4fee\u8ba2\u7248\u672c\u4e2d\u4fdd\u5b58\u7684\u5185\u5bb9\uff0c\u53ef\u4ee5\u627e\u5230 DaemonSet \u4fee\u8ba2\u7248\u672c\u7684\u539f\u751f\u8d44\u6e90\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl get controllerrevision -l <daemonset-selector-key>=<daemonset-selector-value>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8be5\u547d\u4ee4\u8fd4\u56de ",(0,s.jsx)(n.code,{children:"ControllerRevisions"})," \u5217\u8868\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"NAME                               CONTROLLER                     REVISION   AGE\n<daemonset-name>-<revision-hash>   DaemonSet/<daemonset-name>     1          1h\n<daemonset-name>-<revision-hash>   DaemonSet/<daemonset-name>     2          1h\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6bcf\u4e2a ",(0,s.jsx)(n.code,{children:"ControllerRevision"})," \u4e2d\u5b58\u50a8\u4e86\u76f8\u5e94 DaemonSet \u7248\u672c\u7684\u6ce8\u89e3\u548c\u6a21\u677f\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"kubectl rollout undo"})," \u9009\u62e9\u7279\u5b9a\u7684 ",(0,s.jsx)(n.code,{children:"ControllerRevision"}),"\uff0c\u5e76\u7528 ",(0,s.jsx)(n.code,{children:"ControllerRevision"})," \u4e2d\u5b58\u50a8\u7684\u6a21\u677f\u4ee3\u66ff DaemonSet \u7684\u6a21\u677f\u3002 ",(0,s.jsx)(n.code,{children:"kubectl rollout undo"})," \u76f8\u5f53\u4e8e\u901a\u8fc7\u5176\u4ed6\u547d\u4ee4\uff08\u5982 ",(0,s.jsx)(n.code,{children:"kubectl edit"})," \u6216 ",(0,s.jsx)(n.code,{children:"kubectl apply"}),"\uff09 \u5c06 DaemonSet \u6a21\u677f\u66f4\u65b0\u81f3\u5148\u524d\u7684\u7248\u672c\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5982\u5982\u4e0b\u8f93\u51fa"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl get controllerrevision -l name=fluentd-elasticsearch\nNAME                               CONTROLLER                             REVISION   AGE\nfluentd-elasticsearch-66558cc747   daemonset.apps/fluentd-elasticsearch   3          18m\nfluentd-elasticsearch-6cd7f55654   daemonset.apps/fluentd-elasticsearch   4          22m\nfluentd-elasticsearch-7578d665c9   daemonset.apps/fluentd-elasticsearch   5          19m\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["\u6ce8\u610f DaemonSet \u4fee\u8ba2\u7248\u672c\u53ea\u4f1a\u6b63\u5411\u53d8\u5316\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u56de\u6eda\u5b8c\u6210\u540e\uff0c\u6240\u56de\u6eda\u5230\u7684 ",(0,s.jsx)(n.code,{children:"ControllerRevision"})," \u7248\u672c\u53f7 (",(0,s.jsx)(n.code,{children:".revision"})," \u5b57\u6bb5) \u4f1a\u589e\u52a0\u3002 \u4f8b\u5982\uff0c\u5982\u679c\u7528\u6237\u5728\u7cfb\u7edf\u4e2d\u6709\u7248\u672c 1 \u548c\u7248\u672c 2\uff0c\u5e76\u4ece\u7248\u672c 2 \u56de\u6eda\u5230\u7248\u672c 1\uff0c \u5e26\u6709 ",(0,s.jsx)(n.code,{children:".revision: 1"})," \u7684 ",(0,s.jsx)(n.code,{children:"ControllerRevision"})," \u5c06\u53d8\u4e3a ",(0,s.jsx)(n.code,{children:".revision: 3"}),"\u3002"]})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var s=t(96540);const a={},l=s.createContext(a);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);