import {Address} from "expo-location"

//category

export interface Category{
  title: string,
  icon: string
}

//Food Model

export interface FoodModel{
  _id : string,
  name: string,
  description: string,
  category: string,
  price: number,
  readyTime: number
  
}

//resturant
export interface Resturent{
  _id : string,
  name: string,
  foodType: string,
  address: string,
  phone: string,
  food : [FoodModel]
}

export interface FoodAvailability{
  categories: [Category],
  resturants: [Resturent],
  foodModel : [FoodModel]
}


//user

export interface User{
  firstName: string,
  lastName: string,
  contactNumber: string,
  token: string
}

//user state
export interface UserState{
  user : User,
  location: Address,
  error: string | undefined
}

export interface ShoppingState{
  availabality: FoodAvailability
}