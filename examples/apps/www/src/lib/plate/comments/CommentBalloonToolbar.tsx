import React from 'react';
import { TippyProps } from '@tippyjs/react';
import { WithPartial } from '@udecode/plate';
import { PlateCommentToolbarButton } from './PlateCommentToolbarButton';

import {
  MarkBalloonToolbar,
  markTooltip,
} from '@/plate/balloon-toolbar/MarkBalloonToolbar';
import { Icons } from '@/plate/common/icons';
import { BalloonToolbarProps } from '@/plate/toolbar/BalloonToolbar';

export function CommentBalloonToolbar(
  props: WithPartial<BalloonToolbarProps, 'children'>
) {
  const commentTooltip: TippyProps = {
    content: 'Comment (⌘+⇧+M)',
    ...markTooltip,
  };

  return (
    <MarkBalloonToolbar {...props}>
      <PlateCommentToolbarButton
        icon={<Icons.comment />}
        tooltip={commentTooltip}
        actionHandler="onMouseDown"
      />
    </MarkBalloonToolbar>
  );
}