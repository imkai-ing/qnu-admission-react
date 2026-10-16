const operationLabels = {
  upload: 'tiếp nhận hồ sơ',
  approve: 'phê duyệt hồ sơ',
  supplement: 'yêu cầu bổ sung hồ sơ',
  settings: 'thay đổi cấu hình',
}

export default function Login({ onSuccess, onSwitch, pendingOperation }) {
  return (
    <main className="auth-layout">
      <section className="auth-brand-panel">
        <img src="/logo.png" alt="Logo Trường Đại học Quy Nhơn" />
        <p className="auth-eyebrow">TRƯỜNG ĐẠI HỌC QUY NHƠN</p>
        <h1>Cổng tuyển sinh QNU</h1>
        <p className="auth-brand-copy">Hệ thống tiếp nhận và theo dõi hồ sơ tuyển sinh.</p>
      </section>
      <section className="auth-card" aria-labelledby="login-title">
        <div className="auth-card-heading">
          <p className="auth-eyebrow">TÀI KHOẢN</p>
          <h2 id="login-title">Đăng nhập</h2>
          <p>Nhập thông tin để tiếp tục phiên demo.</p>
        </div>
        {pendingOperation && <div className="auth-pending" role="status">Vui lòng đăng nhập để {operationLabels[pendingOperation] || 'tiếp tục thao tác'}.</div>}
        <form onSubmit={event => { event.preventDefault(); onSuccess() }}>
          <label htmlFor="login-email">Email</label>
          <input id="login-email" name="email" type="email" autoComplete="email" placeholder="name@example.com" required />
          <label htmlFor="login-password">Mật khẩu</label>
          <input id="login-password" name="password" type="password" autoComplete="current-password" placeholder="Nhập mật khẩu" required />
          <button className="primary auth-submit" type="submit">Đăng nhập demo</button>
        </form>
        <p className="auth-demo-note"><b>Lưu ý:</b> Đây chỉ là demo frontend, không xác minh tài khoản thật. Mật khẩu không được lưu và phiên demo sẽ mất khi tải lại trang.</p>
        <p className="auth-switch">Chưa có tài khoản? <button type="button" className="auth-link" onClick={() => onSwitch('register')}>Đăng ký</button></p>
      </section>
    </main>
  )
}
