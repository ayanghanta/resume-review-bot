import { useState } from "react";
import AnalysisResultDisplayBox from "../DisplayResult/AnalysisResultDisplayBox";
import UploaderArea from "../resumeUploader/UploaderArea";
import Header from "../ui/Header";
import { useMutation } from "@tanstack/react-query";
import { analyseResumeApi } from "../services/apiServices";
import toast from "react-hot-toast";
import ButtonSpinner from "../ui/ButtonSpinner";

function Analyse() {
  const [selectedFile, setSelectedFile] = useState(null);

  const { data, isPending, mutate } = useMutation({
    mutationFn: analyseResumeApi,
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return (
    <div className="min-h-screen bg-[#f1f5f2] p-6 md:p-12 font-sans text-slate-800">
      <div className="max-w-3xl mx-auto">
        <Header />

        <div className="bg-white border border-emerald-100 rounded-xl p-8 shadow-sm mb-8 transition-all hover:shadow-md">
          <UploaderArea
            selectedFile={selectedFile}
            onSetSelectFile={setSelectedFile}
            isPending={isPending}
          />
          <button
            className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-md shadow-lg shadow-emerald-100 flex items-center justify-center gap-2 transition-transform active:scale-[0.98] cursor-pointer disabled:text-emerald-100 disabled:bg-emerald-600 disabled:hover:bg-emerald-600"
            disabled={isPending}
            onClick={() => {
              if (!selectedFile)
                return toast.error("Please select your resume to analyze!");
              mutate(selectedFile);
            }}
          >
            {isPending ? (
              <ButtonSpinner>Analyzing Resume...</ButtonSpinner>
            ) : (
              <span>Analyze Resume</span>
            )}
          </button>
        </div>

        {data && !isPending && <AnalysisResultDisplayBox analyzeData={data} />}
      </div>
    </div>
  );
}

export default Analyse;
