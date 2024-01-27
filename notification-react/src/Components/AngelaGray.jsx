import React, { forwardRef, useState } from "react";

const AngelaGray = forwardRef(({
    img2, 
    title2, 
    paragraph2,
    strong2, 
    unread,
    onClick
}, 
    ref) => {

    const [isUnread, setUnread] = useState(false);

    function setUnreadMessage(){
        setUnread(true);
        if(!isUnread){
            onClick();
        }
    };

    return(
        <>
            <div className= {`angela-gray ${ isUnread  ? 'active': ''} 
                ${!unread ? 'active': undefined}  `} 
                ref={ref} onClick={setUnreadMessage} >
              
                <img src={img2} alt= {title2} />
                <div id="p2">
                    <p><strong>{strong2}</strong> {title2}</p>
                    <p>{paragraph2}</p>
                </div>
               
            </div>
        </>
    );
});

export default AngelaGray