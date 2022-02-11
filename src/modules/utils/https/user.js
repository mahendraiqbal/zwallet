import axios from "axios";
// const api = process.env.NEXT_PUBLIC_API_URL + "/user"

// export const getUser = (filter, token) => {
//     const url = api + filter;
//     return axios.get(url, {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     });
// };

export const getUser = (filter, token) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/user${filter}`;
    return axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};