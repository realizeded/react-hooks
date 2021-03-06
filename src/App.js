import React,{useState,useRef,useEffect} from 'react';

function useCount() {
    const [count,setCount] = useState(()=>0);
    
    const ref = useRef(); 
    useEffect(()=>{
        ref.current = window.setInterval(()=>{
            setCount(count=>{
                if(count+1===10) {
                    window.clearInterval(ref.current);
                }
                return count+1;
            })
           
        },1000);
    },[]);
    return (
        <button ref={ref}>
            {count}
        </button>
   );
}
function App(props) {
 
    const ele = useCount();
    return ele;
}
export default App;