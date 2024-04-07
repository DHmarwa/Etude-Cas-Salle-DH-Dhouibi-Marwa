<template>
  <nav class="navbar navbar-expand-lg bg-info" data-bs-theme="dark"> 
    <div class="container-fluid">
      <a class="navbar-brand" href="#" style="color:fuchsia"> <u style="font-size:25px">Evenements  </u> </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item" > 
            <router-link class="nav-link active" to="/addsalles"> <u  style="color:gold; font-size:25px"> Salle </u></router-link>
            
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/addspectacles"> <u  style="color:fuchsia; font-size:25px">Spectacle </u> </router-link>
          </li>
          <li class="nav-item">
            
            <router-link class="nav-link active" to="/addpieces"> <u  style="color:gold; font-size:25px">Piece </u> </router-link>
          </li>
          <li class="nav-item dropdown">
    
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </li>
        </ul>
        <form class="d-flex">
         
    
        </form>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item me-3">
    
        
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<style scoped>
/* Vos styles ici */
</style>