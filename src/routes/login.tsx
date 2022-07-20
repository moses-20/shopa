import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/", { replace: true });
  };

  return (
    <Box>
      <Typography> Login Page </Typography>
      <Button onClick={handleLogin}> Login </Button>
    </Box>
  );
}

export default Login;
