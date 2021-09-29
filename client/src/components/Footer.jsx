import logo from '../assets/images/growth.svg'

export default function Footer() {
  return (
    <footer>
      <div>
        <span className="copyright">© 2021 Copyright:</span>
        <span className="title">Shares Investment</span>
        <img className="logo" src={logo} alt="website-logo" />
      </div>
    </footer>
  )
}
