<script setup>
import { getCharacter } from '@/services/http';
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute()

const imageUrl = ref()

const character = ref({})

async function getCharacterInfo(id){
    const result = await getCharacter(id);
    character.value = result

    const position = character.value.image.indexOf(".png")
    imageUrl.value = character.value.image.substring(0, position +4)
}

onMounted(() => {
    getCharacterInfo(route.params.id)
})



</script>

<template>
<div id="bgCharacter">
    <nav>
        <span class="wiki">
        {{ character.name }}
        </span>
    </nav>
    <div class="PersonalCard">
        <img :src="imageUrl" class="PersonalIcon">
    </div>
</div>
</template>

<style scoped>
    #bgCharacter{
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background-image: url("../../src/assets/backgroundIMG.jpg");
        background-position: center; 
        background-repeat: no-repeat;
        background-size: cover;
    }

    .PersonalCard{
        display: flex;
        background-color: #ffffffb0;
        padding: 30px;
        margin: 10px;
    }

    .PersonalIcon{
        width: 280px;
    }

</style>