export function MemeCanvas({ imagePath, textInputs }) {
  return (
    <div className="meme-canvas-wrapper">
      <div className="meme">
        <img src={imagePath} alt="meme" className="meme-image" />
        
        {textInputs.map((input, index) => (
          <div
            key={index}
            className={`text-overlay text-overlay-${index}`}
            style={{ fontSize: `${input.size}px` }}
          >
            {input.text}
          </div>
        ))}
      </div>
    </div>
  );
}
