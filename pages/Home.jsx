import React from "react"
import { lastMap } from "../src/constants"
import { useState } from "react"
import { typelist } from "../src/constants"
import { tabledata } from "../src/constants"
import { tableheading } from "../src/constants"
import { calculatordata } from "../src/constants"
const Home = () => {
   const [count, setcount] = useState()
   const [input, setInput] = useState("");
   const [prevValue, setPrevValue] = useState("");
   const [operator, setOperator] = useState("");
 
   const handleButtonClick = (button) => {
      const { id, title } = button;
      if (id === "1") {
         setInput("");
         setPrevValue("");
         setOperator("");
      } else if (id === "2") {
         setInput(input.slice(0, -1));
      } else if (["+", "-", "*", "/"].includes(title)) {
         if (input === "") return;
         setPrevValue(input);
         setOperator(title);
         setInput("");
      } else if (id === "18") {
         if (input === "" || prevValue === "" || operator === "") return;

         const num1 = parseFloat(prevValue);
         const num2 = parseFloat(input);
         let result;
         switch (operator) {
            case "+":
               result = num1 + num2;
               break;
            case "-":
               result = num1 - num2;
               break;
            case "*":
               result = num1 * num2;
               break;
            case "/":
               result = num2 !== 0 ? num1 / num2 : "Error";
               break;
            default:
               return;
         }

         setInput(result.toString());
         setPrevValue("");
         setOperator("");
      } else {
         setInput(input + title);
      }
   };
   return (
      <>
         <div className="custmContainer ">
            <h1 className="bg-amber-900 mt-10 text-2xl text-white text-center p-5 rounded-lg"><marquee behavior="alternate" scrollamount="12" direction="left">This page is made only for practice purpose</marquee></h1>
         </div>
         <div className="custmContainer md:grid md:grid-cols-2 grid grid-cols-1 lg:flex gap-20">
            {
               lastMap.map((mappractice) => {
                  return (
                     <div key={mappractice?.id} id={`my-${mappractice?.id}`} className="bg-red-600  w-fit m-auto text-2xl text-white rounded-2xl mt-20 p-5">
                        <h1>{mappractice?.heading}</h1><p className="text-lg text-white leading-5 mt-2">{mappractice?.paragraph}</p><h2>{mappractice?.headtitle}</h2>
                        <img className="w-[200px] mt-4 m-auto h-[200px]" src={mappractice?.img} alt="imgs" />
                     </div>
                  )
               })
            }
         </div>
         {/* map function end  */}
         <div className="custmContainer">
            <div className="bg-blue-600 m-auto mt-10 rounded-lg text-white w-fit h-fit shadow-amber-300 p-10">
               <h2 className="text-2xl">this is statehook example</h2>
               <p id="example">you have click {count} times</p>
               <button className="bg-white text-black font-medium p-2 mt-4 rounded-lg text-xl" id="button" onClick={() => setcount(count + 1)}> Click for Increase Value</button>
               <button className="bg-white text-black font-medium p-2 mt-4 rounded-lg text-xl" id="button" onClick={() => setcount(count - 1)}> Click for Decrease Value</button>

            </div>
         </div>
         <div className="custmContainer">
            <div className="w-fit m-auto mt-10 mb-10">
               <div className="flex items-center gap-2 ">
                  <img className="w-[100px] h-[100px] rounded-full" src="https://wallpaperaccess.com/full/2251357.jpg" alt="img" />
                  <div>
                     <h2 className="text-lg font-medium">Yo YO Honey Singh</h2>
                     <p className="text-[#e5e6eb]">1 mutual Friend</p>
                  </div>
               </div>
               <div className="flex items center justify-start gap-2 mt-2">
                  <button className="bg-blue-400 text-white px-10 py-2  font-medium rounded-sm">Confirm</button>
                  <button className="bg-[#e5e6eb] text-black  px-10 py-2 font-medium rounded-sm">Delete</button>
               </div>
            </div>
         </div>
         <section className="bg-[#111827]  py-8">
            <div className="bg-white py-4 mb-10">
               <div className="custmContainer flex  justify-between">
                  <div className="main flex items-center gap-5">
                     <div>
                        <img src="src/assets/react.svg" alt="img" />

                     </div>
                     <div>
                        <select className="bg-[#111827] py-1 px-3 text-white text-lg font-medium rounded-lg">All user
                           <option>user 1</option>
                           <option>user 2</option>
                           <option>user 3</option>
                           <option>user 4</option>
                        </select>
                     </div>
                  </div>
                  <div>
                     <button className="bg-primary py-2 px-3 rounded-lg text-white font-medium">Create Account</button>
                  </div>
               </div>
            </div>


            {/* this is like a jugad method its not a table -----------------------------------------*/}
            <div className="custmContainer">
               <ul className=" flex flex-wrap  tems-center gap-y-6 m-auto bg-[#111827] justify-center px-5 py-2">
                  {
                     typelist.map((mylist) => {
                        return (
                           <li className="text-xl w-[20%]  bg-[#1f2937] py-2 text-center items-center flex text-white font-normal" key={mylist?.id}>
                              <div className="flex items-center text-left gap-3 leading-7">



                                 {/* never use this something went wrong  */}
                                 {
                                    mylist?.id == 6 &&
                                    <img className=" w-[50px] h-[50px] rounded-full" src={mylist?.Image} alt="img" />
                                 }
                                 {
                                    mylist?.id == 11 &&
                                    <img className=" w-[50px] h-[50px] rounded-full" src={mylist?.Image} alt="img" />
                                 }
                                 {
                                    mylist?.id == 16 &&
                                    <img className=" w-[50px] h-[50px] rounded-full" src={mylist?.Image} alt="img" />
                                 }
                                 <div>
                                    <div>
                                       {mylist?.title}
                                    </div>
                                    <div>
                                       {mylist?.mail}
                                    </div>
                                 </div>
                              </div>
                              <button className={` ${mylist?.id == 9 ? "bg-green-500" : mylist?.id == 19 ? "bg-yellow-400" : mylist?.id == 14 ? "bg-red-500" : "bg-black"} px-3 rounded-sm cursor-progress`}>{mylist?.button}</button>
                              <span className="cursor-pointer">{mylist?.icon}{mylist?.icon2}{mylist?.icon3}</span>
                           </li>
                        )
                     })
                  }
               </ul>
            </div>
         </section>
         {/*  ---------------------------------------------------------------------------- */}
         <section className="custmContainer">
            <div className="bg-white py-8">
               <table className="w-full text-center">
                  <thead>
                     <tr>
                        {tableheading.map((head) => {
                           return (
                              <th className="border-primary border-2 py-2" key={head?.id}>{head?.heading}</th>
                           )
                        })
                        }
                     </tr>
                  </thead>
                  <tbody>
                     {
                        tabledata.map((table) => {
                           return (
                              <tr key={table?.id} className="border-primary border-2 py-2 ">
                                 <td className="m-auto py-4 border-primary border-2">{table.brandName}<img className="w-[50px] m-auto h-[50px] rounded-full" src={table.Image} alt="image" /></td>
                                 <td className="border-primary border-2">{table.email}</td>
                                 <td className="border-primary border-2">{table.mobile}</td>
                              </tr>
                           )
                        })
                     }
                  </tbody>
               </table>
            </div>
         </section>


         {/*Basic  calculator start here */}
         {/*Basic  calculator start here */}
         <section className="py-10 bg-[#111dc5]">
            <div className="flex items-center justify-center">
               <div className="calculator bg-white rounded-lg p-4 w-[270px] m-auto mt-10 shadow-lg">
                  <input
                     type="text"
                     value={input}
                     readOnly
                     className="outline-0 text-white text-lg border-2 p-2 w-full bg-black rounded-lg"
                  />
                  <div className="mt-4 mx-0 grid grid-cols-4 gap-2">
                     {calculatordata.map((button) => (
                        <button
                           key={button.id}
                           onClick={() => handleButtonClick(button)}
                            className="p-2 text-white bg-[#5b5e99] w-full h-[50px] text-lg rounded-lg"
                        >
                           {button.title}
                        </button>
                     ))}
                  </div>
               </div>
            </div>
         </section>
         

         <section className="p-30 flex m-auto">
            <div className="custmcontainer flex gap-4 m-auto">
               <div className=" gap-2 text-center grid">
                  <label className="text-xl text-blue-900  font-medium">Days</label>
                  <input type="text" readOnly className="border-2 border-primary h-[100px] w-[100px] rounded-lg px-2 outline-0 bg-green-700" />
               </div>
               <div className=" gap-2 text-center grid">
                  <label className="text-xl text-blue-900  font-medium">Hours</label>
                  <input type="text" className="border-2 border-primary h-[100px] w-[100px] px-2 rounded-lg outline-0 bg-green-700" />
               </div>
               <div className=" gap-2 text-center grid">
                  <label className="text-xl text-blue-900  font-medium">Minutes</label>
                  <input type="text" className="border-2 border-primary h-[100px] w-[100px] rounded-lg px-2 outline-0 bg-green-700" />
               </div>
               <div className="gap-2 text-center grid">
                  <label className="text-xl text-blue-900  font-medium">Seconds</label>
                  <input type="text" className="border-2 border-primary h-[100px] w-[100px] rounded-lg px-2 outline-0 bg-green-700" />
               </div>
            </div>
         </section>
      </>
   )
}
export default Home