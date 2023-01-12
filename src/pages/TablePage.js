// import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
    { name: "Cherry", color: "bg-red-700", score: 2.5 },
  ];

  const config = [
    {
      label: "Fruits",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`${fruit.color} p-3 m-2`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
    {
      label: "Score Squared",
      render: (fruit) => fruit.score ** 2 ,
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div className="flex gap-5 flex-wrap">
      <SortableTable data={data} config={config} keyFn={keyFn} />
      {/* <Table data={data} config={config} keyFn={keyFn} /> */}
    </div>
  );
}

export default TablePage;
