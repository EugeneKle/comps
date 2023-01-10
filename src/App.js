import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonsPage from "./pages/ButtonPage";

function App() {
  return (
    <div className="container mx-auto my-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
        <Route path="/buttons">
          <ButtonsPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
