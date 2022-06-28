<template>
    <h1>Все пользователи:</h1>
    <ul>
        <li v-for="user in getUsers" :key="user.id">
          <p>{{user.id}}</p>
          <p>{{user.name}}</p>
          <p>{{user.admin ? 'Это админ' : 'Обычные юзер'}}</p>
        </li>
    </ul>
    <h2>{{gettersLangth}}</h2>
</template>

<script>
export default {
    data(){
        return{
           
        }
    },
     
    computed:{
        getUsers () {
          return this.$store.getters.getAllUsers
        },
         gettersLangth(){
            return this.$store.getters.gettersLangth
        }
    }
}
</script>