const handlebars = require('handlebars');
const fs = require('fs-extra');
const markdownHelper = require('./utils/helpers/markdown');
const templateData = require('./metadata/metadata');
const templateDataFr = require('./metadata/metadatafr');
const Puppeteer = require('puppeteer');
const getSlug = require('speakingurl');
const dayjs = require('dayjs');
const repoName = require('git-repo-name');
const username = require('git-username');

const srcDir = __dirname;
const outputDir = __dirname + '/../dist';
const outputDirFr = __dirname + '/../dist/fr';

// Clear dist dir
fs.emptyDirSync(outputDir);
fs.emptyDirSync(outputDirFr);

// Copy assets
fs.copySync(srcDir + '/assets', outputDir);
// fs.copySync(srcDir + '/assets/fr', outputDirFr);

// Build HTML
handlebars.registerHelper('markdown', markdownHelper);
const source = fs.readFileSync(srcDir + '/templates/index.html', 'utf-8');
const sourcefr = fs.readFileSync(srcDir + '/templates/indexfr.html', 'utf-8');
const template = handlebars.compile(source);
const templatefr = handlebars.compile(sourcefr);
const pdfFileName = `${getSlug(templateData.name)}.${getSlug(templateData.title)}.pdf`;
const pdfFileNameFr = `/fr/${getSlug(templateDataFr.name)}.${getSlug(templateDataFr.title)}.pdf`;
const html = template({
  ...templateData,
  baseUrl: `https://${username()}.github.io/${repoName.sync()}`,
  pdfFileName,
  updated: dayjs().format('MMMM D, YYYY'),
});

const htmlfr = templatefr({
  ...templateDataFr,
  baseUrl: `https://${username()}.github.io/${repoName.sync()}/fr`,
  pdfFileNameFr,
  updated: dayjs().format('D/MM/YYYY'),
});

fs.writeFileSync(outputDir + '/index.html', html);
fs.writeFileSync(outputDir + '/fr/index.html', htmlfr);

buildPdf = async function (inputFile, outputFile) {
  const browser = await Puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file://${inputFile}`, {
    waitUntil: 'networkidle0'
  });
  await page.pdf({
    path: outputFile,
    format: 'A4',
    border: 0,
    margin: {
      top: '2.54cm',
      right: '2.54cm',
      bottom: '2.54cm',
      left: '2.54cm',
    },
  });
  await browser.close();
};

// Build PDF
buildPdf(`${outputDir}/index.html`, `${outputDir}/${pdfFileName}`);
buildPdf(`${outputDir}/fr/index.html`, `${outputDir}/${pdfFileNameFr}`);
