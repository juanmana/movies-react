import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuNav from "./components/MenuNav";

// Pages
import Home from "./pages/home";
import NewMovies from "./pages/new-movies";
import PopularMovies from "./pages/popular-movies";
import SearchMovies from "./pages/search-movies";
import Movie from "./pages/movie";
import Error404 from "./pages/error404";


function App() {

  const { Header, Content } = Layout;

return(
  <Layout>
      <Router>
        <Header style={{ zIndex: 1 }}>
          <MenuNav />
        </Header>

        <Content>
          <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route path="/new-movies" exact={true}>
              <NewMovies />
            </Route>
            <Route path="/popular-movies" exact={true}>
              <PopularMovies />
            </Route>
            <Route path="/search-movies" exact={true}>
              <SearchMovies />
            </Route>
            <Route path="/movie/:id" exact={true}>
              <Movie />
            </Route>
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
}




export default App;
