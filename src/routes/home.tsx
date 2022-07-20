import { Box, Typography } from "@mui/material";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Home";
  });

  return (
    <Box>
      <Typography> Home Page </Typography>
      <Typography variant="body1">
        Dolore do ut sit tempor labore ex occaecat ipsum eiusmod reprehenderit
        excepteur eiusmod cupidatat cupidatat. Labore anim esse anim consequat
        eiusmod cupidatat anim ex do do qui sint. Amet officia dolor aute ipsum
        dolor minim excepteur. Do laboris magna deserunt velit in aliqua id
        adipisicing pariatur. Fugiat esse ullamco ullamco ad enim aliquip velit
        eu minim consequat ea aute officia nulla. Duis ut ipsum quis ex
        excepteur ut et amet. Aliquip enim labore qui voluptate ea quis non
        consequat sunt commodo consectetur tempor deserunt aute. Dolore
        incididunt amet sunt velit excepteur. Consectetur ut Lorem do veniam
        velit nisi enim ex culpa nostrud nisi minim. Excepteur labore irure
        officia adipisicing occaecat excepteur cupidatat cupidatat nulla.
        Proident dolore consectetur officia aute cupidatat eiusmod laborum ut
        officia mollit elit. Tempor reprehenderit laboris nostrud consectetur
        mollit minim ipsum. Voluptate elit incididunt nulla proident irure ut
        in. Dolore exercitation fugiat laborum tempor velit ea aute eiusmod
        dolor aute anim cupidatat. Laboris nisi quis ullamco magna proident
        laborum duis eu ad reprehenderit. Eiusmod consectetur do culpa fugiat
        deserunt exercitation culpa nulla Lorem irure aliquip elit commodo
        incididunt. Consectetur laborum officia do pariatur fugiat nulla. Ipsum
        aliqua dolor id laborum id esse laboris proident irure exercitation
        exercitation sit Lorem elit. Pariatur dolor do est cupidatat qui commodo
        exercitation esse in esse. Ea amet sit eiusmod labore sunt nisi officia
        adipisicing excepteur. Aute minim dolor deserunt id.
      </Typography>
    </Box>
  );
}

export default Home;
