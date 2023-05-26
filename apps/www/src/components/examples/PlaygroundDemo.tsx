'use client';

import React, { useMemo, useRef } from 'react';
import {
  AutoformatPlugin,
  createAlignPlugin,
  createAutoformatPlugin,
  createBlockquotePlugin,
  createBoldPlugin,
  createCodeBlockPlugin,
  createCodePlugin,
  createComboboxPlugin,
  createCommentsPlugin,
  createDeserializeCsvPlugin,
  createDeserializeDocxPlugin,
  createDeserializeMdPlugin,
  createEmojiPlugin,
  createExitBreakPlugin,
  createFontBackgroundColorPlugin,
  createFontColorPlugin,
  createFontSizePlugin,
  createHeadingPlugin,
  createHighlightPlugin,
  createHorizontalRulePlugin,
  createImagePlugin,
  createIndentPlugin,
  createItalicPlugin,
  createKbdPlugin,
  createLineHeightPlugin,
  createLinkPlugin,
  createListPlugin,
  createMediaEmbedPlugin,
  createMentionPlugin,
  createNodeIdPlugin,
  createNormalizeTypesPlugin,
  createParagraphPlugin,
  createResetNodePlugin,
  createSelectOnBackspacePlugin,
  createSoftBreakPlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createTablePlugin,
  createTodoListPlugin,
  createTrailingBlockPlugin,
  createUnderlinePlugin,
  ELEMENT_CODE_BLOCK,
  Plate,
  PlateProvider,
} from '@udecode/plate';
import { createDndPlugin } from '@udecode/plate-dnd';
import {
  createExcalidrawPlugin,
  ELEMENT_EXCALIDRAW,
} from '@udecode/plate-excalidraw';
import { createJuicePlugin } from '@udecode/plate-juice';
import { createBlockSelectionPlugin } from '@udecode/plate-selection';

import { createPlateUI } from '@/lib/createPlateUI';
import { alignPlugin } from '@/plate/align/alignPlugin';
import { autoformatPlugin } from '@/plate/autoformat/autoformatPlugin';
import { CodeBlockElement } from '@/plate/code-block/CodeBlockElement';
import { FloatingCommentList } from '@/plate/comments/FloatingCommentList';
import { MyCommentsProvider } from '@/plate/comments/MyCommentsProvider';
import { editableProps } from '@/plate/common/editableProps';
import { CursorOverlayContainer } from '@/plate/cursor-overlay/CursorOverlayContainer';
import { dragOverCursorPlugin } from '@/plate/cursor-overlay/dragOverCursorPlugin';
import { withStyledDraggables } from '@/plate/dnd/withStyledDraggables';
import { emojiPlugin } from '@/plate/emoji/emojiPlugin';
import { ExcalidrawElement } from '@/plate/excalidraw/ExcalidrawElement';
import { exitBreakPlugin } from '@/plate/exit-break/exitBreakPlugin';
import { forcedLayoutPlugin } from '@/plate/forced-layout/forcedLayoutPlugin';
import { HeadingToolbarButtons } from '@/plate/HeadingToolbarButtons';
import { indentPlugin } from '@/plate/indent/indentPlugin';
import { lineHeightPlugin } from '@/plate/line-height/lineHeightPlugin';
import { linkPlugin } from '@/plate/link/linkPlugin';
import { MENTIONABLES } from '@/plate/mention/mentionables';
import { MentionCombobox } from '@/plate/mention/MentionCombobox';
import { withStyledPlaceHolders } from '@/plate/placeholder/withStyledPlaceHolders';
import { playgroundValue } from '@/plate/playground/playgroundValue';
import { resetBlockTypePlugin } from '@/plate/reset-node/resetBlockTypePlugin';
import { selectOnBackspacePlugin } from '@/plate/select-on-backspace/selectOnBackspacePlugin';
import { softBreakPlugin } from '@/plate/soft-break/softBreakPlugin';
import { FloatingToolbar } from '@/plate/toolbar/FloatingToolbar';
import { FloatingToolbarButtons } from '@/plate/toolbar/FloatingToolbarButtons';
import { HeadingToolbar } from '@/plate/toolbar/HeadingToolbar';
import { trailingBlockPlugin } from '@/plate/trailing-block/trailingBlockPlugin';
import {
  createMyPlugins,
  MyEditor,
  MyPlatePlugin,
  MyValue,
} from '@/plate/typescript/plateTypes';

let components = createPlateUI({
  [ELEMENT_CODE_BLOCK]: CodeBlockElement,
  [ELEMENT_EXCALIDRAW]: ExcalidrawElement,
  // customize your components by plugin key
});
components = withStyledPlaceHolders(components);

export function PlaygroundDemo() {
  const containerRef = useRef(null);

  const plugins = useMemo(
    () =>
      createMyPlugins(
        [
          createParagraphPlugin(),
          createBlockquotePlugin(),
          createTodoListPlugin(),
          createHeadingPlugin(),
          createImagePlugin(),
          createHorizontalRulePlugin(),
          createLinkPlugin(linkPlugin),
          createListPlugin(),
          createTablePlugin(),
          createMediaEmbedPlugin(),
          createExcalidrawPlugin() as MyPlatePlugin,
          createCodeBlockPlugin(),
          createAlignPlugin(alignPlugin),
          createBoldPlugin(),
          createCodePlugin(),
          createItalicPlugin(),
          createHighlightPlugin(),
          createUnderlinePlugin(),
          createStrikethroughPlugin(),
          createSubscriptPlugin(),
          createSuperscriptPlugin(),
          createFontColorPlugin(),
          createFontBackgroundColorPlugin(),
          createFontSizePlugin(),
          createLineHeightPlugin(lineHeightPlugin),
          createKbdPlugin(),
          createNodeIdPlugin(),
          createBlockSelectionPlugin(),
          createDndPlugin({ options: { enableScroller: true } }),
          dragOverCursorPlugin,
          createIndentPlugin(indentPlugin),
          createAutoformatPlugin<
            AutoformatPlugin<MyValue, MyEditor>,
            MyValue,
            MyEditor
          >(autoformatPlugin),
          createResetNodePlugin(resetBlockTypePlugin),
          createSoftBreakPlugin(softBreakPlugin),
          createExitBreakPlugin(exitBreakPlugin),
          createNormalizeTypesPlugin(forcedLayoutPlugin),
          createTrailingBlockPlugin(trailingBlockPlugin),
          createSelectOnBackspacePlugin(selectOnBackspacePlugin),
          createComboboxPlugin(),
          createMentionPlugin(),
          createCommentsPlugin(),
          createDeserializeMdPlugin() as MyPlatePlugin,
          createDeserializeCsvPlugin(),
          createDeserializeDocxPlugin(),
          createJuicePlugin() as MyPlatePlugin,
          createEmojiPlugin(emojiPlugin),
        ],
        {
          components: withStyledDraggables(components),
        }
      ),
    []
  );

  return (
    <PlateProvider<MyValue> initialValue={playgroundValue} plugins={plugins}>
      <HeadingToolbar>
        <HeadingToolbarButtons />
      </HeadingToolbar>

      <MyCommentsProvider>
        <div ref={containerRef} className="relative">
          <Plate editableProps={editableProps}>
            <FloatingToolbar>
              <FloatingToolbarButtons />
            </FloatingToolbar>

            <MentionCombobox items={MENTIONABLES} />

            <CursorOverlayContainer containerRef={containerRef} />
          </Plate>
        </div>

        <FloatingCommentList />
      </MyCommentsProvider>
    </PlateProvider>
  );
}
