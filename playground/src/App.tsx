import { DataTable } from "react-tanstack-data-table";

console.log(DataTable, "DataTable");

function App() {
  const columns = [
    {
      header: "S.N",
      accessorKey: "serial",
      pin: "left",
    },
    {
      header: "Designation",
      accessorKey: "designation",
    },
    {
      header: "Role",
      accessorKey: "role_type",
    },
  ];

  return (
    <>
      <h1>Tanstack React Datatable</h1>
      <DataTable columns={columns} />
    </>
  );
}

export default App;
