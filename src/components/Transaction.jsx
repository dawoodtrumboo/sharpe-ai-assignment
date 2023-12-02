import React, { useState, useRef } from 'react'
import image from '../assets/image1.png'
import { db } from '../../firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'


const Transaction = () => {



    const walletRef = useRef(null);
    const amountRef = useRef(null);
    const [walletError, setWalletError] = useState('');
    const [amountError, setAmountError] = useState('');

    const transactionCollectionRef = collection(db, 'transactionData')

    const handleSend = async (e) => {
        e.preventDefault();

        const walletAddress = walletRef.current.value.trim();
        const amount = amountRef.current.value.trim();

        // Address Validation
        if (!walletAddress.trim()) {

            setWalletError('Wallet Adress cannot be empty!');
            return;
        } else if (!/^0x[a-fA-F0-9]{40}$/.test(walletAddress))  /* Regular Expression for Checking valid wallet address*/ {

            setWalletError('Invalid Ethereum address');

            return;
        } else {

            setWalletError('');
        }

        // Amount Validation
        if (!amount) {
            setAmountError('Amount cannot be empty');
            return;
        }

        const parsedAmount = parseFloat(amount);
        if (parsedAmount < 0 || parsedAmount > 10000) {
            setAmountError('Amount must be a number between 0 and 10,000');
            return;
        } else {
            setAmountError('');
        }

        const transactionData = {
            walletAddress,
            amount: parseFloat(amount), // Ensure amount is a number
        };
        try{
        addDoc(transactionCollectionRef, transactionData);
        console.log('Transaction Succesfull')
        }
        catch(e){
        console.log(e.message)
        }
        // Reset form fields
        walletRef.current.value = '';
        amountRef.current.value = '';



    }

    return (
        <div className='flex min-h-[100vh] h-[100vh] pt-[60px]'>

            <div className='w-1/2 h-full flex flex-col justify-center text-white pl-10'>

                <h2 className='text-4xl font-semibold leading-snug w-4/5'>Welcome to Sharpe AI Transaction Window</h2>
                <p className=' text-green-500'>This transaction is secure.</p>

                <form className='space-y-10 mt-10' onSubmit={handleSend}>
                    <div>
                        <fieldset className='border w-2/4 rounded-full text-[#fff] border-[#fff] transition-all ease-in hover:text-[#F9FD6D] hover:border-[#F9FD6D]'>
                            <legend className='ml-3'>Wallet Address</legend>
                            <input ref={walletRef} className=' focus:outline-none bg-transparent px-4 pb-2 m-0 ' placeholder='0x71C7656....' />
                        </fieldset>
                        {walletError ? <span className='ml-5 text-red-500'>{walletError}</span> : null}
                    </div>

                    <div>
                        <fieldset className='border w-2/4 rounded-full text-[#fff] border-[#fff] transition-all ease-in hover:text-[#F9FD6D] hover:border-[#F9FD6D]'>
                            <legend className='ml-3'>Amount</legend>
                            <input ref={amountRef} type='number' className=' focus:outline-none bg-transparent px-4 pb-2 m-0 ' placeholder='Enter the amount' />
                        </fieldset>
                        {amountError ? <span className='ml-5 text-red-500'>{amountError}</span> : null}
                    </div>

                    <button type='submit' className='bg-[#F9FD6D] transition-all ease-in hover:bg-[#e7ec54] px-8 py-2 rounded-full text-black font-semibold'>Send</button>
                </form>

            </div>
            <div className='w-1/2 h-full overflow-hidden'>
                <img src={image} alt="image" className='w-full object-cover' />
            </div>

        </div>
    )
}

export default Transaction