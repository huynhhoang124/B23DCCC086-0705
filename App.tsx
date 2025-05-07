// src/App.tsx
import React, { useState, useEffect } from 'react';
import { GhiChu } from './types';
import DanhSachGhiChu from './components/DanhSachGhiChu'; // Thành phần hiển thị danh sách ghi chú
import FormGhiChu from './components/FormGhiChu'; // Thành phần thêm ghi chú mới
import TimKiemGhiChu from './components/TimKiemGhiChu'; // Thành phần tìm kiếm ghi chú

const App = () => {
  const [ghiChus, setGhiChus] = useState<GhiChu[]>([]);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');  // Chế độ xem
  const [searchTerm, setSearchTerm] = useState('');

  // Lấy ghi chú từ localStorage khi ứng dụng khởi động
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('ghiChus') || '[]');
    setGhiChus(storedNotes);
  }, []);

  // Lưu ghi chú vào localStorage mỗi khi có sự thay đổi
  useEffect(() => {
    localStorage.setItem('ghiChus', JSON.stringify(ghiChus));
  }, [ghiChus]);

  // Chuyển đổi chế độ xem giữa lưới và danh sách
  const toggleViewMode = () => {
    setViewMode(viewMode === 'list' ? 'grid' : 'list');
  };

  // Đánh dấu ghi chú là quan trọng hoặc bỏ đánh dấu
  const toggleImportant = (id: string) => {
    const updatedNotes = ghiChus.map((note) =>
      note.id === id ? { ...note, quanTrong: !note.quanTrong } : note
    );
    setGhiChus(updatedNotes);
  };

  // Xóa ghi chú
  const deleteGhiChu = (id: string) => {
    const updatedNotes = ghiChus.filter((note) => note.id !== id);
    setGhiChus(updatedNotes);
  };

  // Sắp xếp ghi chú quan trọng lên đầu danh sách
  const sortedNotes = [...ghiChus].sort((a, b) => {
    if (a.quanTrong && !b.quanTrong) return -1; // Quan trọng lên đầu
    if (!a.quanTrong && b.quanTrong) return 1;
    return 0; // Giữ nguyên thứ tự khi không có ghi chú quan trọng
  });

  return (
    <div>
      <h1>Ứng Dụng Ghi Chú Cá Nhân</h1>
      {/* Nút chuyển đổi giữa chế độ lưới và danh sách */}
      <button onClick={toggleViewMode}>
        Chuyển sang chế độ {viewMode === 'list' ? 'lưới' : 'danh sách'}
      </button>

      {/* Tìm kiếm ghi chú */}
      <TimKiemGhiChu searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Form thêm ghi chú mới */}
      <FormGhiChu onAddNote={(newNote) => setGhiChus([...ghiChus, newNote])} />

      {/* Hiển thị danh sách ghi chú */}
      <DanhSachGhiChu
        ghiChus={sortedNotes}
        toggleImportant={toggleImportant}
        deleteGhiChu={deleteGhiChu}
        viewMode={viewMode}
      />
    </div>
  );
};

export default App;
