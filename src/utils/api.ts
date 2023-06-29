const apiUrl = "https://www.hetsaniv.cloud/api/getdata/1";

export const fetchData = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};
