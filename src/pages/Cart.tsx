import { useQuery } from "react-query";
import { fetchCarts } from "../services/carts/fetchCarts";

const Cart = () => {
    const { data, error, isLoading } = useQuery("cartList", fetchCarts) || [];

    console.log(data);

    return (
        <div>
            {data &&
                data.map((d: any) => (
                    <div key={Math.random() * 1000}>
                        {d.products &&
                            d.products.map((product: any) => (
                                <div
                                    key={Math.random() * 1000}
                                    className="my-6 flex flex-col items-center bg-white rounded-lg border shadow md:flex-row w-full dark:border-gray-700 dark:bg-gray-800"
                                >
                                    <div className="flex flex-col justify-between p-4 leading-normal">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {product.quantity}
                                        </h5>
                                    </div>
                                </div>
                            ))}
                    </div>
                ))}
        </div>
    );
};

export default Cart;
