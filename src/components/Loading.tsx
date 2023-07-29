export const Loading = () => (
  <div className="w-32 aspect-video bg-slate-100 rounded flex items-center justify-center">
    <div
      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-slate-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    ></div>
  </div>
);
