
import Layout from '@/layout'
import dashboard from '@/views/dashboard/index'

let pinyin = require("pinyin");
let py = (str)=>{

	const array =pinyin(str,{style:pinyin.STYLE_NORMAL});
	let py = ''
	for (let index = 0; index < array.length; index++) {
		const element = array[index];
		py = py+element;
	}
	return py
}
const Json  =[
	{
	  "xh": "50",
	  "id": "d74d41d3bb6a455d974d473ce6fa1bd5",
	  "pid": "0",
	  "text": "后台管理系统"
	},
	{
	  "xh": "15",
	  "id": "18bccae35d324b3aa8a2777aa2101cef",
	  "pid": "d74d41d3bb6a455d974d473ce6fa1bd5",
	  "text": "元数据",
	  "xtid": "metadata"
	},
	{
	  "xh": "20",
	  "id": "849ec9b9ec654114b9f5a985abeddcd4",
	  "pid": "d74d41d3bb6a455d974d473ce6fa1bd5",
	  "text": "资源整合",
	  "xtid": "data"
	},
	{
	  "xh": "50",
	  "id": "4244a39ff45540198f68b89407a99608",
	  "pid": "d74d41d3bb6a455d974d473ce6fa1bd5",
	  "text": "资源配置",
	  "frameurl": "",
	  "xtid": "daresult"
	},
	{
	  "xh": "60",
	  "id": "9ffbb04414b4432a9652aa04d1442228",
	  "pid": "d74d41d3bb6a455d974d473ce6fa1bd5",
	  "text": "管理监控",
	  "xtid": "uuua"
	},
	{
	  "xh": "1",
	  "id": "93c9ce86efc84917bcd3a7e81a1a6344",
	  "pid": "4244a39ff45540198f68b89407a99608",
	  "text": "指标配置",
	  "frameurl": "",
	  "xtid": "daresult"
	},
	{
	  "xh": "1",
	  "id": "af14f1fd2e364cef90dfa2ecd708c19f",
	  "pid": "849ec9b9ec654114b9f5a985abeddcd4",
	  "text": "需求分析",
	  "frameurl": "",
	  "xtid": ""
	},
	{
	  "xh": "1",
	  "id": "a4667f35cb3d4e53ac63a67b97a4f0a9",
	  "pid": "9ffbb04414b4432a9652aa04d1442228",
	  "text": "权限管理",
	  "xtid": "uuua"
	},
	{
	  "xh": "10",
	  "id": "1a73636b948646d2b4e0e920a06a183e",
	  "pid": "18bccae35d324b3aa8a2777aa2101cef",
	  "text": "属性管理",
	  "xtid": "metadata"
	},
	{
	  "xh": "2",
	  "id": "0a5f251aab124f45a24da202035a790e",
	  "pid": "4244a39ff45540198f68b89407a99608",
	  "text": "搜索配置",
	  "frameurl": "",
	  "xtid": "daresult"
	},
	{
	  "xh": "2",
	  "id": "47c6d527a8314eb9b4b6c231ff56c589",
	  "pid": "849ec9b9ec654114b9f5a985abeddcd4",
	  "text": "规则定义",
	  "frameurl": "",
	  "xtid": "data"
	},
	{
	  "xh": "20",
	  "id": "b168a9be03fc4a95afc32da54e047d09",
	  "pid": "18bccae35d324b3aa8a2777aa2101cef",
	  "text": "元数据管理",
	  "frameurl": "/datagov/metadata/metadata/programmanage/projectmanage.html?itemTypeId=DDIInstance",
	  "xtid": "metadata"
	},
	{
	  "xh": "20",
	  "id": "c8b809eb48e44958877bce6be8ecb1d2",
	  "pid": "18bccae35d324b3aa8a2777aa2101cef",
	  "text": "元数据标签管理",
	  "frameurl": "/datagov/metadata/metadata/tagmanage/tagmanage.html",
	  "xtid": "metadata"
	},
	{
	  "xh": "3",
	  "id": "a6d5462188254197b84fc08525defb3f",
	  "pid": "9ffbb04414b4432a9652aa04d1442228",
	  "text": "用户通知管理"
	},
	{
	  "xh": "3",
	  "id": "1ca749bc15e14a69bb1ffd96a2432e93",
	  "pid": "849ec9b9ec654114b9f5a985abeddcd4",
	  "text": "任务执行",
	  "frameurl": "",
	  "xtid": "dataprocessing"
	},
	{
	  "xh": "3",
	  "id": "feeb129f21e84ed4bedcf20f08962e69",
	  "pid": "18bccae35d324b3aa8a2777aa2101cef",
	  "text": "元数据代码表管理",
	  "frameurl": "/optimus/dic/dictionary_list.html?type=metadata",
	  "xtid": "metadata"
	},
	{
	  "xh": "4",
	  "id": "29434f597a4c410d98dd8092110d0dc3",
	  "pid": "18bccae35d324b3aa8a2777aa2101cef",
	  "text": "计量单位管理",
	  "frameurl": "/datagov/metadata/metadata/unitmanage/categorylist.html",
	  "xtid": "metadata"
	},
	{
	  "xh": "5",
	  "id": "f18577e7313342c781dd080939196101",
	  "pid": "9ffbb04414b4432a9652aa04d1442228",
	  "text": "硬件监控",
	  "frameurl": "/optimus/monitor/monitor/monitorView.html",
	  "xtid": ""
	},
	{
	  "xh": "5",
	  "id": "cdcf44ceb52f4f9391c80ecd89dfff63",
	  "pid": "9ffbb04414b4432a9652aa04d1442228",
	  "text": "分析参数管理",
	  "frameurl": "/bumblebee/param/page/parameterList.html",
	  "xtid": "bi"
	},
	{
	  "xh": "5",
	  "id": "b2c2799111be4e9686d5794525f4b286",
	  "pid": "9ffbb04414b4432a9652aa04d1442228",
	  "text": "数据源管理",
	  "frameurl": "/optimus/datasource/dataSourceList.html?",
	  "xtid": "uuua"
	},
	{
	  "xh": "520",
	  "id": "bbd56af5770f4cc5b8af9b01b04f9cb2",
	  "pid": "4244a39ff45540198f68b89407a99608",
	  "text": "审核管理",
	  "frameurl": "",
	  "xtid": "daresult"
	},
	{
	  "xh": "521",
	  "id": "de91876fa05b44b6a26cc3ebcb011b4a",
	  "pid": "4244a39ff45540198f68b89407a99608",
	  "text": "发布管理"
	},
	{
	  "xh": "555",
	  "id": "96be224b2fee4ef2bc8056c06008eb46",
	  "pid": "9ffbb04414b4432a9652aa04d1442228",
	  "text": "代码表管理",
	  "frameurl": "/optimus/dic/dictionary_list.html?type=system",
	  "xtid": "uuua"
	},
	{
	  "xh": "6",
	  "id": "8c9d942ca61849d895c3406c4a98bc00",
	  "pid": "9ffbb04414b4432a9652aa04d1442228",
	  "text": "缓存管理",
	  "frameurl": "/common/cache/systemmanage/cachemanage/cachemanage.html",
	  "xtid": ""
	},
	{
	  "xh": "7",
	  "id": "f3c24cef5db24179833c294858c09928",
	  "pid": "9ffbb04414b4432a9652aa04d1442228",
	  "text": "日志审计"
	},
	{
	  "xh": "71",
	  "id": "4b48ea024be84fde8224d0700e7edd32",
	  "pid": "9ffbb04414b4432a9652aa04d1442228",
	  "text": "系统常用工具",
	  "frameurl": "/common/cache/systemmanage/systemutils/systemUtil.html",
	  "xtid": ""
	},
	{
	  "xh": "72",
	  "id": "03bfc415b11e4f7592d83fb10daafc8a",
	  "pid": "9ffbb04414b4432a9652aa04d1442228",
	  "text": "意见与建议反馈",
	  "frameurl": "/common/utils/page/common/staticfiles/issueCollectionList.html",
	  "xtid": ""
	},
	{
	  "xh": "80",
	  "id": "fd7ac73410d94fb7b61436b6bdec32cd",
	  "pid": "9ffbb04414b4432a9652aa04d1442228",
	  "text": "意见与建议答复",
	  "frameurl": "/common/utils/page/common/staticfiles/issueAnswerList.html",
	  "xtid": ""
	},
	{
	  "xh": "9",
	  "id": "af31acdaa908467d9c63aa8b61dedf63",
	  "pid": "4244a39ff45540198f68b89407a99608",
	  "text": "资源目录管理",
	  "xtid": "dataquery"
	},
	{
	  "xh": "1",
	  "id": "38e323489db14a7d91f074561c06a4ff",
	  "pid": "a4667f35cb3d4e53ac63a67b97a4f0a9",
	  "text": "功能管理",
	  "frameurl": "/optimus/auth/func_list.html",
	  "xtid": "uuua"
	},
	{
	  "xh": "1",
	  "id": "9476fa113ba34e4fba7458c4f00a9a9b",
	  "pid": "a6d5462188254197b84fc08525defb3f",
	  "text": "通知消息管理",
	  "frameurl": "/optimus/notice/static/noticeMessage.html",
	  "xtid": ""
	},
	{
	  "xh": "1",
	  "id": "6c8415b890ab4ac2879701885d321952",
	  "pid": "bbd56af5770f4cc5b8af9b01b04f9cb2",
	  "text": "仪表板审核",
	  "frameurl": "/dataanalysis/doc/page/common/vpAndReport/manager/analysisReport.html",
	  "xtid": "daresult"
	},
	{
	  "xh": "1",
	  "id": "c6ccb5da6e2145d8b8a63f5a182a7ba4",
	  "pid": "47c6d527a8314eb9b4b6c231ff56c589",
	  "text": "任务流定义",
	  "frameurl": "\\datagov\\requirement\\ruledefinition\\ruleDef.html",
	  "xtid": "datafactory"
	},
	{
	  "xh": "1",
	  "id": "2fb9dbfdb7b2446fb9d52e88dc3eb11a",
	  "pid": "de91876fa05b44b6a26cc3ebcb011b4a",
	  "text": "发布位置管理",
	  "frameurl": "/page/datasharing/releaseLocation.jsp",
	  "xtid": ""
	},
	{
	  "xh": "10",
	  "id": "6fa96390bfcc4cf88148da864f7ee548",
	  "pid": "1a73636b948646d2b4e0e920a06a183e",
	  "text": "调查项目属性定义",
	  "frameurl": "/datagov/metadata/metadata/attribute/attribute.html?itemTypeId=DDIInstance",
	  "xtid": "metadata"
	},
	{
	  "xh": "11",
	  "id": "a17ad1e0ff624162bcfb25410d1ffb99",
	  "pid": "93c9ce86efc84917bcd3a7e81a1a6344",
	  "text": "变量组与逻辑映射",
	  "frameurl": "/datagov/dquery/indicatorTree/micro/micro_mapping_list.html",
	  "xtid": "dataquery"
	},
	{
	  "xh": "11",
	  "id": "213f370ba2194632a1443ddda00c81d3",
	  "pid": "af14f1fd2e364cef90dfa2ecd708c19f",
	  "text": "资源库子库",
	  "frameurl": "/datagov/requirement/queryresource/dataSubResource.html",
	  "xtid": "datafactory"
	},
	{
	  "xh": "12",
	  "id": "349c9143fda34933a52022120ecfb852",
	  "pid": "af14f1fd2e364cef90dfa2ecd708c19f",
	  "text": "业务系统",
	  "frameurl": "/datagov/requirement/queryresource/businessSystem.html",
	  "xtid": "datafactory"
	},
	{
	  "xh": "12",
	  "id": "150ccdb69ce74d628a3000adcd91abaf",
	  "pid": "93c9ce86efc84917bcd3a7e81a1a6344",
	  "text": "分析指标树管理",
	  "frameurl": "/datagov/dquery/indicatorTree/micro/indicatorMicroQuery.html",
	  "xtid": "dataquery"
	},
	{
	  "xh": "13",
	  "id": "ae0e6402b342476ab8968229c15fe216",
	  "pid": "93c9ce86efc84917bcd3a7e81a1a6344",
	  "text": "变量关联配置",
	  "frameurl": "/datagov/dquery/varrelation/varRelationList.html",
	  "xtid": "dataquery"
	},
	{
	  "xh": "13",
	  "id": "d93ba1581bcb4fbab16762986c62d3a2",
	  "pid": "af14f1fd2e364cef90dfa2ecd708c19f",
	  "text": "数据库",
	  "frameurl": "/datagov/requirement/queryresource/dataSourceList.html",
	  "xtid": "datafactory"
	},
	{
	  "xh": "14",
	  "id": "0c04104a3584426993af26922b818316",
	  "pid": "af14f1fd2e364cef90dfa2ecd708c19f",
	  "text": "数据表",
	  "frameurl": "/datagov/requirement/queryresource/datatable.html",
	  "xtid": "datafactory"
	},
	{
	  "xh": "15",
	  "id": "7a0297bb13604a55b18b331230a7bf15",
	  "pid": "af14f1fd2e364cef90dfa2ecd708c19f",
	  "text": "字段",
	  "frameurl": "/datagov/requirement/queryresource/dataColumn.html",
	  "xtid": "datafactory"
	},
	{
	  "xh": "2",
	  "id": "4c19b8b75540487787e34eaec40258cc",
	  "pid": "de91876fa05b44b6a26cc3ebcb011b4a",
	  "text": "热词发布",
	  "frameurl": "/page/hotword/hotWordList.jsp?fbgnfl=rc&isPackage=true",
	  "xtid": ""
	},
	{
	  "xh": "2",
	  "id": "e65b6e1a86334bbb90288bb554267da9",
	  "pid": "a6d5462188254197b84fc08525defb3f",
	  "text": "我的消息管理",
	  "frameurl": "/optimus/notice/static/myMessage.html",
	  "xtid": ""
	},
	{
	  "xh": "2",
	  "id": "d788ce25aa3b43d6a274dd7c73e22fcd",
	  "pid": "a4667f35cb3d4e53ac63a67b97a4f0a9",
	  "text": "白名单管理",
	  "frameurl": "/optimus/auth/white_list.html",
	  "xtid": "uuua"
	},
	{
	  "xh": "20",
	  "id": "1f0f7fdb8c304512861007dce2ba1559",
	  "pid": "1a73636b948646d2b4e0e920a06a183e",
	  "text": "调查制度属性定义",
	  "frameurl": "/datagov/metadata/metadata/attribute/attribute.html?itemTypeId=Group",
	  "xtid": "metadata"
	},
	{
	  "xh": "21",
	  "id": "6397b81bbafa44529ac9dd95addd940b",
	  "pid": "0a5f251aab124f45a24da202035a790e",
	  "text": "热词管理",
	  "frameurl": "/datagov/dquery/keywordQuery/keywordQuery.html",
	  "xtid": "dataquery"
	},
	{
	  "xh": "3",
	  "id": "2cbcdf9da5e446e88c6bf4b2191269f7",
	  "pid": "a6d5462188254197b84fc08525defb3f",
	  "text": "通知类型管理",
	  "frameurl": "/optimus/notice/static/noticeType.html",
	  "xtid": ""
	},
	{
	  "xh": "3",
	  "id": "01a55cf34dd44ac18a57e6d0443320e8",
	  "pid": "a4667f35cb3d4e53ac63a67b97a4f0a9",
	  "text": "角色管理",
	  "frameurl": "/optimus/auth/role_list.html",
	  "xtid": "uuua"
	},
	{
	  "xh": "3",
	  "id": "908f9493c7cf4637bad0032286f9df9a",
	  "pid": "de91876fa05b44b6a26cc3ebcb011b4a",
	  "text": "仪表板发布",
	  "frameurl": "/dataanalysis/doc/page/common/vpAndReport/manager/reportPublicManager.html?fbgnfl=fxbg&isCheck=true&isPackage=true",
	  "xtid": "daresult"
	},
	{
	  "xh": "30",
	  "id": "36280018e0e9461690b358ce9fcac038",
	  "pid": "1a73636b948646d2b4e0e920a06a183e",
	  "text": "调查任务属性定义",
	  "frameurl": "/datagov/metadata/metadata/attribute/attribute.html?itemTypeId=StudyUnit",
	  "xtid": "metadata"
	},
	{
	  "xh": "31",
	  "id": "745107a5391f47aba1fd6d5c796087b8",
	  "pid": "1ca749bc15e14a69bb1ffd96a2432e93",
	  "text": "任务流配置",
	  "frameurl": "/datagov/requirement/taskmanage/taskConfig.html",
	  "xtid": "dataportray"
	},
	{
	  "xh": "32",
	  "id": "1f848ae39fe84e6d9c1f7704221a28a2",
	  "pid": "1ca749bc15e14a69bb1ffd96a2432e93",
	  "text": "任务监控",
	  "frameurl": "https://172.30.7.208:8443/index",
	  "xtid": "dataportray"
	},
	{
	  "xh": "4",
	  "id": "59dd53baf8d84ce782d674f3b1937ed1",
	  "pid": "de91876fa05b44b6a26cc3ebcb011b4a",
	  "text": "数据发布",
	  "frameurl": "",
	  "xtid": ""
	},
	{
	  "xh": "4",
	  "id": "24ceaa9dbe71402e82d52971a96a8a4d",
	  "pid": "a4667f35cb3d4e53ac63a67b97a4f0a9",
	  "text": "用户管理",
	  "frameurl": "/optimus/auth/user_list.html",
	  "xtid": "uuua"
	},
	{
	  "xh": "40",
	  "id": "c6ce98ed17254a0cb8b138e3626f5fe8",
	  "pid": "1a73636b948646d2b4e0e920a06a183e",
	  "text": "统计报表属性定义",
	  "frameurl": "/datagov/metadata/metadata/attribute/attribute.html?itemTypeId=Instrument",
	  "xtid": "metadata"
	},
	{
	  "xh": "5",
	  "id": "b4a9da4940194913a7245b473c63888f",
	  "pid": "a4667f35cb3d4e53ac63a67b97a4f0a9",
	  "text": "在线用户管理",
	  "frameurl": "/optimus/auth/user_alive_list.html",
	  "xtid": "uuua"
	},
	{
	  "xh": "50",
	  "id": "aa1ab0b8f57949389005dc7139102741",
	  "pid": "1a73636b948646d2b4e0e920a06a183e",
	  "text": "变量属性定义",
	  "xtid": "metadata"
	},
	{
	  "xh": "7",
	  "id": "ea82d40a41784585aab9d3f9413f6d4b",
	  "pid": "f3c24cef5db24179833c294858c09928",
	  "text": "日志查询",
	  "frameurl": "/optimus/log/log_list.html",
	  "xtid": ""
	},
	{
	  "xh": "7",
	  "id": "c0178866074b46eabc57007c42c50137",
	  "pid": "f3c24cef5db24179833c294858c09928",
	  "text": "攻击分析",
	  "frameurl": "/optimus/log/attackAnalysis.html",
	  "xtid": ""
	},
	{
	  "xh": "7",
	  "id": "7e7517ea07814db6925ea53bf875bb25",
	  "pid": "f3c24cef5db24179833c294858c09928",
	  "text": "使用统计",
	  "frameurl": "/optimus/log/statistics.html",
	  "xtid": ""
	},
	{
	  "xh": "901",
	  "id": "50a229b671d84aa2a364fa1f4f69a0af",
	  "pid": "af31acdaa908467d9c63aa8b61dedf63",
	  "text": "生成资源目录",
	  "frameurl": "/datagov/dquery/resourceCatalog/resourceCatalogManage2.html",
	  "xtid": "dataquery"
	},
	{
	  "xh": "902",
	  "id": "31b1cdc727284671ba645f8eac5d11f9",
	  "pid": "af31acdaa908467d9c63aa8b61dedf63",
	  "text": "资源目录",
	  "frameurl": "/datagov/dquery/resourceCatalog/resourceCatalogTable.html",
	  "xtid": "dataquery"
	},
	{
	  "xh": "903",
	  "id": "bff82950081444acac89c15cbd589b15",
	  "pid": "af31acdaa908467d9c63aa8b61dedf63",
	  "text": "资源项",
	  "frameurl": "/datagov/dquery/resourceCatalog/resourceCatalogColumn.html",
	  "xtid": "dataquery"
	},
	{
	  "xh": "51",
	  "id": "1587684fe2fa44a1bbab4ffe436f8dc7",
	  "pid": "aa1ab0b8f57949389005dc7139102741",
	  "text": "统计指标属性定义",
	  "frameurl": "/datagov/metadata/metadata/attribute/attribute.html?itemTypeId=Variable&variableType=indicator",
	  "xtid": "metadata"
	},
	{
	  "xh": "52",
	  "id": "8e747187434746f093f1da363d069142",
	  "pid": "aa1ab0b8f57949389005dc7139102741",
	  "text": "统计分组属性定义",
	  "frameurl": "/datagov/metadata/metadata/attribute/attribute.html?itemTypeId=Variable&variableType=group",
	  "xtid": "metadata"
	},
	{
	  "xh": "53",
	  "id": "611ac22d7e0e48c098f5e701553ced90",
	  "pid": "aa1ab0b8f57949389005dc7139102741",
	  "text": "统计目录属性定义",
	  "frameurl": "/datagov/metadata/metadata/attribute/attribute.html?itemTypeId=Variable&variableType=category",
	  "xtid": "metadata"
	}
  ]


export const routes = resetRoute(Json)

/**
 * @description 处理后台返回的json文件
 * @param {Array} data 
 */
function resetRoute(data){
	//1.先对树形结构做一个统一处理
  data.forEach(element => {
	  if(element.frameurl){
		element.meta = {
			title:element.text,
			url:element.frameurl
		}
	  }else{
		element.meta = {
			title:element.text,
		}
	  }
	  element.component='';
	  element.path="/"+py(element.text);
	  element.name=py(element.text);
  });
  //2.转换成嵌套结构
  let res = FlatToNested(data);
  //3.处理不同的数据
  res[0].children.forEach((child)=>{
	first(child.children)
  })
  //4.查看数据 产生数组对应关系
  let resArr  = [];
  let headerobj = {}
  res[0].children.forEach((item)=>{
	for (let index = 0; index < item.children.length; index++) {
		const element = item.children[index];
		element.isshow = item.text;
		element.meta.icon = "el-icon-s-help";
		resArr.push(
			element
		)
	}
	headerobj[item.text]=item.children[0].path;
  })
  
  return {resArr,headerobj}

}

/**
 * @description 对一级路由进行特殊处理
 * @returns {
				path: '/form',
				component: Layout,
				children: [
				  {
					path: 'index',
					name: 'Form',
					component:() => import('@/views/dashboard/index'),
					meta: { title: 'Form', icon: 'form',url:'http://demo.gofusion.cn/dataanalysis/bi/page/webtools/base/DataanalysisModel.html' }
				  }
				]
			  }
 * @param {Array} firstChid 
 */
function first(firstChid){
	for (let index = 0; index < firstChid.length; index++) {
		let element = firstChid[index];
		element.component = Layout;
		if(element.children&&element.children.length!==0){
			element.redirect=element.children[0].path;
			other(element)
		}else{
			element.redirect=element.path+'/index';
			element.children = [
				{
					path: 'index',
					name: element.name,
					component:dashboard,
					meta:element.meta,
				}
			]
		}
	}
}


/**
 * @description 对于其他路由的递归处理
 * @param {Array} son 
 * @returns  {
				path: '/example',
				component: Layout,
				redirect: '/example/table',
				name: 'Example',
				meta: { title: 'Example', icon: 'el-icon-s-help' },
				children: [
				  {
					path: 'tree',
					name: 'Tree',
					component: () => import('@/views/dashboard/index'),
					meta: { title: 'Tree', icon: 'tree',url:'http://demo.gofusion.cn/dataanalysis/bi/page/webtools/base/DataanalysisModel.html' }
				  }
				]
			  }
 */
function other(son){
	for (let index = 0; index < son.children.length; index++) {
		let sonItem = son.children[index];
		sonItem.component = dashboard;
		delete sonItem.id
		delete sonItem.pid
		delete  sonItem.frameurl
		delete sonItem.text
		delete sonItem.icon
		delete sonItem.xh
		if(sonItem.children && sonItem.children!==0){
			other(sonItem)
		}
	}
}


/**
 * 
 * @param {Array} data 
 * @param {Object} option 
 */
function FlatToNested(data, option) {
    option = option || {};
    let idProperty = option.idProperty || "id";
    let parentProperty = option.parentProperty || "pid";
    let childrenProperty = option.childrenProperty || "children";
    let res = [],
      tmpMap = [];
    for (let i = 0; i < data.length; i++) {
      tmpMap[data[i][idProperty]] = data[i];
      if (
        tmpMap[data[i][parentProperty]] &&
        data[i][idProperty] != data[i][parentProperty]
      ) {
        if (!tmpMap[data[i][parentProperty]][childrenProperty])
          tmpMap[data[i][parentProperty]][childrenProperty] = [];
        tmpMap[data[i][parentProperty]][childrenProperty].push(data[i]);
      } else {
        res.push(data[i]);
      }
    }
    return res;
  }
