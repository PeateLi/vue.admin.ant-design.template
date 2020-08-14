<template>
    <div>
        <Table :columns='columns' :data='data'></Table>
    </div>
</template>


<script>
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
export default {
    data(){
        return {
            columns:[
                {
                    title: 'name',
                    dataIndex: 'name',
                    width: '25%',
                    scopedSlots: { customRender: 'name' },
                },
                {
                    title: 'age',
                    dataIndex: 'age',
                    width: '15%',
                    scopedSlots: { customRender: 'age' },
                },
                {
                    title: 'address',
                    dataIndex: 'address',
                    width: '40%',
                    scopedSlots: { customRender: 'address' },
                },
                {
                    title: 'operation',
                    dataIndex: 'operation',
                    width: '10%',
                    scopedSlots: { customRender: 'operation' },
                },
            ],
            data
        }
    },
    components:{
        Table:() => import('@/components/Table/Table')
    }
}
</script>


<style lang="scss" scoped>

</style>