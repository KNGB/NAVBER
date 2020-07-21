
import Layout from '@/layout'
import dashboard from '@/views/dashboard/index'

import {getFastMenuReq,reqLoginName} from '@/api'
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

/**
 * @description 处理后台返回的json文件
 * @param {Array} data 
 */
export const resetRoute = async function resetRoute(){
	let nameData = await reqLoginName()

	//处理数据
	
	if(nameData.code==200){
		//发送请求 获取json 
		let result = await getFastMenuReq({
			userId:nameData.data.userId,
			gnId:'d74d41d3bb6a455d974d473ce6fa1bd5',
			level:2
		})

		console.log('请求根节点数据___zongti ',result)
		if(result.code==200){
			let	data1 = result.data[0].data;
				//1.先对树形结构做一个统一处理
			data1.forEach(element => {
				if(element.url){
					element.meta = {
						title:element.text,
						url:element.url
					}
				}else{
					element.meta = {
						title:element.text,
					}
				}
				element.component='';
				// element.path="/"+py(element.text);
				// element.name=py(element.text);
				element.path="/"+element.id;
				element.name=element.id;
			});
			//2.转换成嵌套结构
			let res = FlatToNested(data1);
			//3.处理不同的数据
			res.forEach((child)=>{
				child.children&&first(child.children)
			})
			//4.查看数据 产生数组对应关系
			let resArr  = [];
			let headerobj = {}
			res.forEach((item)=>{
				if(item.children){
					for (let index = 0; index < item.children.length; index++) {
						const element = item.children[index];
						element.isshow = item.id;
						element.meta.icon = "el-icon-s-help";
						resArr.push(
							element
						)
				
					}
					headerobj[item.id]=item.children[0].path;
				}
				
			})
			console.log(resArr,'add')
			return {resArr,headerobj}

		}
	}     
	

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
					meta: { title: 'Form', icon: 'form',url:'/dataanalysis/bi/page/webtools/base/DataanalysisModel.html' }
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
					meta: { title: 'Tree', icon: 'tree',url:'dataanalysis/bi/page/webtools/base/DataanalysisModel.html' }
				  }
				]
			  }
 */
function other(son){
	for (let index = 0; index < son.children.length; index++) {
		let sonItem = son.children[index];
		sonItem.component = dashboard;
		delete sonItem.url
		delete sonItem.icon
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
    let parentProperty = option.parentProperty || "pId";
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
