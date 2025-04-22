import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
    const res = await fetch("https://api.escuelajs.co/api/v1/users")
    const data = await  res.json()
    return data
  // Fetch data from your API here.
 
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      {/* <DataTable columns={columns} data={data} /> */}
    </div>
  )
}
