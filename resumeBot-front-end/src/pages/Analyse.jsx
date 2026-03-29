import { useState } from "react";
import AnalysisResultDisplayBox from "../DisplayResult/AnalysisResultDisplayBox";
import UploaderArea from "../resumeUploader/UploaderArea";
import Header from "../ui/Header";

function Analyse() {
  const [selectedFile, setSelectedFile] = useState(null);

  function handleAnalyzeResum() {}

  return (
    <div className="min-h-screen bg-[#f1f5f2] p-6 md:p-12 font-sans text-slate-800">
      <div className="max-w-3xl mx-auto">
        <Header />

        <div className="bg-white border border-emerald-100 rounded-xl p-8 shadow-sm mb-8 transition-all hover:shadow-md">
          <UploaderArea
            selectedFile={selectedFile}
            onSetSelectFile={setSelectedFile}
          />
          <button
            className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-md shadow-lg shadow-emerald-100 flex items-center justify-center gap-2 transition-transform active:scale-[0.98] cursor-pointer"
            onClick={handleAnalyzeResum}
          >
            Analyze Resume
          </button>
        </div>

        <AnalysisResultDisplayBox />
      </div>
    </div>
  );
}

export default Analyse;
