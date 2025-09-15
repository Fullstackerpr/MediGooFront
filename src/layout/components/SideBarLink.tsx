import React, { memo } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  to: string;
  img: string;
  label: string;
  end?: boolean;
}

const SideBarLink: React.FC<Props> = ({ to, end, img, label }) => {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `flex gap-[12px] items-center text-[16px] py-[8px] px-[12px] rounded-[6px] transition
         ${
           isActive
             ? "bg-[#CCD0F899] text-[#0F5EE8] font-semibold"
             : "text-[#64748B] hover:bg-gray-100"
         }`
      }
    >
      <img src={img} alt={label} />
      <span>{label}</span>
    </NavLink>
  );
};

export default memo(SideBarLink);
