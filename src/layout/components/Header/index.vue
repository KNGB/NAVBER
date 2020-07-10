<template>
<div class="Header">
    <el-row :gutter="24" type="flex" justify="space-around">
        <el-col :span="4" class="hidden-sm-and-down">
            <div class="grid-content heightToGrid">
                <div style="width:228px;height:41px">
                    <h1>LOGO LOGO</h1>
                </div>
            </div>
        </el-col>
        <el-col :span="16">
            <div class="grid-content heightToGrid ">
                <div v-for="(item,index) in nav" :key="index" class="navItem">{{item.title}}</div>
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
                        <el-dropdown-item>
                            <router-link to="/">
                            Home
                        </router-link></el-dropdown-item>
                        <el-dropdown-item>Log In</el-dropdown-item>
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
import { mapGetters } from 'vuex'
import LangSelect from '@/components/LangSelect'
import Screenfull from '@/components/Screenfull'
import SizeSelect from '@/components/SizeSelect' 
import {ADD_ROUTE,resetRouter} from '@/router'
import router from '@/router'
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
            squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
            index:8,
            nav:[
                {
                    title:'导航一'
                },
                {
                    title:'导航二'
                },
                {
                    title:'导航三'
                },
                {
                    title:'导航四'
                },
                {
                    title:'导航五'
                },
                {
                    title:'导航六'
                },
                {
                    title:'导航七'
                },
                {
                    title:'导航七'
                },
                {
                    title:'导航七'
                },
                {
                    title:'导航七'
                },
                {
                    title:'导航七'
                },
                {
                    title:'导航七'
                },
                {
                    title:'导航七'
                },
            ]
        };
    },
    computed: {
         ...mapGetters([
        'sidebar',
        'avatar'
        ])
    },
    watch: {},
    created() {},
    mounted() {},
    methods: {
        add(){
            ADD_ROUTE()
            this.$emit('changRoute')
        },
        toggleSideBar() {
            this.$store.dispatch('app/toggleSideBar')
            },
        async logout() {
            await this.$store.dispatch('user/logout')
            this.$router.push(`/login?redirect=${this.$route.fullPath}`)
            }
    }
};
</script>

<style lang="scss" scoped>
.Header{
    position: absolute;
    top: 0;
    right: 0;
    background: #304156f3;
    width: 100%;
    height: 70px;
    z-index: 100;
    overflow-x: auto;
    .heightToGrid{
        height: 70px;
        display: flex;
        justify-content: space-around;
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
        flex-grow:1;// Average allocation of surplus space
        &:hover{
            background-color:  #29384b;
        }
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