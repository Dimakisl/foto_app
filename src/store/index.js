import {tokenMiddleware, tokenReducer} from './tokenReducer';
import {authReducer} from './authReducer';
import {configureStore} from '@reduxjs/toolkit';
import fotosSliceReducer from './PostFoto/postFotoSlice';
import fotoDataSliceReducer from './postFotoData/postFotoDataSlice';
import likeFotoReducer from './likePhoto/likeFotoSlice';
import userDataSlice from './userData/userDataSlice';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    auth: authReducer,
    fotos: fotosSliceReducer,
    fotoData: fotoDataSliceReducer,
    likeFoto: likeFotoReducer,
    user: userDataSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tokenMiddleware)
});