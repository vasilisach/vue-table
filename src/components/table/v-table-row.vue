<template>
    <div class="v-table-row" 
        :class="{'selected': selected_row}" 
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
        },
        selected_row: {
            type: Boolean,
            default: () => {
                return false
            }
        }
    },
    data(){
        return {
        }
    },
    methods:{
        getRowData(rowData){
            this.$emit('tableRowClicked', rowData.id)
            this.$store.commit('SELECT_USER', rowData)
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
    .selected{
        background: red;
    }
</style>