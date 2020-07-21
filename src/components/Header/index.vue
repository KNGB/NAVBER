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
                        
                       
                        <el-dropdown @command="SwitchingSystem" trigger="click">
                        <span class="el-dropdown-link">
                            切换系统<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown" >
                            <el-dropdown-item command="/nav/portal/homePage.html">系统首页</el-dropdown-item>
                            <el-dropdown-item :command="sys.url"  v-for="(sys,i) in system" :key="i">{{sys.text}}</el-dropdown-item>
                        </el-dropdown-menu>
                        </el-dropdown>
                        <el-divider direction="vertical"></el-divider>
                        <div class="imgTouxiang">
                            <div class="imgItem"> </div>
                        </div>
                        <el-dropdown @command="handleCommand">
                        <span class="el-dropdown-link">
                            {{userMes.userName?userMes.userName:'请先登录'}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">

                            <el-dropdown-item command="changePassword">修改密码</el-dropdown-item>
                            <el-dropdown-item command="issueCollectionClick">反馈问题</el-dropdown-item>
                            <el-dropdown-item command="issueAnswerClick">问题答复</el-dropdown-item>
                            <el-dropdown-item command="logout">退出系统</el-dropdown-item>
                        </el-dropdown-menu>
                        </el-dropdown>
                </div>
        </el-col>
    </el-row>

    <!-- iframe 弹出框 -->
        

        <el-dialog :title="iframe.title" :visible.sync="iframe.dialogTableVisible" :width="parseInt(iframe.w)+50+'px'">
        <div :style="{
            width:iframe.w,
            height:iframe.h,
        }">
            <iframe :src="iframe.url" frameborder="0" :width="iframe.w" :height="iframe.h"></iframe>
        </div>
        </el-dialog>
      <!-- 修改密码弹出窗 -->
    <!-- <el-dialog class="changePasswordWin" title="修改密码" :visible.sync="passwordVisible" width="500px">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
        <el-form-item label="请输入原始密码" prop="oldPass">
          <el-input type="password" v-model="ruleForm.oldPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="请输入新密码" prop="newPass">
          <el-input type="password" v-model="ruleForm.newPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="请确认新密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="passwordVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
      </span>
    </el-dialog> -->

    <!-- 反馈问题弹出窗 -->
   <!--  <el-dialog
      title="反馈问题"
      class="issueCollection"
      :visible.sync="issueCollection"
      width="900px"
      :before-close="handleClose"
    >
      <el-form ref="form" label-position="left" label-width="90px" :inline="true">
        <el-input type="hidden"></el-input>
        <el-form-item label="单位名称:">
          <el-input type="textfield"></el-input>
        </el-form-item>
        <el-form-item label="姓名:">
          <el-input type="textfield"></el-input>
        </el-form-item>
        <el-form-item label="联系电话:">
          <el-input type="textfield"></el-input>
        </el-form-item>
        <el-form-item label="联系邮箱:">
          <el-input type="textfield"></el-input>
        </el-form-item>
        <el-form-item label="日期:">
          <el-date-picker type="date" placeholder="选择日期" :picker-options="pickerOptions"></el-date-picker>
        </el-form-item>
        <el-form-item label="问题反馈:" style="width:700px;height:300px">
          <el-input
            type="textarea"
            style="width:600px;height:300px"
            placeholder="此处进行问题反馈（不超过500个汉字）..."
          ></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="issueCollection = false">提交</el-button>
    </el-dialog> -->

    <!-- 问题答复弹出窗 -->
    <!-- <el-dialog
      title="答复列表"
      class="issueAnswer"
      :visible.sync="issueAnswerList"
      width="900px"
      :before-close="handleClose"
    >
      <div class="el-tooltip" style="width:846px; text-align: right;color: #666;">
        单位名称
        <el-input type="textfield" style="width: 150px; margin-left: 10px;margin-right:20px;"></el-input>姓名
        <el-input type="textfield" style="width: 150px;  margin-left: 10px;margin-right:10px;"></el-input>
        <el-button type="primary" @click="doFilter">查询</el-button>
      </div>
      <el-table
        stripe
        ref="multipleTable"
        :data="issueAnswerListData.rows"
        tooltip-effect="dark"
        style="width: 100%"
        height="450px"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column type="issueAnswerId" width="-1px"></el-table-column>
        <el-table-column prop="unitName" label="单位名称"></el-table-column>
        <el-table-column prop="fullName" label="姓名"></el-table-column>
        <el-table-column prop="telPhone" label="联系电话" show-overflow-tooltip></el-table-column>
        <el-table-column prop="email" label="联系邮箱" show-overflow-tooltip></el-table-column>
        <el-table-column prop="times" label="日期" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope" v-if="scope.row.problemAnswer.length>0">
            <el-button type="text" size="small">查看附件</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="issueAnswerListData.page"
        :page-sizes="[5, 10, 20, 50]"
        :page-size="issueAnswerListData.pagerows"
        layout="total, sizes, prev, pager, next, jumper"
        :total="issueAnswerListData.totalrows"
      ></el-pagination>
    </el-dialog> -->
</div>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex'
import Screenfull from '@/components/Screenfull'
import SizeSelect from '@/components/SizeSelect' 
import {ADD_ROUTE} from '@/router'

import router from '@/router'
import {getFastMenuReq,reqLoginName} from './../../api'
export default {
    name: "",
    components: {
        Screenfull,
        SizeSelect,
    },
    // extends: null,
    // minxins: [],
    props: [],
    data() {
        /* var validateOldPass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入旧密码"));
            } else {
                callback();
            }
            };
            var validateNewPass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入新密码"));
            } else {
                callback();
            }
            };
            var validateCheckPass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请再次输入密码"));
            } else if (value !== this.ruleForm.newPass) {
                callback(new Error("两次输入密码不一致!"));
            } else {
                callback();
            }
            }; */
        return {
            activeIndex:0,
            nav:[],//导航
            isLoad:false, //控制请求次数
            userMes:{},//user 信息
            headerobj:[],//头部与导航的对应关系
            system:[],//系统
            iframe:{
                dialogTableVisible:false,
                url:'',
                w:"",
                h:"",
                title:""
            },
            /* issueCollection:false,
            issueAnswerList:false,
            passwordVisible:false,
            ruleForm : {
                oldPass: "",
                newPass: "",
                checkPass: ""
            },
            rules: {
                oldPass: [
                {
                    validator: validateOldPass,
                    trigger: "blur"
                }
                ],
                newPass: [
                {
                    validator: validateNewPass,
                    trigger: "blur"
                }
                ],
                checkPass: [
                {
                    validator: validateCheckPass,
                    trigger: "blur"
                }
                ]
            },
            pickerOptions: {},
            issueAnswerListData: {
                page: 1,
                pagerows: 10,
                rows: [
                {
                    issueAnswerId: "fb2e047d183f4403bf9e2c18e8ab7d4f",
                    unitName: "数据应用",
                    fullName: "sun can",
                    telPhone: "02787656551",
                    email: "",
                    times: "2020-2-20",
                    problemAnswer: "2020-02-20_09-59-30-696.doc"
                }
                ],
                totalrows: 1
            } */
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
        let nameData = await reqLoginName()
        //处理数据
        if(nameData.code==200){
            this.userMes = nameData.data;
            //发送请求 获取json 
            let result = await getFastMenuReq({
                userId:nameData.data.userId,
                gnId:'d74d41d3bb6a455d974d473ce6fa1bd5',
                level:1
            })
            console.log('请求根节点数据___一级 ',result)
            if(result.code==200){
                this.nav = result.data[0].data;
                this.reqNav(this.activeIndex,this.nav[this.activeIndex])
            }
        }
        let system = await getFastMenuReq({
                userId:nameData.data.userId,
                gnId:'0',
                level:1
        })  
        console.log(system,'xitong系统') 
        if(system.code==200){
            this.system =  system.data[0].data;
        }
    },
    mounted() {
        
    },
    beforeUpdate(){
      
    },
    methods: {
        //切换系统
        SwitchingSystem(command){
            if(command){
                window.location.href=command;
            }else{
                this.$message({
                    type:'warning',
                    message:"目前为空地址，请先配置地址！"
                })
            }
            
        },
        //头像下拉
        handleCommand(command) {
            if(command==="logout"){
                 window.location.href='/login';
            }else if (command === "changePassword") {
                /* this.ruleForm = {
                oldPass: "",
                newPass: "",
                checkPass: ""
                };
                this.passwordVisible = true; */
                this.iframe.dialogTableVisible = true;
                this.iframe.w = "408px";
                this.iframe.h = "246px";
                this.iframe.title = "修改密码";
                this.iframe.url = "/common/utils/page/common/staticfiles/passwordEdit.html?userId="+this.userMes.userId
            } else if (command === "issueCollectionClick") {
               /*  this.issueCollection = true; */
                 this.iframe.dialogTableVisible = true;
                this.iframe.w = "898px";
                this.iframe.h = "548px";
                this.iframe.title = "反馈问题";
                 this.iframe.url = "/common/utils/page/common/staticfiles/issueCollection.html?userId="+this.userMes.userId
            } else if (command === "issueAnswerClick") {
                 this.iframe.dialogTableVisible = true;
                this.iframe.w = "1070px";
                this.iframe.h = "548px";
                this.iframe.title = "问题答复";
                 this.iframe.url = "/common/utils/page/common/staticfiles/issueAnswerList.html?type=showlist"
                /* this.issueAnswerList = true; */
            } else {
                this.$message("click on item " + command);
            }
            
        },
        //页面切换
        async reqNav(index,item){
            this.activeIndex=index;
            // 修改路由
            if(!this.isLoad){
                this.headerobj =  await ADD_ROUTE()
                 this.isLoad=true;
            }
            //提示导航栏的路由即将改变 通过文字匹配
            this.$store.commit('app/SET_ROUTE',item.id);
            this.$store.dispatch('tagsView/delAllViews');
            if(item.url){
                this.$store.commit('app/SET_URL',item.url);
                this.$router.replace('/shouye')
                
            }else{   
                console.log('routes.headerobj[item.id]',this.headerobj[item.id])
                this.headerobj[item.id] && this.$router.replace(this.headerobj[item.id])
            }
        },

        /* 1111 */
       /*  handleSelect(key) {
            if (this.fastMenuData[key].url.length == 0) {
                for (var a = 0; a < this.sideMenuData.length; a++) {
                if (this.sideMenuData[a].text == this.fastMenuData[key].text) {
                    this.changeHeadNav(this.fastMenuData[key], this.sideMenuData[a]);
                }
                }
            } else {
                this.changeHeadNav(this.fastMenuData[key]);
            }
            },
            submitForm(formName) {
            const $this = this;
            console.log(this.ruleForm);
            this.$refs[formName].validate(valid => {
                if (valid) {
                alert("submit!");
                } else {
                console.log("error submit!!");
                return false;
                }
            });
            this.passwordVisible = false;
            },
            FlatToNested(data, option) {
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
            },
            handleClose(done) {
            this.$confirm("确认关闭？")
                .then(_ => {
                done();
                })
                .catch(_ => {});
            },
            handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            },
            doFilter() {
            return "";
            } */
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
.el-dropdown {
     color: #d5dbf3;
}
</style>