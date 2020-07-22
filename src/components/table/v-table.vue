<template>
    <div class="v-table">
        <input type="text" v-model="searchQuery" placeholder="Search" />
        <div class="table-header">
            <p 
            v-for="headerName in columnHeaders"
            :key="headerName"
            @click="sort(headerName)">
                {{headerName}}
                <i class="material-icons">
                    {{sortColumn===headerName && currentSort? currentSort : 'arrow_drop_up'}}
                </i>
            </p>
        </div>
        <div class="table-body">
            <v-table-row
                v-for="row in paginatedUsers"
                :key="row.id"
                :row_data="row"
                :selected_row = "selectedRow === row.id"
                @tableRowClicked = "clickOnTableRow"
            />
        </div>
        <div class="table-pagination">
            <div class="page" 
            v-for="page in pages" 
            :key="page+'Numer'" 
            :class="{'page-selected': page === pageNumber}"
            @click="pageClick(page)">{{page}}</div>
        </div>
    </div>
</template>

<script>
import vTableRow from "./v-table-row"

export default {
    name: "v-table",
    components:{
        vTableRow
    },
    props: {
        users_data: {
            type: Array,
            default: ()=>{
                return []
            }
        }
    },
    data(){
        return {
            usersPerPage: 10,
            pageNumber: 1,
            currentSort:'',
            sortColumn:'',
            searchQuery:'',
            selectedRow: '',
            columnHeaders: ['firstName', 'lastName', 'email', 'phone']
        }
    },
    computed:{
        pages(){
            let users = this.users_data

            if(this.searchQuery){
                users = this.users_data.filter(
                    item => this.searchQuery.toLowerCase().split(' ').every(v => item.firstName.toLowerCase().includes(v))
                )
                if(this.pageNumber > Math.ceil(users.length / this.usersPerPage)){
                    this.pageNumber = Math.ceil(users.length / this.usersPerPage)
                }
            }

            return Math.ceil(users.length / this.usersPerPage)
        },
        paginatedUsers(){
            let users = this.users_data
1
            if(this.searchQuery){
                users = this.users_data.filter(
                    item => this.searchQuery.toLowerCase().split(' ').every(v => item.firstName.toLowerCase().includes(v))
                )
            }

            let from = (this.pageNumber -1) * this.usersPerPage
            let to = from + this.usersPerPage

            return users.slice(from, to)
        }
    },
    methods:{
        pageClick(page){
            this.pageNumber = page
        },
        sort(columnName){
            this.sortColumn = columnName

            if(!this.currentSort || this.currentSort === 'arrow_drop_down'){
                this.users_data.sort((a,b)=>a[columnName].localeCompare(b[columnName]))
                this.currentSort = 'arrow_drop_up'
            }else{
                if(this.currentSort === 'arrow_drop_up'){
                    this.users_data.sort((a,b)=>b[columnName].localeCompare(a[columnName]))
                    this.currentSort = 'arrow_drop_down'
                }
            }
        },
        clickOnTableRow(rowId){
            this.selectedRow = rowId
        }
    }
}
</script>

<style>
    .v-table{
        max-width: 90%;
        margin: 0 auto;
    }
    .table-header{
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #e7e7e7;
    }
    .table-header p{
        display: flex;
        align-items: center;
        padding: 5px 10px;
        flex-basis: 25%;
        text-align: center;
        cursor: pointer;
    }
    .table-pagination{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 30px;
    }
    .page{
        padding: 5px;
        min-width: 15px;
        border: 1px solid #e7e7e7;
        margin: 5px;
    }
    .page:hover{
        background-color: gray;
        color: white;
        cursor: pointer;
    }
    .page-selected{
        background-color: gray;
        color: white;
    }
</style>