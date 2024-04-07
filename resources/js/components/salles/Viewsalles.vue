<template>
<br>

<li class="nav-item">
    <router-link class="nav-link activate" to="/viewsalles"> Salles </router-link>
</li>
  <div>

    <div v-if="isLoading">
      <h2>Loading ....</h2>
    </div>
    <div v-else class="py-6">
      <nav class="navbar navbar-expand-lg navbar-dark bg-success">
<div class="container-fluid">
<router-link :to="{name: 'Addsalles'}" class="btn btn-outline-light">
<i class="fa-solid fa-square-plus" style="color:brown"></i> New Salle
</router-link>
</div>
</nav>

      <table class="table table-striped shadow">
        <thead>
          <tr>
            <th scope="col" style="color:orange; font-size: 20px">Libelle</th>
            <th scope="col" style="color:orange; font-size: 20px">Adresse</th>           
            <th scope="col" style="color:orange; font-size: 20px">Modifier</th>
            <th scope="col" style="color:orange; font-size: 20px">Supprimer</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="sal in salles" :key="sal.id">
            
            <td>{{ sal.libelle }}</td>
            <td>{{ sal.adresse }}</td>
            <td>
             <button
                                class="btn btn-outline-primary mx-2"
                                @click="editSalle(sal)"
                            >
                                <i class="fa-solid fa-pen-to-square"></i>
                                Edit
                            </button>
            </td>
            <td>
              <button
                class="btn btn-outline-danger mx-2"
                @click="deletesalle(sal.id)"
              >
                <i class="fa-solid fa-trash-can"></i>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
const salles = ref([]);
const isLoading = ref(true);
const editSalle = (sal) => {
    router.push({ name: 'editsalles', params: { id: sal.id } });
};

const getsalles = async () => {
  await axios
    .get("http://localhost:8000/api/salles")
    .then((res) => {
      salles.value = res.data;
      isLoading.value = false;
    })
    .catch((error) => {
      console.log(error);
    });
};
onMounted(() => {
  getsalles();
});
const deletesalle = async (id) => {
  if (window.confirm("Etes-vous sûr de vouloir supprimer ?")) {
  try {
    
    await axios.delete(`http://localhost:8000/api/salles/${id}`);
    getsalles();
  } catch (error) {
    console.log(error);
  }
  }
};
</script>
<style lang="scss" scoped>
</style>