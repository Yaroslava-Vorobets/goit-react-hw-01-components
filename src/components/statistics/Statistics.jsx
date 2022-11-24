import PropTypes from 'prop-types';
import StatisticsElement from './StatisticsElem';
import {Section, SectionTitle, List, ListEl} from './statistics.styled';

const Statistics = ({ title, ststs }) => {
    return (
        <Section>
        {title && <SectionTitle>{title}</SectionTitle>}
        <List>
            {ststs.map(stat => (
                < ListEl key={stat.id}>
                    <StatisticsElement
                    label={stat.label}
                    percentage={stat.percentage}/>
                 </ ListEl>    
             ))}         
        </List>
        </Section>
    )
}

Statistics.propTypes = {
     title:PropTypes.string,
     ststs:PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.string.isRequired,
    })) 
}

export default Statistics