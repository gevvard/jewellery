import {combineReducers} from "redux"
// import genderReducer from "./genderReducer";
import {categoriesReducer} from"./categorisReducer"
import genderReducer from "./genderReducer";
import {subCategoriesReducer} from "./subCategorisReducer";
import productReducer from "./productReducer"

import usersReducer from "./usersReducer"




const rootReducer = combineReducers({
   gender:genderReducer,
   categories:categoriesReducer,
   subCategories:subCategoriesReducer,
   product:productReducer,
   userData:usersReducer
})
export default rootReducer;
