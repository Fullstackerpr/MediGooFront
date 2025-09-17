import { memo } from "react";
import user from "../../shared/assets/doctor/userImg.png";
import clock from "../../shared/assets/doctor/clock.svg";
import text from "../../shared/assets/doctor/text.svg";
import calen from "../../shared/assets/doctor/calendar.svg";
import stethscope from "../../shared/assets/doctor/stethoscope.svg";
import { Filter, Search } from "lucide-react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Doctor = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  if (pathname.startsWith("/doctor-detail")) {
    return <Outlet />;
  }

  return (
    <div className="pr-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[24px] font-semibold">Shifokorlar</h1>
          <p className="text-[16px] font-normal text-[#344054]">
            Showing: All Consultations of All Healthcare Providers
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center px-3 h-[40px] border-2 border-[#eaecf0] rounded-lg">
            <input
              type="text"
              name="search"
              placeholder="Qidirish..."
              className="outline-0"
            />
            <Search size={20} />
          </div>

          <button className="flex gap-2 items-center px-3 h-[40px] border-2 border-[#eaecf0] rounded-lg">
            Filtr <Filter size={18} />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between mb-[12px] p-[20px] mt-[28px] border-t-2 border-[#EAECF0] rounded-[10px] shadow-md">
        <div className="flex items-center gap-[20px]">
          <div>
            <img src={user} alt="Doctor" className="w-[80px] rounded-[4px]" />
          </div>

          <div>
            <h4 className="font-semibold text-[20px] pb-[4px]">
              Dr. Ratul Ahamed
            </h4>

            <div className="flex flex-wrap gap-6 text-[16px] text-[#475467] font-medium pb-[12px]">
              <span className="flex items-center gap-2">
                <img src={stethscope} alt="spec" className="w-5 h-5" />
                Heart Specialist
              </span>
              <span className="flex items-center gap-2">
                <img src={clock} alt="time" className="w-5 h-5" />
                9:30am - 01:00am BST
              </span>
              <span className="flex items-center gap-2">
                <img src={calen} alt="date" className="w-5 h-5" />
                Jun 24, 2021
              </span>
            </div>

            <div className="flex items-start gap-2 text-[14px] text-[#667085] font-normal">
              <img src={text} alt="desc" className="w-5 h-5 mt-1" />
              <p>
                Infectious Diseases Hub aims to provide up-to-date, essential
                research and on <br /> aspects of microbiology, virology, and
                parasitology.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <button className="bg-[#1067FF] text-white text-[18px] font-semibold rounded-xl px-5 py-3 mb-[8px] cursor-pointer">
            View Appointments
          </button>
          <button
            onClick={() => navigate("/doctor-detail")}
            className="border border-[#D0D5DD] text-[18px] font-semibold text-[#344054] rounded-xl py-3 cursor-pointer"
          >
            Batafsil
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between mb-[12px] p-[20px] mt-[28px] border-t-2 border-[#EAECF0] rounded-[10px] shadow-md">
        <div className="flex items-center gap-[20px]">
          <div>
            <img src={user} alt="Doctor" className="w-[80px] rounded-[4px]" />
          </div>

          <div>
            <h4 className="font-semibold text-[20px] pb-[4px]">
              Dr. Ratul Ahamed
            </h4>

            <div className="flex flex-wrap gap-6 text-[16px] text-[#475467] font-medium pb-[12px]">
              <span className="flex items-center gap-2">
                <img src={stethscope} alt="spec" className="w-5 h-5" />
                Heart Specialist
              </span>
              <span className="flex items-center gap-2">
                <img src={clock} alt="time" className="w-5 h-5" />
                9:30am - 01:00am BST
              </span>
              <span className="flex items-center gap-2">
                <img src={calen} alt="date" className="w-5 h-5" />
                Jun 24, 2021
              </span>
            </div>

            <div className="flex items-start gap-2 text-[14px] text-[#667085] font-normal">
              <img src={text} alt="desc" className="w-5 h-5 mt-1" />
              <p>
                Infectious Diseases Hub aims to provide up-to-date, essential
                research and on <br /> aspects of microbiology, virology, and
                parasitology.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <button className="bg-[#1067FF] text-white text-[18px] font-semibold rounded-xl px-5 py-3 mb-[8px] cursor-pointer">
            View Appointments
          </button>
          <button
            onClick={() => navigate("/doctor-detail")}
            className="border border-[#D0D5DD] text-[18px] font-semibold text-[#344054] rounded-xl py-3 cursor-pointer"
          >
            Batafsil
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between mb-[12px] p-[20px] mt-[28px] border-t-2 border-[#EAECF0] rounded-[10px] shadow-md">
        <div className="flex items-center gap-[20px]">
          <div>
            <img src={user} alt="Doctor" className="w-[80px] rounded-[4px]" />
          </div>

          <div>
            <h4 className="font-semibold text-[20px] pb-[4px]">
              Dr. Ratul Ahamed
            </h4>

            <div className="flex flex-wrap gap-6 text-[16px] text-[#475467] font-medium pb-[12px]">
              <span className="flex items-center gap-2">
                <img src={stethscope} alt="spec" className="w-5 h-5" />
                Heart Specialist
              </span>
              <span className="flex items-center gap-2">
                <img src={clock} alt="time" className="w-5 h-5" />
                9:30am - 01:00am BST
              </span>
              <span className="flex items-center gap-2">
                <img src={calen} alt="date" className="w-5 h-5" />
                Jun 24, 2021
              </span>
            </div>

            <div className="flex items-start gap-2 text-[14px] text-[#667085] font-normal">
              <img src={text} alt="desc" className="w-5 h-5 mt-1" />
              <p>
                Infectious Diseases Hub aims to provide up-to-date, essential
                research and on <br /> aspects of microbiology, virology, and
                parasitology.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <button className="bg-[#1067FF] text-white text-[18px] font-semibold rounded-xl px-5 py-3 mb-[8px] cursor-pointer">
            View Appointments
          </button>
          <button
            onClick={() => navigate("/doctor-detail")}
            className="border border-[#D0D5DD] text-[18px] font-semibold text-[#344054] rounded-xl py-3 cursor-pointer"
          >
            Batafsil
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between mb-[12px] p-[20px] mt-[28px] border-t-2 border-[#EAECF0] rounded-[10px] shadow-md">
        <div className="flex items-center gap-[20px]">
          <div>
            <img src={user} alt="Doctor" className="w-[80px] rounded-[4px]" />
          </div>

          <div>
            <h4 className="font-semibold text-[20px] pb-[4px]">
              Dr. Ratul Ahamed
            </h4>

            <div className="flex flex-wrap gap-6 text-[16px] text-[#475467] font-medium pb-[12px]">
              <span className="flex items-center gap-2">
                <img src={stethscope} alt="spec" className="w-5 h-5" />
                Heart Specialist
              </span>
              <span className="flex items-center gap-2">
                <img src={clock} alt="time" className="w-5 h-5" />
                9:30am - 01:00am BST
              </span>
              <span className="flex items-center gap-2">
                <img src={calen} alt="date" className="w-5 h-5" />
                Jun 24, 2021
              </span>
            </div>

            <div className="flex items-start gap-2 text-[14px] text-[#667085] font-normal">
              <img src={text} alt="desc" className="w-5 h-5 mt-1" />
              <p>
                Infectious Diseases Hub aims to provide up-to-date, essential
                research and on <br /> aspects of microbiology, virology, and
                parasitology.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <button className="bg-[#1067FF] text-white text-[18px] font-semibold rounded-xl px-5 py-3 mb-[8px] cursor-pointer">
            View Appointments
          </button>
          <button
            onClick={() => navigate("/doctor-detail")}
            className="border border-[#D0D5DD] text-[18px] font-semibold text-[#344054] rounded-xl py-3 cursor-pointer"
          >
            Batafsil
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Doctor);
