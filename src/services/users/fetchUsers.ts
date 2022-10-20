import axios from "axios";

export const fetchUsers = async () => {
    const res = await axios.get("https://fakestoreapi.com/users?sort=desc");
    return res.data;
};
