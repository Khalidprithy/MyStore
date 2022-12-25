import React, { useRef, useState } from 'react';

const PasswordGenerator = () => {
    const textRef = useRef(null);
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(20);

    function generatePassword() {
        // Generate random password of specified length
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(?=^.{8,}$)((?=.*d)|(?=.*W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"';
        let password = '';
        for (let i = 0; i < length; i++) {
            // Select random character
            const character = characters.charAt(Math.floor(Math.random() * characters.length));
            // Insert space randomly
            if (Math.random() < 0.1) {
                password += ' ';
            } else {
                password += character;
            }
        }
        setPassword(password);
    }

    function handleSubmit(event) {
        event.preventDefault();
        generatePassword();
    }

    const handleCopyClick = (event) => {
        textRef.current.select();
        document.execCommand('copy');
    };

    return (
        <div className='mt-6'>
            <div class="w-full mx-auto max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 class="text-xl mb-6 font-medium text-gray-900 dark:text-white">Generate your strong password</h5>

                <div class="flex items-center mb-4">
                    <div class="relative w-full">
                        <input type="text" ref={textRef} value={password} id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" />
                    </div>
                    <button onClick={handleCopyClick} class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                        </svg>

                    </button>
                </div>

                <form onSubmit={event => handleSubmit(event)} class="space-y-6" action="#">

                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Length</label>
                        <input type="number" value={length} onChange={event => setLength(event.target.value)} name="password" id="password" placeholder="Enter Password Length" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Generate</button>
                </form>
            </div>

        </div>
    );
};

export default PasswordGenerator;