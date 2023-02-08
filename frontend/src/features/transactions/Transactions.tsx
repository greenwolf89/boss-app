import { useGetTransactionsQuery } from "./transactionsAPI";

function Transactions() {
  const { data: transactionsData } = useGetTransactionsQuery();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>nope</th>
            <th>Category</th>
            <th>Merchant</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactionsData?.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.amount}</td>
                <td>{transaction.category}</td>
                <td>{transaction.merchant}</td>
                <td>{transaction.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
