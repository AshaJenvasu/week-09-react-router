สรุปภาพรวมการไหลของข้อมูล (Data Flow)
ต้นทาง (User): คลิกปุ่มดูรายละเอียดสินค้า ID 5 -> URL เปลี่ยนเป็น /product/5

ตัวกลาง (Router): เห็นเลข 5 อยู่ในตำแหน่ง :productId เลยจำไว้

ตัวรับ (useParams): ไปดึงเลข 5 มาส่งให้ Component ProductDetail

ตัวค้นหา (find): เอาเลข 5 ไปค้นในกองข้อมูล products ที่ import มา

ตัวแสดงผล (JSX): พอเจอข้อมูลสินค้าชิ้นที่ 5 ปุ๊บ ก็เอาชื่อ (product.name) ราคา (product.price) มาวางบนหน้าจอ
