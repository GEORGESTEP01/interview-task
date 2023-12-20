import { Button, Grid, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import { useMsal } from "@azure/msal-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { instance, inProgress } = useMsal();
  const [toast, setToast] = useState({
    open: false,
    message: "",
  });
  const navigate = useNavigate();

  const onLoginClick = () => {
    instance
      .loginPopup({
        scopes: ["user.read"],
      })
      .then((authResponse) => {
        localStorage.setItem("MSAL", JSON.stringify(authResponse));
        setToast({
          message: "User Authorized Successfully",
          open: true,
        });
        navigate("/dashboard");
      })
      .catch((err) => {
        console.error("Login failed", err);
        setToast({
          message: "Failed To Authorize User",
          open: true,
        });
      });
  };

  useEffect(() => {
    const { accessToken } = JSON.parse(localStorage.getItem("MSAL")) || "";
    if (accessToken) {
      navigate("/dashboard");
    }
  }, [inProgress]);

  return (
    <Grid
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Button
        onClick={onLoginClick}
        variant="outlined"
        startIcon={<MicrosoftIcon />}
      >
        MICROSOFT LOGIN
      </Button>
      <Snackbar
        open={toast.open}
        autoHideDuration={1000}
        onClose={() => setToast({ ...toast, open: false })}
        message={toast.message}
      />
    </Grid>
  );
}
