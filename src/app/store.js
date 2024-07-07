import { configureStore} from '@reduxjs/toolkit';

import categoryReducer from '../features/Category/categorySlice';

const rootReducer = {
category: categoryReducer
};

const store = configureStore({
    reducer: rootReducer
});

export default store;