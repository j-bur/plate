import React from 'react';
import { Plate } from '@udecode/plate';
import {
  MyParagraphElement,
  MyValue,
} from 'examples-next/src/lib/plate/typescript/plateTypes';
import { editableProps } from './common/editableProps';

const initialValue = [
  {
    type: 'p',
    children: [
      {
        text: 'This is editable plain text with react and history plugins, just like a <textarea>!',
      },
    ],
  } as MyParagraphElement,
];

export default function BasicEditorValueApp() {
  return (
    <Plate<MyValue> editableProps={editableProps} initialValue={initialValue} />
  );
}
