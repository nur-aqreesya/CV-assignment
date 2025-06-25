document.getElementById("downloadCV").addEventListener("click", function () {
  const cvElement = document.getElementById("cv-content");
  const opt = {
    margin: 0.5,
    filename: "esya-cv.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
  };
  html2pdf().set(opt).from(cvElement).save();
});