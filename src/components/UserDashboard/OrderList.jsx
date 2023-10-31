import OrderItem from "./OrderItem";

const OrderList = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl mb-2">Oder List</h2>
      </div>
      <div className="bg-white p-8 min-h-[300px]">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-center text-xl">
                <th>Order NO</th>
                <th>Order status</th>
                <th>Paid Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
