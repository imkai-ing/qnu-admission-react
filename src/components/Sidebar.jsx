const navMain = [
  ['overview', '⌂', 'Tổng quan'],
  ['files', '▣', 'Hồ sơ tuyển sinh'],
  ['upload', '⇧', 'Tải hồ sơ'],
  ['ocr', '▤', 'OCR & Đối chiếu'],
  ['warnings', '⚠', 'Cảnh báo'],
]
const navSystem = [
  ['profile', '●', 'Thông tin cá nhân'],
  ['settings', '⚙', 'Cấu hình'],
]

export default function Sidebar({ page, setPage }) {
  const renderItem = ([id, icon, label]) => (
    <button key={id} className={`nav-item ${page === id ? 'active' : ''}`} onClick={() => setPage(id)}>
      <span className="nav-icon">{icon}</span><span>{label}</span>
    </button>
  )
  return (
    <aside className="sidebar">
      <div className="brand">
        <img src="/logo.png" alt="Logo Trường Đại học Quy Nhơn" />
        <div className="brand-name">TRƯỜNG ĐẠI HỌC QUY NHƠN</div>
      </div>
      <div className="profile-card">
        <div className="avatar-small">?</div>
        <div><div className="profile-name">Chưa đăng nhập</div><div className="profile-role">Vui lòng đăng nhập để tiếp tục</div></div>
      </div>
      <div className="nav-heading">TRANG CHÍNH</div>
      {navMain.map(renderItem)}
      <div className="nav-heading system-heading">HỆ THỐNG</div>
      {navSystem.map(renderItem)}
      <div className="sidebar-footer">Frontend demo • ReactJS<br/>Backend / CSDL chưa kết nối</div>
    </aside>
  )
}
