import CryptoJS from "crypto-js";

const encryptStore = (records) => {
  const cipherRecords = CryptoJS.AES.encrypt(JSON.stringify(records), 'my-secret-key@123').toString();
  localStorage.setItem("encryptedRecords", cipherRecords);
}

export default encryptStore;
