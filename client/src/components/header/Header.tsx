import { Link, Navigate, useNavigate } from "react-router-dom";
import style from "./style.module.css";
import { PrimaryButton } from "../../themes/buttons";
import { Menu } from "antd";
import { useState } from "react";

export function Header() {
  const [selectedKey, setSelectedKey] = useState("home");

  const navigate = useNavigate();

  const handleMenuClick = (e: any) => {
    setSelectedKey(e.key);
  };

  const routeToSignInPage = () => {
    navigate("/register");
  };

  return (
    <div className={style.mainHeader}>
      <div
        style={{
          backgroundColor: "black",
          fontFamily: "fantasy",
        }}
      >
        <h1 style={{ color: "white", fontWeight: "bold" }}>Rental UK</h1>
      </div>

      <div className="flex justify-between" style={{ width: "30%" }}>
        <Menu
          onClick={handleMenuClick}
          selectedKeys={[selectedKey]}
          mode="horizontal"
          inlineCollapsed={false}
        >
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="users">
            <Link to="/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="apartments">
            <Link to="/apartments">Apartments</Link>
          </Menu.Item>
          <Menu.Item key="login">
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu>
      </div>
      <div style={{ width: "200px" }}>
        <PrimaryButton onClick={routeToSignInPage}>Sign in</PrimaryButton>
      </div>
    </div>
  );
}
