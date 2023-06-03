import React from 'react';
import { PlateLeaf, PlateLeafProps } from '@udecode/plate';

import { cn } from '@/lib/utils';

export function SearchHighlightLeaf({ className, ...props }: PlateLeafProps) {
  return <PlateLeaf className={cn('bg-[#fff59d]', className)} {...props} />;
}
