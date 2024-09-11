'use client';

import Head from 'next/head';
import Image from 'next/image';
import '@/lib/env';

import UnderlineLink from '@/components/links/UnderlineLink';
import TextAnimation from '@/components/TextAnimation';

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
    'Votes', // English
    'Va Voter', // French
    'Votos', // Spanish
    'Stimmen', // German
    'Voti', // Italian
    'Ψήφοι', // Greek
    'голоса', // Russian
    'أصوات', // Arabic
    'Votos', // Portuguese
    'Oylar', // Turkish
  ];

  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <div className='flex gap-3 justify-center items-center mb-6'>
            <h1 className='flex flex-col gap-6 text-8xl'>
              <span className='flex gap-3'>
                <Image
                  src='/esn-logo.png'
                  alt='Logo'
                  width={100}
                  height={100}
                />
                ESN Caen
              </span>
              <TextAnimation texts={multiLanguageVote} duration={3} />
            </h1>
          </div>
          <p className='mt-2 text-sm text-gray-800'>
            Voting while studying abroad can be tricky — we're here to help!
          </p>
          {/* <p className='mt-2 text-sm text-gray-700'>
            <ArrowLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter'>
              See the repository
            </ArrowLink>
          </p> */}

          {/* <ButtonLink className='mt-6' href='/components' variant='light'>
            See all components
          </ButtonLink> */}
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
