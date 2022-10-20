<!-- <script setup>
import Header from './components/Header.vue'
import Registro from './views/inicioRegistro.vue'
import crud_users from './views/crudUsers.vue'
</script>

<template>
  <header>
    <Header></Header>
  </header>
  <main>
   <Registro />
  </main>
  <main>
    <crud_users />
  </main>
</template> -->
<script setup>
import Header from './components/Header.vue'
</script>

<script>
export default {
  name: 'App'
}
</script>

<template>
  <div>
    <header>
      <Header></Header>
    </header>
    <router-view></router-view>
  </div>
</template>