const DecoratedLines = () => {
  const generatedArray = Array.from({ length: 12 });
  return (
    <div className="absolute -z-10 flex gap-2 -top-8 left-20 -rotate-45">
      {generatedArray.map((_, i) => (
        <div
          key={`DECORATEDLINE_${i}`}
          className="w-[2px] h-44 bg-K-ASCENT"
        ></div>
      ))}
    </div>
  );
};

export default DecoratedLines;
