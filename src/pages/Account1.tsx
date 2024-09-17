import React, { useRef } from 'react'

function Account1() {
    let data=useRef()
  return (
    <div>
        <div className=''>
            <form className='div-3' action="">
            <label className='input_text' htmlFor="">Business address
            <select className='input' name="" id="" >
                <option value="">Registered business address</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>
                </label>
                <label className='input_text' htmlFor="">Type
            <select className='input' name="" id="" >
                <option value="">Type of business</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>
                </label>
                <label className='input_text' htmlFor="">Address
                <input className='input' type="text" placeholder='Address line 1' />
                <input className='input' type="text" placeholder='Address line 2' />
                <input className='input' type="text" placeholder='City' />
                <input className='input' type="text" placeholder='Zip' />

                </label>
                <button className='button'>Continue »</button>
            </form>
        </div>
    </div>
  )
}

export default Account1