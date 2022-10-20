<script>
export default{
    name: 'Header'
}
</script>

<template>
<header class="p-3 mb-3 border-bottom">
  <div class="container">
        <div class="d-flex flex-wrap justify-content-center justify-content-lg-start">
            <ul class="nav col-3 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                    <a href="/#/" class="nav-link px-2 link-dark">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Inicio</font>
                        </font>
                    </a>
                </li>
                <li>
                    <a href="/#/crudUsers" class="nav-link px-2 link-dark">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Usuarios</font>
                        </font>
                    </a>
                </li>   
            </ul>

            <div class="dropdown text-end">
                <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="hacer" width="32" height="32" class="rounded-circle">
                </a>
                <ul class="dropdown-menu text-small">
                    <li>
                        <a class="dropdown-item" href="#">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Nuevo proyecto...</font>
                            </font>
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Ajustes</font>
                            </font>
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">Perfil</font>
                            </font>
                        </a>
                    </li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            <font style="vertical-align: inherit;">
                                <font style="vertical-align: inherit;">desconectar</font>
                            </font>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</header>
</template>
