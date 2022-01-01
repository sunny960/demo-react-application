/**
 * Created by Sunny Kumar on 01/01/2022.
 */

import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const sessionManager = {
    setDataInCookies,
    getDataFromCookies,
    removeDataFromCookies,
    setDataInLocalStorage,
    getDataFromLocalStorage
};
export default sessionManager;

function setDataInLocalStorage(data, key) {
    localStorage[key] = JSON.stringify(data);
}

function getDataFromLocalStorage(key) {
    try {
        return localStorage[key] ? JSON.parse(localStorage[key]) : false;
    } catch (err) {
        return false;
    }
}
function setDataInCookies(data, key) {
    cookies.set(key, JSON.stringify(data), {path: '/'});
}

function getDataFromCookies(key) {
    return cookies.get(key)
}

function removeDataFromCookies(key) {
    cookies.remove(key, {path: '/'});
}