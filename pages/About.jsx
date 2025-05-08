import React from 'react'
import Boxes from '../src/components/Boxes'
import Practice from '../src/components/practice/practice'
import Usestate from '../src/components/practice/Usestate'
const About =  () => {
    let UserName = "Anil sidhu"  // this is var example passing prop
    let userObject = {   // this is object example passing  prop
        name:"ajay",
        age:"29",
        email:"ajay@gmail.com",
    }
    return (
        <>
        <Boxes/>
        <Practice name={UserName} age={29} email="Anil@gmail.com" userObject={userObject}/>
        <Usestate heading="This is paas from props"/>
        </>
    )
}
export default About