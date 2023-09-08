import { createContext } from "react";

const AuthContext = createContext(null);

const AuthProvide = ({children}) => {

    const user = {name : 'Aporna'}
    return (
        <AuthContext.Provider value={user}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvide;