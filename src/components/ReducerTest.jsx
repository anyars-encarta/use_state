import { useContext, useReducer } from "react";
import RoleContext from "../../context/RoleContext";

const ReducerTest = ({ click, setClick }) => {
    const { role, setRole } = useContext(RoleContext);

    const initialState = { count: 0 };

    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return { count: state.count + 1 }
            case "decrement":
                return { count: state.count - 1 }
            default:
                return state
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>The role from the context is: {role}</h1>
            <p>This is from the App.jsx {click}</p>
            <span>Count: {state.count}</span>
            <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>

            <button onClick={() => setClick(click + 1)}>Update State from Parent</button>

            <button onClick={() => setRole("admin")}>Set New Role</button>
        </div>
    )
}

export default ReducerTest
