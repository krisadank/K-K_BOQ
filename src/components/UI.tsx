import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { X, Search, FolderOpen, ArrowUpRight } from 'lucide-react';
import type { Project } from '../types';
import { currency, total } from '../data';
export function Modal({ title, children, close }: { title: string; children: ReactNode; close: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => { const dialog = ref.current!; dialog.showModal(); return () => dialog.close(); }, []);
  return <dialog ref={ref} onCancel={close} onClick={e => { if (e.target === e.currentTarget) close(); }}><div className="modal-head"><h2>{title}</h2><button className="icon-button" onClick={close} aria-label="ปิด"><X size={20}/></button></div>{children}</dialog>;
}
export function SearchBox({ value, onChange, placeholder }: { value: string; onChange: (s: string) => void; placeholder: string }) { return <div className="search"><Search size={18}/><input aria-label={placeholder} placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)}/></div>; }
export function Empty({ text }: { text: string }) { return <div className="empty"><FolderOpen size={32}/><p>{text}</p></div>; }
export function ProjectTable({ projects, open }: { projects: Project[]; open: (id: string) => void }) {
  if (!projects.length) return <Empty text="ไม่พบโครงการ ลองสร้างโครงการใหม่หรือเปลี่ยนคำค้นหา"/>;
  return <div className="table-scroll"><table><thead><tr><th>ชื่อโครงการ / ลูกค้า</th><th>สถานที่</th><th>สถานะ</th><th className="number">มูลค่า BOQ</th><th></th></tr></thead><tbody>{projects.map(p => <tr key={p.id}><td><button className="project-link" onClick={() => open(p.id)}><span className="project-icon"><FolderOpen size={20}/></span><span><strong>{p.name}</strong><small>{p.client}</small></span></button></td><td className="muted">{p.location || '—'}</td><td><span className={`badge ${p.status === 'แบบร่าง' ? 'draft' : ''}`}>{p.status}</span></td><td className="number money">{currency(total(p))}</td><td><button className="icon-button" aria-label={`เปิด ${p.name}`} onClick={() => open(p.id)}><ArrowUpRight size={19}/></button></td></tr>)}</tbody></table></div>;
}
