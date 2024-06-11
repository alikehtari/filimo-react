import { useReducer, useRef } from "react";

const Test = () => {
    const title = useRef()
    const clickHandler = () => {
        if (title.current.classList.contains('text-yellow-300')) {
            title.current.classList.remove('text-yellow-300');
            title.current.classList.add('text-red-300');
        } else {
            title.current.classList.remove('text-red-300');
            title.current.classList.add('text-yellow-300');
        }
    }

    const initialState = {count:0}

    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
            case 'reset':
                return { count: 0 };
            default:
                throw new Error();
        }
    };
    const [count , dispatch] = useReducer(reducer , initialState )
    return (  
        <>
            <div ref={title} className="bg-black text-yellow-300 text-center m-auto w-1/2 mt-7">
                <h2>Hello</h2>
                <button onClick={()=>clickHandler()}>Change</button>

            </div>
            <div className="w-1/2 m-auto">
                <h2>count{count.count}</h2>
                <button onClick={()=>dispatch({type:"increment"})}>+</button>
                <br />
                <button onClick={()=>dispatch({type:"decrement"})}>-</button>
                <br />
                <button onClick={()=>dispatch({type:"reset"})}>reset</button>

            </div>
        </>
    );
}
 
export default Test;
