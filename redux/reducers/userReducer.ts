import {UserAction} from "../actions"
import {User, UserState} from "../models/index"
import {Address} from "expo-location"

const initialState: UserState = {
  user: {} as User,
  location: {} as Address,
  error: undefined
}
const userReducer = (state: UserState = initialState, action: UserAction) =>{

  switch(action.type){

    case "ON_UPDATE_LOCATION":
        return{
          ...state,
          location: action.payload
        }

    default:
    return state;
  }

}

export {userReducer}