import { data } from "../data";

//메인 페이지) Navbar 메뉴리스트
const NavbarMenuList = () => {
  const menulist = data.menuListData;

  return (
    <>
      {menulist.map((menu) => (
        <li key={menu.id}>{menu.menuItem}</li>
      ))}
    </>
  );
};

export default NavbarMenuList;
