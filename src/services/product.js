import {httpConstants} from "../constants";
import {httpService} from "../managers/httpService";

export default {
    getProductById,
    getAllProductItemsByQuery,
    updateProduct,
    deleteProduct,
    addProduct
}

function getHeaders() {
    return {'Content-Type': httpConstants.CONTENT_TYPE.APPLICATION_JSON}
}

async function getAllProductItemsByQuery(requestObj) {
    let url = process.env.REACT_APP_SERVICE_URL + httpConstants.API_END_POINT.GET_PRODUCT_LIST_BY_QUERY;
    return httpService(httpConstants.METHOD_TYPE.POST, getHeaders(), requestObj, url)
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

async function getProductById(productId) {
    let url = process.env.REACT_APP_SERVICE_URL + httpConstants.API_END_POINT.PRODUCT + "/" + productId;
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

async function updateProduct(requestData) {
    let url = process.env.REACT_APP_SERVICE_URL + httpConstants.API_END_POINT.PRODUCT;
    return httpService(httpConstants.METHOD_TYPE.PUT, getHeaders(), requestData, url)
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

async function deleteProduct(productId) {
    let url = process.env.REACT_APP_SERVICE_URL + httpConstants.API_END_POINT.PRODUCT + "/" + productId;
    return httpService(httpConstants.METHOD_TYPE.DELETE, getHeaders(), {}, url)
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

async function addProduct(requestData) {
    let url = process.env.REACT_APP_SERVICE_URL + httpConstants.API_END_POINT.PRODUCT;
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