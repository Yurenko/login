import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import LoginReducer from './LoginReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};
const rootReducer = combineReducers({
  login: persistReducer(persistConfig, LoginReducer),
});

const middleware = [ReduxThunk];
const enhancer = applyMiddleware(...middleware);

export const store = createStore(rootReducer, composeWithDevTools(enhancer));
export const persistor = persistStore(store);
