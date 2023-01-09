import ButtonPage from "./pages/ButtonPage";
import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "sasd",
      label: "Can I use React on a project",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "safdv",
      label: "Can I use JavaScript on a project",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "amaks",
      label: "Can I Use React on a project",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
