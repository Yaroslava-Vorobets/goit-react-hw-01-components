import PropTypes from 'prop-types';
import {TableTd}from './transactionItem.styled';
const TransactionItem = ({type, amount, currency}) => {
    return (       
        <>
            <TableTd>{type}</TableTd>
            <TableTd>{amount}</TableTd>
            <TableTd>{currency}</TableTd>
        </>      
    )
}

TransactionItem.propTypes = {    
    type: PropTypes.string.isRequired, 
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

export default TransactionItem