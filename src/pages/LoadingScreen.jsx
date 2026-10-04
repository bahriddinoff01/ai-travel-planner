import { Plane } from "lucide-react"

const LoadingScreen = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-50 text-gray-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/10" />

      <div className="relative flex flex-col items-center">

        {/* Animated plane */}
        <div className="relative mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-gray-200 bg-white shadow-xl shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900">
          <Plane
            size={34}
            className="animate-pulse text-blue-600 dark:text-blue-400"
          />

          {/* Orbit */}
          <span className="absolute inset-0 rounded-3xl border border-blue-500/20 animate-ping" />
        </div>

        {/* Brand */}
        <h1 className="text-2xl font-bold tracking-tight">
          Travel<span className="text-blue-600 dark:text-blue-400">AI</span>
        </h1>

        {/* Message */}
        <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-200">
          Preparing your journey
          <span className="inline-flex w-7">
            <span className="animate-pulse">...</span>
          </span>
        </p>

        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Checking your account
        </p>

        {/* Loading bar */}
        <div className="mt-7 h-1 w-40 overflow-hidden rounded-full bg-gray-200 dark:bg-slate-800">
          <div className="h-full w-1/2 animate-[loading_1.4s_ease-in-out_infinite] rounded-full bg-blue-600 dark:bg-blue-400" />
        </div>

      </div>
    </div>
  )
}

export default LoadingScreen