function Error() {
  return (
    <section>
      <div className='max-w-screen-xl mx-auto'>
        <div className='flex justify-center items-center h-screen mx-auto'>
          <img src='404.svg' alt='404' className='w-24 h-24' />
          <div
            className='absolute text-4xl font-bold text-gray-800'
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <h1>Page Not Found</h1>
            <p>
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>
            <div className='mt-4'>
              <button className='bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 mr-4'>
                Back to Home
              </button>
              <button className='bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600'>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Error;
