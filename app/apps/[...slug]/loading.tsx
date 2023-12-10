import { Skeleton } from "@/components/skeleton"

export default function Loading() {

    return (
        <>
            <div className="hidden flex-col md:flex">
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <div className="flex items-center justify-between space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">Apps</h2>
                    </div>
                    <div className="container mx-auto py-10">
                        <Skeleton className="h-[462px]" />
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <Skeleton className="h-[462px] col-span-2" />
                        <Skeleton className="h-[462px] col-span-2" />
                    </div>
                </div>
            </div>
        </>
    );
}