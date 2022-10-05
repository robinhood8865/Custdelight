const CloseBtn = (props: any) => {
  const { setShowSubbar } = props;
  return (
    <div
      onClick={() => {
        setShowSubbar(false);
      }}
      className="bg-white cursor-pointer w-[40px] h-[40px] rounded-full border-[1px] border-[#DFDFDF] flex items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <path
          d="M8.46409 15.736L15.5352 8.66492"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8.46409 8.66489L15.5352 15.736"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
export default CloseBtn;
