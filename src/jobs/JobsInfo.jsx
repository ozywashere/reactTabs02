import PropTypes from 'prop-types';
import JobsContent from './JobsContent';
function JobsInfo({ data, currentItem }) {
  const { company, dates, duties, title } = data[currentItem];

  return (
    <div className='"mx-auto max-w-screen-sm shadow-lg p-5 rounded-xl shadow-blue-500 '>
      <h2 className='text-4xl font-bold text-gray-800 mb-4'>{title}</h2>
      <h3 className='text-xl font-bold text-gray-600 mb-2'>{company}</h3>
      <p className='text-gray-600'>{dates}</p>
      <JobsContent duties={duties} />
    </div>
  );
}

JobsInfo.propTypes = {
  data: PropTypes.array.isRequired,
  currentItem: PropTypes.number.isRequired,
};
export default JobsInfo;
