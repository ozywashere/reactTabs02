import PropTypes from 'prop-types';
import JobsInfo from './JobsInfo';
import JobsFilter from './JobsFilter';
function Jobs({ data, setData, currentItem, setCurrenItem }) {
  return (
    <section>
      {/*  */}
      <div className='py-8 sm:py-12 lg:py-16 px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8 flex justify-center'>
        <JobsFilter
          data={data}
          setData={setData}
          currentItem={currentItem}
          setCurrenItem={setCurrenItem}
        />
        <JobsInfo data={data} currentItem={currentItem} />
      </div>
    </section>
  );
}
Jobs.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
  currentItem: PropTypes.number.isRequired,
  setCurrenItem: PropTypes.func.isRequired,
};

export default Jobs;
