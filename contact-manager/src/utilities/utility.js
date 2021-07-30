const getRecords = () => {
  const records = localStorage.getItem("records");
  if( records && records.length ) {
    return JSON.parse(records);
  } else {
    return [];
  }
}

export default getRecords;
