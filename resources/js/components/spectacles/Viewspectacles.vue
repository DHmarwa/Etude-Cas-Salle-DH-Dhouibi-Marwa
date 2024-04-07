<template>
<br>
<li class="nav-item">
    <router-link class="nav-link activate" to="/viewspectacles"> Spectacles </router-link>
</li>
  <div>

    <div v-if="isLoading">
      <h2>Loading ....</h2>
    </div>
    <div v-else class="py-6">
      <nav class="navbar navbar-expand-lg navbar-dark bg-success">
<div class="container-fluid">
<router-link :to="{name: 'Addspectacles'}" class="btn btn-outline-light">
<i class="fa-solid fa-square-plus" style="color:red"></i> New Spectacle
</router-link>
</div>
</nav>

      <table class="table table-striped shadow">
        <thead>
          <tr>
            <th scope="col" style="color:gold; font-size: 20px">Piece</th>
            <th scope="col" style="color:gold; font-size: 20px">Salle</th>
            <th scope="col" style="color:gold; font-size: 20px">Date Spectacle</th>
            <th scope="col" style="color:red; font-size: 20px">Modifier</th>
            <th scope="col" style="color:red; font-size: 20px">Supprimer</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="spec in spectacles" :key="spec.id">
            
            <td>{{ spec.piece }}</td>
            <td>{{ spec.salle }}</td>
            <td>{{ spec.date_spectacle }}</td>
            <td>
              <button class="btn btn-outline-primary mx-2" @click="editSpectacle(spec)">
                <i class="fa-solid fa-pen-to-square"></i>
                Edit
              </button>
            </td>
            <td>
              <button  class="btn btn-outline-danger mx-2"
                @click="deletespectacle(spec.id)">

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
const spectacles = ref([]);
const isLoading = ref(true);
const editSpectacle = (spec) => {
    router.push({ name: 'Editspectacle', params: { id: spec.id } });
};

const getspectacles = async () => {
  await axios
    .get("http://localhost:8000/api/spectacles")
    .then((res) => {
      spectacles.value = res.data;
      isLoading.value = false;
    })
    .catch((error) => {
      console.log(error);
    });
};
onMounted(() => {
  getspectacles();
});
const deletespectacle = async (id) => {
  if (window.confirm("Etes-vous sûr de vouloir supprimer ?")) {
  try {
    
    await axios.delete(`http://localhost:8000/api/spectacles/${id}`);
    getspectacles();
  } catch (error) {
    console.log(error);
  }
  }
};
</script>
<style lang="scss" scoped>
</style>