import { useState } from "react"
import { useNavigate } from "react-router-dom";



const Auth = () => {

  const navigate = useNavigate();
  const [age,setAge] = useState("")
  const [right,setRight] = useState(false)
  const [error,setError] =  useState()


  function lettertoNumber (e) {

  const value = e.target.value

    if (value === "" || /^\d+$/.test(value) ) {
      setAge(value);

    }

  }

   function finalCheck () {

    if (age.trim()==""){
      setError(
        "Enter a valid Age"
      )
      return;
    }

    if (age < 18  ){
      setError(
        "You are Not 18 + "
      )
      return;
    }

    if ( right == false ) {
      setError(
        "Please confirm you are 18+"
      )
      return;
    }

      setError("");      
      navigate("/lam");


     
   

  }

 

  return <div className="">

  <div className="min-h-screen w-full bg-[#0a0a0a] relative flex justify-center items-center">

  <div
    className="absolute inset-0 z-0 "
    style={{
      backgroundImage: `
        radial-gradient(ellipse at 20% 30%, rgba(56, 189, 248, 0.4) 0%, transparent 60%),
        radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 70%),
        radial-gradient(ellipse at 60% 20%, rgba(236, 72, 153, 0.25) 0%, transparent 50%),
        radial-gradient(ellipse at 40% 80%, rgba(34, 197, 94, 0.2) 0%, transparent 65%)
      `,
    }}
  />


 <div className="h-76 flex flex-col justify-center items-center  w-96 rounded-xl  border-gray-500 bg-white/10 backdrop-blur-[2px]
      border boder-white/10
      before:content-[' '] 
      before:absolute">
    

    <div 
    className="flex items-center justify-center ">
      <p className="font-normal bg-white/10 backdrop-blur-[2px]
      border boder-white/10
      before:content-[' '] 
      before:absolute text-xl border border-b-black rounded-xl p-1.5">Enter you age</p>
    <input 
    className="rounded-lg border border-b-black w-13 ml-4 p-1.5 bg-white/10 backdrop-blur-[2px]
      border boder-white/10
      before:content-[' '] 
      before:absolute   pl-2  "
    type="text"
    placeholder="Age"
    value={age}
    onChange={lettertoNumber}
    />
    </div>

    <div className="mt-8 flex items-center justify-center">
      <p className="bg-white/10 backdrop-blur-[2px]
      border boder-white/10
      before:content-[' '] 
     before:absolute border-b-black rounded-xl mr-5 w-30 h-10 pt-1.5 font-bold  pl-4">Are You 18+</p>

    <div className="">
       <input type="checkbox" 
      checked={right}
       onChange={(b)=>setRight(b.target.checked)}
      className="scale-300 ml-4 accent-black cursor-pointer "
     />
    </div>
 
    </div>

      <div className="mt-5">
          <p className="text-xl font-medium ">
             {error}
          </p>
      </div>

   </div>


    <div className="mt-8 ml-3 ">
       <button
     className="border border-b-black w-30 h-8 rounded-2xl bg-white/10 backdrop-blur-[2px]
     boder-white/10
      before:content-[' '] 
      before:absolute " onClick={finalCheck}>Enter</button>
    </div>
   
   </div>

   </div>


}

export default Auth