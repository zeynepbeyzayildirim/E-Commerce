import { fetchUser } from "../utils/fetchLocalStrogeData";


const userInfo = fetchUser();

export const initialState = {
    user: userInfo,
    
};