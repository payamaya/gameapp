import { useParams } from "react-router";

const MemicDunjan = () =>{
    const params = useParams();
//  <---- This was to see what page id i was on !! 
   
    return <div>
   <p>{params.pageId} </p>  
   <p>{params.pageId}</p>  
        

    </div>
}
export default MemicDunjan;