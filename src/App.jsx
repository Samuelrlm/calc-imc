import { FaWeightHanging } from "react-icons/fa6"
import { FaRuler } from "react-icons/fa";
import image from "./assets/fitness-tracker-animate.svg"
import { useState } from "react";

function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0) 

  function clickCalcular(){
    const valorImc = peso / (altura * altura)

    console.log(valorImc)
  }

  return (
    <div className="w-full h-screen flex bg-black">
      <div className="w-[50%] h-full flex items-center justify-center">
        <img src={image} alt="" width={700} />
      </div>
      <div className="w-[50%] h-full flex items-center justify-center">
        <div className="w-[60%] h-auto p-[20px] rounded-lg flex flex-col bg-[#1f1f1f]">
          <div className="w-full flex flex-col">
             <h1 className="text-white text-[40px] font-bold">
              Calculadora - IMC
             </h1>
             <div className="w-[200px] h-[4px] rounded-lg bg-[#20a54c]"></div>
          </div>
          <div className="w-full flex flex-col">
              <div className="mt-4">
                <label htmlFor="" className="text-white text-[18px]">Peso</label>
                <div className="w-full flex bg-[#555555] rounded-md h-[50px]">
                  <div className="w-[10%] h-full flex items-center justify-center">
                    <FaWeightHanging size={24} color="#B0B0B0FF" /> 
                  </div>
                  <div className="w-[80%] h-full">
                    <input
                      className="w-full h-full bg-transparent border-none outline-none text-white"
                      type="number"
                      onChange={
                        (event) => setPeso(event.target.value)
                      }
                      />
                  </div>
                  <div className="w-[10%] h-full flex items-center justify-center">
                    <p className="text-white">Kg</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="" className="text-white text-[18px]">Altura</label>
                <div className="w-full flex bg-[#555555] rounded-md h-[50px]">
                  <div className="w-[10%] h-full flex items-center justify-center">
                    <FaRuler size={24} color="#B0B0B0FF" /> 
                  </div>
                  <div className="w-[80%] h-full">
                    <input
                      className="w-full h-full bg-transparent border-none outline-none text-white"
                      type="number"
                      onChange={
                        (event) => setAltura(event.target.value)
                       }
                      />
                  </div>
                  <div className="w-[10%] h-full flex items-center justify-center">
                    <p className="text-white">m</p>
                  </div>
                </div>
              </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
              <button
                className="mt-[20px] w-full h-[50px] bg-[#20a54c] rounded-lg text-white font-bold"
                onClick={clickCalcular}
                >
                Calcular
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
