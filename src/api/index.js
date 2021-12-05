import axios from 'axios';

const config = {
    baseUrl: 'https://api.hnpwa.com/v0',
};

function fetchNewsList() {
    return axios.get(`${config.baseUrl}/news/1.json`);
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}/ask/1.json`);
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}/jobs/1.json`);
}

function fetchUserInfo(userName) {
    return axios.get(`${config.baseUrl}/user/${userName}.json`);
}

function fetchItemInfo(id) {
    return axios.get(`${config.baseUrl}/item/${id}.json`);
}

function fetchList(resource) {
    if (resource === 'news' || resource === 'ask' || resource === 'jobs') {
        return axios.get(`${config.baseUrl}/${resource}/1.json`);
    } else {
        throw new Error("Resource Type error");
    }
}

export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchItemInfo,
    fetchList
}