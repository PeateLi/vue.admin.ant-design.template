<template>
    <div class="sidebar" >
        <a-menu
        :default-selected-keys="selectedkeys"
        :default-open-keys="openkeys"
        mode="inline"
        theme="dark"
        >
        <template v-for="route in permission_routes">
            <a-menu-item :key="route.redirect" v-if="!route.hidden&&!route.alwaysShow">
            <app-link v-for="item in route.children" :to="`${route.redirect}`">
                <a-icon type="pie-chart" />
                <span>{{item.meta.title}}</span>
            </app-link>
            </a-menu-item>
            <SidebarItem v-if="route.alwaysShow"  :item="route" ></SidebarItem>
        </template>
        </a-menu>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return{
            selectedkeys:[this.$route.path],
            openkeys:[this.$route.path.substring(0,this.$route.path.lastIndexOf('/'))]
        }
    },
    components:{
        SidebarItem:() => import('./components/SidebarItem'),
        AppLink:() => import('./components/Link'),
    },
    props:{
    },
    computed:{
        ...mapGetters([
        'permission_routes',
        ]),
    },
    created(){
        console.log()
    }
}
</script>

<style lang="scss" scoped>
/deep/ .ant-menu-dark .ant-menu-item:hover{
    background-color: #9BCDFC;
}
</style>