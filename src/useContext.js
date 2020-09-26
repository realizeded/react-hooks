import React,{useState,createContext,useContext} from 'react';
const countContext = createContext(10);


/* class Tab extends React.Component {
    static contextType = countContext
    render() {
        const {count} = this.context;
        
        return (<div>{count}</div>)
    }
} */
/* class Tab extends React.Component {
    render() {
        
        return (<div>
            <countContext.Consumer>
                {
                    c=>(<div>{c.count}</div>)
                }
                </countContext.Consumer>
        </div>)
    }
} */
function Tab(props) {
    const context = useContext(countContext);
    return (<div>
        {context.count}
    </div>)
}
function App(props) {

    const [count,setCount] = useState(()=>10);

    return (
        <button onClick={()=>{setCount(count+1);}}> {/*如果值还是原来的值 则不会重新渲染页面*/}
           <countContext.Provider value={{count}}>
               <Tab/>
               </countContext.Provider>
            </button>
    );
}
export default App;