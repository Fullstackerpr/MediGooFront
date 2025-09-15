import { memo } from "react";
import SideBarLink from "./SideBarLink";

import logoo from "../../shared/assets/logoo.svg";
import dashbor from "../../shared/assets/dashboard.svg";
import plus from "../../shared/assets/plus.svg";
import user from "../../shared/assets/user.svg";
import set from "../../shared/assets/setting.svg";
import back from "../../shared/assets/back.svg";

const SideBar = () => {
  const links = [
    { to: "/", img: dashbor, label: "Dashboard", end: true },
    { to: "/doctor", img: plus, label: "Shifokorlar" },
    { to: "/potition", img: plus, label: "Ariza" },
    { to: "/patient", img: user, label: "Bemorlar" },
    { to: "/admin", img: user, label: "Administrator" },
    { to: "/setting", img: set, label: "Sozlamalar" },
    { to: "/exit", img: back, label: "Chiqish" },
  ];

  return (
    <div className="w-[300px] h-[calc(100vh-60px)] mt-[30px] ml-[24px] shadow-lg rounded-[10px]">
      <div className="flex justify-center gap-[8px] mt-[40px]">
        <img src={logoo} alt="" />
        <h1 className="font-semibold text-[32px]">Medic</h1>
      </div>
      <ul className="mt-[36px] px-[20px]">
        {links.map((link, i) => (
          <li key={i} className="mb-[8px]">
            <SideBarLink {...link} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(SideBar);
