/* 
  专门用于发送请求的多个函数对象
*/
import axios from './ajax'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

/*    
    // 新闻列表    
    articleList () {        
        return axios.get(`${base.sq}/topics`);    
    },    
    // 新闻详情,演示    
    articleDetail (id, params) {        
        return axios.get(`${base.sq}/topic/${id}`, {            
            params: params        
        });    
    },
    // post提交    
    login (params) {        
        return axios.post(`${base.sq}/accesstoken`, qs.stringify(params));    
    }
    // 其他接口…………
} */
//获取菜单
export const getFastMenuReq = (params)=>axios.post(`/api/auth/v1/auth/queryFuncTreeNew.do`,qs.stringify(params))

//获取登录信息
export const reqLoginName = ()=>axios.post('/api/auth/v1/unifiedauth/getLoginName.do')
