import {ShoppingAction} from "../actions"
import {FoodAvailability, ShoppingState} from "../models"

const initialState = {
  availabality : {} as FoodAvailability
}


const shoppingReducer = (state : ShoppingState = initialState, action:ShoppingAction) =>{

  switch(action.type){
    case "ON_AVAILABALITY":
    return{
      ...state,
      availability: action.payload
    }

    default:
    return state
  }

}

export {shoppingReducer}