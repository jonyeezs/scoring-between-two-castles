// eslint-disable-next-line @typescript-eslint/no-var-requires
const readPkg = require('read-pkg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const updateJsonFile = require('update-json-file');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const filePath = path.resolve(`${process.cwd()}`, './src/ngsw-config.json');

readPkg()
  .then(package =>
    updateJsonFile(filePath, ngsw => {
      console.log(
        `updating app version from ${ngsw.appData.version} to ${package.version}`
      );
      ngsw.appData.version = package.version;
      return ngsw;
    }, { indent: 2 })
  )
  .then(() => console.log('ngsw updated'));
