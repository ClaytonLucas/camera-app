<template>
    <IonPage>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button :defaultHref="pageDefaultBackLink"></ion-back-button>
                </ion-buttons>
                <ion-title>{{pageTitle}}</ion-title>
                <ion-buttons slot="end">
                    <slot name="actions-end"></slot>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            
            <slot/>
        </ion-content>
    </IonPage>
</template>
<script>
    import { IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonBackButton, IonButtons } from "@ionic/vue"; 
    export default{
        props:["pageTitle", "pageDefaultBackLink"],
        components:{
            IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonBackButton, IonButtons
        }
    }
</script>