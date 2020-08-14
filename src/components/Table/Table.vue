<template>
    <div>
        <a-table :columns="col.concat(columns)" :data-source="data" :row-selection="rowSelection" bordered>
            <!-- 固定操作列 -->
            <template  slot="handle" slot-scope="text,record" >
                <div style="cursor: pointer;"  @contextmenu.prevent="openMenu($event)">
                    <a-icon type="menu" />
                </div>
            </template>
            <!-- 设置头部可以进行查询 -->
            <template slot="title" slot-scope="currentPageData">
                <div class="occupied"></div>
                <div v-for="(item,index) in col.concat(columns)" :style="{'width':item.width}" class="header-select">
                </div>
                
            </template>
        </a-table>
        <ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
            <li>生成账单</li>
            <li>审核</li>
            <li>删除</li>
        </ul>
    </div>
</template>



<script>
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};
export default {
    data(){
        return {
            rowSelection,
            col:[{
                title: '操作',
                dataIndex: 'handle',
                width: '5%',
                align:'center',
                scopedSlots: { customRender: 'handle' },
            }],
            top:0,
            left:0,
            visible: false,
        }
    },
    props:{
        columns:{
            type:Array,
            default:() => {
                return []
            }
        },
        data:{
            type:Array,
            default:() => {
                return []
            }
        }
    },
    created(){
        this.columns.unshift()
    },
    watch: {
        visible(value) {
        if (value) {
            document.body.addEventListener('click', this.closeMenu)
        } else {
            document.body.removeEventListener('click', this.closeMenu)
        }
        }
    },
    methods:{
        openMenu(e){
            this.top = e.clientY
            this.left = e.clientX
            this.visible = true
        },
        closeMenu() {
            this.visible = false
        }
    }
}
</script>


<style lang="scss" scoped>
.contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
    padding-left: 0px;
    li {
    margin: 0;
    padding: 7px 16px;
    cursor: pointer;
    &:hover {
        background: #E6F7FF;
    }
    }

}
/deep/ .ant-table-body table{
    border-left: 0px !important;
}
/deep/ .ant-table-title{
    border-left: 0px !important;
    padding: 0px !important;
    height: 40px;
}
.header-select{
    float: left;
    border-right: 1px solid #ccc;
    height: 100%;
}
.header-select:last-child{
    border-right: 0px;
}
.occupied{
clear:both;
float: left;
width: 68px;
height: 100%;
border-right: 1px solid #ccc;
}
</style>