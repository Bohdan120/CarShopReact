import { createContext, useState } from "react";

export const AccountsContext = createContext({
   
    email: null,
    isAuth: null,

    login: (user) => null,
    logout: () => null
});

export const AccountsProvider = ({ children }) => {

    const [email, setEmail] = useState(null);
    const [isAuth, setAuth] = useState(false);

    const login = (user) => {
        setEmail(user.email);
        setAuth(true);
    }
    const logout = () => {
        setEmail(null);
        setAuth(false);
    }

    const value = { email, isAuth, login, logout }

    return <AccountsContext.Provider value={value}>{children}</AccountsContext.Provider>
}