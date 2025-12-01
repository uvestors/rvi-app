const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-xl border border-slate-800 bg-slate-950/50 text-slate-100 shadow-sm backdrop-blur-sm ${className}`}
  >
    {children}
  </div>
);

export default Card;
