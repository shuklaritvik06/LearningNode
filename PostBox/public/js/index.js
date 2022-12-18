"use strict";

let paramKeyValuePair = {};
let headerKeyValuePair = {};
const paramTemplate = document.getElementById("paramTemplate");
const headerTemplate = document.getElementById("headerTemplate");
const statusCode = document.getElementById("statusCode");
const responseArea = document.getElementById("responseArea");
const response= document.getElementById("response");
const url = document.getElementById("url");
const sendBtn = document.getElementById("sendBtn");
const addParam = document.getElementById("paramBtn");
const addHeader = document.getElementById("headerBtn");
addParam.addEventListener("click", () => {
  const param = paramTemplate.content.cloneNode(true);
  document.getElementById("paramArea").appendChild(param);
  const deleteButton = document.querySelectorAll(".remove");
  Array.from(deleteButton).forEach((button) => {
    button.addEventListener("click", () => {
      button.parentElement.remove();
    });
  });
});
addHeader.addEventListener("click", () => {
  const header = headerTemplate.content.cloneNode(true);
  document.getElementById("headerArea").appendChild(header);
  const deleteButton = document.querySelectorAll(".remove");
  Array.from(deleteButton).forEach((button) => {
    button.addEventListener("click", () => {
      button.parentElement.remove();
    });
  });
});
sendBtn.addEventListener("click", () => {
  const paramKeyValue = document.querySelectorAll(
    "[data-param-key-value-pair]"
  );
  const headerKeyValue = document.querySelectorAll(
    "[data-header-key-value-pair]"
  );
  if (paramKeyValue.length > 0) {
    keyValueToObject(paramKeyValue, paramKeyValuePair);
  }
  if (headerKeyValue.length > 0) {
    keyValueToObject(headerKeyValue, headerKeyValuePair);
  }
  const method = document.querySelector('select[name="method"]');
  sendRequest(method.value);
});

function keyValueToObject(keyValuePair, keyValuePairObject) {
  Array.from(keyValuePair).forEach((pair) => {
    const key = pair.querySelector('input[name="key"]').value;
    const value = pair.querySelector('input[name="value"]').value;
    keyValuePairObject[key] = value;
  });
}

function sendRequest(method) {
  if (method === "GET") {
    fetch(url.value, {
      method: method,
    })
      .then((response) => {
        statusCode.innerHTML = response.status;
        return response.json();
      })
      .then((data) => {
        responseArea.classList.remove("d-none");
        response.innerHTML = JSON.stringify(data, null, 4);
      });
  } else {
    fetch(url.value, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        ...headerKeyValuePair,
      },
      body: JSON.stringify(paramKeyValuePair),
    })
      .then((response) => {
          return response.json();
      })
      .then((data) => {
        responseArea.classList.remove("d-none");
        response.innerHTML = JSON.stringify(data, null, 4);
      });
  }
}
