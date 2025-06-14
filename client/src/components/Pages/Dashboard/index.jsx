import Sidebar from '../../Sidebar';

function Dashboard() {

  return (
      <div className='h-[100vh] w-[100vw] flex '>
              <Sidebar />
              <div className='bg-[#FFFFFF] p-5 h-full w-[75%]'>
                <h1 className='text-3xl text-[#525256] mt-14'>Dashboard</h1>
                <div className='w-full h-[40%] shadow-lg mt-6'></div>  
                <div className='w-full h-[40%] shadow-lg mt-6'></div>  
              </div>
      </div>
  )
}

export default Dashboard ;