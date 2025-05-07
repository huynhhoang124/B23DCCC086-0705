// src/components/GhiChu.tsx
import React from 'react';
import { GhiChu as GhiChuType } from '../types';

interface GhiChuProps {
  ghiChu: GhiChuType;
  toggleImportant: (id: string) => void;
  deleteGhiChu: (id: string) => void;
}

const GhiChu: React.FC<GhiChuProps> = ({ ghiChu, toggleImportant, deleteGhiChu }) => {
  return (
    <div className="ghi-chu">
      <h3>{ghiChu.tieuDe}</h3>
      <p>{ghiChu.noiDung}</p>
      <p>{ghiChu.ngayTao}</p>
      <p>Nhãn: {ghiChu.nhan.join(', ')}</p>
      <button onClick={() => toggleImportant(ghiChu.id)}>
        {ghiChu.quanTrong ? 'Hủy quan trọng' : 'Đánh dấu quan trọng'}
      </button>
      <button onClick={() => deleteGhiChu(ghiChu.id)}>Xóa</button>
    </div>
  );
};

export default GhiChu;
