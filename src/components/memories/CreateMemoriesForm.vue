<template>
    <form class="ion-padding" @submit.prevent="submitForm">
        <ion-list>
            <ion-item>
                <ion-label position="floating">Title</ion-label>
                <ion-input type="text" required v-model="enteredTitle"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Image URL</ion-label>
                <ion-input type="url" required v-model="enteredImageUrl"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Description</ion-label>
                <ion-textarea rows="5" required v-model="enteredDescription"></ion-textarea>
            </ion-item>
            <ion-item>
            <ion-button type="submit" expand="block" fill="outline">
                Save
            </ion-button>
            </ion-item>
        </ion-list>
        </form>
</template>
<script>

import {IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from "@ionic/vue";

export default {
    emits: ['save-memory'],
    components: {
                IonList,
                IonItem, 
                IonLabel, 
                IonInput, 
                IonTextarea,
                IonButton
            },
    data(){
        return{
            enteredTitle: '',
            enteredImageUrl: '',
            enteredDescription: ''
        }
    },
    methods:{
        submitForm() {
            const memoryData = {
                title: this.enteredTitle,
                imageUrl: this.enteredImageUrl,
                description: this.enteredDescription
            };
            this.$emit('save-memory', memoryData);
        }
    }

    
}
</script>