import type { Item, Project } from './types';
export const currency = (value: number) => new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB', minimumFractionDigits: 2 }).format(value);
export const total = (project: Project) => project.lines.reduce((sum, line) => sum + Math.round(line.quantity * line.price * 100) / 100, 0);
export const librarySeed: Item[] = [
  { id: 'i1', code: 'STR-001', description: 'คอนกรีตผสมเสร็จ กำลังอัด 240 ksc', unit: 'ลบ.ม.', price: 2450, category: 'งานโครงสร้าง' },
  { id: 'i2', code: 'STR-002', description: 'เหล็กเสริมข้ออ้อย SD40 ขนาด 12 มม.', unit: 'กก.', price: 28.5, category: 'งานโครงสร้าง' },
  { id: 'i3', code: 'ARC-001', description: 'ก่อผนังอิฐมวลเบา หนา 7.5 ซม.', unit: 'ตร.ม.', price: 480, category: 'งานสถาปัตยกรรม' },
  { id: 'i4', code: 'ARC-002', description: 'ทาสีอะคริลิกภายใน พร้อมรองพื้น', unit: 'ตร.ม.', price: 185, category: 'งานสถาปัตยกรรม' },
  { id: 'i5', code: 'ARC-003', description: 'ปูกระเบื้องแกรนิตโต้ ขนาด 60 × 60 ซม.', unit: 'ตร.ม.', price: 850, category: 'งานสถาปัตยกรรม' },
  { id: 'i6', code: 'MEP-001', description: 'ติดตั้งโคมไฟ LED พร้อมอุปกรณ์', unit: 'ชุด', price: 1250, category: 'งานระบบ' },
];
export const projectsSeed: Project[] = [
  { id: 'p1', name: 'บ้านพักอาศัย The Green Residence', client: 'คุณธนกฤต วัฒนกุล', location: 'บางนา, กรุงเทพมหานคร', status: 'กำลังดำเนินการ', createdAt: '2026-10-10', lines: librarySeed.slice(0, 5).map((item, i) => ({ ...item, id: `l${i}`, quantity: [120, 8500, 640, 1280, 320][i] })) },
  { id: 'p2', name: 'อาคารสำนักงาน K&K', client: 'บริษัท เคแอนด์เค จำกัด', location: 'เมือง, นนทบุรี', status: 'กำลังดำเนินการ', createdAt: '2026-10-08', lines: librarySeed.map((item, i) => ({ ...item, id: `b${i}`, quantity: [340, 22000, 1800, 3600, 950, 120][i] })) },
  { id: 'p3', name: 'รีโนเวทคาเฟ่ ริมสวน', client: 'คุณพิมพ์ชนก ศรีสุข', location: 'ปากเกร็ด, นนทบุรี', status: 'แบบร่าง', createdAt: '2026-10-05', lines: librarySeed.slice(3).map((item, i) => ({ ...item, id: `c${i}`, quantity: [240, 85, 18][i] })) },
];
