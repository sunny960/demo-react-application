import {httpConstants} from "../constants";

export const httpService = (method, headers, data, url) => {
    const requestOptions = {
        method: method,
        headers: headers || {'Content-Type': 'application/json'}
    };

    if (method !== httpConstants.METHOD_TYPE.GET)
        requestOptions.body = JSON.stringify(data);

    return fetch(url, requestOptions)
        .then(function handleResponse(response) {

            //in case API is down-
            if (!response || !response.ok)
                return Promise.reject("Unable to fetch data");

            return response.text().then(responseText => {

                if (!responseText)
                    return Promise.reject(responseText);

                let data;
                try {
                    data = typeof responseText === 'object' ? responseText : JSON.parse(responseText);
                    if (data && !data.success)
                        return Promise.reject(data.message);

                } catch (err) {
                    return Promise.reject(err)
                }
                return data;
            });
        }).catch(function (err) {
            return Promise.reject(err);
        })

};
