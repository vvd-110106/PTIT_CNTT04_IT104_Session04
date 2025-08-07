"use strict";
function calculateOrderTotal(order) {
    let total = 0;
    for (let item of order.items) {
        total += item.product.price * item.quantity;
    }
    return total;
}
function printOrder(order) {
    console.log(` Đơn hàng: #${order.orderId}`);
    console.log(`Khachs hàng: ${order.customerName}`);
    console.log("Sanr phẩm");
    for (let item of order.items) {
        let processName = item.product.name;
        let quantity = item.quantity;
        let price = item.product.price;
        let total = price * quantity;
        console.log(`- ${processName} x ${quantity} = ${total.toLocaleString()} VND`);
    }
    let grandTotal = calculateOrderTotal(order);
    console.log(` Tổng cộng: ${grandTotal.toLocaleString()} VND`);
    if (order.note) {
        console.log(`Ghi chú: ${order}`);
    }
}
const order = {
    orderId: "ORD001",
    customerName: "Nguyễn Văn A",
    items: [
        {
            product: { id: "P01", name: "Áo sơ mi", price: 250000 },
            quantity: 2,
        },
        {
            product: { id: "P02", name: "Quần tây", price: 400000 },
            quantity: 1,
        },
    ],
    note: "Giao sau 18h",
};
printOrder(order);
