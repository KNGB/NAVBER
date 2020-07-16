<template>
<div class="Header">
    <el-row :gutter="24" type="flex" justify="space-around">
        <el-col :span="4" class="hidden-sm-and-down">
            <div class="grid-content heightToGrid">
                <div style="width:228px;height:41px">
                    <img src="http://demo.gofusion.cn/nav/sys/systemmanager/images/backsysLogo.png" alt="">
                </div>
            </div>
        </el-col>
        <el-col :span="16">
            <div class="grid-content heightToGrid ">
                <div v-for="(item,index) in nav" :key="index" :class="index===activeIndex ? 'navItem active':'navItem '"
                @click="reqNav(index,item)"
                >{{item.text}}</div>
            </div>
        </el-col>
        <el-col :span="4" class="hidden-sm-and-down">
                <div class="touxiang">
                        
                        <span><a href="http://demo.gofusion.cn/nav/portal/homePage.html" >系统首页</a></span>
                        <el-divider direction="vertical"></el-divider>
                        <div class="imgTouxiang">
                            <div class="imgItem"> </div>
                        </div>
                        <el-dropdown @command="handleCommand">
                        <span class="el-dropdown-link">
                            {{userMes.loginName?userMes.loginName:'请先登录'}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="logout">退出系统</el-dropdown-item>
                        </el-dropdown-menu>
                        </el-dropdown>
                </div>
        </el-col>
    </el-row>
    <!-- <button @click="add()">增加路由</button> -->
</div>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex'
import LangSelect from '@/components/LangSelect'
import Screenfull from '@/components/Screenfull'
import SizeSelect from '@/components/SizeSelect' 
import {ADD_ROUTE} from '@/router'

import {routes} from '@/router/createRoute'
import router from '@/router'
import nav from  './../../router/fast_menu.json'
import {getFastMenuReq,reqLoginName} from './../../api'
export default {
    name: "",
    components: {
        Screenfull,
        SizeSelect,
        LangSelect
    },
    // extends: null,
    // minxins: [],
    props: [],
    data() {
        return {
            activeIndex:0,
            nav,
            isLoad:false,
            userMes:{}
        };
    },
    computed: {
         ...mapGetters([
        'sidebar',
        'avatar'
        ]),
    },
    watch: {},
    async created() {
        //发送请求 获取json 
        //let result = await getFastMenuReq()
        let nameData = await reqLoginName()

        //处理数据
        //console.log('ssssssssssssssssssssssss',result)
        if(nameData.code==200){
            this.userMes = nameData.data;
        }
        //Navicat 赋值
        //
        if(this.nav[this.activeIndex].frameurl){
            this.$store.commit('app/SET_URL',this.nav[this.activeIndex].frameurl);
        }
    },
    mounted() {
        
    },
    beforeUpdate(){
      
    },
    methods: {
        toggleSideBar() {
        this.$store.dispatch('app/toggleSideBar')
        },
        handleCommand(command) {
            if(command==="logout"){
                 window.location.href='http://demo.gofusion.cn:8085/login.html';
            }
        },
        async reqNav(index,item){
            this.activeIndex=index;
            // 修改路由
            if(!this.isLoad){
                 await ADD_ROUTE()
                 this.isLoad=true;
            }
            //提示导航栏的路由即将改变 通过文字匹配
            this.$store.commit('app/SET_ROUTE',item.text);
            this.$store.dispatch('tagsView/delAllViews');
            if(item.frameurl){
                this.$store.commit('app/SET_URL',item.frameurl);
                this.$router.replace('/shouye')
                
            }
            this.$router.replace(routes.headerobj[item.text])
        }
    }
};
</script>

<style lang="scss" >
.Header{
    background: #121931;
    width: 100%;
    height: 55px;
    z-index: 200;
    overflow-x: auto;
    overflow-y: hidden;
    line-height: 55px;
    color: #d5dbf3;
    font-size: 16px;
    .heightToGrid{
        height: 55px;
        display: flex;
        justify-content: center;
        
        align-items: center;
        color: #d5dbf3;
        
    }
    .navItem{
        height: 55px;
        line-height: 55px;
        text-align: center;
        //padding: 0 10px;
        flex-grow:1;// Average allocation of surplus space
        &:hover{
            background-color:  #183158;
        }
    }
    .active{
        background: #183158;
    }
    
    .touxiang{
        font-size: 14px;
        float: right;
        height: 100%;
        margin-right: 20px;
        .imgTouxiang{
        display: inline-block;
        width: 25px;
        height: 25px;
        line-height: 55px;
        vertical-align: middle;
        margin-right: 10px;
        position: relative;
        }
        .imgItem{
            position: absolute;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background: url('./../../assets/sp.png') -7px -44px;
            z-index: 201;
        }
    }
}
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

</style>