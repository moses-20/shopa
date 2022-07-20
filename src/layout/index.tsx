import Page from "material/page";
import Main from "material/main";
import Topbar from "./topbar";
import RoutePages from "routes";
import { Container } from "@mui/material";

function Layout() {
  return (
    <Page>
      <Topbar />
      <Main>
        <Container>
          <RoutePages />
        </Container>
      </Main>
    </Page>
  );
}

export default Layout;
