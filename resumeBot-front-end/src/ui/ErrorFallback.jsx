import {
  PiWarningCircleBold,
  PiArrowCounterClockwiseBold,
} from "react-icons/pi";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center font-sans">
      <div className="text-red-500 mb-6">
        <PiWarningCircleBold size={80} />
      </div>

      <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter mb-4">
        Something went wrong.
      </h1>

      <div className="max-w-md mx-auto mb-10">
        <p className="mt-8 rounded-lg text-sm text-slate-900 font-mono">
          {error?.message || "Some error happen"}
        </p>
      </div>

      <button
        onClick={resetErrorBoundary}
        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all active:scale-95 shadow-xl shadow-emerald-100 cursor-pointer"
      >
        <PiArrowCounterClockwiseBold weight="bold" />
        Try Again
      </button>
    </div>
  );
}

export default ErrorFallback;
