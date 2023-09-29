import React, { useState } from 'react';
import CreatePost from './CreatePost';
import AllPost from './AllPost';

function UserInfoPosts() {
    const [showPlusContent, setShowPlusContent] = useState(true);
    const [showPhoneContent, setShowPhoneContent] = useState(false);

    const showPlus = () => {
        setShowPlusContent(true);
        setShowPhoneContent(false);
    };

    const showPhone = () => {
        setShowPlusContent(false);
        setShowPhoneContent(true);
    };

    return (
        <>
            <div className='w-full h-auto bg-gray-200 mt-5'>
                <h1 className='text-center text-xl font-sans mb-3 tracking-wider'>All Posts</h1>
                <div className='w-full p-1 bg-white flex items-center justify-around allPost drop-shadow-md'>
                    <button onClick={showPlus}>
                        <i className={`fa-solid ${showPlusContent ? 'fa-circle-minus' : 'fa-circle-plus'}`}></i>
                    </button>
                    <button onClick={showPhone}>
                        <i className="fa-solid fa-mobile"></i>
                    </button>
                </div>
            </div>
            <div className='h-80 w-full'>
                {showPlusContent && (
                    <div className='w-full h-72'>
                        <CreatePost/>
                    </div>
                )}
                {showPhoneContent && (
                    <div className='w-full h-auto bg-blue-100'>
                        <AllPost/>
                    </div>
                )}
            </div>
        </>
    );
}

export default UserInfoPosts;