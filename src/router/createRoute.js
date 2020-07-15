
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
const Json  =[{
	"id": "d74d41d3bb6a455d974d473ce6fa1bd5",
	"pid": "0",
	"text": "后台管理系统",
	"xh": "50"
}, {
	"id": "b4423a0db06440f284e73bda52ffceca",
	"pid": "d74d41d3bb6a455d974d473ce6fa1bd5",
	"icon": "el-icon-sjcj",
	"text": "数据采集",
	"xh": "10"
}, {
	"id": "18bccae35d324b3aa8a2777aa2101cef",
	"pid": "d74d41d3bb6a455d974d473ce6fa1bd5",
	"icon": "el-icon-ysk",
	"text": "元数据",
	"xh": "15",
	"xtid": "metadata"
}, {
	"id": "849ec9b9ec654114b9f5a985abeddcd4",
	"pid": "d74d41d3bb6a455d974d473ce6fa1bd5",
	"icon": "el-icon-zyzh",
	"text": "资源整合",
	"xh": "20",
	"xtid": "data"
}, {
	"id": "4244a39ff45540198f68b89407a99608",
	"pid": "d74d41d3bb6a455d974d473ce6fa1bd5",
	"icon": "el-icon-sjzl",
	"text": "数据治理",
	"xh": "50",
	"xtid": "daresult"
}, {
	"id": "9ffbb04414b4432a9652aa04d1442228",
	"pid": "d74d41d3bb6a455d974d473ce6fa1bd5",
	"icon": "el-icon-gljk",
	"text": "管理监控",
	"xh": "60",
	"xtid": "uuua"
}, {
	"id": "a4667f35cb3d4e53ac63a67b97a4f0a9",
	"pid": "9ffbb04414b4432a9652aa04d1442228",
	"text": "权限管理",
	"icon": "el-icon-zhankai",
	"xh": "1",
	"xtid": "uuua"
}, {
	"id": "ae4d6af5aa0344a4a29575d4101ac15b",
	"pid": "b4423a0db06440f284e73bda52ffceca",
	"icon": "el-icon-zhankai",
	"text": "任务管理",
	"xh": "1"
}, {
	"id": "1a73636b948646d2b4e0e920a06a183e",
	"pid": "18bccae35d324b3aa8a2777aa2101cef",
	"icon": "el-icon-zhankai",
	"text": "属性管理",
	"xh": "10",
	"xtid": "metadata"
}, {
	"id": "06ab16d758834c5a8a73a48112d10460",
	"pid": "849ec9b9ec654114b9f5a985abeddcd4",
	"text": "文件接收",
	"icon": "el-icon-zhankai",
	"xh": "2",
	"xtid": "data"
}, {
	"id": "730b12f12cad45a6bf41a299482aa144",
	"pid": "9ffbb04414b4432a9652aa04d1442228",
	"text": "定时任务管理",
	"icon": "el-icon-zhankai",
	"xh": "2"
}, {
	"id": "a159e208181047cfbe62fe94535984c0",
	"pid": "b4423a0db06440f284e73bda52ffceca",
	"icon": "el-icon-zhankai",
	"text": "数据填报",
	"xh": "2"
}, {
	"frameurl": "/page/metadata/programmanage/projectmanage.jsp?itemTypeId=DDIInstance",
	"id": "b168a9be03fc4a95afc32da54e047d09",
	"pid": "18bccae35d324b3aa8a2777aa2101cef",
	"icon": "el-icon-fang",
	"text": "元数据管理",
	"xh": "20",
	"xtid": "metadata"
}, {
	"frameurl": "/page/metadata/tagmanage/tagmanage.jsp",
	"id": "c8b809eb48e44958877bce6be8ecb1d2",
	"pid": "18bccae35d324b3aa8a2777aa2101cef",
	"icon": "el-icon-fang",
	"text": "元数据标签管理",
	"xh": "20",
	"xtid": "metadata"
}, {
	"id": "21aa7f4c0efe4941867da3f3c239f2d9",
	"pid": "849ec9b9ec654114b9f5a985abeddcd4",
	"text": "文件加载管理",
	"icon": "el-icon-zhankai",
	"xh": "3",
	"xtid": "data"
}, {
	"id": "a6d5462188254197b84fc08525defb3f",
	"pid": "9ffbb04414b4432a9652aa04d1442228",
	"text": "用户通知管理",
	"icon": "el-icon-zhankai",
	"xh": "3"
}, {
	"frameurl": "/page/dictionary/dictionary_list.jsp",
	"id": "feeb129f21e84ed4bedcf20f08962e69",
	"pid": "18bccae35d324b3aa8a2777aa2101cef",
	"icon": "el-icon-fang",
	"text": "代码表管理",
	"xh": "3",
	"xtid": "metadata"
}, {
	"frameurl": "/page/metadata/unitmanage/categorylist.jsp",
	"id": "29434f597a4c410d98dd8092110d0dc3",
	"pid": "18bccae35d324b3aa8a2777aa2101cef",
	"icon": "el-icon-fang",
	"text": "计量单位管理",
	"xh": "4",
	"xtid": "metadata"
}, {
	"frameurl": "/page/cjapp/tbjd/tbjd.jsp",
	"id": "8f4602b2681d4487a75e718ba342e691",
	"pid": "b4423a0db06440f284e73bda52ffceca",
	"icon": "el-icon-fang",
	"text": "填报进度管理",
	"xh": "4"
}, {
	"id": "a7580bb341ac4e53912b5b1e68a0eb17",
	"pid": "849ec9b9ec654114b9f5a985abeddcd4",
	"text": "数据纠错",
	"icon": "el-icon-zhankai",
	"xh": "4",
	"xtid": "data"
}, {
	"frameurl": "/datasetmanage/page/dataSetList.jsp",
	"id": "90e6812a770d42549eedc8aae9b00e6f",
	"pid": "9ffbb04414b4432a9652aa04d1442228",
	"text": "数据集管理",
	"icon": "el-icon-fang",
	"xh": "5"
}, {
	"frameurl": "/parametermanage/page/parameterList.jsp",
	"id": "cdcf44ceb52f4f9391c80ecd89dfff63",
	"pid": "9ffbb04414b4432a9652aa04d1442228",
	"text": "参数管理",
	"icon": "el-icon-fang",
	"xh": "5"
}, {
	"frameurl": "/page/cjapp/cjrz/log/log_list.jsp",
	"id": "e8759f57975a4b778811e060776ea2fb",
	"pid": "b4423a0db06440f284e73bda52ffceca",
	"icon": "el-icon-fang",
	"text": "采集日志",
	"xh": "5"
}, {
	"id": "f18512e78a7347e993e4f281b54a8174",
	"pid": "849ec9b9ec654114b9f5a985abeddcd4",
	"text": "文件卸载管理",
	"icon": "el-icon-zhankai",
	"xh": "5",
	"xtid": "data"
}, {
	"frameurl": "/page/monitor/monitorView.jsp",
	"id": "f18577e7313342c781dd080939196101",
	"pid": "9ffbb04414b4432a9652aa04d1442228",
	"text": "硬件监控",
	"icon": "el-icon-fang",
	"xh": "5"
}, {
	"frameurl": "/page/indicatorTree/micro/micro_mapping_list.jsp",
	"id": "a17ad1e0ff624162bcfb25410d1ffb99",
	"pid": "4244a39ff45540198f68b89407a99608",
	"text": "变量组与逻辑映射",
	"icon": "el-icon-fang",
	"xh": "501",
	"xtid": "dataquery"
}, {
	"frameurl": "/page/indicatorTree/micro/indicatorMicroQuery.jsp",
	"id": "150ccdb69ce74d628a3000adcd91abaf",
	"pid": "4244a39ff45540198f68b89407a99608",
	"text": "分析指标树管理",
	"icon": "el-icon-fang",
	"xh": "502",
	"xtid": "dataquery"
}, {
	"id": "bbd56af5770f4cc5b8af9b01b04f9cb2",
	"pid": "4244a39ff45540198f68b89407a99608",
	"text": "编制成果审核",
	"icon": "el-icon-zhankai",
	"xh": "520",
	"xtid": "daresult"
}, {
	"id": "de91876fa05b44b6a26cc3ebcb011b4a",
	"pid": "4244a39ff45540198f68b89407a99608",
	"text": "发布管理",
	"icon": "el-icon-zhankai",
	"xh": "521"
}, {
	"frameurl": "/page/keywordQuery/keywordQuery.jsp",
	"id": "6397b81bbafa44529ac9dd95addd940b",
	"pid": "4244a39ff45540198f68b89407a99608",
	"text": "vue界面",
	"icon": "el-icon-fang",
	"xh": "1",
	"xtid": "dataquery"
}, {
	"frameurl": "/page/systemmanage/cachemanage/cachemanage.jsp",
	"id": "8c9d942ca61849d895c3406c4a98bc00",
	"pid": "9ffbb04414b4432a9652aa04d1442228",
	"text": "缓存管理",
	"icon": "el-icon-fang",
	"xh": "6"
}, {
	"id": "f3c24cef5db24179833c294858c09928",
	"pid": "9ffbb04414b4432a9652aa04d1442228",
	"text": "日志审计",
	"icon": "el-icon-zhankai",
	"xh": "7"
}, {
	"frameurl": "/page/systemmanage/systemutils/systemUtil.jsp",
	"id": "4b48ea024be84fde8224d0700e7edd32",
	"pid": "9ffbb04414b4432a9652aa04d1442228",
	"text": "系统常用工具",
	"icon": "el-icon-fang",
	"xh": "71"
}, {
	"frameurl": "/page/common/staticfiles/issueCollectionList.jsp",
	"id": "03bfc415b11e4f7592d83fb10daafc8a",
	"pid": "9ffbb04414b4432a9652aa04d1442228",
	"text": "意见与建议反馈",
	"icon": "el-icon-fang",
	"xh": "72"
}, {
	"frameurl": "/page/varrelation/varRelationList.jsp",
	"id": "ae0e6402b342476ab8968229c15fe216",
	"pid": "4244a39ff45540198f68b89407a99608",
	"text": "变量关联配置",
	"icon": "el-icon-fang",
	"xh": "8",
	"xtid": "dataquery"
}, {
	"frameurl": "/page/common/staticfiles/issueAnswerList.jsp",
	"id": "fd7ac73410d94fb7b61436b6bdec32cd",
	"pid": "9ffbb04414b4432a9652aa04d1442228",
	"text": "意见与建议答复",
	"icon": "el-icon-fang",
	"xh": "80"
}, {
	"id": "af31acdaa908467d9c63aa8b61dedf63",
	"pid": "4244a39ff45540198f68b89407a99608",
	"text": "资源目录管理",
	"icon": "el-icon-zhankai",
	"xh": "9",
	"xtid": "dataquery"
}, {
	"frameurl": "/page/hotword/hotWordList.jsp?fbgnfl=rc&isPackage=true",
	"id": "4c19b8b75540487787e34eaec40258cc",
	"pid": "de91876fa05b44b6a26cc3ebcb011b4a",
	"text": "热词发布",
	"icon": "el-icon-fang"
}, {
	"frameurl": "/page/cjapp/sjtb/sjtbTaskList.jsp",
	"id": "1889d37e6e7a415980655f4f3af692b8",
	"pid": "a159e208181047cfbe62fe94535984c0",
	"icon": "el-icon-fang",
	"text": "填报任务",
	"xh": "1"
}, {
	"frameurl": "/page/auth/func_list.jsp",
	"id": "38e323489db14a7d91f074561c06a4ff",
	"pid": "a4667f35cb3d4e53ac63a67b97a4f0a9",
	"text": "功能管理",
	"icon": "el-icon-fang",
	"xh": "1",
	"xtid": "uuua"
}, {
	"frameurl": "/page/cjapp/tbdwgl/tbdwgl.jsp",
	"id": "3a4fdb19431d48dc98b1a9cba20832cc",
	"pid": "ae4d6af5aa0344a4a29575d4101ac15b",
	"text": "填报单位管理",
	"icon": "el-icon-fang",
	"xh": "1"
}, {
	"frameurl": "/dataanalysis/page/common/vpAndReport/manager/analysisReport.jsp",
	"id": "6c8415b890ab4ac2879701885d321952",
	"pid": "bbd56af5770f4cc5b8af9b01b04f9cb2",
	"text": "分析报告审核",
	"icon": "el-icon-fang",
	"xh": "1",
	"xtid": "daresult"
}, {
	"frameurl": "/page/notice/noticeMessage.jsp",
	"id": "9476fa113ba34e4fba7458c4f00a9a9b",
	"pid": "a6d5462188254197b84fc08525defb3f",
	"text": "通知消息管理",
	"icon": "el-icon-fang",
	"xh": "1"
}, {
	"frameurl": "/page/dataloadmanagement/dataunloadmanagement.jsp",
	"id": "17df8a73c66b4806a15c2322cb70919b",
	"pid": "f18512e78a7347e993e4f281b54a8174",
	"text": "文件卸载",
	"icon": "el-icon-fang",
	"xh": "10",
	"xtid": "data"
}, {
	"frameurl": "/page/datacorrection/superdatacorrection.jsp",
	"id": "299d6d8146b44749ad4d6a6a58d1a9c4",
	"pid": "a7580bb341ac4e53912b5b1e68a0eb17",
	"text": "数据冲突检查",
	"icon": "el-icon-fang",
	"xh": "10",
	"xtid": "data"
}, {
	"frameurl": "/page/metadata/attribute/attribute.jsp?itemTypeId=DDIInstance",
	"id": "6fa96390bfcc4cf88148da864f7ee548",
	"pid": "1a73636b948646d2b4e0e920a06a183e",
	"icon": "el-icon-fang",
	"text": "调查项目属性定义",
	"xh": "10",
	"xtid": "metadata"
}, {
	"frameurl": "/page/dataportray/dataportraymodulelist.jsp",
	"id": "9665b2619eb544e9877334337b4c8d1a",
	"pid": "21aa7f4c0efe4941867da3f3c239f2d9",
	"text": "模版管理",
	"icon": "el-icon-fang",
	"xh": "10",
	"xtid": "data"
}, {
	"frameurl": "/page/dataportray/dataupload/dataUploadFile.jsp",
	"id": "d0fd2122640e45ae809b59f2f96b6c55",
	"pid": "06ab16d758834c5a8a73a48112d10460",
	"text": "本地文件上传",
	"icon": "el-icon-fang",
	"xh": "10",
	"xtid": "data"
}, {
	"frameurl": "/page/cjapp/fillCatalog/fillCatalog.jsp",
	"id": "23a2f444e9b14b67b5514b01dfbfd28b",
	"pid": "ae4d6af5aa0344a4a29575d4101ac15b",
	"icon": "el-icon-fang",
	"text": "填报目录管理",
	"xh": "2"
}, {
	"frameurl": "/page/cjapp/sjtbhistory/sjtbHistoryList.jsp",
	"id": "638dd74ed2584964a74f85e7a84218dc",
	"pid": "a159e208181047cfbe62fe94535984c0",
	"icon": "el-icon-fang",
	"text": "填报历史",
	"xh": "2"
}, {
	"frameurl": "/dataanalysis/page/common/vpAndReport/manager/vProducts.jsp",
	"id": "77436b5f2a8a44ecb6f5a171a26800e3",
	"pid": "bbd56af5770f4cc5b8af9b01b04f9cb2",
	"text": "可视化产品审核",
	"icon": "el-icon-fang",
	"xh": "2",
	"xtid": "daresult"
}, {
	"frameurl": "/page/auth/white_list.jsp",
	"id": "d788ce25aa3b43d6a274dd7c73e22fcd",
	"pid": "a4667f35cb3d4e53ac63a67b97a4f0a9",
	"text": "白名单管理",
	"icon": "el-icon-fang",
	"xh": "2",
	"xtid": "uuua"
}, {
	"frameurl": "/page/notice/myMessage.jsp",
	"id": "e65b6e1a86334bbb90288bb554267da9",
	"pid": "a6d5462188254197b84fc08525defb3f",
	"text": "我的消息管理",
	"icon": "el-icon-fang",
	"xh": "2"
}, {
	"frameurl": "/page/dataportray/exdataportraylist.jsp",
	"id": "0720d5e6aaa14674a9a6826dd67435e4",
	"pid": "06ab16d758834c5a8a73a48112d10460",
	"text": "交换平台接收队列",
	"icon": "el-icon-fang",
	"xh": "20",
	"xtid": "data"
}, {
	"frameurl": "/page/dataportray/mappingInfos.jsp",
	"id": "0d20a825b10241969df146ae057e60bd",
	"pid": "21aa7f4c0efe4941867da3f3c239f2d9",
	"text": "上传映射文件",
	"icon": "el-icon-fang",
	"xh": "20",
	"xtid": "data"
}, {
	"frameurl": "/page/metadata/attribute/attribute.jsp?itemTypeId=Group",
	"id": "1f0f7fdb8c304512861007dce2ba1559",
	"pid": "1a73636b948646d2b4e0e920a06a183e",
	"icon": "el-icon-fang",
	"text": "调查制度属性定义",
	"xh": "20",
	"xtid": "metadata"
}, {
	"frameurl": "/page/datacorrection/manualcorrection.jsp",
	"id": "42462158c6f144d28828d75c0bcbc330",
	"pid": "a7580bb341ac4e53912b5b1e68a0eb17",
	"text": "手工纠错",
	"icon": "el-icon-fang",
	"xh": "20",
	"xtid": "data"
}, {
	"frameurl": "/page/dataloadmanagement/dataloadmanagement.jsp",
	"id": "9eefb6bfb8fc47dfb0b013fb563cae77",
	"pid": "21aa7f4c0efe4941867da3f3c239f2d9",
	"text": "文件加载",
	"icon": "el-icon-fang",
	"xh": "20",
	"xtid": "data"
}, {
	"frameurl": "/page/dataloadmanagement/unloadloginfo.jsp",
	"id": "e33b928b6f4f4e168d81acd73b934549",
	"pid": "f18512e78a7347e993e4f281b54a8174",
	"text": "卸载日志",
	"icon": "el-icon-fang",
	"xh": "20",
	"xtid": "data"
}, {
	"frameurl": "/page/auth/role_list.jsp",
	"id": "01a55cf34dd44ac18a57e6d0443320e8",
	"pid": "a4667f35cb3d4e53ac63a67b97a4f0a9",
	"text": "角色管理",
	"icon": "el-icon-fang",
	"xh": "3",
	"xtid": "uuua"
}, {
	"frameurl": "/page/notice/noticeType.jsp",
	"id": "2cbcdf9da5e446e88c6bf4b2191269f7",
	"pid": "a6d5462188254197b84fc08525defb3f",
	"text": "通知类型管理",
	"icon": "el-icon-fang",
	"xh": "3"
}, {
	"frameurl": "/page/cjapp/fillTask/fillTask.jsp",
	"id": "cd7114f84d854c7dbf16a3bcc8f4df80",
	"pid": "ae4d6af5aa0344a4a29575d4101ac15b",
	"icon": "el-icon-fang",
	"text": "填报任务管理",
	"xh": "3"
}, {
	"frameurl": "/page/metadata/attribute/attribute.jsp?itemTypeId=StudyUnit",
	"id": "36280018e0e9461690b358ce9fcac038",
	"pid": "1a73636b948646d2b4e0e920a06a183e",
	"text": "调查任务属性定义",
	"icon": "el-icon-fang",
	"xh": "30",
	"xtid": "metadata"
}, {
	"frameurl": "/page/dataloadmanagement/loadingloginfo.jsp",
	"id": "81527184391841509b70ea35e3befbac",
	"pid": "21aa7f4c0efe4941867da3f3c239f2d9",
	"text": "加载日志",
	"icon": "el-icon-fang",
	"xh": "30",
	"xtid": "data"
}, {
	"frameurl": "/page/dataportray/dataupload/uploadFileInfos.jsp",
	"id": "cf648ec644a1481aad0f4900193ccc09",
	"pid": "06ab16d758834c5a8a73a48112d10460",
	"text": "接收文件管理",
	"icon": "el-icon-fang",
	"xh": "30",
	"xtid": "data"
}, {
	"frameurl": "/page/auth/user_list.jsp",
	"id": "24ceaa9dbe71402e82d52971a96a8a4d",
	"pid": "a4667f35cb3d4e53ac63a67b97a4f0a9",
	"text": "用户管理",
	"icon": "el-icon-fang",
	"xh": "4",
	"xtid": "uuua"
}, {
	"frameurl": "/page/dataportray/collectionlist.jsp",
	"id": "44fe07d9ee63411295726260771006cd",
	"pid": "06ab16d758834c5a8a73a48112d10460",
	"text": "采集系统接收",
	"icon": "el-icon-fang",
	"xh": "4",
	"xtid": "data"
}, {
	"frameurl": "/page/metadata/attribute/attribute.jsp?itemTypeId=Instrument",
	"id": "c6ce98ed17254a0cb8b138e3626f5fe8",
	"pid": "1a73636b948646d2b4e0e920a06a183e",
	"icon": "el-icon-fang",
	"text": "统计报表属性定义",
	"xh": "40",
	"xtid": "metadata"
}, {
	"frameurl": "/page/auth/user_alive_list.jsp",
	"id": "b4a9da4940194913a7245b473c63888f",
	"pid": "a4667f35cb3d4e53ac63a67b97a4f0a9",
	"text": "在线用户管理",
	"icon": "el-icon-fang",
	"xh": "5",
	"xtid": "uuua"
}, {
	"id": "aa1ab0b8f57949389005dc7139102741",
	"pid": "1a73636b948646d2b4e0e920a06a183e",
	"text": "变量属性定义",
	"icon": "el-icon-zhankai",
	"xh": "50",
	"xtid": "metadata"
}, {
	"frameurl": "/page/datasharing/releaseLocation.jsp",
	"id": "2fb9dbfdb7b2446fb9d52e88dc3eb11a",
	"pid": "de91876fa05b44b6a26cc3ebcb011b4a",
	"text": "发布位置管理",
	"icon": "el-icon-fang",
	"xh": "5171"
}, {
	"frameurl": "/dataanalysis/page/common/vpAndReport/manager/reportPublicManager.jsp?fbgnfl=fxbg&isCheck=true&isPackage=true",
	"id": "908f9493c7cf4637bad0032286f9df9a",
	"pid": "de91876fa05b44b6a26cc3ebcb011b4a",
	"text": "分析报告发布",
	"icon": "el-icon-fang",
	"xh": "517201"
}, {
	"frameurl": "/dataanalysis/page/common/vpAndReport/manager/visProPublicManager.jsp?fbgnfl=kshcp&isCheck=true&isPackage=true",
	"id": "932077fb12be4e718790b5ca854053ad",
	"pid": "de91876fa05b44b6a26cc3ebcb011b4a",
	"text": "可视化产品发布",
	"icon": "el-icon-fang",
	"xh": "517202"
}, {
	"frameurl": "/schedule/page/jobList/scheduleJobList.jsp",
	"id": "6d774f0dc4e54f7dbe6a6c501440ddb1",
	"pid": "730b12f12cad45a6bf41a299482aa144",
	"text": "定时任务列表",
	"icon": "el-icon-fang",
	"xh": "60"
}, {
	"frameurl": "/schedule/page/historyList/scheduleJobHistory.jsp",
	"id": "a37e4e08c94946029bc49872c2e53d0d",
	"pid": "730b12f12cad45a6bf41a299482aa144",
	"text": "运行历史记录",
	"icon": "el-icon-fang",
	"xh": "61"
}, {
	"frameurl": "/page/log/statistics.jsp",
	"id": "7e7517ea07814db6925ea53bf875bb25",
	"pid": "f3c24cef5db24179833c294858c09928",
	"text": "使用统计",
	"icon": "el-icon-fang",
	"xh": "7"
}, {
	"frameurl": "/page/log/attackAnalysis.jsp",
	"id": "c0178866074b46eabc57007c42c50137",
	"pid": "f3c24cef5db24179833c294858c09928",
	"text": "攻击分析",
	"icon": "el-icon-fang",
	"xh": "7"
}, {
	"frameurl": "/page/log/log_list.jsp",
	"id": "ea82d40a41784585aab9d3f9413f6d4b",
	"pid": "f3c24cef5db24179833c294858c09928",
	"text": "日志查询",
	"icon": "el-icon-fang",
	"xh": "7"
}, {
	"frameurl": "/page/auth/data_authority.jsp?dataType=1",
	"id": "24bd4d34d029406487dc057f5b7c9ffc",
	"pid": "a4667f35cb3d4e53ac63a67b97a4f0a9",
	"text": "数据权限",
	"icon": "el-icon-fang",
	"xh": "70",
	"xtid": ""
}, {
	"frameurl": "/page/resourceCatalog/resourceCatalogManage2.jsp",
	"id": "50a229b671d84aa2a364fa1f4f69a0af",
	"pid": "af31acdaa908467d9c63aa8b61dedf63",
	"text": "生成资源目录",
	"icon": "el-icon-fang",
	"xh": "901",
	"xtid": "dataquery"
}, {
	"frameurl": "/page/resourceCatalog/resourceCatalogTable.jsp",
	"id": "31b1cdc727284671ba645f8eac5d11f9",
	"pid": "af31acdaa908467d9c63aa8b61dedf63",
	"text": "资源目录",
	"icon": "el-icon-fang",
	"xh": "902",
	"xtid": "dataquery"
}, {
	"frameurl": "/page/resourceCatalog/resourceCatalogColumn.jsp",
	"id": "bff82950081444acac89c15cbd589b15",
	"pid": "af31acdaa908467d9c63aa8b61dedf63",
	"text": "资源项",
	"icon": "el-icon-fang",
	"xh": "903",
	"xtid": "dataquery"
}, {
	"frameurl": "/page/metadata/attribute/attribute.jsp?itemTypeId=Variable&variableType=indicator",
	"id": "1587684fe2fa44a1bbab4ffe436f8dc7",
	"pid": "aa1ab0b8f57949389005dc7139102741",
	"icon": "el-icon-fang",
	"text": "统计指标属性定义",
	"xh": "51",
	"xtid": "metadata"
}, {
	"frameurl": "/page/metadata/attribute/attribute.jsp?itemTypeId=Variable&variableType=group",
	"id": "8e747187434746f093f1da363d069142",
	"pid": "aa1ab0b8f57949389005dc7139102741",
	"icon": "el-icon-fang",
	"text": "统计分组属性定义",
	"xh": "52",
	"xtid": "metadata"
}, {
	"frameurl": "/page/metadata/attribute/attribute.jsp?itemTypeId=Variable&variableType=category",
	"id": "611ac22d7e0e48c098f5e701553ced90",
	"pid": "aa1ab0b8f57949389005dc7139102741",
	"icon": "el-icon-fang",
	"text": "统计目录属性定义",
	"xh": "53",
	"xtid": "metadata"
}]


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
			icon:"el-icon-s-help",
			url:element.frameurl
		}
	  }else{
		element.meta = {
			title:element.text,
			icon:"el-icon-s-help",
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
		resArr.push(
			element
		)
		headerobj[item.text]=element.path;
	}
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
			element.redirect=element.path+element.children[0].path;
			other(element.children)
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
	for (let index = 0; index < son.length; index++) {
		let sonItem = son[index];
		sonItem.component = dashboard;
		delete sonItem.id
		delete sonItem.pid
		delete  sonItem.frameurl
		delete sonItem.text
		delete sonItem.icon
		delete sonItem.xh
		if(sonItem.children && sonItem.children!==0){
			other(sonItem.children)
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
