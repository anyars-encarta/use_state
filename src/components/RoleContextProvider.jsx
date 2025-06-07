import { useState } from "react";
import RoleContext from "../../context/RoleContext";

const RoleContextProvider = ({ children }) => {
    const [role, setRole] = useState("guest");

    return (
        <RoleContext.Provider value={{ role, setRole }}>
          {children}
        </RoleContext.Provider>
    );
}

export default RoleContextProvider;