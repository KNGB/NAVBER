<template>
<div class="Header">
    <el-row :gutter="24" type="flex" justify="space-around">
        <el-col :span="4" class="hidden-sm-and-down">
            <div class="grid-content heightToGrid">
                <div style="width:228px;height:41px">
                    <h1><img src="http://demo.gofusion.cn/nav/sys/systemmanager/images/backsysLogo.png" alt=""></h1>
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
            <div class="grid-content ">
                <div class="right-menu">
                    <template>
                        <screenfull id="screenfull" class="right-menu-item hover-effect" />

                        <el-tooltip content="Global Size" effect="dark" placement="bottom">
                        <size-select id="size-select" class="right-menu-item hover-effect" />
                        </el-tooltip>

                        <lang-select class="right-menu-item hover-effect" />
                    </template>
                    
                    <el-dropdown>
                    <span class="el-dropdown-link">
                        <div class="right-menu-item"><el-avatar shape="square"  :src="squareUrl"></el-avatar></div>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item @click.native="logout">Log In</el-dropdown-item>
                        <el-dropdown-item divided  @click.native="logout">Log Out</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                    </div>
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
            activeIndex:4,
            squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
            index:8,
            nav,
            isLoad:false,
        };
    },
    computed: {
         ...mapGetters([
        'sidebar',
        'avatar'
        ]),
    },
    watch: {},
    created() {
        
    },
    mounted() {
        this.reqNav(0,nav[0])
    },
    methods: {
        toggleSideBar() {
            this.$store.dispatch('app/toggleSideBar')
            },
        async logout() {
            await this.$store.dispatch('user/logout')
            this.$router.push(`/login?redirect=${this.$route.fullPath}`)
        },
        async reqNav(index,item){
            this.activeIndex=index;
            // 修改路由
            if(!this.isLoad){
                 await ADD_ROUTE()
                 this.isLoad=true;
            }
            //提示导航栏的路由即将改变
            this.$store.commit('app/SET_ROUTE',item.text);
            this.$store.dispatch('tagsView/delAllViews');
            if(item.frameurl){
                this.$router.push({path:'/shouye',query:{url:item.frameurl}})
            }
            this.$router.push(routes.headerobj[item.text])
        }
    }
};
</script>

<style lang="scss" scoped>
.Header{
    background: #304156f3;
    width: 100%;
    height: 70px;
    z-index: 200;
    overflow-x: auto;
    .heightToGrid{
        height: 70px;
        display: flex;
        justify-content: center;
        
        align-items: center;
        color: #BFCBD9;
        h1{
            overflow: hidden;
            white-space:nowrap;
            margin: 0;
        }
    }
    .navItem{
        height: 70px;
        line-height: 70px;
        text-align: center;
        //padding: 0 10px;
        flex-grow:1;// Average allocation of surplus space
        &:hover{
            background-color:  #29384b;
        }
    }
    .active{
        background: #304156f3;
    }
    .right-menu {
        height: 70px;
        line-height: 70px;
        overflow: hidden;
        float: right;
        &:focus {
        outline: none;
        }
        .right-menu-item {
        display: inline-block;
        padding: 0 8px;
        height: 70px;
        font-size: 18px;
        color: #BFCBD9;
        vertical-align: middle;
        line-height: 70px;
        span{
            vertical-align: middle;
            line-height: 70px!important;
        }
        &.hover-effect {
            cursor: pointer;
            transition: background .3s;

            &:hover {
            background: rgba(0, 0, 0, .025)
            }
        }
        }
        
    }
}
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

</style>