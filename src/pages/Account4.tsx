import React from 'react'
import { Link } from 'react-router-dom'

function Account4() {
  return (
    <div>
        <div className=''>
            <form className='div-3' action="">
            <label className='input_text' htmlFor="">Currency
            <select className='input' name="" id="" >
                <option value="">Select your currency...</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>
                </label>
                <label className='input_text' htmlFor="">Country of bank account
            <select className='input' name="" id="" >
                <option value="">Country</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>
                </label>
                <label className='input_text' htmlFor="">IBAN
                <input className='input' type="text" placeholder='Enter your IBAN' />
                <input className='input' type="text" placeholder='Confirm IBAN' />

                </label>
                <Link to="/4">
            <button className='button'>Continue »</button>
            </Link>
            </form>
        </div>
    </div>
  )
}

export default Account4