import { useEffect } from "react";
import { ColorPicker, useColor } from "react-color-palette";

import "react-color-palette/lib/css/styles.css";
import { useAppSelector, useAppDispatch } from "../../../App/hooks";
import { setButtonColor } from "../../../Slices/themeSlice";

const ButtonColorPalete = (props: any) => {
  const dispatch = useAppDispatch();

  const { buttonColor } = props;
  const [color, setColor] = useColor("hex", buttonColor);

  useEffect(() => {
    dispatch(setButtonColor(color.hex.toUpperCase()));
  }, [color]);

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
    </div>
  );
};

export default ButtonColorPalete;
