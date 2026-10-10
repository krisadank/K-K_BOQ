export type Item = { id: string; code: string; description: string; unit: string; price: number; category: string };
export type Line = Item & { quantity: number; custom?: boolean };
export type Project = { id: string; name: string; client: string; location: string; status: 'กำลังดำเนินการ' | 'แบบร่าง'; createdAt: string; lines: Line[] };
export type Page = 'dashboard' | 'projects' | 'library' | 'editor';
