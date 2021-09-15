/**
 *  Vuex Module
 */

 export const namespaced = true

 export const state = () => ({
   username: localStorage.getItem('username')
 })
 
 export const mutations = {
   setUserName(state, username){
     state.username = localStorage.setItem('username', username)
   },

   deleteUserName(state){
     localStorage.setItem('username', '')
     state.username = ''
   }
 }
 
 export const actions = {}
 
 export const getters = {}
 
 export default {
   namespaced,
   state,
   mutations,
   actions,
   getters,
 }