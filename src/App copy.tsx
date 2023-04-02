import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Abuja", "Lagos", "Port Harcourt", "Rivers", "Kogi"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
