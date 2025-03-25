import { Fa2, FaArrowRotateLeft } from "react-icons/fa6";
import { MdLocalShipping } from "react-icons/md";

export default function Information() {
  return (
    <div className=" container mx-auto">
      <div className="px-0 lg:px-40 flex justify-between items-center pt-[30px] pb-[29px] border border-secondary-border">
        <div className="flex gap-4 items-center">
          <Fa2 fontSize={20} />
          <p className=" text-base text-primary-text font-dmsans font-normal">
            Two years warranty
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <MdLocalShipping fontSize={20} />
          <p className=" text-base text-primary-text font-dmsans font-normal">
            Free shipping
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <FaArrowRotateLeft fontSize={20} />
          <p className=" text-base text-primary-text font-dmsans font-normal">
            Return po licy in 30 days
          </p>
        </div>
      </div>
      sss
    </div>
  );
}
