import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import CloseBtn from "./CloseBtn";

const ColorPalete = () => {
  const [color, setColor] = useColor("hex", "#121212");
  return (
    <div className="relative">
      {/* <div className="absolute z-10 top-0 right-0">
        <CloseBtn />
      </div> */}
      <ColorPicker
        width={300}
        height={300}
        color={color}
        onChange={setColor}
        hideHSV
        dark
      />
      ;
    </div>
  );
};

export default ColorPalete;
