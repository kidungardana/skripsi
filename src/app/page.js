import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-row justify-center bg-login-color h-screen	' >
      <div className='w-1/2	items-center justify-center flex'>
        <img className='w-1/2 ml-32' src='/LogoMY.png' />
      </div>
      <div className='w-1/2	flex items-center'>
        <div className='2xl:px-16 xl:px-12 w-1/2 bg-white h-1/2 rounded-lg bg-login-card border-0 flex flex-col justify-center items-center ml-8'>
          <div className='2xl:text-5xl xl:text-3xl font-semibold 2xl:mb-16 xl:mb-12 mt-5'>Student Login</div>
          <input className='2xl:mb-12 xl:mb-8 h-10 w-full' />
          <input className='2xl:mb-16 xl:mb-8 h-10 w-full' />
          <button className='2xl:text-3xl xl:text-xl mb-4 bg-login-button rounded-lg 2xl:px-16 xl:px-8 2xl:py-2 xl:py-1'>Login</button>
        </div>
      </div>
    </div>
  )
}
