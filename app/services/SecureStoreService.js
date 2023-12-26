import * as SecureStore from 'expo-secure-store'

const SecureStoreService = {
    set : async (key, value) => {
        await SecureStore.setItemAsync(key, value)
    },
    
    
    get : async (key) => {
        return await SecureStore.getItemAsync(key)
    }
}

export default SecureStoreService