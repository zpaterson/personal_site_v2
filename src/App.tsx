import "./App.css";
import { ProfileImage } from "./components/ProfileImage";
import { About } from "./components/About";
import { NavigationBar } from "./components/NavigationBar";

const App = () => {
  return (
    <>
      <NavigationBar />
      <div className="min-h-screen w-screen bg-gradient-to-br from-cyan-50 via-purple-50 to-teal-50 flex items-center">
        <div className="w-full flex flex-row text-left gap-6 px-12 justify-center">
          <div className="basis-2/3 max-w-3xl">
            <About />
          </div>
          <div className="basis-1/3">
            <ProfileImage />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
