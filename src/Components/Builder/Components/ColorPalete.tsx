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

  // const hexToRgb = (hex: string): ColorRGB | null => {
  //   var result = /^#?([a-f\d]{2}])([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  //   return result
  //     ? {
  //         r: parseInt(result[1], 16),
  //         g: parseInt(result[2], 16),
  //         b: parseInt(result[3], 16),
  //       }
  //     : null;
  // };

  // const rgbToHsv = (rgb: ColorRGB): ColorHSV => {
  //   const r = rgb.r / 255;
  //   const g = rgb.g / 255;
  //   const b = rgb.b / 255;

  //   const max = Math.max(r, g, b),
  //     min = Math.min(r, g, b);
  //   let h = 0,
  //     s = 0,
  //     l = (max + min) / 2;

  //   if (max === min) {
  //     h = s = 0; // achromatic
  //   } else {
  //     const d = max - min;
  //     s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

  //     switch (max) {
  //       case r:
  //         h = (g - b) / d + (g < b ? 6 : 0);
  //         break;
  //       case g:
  //         h = (b - r) / d + 2;
  //         break;
  //       case b:
  //         h = (r - g) / d + 4;
  //         break;
  //     }

  //     h /= 6;
  //   }

  //   h *= 360;
  //   s *= 100;
  //   l *= 100;

  //   return { h, s, l };
  // };

  // const hexToColor = (hex: string) => {
  //   const rgb = hexToRgb(hex);
  //   let _color: Color = { hex, rgb: };
  //   _color.hex = hex;
  //   return _color;
  // };

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
