<script setup>
import { ref, onMounted } from 'vue';
import { getCharacters } from '@/services/http'

const infos = ref([])

async function Characters() {
  const result = await getCharacters();
  infos.value = result;
  console.log(result)

  const FilterCharacters = infos.value.filter((c) => c.name != null) 
  console.log(FilterCharacters)


  infos.value = FilterCharacters;
}

onMounted(() => {
  Characters();
});

function editUrl(url) {
  const position = url.indexOf(".png")
  return url.substring(0, position +4)
}
</script>

<template>

<nav>
  <span class="wiki">
    Avatar Wiki
  </span>
</nav>

  <main class="characters-position">
    <div v-for="info in infos" :key="info.id">
      <RouterLink class="SeeMore" :to="'/Character/'+ info.id">   
        <div class="card">
          <div class="nameChar">
            {{ info.name }}
          </div>
          <div class="infosChar">
            <img :src="editUrl(info.image)" class="imgChar" width="200px">
              <div class="description">
                <span>
                  <h4 class="Alternative">  
                    Alternative Names:
                  </h4>
                    <p v-for="(name, i) in info.bio.alternativeNames" :key="i" class="Names">
                      <ul>
                        <li>
                          {{ name }};
                        </li>
                      </ul>
                    </p>
                </span>
              </div>
          </div>
        </div>    
      </RouterLink>
    </div>
  </main> 

  
<RouterLink/>

</template>



<style scoped>



  .characters-position{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 40px 90px 90px 50px;
    gap: 50px;
  }

  .card{
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    background-color: var(--red);
    border: 2px solid var(--yellow);
    width: 410px;
    height: 240px;
    transition: 0.3s ease-out;
  }

  .card:hover{
    transform: scale(1.1);
    box-shadow: 3px 8px 5px 5px rgba(0, 0, 0, 0.4);
    background-color: #750800;

  }

  .nameChar{
    width: 55%;
    text-align: center;
    color: white;
    font-weight: bold;
    font-family: "avatar";
    padding: 8px 0 3px 0;
    font-size: 1.8rem;
  }

  .imgChar{
    border-radius: 20px;
    padding: 5px 15px 10px 12px;
  }

  .infosChar{
    display: flex;
  }

  .description{
    width: 175px;
    overflow-wrap: break-word;
    margin: 10px;
  }


  .SeeMore{
    text-decoration: none;
  }

  .Alternative{
    font-weight: bold;
    font-size: 16px;
    color: white;
    font-family: "Roboto";
  }

  .Names{
    color: white;
    font-family: "Roboto";
  }
</style>