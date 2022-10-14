import { useEffect } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { useAppSelector, useAppDispatch } from "../../../App/hooks";
import CloseBtn from "./CloseBtn";
import {
  setStyleIndex,
  setHeaderColor,
  setButtonColor,
  setWidgetColor,
} from "../../../Slices/themeSlice";

const ColorPalete = (props: any) => {
  const dispatch = useAppDispatch();

  const { styleIndex, mycolor } = props;
  const [color, setColor] = useColor("hex", mycolor);
  useEffect(() => {
    switch (styleIndex) {
      case 1:
        dispatch(setHeaderColor(color.hex.toUpperCase()));
        break;
      case 2:
        dispatch(setButtonColor(color.hex.toUpperCase()));
        break;
      case 3:
        dispatch(setWidgetColor(color.hex.toUpperCase()));
        break;
      default:
        break;
    }
  }, [color]);
  return (
    <div
      onBlur={() => {
        console.log("blur");
        dispatch(setStyleIndex(0));
      }}
      className="relative"
    >
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
