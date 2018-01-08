import React  from 'react';
import Recomend from './recomend';


function Recomends(props){
    return(
        <div>
            {
                props.recomends.map((item)=>{
                    <Recomend key={item.id}/>
                })
            }
        </div>
    )
}

export default Recomends;