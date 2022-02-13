import {httpConstants} from "../constants";
import {httpService} from "../managers/httpService";

export default {
    getAllProductItems
}

function getHeaders() {
    return {'Content-Type': httpConstants.CONTENT_TYPE.APPLICATION_JSON}
}

async function getAllProductItems({limit, skip}) {
    let url = `${process.env.REACT_APP_SERVICE_URL}/products?limit=${limit}&Skip=${skip}`;
    return httpService(httpConstants.METHOD_TYPE.GET, getHeaders(), {}, url)
        .then(
            response => {
                if (!response || response.length === 0)
                    return Promise.reject();
                return Promise.resolve(response);
            }
        ).catch(function (err) {
            return Promise.reject(err);
        });
}