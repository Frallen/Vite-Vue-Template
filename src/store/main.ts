

interface stateType {
 
    isError: boolean
}

export const useMain = defineStore('main', {
    state: (): stateType => ({
        isError: false,
   
    }),
    getters: {
    
    },
    actions: {
      
    }

})