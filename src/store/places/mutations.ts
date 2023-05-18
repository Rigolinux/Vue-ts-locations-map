import { MutationTree } from 'vuex';
import { PlacesState } from './state';


const mutation: MutationTree<PlacesState> = {
    setLnglat(  state: PlacesState, cords: { lng: number , lat: number} ) {
        state.useLocation = [cords.lng, cords.lat];
        console.log(state.useLocation);
        state.isLoading = false;
    }
}


export default mutation;