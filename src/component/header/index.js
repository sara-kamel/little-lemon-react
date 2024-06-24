import Logo from '../../icons_assets/Logo.svg';
import '../header/styles.css';
export default function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="little lemon logo" />
      <nav>
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">ABOUT</a>
          </li>
          <li>
            <a href="/">MENU</a>
          </li>
          <li>
            <a href="/">RESERVATIONS</a>
          </li>
          <li>
            <a href="/">ORDER ONLINE</a>
          </li>
          <li>
            <a href="/">LOGIN</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
