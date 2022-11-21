import PropTypes from 'prop-types';

const StatisticsElement = ({label, percentage}) => {
    return (
         <>
            <span class="label">{label}</span>
            <span class="percentage">{percentage}%</span>
        </>       
    )
}
 

StatisticsElement.propTypes = {
    label:  PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,

}
export default StatisticsElement