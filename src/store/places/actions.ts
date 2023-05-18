import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';


const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation({ commit }) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => commit('setLnglat', coords),
        (err) => {console.log(err)
         throw new Error('Could not get your location. Please enable location services on your device.')
        },
      )  
    }
}



export default actions;