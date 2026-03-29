export function filterContnet(content) {
  return content
    .replace(/\n+/g, "\n")
    .replace(/--\s*\d+\s+of\s+\d+\s*--/g, "")
    .trim();
}
