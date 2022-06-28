<template>
    <Form @onSubmit="handLeSubmit"></Form>
    <List @onRemove="handLeRemove" :items="notes"></List>
</template>

<script>
import Form from '@/components/Nodes/Form.vue';
import List from '@/components/Nodes/List.vue';
export default {
    components:{
        Form,
        List
    },

    data(){
        return{
             notes:[
                {
                    title:'Lorem Vue 3',
                    tags: ['work']
                },

                {
                    title:'Finish course',
                    tags: ['work','home']
                },
             ],
        }
    },

     watch:{
        notes:{
            handler: function (updateList){
               localStorage.setItem('notes',JSON.stringify(updateList));
            },
            deep:true,
        }
    },

    mounted(){
        this.getNotes();
    },

    methods:{
        
        getNotes(){
            const localNotes = localStorage.getItem('notes');
            if(localNotes){
                this.notes= JSON.parse(localNotes);
            }
        },

        handLeSubmit(title){
            const note = {
                title:title,
                tags:[]
            }
            this.notes.push(note);
         },

        handLeRemove(index){
            this.notes.splice(index,1);
        }
    }
}
</script>