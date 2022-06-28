<template>
  <div class="note-from__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
        <textarea v-model="value" required placeholder="Type ur note"></textarea>
				<TagsList @onItemClick="handLeTagClick" :items="tags"></TagsList>
        <button class="btn btnPrimary" type="submit">Add new note</button>
    </form>
	</div>
</template>

<style scoped> 
.note-form{
	display: flex;
	flex-direction: column;
	max-width: 600px;
	width: 100%;
}

textarea{
	margin-bottom: 0;
}

.note-from__wrapper{
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>

<script>
import TagsList from '@/components/UI/TagsList.vue'
export default {
	data(){
		return{
			value:'',
			tags:['home', 'woek', 'travel']
		}
	},

	components:{
		TagsList
	},

	methods:{
		onSubmit(){
			this.$emit('onSubmit', this.value)
			this.value = ''
		},

		handLeTagClick(tag){
       this.$emit('handLeTagClick', this.tags)
			 console.log(tag)
		}
	}
}
</script>