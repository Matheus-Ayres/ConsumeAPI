<script setup>
import { getCharacter } from '@/services/http';
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import BasicInfos from '@/components/BasicInfos.vue';

const route = useRoute()

const imageUrl = ref()

const character = ref({})

async function getCharacterInfo(id){
    const result = await getCharacter(id);
    character.value = result

    const position = character.value.image.indexOf(".png")
    imageUrl.value = character.value.image.substring(0, position +4)
    console.log(character.value);
}

onMounted(() => {
    getCharacterInfo(route.params.id)
    console.log(character.value)
    
})



</script>

<template>
<div id="bgPage">
    <nav>
        <span class="wiki">
            Avatar wiki
        </span>
    </nav>

    <main class="CharacterInfoSection">
        <div class="PersonalCard">
            <div class="Top">
                <span class="CharNameTitle">
                    {{ character.name }}
                </span>
                <img :src="imageUrl" class="PersonalIcon">
            </div>
            <span class="InformationTitleTag">
                Informations
            </span>

            <section>
                <BasicInfos InfoTitle="Nationality" :bio="character.bio"/>
            </section>

        </div>
    </main>
</div>
</template>

<style scoped>
    #bgPage{
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background-image: url("../../src/assets/backgroundIMG.jpg");
        background-position: center; 
        background-repeat: no-repeat;
        background-size: cover;
    }

    .CharacterInfoSection{
        display: grid;
        grid-template-columns: 10% 70%;
        background-color: #ffffffb0;
        padding: 30px;
        margin: 10px;
    }

    .PersonalCard{
        background-color: var(--red);
        padding: 20px;
        width: 230px;
        border: var(--yellow) solid 3px;
        border-radius: 10px;
    }

    .Top{
        display: flex;
        flex-direction: column;
        padding-bottom: 10px;
    }

    .PersonalIcon{
        border-radius: 5px;
        width: 100%;
    }

    .CharNameTitle{
        text-align: center;
        font-family: "avatar";
        color: white;
        font-weight: bold;
        font-size: 2rem;
        padding-bottom: 10px;
        text-shadow: 0 2px 2px rgb(27, 27, 27);
    }

    .InformationTitleTag{
        display: flex;
        justify-content: center;
        background-color: #ffffff88;
        padding: 5px 40px 5px 40px;
    }



</style>