import axios from "axios";

const api = axios.create({
  baseURL: "https://str8bat-backend.onrender.com/api",
});

export const signup = (data) => api.post("/auth/signup", data);
export const login = (data) => api.post("/auth/login", data);
export const getProfile = (token) =>
  api.get("/profile/me", {
    headers: { Authorization: token },
  });
// export const getProfile = async () => {
//   const token = localStorage.getItem("token");
//   try {
//     const response = await api.get("/profile/me", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching profile:", error);
//     throw error;
//   }
// };
export const updateProfile = (data, token) =>
  api.put("/profile/me", data, {
    headers: { Authorization: token },
  });
export const deleteAccount = (token) =>
  api.delete("/profile/me", {
    headers: { Authorization: token },
  });
