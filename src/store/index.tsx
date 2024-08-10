import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import themeConfigReducer from './themeConfigSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    themeConfig: themeConfigReducer,
    // Add other reducers here if you have more
});

export default configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;