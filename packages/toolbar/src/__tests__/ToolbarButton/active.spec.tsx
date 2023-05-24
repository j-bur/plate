import React from 'react';
import { render } from '@testing-library/react';

import { ToolbarButtonOld } from '@/plate/toolbar/ToolbarButtonOld';

it('should render', () => {
  const { getByTestId } = render(
    <ToolbarButtonOld data-testid="ToolbarButton" icon={null} active />
  );

  expect(getByTestId('ToolbarButton')).toBeVisible();
});
