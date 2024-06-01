import { useState } from "react"

function App() {
  const[color,setcolor]=useState("Olive");
   return (
    <>
    <div className="b1 bg-slate-900 flex justify-center items-center font-bold text-white p-4 rounded-xl">
      WELCOME TO COLOUR CHANGER GAME
    </div>
      <div className="box1 min-h-[83vh]" style={{backgroundColor:color}}>
        
      </div>
      <div className="box2 bg-slate-900 flex gap-4 p-4 rounded-xl justify-between">
        <button className="bg-red-600 p-3 rounded-2xl font-bold" onClick={()=>setcolor("Red")}>RED</button>
        <button className="bg-blue-900 p-3 rounded-2xl font-bold" onClick={()=>setcolor("Blue")}>BLUE</button>
        <button className="bg-green-900 p-3 rounded-2xl font-bold" onClick={()=>setcolor("Green")}>GREEN</button>
        <button className="bg-white p-3 rounded-2xl font-bold" onClick={()=>setcolor("White")}>WHITE</button>
        <button className="bg-black p-3 rounded-2xl font-bold text-white" onClick={()=>setcolor("Black")}>BLACK</button>
        <button className="bg-yellow-300 p-3 rounded-2xl font-bold" onClick={()=>setcolor("Olive")}>OLIVE</button>
      </div>
    </>
  )
}

export default App
