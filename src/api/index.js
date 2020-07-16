/* 
  专门用于发送请求的多个函数对象
*/

import ajax from './ajax.js'
export const xxx = ()=>ajax({
  url:'',
  method:'',
  params:{
    latitude,
    longitude,
  }

})
//获取上方菜单
export const getFastMenuReq = ()=>ajax({
  url:`/api/auth/v1/unifiedauth/queryFuncTreeByMc.do`,
  method:'POST',
})
//获取登录信息
export const reqLoginName = ()=>ajax({
  url:'/api/auth/v1/unifiedauth/getLoginName.do',
  method:'POST',
})
