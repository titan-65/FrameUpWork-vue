const app = Vue.createApp({
	data() {
		return {
			foodList: Foodies.food,
		};
	},
	computed: {
		sortedFood() {
			return this.foodList.sort((a, b) => {
				return b.votes - a.votes;
			});
		},
	},
	methods: {
		vote(foodId) {
			const food = this.foodList.find(food => food.id === foodId);
			food.votes++;
		},
	},
});

app.mount('#app');
