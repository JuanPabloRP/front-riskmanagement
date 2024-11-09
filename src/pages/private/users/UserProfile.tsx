import RM_Link from '../../../../src/shared/components/RM_Link';
import { PATHS } from '../../../../src/shared/constants/routes.constant';

const UserProfile = () =>{

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
          <div className=' bg-border-secondary w-10/12 flex items-start rounded-md p-1'>
            <div className=" flex justify-center items-center flex-row gap-3 w-700 ml-5">
               <img className='w-40 h-40' src="../../../src/assets/img/profile.jpg" alt="" />
            <h1 className='mb-30 p-0 text-lg'>Juan Manuel Tejada Bustamante</h1 >
            </div>
          </div>
         
          <section>
            <span>jtejadabusta@gmail.com</span>
             <span>Analista de riesgos</span>
             <span>30/04/2003</span>
             <span>+57 3042619703</span>
           </section>

        </section>
    )
}

export default UserProfile