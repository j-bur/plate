import { TEditableProps } from '@udecode/plate-common';

import { cn } from '@/lib/utils';
import { MyValue } from '@/plate/plate.types';

export const editableProps: TEditableProps<MyValue> = {
  spellCheck: false,
  autoFocus: false,
  placeholder: 'Type…',
  style: {
    outline: 'none',
  },
  className: cn(
    'relative w-full max-w-[900px] px-[96px] pb-[20vh] leading-[1.4] [&_strong]:font-bold'
  ),
};
