// src/types.ts
export interface GhiChu {
  id: string;
  tieuDe: string;
  noiDung: string;
  ngayTao: string;
  nhan: string[];  // Tags hoặc danh mục
  quanTrong: boolean;  // Đánh dấu ghi chú quan trọng
}
