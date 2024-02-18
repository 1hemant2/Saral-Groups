import React from 'react'
import Button from '../component/Button';
import ProtectedPage from '../component/ProtectedPage';

const Contact = () => {
    return (
        <>
            <ProtectedPage></ProtectedPage>
            <div className="flex flex-col text-2xl items-center">
                <form action="" className='flex flex-col justify-center items-center space-y-8 mt-4 bg-slate-100 border border-black'>
                    <input type="text" placeholder='name' />
                    <input type="text" placeholder='mobile number' />
                    <input type="text" placeholder='email' />
                    <input type="text" placeholder='location' />
                    <input type="text" placeholder='Budget' />
                    <input type="text" placeholder='Pet' />
                    <input type="text" placeholder='country' />
                    <Button text={"Submit"}></Button>
                </form>
            </div>
        </>
    )
}

export default Contact;