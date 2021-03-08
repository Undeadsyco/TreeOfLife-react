import React from 'react';

const Root =(props)=>{
    return(
        <div className={props.box}>
            <h3>{props.group}</h3>
            <img src={props.src} alt="" width={200} height={200}/>
            <p>{props.info}</p>
        </div>
    )
}

export default Root;