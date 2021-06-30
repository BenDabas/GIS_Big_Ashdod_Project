import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogPopUp = ({ handleClose, open }) => {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle style={{ fontSize: '25px' }} id="alert-dialog-slide-title">
          <DialogContentText
            style={{ color: 'black', fontSize: '25px', fontWeight: 'bold' }}
            id="alert-dialog-slide-description"
          >
            Map Legend (categories)
          </DialogContentText>
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            style={{ color: '#ca3174', fontSize: '22px' }}
            id="alert-dialog-slide-description"
          >
            Pink is: Accessories and Bags
          </DialogContentText>
          <DialogContentText
            style={{ color: 'purple', fontSize: '22px' }}
            id="alert-dialog-slide-description"
          >
            Purple is: Restaurants and Food
          </DialogContentText>
          <DialogContentText
            style={{ color: 'blue', fontSize: '22px' }}
            id="alert-dialog-slide-description"
          >
            Blue is: Various
          </DialogContentText>
          <DialogContentText
            style={{ color: 'OrangeRed', fontSize: '22px' }}
            id="alert-dialog-slide-description"
          >
            Orange is: Footwear
          </DialogContentText>
          <DialogContentText
            style={{ color: 'green', fontSize: '22px' }}
            id="alert-dialog-slide-description"
          >
            Green is: Fashion
          </DialogContentText>

          <DialogContentText
            style={{ color: '#cabe13', fontSize: '22px' }}
            id="alert-dialog-slide-description"
          >
            Yellow is: Optics
          </DialogContentText>
          <DialogContentText
            style={{ color: 'indigo', fontSize: '22px' }}
            id="alert-dialog-slide-description"
          >
            Indigo is: Electronics
          </DialogContentText>
          <DialogContentText
            style={{ color: '#98FB98', fontSize: '22px' }}
            id="alert-dialog-slide-description"
          >
            Lite green is: Cosmetics and Pharmacy
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogPopUp;
