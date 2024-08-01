import { data } from "../data";

//메인 페이지) Navbar 메뉴리스트
const NavbarMenuList = () => {
  return (
    <>
      {data.menuListData.map((menu) => (
        <li key={menu.id}>{menu.menuItem}</li>
      ))}
    </>
  );
};

export default NavbarMenuList;
