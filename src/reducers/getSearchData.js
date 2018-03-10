/**
 * Created by kk on 2018/1/23.
 */


export default ( state=[],action ) => {
    switch(action.type){
        case "ADD_SEARCHDATA":
            return action.payload;
        default:
            return state;

    }
}