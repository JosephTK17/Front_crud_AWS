<template>
<div class="containerR">
    <div class="tablaFR">
        <div class="tittle">
                <h1>Registro</h1>
            </div>
            <form class="formR" action="" method="post" v-on:submit.prevent="registrar">
                <div class="form_cont">
                    <div class="labelR">
                        <label for="post-id" id="label1">Documento</label>
                    </div>
                    <div class="inputR">
                        <input type="number" name="CC" class="inputInterno" id="get_id" v-model="id"><br>
                    </div>
                    <div class="labelR">
                        <label for="post-name" id="label2">Nombre</label>
                    </div>
                    <div class="inputR">
                        <input type="text" name="name" class="inputInterno" id="get_name" placeholder="usuario" v-model="name"><br>
                    </div>
                    <div class="labelR">
                        <label for="post-fecha" id="label3">Fecha</label>
                    </div>
                    <div class="inputR">
                        <input type="date" name="date" class="inputInterno" id="get_date" v-model="date"><br>
                    </div>
                    <div class="buttomR">
                        <button type="submit" id="submitR">Registrar</button>
                    </div>
                </div>
            </form>
        </div>
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
                } else {
                    alert('ERROR')
                }
            })
        }
    }
}
</script>