import axios from "axios"

import {Address} from "expo-location"

import {Dispatch} from "react"

import {BASE_URL} from "../../utils"

import {FoodAvailability} from "../models"


export interface AvailabilityAction{
  readonly type : "ON_AVAILABALITY",
  payload : FoodAvailability
}

export interface ShoppingErrorAction{
  readonly type : "ON_SHOPPING_ERROR",
  payload : any
}

export type ShoppingAction = AvailabilityAction | ShoppingErrorAction

export const onAvailabality = (location : Address) =>{

  return async( dispatch: Dispatch<ShoppingAction>)=>{

    try{

    const response = await axios.get<FoodAvailability>(`${BASE_URL}/~2FFoodOrder~2FFO1`)

    if(!response){
       dispatch ({
        type : "ON_SHOPPING_ERROR",
        payload: "Availability Error"
      })
    }

      //save our location in local storage
      dispatch ({
        type : "ON_AVAILABALITY",
        payload: response.data
      })

    } catch(error){

      dispatch ({
        type : "ON_SHOPPING_ERROR",
        payload: error
      })

    }

  }
}