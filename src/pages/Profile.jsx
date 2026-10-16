const mockUserData = {
  fullName: 'NGUYỄN VĂN A',
  avatarUrl: null, // Hoặc chữ viết tắt 'NA'
  initials: 'NV',
  email: 'nguyenvana@qnu.edu.vn',
  phone: '0912 345 678',
  organization: 'Trường Đại học Quy Nhơn',
  department: 'Phòng Đào tạo & Tuyển sinh',
  role: 'Cán bộ Kiểm duyệt Hồ sơ',
  permissions: ['Duyệt hồ sơ', 'Xem OCR', 'Xuất báo cáo', 'Cảnh báo sai lệch'],
  createdAt: '15/01/2024',
}

function AvatarCard({ user }) {
  return (
    <div className="card profile-avatar-card">
      <div className="avatar-wrapper">
        {user.avatarUrl ? (
          <img src={user.avatarUrl} alt={user.fullName} className="avatar-img" />
        ) : (
          <div className="avatar-circle">{user.initials}</div>
        )}
      </div>
      <h3 className="profile-user-name">{user.fullName}</h3>
      <div className="profile-subtext">{user.role}</div>
    </div>
  )
}

function InfoCard({ user }) {
  return (
    <div className="card profile-info-card">
      <div className="info-group">
        <h4 className="group-title">LIÊN HỆ & CÔNG TÁC</h4>
        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">Email</span>
            <span className="info-value">{user.email}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Số điện thoại</span>
            <span className="info-value">{user.phone}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Đơn vị công tác</span>
            <span className="info-value">{user.organization}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Phòng ban</span>
            <span className="info-value">{user.department}</span>
          </div>
        </div>
      </div>

      <div className="info-group">
        <h4 className="group-title">VAI TRÒ & PHÂN QUYỀN</h4>
        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">Vai trò</span>
            <span className="info-value font-bold">{user.role}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Ngày tạo tài khoản</span>
            <span className="info-value">{user.createdAt}</span>
          </div>
          <div className="info-item full-width">
            <span className="info-label">Quyền hạn</span>
            <div className="permission-tags">
              {user.permissions.map((perm, index) => (
                <span key={index} className="perm-tag">
                  {perm}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Profile() {
  return (
    <>
      <div className="crumb">Trang cá nhân / Thông tin cá nhân</div>
      <h2>Thông tin cán bộ</h2>

      <div className="profile-layout-grid">
        <AvatarCard user={mockUserData} />
        <InfoCard user={mockUserData} />
      </div>
    </>
  )
}
