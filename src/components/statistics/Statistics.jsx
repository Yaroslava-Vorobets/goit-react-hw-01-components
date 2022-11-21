import PropTypes from 'prop-types';
import StatisticsElement from './StatisticsElem';

const Statistics = ({ title, ststs }) => {
    return (
        <section class="statistics">
        {title && <h2 class="title">{title}</h2>}
        <ul class="stat-list">
            {ststs.map(stat => (
                <li key={stat.id}>
                    <StatisticsElement
                    label={stat.label}
                    percentage={stat.percentage}/>
                 </li>    
             ))}         
        </ul>
        </section>
    )
}

Statistics.propTypes = {
     title:PropTypes.string,
     ststs:PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.string.isRequired,
    })) 
}

export default Statistics