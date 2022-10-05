const EditInput = (props: any) => {
  const { name } = props;
  return (
    <div>
      <div className="text-[16px] font-bold leading-[24px] mb-[10px]">
        {name}
      </div>
      <div className="relative flex w-full flex-wrap items-stretch mb-[24px]">
        <input
          type="text"
          className="px-3 py-3 relative bg-white rounded-[8px] text-[14px] leading-[21px] font-[400] border-[#EAEAEA] border-[1px] shadow outline-none focus:outline-none focus:ring w-full pr-10 "
        />
      </div>
    </div>
  );
};

export default EditInput;
