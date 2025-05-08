import React from "react";
import { boxes } from "../constants";
const Boxes = () => {
     return  (
        <>
            <div className="custmContainer flex justify-between items-center gap-10">
                {
                    boxes.map ((mymapfunction)=> {
                            return (
                                <div className="text-center mt-10  bg-red-600 text-white rounded-2xl font-medium capitalize p-10"
                                 key={mymapfunction?.id}>
                                {mymapfunction?.title}{mymapfunction?.paragraph} <img src={mymapfunction?.image} alt="image" /> 
                                </div>
                            )
                    })
                     }
            </div>
        </>
     )
}

export default Boxes