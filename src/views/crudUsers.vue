<template>
    <main>
        <div class="container">
            <p>&nbsp;</p>
                <div class="row">
                    <h2 style="text-align:center">CRUD USUARIOS</h2>
                </div>
                <div class="busqueda">
                <form action="" method="POST">
                    <input type="text" id="dato" name="dato" placeholder="Número documento"/>
                    <input type="submit" id="enviar" name="enviar" value="Buscar" class="btn btn-primary"/>
                </form>
                </div>
                <div class="row">
            <div class="col-md-12">
        <div class="table-responsive">
            <table class="table table-striped">
            <thead>
                <tr></tr>
                <th>DOCUMENTO</th>
                <th>NOMBRE</th>
                <th>FECHA</th>
                <th></th>
                <th></th>
            </thead>
            <tbody>
                <tr v-for="item in lista" :key="item">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.date}}</td>

                    <td><a v-on:click="editar(item.id)" class="btn btn-info"><i class="bi bi-pencil-square"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                     <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg></a></td>
                    <td><a @click="eliminar(item.id)" class="btn btn-danger"><i class="bi bi-trash-fill"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg></a></td>
                </tr>
            </tbody>
            </table>
        </div>

            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-6">
                <a href="/#/agregarUser" class="btn btn-primary">AGREGAR USUARIO</a>
            </div>
        </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios'
export default {
   data() {
      return {
        lista: null,
      }
    },
    mounted(){
        this.consultar();
    },
    methods:{
        consultar() {
        axios.get('http://127.0.0.1:3333/app/users')
                    .then(response=>{
                        this.lista = response.data.users
                })
                .catch(e => console.log(e))

        },
        editar(id) {
            this.$router.push('/editarUser/users/' + id)
        },
        eliminar(id){
            if (id) {
                axios.delete('http://127.0.0.1:3333/app/delete/' + id)
                .then(res => {
                    console.log(res)
                    if (res.status === 200) {
                        alert('Usuario eliminado 👌')
                        this.consultar();
                    }
                })
            }
        }
   }
}
</script>