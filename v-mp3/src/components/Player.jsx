import React from 'react'
import {songsData} from '../assets/assets'

const Player = () => {
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
        <div className='hidden lg:flex items-start gap-4 '>
            <img className='w-12' src={songsData[0].image} alt="" />
            <div>
                <p>{songsData[0].name}</p>
                <p>{songsData[0].desc.slice(0, 12)}</p>
            </div>
        </div>
        <div className='flex flex-col items-center gap-1 m-auto'>
            <div className='flex gap-4 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="#fff" fillRule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m4.262-14.523a.75.75 0 0 1 1.06-.015l1.2 1.167a.75.75 0 0 1 0 1.075l-1.2 1.167a.75.75 0 0 1-1.146-.954h-.338c-.511 0-.844 0-1.1.025c-.242.023-.36.062-.444.109c-.084.046-.176.12-.318.307c-.152.2-.323.474-.586.902l-1.52 2.463c-.242.39-.45.729-.652.994c-.218.286-.46.532-.789.713c-.328.18-.666.254-1.025.288c-.336.032-.74.032-1.21.032H6a.75.75 0 0 1 0-1.5h2.162c.511 0 .844 0 1.1-.025c.243-.023.36-.062.444-.11c.084-.045.176-.12.318-.306c.152-.2.323-.475.586-.902l1.52-2.464c.242-.39.45-.728.652-.994c.218-.285.46-.531.789-.712c.328-.18.666-.255 1.025-.289c.336-.031.74-.031 1.21-.031h.37a.75.75 0 0 1 .086-.94M9.385 9.77c-.085-.017-.185-.02-.584-.02H6a.75.75 0 0 1 0-1.5h2.858c.313 0 .565 0 .806.045a2.56 2.56 0 0 1 1.405.775c.167.18.299.394.459.653l.03.05a.75.75 0 1 1-1.276.788c-.206-.334-.259-.413-.313-.472a1.06 1.06 0 0 0-.584-.32m3.301 3.26a.75.75 0 0 1 1.032.244c.206.333.259.412.313.471c.151.163.355.277.584.32c.085.016.186.02.584.02h.977a.75.75 0 0 1 1.147-.955l1.2 1.167a.75.75 0 0 1 0 1.075l-1.2 1.167a.75.75 0 0 1-1.147-.955h-1.034c-.313 0-.565 0-.806-.045a2.56 2.56 0 0 1-1.405-.775c-.167-.18-.299-.394-.459-.653l-.03-.05a.75.75 0 0 1 .244-1.032" clipRule="evenodd"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="#fff" d="M17.25 4.336v15.328L9.586 12zM8.5 5v14h-2V5z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="#fff" d="M8 5.14v14l11-7z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="#fff" d="M6.75 4.336L14.414 12L6.75 19.664zM17.5 5v14h-2V5z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 16 16"><path fill="#fff" d="M11 4H8.71L11 1.71c.194-.194.194-.513 0-.707s-.513-.194-.707 0l-3.15 3.15a.5.5 0 0 0-.146.354c0 .128.047.257.145.354l.004.002l3.14 3.14c.194.194.513.194.707 0s.194-.513 0-.707l-2.29-2.29h2.29c2.21 0 4 1.79 4 4s-1.79 4-4 4h-6c-2.21 0-4-1.79-4-4c0-2.04 1.53-3.72 3.5-3.97c.274-.034.5-.255.5-.531s-.226-.503-.5-.475a5.014 5.014 0 0 0-4.5 4.98c0 2.75 2.25 5 5 5h6c2.75 0 5-2.25 5-5s-2.25-5-5-5z"></path></svg>
            </div>
            <div className='flex items-center gap-5'>
                <p>0:01</p>
                <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                    <hr className='h-1 border-none w-0 bg-green-800 rounded-full' />
                </div>
                <p>3:20</p>
            </div>
        </div>
        <div className='hidden lg:flex items-center gap-2 opacity-75'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 48 48"><defs><mask id="ipSPlay0"><g fill="none" strokeLinejoin="round" strokeWidth={4}><path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></path><path fill="#000" stroke="#000" d="M20 24v-6.928l6 3.464L32 24l-6 3.464l-6 3.464z"></path></g></mask></defs><path fill="#fff" d="M0 0h48v48H0z" mask="url(#ipSPlay0)"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="#fff" d="M12 14q-1.25 0-2.125-.875T9 11V5q0-1.25.875-2.125T12 2t2.125.875T15 5v6q0 1.25-.875 2.125T12 14m-1 7v-3.075q-2.6-.35-4.3-2.325T5 11h2q0 2.075 1.463 3.538T12 16t3.538-1.463T17 11h2q0 2.625-1.7 4.6T13 17.925V21z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="#fff" d="M22 6h-5v8.18c-.31-.11-.65-.18-1-.18c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3V8h3zm-7 0H3v2h12zm0 4H3v2h12zm-4 4H3v2h8z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="#fff" d="M17 22H7q-.825 0-1.412-.587T5 20V4q0-.825.588-1.412T7 2h10q.825 0 1.413.588T19 4v16q0 .825-.587 1.413T17 22M12 9q.825 0 1.413-.587T14 7t-.587-1.412T12 5t-1.412.588T10 7t.588 1.413T12 9m0 10q1.65 0 2.825-1.175T16 15t-1.175-2.825T12 11t-2.825 1.175T8 15t1.175 2.825T12 19m0-2q-.825 0-1.412-.587T10 15t.588-1.412T12 13t1.413.588T14 15t-.587 1.413T12 17"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 16 16"><path fill="#fff" fillRule="evenodd" d="M9 3a.999.999 0 0 0-1.582-.814l-2.54 1.81h-2.38a2.5 2.5 0 0 0-2.5 2.5v3a2.5 2.5 0 0 0 2.5 2.5h2.38l2.54 1.81A1.001 1.001 0 0 0 9 12.993v-10zM2.5 5h2.38a1 1 0 0 0 .581-.186l2.54-1.81v10l-2.54-1.81a1 1 0 0 0-.581-.186H2.5a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5z" clipRule="evenodd"></path><path fill="#fff" d="M11.5 2.34a.5.5 0 0 1 .663-.246a6.51 6.51 0 0 1 3.79 5.91c0 1.24-.356 2.46-1.03 3.51a6.5 6.5 0 0 1-2.76 2.4a.5.5 0 1 1-.417-.909a5.4 5.4 0 0 0 2.33-2.03a5.51 5.51 0 0 0-.002-5.94a5.5 5.5 0 0 0-2.34-2.03a.5.5 0 0 1-.246-.663z"></path><path fill="#fff" d="M10.6 5.15a.5.5 0 0 1 .683-.183a3.498 3.498 0 0 1 .003 6.06a.5.5 0 0 1-.501-.865a2.5 2.5 0 0 0 1.247-2.165a2.5 2.5 0 0 0-1.251-2.164a.5.5 0 0 1-.183-.683z"></path></svg>
            <div className='w-20 bg-slate-50 h-1 rounded '>

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="#fff" d="M20 12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm-1-8a2 2 0 0 1 2 2v4a1 1 0 1 1-2 0V6H4v11h7a1 1 0 1 1 0 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm1 10h-5v4h5zM7.087 7.673l1.915 1.915v-.586a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h.586L5.673 9.087a1 1 0 1 1 1.414-1.414"></path></g></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="#fff" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617M10 10H7v2h3v3h2v-3h3v-2h-3V7h-2z"></path></svg>
        </div>
    </div>
  )
}

export default Player
