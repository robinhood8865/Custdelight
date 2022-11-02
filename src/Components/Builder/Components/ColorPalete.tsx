import { useEffect } from "react";
import { ColorPicker, useColor } from "react-color-palette";

import "react-color-palette/lib/css/styles.css";
import { useAppDispatch } from "../../../App/hooks";

import {
  setHeaderColor,
  setButtonColor,
  setWidgetColor,
} from "../../../Slices/themeSlice";
import { TinyColor } from "@ctrl/tinycolor";

interface Color {
  hex: string;
  rgb: ColorRGB;
  hsv: ColorHSV;
}
interface ColorRGB {
  r: number;
  g: number;
  b: number;
  a?: number;
}
interface ColorHSV {
  h: number;
  s: number;
  v: number;
  a?: number;
}

const ColorPalete = (props: any) => {
  const dispatch = useAppDispatch();

  const { styleIndex, mycolor } = props;
  console.log(
    "🚀 ~ file: ColorPalete.tsx ~ line 37 ~ ColorPalete ~ styleIndex, mycolor",
    styleIndex,
    mycolor
  );

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
    console.log(color);
  }, [color]);

  useEffect(() => {
    console.log(mycolor);
    const tempColor = new TinyColor(mycolor);
    const hex = tempColor.toHexString();
    var rgb: ColorRGB = tempColor.toRgb();
    var hsv: ColorHSV = tempColor.toHsv();
    rgb.a = undefined;
    hsv.a = undefined;
    const newColor: Color = {
      hex,
      rgb,
      hsv,
    };
    console.log("newColor", newColor);
    setColor(newColor);
  }, [mycolor]);

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

export default ColorPalete;
