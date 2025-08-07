type Product = {
  id: string;
  name: string;
  price: number;
};

type OrderItem = {
  product: Product;
  quantity: number;
  note?: string;
};

type Order = {
  orderId: string;
  customerName: string;
  items: OrderItem[];
  deliveryAddress: string;
  isPaid: boolean;
};

type Invoice = {
  invoiceId: string;
  orders: Order[];
  createdAt: Date;
};

function calculateInvoiceTotal(invoice: Invoice): number {
  let total = 0;
  for (let order of invoice.orders) {
    for (let item of order.items) {
      total += item.product.price * item.quantity;
    }
  }
  return total;
}

function getUnpaidOrders(invoice: Invoice): Order[] {
  let unpaid: Order[] = [];
  for (let order of invoice.orders) {
    if (!order.isPaid) {
      unpaid.push(order);
    }
  }
  return unpaid;
}

function printInvoice(invoice: Invoice): void {
  const dateStr = invoice.createdAt.toISOString().split("T")[0];
  console.log("HÓA ĐƠN: #" + invoice.invoiceId + " - Ngày tạo: " + dateStr);
  for (let order of invoice.orders) {
    console.log("\nĐƠN HÀNG: #" + order.orderId + " - " + order.customerName);
    for (let item of order.items) {
      let line = "- " + item.product.name + " × " + item.quantity + " → " + (item.product.price * item.quantity).toLocaleString() + " VND";
      if (item.note !== undefined) {
        line = line + " (note: " + item.note + ")";
      }
      console.log(line);
    }
    let orderTotal = 0;
    for (let item of order.items) {
      orderTotal += item.product.price * item.quantity;
    }
    if (orderTotal > 0) {
      console.log("Tổng đơn: " + orderTotal.toLocaleString() + " VND");
    }
    if (order.isPaid === true) {
      console.log("Trạng thái: ĐÃ THANH TOÁN");
    } else {
      console.log("Trạng thái: CHƯA THANH TOÁN");
    }
  }
  const grandTotal = calculateInvoiceTotal(invoice);
  console.log("\n>> Tổng cộng hóa đơn: " + grandTotal.toLocaleString() + " VND");
}

const invoice: Invoice = {
  invoiceId: "INV001",
  createdAt: new Date("2024-05-14"),
  orders: [
    {
      orderId: "ORD001",
      customerName: "Nguyễn Văn A",
      deliveryAddress: "Hà Nội",
      isPaid: true,
      items: [
        { product: { id: "P1", name: "Áo sơ mi", price: 250000 }, quantity: 2 },
        { product: { id: "P2", name: "Quần jean", price: 400000 }, quantity: 1 }
      ]
    },
    {
      orderId: "ORD002",
      customerName: "Trần Thị B",
      deliveryAddress: "Đà Nẵng",
      isPaid: false,
      items: [
        { product: { id: "P3", name: "Váy hoa", price: 700000 }, quantity: 1, note: "size M" }
      ]
    }
  ]
};

printInvoice(invoice);
