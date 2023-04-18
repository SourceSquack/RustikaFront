import React, {useState, useContext, createContext} from "react";
import Cookie from 'js-cookie';

const AuthContext = createContext();

export function ProviderAuth({children}) {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
}

function useProvideAuth(params) {
    const [user, setUser] = useState(null);
    
    const signIn = async (user, password) => {
        try {
            const options = {
                headers: {
                    accept: '*/*',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({user, password})
            };
            const {data: accessToken} = await fetch('https://jjgcwluyy7.execute-api.us-west-2.amazonaws.com/login', options);
            if(accessToken){
                const token = accessToken.accessToken;
                Cookie.set('token', token, {expires: 7});
                console.log(token);

                // axios.defaults.headers.Authorization = ` Bearer ${token}`;
                // const {data: user} = await axios.get(endPoints.auth.profile);
                // console.log(user);
                // setUser(user);
            } 
        } catch (error) {
            throw Error("Unauthorized");
        }
    };

    return {
        user,
        signIn,
    }
}