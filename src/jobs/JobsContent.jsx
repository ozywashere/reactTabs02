import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
function JobsContent({ duties }) {
  return (
    <div className='flex flex-col gap-8 mt-4'>
      {duties.map((duty) => {
        const id = uuidv4();

        return (
          <div key={id} className='flex items-center'>
            <span>
              <svg
                className='w-4 h-4 mr-2 rounded-full text-blue-500'
                viewBox='0 0 24 24'
              >
                <path fill='currentColor' d='M0 0h24v24H0z' />
                <path fill='currentColor' d='M19 9h-6V3H9v6H3v6h6v6h4v-6h6z' />
              </svg>
            </span>
            <p className='text-gray-600'>{duty}</p>
          </div>
        );
      })}
    </div>
  );
}

JobsContent.propTypes = {
  duties: PropTypes.array.isRequired,
};
export default JobsContent;
