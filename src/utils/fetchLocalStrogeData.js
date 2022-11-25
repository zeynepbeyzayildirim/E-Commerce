export const fetchUser = () => {
    const userInfo =
    localStorage.getItem('user') !== "undefinfed" ?
    JSON.parse(localStorage.getItem("user"))
    :localStorage.clear();
    

    return userInfo;
}