let tables = ["MLT", "SSX", "LLTT"];
let totalRevenue = 0;
for (let i = 0; i < tables.length; i++) {
  let bill = 0;
  let food = tables[i];
  console.log("Ban " + (i + 1));
  console.log("Danh sach mon: " + food);
  for (let j = 0; j < food.length; j++) {
    let item = food[j];
    if (item === "X") {
      continue;
    }
    if (item === "S") {
      bill = bill + 35000;
    } else if (item === "M") {
      bill = bill + 42000;
    } else if (item === "L") {
      bill = bill + 48000;
    } else if (item === "T") {
      bill = bill + 10000;
    }
  }
  console.log("Tien truoc giam: " + bill + " VND");
  if (bill > 100000) {
    bill = bill * 0.9;
    console.log("Duoc giam 10%");
  }
  console.log("Tien phai tra: " + bill + " VND");
  console.log("-------------------------");
  totalRevenue = totalRevenue + bill;
}
console.log("TONG DOANH THU CA: " + totalRevenue + " VND");
