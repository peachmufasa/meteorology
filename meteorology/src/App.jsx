import "./App.css";
import { LayoutMenu } from "./components/LayoutMenu.jsx";
import SignInForm from "./components/SignInForm.jsx";

function App() {
  const sectionComp = () => {
    return <div className={"flex justify-center items-center"}>Section</div>;
  };
  return (
    <>
      <div className={"h-full"}>
        {/* <LayoutMenu>
              {sectionComp()}
          </LayoutMenu> */}
        <SignInForm />
      </div>
    </>
  );
}

export default App;
