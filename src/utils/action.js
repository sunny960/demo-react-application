import {eventConstants} from "../common/constant"

export const showLoader = (show) => {
    return dispatch =>
        dispatch({type: show ? eventConstants.SHOW_LOADER : eventConstants.HIDE_LOADER});
};