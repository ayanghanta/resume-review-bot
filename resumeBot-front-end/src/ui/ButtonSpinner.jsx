function ButtonSpinner({ children }) {
  return (
    <>
      <span className="w-5 h-5 border-2 border-emerald-200 border-t-emerald-600 rounded-full animate-spin inline-block"></span>
      <span className="tracking-wide">{children}</span>
    </>
  );
}

export default ButtonSpinner;
