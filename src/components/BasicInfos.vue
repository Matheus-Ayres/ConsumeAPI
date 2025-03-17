<script setup>
defineProps({
    InfoTitle: String,
    nationality: Object,
    ethnicity: Object,
    ages: Object,
    born: Object,
    physicalDescription: String
})
</script>

<template>
    <div class="InfoPosition">
        <span class="InfoTitle">{{ InfoTitle }}</span>
        <span class="InfoDesc">{{ nationality?.nationality }}</span>
        <span class="InfoDesc">{{ ethnicity?.ethnicity }}</span> 
        <!-- <span v-for="(age, i) in ages" :key="i" class="InfoDesc">{{ age?.ages }}</span>  //não consegui -->
        <span class="InfoDesc">{{ born?.born }}</span>
    </div>
</template>

<style>
    .InfoPosition{
        display: flex;
        padding-top: 10px;
    }

    .InfoTitle{
        
        font-family: "avatar";
        background-color: #ffffff88;
        padding: 5px 10px 5px 10px;
        color: white;
        text-shadow: 0 1.5px 0 rgb(27, 27, 27);
    }

    .InfoDesc{
        color: white;
        padding: 5px 0 5px 5px;
    }

    
</style>