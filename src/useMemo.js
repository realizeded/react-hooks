import React,{useState,useMemo,useCallback,memo} from 'react';

const Tab = memo(function Tab() {
    console.log(1);
    return (<div>12</div>)
});
function App(props) {
/**
 * useMemo和useCallback都是一种优化手段
 * 但是react也没有说那段逻辑一定会执行或者一定不会执行
 */
    const [count,setCount] = useState(()=>0);
    //如果依赖项变了 那么逻辑会重复执行
    
  /*   const double = useMemo(()=>{
        return count*2;
    },[count]); */

    const handleClick = useCallback(()=>{
   
            setCount(count=>count+1);
        
    },[count===4]);
    return (
        <button onClick={handleClick}> {/*如果值还是原来的值 则不会重新渲染页面*/}
        <Tab jj={handleClick}/>
            {count}
            </button>
    );
}
export default App;