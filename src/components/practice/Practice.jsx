import React from "react";
const Practice = ({ name, age, email, userObject }) => {
    return (

        <>
            <div className="text-left max-w-fit m-auto pb-10">
                <h1 className='text-2xl  font-medium text-center mt-10 py-2 px-4 bg-black rounded-lg text-white '>Props in React  Js with static and var</h1>
                <h1 className="text-2xl font-medium mt-2">Name:{name}</h1>
                <h1 className="text-2xl font-medium mt-2">Age:{age}</h1>
                <h1 className="text-2xl font-medium mt-2">gmail:{email}</h1>
            </div>

            <hr className="text-green-500" />

            <div className="text-left max-w-fit m-auto">
                <h1 className='text-2xl  font-medium text-center mt-10 py-2 px-4 bg-black rounded-lg text-white '>Props in React Js with Objects</h1>

                <h1 className="text-2xl font-medium mt-2">Name:{userObject.name}</h1>
                <h1 className="text-2xl font-medium mt-2">Age:{userObject.age}</h1>
                <h1 className="text-2xl font-medium mt-2">gmail:{userObject.email}</h1>
            </div>
        </>
    )
}
export default Practice