export default function MenuSimmer() {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 p-6 md:p-16 bg-white text-gray-900 mt-20 animate-pulse">

            {/* Shimmer Product Card */}
            <div className="bg-white rounded-2xl shadow-lg max-w-md w-full overflow-hidden">
                {/* Image Placeholder */}
                <div className="w-full h-64 bg-gray-300" />

                {/* Content Placeholder */}
                <div className="p-6 space-y-4">
                    <div className="h-6 w-3/4 bg-gray-300 rounded" />
                    <div className="h-4 w-full bg-gray-200 rounded" />
                    <div className="h-4 w-5/6 bg-gray-200 rounded" />

                    <div className="flex items-center justify-between mt-6">
                        <div className="h-6 w-20 bg-gray-300 rounded" />
                        <div className="h-10 w-28 bg-gray-400 rounded-full" />
                    </div>
                </div>
            </div>

            {/* Shimmer Text Info */}
            <div className="max-w-xl space-y-6 w-full">
                <div className="h-4 w-32 bg-gray-300 rounded" />
                <div className="h-8 w-3/4 bg-gray-400 rounded" />

                <div className="space-y-4 mt-4">
                    <div className="h-4 w-full bg-gray-200 rounded" />
                    <div className="h-4 w-5/6 bg-gray-200 rounded" />
                    <div className="h-4 w-4/5 bg-gray-200 rounded" />
                </div>
            </div>
        </div>
    )
}
