import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Files from './pages/Files'
import Upload from './pages/Upload'
import OCR from './pages/OCR'
import Warnings from './pages/Warnings'
import Profile from './pages/Profile'
import Settings from './pages/Settings'

export default function App(){
  const [page,setPage]=useState('overview'); const [mobileOpen,setMobileOpen]=useState(false); const [files,setFiles]=useState([]); const [selectedId,setSelectedId]=useState(null)
  const addFiles=(rawFiles,type)=>setFiles(prev=>[...prev,...rawFiles.map((f,i)=>({id:`${Date.now()}-${i}-${f.name}`,name:f.name,size:f.size,type,status:'Đang xử lý'}))])
  const selectFile=id=>setSelectedId(id)
  const navigate=id=>{setPage(id);setMobileOpen(false)}
  let content
  if(page==='overview') content=<Dashboard files={files} setPage={navigate}/>
  if(page==='files') content=<Files files={files} setPage={navigate} selectFile={selectFile}/>
  if(page==='upload') content=<Upload addFiles={addFiles} setPage={navigate}/>
  if(page==='ocr') content=<OCR files={files} selectedId={selectedId} setSelectedId={setSelectedId} setPage={navigate}/>
  if(page==='warnings') content=<Warnings/>
  if(page==='profile') content=<Profile/>
  if(page==='settings') content=<Settings/>
  return <div className="app-shell"><div className={`sidebar-wrap ${mobileOpen?'open':''}`} onClick={()=>setMobileOpen(false)}><div onClick={e=>e.stopPropagation()}><Sidebar page={page} setPage={navigate}/></div></div><div className="main"><Header setMobileOpen={setMobileOpen}/><main className="content">{content}<footer>QNU Admission • ReactJS</footer></main></div></div>
}
