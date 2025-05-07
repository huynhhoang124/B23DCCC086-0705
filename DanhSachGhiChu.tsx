// src/components/DanhSachGhiChu.tsx
import React from 'react';
import GhiChu from './GhiChu'; // Thành phần hiển thị mỗi ghi chú
import { GhiChu as GhiChuType } from '../types';

interface DanhSachGhiChuProps {
  ghiChus: GhiChuType[];
  toggleImportant: (id: string) => void;
  deleteGhiChu: (id: string) => void;
  viewMode: 'list' | 'grid';
}

const DanhSachGhiChu: React.FC<DanhSachGhiChuProps> = ({
  ghiChus,
  toggleImportant,
  deleteGhiChu,
  viewMode,
}) => {
  return (
    <div className={viewMode === 'grid' ? 'grid-view' : 'list-view'}>
      {ghiChus.map((ghiChu) => (
        <GhiChu
          key={ghiChu.id}
          ghiChu={ghiChu}
          toggleImportant={toggleImportant}
          deleteGhiChu={deleteGhiChu}
        />
      ))}
    </div>
  );
};

export default DanhSachGhiChu;
