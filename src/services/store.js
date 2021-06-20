import {httpConstants} from "../constants";
import {httpService} from "../managers/httpService";

export default {
    getStoreList,
    getStoreItemById,
}

function getHeaders() {
    return {'Content-Type': httpConstants.CONTENT_TYPE.APPLICATION_JSON}
}

async function getStoreList() {
    let url = process.env.REACT_APP_SERVICE_URL + httpConstants.API_END_POINT.STORE_LIST+"?limit=0&skip=0";
    return httpService(httpConstants.METHOD_TYPE.GET, getHeaders(), {}, url)
        .then(
            response => {

                if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
                    return Promise.reject();
                return Promise.resolve(response.responseData);
            }
        ).catch(function (err) {
            return Promise.reject(err);
        });
}
async function getStoreItemById(storeItemId) {
    let url = process.env.REACT_APP_SERVICE_URL + httpConstants.API_END_POINT.STORE+"/"+storeItemId;
    return httpService(httpConstants.METHOD_TYPE.GET, getHeaders(), {}, url)
        .then(
            response => {

                if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
                    return Promise.reject();
                return Promise.resolve(response.responseData);
            }
        ).catch(function (err) {
            return Promise.reject(err);
        });
}