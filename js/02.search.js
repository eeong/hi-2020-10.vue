var products = [
	{id:1, name:"F01", src:'../img/lx-0-0.jpg', price:'$12.22'},
	{id:2, name:"F02", src:'../img/lx-1-0.jpg', price:'$122.00'},
	{id:3, name:"F03", src:'../img/lx-2-0.jpg', price:'$112.00'},
	{id:4, name:"F04", src:'../img/lx-3-0.jpg', price:'$512.00'},
	{id:5, name:"F05", src:'../img/lx-4-0.jpg', price:'$612.00'},
	{id:6, name:"F06", src:'../img/lx-5-0.jpg', price:'$212.00'},
	{id:7, name:"F07", src:'../img/lx-6-0.jpg', price:'$122.00'},
	{id:8, name:"F08", src:'../img/lx-7-0.jpg', price:'$112.00'},
	{id:9, name:"F09", src:'../img/lx-8-0.jpg', price:'$18.00'},
	{id:10, name:"F10", src:'../img/lx-10-0.jpg', price:'$12.00'},
	{id:11, name:"F11", src:'../img/lx-11-0.jpg', price:'$12.00'},
]

new Vue({
	el: '#app',
	data: {
		title: '자자',
		subTitle: '메뉴를 고르세요',
		search:'',
		prds:[],
	},
	methods: {
		onReset(e) {
			this.search='';
			this.prds=[];
		},
		onSubmit(e) {
			this.prds = products;
		},
		onKeyUp(e) {
			if(this.search.length == 0) {
				this.onReset();
			}
		}
	}
})