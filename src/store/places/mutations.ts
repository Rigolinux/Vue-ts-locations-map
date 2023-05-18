import { MutationTree } from 'vuex';
import { PlacesState } from './state';


const mutation: MutationTree<PlacesState> = {
    setLnglat(  state: PlacesState, cords ) {
        state.useLocation = cords;
        state.isLoading = false;
    }
}


export default mutation;