type Product = {
    id: string;
    name: string;
    price: number;
    category: {
        id: string;
        name: string;
    };
    discount ?: number
}

let listProduct: Product[] = [
    {
        id: "1",
        name: "Áo sơ mi",
        price: 200000,
        category: {
            id: "2",
            name: "Áo thời trang",
        }
    },
    {
        id: "3",
        name: "Áo bơi",
        price: 250000,
        category: {
            id: "4",
            name: "Áo bơi Nữ",
        },
        discount: 0.1
    },
    {
        id: "5",
        name: "Áo bơi nam",
        price: 300000,
        category: {
            id: "6",
            name: "Đồ bơi",
        },
        discount: 0.05
    }

]

function getFinalPrice (product: Product) : number {
    if (product.discount) {
        return product.price * (1 - product.discount);
    }
    return product.price
}

function printProductInfo (product: Product): void {
    console.log(`Tên: ${product.name}`);
    console.log(`Giá gốc: ${product.price.toLocaleString()} VND`);
    console.log(`Giá sau giảm: ${getFinalPrice(product).toLocaleString()} VND`);
    console.log(`Danh mục: ${product.category.name}`);

}

printProductInfo(listProduct[2]);