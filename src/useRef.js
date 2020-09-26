import React,{useState,useRef,useEffect} from 'react';

function App(props) {
    /**
     *两种情况使用useRef 
     *1.获取dom节点或者组件
     *2.不同周期共享数据 
     *  */
    const ref = useRef();
    // console.log(ref);
    const [count,setCount] = useState(()=>0);
    useEffect(()=>{
        ref.current = window.setInterval(()=>{
            setCount(count=>{
                if(count+1===10) {
                    window.clearInterval(ref.current);
                }
                return count+1;
            })
           
        },1000);
    },[ref]);
    return (
         <button onClick={()=>setCount(count+1)}>
             {count}
         </button>
    );
}
export default App;