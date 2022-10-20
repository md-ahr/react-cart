import axios from "axios";

export const fetchCarts = async () => {
    const res = await axios.get(
        "https://fakestoreapi.com/carts"
    );
    return res.data;
};
