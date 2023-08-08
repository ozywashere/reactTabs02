import PropTypes from 'prop-types';

function JobsFilter({ data, currentItem, setCurrenItem }) {
  return (
    <div className='flex flex-col gap-4'>
      {data.map((item, index) => {
        return (
          <button
            key={item.id}
            onClick={() => setCurrenItem(index)}
            className='bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 mr-4'
            style={{
              backgroundColor: currentItem === index ? '#1d4ed8' : '#2563eb',
            }}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
}

JobsFilter.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
  currentItem: PropTypes.number.isRequired,
  setCurrenItem: PropTypes.func.isRequired,
};

export default JobsFilter;
