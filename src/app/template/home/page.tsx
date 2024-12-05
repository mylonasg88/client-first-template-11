import Image from 'next/image';
import { MdOutlineHeadsetMic } from 'react-icons/md';

import Button from '@/components/buttons/Button';
import FeaturesBox from '@/components/featuresBox/featuresBox';

export default function HomePage() {
  return (
    <div className='flex flex-col items-center pb-12 space-y-12'>
      {/* ROW 1 */}
      <div className='w-[1024px] flex justify-center flex-col items-center bg-slate-200'>
        {/* Hero 1 */}
        <div
          className='row-hero-1 w-[768px] flex flex-col items-center justify-center max-w-screen-sm gap-8 p-8
                      bg-gradient-to-r from-theme-secondary-gradient-start via-theme-secondary-gradient-end to-theme-secondary-gradient-end'
        >
          <h2 className='text-4xl font-semibold text-center'>
            The Best Software to Grow your Sales and Services
          </h2>
          <p className='text-sm text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          <div className='flex pt-4 pb-4 relative p-12 bg-slate-400'>
            <input
              type='email'
              placeholder='Email'
              className='border border-gray-100 rounded-2xl text-sm p-5 pl-6 min-w-96'
            />
            <Button className='rounded-xl p-4 pr-6 pl-6 bg-black border-gray-600 h-12 text-white absolute right-2 top-6'>
              Get Free Trial
            </Button>
          </div>
        </div>
        <div className='flex justify-center'>
          <Image
            src='/images/dashboard.png'
            alt='Hero 1'
            width={1024}
            height={667}
          />
        </div>
      </div>

      {/* ROW 2 Features */}
      <div className='w-[1024px] space-y-6 flex justify-center flex-col items-center bg-slate-200'>
        <p className='heading-label text-4xl font-semibold text-center'>
          High-quality
        </p>
        <h3 className='text-2xl text-center'>
          We have the Best Solution for your Business
        </h3>
        <div className='row-features-1 flex flex-row gap-4'>
          <FeaturesBox
            title='Feature 1'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
            icon={
              <MdOutlineHeadsetMic className='text-3xl theme-violet text-theme-violet bg-theme-violet-300' />
            }
          />
          <FeaturesBox
            title='Feature 1'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
            icon={
              <MdOutlineHeadsetMic className='text-3xl theme-violet text-theme-violet bg-theme-violet-300' />
            }
          />
          <FeaturesBox
            title='Feature 1'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
            icon={
              <MdOutlineHeadsetMic className='text-3xl theme-violet text-theme-violet bg-theme-violet-300' />
            }
          />
        </div>
      </div>
    </div>
  );
}
