import { useMemo, useState } from "react"
import { UserContext } from "./UserDetails"


export const UserProvider =  ({ children }) => {

    const [user, setUser] = useState(null);
    
    const providerValue = useMemo(() => ({user, setUser}), [user, setUser]);
 
    return (
        <UserContext.Provider value={providerValue}>
            {children}
        </UserContext.Provider>
    )
}