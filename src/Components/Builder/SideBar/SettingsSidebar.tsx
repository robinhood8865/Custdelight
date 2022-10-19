import SettingsBtn from "../Components/SettingsBtn";

const SettingsSidebar = () => {
  return (
    <div className="h-full  w-[340px] bg-white text-black border-r-[1px]  ">
      <div>
        <div className="text-black bg-white w-full border-t-[1px] border-[#DFDFDF] pl-[26px] pr-[23px] pt-[30px]">
          <div className="">
            <SettingsBtn name="General" detail="change subdomain, fav icon" />
            <SettingsBtn
              name="Email Signature"
              detail="Update email signature"
            />
            <SettingsBtn
              name="Integration"
              detail="Connect your google analytics"
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SettingsSidebar;
