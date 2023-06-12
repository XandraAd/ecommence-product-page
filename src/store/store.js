import { configureStore} from "@reduxjs/toolkit";
import brandsReducer from '../slices/brandsSlice';



export const store= configureStore({
    reducer : {
        brands: brandsReducer,
        
}
})


