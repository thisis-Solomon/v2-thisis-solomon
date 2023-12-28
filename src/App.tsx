import Contents from "./components/Contents";
import Header from "./components/Hearder";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="dark:bg-stone-800">
      <Header />
      <main className="container mx-auto px-8 md:flex md:w-[80%] md:gap-x-5">
        <Sidebar />
        <Contents />
      </main>
    </div>
  );
}
