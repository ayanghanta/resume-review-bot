import { PiWarningCircleFill } from "react-icons/pi";

function DisplayImprovements({ improvements }) {
  return (
    <div>
      <h3 className="flex items-center gap-2 text-amber-700 font-bold mb-4">
        <PiWarningCircleFill className="text-xl" /> Optimization Tips
      </h3>
      <ul className="space-y-4">
        {improvements.map((imp, i) => (
          <li
            key={i}
            className="text-sm text-slate-600 flex items-start gap-3 bg-amber-50/30 p-2 rounded-lg"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
            {imp}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayImprovements;
