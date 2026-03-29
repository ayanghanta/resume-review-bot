import {
  PiFilePdfBold,
  PiArrowClockwiseBold,
  PiTrashBold,
} from "react-icons/pi";

function DisplaySelectedResume({ selectedFile, onSetSelectFile, isPending }) {
  const { name: fileName, size: fileSize } = selectedFile;

  return (
    <div className="w-full mt-6 animate-in fade-in zoom-in duration-300">
      <div className="bg-emerald-50/50 border-2 border-emerald-200 rounded-xl p-4 flex items-center justify-between group">
        <div className="flex items-center gap-4">
          <div className="bg-white p-3 rounded-xl shadow-sm border border-emerald-100 text-emerald-600">
            <PiFilePdfBold size={32} />
          </div>

          <div className="text-left">
            <p className="text-sm font-bold text-emerald-900 truncate max-w-50 md:max-w-xs">
              {fileName}
            </p>
            <p className="text-xs font-medium text-emerald-600/70">
              {Math.round(fileSize / 1024)} KB • Ready to analyze
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="p-2 hover:bg-emerald-100 text-emerald-700 rounded-lg transition-colors flex items-center gap-1 text-xs font-bold cursor-pointer disabled:cursor-not-allowed disabled:hover:bg-transparent"
            disabled={isPending}
            onClick={() => onSetSelectFile(null)}
          >
            <PiArrowClockwiseBold size={18} />
            <span className="hidden md:block">Upload another</span>
          </button>

          <div className="w-px h-6 bg-emerald-200 mx-1" />

          <button
            className="p-2 hover:bg-red-50 text-orange-400 rounded-lg transition-colors flex items-center gap-1 text-xs font-bold cursor-pointer disabled:cursor-not-allowed disabled:hover:bg-transparent"
            disabled={isPending}
            onClick={() => onSetSelectFile(null)}
          >
            <PiTrashBold size={18} />
            <span className="hidden md:block">Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DisplaySelectedResume;
