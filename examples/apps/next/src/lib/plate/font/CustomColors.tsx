import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import debounce from 'lodash/debounce';
import { Button } from '../button/PlateButton';
import { ColorInput } from './ColorInput';
import { Colors } from './Colors';
import { ColorType } from './ColorType';

type CustomColorsProps = {
  color?: string;
  colors: ColorType[];
  customColors: ColorType[];
  selectedIcon: ReactNode;
  updateColor: (color: string) => void;
  updateCustomColor: (color: string) => void;
};

export function CustomColors({
  color,
  colors,
  customColors,
  selectedIcon,
  updateColor,
  updateCustomColor,
}: CustomColorsProps) {
  const [customColor, setCustomColor] = useState<string>();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateCustomColorDebounced = useCallback(
    debounce(updateCustomColor, 100),
    [updateCustomColor]
  );

  const [value, setValue] = useState<string>(color || '#000000');

  useEffect(() => {
    if (
      !color ||
      customColors.some((c) => c.value === color) ||
      colors.some((c) => c.value === color)
    ) {
      return;
    }

    setCustomColor(color);
  }, [color, colors, customColors]);

  const computedColors = useMemo(
    () =>
      customColor
        ? [
            ...customColors,
            {
              name: '',
              value: customColor,
              isBrightColor: false,
            },
          ]
        : customColors,
    [customColor, customColors]
  );

  return (
    <div>
      <ColorInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          updateCustomColorDebounced(e.target.value);
        }}
      >
        <Button className="mb-4 w-full py-2 font-semibold">CUSTOM</Button>
      </ColorInput>

      <Colors
        color={color}
        colors={computedColors}
        selectedIcon={selectedIcon}
        updateColor={updateColor}
      />
    </div>
  );
}
