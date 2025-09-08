import classes from "./logo.module.css";
import logo from "../../assets/images/logo2.png"

const Logo = ({ variant = "dark" }) => {
  return (
    <a
      href="/"
      className={`${classes["logo"]} ${
        variant === "dark" ? classes["light"] : classes["dark"]
      }`}
    >
      <img src={logo} alt="Logo" />
    </a>
  );
};

export default Logo;
