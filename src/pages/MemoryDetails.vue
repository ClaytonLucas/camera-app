<template>
    <base-layout :pageTitle="loadedMemory.title" pageDefaultBackLink="/home">
        <h2 v-if="!loadedMemory">Could not find a memory for the given id.</h2>
        <memories-over-view v-else :title="loadedMemory.title" :image="loadedMemory.image" :description="loadedMemory.description"></memories-over-view>
    </base-layout>
</template>
<script>
import BaseLayout from '@/components/base/BaseLayout.vue'
import MemoriesOverView from "../components/memories/MemoriesOverView.vue";
export default {
  components: { BaseLayout, MemoriesOverView },
  data(){
    return{
      memoryId: this.$route.params.id
    }
  },
  computed:{
    loadedMemory(){
      return this.$store.getters.memory(this.memoryId);
    }
  },
  watch: {
    '$route'(currentRoute){
      this.memoryId = currentRoute.params.id;
    }
  }
    
}
</script>