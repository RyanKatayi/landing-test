import fs from 'fs';
import path from 'path';

export function getRandomVersion() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const versions = jsonData.versions;
  const randomIndex = Math.floor(Math.random() * versions.length);
  return versions[randomIndex];
}
