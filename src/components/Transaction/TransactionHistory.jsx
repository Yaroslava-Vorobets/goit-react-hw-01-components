import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import {TableTransaction, TableRow, TableTr }from './transactionHistory.styled';
import { Container } from '../App/App.styles';
const TransactionHistory = ({items}) => {
    return (
         <Container>  
            <TableTransaction>            
            <thead>
                <TableTr>
                    <TableRow>Type</TableRow>
                    <TableRow>Amount</TableRow>
                    <TableRow>Currency</TableRow>
                </TableTr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                    <TransactionItem
                        type={item.type}
                        amount={item.amount}
                        currency={item.currency}/>
                    </tr>))}                 
                </tbody>           
            </TableTransaction>
            </Container>   
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.string.isRequired,
    })) 
}

export default TransactionHistory
