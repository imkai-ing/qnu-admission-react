import { useMemo, useState } from 'react'
export default function Files({ files, setPage, selectFile }) {
  const [search,setSearch] = useState(''); const [status,setStatus]=useState('Tất cả');
  const filtered=useMemo(()=>files.filter(f=>(!search||f.name.toLowerCase().includes(search.toLowerCase()))&&(status==='Tất cả'||f.status===status)),[files,search,status])
  return <><div className="crumb">Trang chủ / Hồ sơ tuyển sinh</div><h2>Danh sách hồ sơ tuyển sinh</h2>
    <div className="filters"><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Tìm kiếm tên file"/><select value={status} onChange={e=>setStatus(e.target.value)}><option>Tất cả</option><option>Đang xử lý</option></select></div>
    <div className="card table-wrap"><table><thead><tr><th>Tên file</th><th>Loại giấy tờ</th><th>Kích thước</th><th>Trạng thái</th><th></th></tr></thead><tbody>{filtered.length ? filtered.map((f,i)=><tr key={f.id}><td>{f.name}</td><td>{f.type}</td><td>{(f.size/1024).toFixed(1)} KB</td><td><span className="badge yellow">{f.status}</span></td><td><button className="link-btn" onClick={()=>{selectFile(f.id);setPage('ocr')}}>Mở</button></td></tr>):<tr><td colSpan="5" className="table-empty">Chưa có hồ sơ nào.</td></tr>}</tbody></table></div>
  </>
}
