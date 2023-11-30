import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-row justify-center bg-login-color h-screen	' >
      <div className='w-1/2	items-center justify-center flex'>
        <img className='w-1/2 ml-32' src='/LogoMY.png' />
      </div>
      <div className='w-1/2	flex items-center'>
        <div className='px-6 bg-white h-1/2 rounded-lg bg-login-card border-0 flex flex-col justify-center items-center ml-8'>
          <div className='text-xl font-semibold mb-4 mt-5'>Student Login</div>
          <input className='mb-4 h-5' />
          <input className='mb-4 h-5' />
          <button className='text-sm mb-4 bg-login-button rounded-lg px-8 py-1'>Login</button>
        </div>
      </div>
    </div>
  )
}
