export interface PlacesState {
    isLoading : boolean;
    useLocation? : [number, number];
}

function state(): PlacesState {
    return {
        isLoading: false,
        useLocation: undefined,
    }
}

export default state;