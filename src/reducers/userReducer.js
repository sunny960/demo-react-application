import {cookiesConstants, eventConstants} from "../constants";
import sessionManager from "../managers/sessionManager";

const userData = sessionManager.getDataFromCookies(cookiesConstants.USER);
const profileData = sessionManager.getDataFromCookies(cookiesConstants.PROFILE);

let initialState = {
    userDetails: userData,
    profileDetails: profileData,
    isUserLoggedIn: false
};

export default function user(state = initialState, action) {
    console.log('Class: user, Function: user ==', action);
    switch (action.type) {
        case eventConstants.SHOW_LOADER:
            return {
                ...state,
                loading: true
            };
        case eventConstants.HIDE_LOADER:
            return {
                ...state,
                loading: false
            };
        case eventConstants.SIGN_UP_SUCCESS:
            sessionManager.setDataInCookies(action.data ? action.data.userDetails : state.userDetails, cookiesConstants.USER);
            return {
                ...state,
                isUserLoggedIn: true,
                userDetails: action.data.userDetails
            };
        case eventConstants.PROFILE_CREATED:
            sessionManager.setDataInCookies(action.data ? action.data : state.profileDetails, cookiesConstants.PROFILE);
            return {
                ...state,
                profileDetails: action.data
            };

        case eventConstants.LOGOUT_SUCCESS:
            sessionManager.setDataInCookies(null, cookiesConstants.USER);
            return {
                ...state,
                isUserLoggedIn: false,
                userDetails: null,
                loading: false,
                profileDetails: null
            };
        default:
            return state;

    }
}

