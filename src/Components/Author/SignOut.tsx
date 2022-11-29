import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignOut = (props: any) => {
  localStorage.clear();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/signin");
  }, []);
  return (
    <div className="w-[457px] h-[445px] bg-white p-[32px] font-inter"></div>
  );
};

export default SignOut;
