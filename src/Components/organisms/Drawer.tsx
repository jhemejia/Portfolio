import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom';
import Header from '../molecules/Header';


const Dashboard = () => {
    // declare variables
    const [aSideOpen, setASideOpen] = useState(false);

  return (
    <div className="container min-h-screen min-w-full max-h-screen bg-light-gray text-gray-700" >
        {/* <!-- page -->  */}        
        <main className="flex flex-col h-full bg-light-gray text-gray-700 relative" >
            {/* <!-- header page --> */}
            <div className='flex max-w-full h-14'>
            <Header aSideOpen={aSideOpen}  setASideOpen={setASideOpen} />
            </div>
            <div className="flex h-full">
                {/* <!-- aside --> */}
                <aside className={[" w-72 h-full space-y-2 border-r-2 border-gray-100 bg-white p-2 ",!aSideOpen?"hidden":""].join("")}
                    >           
                    <Link to='' className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 ">
                        <span className="text-2xl"><i className="bx bx-home"></i></span>
                        <span>Dashboard</span>
                    </Link>

                    <Link to='' className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 ">
                        <span className="text-2xl"><i className="bx bx-cart"></i></span>
                        <span>Cart</span>
                    </Link>

                    <Link to='store' className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 ">
                        <span className="text-2xl"><i className="bx bx-shopping-bag"></i></span>
                        <span>Store</span>
                    </Link>

                    <Link to='' className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 ">
                        <span className="text-2xl"><i className="bx bx-heart"></i></span>
                        <span>Personel</span>
                    </Link>

                    <Link to="profile" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 ">
                        <span className="text-2xl"><i className="bx bx-user"></i></span>
                        <span>Profile</span>
                    </Link>
                    <div className="mt-auto place-self-end h-auto"></div>
                </aside>

                {/* <!-- main content page --> */}
                <div className="flex flex-col items-center max-w-full h-full ">
                    <Outlet/>
                </div>
            </div>
        </main>  
    </div>
  )
}

export default Dashboard