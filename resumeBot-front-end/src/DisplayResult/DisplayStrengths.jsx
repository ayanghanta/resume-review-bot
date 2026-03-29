import { PiCheckCircleFill } from "react-icons/pi";

function DisplayStrengths({ strengths }) {
  return (
    <div>
      <h3 className="flex items-center gap-2 text-emerald-700 font-bold mb-4">
        <PiCheckCircleFill className="text-xl" /> Key Strengths
      </h3>
      <ul className="space-y-4">
        {strengths.map((str, i) => (
          <li
            key={i}
            className="text-sm text-slate-600 flex items-start gap-3 bg-emerald-50/30 p-2 rounded-lg"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
            {str}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayStrengths;
