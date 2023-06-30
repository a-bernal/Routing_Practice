import React from "react";
import { useParams } from "react-router-dom";


const OtherComponent = (props)=>{

    const {word, color, bgCol} = useParams();



    return(
        <div>

            {
                isNaN(word)?
                <p style={
                    color?
                    {color: color, backgroundColor: bgCol}
                    :null
                }>
                    The word is: {word}
                </p>
                :
                <p>
                    The nuber is: {word}
                </p>
            }

        </div>
    )
}

export default OtherComponent;