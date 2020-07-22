<template>
  <div id="app">
    <v-table
      :users_data="USERS"
      :selected_user_data="SELECTED_USER"
    />
    <v-user-detale
      :selected_user_data="SELECTED_USER"
    />
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
import vTable from './components/table/v-table'
import vUserDetale from './components/v-user-detale'

export default {
  name: 'App',
  components: {
    vTable,
    vUserDetale
  },
  data: ()=>{
    return {

    }
  },
  computed:{
    ...mapGetters(['USERS', 'SELECTED_USER'])
  },
  methods:{
    ...mapActions(['GET_USERS'])
  },
  mounted() {
    this.GET_USERS()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
