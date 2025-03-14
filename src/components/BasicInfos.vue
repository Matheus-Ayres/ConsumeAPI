<script setup>
defineProps({
    bio: Object,
    InfoTitle: String,
    
})
</script>

<template>
    <div class="InfoPosition">
        <span class="InfoTitle">{{ InfoTitle }}</span>
        <span class="InfoDesc">{{ bio?.nationality }}</span>
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
        font-family: "Roboto";
        padding: 5px 0 5px 5px;
    }
</style>