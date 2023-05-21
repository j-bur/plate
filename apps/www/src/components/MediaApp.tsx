import React from 'react';
import {
  createImagePlugin,
  createMediaEmbedPlugin,
  createSelectOnBackspacePlugin,
  ELEMENT_IMAGE,
  ELEMENT_MEDIA_EMBED,
  Plate,
  PlateProvider,
} from '@udecode/plate';

import { basicNodesPlugins } from '@/plate/basic-nodes/basicNodesPlugins';
import { editableProps } from '@/plate/common/editableProps';
import { Icons } from '@/plate/common/icons';
import { plateUI } from '@/plate/common/plateUI';
import { ImageToolbarButton } from '@/plate/media/ImageToolbarButton';
import { MediaEmbedToolbarButton } from '@/plate/media/MediaEmbedToolbarButton';
import { mediaValue } from '@/plate/media/mediaValue';
import { HeadingToolbar } from '@/plate/toolbar/HeadingToolbar';
import { createMyPlugins, MyValue } from '@/plate/typescript/plateTypes';

const plugins = createMyPlugins(
  [
    ...basicNodesPlugins,
    createImagePlugin(),
    createMediaEmbedPlugin(),
    createSelectOnBackspacePlugin({
      options: {
        query: {
          allow: [ELEMENT_IMAGE, ELEMENT_MEDIA_EMBED],
        },
      },
    }),
  ],
  {
    components: plateUI,
  }
);

export default function MediaApp() {
  return (
    <PlateProvider<MyValue> plugins={plugins} initialValue={mediaValue}>
      <HeadingToolbar>
        <ImageToolbarButton icon={<Icons.image />} />
        <MediaEmbedToolbarButton icon={<Icons.embed />} />
      </HeadingToolbar>

      <Plate<MyValue> editableProps={editableProps} />
    </PlateProvider>
  );
}
