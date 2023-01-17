import {combineReducers} from "redux"
import { getContactReducer, getExprienceReducer, getProjectReducer } from "./getDataReducer";
import { userContactReducer, userExperienceReducer, userLoginReducer, userLogoutReducer, userProjectReducer } from "./userReducer"


const rootReducer = combineReducers({
    userContact: userContactReducer,
    userLogin: userLoginReducer,
    userLogout:userLogoutReducer,
    userExperience:userExperienceReducer,
    userProject:userProjectReducer,
    getExperience:getExprienceReducer,
    getProject:getProjectReducer,
    getContact: getContactReducer,
})

export default rootReducer;