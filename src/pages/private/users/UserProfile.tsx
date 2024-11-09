import RM_Link from '../../../../src/shared/components/RM_Link';
import { PATHS } from '../../../../src/shared/constants/routes.constant';

const UserProfile = () =>{

    const infoUser =[
        {
            text: "CORREO",
            description: "jtejadabusta@gmail.com"
        },{
            text:"CARGO",
            description:"Analista de riesgos"
        },
        {
            text:"CEDULA",
            description:"112636448"
        },
        {
             text:"TELEFONO",
             description:"2121232356464"
        },
        {
            text:"CELULAR",
            description:"+57 3042619703"
        },
        {
            text:"DIRECCION",
            description:"Cll 45 Sur Av galindo"
        }
    ]

    return(
        <section className="flex m-7 items-center flex-col gap-2 p-0 ml-30 ">
           <RM_Link
              className='self-start'
              to={PATHS.public.home}
              hasBackground={false}
              color="primary"	
              icon={
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
                  >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l14 0" />
                      <path d="M5 12l6 6" />
                      <path d="M5 12l6 -6" />
                  </svg>
              } >
              <></>
          </RM_Link>
          <div className=' bg-border-secondary w-2/4 flex items-start rounded-md p-1'>
            <div className=" flex justify-center items-center flex-row gap-3 w-500 ml-5">
               <img className='w-40 h-40' src="../../../src/assets/img/profile.jpg" alt="" />
            <h1 className='mb-30 p-0 text-lg'>Juan Manuel Tejada Bustamante</h1 >
            </div>
          </div>
         
          <section className='flex flex-wrap justify-between items-center gap-5  w-2/4 px-4'>
           {
            infoUser.map(({text, description})=>(
                <div className='w-1/4'>
                    <h3>{text}</h3>
                    <p>{description}</p>
                </div>

            
            ))
           }
           </section>

        </section>
    )
}

export default UserProfile