import { memo } from "react";
import back from "../../../shared/assets/doctor/back.svg";
import user from "../../../shared/assets/doctor/userImg.png";
import tick from "../../../shared/assets/doctor/tick.svg";
import like from "../../../shared/assets/doctor/like.svg";
import verify from "../../../shared/assets/doctor/verify.svg";
import group from "../../../shared/assets/doctor/group.svg";
import bed from "../../../shared/assets/doctor/bed.svg";
import img from "../../../shared/assets/doctor/img.svg";
import eye from "../../../shared/assets/doctor/eye.svg";
import delet from "../../../shared/assets/doctor/delete.svg";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DoctorDetail = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center gap-[10px] text-[#1067FF] text-[18px] font-medium">
        <div onClick={() => navigate(-1)} className="cursor-pointer">
          <img src={back} alt="" />
        </div>
        <p>
          Shifokorlar / <span>Morshed Ali</span>
        </p>
      </div>
      <div className="mt-[40px] flex gap-[58px]">
        <div>
          <div className="flex flex-col items-center w-[400px] rounded-[10px] shadow-lg">
            <div className="mt-[28px]">
              <img
                src={user}
                alt=""
                className="w-[106px] h-[106px] rounded-[50%] shadow-md relative"
              />
              <img src={tick} alt="" className="absolute top-49 left-153" />
            </div>
            <div className="mt-[8px] flex flex-col items-center">
              <h3 className="pb-[8px] text-[18px] font-semibold">
                Mr.<span>Doctor Name</span>
              </h3>
              <span className="text-[#00DD00]">Active</span>
              <div className="flex items-center justify-center px-[12px] py-[4px] gap-[7px] bg-[#F2F3FD] rounded-[4px] mt-[8px]">
                <Star size={16} color="#F59E0B" />
                <strong className="text-[14px]">4.7</strong>
              </div>
              <div className="flex items-center gap-[9px] mt-[16px]">
                <img src={like} alt="" />
                <p className="text-[#344054] text-[15px] font-medium">
                  98% <span>(250 sharxlar)</span>
                </p>
              </div>
              <div className="flex items-center gap-[9px] mt-[8px]">
                <img src={verify} alt="" />
                <p className="text-[#344054] text-[15px] font-medium">
                  Medical Registration Verified
                </p>
              </div>
            </div>
            <div className="h-px w-[312px] bg-gray-200 mt-[28px]" />

            <div className="flex gap-[30px] mt-[18px]">
              <div>
                <div>
                  <span className="text-[#667085] text-[16px] font-normal">
                    Email
                  </span>
                  <p className="text-[17px] font-medium">jubed435@gmail.com</p>
                </div>
                <div className="mt-[16px]">
                  <span className="text-[#667085] text-[16px] font-normal">
                    Yoshi
                  </span>
                  <p className="text-[17px] font-medium">39</p>
                </div>
              </div>
              <div>
                <span className="text-[#667085] text-[16px] font-normal">
                  Telefon raqami
                </span>
                <p className="text-[17px] font-medium">91 555-0127</p>
              </div>
            </div>
            <div className="my-[28px]">
              <p className="text-[17px] text-[#1067FF] font-medium underline">
                Share your Feedback.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex gap-15">
            <div className="flex flex-col items-center py-[20px] bg-[#f2f3fd] border border-[#ccd0f8] rounded-[8px] w-[439px]">
              <img src={group} alt="" className="mb-[12px]" />
              <strong className="font-semibold text-[24px]">165</strong>
              <p className="text-[#121212] text-[12px] font-medium">
                Qabullar soni
              </p>
            </div>

            <div className="flex flex-col items-center py-[20px] bg-[#f2f3fd] border border-[#ccd0f8] rounded-[8px] w-[439px]">
              <img src={bed} alt="" className="mb-[12px]" />
              <strong className="font-semibold text-[24px]">
                54,145,841.00 UZS
              </strong>
              <p className="text-[#121212] text-[12px] font-medium">
                Umumiy daromadi
              </p>
            </div>
          </div>

          <div>
            <div className="mt-[24px]">
              <h3>Mutaxassisligi</h3>
              <div className="flex gap-[9px] mt-[18px]">
                <p className="border border-[#EAECF0] rounded-[30px] px-4 py-2">
                  Dentist
                </p>
                <p className="border border-[#EAECF0] rounded-[30px] px-4 py-2">
                  LOR
                </p>
              </div>
              <div className="h-px bg-gray-200 mt-[28px]" />
            </div>

            <div>
              <h3>Hujjatlar</h3>
              <div className="mt-[18px]">
                <div className="mb-[18px]">
                  <p className="font-medium text-[14px] text-[#62626E]">
                    Passport fotosutati (oldi va orqasi)
                  </p>
                  <div className="flex gap-[9px] mt-[8px]">
                    <img src={img} alt="" />
                    <p>PASSPORTIM2FAF-SD42-DADW-...</p>
                    <img src={eye} alt="" />
                    <img src={delet} alt="" />
                  </div>
                </div>

                <div className="mb-[18px]">
                  <p className="font-medium text-[14px] text-[#62626E]">
                    Diplom (Bakalavr va mutaxassislik)
                  </p>
                  <div className="flex gap-[9px] mt-[8px]">
                    <img src={img} alt="" />
                    <p>PASSPORTIM2FAF-SD42-DADW-...</p>
                    <img src={eye} alt="" />
                    <img src={delet} alt="" />
                  </div>
                </div>

                <div className="mb-[18px]">
                  <p className="font-medium text-[14px] text-[#62626E]">
                    O‘z-o‘zini band qilish
                  </p>
                  <div className="flex gap-[9px] mt-[8px]">
                    <img src={img} alt="" />
                    <p>PASSPORTIM2FAF-SD42-DADW-...</p>
                    <img src={eye} alt="" />
                    <img src={delet} alt="" />
                  </div>
                </div>

                <div className="mb-[18px]">
                  <p className="font-medium text-[14px] text-[#62626E]">
                    Sertifikat
                  </p>
                  <div className="flex gap-[9px] mt-[8px]">
                    <img src={img} alt="" />
                    <p>PASSPORTIM2FAF-SD42-DADW-...</p>
                    <img src={eye} alt="" />
                    <img src={delet} alt="" />
                  </div>
                </div>

                <div className="mb-[18px]">
                  <p className="font-medium text-[14px] text-[#62626E]">
                    Shaxsiy tibbiy varaqa
                  </p>
                  <div className="flex gap-[9px] mt-[8px]">
                    <img src={img} alt="" />
                    <p>PASSPORTIM2FAF-SD42-DADW-...</p>
                    <img src={eye} alt="" />
                    <img src={delet} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(DoctorDetail);
