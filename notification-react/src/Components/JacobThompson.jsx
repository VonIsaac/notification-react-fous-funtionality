import React, { forwardRef, useState } from "react"

const JacobThompson = forwardRef(({
    img3, 
    title3, 
    paragraph3, 
    strong3,
    strongs, 
    unread, 
    onClick
}, 
    ref) => {

    const [isUnread, setUnread] = useState(false);
    
    function setUnreadMessage(){
        setUnread(true)
        if(!isUnread){
            onClick();
        }
    }

    return(
        <>
        <div className= {`jacob-thompson ${ isUnread ? 'active': ''}
             ${!unread ? 'active': undefined}  `} 
             ref={ref} onClick={setUnreadMessage}>
            
            <img src= {img3} alt= {title3} />
            <div id="p3">
                <p><strong>{strong3}</strong>{title3} <strong>{strongs}</strong></p>
                <p>{paragraph3}</p>
            </div>    
        </div>
        </>
    );
});

export default JacobThompson