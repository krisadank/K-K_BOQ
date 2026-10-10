import { useState } from 'react';
import { Plus } from 'lucide-react';
import type { Project } from '../types';
import { ProjectTable, SearchBox } from '../components/UI';
export default function Projects({ projects, open, create }: { projects: Project[]; open: (id: string) => void; create: () => void }) { const [query, setQuery] = useState(''); return <><div className="page-heading"><div><p className="eyebrow">พื้นที่ทำงานของคุณ</p><h1>โครงการ</h1><p>จัดการโครงการและประมาณราคางานก่อสร้าง</p></div><button className="button" onClick={create}><Plus size={18}/>สร้างโครงการ</button></div><section className="panel"><div className="panel-heading"><h2>โครงการทั้งหมด <span className="count">{projects.length}</span></h2><SearchBox value={query} onChange={setQuery} placeholder="ค้นหาชื่อโครงการหรือลูกค้า..."/></div><ProjectTable projects={projects.filter(p => `${p.name} ${p.client}`.toLowerCase().includes(query.toLowerCase()))} open={open}/></section></>; }
