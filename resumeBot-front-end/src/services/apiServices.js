import { BACKEND_URL } from "../utils/constants";

export async function analyseResume(resumeFile) {
  const formData = new FormData();
  formData.append("resume", resumeFile);

  try {
    const res = await fetch(`${BACKEND_URL}/analyse`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (!data.isSuccess) throw new Error(data.message);
    return data.data.aiAnalysis;
  } catch (err) {
    throw new Error(err.message || "Something went wrong!");
  }
}
