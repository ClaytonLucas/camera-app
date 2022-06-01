<template>
    <ion-item :router-link="`/memories/${memory.id}`">
    <ion-thumbnail slot="start">
    <ion-img :src="memory.image"></ion-img>
    </ion-thumbnail>
    <ion-label>
    {{memory.title}}
    </ion-label>
    </ion-item>   
</template>
<script>
import {IonItem, IonLabel, IonThumbnail, IonImg} from "@ionic/vue";
export default {
    props:["memory"],
    components:{
        IonItem, 
        IonLabel, 
        IonThumbnail, 
        IonImg
    }
}
</script>