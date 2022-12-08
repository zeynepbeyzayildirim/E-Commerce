export const fetchUser = () => {
    const userInfo =
    localStorage.getItem('user') !== "undefinfed" ?
    JSON.parse(localStorage.getItem("user"))
    :localStorage.clear();
    

    return userInfo;
}

export const fetchCart = () => {
    const cartInfo =
    localStorage.getItem('cartItems') !== "undefinfed" ?
    JSON.parse(localStorage.getItem("cartItems"))
    :localStorage.clear();
    

    return cartInfo ? cartInfo : [];
}