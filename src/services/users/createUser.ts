import axios from "axios";

export const createUser = async (body: {}) => {
    const res = await axios.post(
        "https://fakestoreapi.com/users?sort=desc",
        body
    );
    return res.data;
};
