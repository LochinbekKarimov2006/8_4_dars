import React from 'react'
import { Link } from 'react-router-dom'

function Account2() {
  return (
    <div>
        <div className=''>
            <form className='div-3' action="">
            <label className='input_text' htmlFor="">Name
            <div className='div-104'>
                <input className='input' type="text" placeholder='First name'/>
                <input className='input' type="text" placeholder='Last name'/>
            </div>
            </label>
                <label className='input_text' htmlFor="">Type
                <input className='input' type="email" placeholder='Your email'/>
                </label>
                <label className='input_text' htmlFor="">Address
                <input className='input' type="text" placeholder='Address line 1' />
                <input className='input' type="text" placeholder='Address line 2' />
                <input className='input' type="text" placeholder='City' />
                <input className='input' type="text" placeholder='Zip' />
                </label>
                <label className='input_text' htmlFor="">Phone
                <input type="number" className='input' placeholder='+1 (555) 000-0000' /></label>
                <Link to="/2">
            <button className='button'>Continue »</button>
            </Link>
            </form>
        </div>
    </div>
  )
}

export default Account2