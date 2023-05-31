import { createContext, useState } from "react";

export const Context = createContext()

export const Provider = ({children}) => {

    const [userInfo, setUserInfo] = useState([])

    return(
        <Context.Provider value={{userInfo, setUserInfo}}>
            {children}
        </Context.Provider>
    )

}