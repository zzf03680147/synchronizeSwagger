/**
  根据swagger 生成文件，然后挂到express router上
**/

const fs = require('fs');
const join = require('path').join;

function scan(path, app) {
  const files = fs.readdirSync(path);

  for (let i = 0; i < files.length; i++) {
    const fpath = join(path, files[i]);
    const stats = fs.statSync(fpath);

    if (stats.isDirectory()) {
      scan(fpath, app);
    }
    if (stats.isFile()) {
      require(fpath)(app);
    }
  }
}

module.exports = function(app) {
  scan(join(__dirname, './routes'), app);
};
