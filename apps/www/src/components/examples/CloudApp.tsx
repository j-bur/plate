import React from 'react';
import { Plate, PlateProvider } from '@udecode/plate';
import {
  createCloudAttachmentPlugin,
  createCloudImagePlugin,
  createCloudPlugin,
  ELEMENT_CLOUD_ATTACHMENT,
  ELEMENT_CLOUD_IMAGE,
} from '@udecode/plate-cloud';

import { FixedToolbar } from '@/plate/aui/fixed-toolbar';
import { CloudAttachmentElement } from '@/plate/bcomponents/cloud/CloudAttachmentElement';
import { CloudImageElement } from '@/plate/bcomponents/cloud/CloudImageElement';
import { CloudToolbarButtons } from '@/plate/bcomponents/cloud/CloudToolbarButtons';
import { uploadStoreInitialValue } from '@/plate/bcomponents/cloud/uploadStoreInitialValue';
import { editableProps } from '@/plate/demo/editableProps';
import { plateUI } from '@/plate/demo/plateUI';
import { basicNodesPlugins } from '@/plate/demo/plugins/basicNodesPlugins';
import { cloudValue } from '@/plate/demo/values/cloudValue';
import { createMyPlugins, MyValue } from '@/types/plate.types';

const plugins = createMyPlugins(
  [
    ...basicNodesPlugins,
    createCloudPlugin({
      options: {
        /**
         * You can use either a Portive API Key `apiKey` or an Auth Token
         * `authToken` generated from the API Key.
         * https://www.portive.com/docs/auth/intro
         */
        // apiKey: 'PRTV_xxxx_xxxx'
        authToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InB1UFoyZTdlN0tUVzh0MjQifQ.eyJpYXQiOjE2Njg0NTUxMDksImV4cCI6MTcwMDAxMjcwOX0.xEznN3Wl6GqN57wsDGq0Z6giI4TvU32gvmMJUzcg2No',
        uploadStoreInitialValue, // don't need to specify this in actual app
      },
    }),
    createCloudAttachmentPlugin(),
    createCloudImagePlugin({
      options: {
        maxInitialWidth: 320,
        maxInitialHeight: 320,
        minResizeWidth: 100,
        maxResizeWidth: 720,
      },
    }),
  ],
  {
    components: {
      ...plateUI,
      [ELEMENT_CLOUD_ATTACHMENT]: CloudAttachmentElement,
      [ELEMENT_CLOUD_IMAGE]: CloudImageElement,
    },
  }
);

export default function CloudApp() {
  return (
    <PlateProvider<MyValue> plugins={plugins} initialValue={cloudValue}>
      <FixedToolbar>
        <CloudToolbarButtons />
      </FixedToolbar>
      <Plate<MyValue> editableProps={editableProps} />
    </PlateProvider>
  );
}
