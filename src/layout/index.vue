<template>
    <div class="app-wrapper">
        <!-- <el-container>
            <el-aside :width='isCollapse?"65px":"220px"'>
                    <Sidebar :isCollapse='isCollapse' @toggleSideBar='toggleSideBar'></Sidebar>
            </el-aside>
            <el-container>
                <el-header>
                    <div class="navbar">
                        <Navbar></Navbar>
                    </div>
                    <div class="tags-view-container">
                            <Tagsview></Tagsview>
                    </div>
                </el-header>
                <el-main>
                    <transition name="fade-transform" mode="out-in">
                        <router-view/>
                    </transition>
                </el-main>
            </el-container>
        </el-container> -->
        <a-layout id="components-layout">
            <a-layout-sider v-model="isCollapse" :trigger="null" collapsible>
            <div class="logo">
                <span v-if="!isCollapse">easybom 管理后台</span>
                <span v-else>easy</span>
            </div>
            <Sidebar></Sidebar>
            <!-- <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
                <a-menu-item key="1">
                <a-icon type="user" />
                <span>nav 1</span>
                </a-menu-item>
                <a-menu-item key="2">
                <a-icon type="video-camera" />
                <span>nav 2</span>
                </a-menu-item>
                <a-menu-item key="3">
                <a-icon type="upload" />
                <span>nav 3</span>
                </a-menu-item>
            </a-menu> -->
            </a-layout-sider>
            <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <Navbar @toggleClick='toggleClick'></Navbar>
                <Tagsview></Tagsview>
            </a-layout-header>
            <a-layout-content
                :style="{ margin: '24px 16px', padding: '24px', background: '#fff' }"
            >
                <transition name="fade-transform" mode="out-in">
                    <router-view/>
                </transition>
            </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>


<script>

export default {
    data(){
        return {
            isCollapse:false
        }
    },
    components:{
        Sidebar:() => import('./components/Sidebar/index'),
        Navbar:() => import('./components/Navbar/index'),
        Tagsview:() => import('./components/Tagsview/index'),
    },
    methods:{
        toggleClick(){
            let _this = this
            _this.isCollapse = !_this.isCollapse
        }
    }
    
}
</script>

<style lang="scss" scoped>
@import '../styles/mixin.scss';
.app-wrapper{
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
   .ant-layout-header{
       height: 98px;
       line-height: 0px;
   }
   .logo{
       height: 64px;
       color: #fff;
       background: #00284D;
       line-height: 64px;
       font-size: 20px;
       font-weight: bold;
       text-align:center;
   }
}
/deep/ .ant-menu-item{
    margin: 0px !important;
}
#components-layout{
    height: 100%;
}
</style>