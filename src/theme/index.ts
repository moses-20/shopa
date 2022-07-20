import { createTheme, ThemeOptions } from "@mui/material";

import ui from "./ui";
import mixins from "./mixins";
import shadows from "./shadows";
import typography from "./typography";

const theme: ThemeOptions = createTheme({
  components: ui,
  typography,
  mixins,
  shadows,
});

export default theme;
