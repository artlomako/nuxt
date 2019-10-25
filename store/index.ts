import { getAccessorType } from 'nuxt-typed-vuex'

// Import all your submodules
// Keep your existing vanilla Vuex code for state, getters, mutations, actions, plugins, etc.
// ...

// This compiles to nothing and only serves to return the correct type of the accessor
export const accessorType = getAccessorType({
    state:{}
})
