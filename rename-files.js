const fs = require("fs");
const path = require("path");

// Define the folder containing the images
const folderPath = path.join(__dirname, "public/images/projects/Ishavasya");

fs.readdir(folderPath, (err, files) => {
  if (err) {
    return console.error("Unable to scan directory:", err);
  }

  // Filter only .jpg files and sort them alphabetically
  const jpgFiles = files.filter((file) => file.endsWith(".jpg")).sort();

  // Rename each file to 1.jpg, 2.jpg, ..., n.jpg
  jpgFiles.forEach((file, index) => {
    const oldPath = path.join(folderPath, file);
    const newPath = path.join(folderPath, `${index + 1}.jpg`);

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        return console.error(`Error renaming file ${file}:`, err);
      }
      console.log(`Renamed ${file} -> ${index + 1}.jpg`);
    });
  });
});
