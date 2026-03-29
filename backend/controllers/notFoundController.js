export function handleNotFoundError(req, res) {
  res
    .status(404)
    .json({ isSuccess: false, message: "This route is not exist." });
}
