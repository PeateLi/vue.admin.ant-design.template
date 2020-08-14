<template>
    <div class="nav">
        <div>
            <Hamburger @toggleClick='toggleClick'  class="hamburger-container" ></Hamburger>
        </div>
        <div class="user-dropdown">
            <a-dropdown :trigger="['click']"
            :getPopupContainer="
            triggerNode => {
                return triggerNode.parentNode || document.body;
            }
            ">
            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                <img src="@/assets/f778738c-e4f8-4870-b634-56703b4acafe.gif" alt="用户头像" > <span class="user">admin</span>
            </a>
            <a-menu slot="overlay">
                <a-menu-item>
                    <a href="javascript:;">1st menu item</a>
                </a-menu-item>
                <a-menu-item>
                    <a href="javascript:;">2nd menu item</a>
                </a-menu-item>
                <a-menu-item>
                    <a href="javascript:;">3rd menu item</a>
                </a-menu-item>
                </a-menu>
            </a-dropdown>
        </div>
        
    </div>
</template>


<script>
import eventVue from '@/utils/event'
export default {
    components:{
        Hamburger:() => import('../Navbar/components/Hamburger')
    },
    methods:{
        toggleClick() {
           this.$emit('toggleClick')
        }
    }
}
</script>


<style lang="scss" scoped>
.nav{
    height: 64px;
}
.hamburger-container {
    line-height: 64px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }
  .user-dropdown{
      float: right;
      line-height: 64px;
      height: 64px;
      cursor: pointer;
      margin-right: 30px;
      img{
          width: 40px;
          height: 40px;
          border-radius: 50%;
      }
      .user{
          color: #333;
      }
  }
/deep/ .ant-dropdown-menu{
    top: 15px;
}

</style>