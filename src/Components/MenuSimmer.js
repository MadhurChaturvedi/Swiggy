export default function MenuSimmer() {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 p-4 sm:p-6 md:p-12 lg:p-16 bg-white text-gray-900 mt-20 animate-pulse">

            {/* Shimmer Product Card */}
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-md lg:max-w-lg overflow-hidden">
                {/* Image Placeholder */}
                <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-300" />

                {/* Content Placeholder */}
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <div className="h-5 sm:h-6 w-2/3 sm:w-3/4 bg-gray-300 rounded" />
                    <div className="h-4 w-full bg-gray-200 rounded" />
                    <div className="h-4 w-5/6 bg-gray-200 rounded" />

                    <div className="flex items-center justify-between mt-4">
                        <div className="h-5 w-20 bg-gray-300 rounded" />
                        <div className="h-8 w-24 sm:h-10 sm:w-28 bg-gray-400 rounded-full" />
                    </div>
                </div>
            </div>

            {/* Shimmer Text Info */}
            <div className="w-full max-w-lg space-y-4 sm:space-y-6">
                <div className="h-3 sm:h-4 w-1/3 sm:w-32 bg-gray-300 rounded" />
                <div className="h-6 sm:h-8 w-2/3 sm:w-3/4 bg-gray-400 rounded" />

                <div className="space-y-2 sm:space-y-4 mt-3 sm:mt-4">
                    <div className="h-3 sm:h-4 w-full bg-gray-200 rounded" />
                    <div className="h-3 sm:h-4 w-5/6 bg-gray-200 rounded" />
                    <div className="h-3 sm:h-4 w-4/5 bg-gray-200 rounded" />
                </div>
            </div>

        </div>

    )
}
