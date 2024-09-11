'use client';

import { motion } from 'framer-motion';
import { MdDone } from 'react-icons/md';
import '@/lib/env';

import UnderlineLink from '@/components/links/UnderlineLink';
export default function HomePage() {
  return (
    <>
      <div className='flex gap-3 justify-center items-center mb-6 w-full'>
        <h1 className='flex flex-col gap-6 text-5xl md:text-8xl w-full items-center text-green-500'>
          <motion.span
            className='flex gap-3 items-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <MdDone size={80} />
            Success!
          </motion.span>
        </h1>
      </div>
      <div className='gap-8 py-8 flex flex-col text-gray-800 items-center'>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='text-lg'
        >
          We've received your information, and we'll be in touch with you.
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className='text-lg'
        >
          Thank you for participating in democracy, even as you travel the
          world!
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className='text-lg'
        >
          <UnderlineLink target='_self' href='/'>
            Return home
          </UnderlineLink>
        </motion.span>
      </div>
    </>
  );
}
