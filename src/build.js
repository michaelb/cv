const handlebars = require('handlebars');
const fs = require('fs-extra');
const markdownHelper = require('./utils/helpers/markdown');
const templateData = require('./metadata/metadata');
const templateDataFr = require('./metadata/metadatafr');
const getSlug = require('speakingurl');
const buildPdf = require('./utils/pdf.js');
const dayjs = require('dayjs');
// const repoName = require('git-repo-name');
// const username = require('git-username');

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
handlebars.registerHelper('ifbetween', function(v1, v2, v3, options) {
  if(v1 >= v2 && v1 <= v3) {
    return options.fn(this);
  }
  return options.inverse(this);
});
const source = fs.readFileSync(srcDir + '/templates/index.html', 'utf-8');
const sourcefr = fs.readFileSync(srcDir + '/templates/indexfr.html', 'utf-8');
const template = handlebars.compile(source);
const templatefr = handlebars.compile(sourcefr);
const pdfFileName = `${getSlug(templateData.name)}-${getSlug(templateData.title)}.pdf`;
const pdfFileNameFr = `${getSlug(templateDataFr.name)}-${getSlug(templateDataFr.title)}.pdf`;
const html = template({
  ...templateData,
  baseUrl: `https://michaelb.github.io/cv`,
  pdfFileName,
  updated: dayjs().format('MMMM D, YYYY'),
});

const htmlfr = templatefr({
  ...templateDataFr,
  baseUrl: `https://michaelb.github.io/cv/fr`,
  pdfFileNameFr,
  updated: dayjs().format('D/MM/YYYY'),
});

fs.writeFileSync(outputDir + '/index.html', html);
fs.writeFileSync(outputDir + '/fr/index.html', htmlfr);


// Build PDF
buildPdf(`${outputDir}/index.html`, `${outputDir}/${pdfFileName}`);
buildPdf(`${outputDir}/fr/index.html`, `${outputDirFr}/${pdfFileNameFr}`);
console.log("done");
