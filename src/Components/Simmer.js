
export default function Simmer() {
    return (
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-2xl overflow-hidden shadow animate-pulse">
            <div className="h-48 bg-gray-300 w-full" />
            <div className="p-4 flex flex-col gap-3">
                <div className="h-4 bg-gray-300 rounded w-3/4" />
                <div className="h-3 bg-gray-300 rounded w-1/2" />
                <div className="h-3 bg-gray-300 rounded w-1/4" />
                <div className="h-3 bg-gray-300 rounded w-2/3" />
                <div className="flex gap-2 pt-3">
                    <div className="h-8 w-full bg-gray-300 rounded" />
                    <div className="h-8 w-full bg-gray-300 rounded" />
                </div>
            </div>
        </div>
    )
}
