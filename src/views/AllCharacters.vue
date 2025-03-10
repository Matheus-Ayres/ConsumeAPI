<script setup>
import { ref, onMounted } from 'vue';
import { getCharacters } from '@/services/http'

const infos = ref([])

async function Cartoon() {
  const result = await getCharacters();
  infos.value = result;
  console.log(result)

  const FilterCharacters = infos.value.filter((c) => c.name != null) 
  console.log(FilterCharacters)


  infos.value = FilterCharacters;
}

onMounted(() => {
  Cartoon();
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
      <div class="card">
          {{ info.name }}
          
          <img :src="editUrl(info.image)" width="200px">
      </div>
    </div>
  </main> 

  
<RouterLink/>

</template>



<style scoped>
  nav{
    background-color: var(--red);
    height: 60px;
    border-bottom: 5px solid var(--yellow);
  }

  .wiki{
    font-size: 2rem;
    font-family: "Roboto";
    color: var(--yellow);
    font-weight: bold;
  }

  .characters-position{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 40px 90px 90px 90px;
    gap: 50px;
  }

  .card{
    display: flex;
    flex-direction: column;
  }
</style>