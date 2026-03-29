import {
  PiCheckCircleFill,
  PiArrowRightBold,
  PiGithubLogoFill,
  PiFileTextFill,
} from "react-icons/pi";
import { Link } from "react-router-dom";
import Logo from "../ui/Logo";

function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <nav className="flex items-center justify-between px-6 py-6 max-w-6xl mx-auto">
        <Logo />
        <div className="hidden md:flex gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
          <a href="#" className="hover:text-emerald-600 transition-colors">
            Features
          </a>
          <a href="#" className="hover:text-emerald-600 transition-colors">
            Pricing
          </a>
        </div>
      </nav>

      <section className="px-6 py-20 md:py-32 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-black text-slate-950 leading-[1.1] mb-8 tracking-tight">
          Your resume, <br />
          <span className="text-emerald-600">Evaluated by AI.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          Upload your resume and get instant, actionable feedback to land your
          dream job. No fluff, just data driven insights.
        </p>

        <Link to="/analyze">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-bold px-10 py-5 rounded-full shadow-2xl shadow-emerald-200 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto cursor-pointer">
            Analyze My Resume <PiArrowRightBold />
          </button>
        </Link>
      </section>

      <section className="py-24 bg-emerald-50/50 border-y border-emerald-100">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-4">
            <PiCheckCircleFill className="text-4xl text-emerald-600 mx-auto md:mx-0" />
            <h3 className="font-black text-xl text-emerald-950">
              ATS Optimization
            </h3>
            <p className="text-slate-500 leading-relaxed">
              Ensure your resume passes through automated filters with modern
              keyword analysis.
            </p>
          </div>
          <div className="space-y-4">
            <PiCheckCircleFill className="text-4xl text-emerald-600 mx-auto md:mx-0" />
            <h3 className="font-black text-xl text-emerald-950">
              Impact Metrics
            </h3>
            <p className="text-slate-500 leading-relaxed">
              We help you turn boring bullet points into quantifiable career
              achievements.
            </p>
          </div>
          <div className="space-y-4">
            <PiCheckCircleFill className="text-4xl text-emerald-600 mx-auto md:mx-0" />
            <h3 className="font-black text-xl text-emerald-950">
              Instant Scoring
            </h3>
            <p className="text-slate-500 leading-relaxed">
              Get a score from 0-10 based on industry standards and recruiter
              expectations.
            </p>
          </div>
        </div>
      </section>

      <footer className="py-16 px-64 bg-slate-800 text-slate-300 border-t border-slate-100 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 opacity-50 grayscale">
            <PiFileTextFill className="text-2xl" />
            <span className="font-black tracking-tighter uppercase">
              ResumeBot
            </span>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/ayanghanta/resume-review-bot"
              className="text-slate-400 hover:text-emerald-600 transition-colors"
            >
              <PiGithubLogoFill size={24} />
            </a>
          </div>

          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} ResumeBot AI
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
