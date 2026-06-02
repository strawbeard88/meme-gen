import { useState } from 'react';
import { MemePicker } from './MemePicker';
import { MemeCanvas } from './MemeCanvas';
import { TextInput } from './TextInput';
import { saveMeme } from '../utils/download';
import '../styles/MemeGenerator.css';

export function MemeGenerator() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [textInputs, setTextInputs] = useState([
    { text: '', size: 24 },
    { text: '', size: 24 },
  ]);

  const handleSelectImage = (imagePath) => {
    setSelectedImage(imagePath);
    // Rensa text automatiskt vid byte av bild
    setTextInputs([
      { text: '', size: 24 },
      { text: '', size: 24 },
    ]);
  };

  const handleTextChange = (index, text) => {
    const newInputs = [...textInputs];
    newInputs[index].text = text;
    setTextInputs(newInputs);
  };

  const handleSizeChange = (index, size) => {
    const newInputs = [...textInputs];
    newInputs[index].size = size;
    setTextInputs(newInputs);
  };

  const handleClear = (index) => {
    const newInputs = [...textInputs];
    newInputs[index].text = '';
    setTextInputs(newInputs);
  };

  return (
    <div className="meme-generator-container">
      <h1>Meme Generator</h1>

      <div className="button-group">
        <button
          onClick={() => setShowPicker(true)}
          className="btn btn-primary"
        >
          Välj meme
        </button>
        <button
          onClick={saveMeme}
          disabled={!selectedImage}
          className="btn btn-secondary"
        >
          Ladda ner
        </button>
      </div>

      <MemePicker
        isOpen={showPicker}
        onSelect={handleSelectImage}
        onClose={() => setShowPicker(false)}
      />

      {selectedImage && (
        <div className="content">
          <div className="left-panel">
            <MemeCanvas imagePath={selectedImage} textInputs={textInputs} />
          </div>

          <div className="right-panel">
            <h3>Redigera text</h3>
            {textInputs.map((input, index) => (
              <TextInput
                key={index}
                index={index}
                value={input.text}
                size={input.size}
                onChange={handleTextChange}
                onSizeChange={handleSizeChange}
                onClear={handleClear}
              />
            ))}
          </div>
        </div>
      )}

      {!selectedImage && (
        <div className="empty-state">
          <p>Välj en meme för att komma igång</p>
        </div>
      )}
    </div>
  );
}
