import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import { isMobile } from "react-device-detect";

function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const toggle = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  const menus = [
    {
      label: "自分の記録",
      icon: "/assets/images/menu/menu-1.svg",
      link: "/",
    },
    {
      label: "チャレンジ",
      icon: "/assets/images/menu/menu-2.svg",
      link: "/my-record",
    },
    {
      label: "お知らせ",
      icon: "/assets/images/menu/menu-3.svg",
      link: "/column-page",
      iconInfo: "/assets/images/menu/info.svg",
    },
  ];

  const menusMobile = [
    {
      label: "自分の記録",
      link: "",
    },
    {
      label: "体重グラフ",
      link: "",
    },
    {
      label: "目標",
      link: "",
    },
    {
      label: "選択中のコース",
      link: "",
    },
    {
      label: "コラム一覧",
      link: "",
    },
    {
      label: "設定",
      link: "",
    },
  ];

  const redirect = (link) => {
    history.push(link);
  };

  return (
    <div className="header-wrapper">
      <Container>
        <Navbar expand="md" container="fluid">
          <NavbarBrand href="/">
            <img className="logo" src="/assets/images/logo.svg" alt="" />
          </NavbarBrand>
          {/* <NavbarToggler onClick={toggle}  /> */}
          <Collapse isOpen={isOpen} navbar className="menu-item-wrapper">
            <Nav className="" navbar>
              {isMobile
                ? menusMobile.map((m) => (
                    <NavItem>
                      <NavLink onClick={(_) => redirect(m.link)}>
                        <div className="menu-item-mobile">
                          <span className="menu-item-text">{m.label}</span>
                        </div>
                      </NavLink>
                    </NavItem>
                  ))
                : menus.map((m) => (
                    <NavItem>
                      <NavLink onClick={(_) => redirect(m.link)}>
                        <div className="menu-item">
                          <img className="menu-item-img" src={m.icon} alt="" />
                          <span className="menu-item-text">{m.label}</span>
                          {m.iconInfo && (
                            <img
                              className="menu-item-info"
                              src={m.iconInfo}
                              alt=""
                            />
                          )}
                        </div>
                      </NavLink>
                    </NavItem>
                  ))}
            </Nav>
          </Collapse>
          <div className="button-toggle" onClick={(_) => toggle()}>
            {!isOpen ? (
              <img src="/assets/images/menu/open.svg" alt="" />
            ) : (
              <img src="/assets/images/menu/close.svg" alt="" />
            )}
          </div>
        </Navbar>
      </Container>
    </div>
  );
}

export default Example;
