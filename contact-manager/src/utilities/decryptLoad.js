import CryptoJS from "crypto-js";

const decryptLoad = (key) => {
  const cipherRecords = localStorage.getItem(key);
  if( cipherRecords && cipherRecords.length ) {
    const bytes = CryptoJS.AES.decrypt(cipherRecords, 'my-secret-key@123');
    const decryptedRecords = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedRecords;
  } else {
    return [];
  }
}

export default decryptLoad;
