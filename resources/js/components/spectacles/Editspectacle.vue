<template>
<br>
<br>
    <div class="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h4 align="center" style="color:green; font-size:30px">Editer Spectacle </h4>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="piece" style="color:red;font-size: 30px; text-decoration: underline">Piece</label>
                <input type="text" class="form-control" id="piece" v-model="spectacle.piece">
            </div>
            <div class="form-group">
                <label for="salle" style="color:red;font-size:27px">Salle</label>
                <input type="text" class="form-control" id="salle" v-model="spectacle.salle">
            </div>
             <div class="form-group">
                <label for="date-spectacle" style="color:red;font-size:27px">Date de Spectacle</label>
                <input type="text" class="form-control" id="date-spectacle" v-model="spectacle.datespectacle">
            </div>
            <br />
            <div class="form-group">
                <button type="submit" className="btn btn-outline-primary">
                    <i class="fa-solid fa-floppy-disk"></i>Enregister
                </button>
                <button type="button" class="btn btn-outline-danger mx-2"  @click="cancelEdit">   <i class="fa-solid fa-xmark"></i>Annuler</button>
            </div>
        </form>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute(); // Utilisez useRoute() pour accéder à l'objet de la route
const spectacle = ref({});
const id = route.params.id; // Accédez aux paramètres de la route via route.params

onMounted(async () => {
    try {
        const response = await axios.get(`http://localhost:8000/api/spectacles/${id}`);
        spectacle.value = response.data;
    } catch (error) {
        console.error(error);
    }
});

const submitForm = async () => {
    try {
        await axios.put(`http://localhost:8000/api/spectacles/${id}`, spectacle.value);
        router.push({ name: 'Viewspectacles' });
    } catch (error) {
        console.error(error);
    }
};
const cancelEdit = () => {
    router.push({ name: 'Viewspectacles' });
};
</script>

<style scoped>
/* Vos styles CSS pour la page d'édition */
</style>
