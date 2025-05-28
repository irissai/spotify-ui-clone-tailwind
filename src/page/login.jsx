import React, { useState } from 'react';
import '.././App.css'
import SportifyIcon from '../assets/image/spotify.png'
import GoogleIcon from '../assets/image/google.png'
import FacebookIcon from '../assets/image/facebook.png'
import AppleIcon from '../assets/image/apple.png'


function Login() {
    const [username, setUsername] = useState('');
    const [showError, setShowError] = useState(false);

    function checkInput() {
        if (username.trim() === '') {
            setShowError(true);
        } else {
        }
    }


    return (
<div className="min-h-screen bg-[#121212] md:bg-gradient-to-b md:from-[#2a2a2a] md:to-black flex justify-start flex-col overflow-x-hidden">
          <div className="p-[32px] flex justify-center grow-[3] shrink-[1] basis-[0%]">
            <div className="max-w-[734px] w-full h-auto bg-[#121212] rounded-lg flex flex-col pb-[32px] " > 
                <div className='flex justify-center pt-[24px] pb-[8px] h-full' >
                    <div >
                        <a href="">
                            <img className='w-[36px] h-[36px]' src={SportifyIcon} alt="" />
                        </a>
                    </div>
                </div>
                <h1 className='font-spotify text-center text-[2rem] font-bold text-white mb-[32px] wrap-anywhere'>ลงชื่อเข้าใช้ Spotify</h1>
                <ul className='mx-0 md:mx-auto p-0 flex flex-col w-full md:max-w-[324px]'>
                    <li>
                        <button className='hover:border-[#fff] border border-[#818181] w-[100%] rounded-[9999px] mb-[8px] inline-flex pt-[10px] pb-[10px] px-[32px] py-[32px] justify-center text-center min-[48px]  [overflow-wrap:anywhere] '>
                            <span className='w-6 h-6' >
                                <img className='w-[24px] h-[24px] ' src={GoogleIcon} alt="" />
                            </span>
                            <span className='m-auto text-white/90 font-bold text-[1.05rem] wrap-anywhere'>ดำเนินการต่อด้วย Google</span>
                        </button>
                    </li>
                    <li>
                        <button className='hover:border-[#fff] border border-[#818181] w-[100%] rounded-[9999px] mb-[8px] inline-flex pt-[10px] pb-[10px] px-[32px] py-[32px] justify-center text-center min-[48px]  [overflow-wrap:anywhere] '>
                            <span className='w-6 h-6'>
                                 <img className='w-[24px] h-[24px] ' src={FacebookIcon} alt="" />
                            </span>
                            <span className='mx-auto text-white/90 font-bold text-[1.05rem] '>ดำเนินการต่อด้วย Facebook</span>
                        </button>
                    </li>
                    <li>
                        <button className='hover:border-[#fff] border border-[#818181] w-[100%] rounded-[9999px] mb-[8px] inline-flex pt-[10px] pb-[10px] px-[32px] py-[32px] justify-center text-center min-[48px]  [overflow-wrap:anywhere] '>
                            <span className='w-6 h-6'>
                              <img className='w-[24px] h-[24px] ' src={AppleIcon} alt="" />           
                            </span>
                            <span className='mx-auto text-white/90 font-bold text-[1.05rem] '>ดำเนินการต่อด้วย Apple</span>
                        </button>
                    </li>
                    <li>
                        <button className='hover:border-[#fff] border border-[#818181] w-[100%] rounded-[9999px] mb-[8px] inline-flex pt-[10px] pb-[10px] px-[32px] py-[32px] justify-center text-center min-[48px]  [overflow-wrap:anywhere] '>
                            <span className='mx-auto text-white/90 font-bold text-[1.05rem] '>ดำเนินการต่อด้วยหมายเลขโทรศัพท์</span>
                        </button>
                    </li>
                </ul>

                <hr className="mx:0 my-[32px] md:mx-[100px] border-0  border-t-[1px] border-t-[rgb(41,41,41)]" />


                <div className='w-full mx-auto md:max-w-[324px]'>
                    <div className='pb-[16px]'>
                        <div className="pb-[8px]">
                            <div className='flex w-full pb-[8px]'>
                                <label htmlFor="" className='text-white font-bold'>
                                    <span className='inline-block'>อีเมลหรือชื่อผู้ใช้</span>
                                </label>
                            </div>
                            <input
                                id="username"
                                type="text"
                                placeholder="อีเมลหรือชื่อผู้ใช้"
                                className="text-white text-[18px] overflow-hidden text-ellipsis bg-[#121212] rounded-[4px] border border-[#818181] shadow-sm w-full p-[10px] transition-shadow focus:shadow-[0_0_0_3px_#fff] hover:hover:border-[#fff] "
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            {showError && (
                                <div className="text-[#f3727f] text-sm flex items-start gap-2 mt-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 mt-0.5"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                                        <path d="M7.25 9V4h1.5v5h-1.5zm0 3.026v-1.5h1.5v1.5h-1.5z" />
                                    </svg>
                                    <span>อีเมลหรือชื่อผู้ใช้ไม่ลิงก์กับบัญชี Spotify</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="w-full text-center pb-[32px]">
                        <button
                            onClick={checkInput}
                            className=" [overflow-wrap:anywhere] font-bold px-4 py-3 bg-[#1ed760]  text-black w-full rounded-[9999px] hover:bg-[#3be477] min-[48px]"
                        >
                        ดำเนินการต่อ
                        </button>
                    </div>
                </div>
                <div className="pb-[14px] text-white ">
                    <h2 className='text-center mt-0 text-[17.5px] mb-[20px]'>
                        <span className=' text-[#b3b3b3]'>ยังไม่มีบัญชีผู้ใช้ใช่ไหม</span>
                            <a href="/register" className='cursor-pointer underline underline-offset-2 hover:text-[#1ed760] active:text-[#1ed760]'>
                                <span className='block md:inline ml-[8px]'> ลงทะเบียนใช้งาน Spotify</span>
                            </a>
                    </h2>
                </div>
            </div>
            </div>
            <footer>
                <div className="text-[#b3b3b3] bg-[#121212] p-[32px] text-center text-[12.5px]">
                    <p>
                        เว็บไซต์นี้ได้รับการปกป้องโดย reCAPTCHA รวมถึงเป็นไปตาม
                        <a href="" className='underline underline-offset-2 '>นโยบายความเป็นส่วนตัว</a>
                        และ
                        <a href="" className='underline underline-offset-2'>ข้อกำหนดการใช้บริการ</a>
                        ของ Google
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Login;
