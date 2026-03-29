import { PiSparkleBold } from "react-icons/pi";
import CollapseText from "../ui/CollapseText";

function ReviewSymmaryDisplay({ summary }) {
  return (
    <div className="bg-emerald-50 border border-emerald-100 p-5 rounded-md">
      <h4 className="text-xs font-bold uppercase text-emerald-700 mb-2 flex items-center gap-1">
        <PiSparkleBold /> AI Review Summary
      </h4>
      <p className="text-emerald-900 leading-relaxed font-medium italic">
        <CollapseText>{summary}</CollapseText>
      </p>
    </div>
  );
}

export default ReviewSymmaryDisplay;
