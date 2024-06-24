import React from 'react';
import { Button } from 'flowbite-react';

function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about React?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://react.dev/learn" target='_blank' rel='noopener noreferrer'>
                    React official documentation
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://velog.velcdn.com/images/raiznn/post/30be0c2c-aef7-43ed-aa1a-ecc26a887e82/image.jpg" />
        </div>
    </div>
  )
}

export default CallToAction;