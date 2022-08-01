import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";

export default function AddForm() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button onClick={handleToggle}>Click to view report</Button>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <Card>
          <CardHeader
            action={
              <>
                <IconButton onClick={handleClose} aria-label="Download">
                  <DownloadForOfflineIcon />
                </IconButton>
                <IconButton onClick={handleClose} aria-label="Cancel">
                  <CancelIcon />
                </IconButton>
              </>
            }
            title="CANCER"
            subheader="2022-05-26"
          />
          <CardMedia
            component="img"
            height="400"
            src="https://www.biorxiv.org/content/biorxiv/early/2014/09/03/008748/F2.large.jpg"
            alt="Report Image"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              If there is any note that is provided by the doctor; it goes
              here!!
            </Typography>
          </CardContent>
        </Card>
      </Backdrop>
    </div>
  );
}
