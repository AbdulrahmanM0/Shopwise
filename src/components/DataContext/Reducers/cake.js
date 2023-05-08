import { BUY_CAKE } from "./cakeaction";

const initialState = {
    mofcakes: 10,
}

function Reducer(state = initialState , action){
    switch(action.type){
        case BUY_CAKE:
            return {
                mofcakes: state.mofcakes - 1,
            }
        default:
            return state
    }
}
export default Reducer;