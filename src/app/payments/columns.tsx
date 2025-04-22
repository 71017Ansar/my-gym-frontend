"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  avatar: string
  role: "customer" | "admin" 
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "avatar",
    header: "avatar",
    cell: ({ row }) => (
      <img
        src={row.original.avatar}
        alt={row.original.avatar}
        className="w-12 h-12 object-cover rounded"
      />
    ),
    // sorting true
   
  },
  {
    accessorKey: "name",
    header: "name",
    enableSorting: true,
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "role",
  },
]
