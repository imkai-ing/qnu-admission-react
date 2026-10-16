import { useState } from 'react'

function formatSize(bytes) { return `${(bytes / 1024).toFixed(1)} KB` }
function ext(name) { return name.split('.').pop()?.toUpperCase() || 'FILE' }

export default function Upload({ addFiles, setPage, onRequireAuth }) {
  const [docType, setDocType] = useState('Học bạ / Bảng điểm')
  const [selected, setSelected] = useState([])
  const onFiles = e => { if (!onRequireAuth('upload')) { e.target.value = ''; return } setSelected(Array.from(e.target.files || [])) }
  const receive = () => { if (!selected.length || !onRequireAuth('upload')) return; addFiles(selected, docType); setPage('ocr') }
  return <>
    <div className="crumb">Trang chủ / Tải hồ sơ</div><h2>Tiếp nhận hồ sơ</h2>
    <div className="card"><b>Định dạng hỗ trợ</b><div className="muted">JPG, JPEG, PNG, PDF • Dữ liệu được giữ trong bộ nhớ trình duyệt.</div></div>
    <div className="upload-grid">
      <div className="card">
        <label>Loại giấy tờ</label>
        <select value={docType} onChange={e => setDocType(e.target.value)}><option>Học bạ / Bảng điểm</option><option>CCCD / CMND</option><option>Giấy chứng nhận tốt nghiệp</option><option>Giấy tờ ưu tiên</option></select>
        <label className="upload-label">Chọn file</label>
        <label className="dropzone"><span className="upload-icon">⇧</span><b>Kéo thả hoặc chọn file</b><span className="muted">JPG, JPEG, PNG hoặc PDF</span><input type="file" multiple accept=".jpg,.jpeg,.png,.pdf" onClick={event=>{if(!onRequireAuth('upload'))event.preventDefault()}} onChange={onFiles}/></label>
        {selected.length > 0 && <div className="file-list">{selected.map(f => <div className="file-row" key={`${f.name}-${f.size}`}><div><b>{f.name}</b><div className="muted">{ext(f.name)} • {formatSize(f.size)}</div></div><span className="badge yellow">Chờ xử lý</span></div>)}</div>}
        <button className="primary full" disabled={!selected.length} onClick={receive}>Tiếp nhận hồ sơ</button>
      </div>
      <div className="card info-panel"><h3>Lưu ý</h3><p>File upload hiện được xử lý trực tiếp trên trình duyệt.</p><p>Không có dữ liệu mẫu được tạo sẵn khi bạn mở website.</p></div>
    </div>
  </>
}
