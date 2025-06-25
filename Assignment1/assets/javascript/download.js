document.getElementById("downloadCV").addEventListener("click", function () {
  const cvElement = document.getElementById("cv-content");

  // Temporarily show the hidden content
  cvElement.style.display = "block";

  // Wait until all images are loaded
  const images = cvElement.querySelectorAll("img");
  const imageLoadPromises = Array.from(images).map(img => {
    return img.complete
      ? Promise.resolve()
      : new Promise(resolve => {
          img.onload = img.onerror = resolve;
        });
  });

  Promise.all(imageLoadPromises).then(() => {
    const opt = {
  margin: [0.5, 0.5], 
  filename: "esya-cv.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 2, useCORS: true },
  jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
};

    html2pdf().set(opt).from(cvElement).save().then(() => {
      cvElement.style.display = "none"; // Hide after download
    }).catch(err => {
      console.error("PDF generation failed:", err);
      alert("PDF download failed. Please check images or layout.");
      cvElement.style.display = "none";
    });
  });
});
