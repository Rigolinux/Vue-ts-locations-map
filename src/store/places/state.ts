export interface PlacesState {
    isLoading : boolean;
    useLocation? : [number, number];
}

function state(): PlacesState {
    return {
        isLoading: true,
        useLocation: undefined,
    }
}

export default state;