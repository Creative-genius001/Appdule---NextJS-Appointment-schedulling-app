import React from 'react'
import Snackbar from '@mui/material/Snackbar';

function SnackBar() {
    const open = true;
    const vertical = 'top';
    const horizontal = 'center';
  return (
    <div>
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            // onClose={handleClose}
            message="I love snacks"
            key={vertical + horizontal} 
        />
    </div>
  )
}

export default SnackBar