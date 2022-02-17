import React from "react";
import PageLayout from "../../layouts/PageLayout";
import { useCartContext } from "../../contexts/CartContext";

const Cart = () => {
    const { cart, removeFromCart } = useCartContext();

    return (
        <PageLayout>
            {cart.length ? (
                <>
                    {cart.map((item: any, index: number) => (
                        <div className="cart__item" key={index}>
                            <div className=" flex flex__spaced">
                                <div>
                                    <p>
                                        <span className="fw-600 fs-20 mb-1">
                                            {item.name} -{" "}
                                            <span className="text-capitalize text__orange fs-14">
                                                {item.size}
                                            </span>
                                        </span>
                                    </p>
                                    <p className="text__mid-grey">
                                        {item.price}
                                    </p>
                                </div>

                                <div className="w-6">
                                    <img src={item.image} alt={item.alt} />
                                </div>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.name)}
                                className="cart__button cursor-pointer"
                            >
                                Remove from cart
                            </button>
                        </div>
                    ))}
                    <button className="cart__proceed-btn cursor-pointer">
                        PROCEED TO CHECKOUT
                    </button>
                </>
            ) : (
                <p className="fw-600 fs-29 text-center mt-4">
                    Cart is empty...
                </p>
            )}
        </PageLayout>
    );
};

export default Cart;
