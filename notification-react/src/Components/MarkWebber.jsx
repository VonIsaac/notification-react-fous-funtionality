import React,{ forwardRef, useState } from "react"

 const MarkWebber = forwardRef (({
    img, 
    title, 
    paragraph,
    strong, 
    strongz, 
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
     
            <div className= {`mark-webber ${ isUnread ? 'active': ''} 
                ${!unread  ? 'active': undefined} `} 
                ref={ref} onClick={setUnreadMessage }>
            
                <img src= {img} alt= {title} />
                <div id="p1">
                    <p><strong>{strongz}</strong>{title} <strong>{strong}</strong></p>
                    <p >{paragraph}</p>
                </div>   
                
            </div>
        
        </> 
    );
});

export default MarkWebber