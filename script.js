function log(text) {
  logs.innerText += `${text}\r\n`;
}

const worker = new Worker("worker.js");
worker.onmessage = ({ data }) => log(`[worker message] ${data}`);
worker.onerror = ({ message }) => log(`[worker error] ${message}`);

requestDeviceButton.onclick = async () => {
  const devices = await navigator.hid.requestDevice({
    filters: [{ vendorId: "0x054c" }],
  });
  for (const device of devices) {
    log(`[window] Requested HID device "${device.productName}"`);
  }
};

navigator.hid.onconnect = ({ device }) => {
  log(`[window] Connected HID device "${device.productName}"`);
};

navigator.hid.ondisconnect = ({ device }) => {
  log(`[window] Disonnected HID device "${device.productName}"`);
};
