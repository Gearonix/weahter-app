import api from './../API';
import {stopSubmit} from "redux-form";
let init={
    data : null,
    error : false,
    onPage : false
}



let find_reducer = function (state=init,action) {
    switch (action.type) {
        case 'FIND-CITY':
            return {...state, data: action.data}
        case 'FIND/ERROR':
            return {...state, error : action.error}
        case 'TO-FIND':
            return {...state,onPage : action.value}
        default:
            return state
    }
}
export let findCityAC = function (data){
    return {
        type : 'FIND-CITY',
        data : data
    }
}
export let error_ac = function(error){
    return{
        type : 'FIND/ERROR',
        error : error
    }
}
export let toFind_ac = function(value){
    return{
        type : 'TO-FIND',
        value : value
    }
}

export let fundCityTC = function (value){
    return function(dispatch){
        api.findCityApi(value).then((response) =>{
            // console.log(response.data)
            // debugger
            dispatch(findCityAC(response.data))
            dispatch(error_ac(false))
            dispatch(toFind_ac(true))
        }).catch(
            () => {
                let error =stopSubmit('find',{_error : 'Please enter a real city'});
                dispatch(error)
                dispatch(error_ac(true))
            }
        )
    }
}

export default find_reducer
