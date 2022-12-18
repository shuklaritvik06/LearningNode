const dropZone = document.querySelector(".dropZone");
const browseButton = document.querySelector(".browseText");
const fileInput = document.querySelector(".fileBtn");
const dropBox = document.querySelector(".drop-Box");
const buttonGroup = document.querySelector(".group");
const resetBtn = document.querySelector(".resetBtn");
const fileDetails = document.querySelector(".details");
const fileName = document.querySelector(".fileName");
const fileSize = document.querySelector(".fileSize");
const uploadBtn = document.querySelector(".uploadBtn");
const urlArea = document.querySelector(".url");
const emailArea = document.querySelector(".emailForm");
const sendButton = document.querySelector(".emailBtn");
const urlInput = document.querySelector(".urlInput");
const copyButton = document.querySelector(".copy");

let file;
function getUnit(size) {
  if (size < 1024) {
    return " bytes";
  } else if (size < 1024 * 1024) {
    return " kb";
  } else if (size < 1024 * 1024 * 1024) {
    return " mb";
  } else {
    return " gb";
  }
}

function getDivision(size) {
  size = parseInt(size);
  if (size < 1024) {
    return size;
  } else if (size < 1024 * 1024) {
    return size / 1024;
  } else if (size < 1024 * 1024 * 1024) {
    return size / 1024 / 1024;
  } else {
    return size / 1024 / 1024 / 1024;
  }
}

function showButton(fileDetails) {
  fileName.innerHTML = fileDetails.name;
  fileSize.innerHTML =
    parseFloat(String(getDivision(fileDetails.size))).toFixed(2) +
    getUnit(fileDetails.size);
  dropBox.classList.add("dropped");
  buttonGroup.style.display = "block";
}

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  if (!dropZone.classList.contains("dragOver")) {
    dropZone.classList.add("dragOver");
  }
});
dropZone.addEventListener("dragleave", () => {
  if (dropZone.classList.contains("dragOver")) {
    dropZone.classList.remove("dragOver");
  }
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  const fileDetails = e.dataTransfer.files[0];
  file = fileDetails;
  showButton(file);
});

browseButton.addEventListener("click", (e) => {
  fileInput.click();
});

fileInput.addEventListener("change", (e) => {
  const fileDetails = e.target.files[0];
  file = fileDetails;
  showButton(file);
});

uploadBtn.addEventListener("click", (e) => {
  readFile(file);
  uploadBtn.disabled = true;
  uploadBtn.innerHTML = "Uploading...";
  uploadBtn.style.backgroundColor = "#769D7B";
  resetBtn.style.display = "none";
});

resetBtn.addEventListener("click", () => {
  dropBox.classList.remove("dropped");
  buttonGroup.style.display = "none";
  fileName.innerHTML = "";
  fileSize.innerHTML = "";
});

function readFile(file) {
  const reader = new FileReader();
  reader.onload = async function upload(e) {
    const partSize = 5000;
    const parts = Math.ceil(e.target.result.byteLength / partSize);
    const name = file.name;
    for (let i = 0; i <= parts; i++) {
      const byteChunk = e.target.result.slice(i * partSize, (i + 1) * partSize);
      await fetch("/upload", {
        method: "POST",
        body: byteChunk,
        headers: {
          "Content-Type": "application/octet-stream",
          "Content-Length": byteChunk.byteLength,
          "file-name": name,
        },
      });
      let percentage = (i / parts) * 100;
      if (percentage === 100) {
        buttonGroup.style.display = "none";
        fileDetails.style.display = "none";
        dropBox.classList.remove("dropped");
        dropBox.classList.add("urlShow");
        urlArea.style.display = "flex";
        emailArea.style.display = "flex";
        urlInput.setAttribute("value", `${location.href}files/${name}`);
      }
    }
  };

  reader.readAsArrayBuffer(file);
}

copyButton.addEventListener("click", (e) => {
  navigator.clipboard.writeText(urlInput.value);
});

sendButton.addEventListener("click", () => {
  const name = emailArea.name.value;
  const email = emailArea.email.value;
  const url = urlInput.value;
  fetch("/email", {
    method: "POST",
    body: JSON.stringify({
      senderMail: email,
      fileUrl: url,
      senderName: name,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((req) => {
      req = req.json();
      return req;
    })
    .then((data) => {
      sendButton.innerHTML = data.message;
    })
    .catch((err) => console.log(err));
});
