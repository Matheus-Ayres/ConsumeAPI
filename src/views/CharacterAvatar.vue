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
        <RouterLink to="/" style="text-decoration: none;">
            <span class="wiki">
                Avatar wiki
            </span>
        </RouterLink>
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
                <BasicInfos InfoTitle="Nationality" :nationality="character.bio"/>
                <BasicInfos InfoTitle="Ethnicity" :ethnicity="character.bio"/>
                <!-- <BasicInfos InfoTitle="Ages" :ages="character.bio"/>  não consegui--> 
                <BasicInfos InfoTitle="Born" :born="character.bio"/>  
            </section>
        </div>

        <section>
            <h1>Personal Information</h1>
            <div class="PersonalPosition">
                <div>
                    <h2 class="PersonalInformationType">Allies</h2>
                    <span v-for="(allies, i) in character?.personalInformation?.allies" :key="i" class="order">
                        {{ allies }}
                    </span>
                </div>
            
                <div>
                    <h2 class="PersonalInformationType">Enemies</h2>
                    <span v-for="(enemies, i) in character?.personalInformation?.enemies" :key="i" class="order">
                            {{ enemies}}
                    </span>
                </div>

                <div>
                    <h2 class="PersonalInformationType">Weapons Of Choice</h2>
                    <span v-for="(weaponsOfChoice, i) in character?.personalInformation?.weaponsOfChoice" :key="i" class="order">
                            {{ weaponsOfChoice}}
                    </span>
                </div>

                <div>
                    <h2 class="PersonalInformationType">Fighting Style</h2>
                    <span v-for="(fightingStyles, i) in character?.personalInformation?.fightingStyles" :key="i" class="order">
                            {{ fightingStyles}}
                    </span>
                </div>
            </div>
        </section>
    </main>
</div>
</template>

<style scoped>
    #bgPage{
        width: 100%;
        height: 100vh;
        background-image: url("../../src/assets/backgroundIMG.jpg");
        background-position: center; 
        background-repeat: no-repeat;
        background-size: cover;
        overflow: scroll;
    }

    .CharacterInfoSection{
        display: grid;
        grid-template-columns: 20% 80%;
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
        max-height: 50vh;
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
        font-family: "avatar";
        background-color: #ffffff88;
        padding: 5px 10px 5px 10px;
        color: white;
        text-shadow: 0 1.5px 0 rgb(27, 27, 27);
    }

    h1{
        text-align: center;
        background-color: var(--red);
        padding: 10px;
        border: var(--yellow) 2px solid;
        border-radius: 15px;
        font-family: "avatar";
        color: white;
        text-shadow: 0 1.5px 0 rgb(27, 27, 27);
    }

    .PersonalInformationType{
        background-color: var(--red);  
        font-family: "avatar";
        color: white;
        text-shadow: 0 1.5px 0 rgb(27, 27, 27);
        border: solid 2.5px var(--yellow);
        border-radius: 5px;
        padding: 5px;
        text-align: center;
    }

    .PersonalPosition{
        margin-top: 10px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 5px;
    }

    .order{
        display: flex;
        flex-direction: column;
        align-items: start;
        background-color: #ffffffac;
        padding-left: 15px;
        font-family: "Roboto", Roboto, sans-serif;
        font-weight: bold;
    }
</style>