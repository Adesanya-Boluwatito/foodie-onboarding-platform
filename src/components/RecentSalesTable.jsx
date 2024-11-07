import React from 'react'

function RecentSlesTable({items}) {

    const handleStatus = status => {
        switch (status) {
            case "Approved":
                return "success";
            case 'Pending':
                return "warning";
            case 'Rejected':
                return "danger";
            default:
                return 'success';
        }
    };

  return (
    // <table className='table table-borderless datatable'>
    //     <thead className='table-light'>
    //         {/* <tr>
    //             <th scope="col">Order ID</th>
    //             <th scope="col">Customer</th>
    //             <th scope="col">Order</th>
    //             <th scope="col">Price</th>
    //             <th scope="col">Status</th>
    //         </tr> */}
    //     </thead>
    //     <tbody>
    //         {items && 
    //           items.length > 0 &&
    //           items.map(item => (
    //             <tr key={item.id}>
    //                 <th scope="row">
    //                     <a href="#">{item.number}</a>
    //                 </th>
    //                 <td>{item.customer}</td>
    //                 <td>
    //                     <a href="#" className="text-primary">
    //                         {item.product}
    //                     </a>
    //                 </td>
    //                 <td>₦{item.price.toFixed(2)}</td>
    //                 <td>
    //                     <span className={`badge bg-${handleStatus(item.status)}`}>
    //                         {item.status}
    //                     </span>
    //                 </td>
    //             </tr>
    //           ))
    //           }
    //     </tbody>
    // </table>


    
    <div className="recent-orders">
    <p>Lorem ipsum dolor</p>
    <a href="#">
      <table className="table">
        
        <tbody>
          {items && items.length > 0 && items.map((order, index) => (
            <tr key={index} className="table-row">
              <td>
                <img src={order.preview} alt="Order" className="order-img" />
              </td>
              <td>
                <div className="order-info">
                  <h6 className="product-title">{order.name}</h6>
                  <p className="product-id">{order._id}</p>
                </div>
              </td>
              <td>
                <div className="customer-info">
                  <p className="customer-name">{order.customer}</p>
                  <p className="customer-address">{order.address}</p>
                </div>
              </td>
              <td>
                <div className="price-info">
                  <p className="price">{order.price}</p>
                  <p className="quantity">x{order.quantity}</p>
                </div>
              </td>
              <td>
                <span className={`badge badge-${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </a>
  </div>
);
};

export default RecentSlesTable;