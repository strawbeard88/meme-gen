import html2canvas from 'html2canvas';

export function saveMeme() {
  const element = document.querySelector(".meme");
  if (!element) return;
  
  html2canvas(element).then((canvas) => {
    const link = document.createElement("a");
    link.download = "meme.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}
