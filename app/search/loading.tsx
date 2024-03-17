import { Skeleton } from "@/components/ui/skeleton";

function Loading() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-2">Loading results</h1>
      <h2 className="mb-5 text-gray-400">It won&apos;t be long</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <Skeleton className="w-[300px] h-[400px]" />
        <Skeleton className="w-[300px] h-[400px]" />
        <Skeleton className="w-[300px] h-[400px]" />
        <Skeleton className="w-[300px] h-[400px]" />
        <Skeleton className="w-[300px] h-[400px]" />
        <Skeleton className="w-[300px] h-[400px]" />
        <Skeleton className="w-[300px] h-[400px]" />
        <Skeleton className="w-[300px] h-[400px]" />
      </div>
    </div>
  );
}

export default Loading;
