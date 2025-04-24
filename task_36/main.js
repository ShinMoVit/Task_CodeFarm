const students = [
  { id: 1, name: "Nguyễn Văn A", age: 20, city: "Hà Nội" },
  { id: 2, name: "Trần Thị B", age: 19, city: "TP.HCM" },
  { id: 3, name: "Lê Văn C", age: 21, city: "Đà Nẵng" },
];

const tableElement = document.querySelector("#dataTable");

const keys = Object.keys(students[0]);
const theadElement = tableElement.createTHead();
const trHeader = theadElement.insertRow();

for (let key of keys) {
  const thElement = document.createElement("th");
  thElement.textContent = key.toUpperCase();
  trHeader.appendChild(thElement);
}
const tbodyElement = tableElement.createTBody();
students.forEach((student) => {
  const trBody = tbodyElement.insertRow();
  Object.values(student).forEach((value) => {
    const td = trBody.insertCell();
    td.textContent = value;
  });
});
