import React from 'react';
import { CommentEditTextarea } from '@udecode/plate';
import { CommentEditActions } from '@udecode/plate-comments';

import { buttonVariants } from '@/components/ui/button';
import { inputVariants } from '@/components/ui/input';
import { useCommentValueState } from '@/lib/@/useCommentValueState';
import { cn } from '@/lib/utils';

export function CommentValue() {
  const { ref } = useCommentValueState();

  return (
    <div className="my-2 flex flex-col items-end gap-2">
      <CommentEditTextarea
        ref={ref}
        className={cn(inputVariants(), 'min-h-[60px]')}
      />

      <div className="flex space-x-2">
        <CommentEditActions.CancelButton
          className={buttonVariants({ variant: 'outline', size: 'xs' })}
        >
          Cancel
        </CommentEditActions.CancelButton>

        <CommentEditActions.SaveButton
          className={buttonVariants({ variant: 'default', size: 'xs' })}
        >
          Save
        </CommentEditActions.SaveButton>
      </div>
    </div>
  );
}
