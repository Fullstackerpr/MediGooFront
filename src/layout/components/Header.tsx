import { memo } from 'react';
import user from "../../shared/assets/doctor/userImg.png";

const Header = () => {
  return (
    <div className='bg-[#2A313A] py-3'>
      <div className='flex items-center justify-end pr-4 gap-[10px]'>
        <div>
          <img src={user} alt="" className='w-[32px] h-[32px] rounded-[50%]'/>
        </div>
        <div className='text-white'>
          <h3 className='font-semibold text-[16px]'>Superadmin</h3>
          <p className='text-[13px]'>+998942325567</p>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);