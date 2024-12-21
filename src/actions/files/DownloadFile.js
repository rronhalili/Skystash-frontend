import { saveAs } from "file-saver";
export const handleDownload = (url, filename) => {
  saveAs(url, filename);
};
