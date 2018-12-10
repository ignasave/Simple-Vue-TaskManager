Vue.component('titulo', {
	template: '<h2>{{ titulo }}</h2>',
	data: function(){
		return { titulo: 'Lista de Tareas' }
	}
})
Vue.component('nueva-tarea', {
	template:  `<div class="input-group">
					<input type="text" placeholder="Escribe una nueva tarea" v-model="nuevaTarea" class="form-control" v-on:keyup.enter="agregarTarea">
					<span class="input-group-btn"><button type="button" v-on:click="agregarTarea" class="btn btn-primary">Agregar</button></span>
				</div>`,
	methods:{
		agregarTarea: function(){
			var texto = this.nuevaTarea.trim();
			if (texto) {
				this.tareas.push({
					texto: texto,
					terminada: false
				})
			}
			this.nuevaTarea = '';
		}
	},
	data: function(){
		return data;
	}
})
var data = {
		tareas: [
		{
			texto: 'Aprender Vue.js',
			terminada: false
		},
		{
			texto: 'Aprender Angular 2',
			terminada: false
		},
		{
			texto: 'Aprender Ionic 2',
			terminada: false
		}
		],
		nuevaTarea: ''
	}
var app = new Vue({
	el : '#app',
	data: data,
	methods:{
		borrar: function(indice){
			this.tareas.splice(indice,1);
		}
	}
})