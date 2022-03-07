import PropTypes from 'prop-types';
import TransactionItem from './Transactions';
function Transactions({ items }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(item => (
        <tbody key={item.id} className="item">
          <TransactionItem
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        </tbody>
      ))}
    </table>
  );
}
// Transactions.propTypes = {
//   id: PropTypes.number.isRequired,
//   type: PropTypes.string.isRequired,
//   amount: PropTypes.bool.isRequired,
//   currency: PropTypes.bool.isRequired,
// };

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
export default Transactions;
