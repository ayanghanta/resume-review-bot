import { useDropzone } from "react-dropzone";
import { PiCloudArrowUpBold } from "react-icons/pi";
import DisplaySelectedResume from "./DisplaySelectedResume";

function UploaderArea({ selectedFile, onSetSelectFile }) {
  function onDrop(acceptedFiles) {
    const file = acceptedFiles[0];

    if (!file || !file.type.endsWith("pdf")) return;

    onSetSelectFile(file);
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "application/pdf": [] },
    multiple: false,
    onDrop,
  });

  return selectedFile ? (
    <DisplaySelectedResume
      selectedFile={selectedFile}
      onSetSelectFile={onSetSelectFile}
    />
  ) : (
    <div
      className={`group border-2 border-dashed border-emerald-100 rounded-sm py-12 flex flex-col items-center justify-center hover:border-emerald-400 hover:bg-emerald-50/50 transition-all cursor-pointer ${isDragActive && "border-emerald-400 bg-emerald-50/50"}`}
      {...getRootProps()}
    >
      <PiCloudArrowUpBold
        className={`text-5xl text-emerald-200 group-hover:text-emerald-500 transition-colors mb-3 ${isDragActive && "text-emerald-500"}`}
      />
      <h3 className="text-lg font-semibold text-emerald-900">
        Upload your Resume
      </h3>
      <p className="text-sm text-emerald-600/60">
        Support for PDF or Docx files
      </p>
      <input className="hidden" {...getInputProps()} />
    </div>
  );
}

export default UploaderArea;
