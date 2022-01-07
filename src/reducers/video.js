import {sessionManager} from "../managers/sessionManager";
import {eventConstants, sessionConstants} from "../constants";

let list = sessionManager.getDataFromLocalStorage(sessionConstants.FAVOURITE_LIST) || []


let initialState = {
    favouriteVideoList: list,
};
export default function video(state = initialState, action) {
    switch (action.type) {

        case eventConstants.ADD_FAVOURITE_VIDEO:
            sessionManager.setDataInLocalStorage((action.data && [...list, action.data]) || [], sessionConstants.FAVOURITE_LIST);

             return {
                ...state,
                 favouriteVideoList: [...state.favouriteVideoList, action.data]
            };
        default:
            return state;
    }
}