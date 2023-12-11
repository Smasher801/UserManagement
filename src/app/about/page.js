import React from 'react'

const takeTime = async () => {
    
    return await new Promise((resolve)=>{
         setTimeout(resolve,3000);
    })

}

const AboutPage = async() => {
   await takeTime();
//    throw new Error("new error");
// this above line we are using is to see the effect of the error.js 
  return (
    <div>AboutPage</div>
  )
}

export default AboutPage;