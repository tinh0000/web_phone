// function PageShoppingCard() {
//     return (
//         <>
//             <title>Giỏ Hàng</title>
//   <div classname="box-cart">
//     <div classname="list-cart">
//       <div classname="cart-item">
//         <div classname="item_img">
//           <img src="img/product-2.jpg" alt="" />
//         </div>
//         <div classname="item_content">
//           <div classname="content_top">
//             <div classname="info">
//               <h3 classname="title">Dưa hấu đỏ</h3>
//             </div>
//             <div classname="delete">
//               <a href="javascript:;">
//                 <i classname="fa-solid fa-trash-can">
//                 </i></a><i classname="fa-solid fa-trash-can">
//               </i></div><i classname="fa-solid fa-trash-can">
//             </i></div><i classname="fa-solid fa-trash-can">
//             <div classname="content_bot">
//               <div classname="left">
//                 <span>Số lượng: </span>
//                 <div classname="quantity">
//                   <span type="minus">
//                     <i classname="fa fa-minus" aria-hidden="true">
//                     </i></span><i classname="fa fa-minus" aria-hidden="true">
//                     <input />
//                     <span type="plus">
//                       <i classname="fa fa-plus" aria-hidden="true">
//                       </i></span><i classname="fa fa-plus" aria-hidden="true">
//                     </i></i></div><i classname="fa fa-minus" aria-hidden="true"><i classname="fa fa-plus" aria-hidden="true">
//                   </i></i></div><i classname="fa fa-minus" aria-hidden="true"><i classname="fa fa-plus" aria-hidden="true">
//                   <div classname="price">
//                     <span>15.00</span> VND
//                   </div>
//                   <div classname="pricecore" style={{}} display: "none" }}>
//                     31
//                   </div>
//                 </i></i></div><i classname="fa fa-minus" aria-hidden="true"><i classname="fa fa-plus" aria-hidden="true">
//               </i></i></i></div><i classname="fa-solid fa-trash-can"><i classname="fa fa-minus" aria-hidden="true"><i classname="fa fa-plus" aria-hidden="true">
//             </i></i></i></div><i classname="fa-solid fa-trash-can"><i classname="fa fa-minus" aria-hidden="true"><i classname="fa fa-plus" aria-hidden="true">
//           </i></i></i></div><i classname="fa-solid fa-trash-can"><i classname="fa fa-minus" aria-hidden="true"><i classname="fa fa-plus" aria-hidden="true">
//           <div classname="s_total">
//             <div classname="info">
//               <div>Tổng tiền</div>
//               <div classname="total">
//                 <span>0</span> VND
//               </div>
//             </div>
//           </div>
//           <a href="order" classname="s_button">
//             <i classname="fa fa-shopping-cart" aria-hidden="true">
//               Đặt hàng ngay
//             </i></a><i classname="fa fa-shopping-cart" aria-hidden="true">
//           </i></i></i></i></div><i classname="fa-solid fa-trash-can"><i classname="fa fa-minus" aria-hidden="true"><i classname="fa fa-plus" aria-hidden="true"><i classname="fa fa-shopping-cart" aria-hidden="true">
//           {'{'}/* <div classname="shopping-cart">
//             <h2>Giỏ Hàng của bạn</h2>
//             <table classname="table table-striped">
//               <thead>
//                 <tr>
//                   <th>Sản Phẩm</th>
//                   <th>Giá</th>
//                   <th>Số Lượng</th>
//                   <th>Tổng tiền</th>
//                   <th>Xóa</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>
//                     <h3>Bí đỏ </h3>
//                   </td>
//                   <td>10.00 VNĐ</td>
//                   <td>
//                     <input type="number" min="{1}" defaultvalue="{1}" classname="quantity-input" />
//                   </td>
//                   <td>10.00 VNĐ</td>
//                   <td>
//                     <button classname="btn-delete">
//                       <i classname="fa fa-trash">
//                       </i></button><i classname="fa fa-trash">
//                     </i></td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <h3>Dưa leo</h3>
//                   </td>
//                   <td>15.00 VNĐ</td>
//                   <td>
//                     <input type="number" min="{1}" defaultvalue="{1}" classname="quantity-input" />
//                   </td>
//                   <td>15.00 VNĐ</td>
//                   <td>
//                     <button classname="btn-delete">
//                       <i classname="fa fa-trash">
//                       </i></button><i classname="fa fa-trash">
//                     </i></td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <h3>Dưa Hấu</h3>
//                   </td>
//                   <td>15.00 VNĐ</td>
//                   <td>
//                     <input type="number" min="{1}" defaultvalue="{1}" classname="quantity-input" />
//                   </td>
//                   <td>15.00 VNĐ</td>
//                   <td>
//                     <button classname="btn-delete">
//                       <i classname="fa fa-trash">
//                       </i></button><i classname="fa fa-trash">
//                     </i></td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <h3>Thịt Gà</h3>
//                   </td>
//                   <td>15.00 VNĐ</td>
//                   <td>
//                     <input type="number" min="{1}" defaultvalue="{1}" classname="quantity-input" />
//                   </td>
//                   <td>15.00 VNĐ</td>
//                   <td>
//                     <button classname="btn-delete">
//                       <i classname="fa fa-trash">
//                       </i></button><i classname="fa fa-trash">
//                     </i></td>
//                 </tr>
//               </tbody>
//             </table>
//             <div classname="cart-total">
//               <p>
//                 Tổng Tiền: <span>25.00 VNĐ</span>
//               </p>
//               <p>
//                 Phí Ship: <span>0.00 VNĐ</span>
//               </p>
//               <p>
//                 Tổng Cộng: <span>25.00 VNĐ</span>
//               </p>
//               <button classname="btn-buy">Thanh Toán</button>
//             </div>
//           </div> 
//         </>
//     );
// }

// export default PageShoppingCard;





  
         
