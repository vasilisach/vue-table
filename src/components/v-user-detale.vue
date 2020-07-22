<template>
    <div class="v-user-detale" v-if="Object.keys(selected_user_data).length !== 0">
        <div>Выбран пользователь: <b class="value">{{getFullName}}</b></div>
        <div>Описание:
            <textarea class="value" v-model="selected_user_data.description"></textarea>
        </div>
        <div>Адрес проживания: <b class="value">{{selected_user_data.adress.streetAddress}}</b></div>
        <div>Город: <b class="value">{{selected_user_data.adress.city}}</b></div>
        <div>Провинция/штат: <b class="value">{{selected_user_data.adress.state}}</b></div>
        <div>Индекс: <b class="value">{{selected_user_data.adress.zip}}</b></div>
    </div>
</template>

<script>
export default {
    name: "v-user-detale",
    props: {
        selected_user_data:{
            type: Object,
            default:() => {
                return {}
            }
        }
    },
    data(){
        return {}
    },
    computed:{
        getFullName(firstName, lastName){
            return `${this.selected_user_data.firstName} ${this.selected_user_data.lastName}`
        }
    },
}
</script>

<style scoped>
    .v-user-detale{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        margin-top: 30px;
    }
    .v-user-detale div{
        display: flex;
        align-items: center;
    }
    .value{
        margin-left: 20px;
    }
</style>