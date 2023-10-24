import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function SnackBar(props: any) {
    const vertical = 'top';
    const horizontal = 'center';

    const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
      props,
      ref,
    ) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const action = (
      <React.Fragment>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={props.close}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
  );
  return (
    <div>
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={props.open}
            autoHideDuration={6000}
            key={vertical + horizontal} 
            action={action}
        >
          <Alert onClose={props.close} severity="success" sx={{ width: '100%' }}>
            {props.msg}
          </Alert>
        </Snackbar>
    </div>
  )
}

export default SnackBar