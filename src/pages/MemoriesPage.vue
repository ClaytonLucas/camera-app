<template>
    
    <base-layout pageTitle="All Memories">
    <template v-slot:actions-end>
        <ion-buttons router-link="/memories/add">
            <ion-icon slot="icon-only" :icon="add"></ion-icon>
        </ion-buttons>
    </template>
        <memories-list :memories="memories"></memories-list>
    </base-layout>
    
</template>
<script>
    import {IonButtons, IonIcon} from "@ionic/vue";
    import {add} from 'ionicons/icons';
    import BaseLayout from '@/components/base/BaseLayout.vue';
    import MemoriesList from "../components/memories/MemoriesList.vue";
    export default{
        components:{
            MemoriesList,
            BaseLayout,
            IonButtons, 
            IonIcon
        },
        data(){
            return { add }
        },
        computed:{
            memories(){
                return JSON.parse(JSON.stringify(this.$store.getters.memories));
            }
        }
    }
</script>