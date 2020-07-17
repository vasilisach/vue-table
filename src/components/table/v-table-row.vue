<template>
    <div class="v-table-row" 
        :class="{'selected-row': selectedRow}" 
        @click="getRowData(row_data)">
            <div class="cell cell-firstname">{{row_data.firstName}}</div>
            <div class="cell cell-lastname">{{row_data.lastName}}</div>
            <div class="cell cell-email">{{row_data.email}}</div>
            <div class="cell cell-phone">{{row_data.phone}}</div>
    </div>
</template>

<script>
export default {
    name: "v-table-row",
    props: {
        row_data:{
            type: Object,
            default:() => {
                return {}
            }
        }
    },
    data(){
        return {
            selectedRow: false
        }
    },
    methods:{
        getRowData(rowData){
            this.$parent.$children.map(el=>{el.selectedRow = false})
            this.$store.commit('SELECT_USER', rowData)
            this.selectedRow = !this.selectedRow
        }
    }
}
</script>

<style>
    .v-table-row{
        display: flex;
        justify-content: space-around;
        cursor: pointer;
    }
    .cell{
        flex-basis: 25%;
        padding: 5px 10px;
        text-align: left;
    }
    .selected-row{
        background: red;
    }
</style>