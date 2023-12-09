import "./App.css";
import {LayoutMenu} from "./components/LayoutMenu.jsx";

function App() {
    const sectionComp = () => {
        return (
            <div className={"flex justify-center items-center"}>
                Section
            </div>
        )
    }
  return (
    <>
      <div className={"h-full"}>
          <LayoutMenu>
              {sectionComp()}
          </LayoutMenu>
      </div>
    </>
  );
}

export default App;
