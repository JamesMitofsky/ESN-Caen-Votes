'use client';

export const VotingPlanForm = () => {
  return (
    <form
      action='https://api.web3forms.com/submit'
      method='POST'
      className='w-full max-w-sm mb-6'
    >
      <input
        type='hidden'
        name='access_key'
        value='b580566a-512b-4451-a837-79841efd92c6'
      />
      <div className='md:flex md:items-center mb-6'>
        <input
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
          id='name'
          type='text'
          name='name'
          placeholder='Name'
          required
        />
      </div>
      <div className='md:flex md:items-center mb-6'>
        <input
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
          id='email'
          type='email'
          name='email'
          placeholder='Email'
          required
        />
      </div>
      <input
        type='hidden'
        name='redirect'
        value='https://web3forms.com/success'
      />
      <div className='flex justify-center'>
        <button
          className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
          type='submit'
        >
          Make a plan to vote!
        </button>
      </div>
    </form>
  );
};
