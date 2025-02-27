import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import moment from "moment";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({
  handleOpen,
  handleClose,
  open,
  setOpen,
  modalData,
}: any) {
  console.log(modalData, "modalData");
  return (
    <React.Fragment>
      {/* <Button variant="outlined" onClick={handleOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <Image
          src={modalData?.cover?.url}
          alt="image"
          width={1000}
          height={1000}
        />
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div>{modalData?.title}</div>
            <div
              className="text-gray-600 text-base mt-2"
              style={{
                fontFamily: "Poppins",
                fontWeight: "500px",
                fontSize: "14px",
              }}
            >
              {moment(modalData?.eventDate).format("Do-MMM-YYYY")}
            </div>
          </div>
        </div>
      </BootstrapDialog>
    </React.Fragment>
  );
}
