<template>
     <p>&nbsp;</p>
        <div class="containes">
            <div class="row">
                <h3 style="text-align:center">EDITAR USUARIO</h3>
            </div>

            <form class="form-horizontal" method="POST" action="" enctype="multipart/form-data" v-on:submit.prevent="editar">
                <div class="form-group">
                    <br>
                    <label for="documento" class="col-sm-2 control-label">Documento</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="documento" name="documento" v-model="dUser.id">
                        </div>
                </div>
                <div class="form-group">
                    <br>

                    <label for="nombre" class="col-sm-2 control-label">Nombre</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="nombre" name="nombre" v-model="dUser.name"/>
                        </div>
                </div>
                <div class="form-group">
                    <br>

                    <label for="fecha" class="col-sm-2 control-label">Fecha</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="fecha" name="fecha" v-model="dUser.date">
                        </div>
                </div>
                <div class="form-group">
                    <br>

                    <div class="form-group">
                        <br>
                        <div class="col-sm-offset-2 col-sm-10">
                            <a href="/#/crudUsers" class="btn btn-primary">Regresar</a>
                            <button type="submit" class="btn btn-success" v-on:click="editar()">Guardar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
</template>

<script>
import axios from 'axios'
export default {
   data() {
      return {
        dUser: {
            "id": "",
            "name":"",
            "date":""
        }
      }
    },
    mounted(){
        this.dUser.id = this.$route.params.id;
        axios.get('http://127.0.0.1:3333/app/users/' + this.dUser.id)
                .then(response=>{
                    this.dUser.name = response.data.name
                    this.dUser.date = response.data.date 
                    console.log(response)
            })
            .catch(e => console.log(e))
    },
    methods: {
        async editar() {
            const response = await axios
                .patch('http://127.0.0.1:3333/app/update/' + this.dUser.id, {
                    name: this.dUser.name,
                    date: this.dUser.date,
                });
                if (response.status === 200) {
                    alert('Guardado ')
                    this.$router.push('/crudUsers')
                } else {
                    alert('ERROR')
                }
                console.log(response);
        }
    }
}
</script>