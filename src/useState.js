import React,{useState} from 'react';
function App(props) {
    /**
     * 1.react怎么知道是返回这个组件的count    
     * js单线程,所以此时的上下文来标识 
     * 2.组件怎么知道返回的是count还是namw
     * useState的执行顺序
     * */

     /* 
     不能动态的更改执行数量
     */
    const [count,setCount] = useState(()=>100); // 默认值第一次有效 可以为函数但只会执行一次
    const [name,setName] = useState(10); 
    return (
        <button onClick={()=>{setCount(count+1);setName(name+2)}}> {/*如果值还是原来的值 则不会重新渲染页面*/}
            click:{count}---{name}
            </button>
    );
}
export default App;