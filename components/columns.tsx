"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/button"

export type Bundler = {
    BUNDLER_NAME: string
    NUM_USEROPS: number
    NUM_TXNS: number
    REVENUE: number
}

export const bundlercolumns: ColumnDef<Bundler>[] = [
    {
        accessorKey: "BUNDLER_NAME",
        header: "Bundler",
    },
    {
        accessorKey: "NUM_USEROPS",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Total UserOps Executed
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("NUM_USEROPS"))

            return <div className="text-center font-medium">{amount}</div>
        },
    },
    {
        accessorKey: "NUM_TXNS",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Total Bundle Txns Executed
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("NUM_TXNS"))

            return <div className="text-center font-medium">{amount}</div>
        },
    },
    {
        accessorKey: "REVENUE",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Total OnChain Revenue
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("REVENUE"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return <div className="text-center font-medium">{formatted}</div>
        },
    },
]

export type Paymaster = {
    paymaster_name: string
    num_userops: number
    gas_spent: number
}

export const paymastercolumns: ColumnDef<Paymaster>[] = [
    {
        accessorKey: "PAYMASTER_NAME",
        header: "Paymaster",
    },
    {
        accessorKey: "NUM_USEROPS",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Total UserOps Paid For
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("NUM_USEROPS"))

            return <div className="text-center font-medium">{amount}</div>
        },
    },
    {
        accessorKey: "GAS_SPENT",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Total Gas Spend
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("GAS_SPENT"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return <div className="text-center font-medium">{formatted}</div>
        },
    },
]

export type Deployer = {
    deployer_name: string
    num_accounts: number
}

export const deployercolumns: ColumnDef<Deployer>[] = [
    {
        accessorKey: "DEPLOYER_NAME",
        header: "Account Deployer",
    },
    {
        accessorKey: "NUM_ACCOUNTS",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Number of Accounts Deployed
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("NUM_ACCOUNTS"))

            return <div className="text-center font-medium">{amount}</div>
        },
    },
]

export type Apps = {
    PROJECT: string
    NUM_UNIQUE_SENDERS: number
    NUM_OPS: number
}

export const appcolumns: ColumnDef<Apps>[] = [
    {
        accessorKey: "PROJECT",
        header: "Project",
    },
    {
        accessorKey: "NUM_UNIQUE_SENDERS",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Total Users
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("NUM_UNIQUE_SENDERS"))

            return <div className="text-center font-medium">{amount}</div>
        },
    },
    {
        accessorKey: "NUM_OPS",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Total UserOps
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("NUM_OPS"))

            return <div className="text-center font-medium">{amount}</div>
        },
    },
]

export type PaymasterMin = {
    PAYMASTER_NAME: string
    GAS_SPENT: number
}

export const paymastermincolumns: ColumnDef<PaymasterMin>[] = [
    {
        accessorKey: "PAYMASTER_NAME",
        header: "Paymaster",
    },
    {
        accessorKey: "GAS_SPENT",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Total Gas Spend
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("GAS_SPENT"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return <div className="text-center font-medium">{formatted}</div>
        },
    },
]
