<template>
<br>
<br>
    <div class="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h4 align="center" style="color:red;  font-size: 30px; text-decoration: underline;">Ajout Spectacle</h4>
        <form @submit.prevent="addSpectacle">
            <br>
            <div class="row">
                <br>
                <div class="col-md-6">
                    <label for="piece" class="form-label" style="color: blue; font-size: 30px; text-decoration: underline;">Pièce</label>
                    <select class="form-control" v-model="spectacle.piece">
                        <option v-for="piece in pieces" :key="piece.id" :value="piece.titre">{{ piece.titre }}</option>
                    </select>
                </div>
                
                <div class="col-md-6">
                    <label for="salle" class="form-label" style="color: blue; font-size: 30px; text-decoration: underline;">Salle</label>
                    <select class="form-control" v-model="spectacle.salle">
                        <option v-for="salle in salles" :key="salle.id" :value="salle.libelle">{{ salle.libelle }}</option>
                    </select>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-md-6">
                    <label for="date_spectacle" class="form-label" style="color: blue; font-size: 30px; text-decoration: underline;">Date du Spectacle</label>
                    <input type="date" class="form-control" id="date_spectacle" v-model="spectacle.date_spectacle">
                </div>
            </div>
            <br />
            <button type="submit" class="btn btn-outline-primary">
                <i class="fa-solid fa-floppy-disk"></i> Enregistrer
            </button>
            <router-link to="/viewspectacles" class="btn btn-outline-danger mx-2">
                <i class="fa-solid fa-xmark"></i> Annuler
            </router-link>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();

const spectacle = ref({
    piece: "",
    salle: "",
    date_spectacle: "",
});

const pieces = ref([]);
const salles = ref([]);

const getpieces = async () => {
    try {
        const response = await axios.get("http://localhost:8000/api/pieces");
        pieces.value = response.data;
        console.log(pieces.value)
    } catch (error) {
        console.error(error);
    }
};

const getsalles = async () => {
    try {
        const response = await axios.get("http://localhost:8000/api/salles");
        salles.value = response.data;
        console.log(salles.value)
    } catch (error) {
        console.error(error);
    }
};

const addSpectacle = async () => {
    try {
        await axios.post("http://localhost:8000/api/spectacles", spectacle.value);
        window.alert("Ajout avec succès !");
    router.push({ name: "Viewspectacles" })
    } catch (error) {
        console.error(error);
    }
};

onMounted(() => {
    getpieces();
    getsalles();
});
</script>

<style scoped></style>
