import { useState } from 'react';
import { Header } from 'semantic-ui-react';
import {Counter} from './component/Counter.jsx'

function App() {
  const[count,setCount] = useState(0)
  return (
    <>
    <div style={{display: "flex",textAlign: "center",justifyContent:"center",alignItems: "center",minHeight:"80vh"}}>
    <Counter count={count} setCount={setCount}></Counter>
    </div>
    <Header textAlign='center' as="h3">Done by:- Abhijeet Sinha-12002174</Header>
    </>
  );
}

export default App;
