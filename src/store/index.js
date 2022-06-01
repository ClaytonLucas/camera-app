import { createStore } from "vuex";

const store = createStore({
    state(){
        return {
            memories:[
                {
                    id:"m1",
                    image: "https://images.immediate.co.uk/production/volatile/sites/4/2021/08/mountains-7ddde89.jpg?quality=90&resize=768,574",
                    title:"A trip into the mountains",
                    description:"It was a really nice trip"
                },
                {
                    id:"m2",
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQck_cBSy-gJxJZyELU3X5FbXhGaqTTkoUZEg&usqp=CAU",
                    title:"Surfing the sea side",
                    description:"Feeling the cool breeze"
                },
                {
                    id:"m3",
                    image:"https://d18mqtxkrsjgmh.cloudfront.net/public/2021-03/Eating%20More%20Ultraprocessed%20%E2%80%98Junk%E2%80%99%20Food%20Linked%20to%20Higher%20CVD%20Risk.jpeg",
                    title:"Good eating",
                    description:"Really tasty!"
                }
                ]
        };
    },
    mutations:{
        addMemory(state, memoryData){
            const newMemory ={
                id: new Date().toISOString(),
                title: memoryData.title,
                image: memoryData.imageUrl,
                description: memoryData.description
            };

            state.memories.unshift(newMemory);
        }
    },
    actions: {
        addMemory(context, memoryData){
            context.commit('addMemory', memoryData)
        }
    },
    getters: {
        memories(state){
            return state.memories;
        },
        memory(state){
            return (memoryId) => {
                return state.memories.find((memory)=> memory.id === memoryId)
            }
        }
    }
});

export default store;