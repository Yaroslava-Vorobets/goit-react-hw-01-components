import PropTypes from 'prop-types';

const StatisticsStats = ({ label, percentage }) => {
   return (
       <>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
      </>
   )
}

StatisticsStats.propTypes = {
   label: PropTypes.string.isRequired,
   percentage: PropTypes.number.isRequired
}
 
export default StatisticsStats

