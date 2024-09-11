'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import '@/lib/env';

import UnderlineLink from '@/components/links/UnderlineLink';
import TextAnimation from '@/components/TextAnimation';
import { VotingPlanForm } from '@/components/VotingPlanForm';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const multiLanguageVote = [
    { voteInGivenLanguage: 'Votes', flag: '🇺🇸' }, // English
    { voteInGivenLanguage: 'Vote', flag: '🇫🇷' }, // French
    { voteInGivenLanguage: 'Stimmt ab', flag: '🇩🇪' }, // German (imperative but neutral, meaning "Vote")
    { voteInGivenLanguage: 'Votamos', flag: '🇪🇸' }, // Spanish (can be used without subject, meaning "We vote")
    { voteInGivenLanguage: 'Votiamo', flag: '🇮🇹' }, // Italian (can be used without subject, meaning "We vote")
    { voteInGivenLanguage: 'Ψηφίστε', flag: '🇬🇷' }, // Greek (imperative, but used similarly, meaning "Vote")
    { voteInGivenLanguage: 'Голосуем', flag: '🇷🇺' }, // Russian (neutral, no subject, meaning "Voting")
    { voteInGivenLanguage: 'نصوت', flag: '🇸🇦' }, // Arabic (neutral, no subject, meaning "We vote")
    { voteInGivenLanguage: 'Votamos', flag: '🇵🇹' }, // Portuguese (can be used without subject, meaning "We vote")
    { voteInGivenLanguage: 'Oy Veriyoruz', flag: '🇹🇷' }, // Turkish (neutral, meaning "Voting")
  ];

  return (
    <main>
      <Head>
        <title>Make a plan to vote</title>
      </Head>
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <div className='flex gap-3 justify-center items-center mb-6 w-full'>
            <h1 className='flex flex-col gap-6 text-5xl md:text-8xl w-full items-center'>
              <motion.span
                className='flex gap-3 items-center'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src='/esn-logo.png'
                  alt='Logo'
                  sizes='100vw'
                  className='w-auto h-12 md:h-28'
                  width={100}
                  height={100}
                />
                ESN Caen
              </motion.span>
              <TextAnimation texts={multiLanguageVote} duration={3} />
            </h1>
          </div>
          <div className='gap-8 py-8 flex flex-col text-gray-800 items-center'>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='text-lg'
            >
              Voting while studying abroad can be tricky. Never fear! We're here
              to help!
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className='text-md max-w-3xl'
            >
              Elections are happening on various schedules around the world, and
              we're committed to making sure you succeed in participating in
              yours, no matter where you're from. Even if you haven't been
              involved in elections in the past or don't know when the next one
              is, we'll work with you to figure it out! It all begins with a
              committment: to vote.
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className='text-md'
            >
              Join the dozens of students who have already committed voting.
            </motion.span>
          </div>
          <VotingPlanForm />
          <footer className='absolute bottom-2 text-gray-700'>
            Made with ❤️ by{' '}
            <UnderlineLink href='https://jamesm.it'>
              James Mitofsky
            </UnderlineLink>
          </footer>
        </div>
      </section>
    </main>
  );
}
