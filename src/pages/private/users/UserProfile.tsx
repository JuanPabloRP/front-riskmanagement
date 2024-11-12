import React, { useState } from 'react';
const UserProfile = () =>{
const [isDisabled, setIsDisabled] = useState(true);
const content = [
    {
        titulo:"Nombre",
        description:"Emma Stone"
    },
    {
        titulo:"Apellidos",
        description:"jaramillo de la cruz"
    },
    {
        titulo:"cargo",
        description:"Analista de riesgos"
    },
]
const content2 = [
    {
        titulo:"CC",
        description:"101.139.266.4"
    },
    {
        titulo:"Gmail",
        description:"Emita@gmail.com"
    },
    {
        titulo:"dirreccion",
        description:"cll34 Sur Av Barranquilla"
    },
]
    return(
        <section className="   ">
            <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
           <div
            className=" border-2 border-border-secondary lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
       
            <div >
                <h1
                    className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
                    Perfil
                </h1>
                <form  >
                    <div
                        className="w-full rounded-sm bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat items-center">
                        <div className="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-[url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxwcm9maWxlfGVufDB8MHx8fDE3MTEwMDM0MjN8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat">
                        </div>
                        <div className="flex justify-end">
                            <div
                                className="bg-white flex items-center gap-1 rounded-tl-md px-2 text-center font-semibold"> 
                            </div>
                        </div>
                    </div>
                    <h2 className="text-center mt-1 font-semibold dark:text-gray-300">Emma Jaramillo
                    </h2>
                    <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                        {content.map(({titulo,description})=>
                         <div className="w-full  mb-4 mt-6 flex flex-col">
                         <span className="font-bold uppercase">{titulo}</span>
                         <input type="text" disabled={isDisabled} id="text" className="border-2  border-border-secondary bg-black rounded p-2 mb-2" value={description}/>
                         </div>  
                        
                        )} 
                    </div>
                    <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                        {content2.map(({titulo,description})=>
                         <div className="w-full  mb-4 mt-6 flex flex-col">
                           <span className="font-bold uppercase">{titulo}</span>
                           <input type="text" disabled={isDisabled} id="text" className="border-2 border-border-secondary bg-black rounded p-2 mb-2" value={description}/>
                         </div>
                        
                        )} 
                    </div>
                    <div className={`flex justify-center items-center w-full rounded-lg text-white text-lg font-semibold `} >
                        <button  type="button" onClick={() => setIsDisabled(!isDisabled)} className={` ${isDisabled ?"bg-blue-500" : "bg-btn-success" } w-1/4 p-2 self-center   mt-4 rounded-lg`}> { isDisabled ? "Editar" : "Guardar"}</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
  </section>
  )
}

export default UserProfile