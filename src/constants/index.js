/**
 * Created by Sunny Kumar on 01/01/2022.
 */


export const httpConstants = {
    METHOD_TYPE: {
        POST: 'POST',
        PUT: 'PUT',
        GET: 'GET',
        DELETE: 'DELETE',
    },
    CONTENT_TYPE: {
        APPLICATION_JSON: 'application/json',
        MULTIPART_FORM_DATA: 'multipart/form-data',
        APPLICATION_FORM_URLENCODED: 'application/x-www-form-urlencoded',
        IMAGE_PNG: 'image/png'
    },
    DEVICE_TYPE: {
        WEB: 'web'
    },
    API_END_POINT: {
    }
};

export const apiSuccessConstants = {
    DELETE_DOCUMENT: "Document has been deleted successfully ",
};
export const apiFailureConstants = {
    GET_STORE_ITEM_LIST: "Unable to fetch Store item List!",
};



export const sessionConstants = {
    FAVOURITE_LIST: 'favouriteList'
};
