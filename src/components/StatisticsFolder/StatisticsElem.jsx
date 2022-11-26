import PropTypes from 'prop-types';

const StatisticsElement = ({label, percentage}) => {
    return (
         <>
            <span>{label}</span>
            <span>{percentage}%</span>
        </>       
    )
}
 

StatisticsElement.propTypes = {
    label:  PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,

}
export default StatisticsElement