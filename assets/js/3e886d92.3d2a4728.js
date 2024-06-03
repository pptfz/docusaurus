"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4064],{46918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var l=n(74848),r=n(28453);const a={},i="\u83b7\u53d6\u963f\u91cc\u4e91slb\u4fe1\u606f",o={id:"go/go\u529f\u80fd\u811a\u672c/\u4e91\u5e73\u53f0/\u963f\u91cc\u4e91/\u83b7\u53d6\u963f\u91cc\u4e91slb\u4fe1\u606f",title:"\u83b7\u53d6\u963f\u91cc\u4e91slb\u4fe1\u606f",description:"\u963f\u91cc\u4e91slb API\u6587\u6863",source:"@site/docs/go/go\u529f\u80fd\u811a\u672c/\u4e91\u5e73\u53f0/\u963f\u91cc\u4e91/\u83b7\u53d6\u963f\u91cc\u4e91slb\u4fe1\u606f.md",sourceDirName:"go/go\u529f\u80fd\u811a\u672c/\u4e91\u5e73\u53f0/\u963f\u91cc\u4e91",slug:"/go/go\u529f\u80fd\u811a\u672c/\u4e91\u5e73\u53f0/\u963f\u91cc\u4e91/\u83b7\u53d6\u963f\u91cc\u4e91slb\u4fe1\u606f",permalink:"/docs/go/go\u529f\u80fd\u811a\u672c/\u4e91\u5e73\u53f0/\u963f\u91cc\u4e91/\u83b7\u53d6\u963f\u91cc\u4e91slb\u4fe1\u606f",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u83b7\u53d6k8s\u96c6\u7fa4\u8d44\u6e90\u914d\u7f6e",permalink:"/docs/go/go\u529f\u80fd\u811a\u672c/k8s/\u83b7\u53d6k8s\u96c6\u7fa4\u8d44\u6e90\u914d\u7f6e"},next:{title:"go\u521d\u5b66\u8005\u57fa\u672c\u77e5\u8bc6",permalink:"/docs/go/go\u57fa\u7840/go\u521d\u5b66\u8005\u57fa\u672c\u77e5\u8bc6"}},s={},c=[{value:"\u67e5\u8be2\u963f\u91cc\u4e91\u6240\u6709region",id:"\u67e5\u8be2\u963f\u91cc\u4e91\u6240\u6709region",level:2},{value:"\u83b7\u53d6\u5f53\u524d\u8d26\u53f7\u4e0b\u6307\u5b9a\u533a\u57df\u7684slb",id:"\u83b7\u53d6\u5f53\u524d\u8d26\u53f7\u4e0b\u6307\u5b9a\u533a\u57df\u7684slb",level:2},{value:"\u83b7\u53d6\u5f53\u524d\u8d26\u53f7\u4e0b\u6240\u6709\u533a\u57df\u7684slb",id:"\u83b7\u53d6\u5f53\u524d\u8d26\u53f7\u4e0b\u6240\u6709\u533a\u57df\u7684slb",level:2}];function g(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"\u83b7\u53d6\u963f\u91cc\u4e91slb\u4fe1\u606f",children:"\u83b7\u53d6\u963f\u91cc\u4e91slb\u4fe1\u606f"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://help.aliyun.com/zh/slb/classic-load-balancer/developer-reference/api-reference-clb/?spm=a2c4g.11186623.0.0.4b483ac1yNKlnu",children:"\u963f\u91cc\u4e91slb API\u6587\u6863"})}),"\n",(0,l.jsxs)(t.p,{children:["\u5176\u4e2d\uff0c\u67e5\u8be2\u6240\u9700\u7684 ",(0,l.jsx)(t.code,{children:"AccessKeyId"})," \u901a\u8fc7\u53d8\u91cf ",(0,l.jsx)(t.code,{children:"ALIBABA_CLOUD_ACCESS_KEY_ID"})," \u83b7\u53d6\uff0c",(0,l.jsx)(t.code,{children:"AccessKeySecret"})," \u901a\u8fc7\u53d8\u91cf ",(0,l.jsx)(t.code,{children:"ALIBABA_CLOUD_ACCESS_KEY_SECRET"})," \u83b7\u53d6"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'AccessKeyId: tea.String(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_ID")),\nAccessKeySecret: tea.String(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")),\n'})}),"\n",(0,l.jsx)(t.h2,{id:"\u67e5\u8be2\u963f\u91cc\u4e91\u6240\u6709region",children:"\u67e5\u8be2\u963f\u91cc\u4e91\u6240\u6709region"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"os"\n\n\t"github.com/alibabacloud-go/darabonba-openapi/v2/client"\n\t"github.com/alibabacloud-go/tea/tea"\n\tslb20140515 "github.com/alibabacloud-go/slb-20140515/v4/client"\n)\n\nfunc main() {\n\t// \u521d\u59cb\u5316\u5ba2\u6237\u7aef\n\tclient, err := CreateClient()\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\t// \u8c03\u7528 DescribeRegions API\n\tregions, err := DescribeRegions(client)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\t// \u8f93\u51fa\u6240\u6709\u533a\u57df\u4fe1\u606f\n\tfor _, region := range regions {\n\t\tfmt.Printf("RegionId: %s, LocalName: %s\\n", *region.RegionId, *region.LocalName)\n\t}\n}\n\nfunc CreateClient() (*slb20140515.Client, error) {\n\tconfig := &client.Config{\n\t\tAccessKeyId:     tea.String(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_ID")),\n\t\tAccessKeySecret: tea.String(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")),\n\t\tEndpoint:        tea.String("slb.aliyuncs.com"),\n\t}\n\tclient, err := slb20140515.NewClient(config)\n\tif err != nil {\n\t\treturn nil, err\n\t}\n\tfmt.Println("Client created successfully")\n\treturn client, nil\n}\n\nfunc DescribeRegions(client *slb20140515.Client) ([]*slb20140515.DescribeRegionsResponseBodyRegionsRegion, error) {\n\t// \u6784\u9020 DescribeRegions \u8bf7\u6c42\n\treq := &slb20140515.DescribeRegionsRequest{}\n\n\t// \u53d1\u9001\u8bf7\u6c42\u5e76\u5904\u7406\u54cd\u5e94\n\tresp, err := client.DescribeRegions(req)\n\tif err != nil {\n\t\treturn nil, err\n\t}\n\n\t// \u68c0\u67e5\u54cd\u5e94\u4e2d\u7684\u5b57\u6bb5\u662f\u5426\u4e3a nil\n\tif resp.Body == nil || resp.Body.Regions == nil || resp.Body.Regions.Region == nil {\n\t\treturn nil, fmt.Errorf("regions data not found in API response")\n\t}\n\n\treturn resp.Body.Regions.Region, nil\n}\n'})}),"\n",(0,l.jsx)(t.p,{children:"\u8f93\u51fa\u5982\u4e0b"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sh",children:"$ go run get_aliyun_region.go \nClient created successfully\nRegionId: cn-hangzhou, LocalName: \u534e\u4e1c1\uff08\u676d\u5dde\uff09\nRegionId: cn-shanghai, LocalName: \u534e\u4e1c2\uff08\u4e0a\u6d77\uff09\nRegionId: cn-nanjing, LocalName: \u534e\u4e1c5\uff08\u5357\u4eac-\u672c\u5730\u5730\u57df\uff09\nRegionId: cn-fuzhou, LocalName: \u534e\u4e1c6\uff08\u798f\u5dde-\u672c\u5730\u5730\u57df\uff09\nRegionId: cn-qingdao, LocalName: \u534e\u53171\uff08\u9752\u5c9b\uff09\nRegionId: cn-beijing, LocalName: \u534e\u53172\uff08\u5317\u4eac\uff09\nRegionId: cn-zhangjiakou, LocalName: \u534e\u53173\uff08\u5f20\u5bb6\u53e3\uff09\nRegionId: cn-huhehaote, LocalName: \u534e\u53175\uff08\u547c\u548c\u6d69\u7279\uff09\nRegionId: cn-wulanchabu, LocalName: \u534e\u53176\uff08\u4e4c\u5170\u5bdf\u5e03\uff09\nRegionId: cn-shenzhen, LocalName: \u534e\u53571\uff08\u6df1\u5733\uff09\nRegionId: cn-heyuan, LocalName: \u534e\u53572\uff08\u6cb3\u6e90\uff09\nRegionId: cn-guangzhou, LocalName: \u534e\u53573\uff08\u5e7f\u5dde\uff09\nRegionId: cn-wuhan-lr, LocalName: \u534e\u4e2d1\uff08\u6b66\u6c49-\u672c\u5730\u5730\u57df\uff09\nRegionId: cn-chengdu, LocalName: \u897f\u53571\uff08\u6210\u90fd\uff09\nRegionId: cn-hongkong, LocalName: \u4e2d\u56fd\u9999\u6e2f\nRegionId: ap-southeast-1, LocalName: \u65b0\u52a0\u5761\nRegionId: ap-southeast-2, LocalName: \u6fb3\u5927\u5229\u4e9a\uff08\u6089\u5c3c\uff09\nRegionId: ap-northeast-2, LocalName: \u97e9\u56fd\uff08\u9996\u5c14\uff09\nRegionId: ap-southeast-3, LocalName: \u9a6c\u6765\u897f\u4e9a\uff08\u5409\u9686\u5761\uff09\nRegionId: ap-southeast-5, LocalName: \u5370\u5ea6\u5c3c\u897f\u4e9a\uff08\u96c5\u52a0\u8fbe\uff09\nRegionId: ap-northeast-1, LocalName: \u65e5\u672c\uff08\u4e1c\u4eac\uff09\nRegionId: eu-central-1, LocalName: \u5fb7\u56fd\uff08\u6cd5\u5170\u514b\u798f\uff09\nRegionId: eu-west-1, LocalName: \u82f1\u56fd\uff08\u4f26\u6566\uff09\nRegionId: us-west-1, LocalName: \u7f8e\u56fd\uff08\u7845\u8c37\uff09\nRegionId: us-east-1, LocalName: \u7f8e\u56fd\uff08\u5f17\u5409\u5c3c\u4e9a\uff09\nRegionId: me-east-1, LocalName: \u963f\u8054\u914b\uff08\u8fea\u62dc\uff09\nRegionId: me-central-1, LocalName: \u6c99\u7279\uff08\u5229\u96c5\u5f97\uff09\nRegionId: ap-southeast-6, LocalName: \u83f2\u5f8b\u5bbe\uff08\u9a6c\u5c3c\u62c9\uff09\nRegionId: ap-southeast-7, LocalName: \u6cf0\u56fd\uff08\u66fc\u8c37\uff09\nRegionId: ap-south-1, LocalName: \u5370\u5ea6\uff08\u5b5f\u4e70\uff09\n"})}),"\n",(0,l.jsx)(t.h2,{id:"\u83b7\u53d6\u5f53\u524d\u8d26\u53f7\u4e0b\u6307\u5b9a\u533a\u57df\u7684slb",children:"\u83b7\u53d6\u5f53\u524d\u8d26\u53f7\u4e0b\u6307\u5b9a\u533a\u57df\u7684slb"}),"\n",(0,l.jsxs)(t.p,{children:["\u901a\u8fc7 ",(0,l.jsx)(t.code,{children:'regions := []string{"region1", "region2", "region3"}'})," \u6307\u5b9a\u60f3\u8981\u67e5\u8be2\u7684region"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"os"\n\n\t"github.com/xuri/excelize/v2"\n\tslb20140515 "github.com/alibabacloud-go/slb-20140515/v4/client"\n\t"github.com/alibabacloud-go/darabonba-openapi/v2/client"\n\t"github.com/alibabacloud-go/tea/tea"\n)\n\nfunc main() {\n\t// \u8981\u67e5\u8be2\u7684\u533a\u57df\u5217\u8868\n\tregions := []string{"region1", "region2", "region3"}\n\n\t// \u521d\u59cb\u5316\u5ba2\u6237\u7aef\n\tclient, err := CreateClient()\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\t// \u521b\u5efa Excel \u6587\u4ef6\n\tfile := excelize.NewFile()\n\tsheetName := "LoadBalancers"\n\tfile.NewSheet(sheetName)\n\n\t// \u5199\u5165\u8868\u5934\n\theaders := []string{"LoadBalancerId", "LoadBalancerName", "LoadBalancerSpec", "Address", "AddressType", "CreateTime", "DeleteProtection", "InstanceChargeType", "InternetChargeType", "InternetChargeTypeAlias", "LoadBalancerStatus", "MasterZoneId", "NetworkType", "PayType", "RegionId", "ResourceGroupId", "SlaveZoneId", "VSwitchId", "VpcId"}\n\tfor col, header := range headers {\n\t\tcell := string(\'A\' + col) + "1"\n\t\tfile.SetCellValue(sheetName, cell, header)\n\t}\n\n\trow := 2\n\t// \u904d\u5386\u6bcf\u4e2a\u533a\u57df\u4e0b\u7684\u8d1f\u8f7d\u5747\u8861\u4fe1\u606f\n\tfor _, region := range regions {\n\t\t// \u6784\u9020\u8bf7\u6c42\n\t\treq := &slb20140515.DescribeLoadBalancersRequest{\n\t\t\tRegionId: tea.String(region),\n\t\t}\n\n\t\t// \u53d1\u9001\u8bf7\u6c42\u5e76\u5904\u7406\u54cd\u5e94\n\t\tresp, err := client.DescribeLoadBalancers(req)\n\t\tif err != nil {\n\t\t\tfmt.Println(err.Error())\n\t\t\tcontinue\n\t\t}\n\n\t\t// \u5199\u5165\u6570\u636e\u5230 Excel\n\t\tfor _, lb := range resp.Body.LoadBalancers.LoadBalancer {\n\t\t\tcol := 0\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.LoadBalancerId))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.LoadBalancerName))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.LoadBalancerSpec))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.Address))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.AddressType))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.CreateTime))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.DeleteProtection))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.InstanceChargeType))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.InternetChargeType))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.InternetChargeTypeAlias))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.LoadBalancerStatus))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.MasterZoneId))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.NetworkType))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.PayType))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), region)\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.ResourceGroupId))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.SlaveZoneId))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.VSwitchId))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.VpcId))\n\t\t\trow++\n\t\t}\n\t}\n\n\t// \u4fdd\u5b58 Excel \u6587\u4ef6\n\tif err := file.SaveAs("load_balancers.xlsx"); err != nil {\n\t\tfmt.Println(err)\n\t}\n\n\t// \u8bbe\u7f6e\u6587\u4ef6\u6743\u9650\u4e3a 0644\n\tif err := os.Chmod("load_balancers.xlsx", 0644); err != nil {\n\t\tfmt.Println("Error setting file permissions:", err)\n\t} else {\n\t\tfmt.Println("Excel file saved successfully as load_balancers.xlsx")\n\t}\n}\n\nfunc CreateClient() (*slb20140515.Client, error) {\n\tconfig := &client.Config{\n\t\tAccessKeyId:     tea.String(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_ID")),\n\t\tAccessKeySecret: tea.String(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")),\n\t\tEndpoint:        tea.String("slb.aliyuncs.com"),\n\t}\n\tclient, err := slb20140515.NewClient(config)\n\tif err != nil {\n\t\treturn nil, err\n\t}\n\tfmt.Println("Client created successfully")\n\treturn client, nil\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"\u83b7\u53d6\u5f53\u524d\u8d26\u53f7\u4e0b\u6240\u6709\u533a\u57df\u7684slb",children:"\u83b7\u53d6\u5f53\u524d\u8d26\u53f7\u4e0b\u6240\u6709\u533a\u57df\u7684slb"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"errors"\n\t"fmt"\n\t"os"\n\n\t"github.com/xuri/excelize/v2"\n\tslb20140515 "github.com/alibabacloud-go/slb-20140515/v4/client"\n\t"github.com/alibabacloud-go/darabonba-openapi/v2/client"\n\t"github.com/alibabacloud-go/tea/tea"\n)\n\nfunc main() {\n\t// \u521d\u59cb\u5316\u5ba2\u6237\u7aef\n\tclient, err := CreateClient()\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\t// \u83b7\u53d6\u6240\u6709\u53ef\u7528\u533a\u57df\n\tregions, err := DescribeRegions(client)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\t// \u521b\u5efa Excel \u6587\u4ef6\n\tfile := excelize.NewFile()\n\tsheetName := "LoadBalancers"\n\tfile.NewSheet(sheetName)\n\n\t// \u5199\u5165\u8868\u5934\n\theaders := []string{"LoadBalancerId", "LoadBalancerName", "LoadBalancerSpec", "Address", "AddressType", "CreateTime", "DeleteProtection", "InstanceChargeType", "InternetChargeType", "InternetChargeTypeAlias", "LoadBalancerStatus", "MasterZoneId", "NetworkType", "PayType", "RegionId", "ResourceGroupId", "SlaveZoneId", "VSwitchId", "VpcId"}\n\tfor col, header := range headers {\n\t\tcell := string(\'A\' + col) + "1"\n\t\tfile.SetCellValue(sheetName, cell, header)\n\t}\n\n\trow := 2\n\t// \u904d\u5386\u6bcf\u4e2a\u533a\u57df\u4e0b\u7684\u8d1f\u8f7d\u5747\u8861\u4fe1\u606f\n\tfor _, region := range regions {\n\t\t// \u6784\u9020\u8bf7\u6c42\n\t\treq := &slb20140515.DescribeLoadBalancersRequest{\n\t\t\tRegionId: region.RegionId,\n\t\t}\n\n\t\t// \u53d1\u9001\u8bf7\u6c42\u5e76\u5904\u7406\u54cd\u5e94\n\t\tresp, err := client.DescribeLoadBalancers(req)\n\t\tif err != nil {\n\t\t\tfmt.Println(err.Error())\n\t\t\tcontinue\n\t\t}\n\n\t\t// \u5199\u5165\u6570\u636e\u5230 Excel\n\t\tfor _, lb := range resp.Body.LoadBalancers.LoadBalancer {\n\t\t\tcol := 0\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.LoadBalancerId))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.LoadBalancerName))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.LoadBalancerSpec))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.Address))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.AddressType))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.CreateTime))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.DeleteProtection))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.InstanceChargeType))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.InternetChargeType))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.InternetChargeTypeAlias))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.LoadBalancerStatus))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.MasterZoneId))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.NetworkType))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.PayType))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(region.RegionId))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.ResourceGroupId))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.SlaveZoneId))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.VSwitchId))\n\t\t\tcol++\n\t\t\tfile.SetCellValue(sheetName, string(\'A\'+col)+fmt.Sprint(row), tea.StringValue(lb.VpcId))\n\t\t\trow++\n\t\t}\n\t}\n\n\t// \u4fdd\u5b58 Excel \u6587\u4ef6\n\tfileName := "load_balancers.xlsx"\n\tif err := file.SaveAs(fileName); err != nil {\n\t\tfmt.Println(err)\n\t} else {\n\t\t// \u8bbe\u7f6e\u6587\u4ef6\u6743\u9650\u4e3a 0644\n\t\tif err := os.Chmod(fileName, 0644); err != nil {\n\t\t\tfmt.Println("Error setting file permissions:", err)\n\t\t} else {\n\t\t\tfmt.Println("Excel file saved successfully as", fileName)\n\t\t}\n\t}\n}\n\nfunc CreateClient() (*slb20140515.Client, error) {\n\tconfig := &client.Config{\n\t\tAccessKeyId:     tea.String(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_ID")),\n\t\tAccessKeySecret: tea.String(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")),\n\t\tEndpoint:        tea.String("slb.aliyuncs.com"),\n\t}\n\tclient, err := slb20140515.NewClient(config)\n\tif err != nil {\n\t\treturn nil, err\n\t}\n\tfmt.Println("Client created successfully")\n\treturn client, nil\n}\n\nfunc DescribeRegions(client *slb20140515.Client) ([]*slb20140515.DescribeRegionsResponseBodyRegionsRegion, error) {\n\t// \u6784\u9020\u8bf7\u6c42\n\treq := &slb20140515.DescribeRegionsRequest{}\n\n\t// \u53d1\u9001\u8bf7\u6c42\u5e76\u5904\u7406\u54cd\u5e94\n\tresp, err := client.DescribeRegions(req)\n\tif err != nil {\n\t\treturn nil, err\n\t}\n\n\t// \u68c0\u67e5\u54cd\u5e94\u4e2d\u7684\u5b57\u6bb5\u662f\u5426\u4e3a nil\n\tif resp.Body == nil || resp.Body.Regions == nil || resp.Body.Regions.Region == nil {\n\t\treturn nil, errors.New("regions data not found in API response")\n\t}\n\n\treturn resp.Body.Regions.Region, nil\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(g,{...e})}):g(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var l=n(96540);const r={},a=l.createContext(r);function i(e){const t=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(a.Provider,{value:t},e.children)}}}]);