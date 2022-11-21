import PropTypes from 'prop-types';
import StatisticsStats from './StatisticsStats';



// function Statistics({items}) {
//     return (
//     <ul>
//         {items.map(item => (
//         <li key= {item.id}>
//             <StatisticsStats
//                 label={item.label}
//                 percentage={item.percentage} />
//         </li>
//         ))}
//     </ul>
//     )
// }

// Statistics.PropTypes = {
//     items: PropTypes.arrayOf(PropTypes.shape(
//        {id: PropTypes.string}
//    ),) 
// }

// export default Statistics
const Statistics = ({items}) => {
  return (       
    <section className="statistics">
    {title && <h2 className="title">{title}</h2>} 
     <ul className="stat-list">
         {items.map(item => {
            <li  key={item.id}>
                <StatisticsStats                   
                  label={item.label}  
                  percentage={item.percentage}/>             
            </li>
         })}
     </ul>    
     </section>  

 )}   


Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.string.isRequired,
  }))  
  
}

export default Statistics