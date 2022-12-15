import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ToolTip(prop) {
  return (
    <Snackbar open={prop.open} autoHideDuration={6000} onClose={prop.onClose}>
      <Alert onClose={prop.onClose} severity={prop.severity}>
        {prop.message}
      </Alert>
    </Snackbar>
  );
}
