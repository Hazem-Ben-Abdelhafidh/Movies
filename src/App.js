import { useState } from "react";
import Layout from "./Components/Layout/Layout";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import {MovieProvider} from './MovieContext';
import SearchResults from "./Components/SearchResults/SearchResults";
import Previews from "./Components/Previews/Previews";
import CardDetails from "./Components/CardDetails/CardDetails";

function App() {
  const [type,setType]= useState('movie');
  return (
    <BrowserRouter>
      <MovieProvider>
        <div className="App">
            <Layout>
              <Switch>
                <Route exact path="/"><Previews type={type} setType={setType}/></Route>
                <Route exact path="/Results"><SearchResults/></Route>
                <Route exact path="/Results/:id"><CardDetails type={type}/></Route>
              </Switch>
            </Layout>
        </div>
      </MovieProvider>
    </BrowserRouter>
  );
}

export default App;
