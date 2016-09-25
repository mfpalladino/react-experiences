import React from 'react'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import devTools from 'remote-redux-devtools'

import samplesState from '../reducers/sampleReducer'

export default function configureStore(initialState) {
    const logger = createLogger()
    const reducer = combineReducers({ samplesState })
    const store = createStore(
        reducer,
        initialState,
        compose(applyMiddleware(thunk, logger), devTools())
    )
    return store
}