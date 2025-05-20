navigator.hid.onconnect = ({ device }) => {
  postMessage(`Connected HID device "${device.productName}"`);
};

navigator.hid.ondisconnect = ({ device }) => {
  postMessage(`Disonnected HID device "${device.productName}"`);
};
