export default function RizkyHasanuddin ({img4, title4, paragraph4, strong4}){

    return(
        <>
            <div className="rizky-hasanuddin ">
                <img src= {img4} alt= {title4} />
                <div id="p4">
                    <p><strong>{title4}</strong>{strong4}</p>
                    <p>{paragraph4}</p>
                </div>
            </div>
        </>
    )
}