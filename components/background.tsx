const Background = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px]" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
    </div>
  );
};

export default Background;
