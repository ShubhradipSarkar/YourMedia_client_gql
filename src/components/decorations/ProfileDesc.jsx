import React from 'react'
const ProfileDesc = () => {
  return (
    <div className='bg-[#212121] w-[100vw] h-[100vh] flex flex-col'>
      <div className='w-11/12 max-w-[500px] mx-auto flex flex-col justify-center items-center py-[2rem]'>
        <div className='bg-orange-700 opacity-80 border-2 border-[black] text-black h-28 w-28 rounded-full flex justify-center items-center text-[3rem]'>PR</div>
        <div className='mx-auto'>
          <div className='flex justify-center'>
            <h1 className='text-[2rem] text-white font-bold'>Name</h1>
          </div>
          <div className='flex justify-center'>
            <p className='text-[#fff]'>10 friends</p>
          </div>
        </div>
      </div>
    
      <nav className='w-11/12 max-w-[500px] mx-auto'>
        <div>
          <ul className='flex flex-wrap space-x-3 text-xl text-[#fff]'>
            <li className='py-2 px-2 hover:text-[blue] opacity-100 hover:bg-[#595959] rounded-lg transition-all duration-150'>
              <a href="#">About</a>
            </li>
            <li className='py-2 px-2 hover:text-[blue] opacity-100 hover:bg-[#595959] rounded-lg transition-all duration-150 '>
              <a href="#">Posts</a>
            </li>
            <li className='py-2 px-2 hover:text-[blue] opacity-100 hover:bg-[#595959] rounded-lg transition-all duration-150'>
              <a href="#">Activities</a>
            </li>
            <li className='py-2 px-2 hover:text-[blue] opacity-100 hover:bg-[#595959] rounded-lg transition-all duration-150'>
              <a href="#">Friends</a>
            </li>
            <li className='py-2 px-2 hover:text-[blue] opacity-100 hover:bg-[#595959] rounded-lg transition-all duration-150'>
              <a href="#">Edit</a>
            </li>
            <li className='py-2 px-2 hover:text-[blue] opacity-100 hover:bg-[#595959] rounded-lg transition-all duration-150'>
              <a href="#">More</a>
            </li>
          </ul>
        </div>
      </nav>
  
  </div>
  )
}

export default ProfileDesc
