import { createStore } from 'vuex';

// My custom modules
//import exampleModule from './module-template';
//import { ExampleStateInterface } from './module-template/state';
import { PlacesState } from './places/state';
import PlacesModule from './places';

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  //example: unknown;
  places : PlacesState;
}

export default createStore<StateInterface>({
  modules: {
    //example: exampleModule
    places : PlacesModule
  }
})
