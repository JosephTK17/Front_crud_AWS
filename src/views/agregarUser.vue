<template>
    <p>&nbsp;</p>
    <div class="container">
        <div class="row">
            <h3 style="text-align:center">AGREGAR USUARIO</h3>
        </div>
        <form class="form-horizontal" method="POST" action="guardar_usu.php" enctype="multipart/form-data" v-on:submit.prevent="registrar">
            <div class="form-group">
            <br>

            <label for="id_user" class="col-sm-2 control-label">Documento</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control" id="id_user" name="id_user" placeholder="documento" v-model="id">
                        </div>
                </div>
                <div class="form-group">
                    <br>

                    <label for="nombre" class="col-sm-2 control-label">Nombre</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="nombre" name="nombre" placeholder="nombre" v-model="name">
                        </div>
                </div>
                <div class="form-group">
                    <br>

                    <label for="fecha" class="col-sm-2 control-label">Fecha</label>
                        <div class="col-sm-10">
                            <input type="date" class="form-control" id="fecha" name="fecha" v-model="date">
                        </div>
                </div>
                <div class="form-group">
                    <br>

                <div class="col-sm-offset-2 col-sm-10">
                    <a href="/#/crudUsers" class="btn btn-default">Regresar</a>
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'registro',
    data() {
        return {
            id: 0,
            name: "",
            date: "",
        }
    },
    methods: {
        registrar() {
            let json = {
                id: this.id,
                name: this.name,
                date: this.date,
            };
            axios.post('http://127.0.0.1:3333/app/create', json)
            .then(data => {
                console.log(data)
                if (data.status === 201) {
                    alert('Registrado: ' + this.name)
                    this.$router.push('/crudUsers')
                } else {
                    alert('ERROR')
                }
            })
        }
    }
}
</script>