import { parse } from 'csv-parser';
import fs from 'fs';

class CvsParser {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async parseCsvFile() {
    return new Promise((resolve, reject) => {
      const csvData = [];
      fs.createReadStream(this.filePath)
        .pipe(parse())
        .on('data', (row) => csvData.push(row))
        .on('end', () => resolve(csvData));
    });
  }
}

export default CvsParser;