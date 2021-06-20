import {httpService} from "../managers/httpService";
import {httpConstants} from "../constants";


export default {
    login,
    register,
    update,
    getUserAllProfiles,
    getUserProfileUsingProfileName,
    addUserProfile,
    getUserProfileUsingUserId,
    addProfileAddress
}

function getHeaders() {
    return {'Content-Type': httpConstants.CONTENT_TYPE.APPLICATION_JSON}
}

async function login(requestData) {
    let url = process.env.REACT_APP_SERVICE_URL + httpConstants.API_END_POINT.LOGIN;
    return httpService(httpConstants.METHOD_TYPE.POST, null, requestData, url)
        .then(
            response => {

                if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
                    return Promise.reject();
                return Promise.resolve(response.responseData);
            }
        ).catch(function (err) {
            return Promise.reject(err);
        });
};

async function register(requestData) {
    let url = process.env.REACT_APP_SERVICE_URL + httpConstants.API_END_POINT.REGISTER_USER;
    return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestData, url)
        .then(
            response => {
                if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
                    return Promise.reject();
                return Promise.resolve(response.responseData);
            }
        ).catch(function (err) {
            return Promise.reject(err);
        });
};

async function update(requestData) {
    let url = process.env.REACT_APP_SERVICE_URL + httpConstants.API_END_POINT.UPDATE_USER;
    return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestData, url)
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

async function getUserAllProfiles(requestData) {
    let url = process.env.REACT_APP_SERVICE_URL + httpConstants.API_END_POINT.USER_PROFILE + "/" + requestData;
    return httpService(httpConstants.METHOD_TYPE.GET, getHeaders(), "", url)
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


async function getUserProfileUsingProfileName(requestData) {
    let url = process.env.REACT_APP_SERVICE_URL + httpConstants.API_END_POINT.PROFILE_DETAILS + "/" + requestData;
    return httpService(httpConstants.METHOD_TYPE.GET, getHeaders(), "", url)
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

async function addUserProfile(requestData) {
    let url = process.env.REACT_APP_SERVICE_URL + httpConstants.API_END_POINT.ADD_PROFILE;
    return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestData, url)
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


async function getUserProfileUsingUserId(userId) {
    let url = process.env.REACT_APP_SERVICE_URL + httpConstants.API_END_POINT.USER_PROFILE+"/"+userId;
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

async function addProfileAddress(addressDetails) {
    let url = process.env.REACT_APP_SERVICE_URL + httpConstants.API_END_POINT.ADD_USER_ADDRESS;
    return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), addressDetails, url)
        .then(
            response => {
debugger
                if (!response.success || response.responseCode !== 200 || !response.responseData || response.responseData.length === 0)
                    return Promise.reject();
                return Promise.resolve(response.responseData);
            }
        ).catch(function (err) {
            return Promise.reject(err);
        });
}