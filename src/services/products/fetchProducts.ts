import axios from "axios";

export const fetchProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products?sort=desc&limit=20");
    return res.data;
};
