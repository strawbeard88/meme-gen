export function TextInput({ index, value, size, onChange, onSizeChange, onClear }) {
  return (
    <div className="text-input-container">
      <label>Text {index + 1}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(index, e.target.value)}
        placeholder={`Skriv text ${index + 1}...`}
        className="text-input"
      />
      <div className="size-control">
        <label>Storlek: {size}px</label>
        <input
          type="range"
          min="12"
          max="72"
          value={size}
          onChange={(e) => onSizeChange(index, parseInt(e.target.value))}
          className="size-slider"
        />
      </div>
      <button onClick={() => onClear(index)} className="clear-btn">
        Rensa
      </button>
    </div>
  );
}
