import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><defs><path id="solarHomeBold0" fill="#fff" d="M10.75 9.5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></path></defs><path fill="#fff" d="M18.5 3H16a.5.5 0 0 0-.5.5v.059l3.5 2.8V3.5a.5.5 0 0 0-.5-.5"></path><use href="#solarHomeBold0" fillRule="evenodd" clipRule="evenodd"></use><path fill="#fff" fillRule="evenodd" d="m20.75 10.96l.782.626a.75.75 0 0 0 .936-1.172l-8.125-6.5a3.75 3.75 0 0 0-4.686 0l-8.125 6.5a.75.75 0 0 0 .937 1.172l.781-.626v10.29H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-1.25zM9.25 9.5a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0m2.8 3.75c.664 0 1.237 0 1.696.062c.492.066.963.215 1.345.597s.531.853.597 1.345c.058.43.062.96.062 1.573v4.423h-1.5V17c0-.728-.002-1.2-.048-1.546c-.044-.325-.114-.427-.172-.484s-.159-.128-.484-.172c-.347-.046-.818-.048-1.546-.048s-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546v4.25h-1.5v-4.3c0-.664 0-1.237.062-1.696c.066-.492.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062z" clipRule="evenodd"></path><use href="#solarHomeBold0" fillRule="evenodd" clipRule="evenodd"></use></svg>

                <p className='bg-gradient-to-r from bg-blue-500 to bg-purple-600 bg-clip-text text-transparent font-bold'>Home</p>
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none"><path d="M0 0h24v24H0z"></path><path fill="#fff" d="M10.5 2a8.5 8.5 0 0 1 6.676 13.762l3.652 3.652a1 1 0 0 1-1.414 1.414l-3.652-3.652A8.5 8.5 0 1 1 10.5 2m0 2a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13m0 1a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11"></path></g></svg>

                <p className='bg-gradient-to-r from bg-blue-500 to bg-purple-600 bg-clip-text text-transparent font-bold'>Search</p>
            </div>
        </div>
        <div className='bg-[#121212] h-[85%] rounded'>
            <div className='p-4 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                   <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 512 512"><rect width={64} height={368} x={32} y={96} fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth={32} rx={16} ry={16}></rect><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M112 224h128M112 400h128"></path><rect width={128} height={304} x={112} y={160} fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth={32} rx={16} ry={16}></rect><rect width={96} height={416} x={256} y={48} fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth={32} rx={16} ry={16}></rect><path fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth={32} d="m422.46 96.11l-40.4 4.25c-11.12 1.17-19.18 11.57-17.93 23.1l34.92 321.59c1.26 11.53 11.37 20 22.49 18.84l40.4-4.25c11.12-1.17 19.18-11.57 17.93-23.1L445 115c-1.31-11.58-11.42-20.06-22.54-18.89Z"></path></svg>
                    <p className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold'>Your Library</p>
                </div>
                <div className='flex items-center gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="24px" viewBox="0 0 12 24"><path fill="#fff" fillRule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><g fill="#fff" fillRule="evenodd" clipRule="evenodd"><path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16"></path><path d="M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4z"></path></g></svg>
                </div>
            </div>
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start pl-4'>
                <h1>Create your first Playlist</h1>
                <p className='font-light'>it's easy we will help you!</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
            </div>
             <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start pl-4'>
                <h1>Let's Find some Podcast to follow</h1>
                <p className='font-light'>we'll keep you updates on new episodes</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse Podcasts</button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
