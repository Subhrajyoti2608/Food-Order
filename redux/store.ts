import {applyMiddleware} from "redux"

import { legacy_createStore as createStore} from 'redux'

import thunk from "@reduxjs/toolkit"

import {rootReducer} from "./reducers"

const store = createStore(rootReducer,{}, applyMiddleware([thunk]))

export {store}