import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export default function Chadcn() {
  return (
    <Table>
  <TableCaption>Bs Computer Science & Engineering College Fees payment status </TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">STUDENT ID</TableHead>
      <TableHead>STUDENT NAME</TableHead>
      <TableHead>STUDENT CLASS</TableHead>
      <TableHead>STUDENT SECTION</TableHead>
      <TableHead>STUDENT ROLL NO</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">ID:1</TableCell>
      <TableCell>ANSAR</TableCell>
      <TableCell>BSCS </TableCell>
      <TableCell className="">SEMESTER 8TH</TableCell>
      <TableCell className="">071018</TableCell>
      <TableCell className="">ATM</TableCell>
      <TableCell className="">190000</TableCell>


    </TableRow>
    <TableRow>
      <TableCell className="font-medium">ID:1</TableCell>
      <TableCell>ANSAR</TableCell>
      <TableCell>BSCS </TableCell>
      <TableCell className="">SEMESTER 8TH</TableCell>
      <TableCell className="">071018</TableCell>
      <TableCell className="">ATM</TableCell>
      <TableCell className="">190000</TableCell>


    </TableRow>
    <TableRow>
      <TableCell className="font-medium">ID:1</TableCell>
      <TableCell>ANSAR</TableCell>
      <TableCell>BSCS </TableCell>
      <TableCell className="">SEMESTER 8TH</TableCell>
      <TableCell className="">071018</TableCell>
      <TableCell className="">ATM</TableCell>
      <TableCell className="">190000</TableCell>


    </TableRow>
  </TableBody>
</Table>

  )
}
