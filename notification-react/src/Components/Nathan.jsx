export default function Nathan({img5, title5, paragraph5, strong5,strongss}){

    return(
        <>
            <div className="nathan-pererson">
                <img src= {img5} alt= {title5} />
                <div id="p5">
                    <p>
                        <strong>{strong5}</strong>{title5} <br /> 
                        <strong>{strongss}</strong>
                    </p>
                    <p>
                        {paragraph5}
                    </p>
                </div>
            </div>
        </>
    )
}