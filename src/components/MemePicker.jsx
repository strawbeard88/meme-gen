const MEMES = [
  '/memes/meme1.svg',
  '/memes/meme2.svg',
  '/memes/meme3.svg',
  '/memes/meme4.svg',
];

export function MemePicker({ isOpen, onSelect, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="meme-picker-overlay">
      <div className="meme-picker-modal">
        <h2>Välj en meme</h2>
        <div className="meme-grid">
          {MEMES.map((memePath) => (
            <div
              key={memePath}
              className="meme-item"
              onClick={() => {
                onSelect(memePath);
                onClose();
              }}
            >
              <img src={memePath} alt="meme option" />
            </div>
          ))}
        </div>
        <button onClick={onClose} className="close-picker-btn">
          Stäng
        </button>
      </div>
    </div>
  );
}
