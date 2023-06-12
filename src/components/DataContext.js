import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const DataCenter = createContext();


function DataContext(props) {
    const [products,setProducts] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:4000/posts').then(res=>setProducts(res.data))
      
    },[products])
    
    
    return (
        <>
        <DataCenter.Provider value={products}>
            {props.children}
        </DataCenter.Provider>
        
        </>
    )
}
export default DataContext;