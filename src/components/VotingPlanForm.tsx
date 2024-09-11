'use client';

export const VotingPlanForm = () => {
  return (
    <form
      action='https://api.web3forms.com/submit'
      method='POST'
      className='w-full max-w-sm'
    >
      <input
        type='hidden'
        name='access_key'
        value='b580566a-512b-4451-a837-79841efd92c6'
      />
      <div className='md:flex md:items-center mb-6'>
        {/* <div className='md:w-1/3'>
          <label
            className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
            htmlFor='name'
          >
            Name
          </label>
        </div> */}
        {/* <div className='md:w-2/3'> */}
        <input
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
          id='name'
          type='text'
          name='name'
          placeholder='Name'
          required
        />
        {/* </div> */}
      </div>
      <div className='md:flex md:items-center mb-6'>
        {/* <div className='md:w-1/3'>
          <label
            className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
            htmlFor='email'
          >
            Email
          </label>
        </div> */}
        {/* <div className='md:w-2/3'> */}
        <input
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
          id='email'
          type='email'
          name='email'
          placeholder='Email'
          required
        />
        {/* </div> */}
      </div>
      {/* <div className='md:flex md:items-center mb-6'>
        <div className='md:w-1/3'>
          <label
            className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
            htmlFor='message'
          >
            Message
          </label>
        </div>
        <div className='md:w-2/3'>
          <textarea
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
            id='message'
            name='message'
            required
          ></textarea>
        </div>
      </div> */}
      <input
        type='hidden'
        name='redirect'
        value='https://web3forms.com/success'
      />
      <div className='flex justify-center'>
        {/* <div className='md:w-1/3'></div> */}
        {/* <div className='md:w-2/3'> */}
        <button
          className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
          type='submit'
        >
          Make a plan to vote!
        </button>
        {/* </div> */}
      </div>
    </form>
  );
};
