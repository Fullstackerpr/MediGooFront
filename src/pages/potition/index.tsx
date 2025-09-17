import { Pagination } from "antd";
import { Search, ArrowLeft, ArrowRight, X } from "lucide-react";
import { memo, useState } from "react";
import Popup from "../../shared/ui/Popup";

import img from "../../shared/doctor/img.svg";
import eye from "../../shared/doctor/eye.svg";

const Potiton = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="pr-12">
      <div className="flex justify-between">
        <div>
          <h1 className="text-[24px] font-semibold">Arizalar</h1>
          <p className="text-[16px] font-normal text-[#344054]">
            Showing: All Consultations of All Healthcare Providers
          </p>
        </div>
        <div className="flex items-center px-3 h-[40px] border-2 border-[#eaecf0] rounded-xl">
          <input
            type="text"
            name="search"
            id=""
            placeholder="Qidirish..."
            className="outline-0"
          />
          <Search size={20} />
        </div>
      </div>

      <div className="mt-[28px] border-2 border-[#eaecf0] rounded-xl">
        <div className="flex items-center gap-[16px] p-[24px]">
          <h2 className="text-[20px] font-semibold">Arizalar</h2>
          <span className="text-[16px] font-medium text-[#0F5EE8]">20</span>
        </div>

        <div className="mt-[20px]">
          <table className="w-full border-collapse">
            <thead className="text-[16px] text-[#475467] bg-[#f9fafb] font-medium">
              <tr>
                <th className="w-[60px] py-[13px] border-y border-[#eaecf0] text-left pl-6">
                  <input
                    type="checkbox"
                    className="w-[20px] h-[20px] border-2 border-[#e1e3e6] rounded-md"
                  />
                </th>
                <th className="pl-2 py-[13px] border-y border-[#eaecf0] text-left">
                  Telefon raqami
                </th>
                <th className="pl-4 py-[13px] border-y border-[#eaecf0] text-left">
                  ID
                </th>
                <th className="pl-6 py-[13px] border-y border-[#eaecf0] text-left">
                  Hujjatlar soni
                </th>
                <th className="pl-4 py-[13px] border-y border-[#eaecf0] text-left">
                  Yuborilgan sana
                </th>
                <th className="pl-6 py-[13px] border-y border-[#eaecf0] text-left">
                  Status
                </th>
                <th className="pl-40 py-[13px] border-y border-[#eaecf0] text-left">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="text-[16px] text-[#475467]">
              <tr>
                <td className="w-[60px] py-[13px] border-y border-[#eaecf0] text-left pl-6">
                  <input
                    type="checkbox"
                    className="w-[20px] h-[20px] border-2 border-[#e1e3e6] rounded-md"
                  />
                </td>
                <td className="pl-2 py-[20px] border-b border-[#eaecf0] font-medium text-[18px] text-[#000]">
                  +998 94 232 55 67
                </td>
                <td className="py-[20px] border-b border-[#eaecf0]">#123</td>
                <td className="pl-16 py-[20px] border-b border-[#eaecf0]">5</td>
                <td className="pl-8 py-[20px] border-b border-[#eaecf0]">
                  Dec 07, 2025
                </td>
                <td className="py-[20px] border-b border-[#eaecf0]">
                  <div className="flex items-center gap-2 px-[12px] py-[6px] text-[#905900] bg-[#FDF8E4] rounded-full w-fit">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#C98900]"></div>
                    Kutilmoqda
                  </div>
                </td>
                <td className="pl-7 py-[20px] border-b border-[#eaecf0] space-x-3">
                  <button
                    onClick={() => setShow(true)}
                    className="text-[#344054]"
                  >
                    Tekshirish
                  </button>
                  <button className="text-red-500">Bekor qilish</button>
                  <button className="text-blue-600">Tasdiqlash</button>
                </td>
              </tr>

              <tr>
                <td className="w-[60px] py-[13px] border-y border-[#eaecf0] text-left pl-6">
                  <input
                    type="checkbox"
                    className="w-[20px] h-[20px] border-2 border-[#e1e3e6] rounded-md"
                  />
                </td>
                <td className="pl-2 py-[20px] border-b border-[#eaecf0] font-medium text-[18px] text-[#000]">
                  +998 94 232 55 67
                </td>
                <td className="py-[20px] border-b border-[#eaecf0]">#123</td>
                <td className="pl-16 py-[20px] border-b border-[#eaecf0]">5</td>
                <td className="pl-8 py-[20px] border-b border-[#eaecf0]">
                  Dec 07, 2025
                </td>
                <td className="py-[20px] border-b border-[#eaecf0]">
                  <div className="flex items-center gap-2 px-[12px] py-[6px] text-[#905900] bg-[#FDF8E4] rounded-full w-fit">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#C98900]"></div>
                    Kutilmoqda
                  </div>
                </td>
                <td className="pl-7 py-[20px] border-b border-[#eaecf0] space-x-3">
                  <button
                    onClick={() => setShow(true)}
                    className="text-[#344054]"
                  >
                    Tekshirish
                  </button>
                  <button className="text-red-500">Bekor qilish</button>
                  <button className="text-blue-600">Tasdiqlash</button>
                </td>
              </tr>

              <tr>
                <td className="w-[60px] py-[13px] border-y border-[#eaecf0] text-left pl-6">
                  <input
                    type="checkbox"
                    className="w-[20px] h-[20px] border-2 border-[#e1e3e6] rounded-md"
                  />
                </td>
                <td className="pl-2 py-[20px] border-b border-[#eaecf0] font-medium text-[18px] text-[#000]">
                  +998 94 232 55 67
                </td>
                <td className="py-[20px] border-b border-[#eaecf0]">#123</td>
                <td className="pl-16 py-[20px] border-b border-[#eaecf0]">5</td>
                <td className="pl-8 py-[20px] border-b border-[#eaecf0]">
                  Dec 07, 2025
                </td>
                <td className="py-[20px] border-b border-[#eaecf0]">
                  <div className="flex items-center gap-2 px-[12px] py-[6px] text-[#905900] bg-[#FDF8E4] rounded-full w-fit">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#C98900]"></div>
                    Kutilmoqda
                  </div>
                </td>
                <td className="pl-7 py-[20px] border-b border-[#eaecf0] space-x-3">
                  <button
                    onClick={() => setShow(true)}
                    className="text-[#344054]"
                  >
                    Tekshirish
                  </button>
                  <button className="text-red-500">Bekor qilish</button>
                  <button className="text-blue-600">Tasdiqlash</button>
                </td>
              </tr>

              <tr>
                <td className="w-[60px] py-[13px] border-y border-[#eaecf0] text-left pl-6">
                  <input
                    type="checkbox"
                    className="w-[20px] h-[20px] border-2 border-[#e1e3e6] rounded-md"
                  />
                </td>
                <td className="pl-2 py-[20px] border-b border-[#eaecf0] font-medium text-[18px] text-[#000]">
                  +998 94 232 55 67
                </td>
                <td className="py-[20px] border-b border-[#eaecf0]">#123</td>
                <td className="pl-16 py-[20px] border-b border-[#eaecf0]">5</td>
                <td className="pl-8 py-[20px] border-b border-[#eaecf0]">
                  Dec 07, 2025
                </td>
                <td className="py-[20px] border-b border-[#eaecf0]">
                  <div className="flex items-center gap-2 px-[12px] py-[6px] text-[#905900] bg-[#FDF8E4] rounded-full w-fit">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#C98900]"></div>
                    Kutilmoqda
                  </div>
                </td>
                <td className="pl-7 py-[20px] border-b border-[#eaecf0] space-x-3">
                  <button
                    onClick={() => setShow(true)}
                    className="text-[#344054]"
                  >
                    Tekshirish
                  </button>
                  <button className="text-red-500">Bekor qilish</button>
                  <button className="text-blue-600">Tasdiqlash</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-between items-center mt-[20px]">
        <div className="border-2 border-[#D0D5DD] flex gap-2 rounded-lg px-2 py-1 ">
          <ArrowLeft color="#344054" size={20} />
          <button className="text-[#344054] text-[14px] font-semibold cursor-pointer">
            Previos
          </button>
        </div>

        <div>
          <Pagination
            total={85}
            showSizeChanger
            // showTotal={(total) => `Total ${total} items`}
          />
        </div>

        <div className="border-2 border-[#D0D5DD] flex gap-2 rounded-lg px-2 py-1 ">
          <button className="text-[#344054] text-[14px] font-semibold cursor-pointer">
            Next
          </button>
          <ArrowRight color="#344054" size={20} />
        </div>
      </div>

      <Popup isShow={show} onClose={() => setShow(false)}>
        <div className="bg-white p-6 rounded-[20px]">
          <div className="flex justify-between">
            <div className="flex gap-2 font-bold text-[16px]">
              <span>#123</span>
              <p>arizani tekshirish</p>
            </div>
            <div>
              <button onClick={() => setShow(false)}>
                <X size={20} />
              </button>
            </div>
          </div>

          <div className="border border-[#EAECF0] mt-[20px] mb-[20px]"></div>

          <div>
            <div className="flex justify-between gap-[40px]">
              <div className="flex flex-col">
                <label
                  htmlFor="number"
                  className="font-medium text-[16px] text-[#344054]"
                >
                  Telefon raqam
                </label>
                <input
                  type="text"
                  name="phone_number"
                  id=""
                  disabled
                  placeholder="+998 94 426 0303"
                  className="mt-2 border-2 border-[#d0d5dd] bg-[#f9fafb] text-[18px] font-normal text-[#667085] rounded-lg px-3 py-2"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="number"
                  className="font-medium text-[16px] text-[#344054]"
                >
                  Holati
                </label>
                <input
                  type="text"
                  name="status"
                  id=""
                  disabled
                  placeholder="Kutilmoqda"
                  className="mt-2 border-2 border-[#d0d5dd] bg-[#f9fafb] text-[18px] font-normal text-[#667085] rounded-lg px-3 py-2"
                />
              </div>
            </div>

            <div className="flex flex-col mt-[16px]">
              <label
                htmlFor="number"
                className="font-medium text-[16px] text-[#344054]"
              >
                Yuborilgan sana
              </label>
              <input
                type="text"
                name="phone_number"
                id=""
                disabled
                placeholder="Dec 07, 2025"
                className="w-[275px] mt-2 border-2 border-[#d0d5dd] bg-[#f9fafb] text-[18px] font-normal text-[#667085] rounded-lg px-3 py-2"
              />
            </div>
          </div>

          <div className="mt-[20px]">
            <h3>Hujjatlar</h3>
            <div className="mt-[18px]">
              <div className="mb-[18px]">
                <p className="font-medium text-[14px] text-[#62626E]">
                  Passport fotosutati (oldi va orqasi)
                </p>
                <div className="flex justify-between mt-[8px]">
                  <div className="flex gap-[9px]">
                    <img src={img} alt="" />
                    <p>PASSPORTIM2FAF-SD42-DADW-...</p>
                  </div>
                  <div>
                    <img src={eye} alt="" />
                  </div>
                </div>
              </div>

              <div className="mb-[18px]">
                <p className="font-medium text-[14px] text-[#62626E]">
                  Diplom (Bakalavr va mutaxassislik)
                </p>
                <div className="flex justify-between mt-[8px]">
                  <div className="flex gap-[9px]">
                    <img src={img} alt="" />
                    <p>PASSPORTIM2FAF-SD42-DADW-...</p>
                  </div>
                  <div>
                    <img src={eye} alt="" />
                  </div>
                </div>
              </div>

              <div className="mb-[18px]">
                <p className="font-medium text-[14px] text-[#62626E]">
                  O‘z-o‘zini band qilish
                </p>
                <div className="flex justify-between mt-[8px]">
                  <div className="flex gap-[9px]">
                    <img src={img} alt="" />
                    <p>PASSPORTIM2FAF-SD42-DADW-...</p>
                  </div>
                  <div>
                    <img src={eye} alt="" />
                  </div>
                </div>
              </div>

              <div className="mb-[18px]">
                <p className="font-medium text-[14px] text-[#62626E]">
                  Sertifikat
                </p>
                <div className="flex justify-between mt-[8px]">
                  <div className="flex gap-[9px]">
                    <img src={img} alt="" />
                    <p>PASSPORTIM2FAF-SD42-DADW-...</p>
                  </div>
                  <div>
                    <img src={eye} alt="" />
                  </div>
                </div>
              </div>

              <div>
                <p className="font-medium text-[14px] text-[#62626E]">
                  Shaxsiy tibbiy varaqa
                </p>
                <div className="flex justify-between mt-[8px]">
                  <div className="flex gap-[9px]">
                    <img src={img} alt="" />
                    <p>PASSPORTIM2FAF-SD42-DADW-...</p>
                  </div>
                  <div>
                    <img src={eye} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default memo(Potiton);
