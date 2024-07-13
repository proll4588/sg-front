import { Divider, Grid, Typography } from '@mui/material';

import { UiTableCardFunction } from './type';
import { MobileCardWithActions } from '../../mobile-card-with-actions';

export const UiTableCard: UiTableCardFunction = ({
  data,
  renderActions,
  visibleFields,
  onClick,
  renderHeaderChildren,
  id,
  paperProps,
}) => {
  return (
    <MobileCardWithActions
      id={id}
      headChildren={renderHeaderChildren?.()}
      renderActions={renderActions}
      collapsedVariant={visibleFields.length > 3}
      stackProps={{
        onClick: onClick,
        sx: {
          px: 1,
          pb: 1,
          pt: visibleFields.length > 3 ? 0 : 1,
          cursor: onClick ? 'pointer' : 'auto',
        },
        divider: <Divider />,
      }}
      paperProps={paperProps}
    >
      {visibleFields.map((field) => (
        <Grid
          key={String(field.field) + id}
          container
          flexDirection={'row'}
          justifyContent={'space-between'}
        >
          {field.title && field.title.length > 0 && (
            <Typography fontWeight={700}>{field.title}:</Typography>
          )}
          {field.renderComponent(data)}
        </Grid>
      ))}
    </MobileCardWithActions>
  );
};
