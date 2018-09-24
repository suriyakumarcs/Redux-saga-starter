import React from 'react';
import { createStore, applyMiddleware  } from 'redux';
import createSagaMiddleware from 'redux-saga';

import saga from '../saga';
import rootReducer from '../reducers/index.js';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore (
    rootReducer,
    applyMiddleware(sagaMiddleWare)
);

sagaMiddleWare.run(saga);

export default store;