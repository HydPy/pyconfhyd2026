// HOW TO USE:
// 1. Copy any rows from Google Sheets (Ctrl+C) and paste into input.tsv. The first row must be the header row.
// 2. Update the FIELDS_TO_EXTRACT array to specify which fields to extract from the sheet (You can use same tsv file header and pick).
// 3. Run this script with `node data/data-extract-script/script.js`.
// 4. The extracted data will be written to output.js.

// FIELDS TO EXTRACT: Update this array to specify which fields to extract from the sheet.
const FIELDS_TO_EXTRACT = [
  'Email Address',
  'Full name',
  'Designation',
  'Title of the Workshop/Talk:',
  'Upload a Professional Photo',
  'Bio for announcements (Max. 250 characters)',
  'Website/Blog',
  'Linkedin',
  'Facebook',
  'X',
  'Github Repo',
  'Others',
];

const fs = require('fs');
const path = require('path');

function getSheetData() {
  const inputPath = path.join(__dirname, 'input.tsv');
  if (!fs.existsSync(inputPath)) {
    throw new Error(
      'input.tsv not found. Paste copied Google Sheets data into input.tsv and re-run.'
    );
  }
  const raw = fs.readFileSync(inputPath, 'utf-8');
  return raw
    .split('\n')
    .filter((line) => line.trim() !== '')
    .map((line) => line.split('\t'));
}

function extractFields(fields) {
  const [headers, ...dataRows] = getSheetData();

  const fieldIndices = fields.map((field) => {
    const idx = headers.indexOf(field);
    if (idx === -1)
      console.warn(`Warning: Field "${field}" not found in sheet headers`);
    return { field, idx };
  });

  return dataRows.map((row) =>
    Object.fromEntries(
      fieldIndices.map(({ field, idx }) => [
        field,
        idx !== -1 ? row[idx] : undefined,
      ])
    )
  );
}

function main() {
  const result = extractFields(FIELDS_TO_EXTRACT);

  const outputPath = path.join(__dirname, 'output.js');
  fs.writeFileSync(
    outputPath,
    `export const OUTPUT = ${JSON.stringify(result, null, 2)};\n`,
    'utf-8'
  );

  console.log(`\nWritten ${result.length} records to output.js`);
  console.table(result);
}

main();
