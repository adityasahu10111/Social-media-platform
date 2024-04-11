import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about React?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources all the code from zero to advance
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://github.com/adityasahu10111/React-minor-Projects" target='_blank' rel='noopener noreferrer'>
                    11 React Projects...
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://inkbotdesign.com/wp-content/uploads/2022/03/what-is-react-js-1024x684.jpg" />
        </div>
    </div>
  )
}