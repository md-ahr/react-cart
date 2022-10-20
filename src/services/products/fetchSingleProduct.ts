import axios from "axios";

export const fetchSingleProduct = async (id: any) => {
    const res = await axios.get(
        `https://fakestoreapi.com/products/${id}`
    );
    return res.data;
};
