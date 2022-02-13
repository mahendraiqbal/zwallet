import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL + "/user"

export const getUser = (token, query) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/user`;
  return axios.get(url.concat(query), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// export const getUserById = (id, token) => {
//   const url = process.env.NEXT_PUBLIC_API_URL + "/user/profile/" + id;
//   return axios.get(url, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

export const getUserById = (token, id) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/user/profile/`;
  return axios.get(url.concat(id), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// export const getUserById = (id, token) => {
//   // console.log(id)
//     return axios.get(url.concat(id)("/profile"), {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     })
// }

// export const getUser = (token) => {
//     const url = process.env.NEXT_PUBLIC_URL_API + "/user";
//     return axios.get(url, {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     });
// };
