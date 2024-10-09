 import './Plans.scss'

export const Plans = () => {

  return (
   <div className="plans w-full flex flex-col  gap-5">
     <div className="basic w-full flex flex-col gap-10 items-center justify-center ">
      <div className='flex flex-col gap-4'>
        <h3 className="text-xl font-bold mb-4">Basic</h3>
        <h1 className="text-6xl font-bold">Free</h1>
        <p>Up to 5 users for free</p>
      </div>
      <div className='flex flex-col gap-4'>
        <p>Basic document collaboration</p>
        <p>2 GB storage</p>
        <p>Great security and support</p>
      </div>
      <button className="h-14 w-44 rounded-3xl "><span className='font-bold'>Try for free</span></button>
    </div>

     <div className="pro w-full flex flex-col gap-10 items-center justify-center">
      <div className='flex flex-col gap-4'>
        <h3 className="text-xl font-bold mb-4">Pro</h3>
        <h1 className="text-6xl font-bold">$9.99</h1>
        <p > Per user, billed monthly</p>
      </div>
      <div className='flex flex-col gap-4'>
        <p className='opacity-75'>All essential inergrations</p>
        <p className='opacity-75'>50 GB storage</p>
        <p className='opacity-75'>More control and insights</p>
      </div>
      <button className="h-14 w-44 rounded-3xl">Try for Free</button>
    </div>

     <div className="ultimate w-full flex flex-col gap-10 items-center justify-center">
      <div className='flex flex-col gap-4'>
        <h3 className="text-xl font-bold mb-4">Ultimate</h3>
        <h1 className="text-6xl font-bold">$19.99</h1>
        <p >Per user, billed monthly</p>
      </div>
      <div className='flex flex-col gap-4'>
        <p>Robust work management</p>
        <p>100 Gb storage</p>
        <p>VIP support</p>
      </div>
      <button className="h-14 w-44 rounded-3xl">Try for free</button>
    </div>
   </div>
  )
}
