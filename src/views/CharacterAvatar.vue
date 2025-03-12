<script setup>
import { getCharacter } from '@/services/http';
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute()

const info = ref({})

async function getCharacterInfo(id){
    const result = await getCharacter(id);
    info.value = result
    console.log(result)
}
    
onMounted(() =>{
    getCharacterInfo(route.params.id)
})


</script>

<template>
    <p v-for="infos in info" :key="infos.id">
        {{ infos.name }}
    </p>
    <RouterView/>
</template>