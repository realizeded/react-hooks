import React,{useState,useEffect} from 'react';
function App(props) {
    /**
     * 1. 无数组 则是componentDidMount componentDidUpdate
     * 2. 空数组 则是componentDidMount 
     * 3. 数组元素值变 则是componentDidMount and ComponentDidUpdate
     * 4. 返回的回调则是 componentWillUnmount 
     */
/*     useEffect(()=>{
        console.log('mount and update');
    }); */
/*     useEffect(()=>{
        console.log('mount');
    },[]) */
    /**
     * 一句话总结:
     * 不传数组或者数组中的项改变旧会调用
     * 空数组 或者每一项都不会改变 则不会每次都调用
     */
    const [count,setCount] = useState(()=>10);
    
    useEffect(()=>{
        console.log('mount and update');
    },[count]);
    return (
        <button onClick={()=>{setCount(count+1);}}> {/*如果值还是原来的值 则不会重新渲染页面*/}
            click:{count}
            </button>
    );
}
export default App;