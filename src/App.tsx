import MainLayout from "./layouts/MainLayout";
import Profile from "../public/profile.webp";

function App() {
  return (
    <>
      <MainLayout>
        <div className="flex container mx-auto flex-row gap-x-5 justify-center">
          <div className="w-3/12 border-solid border-2 rounded-2xl">
            <img src={Profile} alt="Profile" className="rounded-2xl" />
          </div>
          <div className="flex w-4xl flex-col">
            <div className="border-solid border-2 rounded-2xl p-4">
              <p className="text-2xl">
                Hola soy <span className="text-red-600 font-semibold">Cristian</span>
              </p>
            </div>
            <div className="">
              <div className="">dfwd</div>
              <div className="">fef</div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default App;
