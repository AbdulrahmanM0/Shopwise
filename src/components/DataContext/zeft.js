import { useSelector, useDispatch } from "react-redux";
import BuyCake from "./Reducers/cakeaction";

function Cake() {
    const nofc = useSelector((state)=>state.mofcakes)
    const dispatch = useDispatch();

    return ( 
        <>
        <h1>{nofc}</h1>
        <button onClick={()=>{dispatch(BuyCake())}}>mfdmfmmf</button>
        </>
     );
}

export default Cake;