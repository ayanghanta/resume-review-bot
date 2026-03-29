import { PiChartBarBold, PiFileTextBold } from "react-icons/pi";
import DisplayImprovements from "./DisplayImprovements";
import DisplayStrengths from "./DisplayStrengths";
import ReviewSymmaryDisplay from "./ReviewSymmaryDisplay";

const DUMMY_REVIEW = {
  summary:
    "This resume presents a strong candidate with significant experience as a Senior Full Stack Engineer, showcasing impressive quantifiable achievements in developing scalable microservices and engaging front-end features. However, the education section contains confusing dates and an unclear institution name, which detracts from an otherwise professional and impactful profile.",
  strengths: [
    "Strong quantifiable achievements in the experience section, demonstrating clear impact (e.g., 40% scalability, 25% user engagement, 30% load time reduction).",
    "Relevant and well-categorized technical skills, covering a broad range of full-stack technologies (Languages, Frameworks/Libraries, Databases, Tools/Platforms).",
    "Clear and concise bullet points, making the resume easy to read and parse.",
    "Inclusion of an 'Awards' section highlights significant achievements and initiative (Hackathon Winner).",
    "Experience with modern and in-demand technologies like Node.js, React, Next.js, MongoDB, and AWS.",
  ],
  weaknesses: [
    "Missing a professional summary or objective statement, which is crucial for quickly conveying value and matching keywords for ATS.",
    "Significant inconsistency in the 'EDUCATION' section: '2025 - PRESENT' for MCA is confusing and appears to be a future start date listed as ongoing, which is a critical error.",
    "The resume is spread across two pages despite having relatively concise content, which is inefficient for a candidate with this level of experience.",
    "Project descriptions lack quantifiable impact or specific challenges overcome, making them less compelling and more generic.",
    "The 'Physics Honours' degree isn't directly tied to software development, and without relevant coursework or projects, its relevance is diminished.",
    "The 'LANGUAGES' section is placed at the very end and could be integrated more effectively if relevant to the target role, or omitted if space is critical.",
  ],
  suggestions: [
    "Add a concise 'Professional Summary' or 'Objective' section at the top, tailored to the target job role, highlighting key skills, experience, and career aspirations. This is vital for ATS keyword matching.",
    "Immediately correct the 'EDUCATION' section dates. If the MCA starts in 2025, list it as 'Expected Graduation: [Year]' or 'Enrollment: [Start Date] - Present' if it has already begun.",
    "Condense the resume to a single page. This can be achieved by optimizing spacing, potentially shortening less impactful bullet points, and refining project descriptions.",
    "For projects, add more detail about the problem solved, technologies used, and the impact or outcome (e.g., 'Developed X to achieve Y, resulting in Z').",
    "Consider adding a 'Relevant Coursework' or 'Academic Projects' subsection under the Physics degree if there are any transferable skills or projects relevant to software development.",
    "Integrate the 'LANGUAGES' section into a 'Skills' section if space is tight, or remove it if not directly relevant to the job.",
    "Ensure all bullet points start with strong action verbs and focus on accomplishments rather than just responsibilities.",
  ],
  ats_score: 7.5,
  overall_score: 7,
};

function scoreColor(score) {
  if (score >= 8) return "text-slate-100";
  if (score >= 5) return "text-yellow-500";
  return "text-red-500";
}

function AnalysisResultDisplayBox() {
  return (
    <div className="bg-white border border-emerald-50 rounded-xl shadow-xl shadow-emerald-900/5 overflow-hidden">
      <div className="bg-emerald-950 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <PiFileTextBold className="text-emerald-400 text-3xl" />
          <div>
            <h2 className="text-white font-bold text-lg leading-none">
              Analysis Results
            </h2>
            <p className="text-emerald-400/60 text-xs mt-1">
              Powered by RevResume AI
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-md border border-white/10">
          <PiChartBarBold className="text-emerald-300 text-xl" />
          <div className="text-white">
            <span
              className={`${scoreColor(DUMMY_REVIEW.overall_score)} text-2xl font-black`}
            >
              {DUMMY_REVIEW.overall_score}
            </span>
            <span className="text-lg font-medium text-emerald-600">/10</span>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-10">
        <ReviewSymmaryDisplay summary={DUMMY_REVIEW.summary} />

        <div className="grid md:grid-cols-2 gap-10">
          <DisplayStrengths strengths={DUMMY_REVIEW.strengths} />

          <DisplayImprovements improvements={DUMMY_REVIEW.weaknesses} />
        </div>
      </div>
    </div>
  );
}

export default AnalysisResultDisplayBox;
