import React from 'react';
import {Button} from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius:"20px",
  boxShadow: 24,
  p: 4,
};

const AppointmentModal = ({name,time, date, open, handleClose}) => {
    return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <Typography id="modal-modal-title" variant="h6" component="h2" color="primary" sx={{textAlign:"center", mb:4}}>
              {name}
            </Typography>
            <TextField
              disabled
              id="outlined-disabled"
              defaultValue={time}
              sx={{mb:2, width:"100%"}}
            />
            <TextField
              disabled
              id="outlined-disabled"
              defaultValue={date}
              sx={{mb:2, width:"100%"}}
            />
            <Box sx={{textAlign:"end"}}>
              <Button variant="contained" className="btn" sx={{color:"white", fontSize: 14, fontWeight:600, borderRadius:0, py:1 }}>Submit</Button>
            </Box>
          </form>
        </Box>
      </Modal>
    );
};

export default AppointmentModal;