import axios from "axios"

export const getHistory = (query, token) => {
    const url = process.env.NEXT_PUBLIC_API_URL + "/transaction/history";
    return axios.get(url.concat(query), {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const topUp = (body, token) => {
    const url = process.env.NEXT_PUBLIC_API_URL + "/transaction/top-up";
    return axios.post(url, body, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
};

export const transfer = (body, token) => {
    const url = process.env.NEXT_PUBLIC_API_URL + "/transaction/transfer";
    return axios.post(url, body, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
};

export const historyTransactionById = (id, token) => {
    const url = process.env.NEXT_PUBLIC_API_URL + "/history/" + id;
    return axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
};