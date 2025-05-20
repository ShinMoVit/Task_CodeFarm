// src/App.jsx
import { useState } from "react";
import { students as studentData } from "./dataStudents";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [filterAvg, setFilterAvg] = useState("all");
  const [filterRank, setFilterRank] = useState("all");

  const calculateAverage = (student) => {
    return ((student.math + student.literature + student.english) / 3).toFixed(
      2
    );
  };

  const getRank = (avg) => {
    if (avg >= 8) return "Giỏi";
    if (avg >= 6.5) return "Khá";
    if (avg >= 5) return "Trung bình";
    return "Yếu";
  };

  const handleSearch = (e) => setSearch(e.target.value.toLowerCase());
  const handleFilterAvg = (e) => setFilterAvg(e.target.value);
  const handleFilterRank = (e) => setFilterRank(e.target.value);

  const filteredStudents = studentData.filter((student) => {
    const avg = parseFloat(calculateAverage(student));
    const rank = getRank(avg);

    const matchesSearch = student.name.toLowerCase().includes(search);
    const matchesAvg =
      filterAvg === "all"
        ? true
        : filterAvg === ">=8"
        ? avg >= 8
        : filterAvg === ">=6.5"
        ? avg >= 6.5 && avg < 8
        : filterAvg === ">=5"
        ? avg >= 5 && avg < 6.5
        : avg < 5;

    const matchesRank = filterRank === "all" ? true : rank === filterRank;

    return matchesSearch && matchesAvg && matchesRank;
  });

  return (
    <div className="container">
      <h1>Danh sách sinh viên</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Tìm kiếm theo tên..."
          onChange={handleSearch}
        />

        <select onChange={handleFilterAvg}>
          <option value="all">Lọc theo điểm trung bình</option>
          <option value=">=8">Giỏi </option>
          <option value=">=6.5">Khá </option>
          <option value=">=5">Trung bình </option>
          <option value="<5">Yếu </option>
        </select>

        <select onChange={handleFilterRank}>
          <option value="all">Lọc theo học lực</option>
          <option value="Giỏi">Giỏi</option>
          <option value="Khá">Khá</option>
          <option value="Trung bình">Trung bình</option>
          <option value="Yếu">Yếu</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Toán</th>
            <th>Văn</th>
            <th>Anh</th>
            <th>Trung bình</th>
            <th>Học lực</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => {
            const avg = calculateAverage(student);
            const rank = getRank(avg);
            return (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.math}</td>
                <td>{student.literature}</td>
                <td>{student.english}</td>
                <td>{avg}</td>
                <td>{rank}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
