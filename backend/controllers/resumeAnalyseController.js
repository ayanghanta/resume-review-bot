import multer from "multer";
import { PDFParse } from "pdf-parse";
import fs from "fs";
import { filterContnet } from "../utils/helper.js";
import { useGeminiAi } from "../utils/UseGeminiAi.js";

export async function analyseResume(req, res) {
  try {
    // console.log(req.file);
    const parser = new PDFParse({ data: req.file.buffer });
    const data = await parser.getText();

    // fs.writeFileSync("./content.txt", filterContnet(data.text));

    const aiAnalysis = await useGeminiAi(filterContnet(data.text));

    res.status(200).json({ isSuccess: true, data: { aiAnalysis } });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({
        isSuccess: false,
        message: err.message || "Internal server error",
      });
  }
}

const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (_, file, cb) => {
    const isPdf = file.mimetype?.startsWith("application/pdf");

    if (isPdf) cb(null, true);
    else cb(new Error("Plase upload a pdf only !"), false);
  },
});

export const uploadResume = upload.single("resume");
