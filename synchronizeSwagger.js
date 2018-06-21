const swaggerParserMock = require('swagger-parser-mock');
const mkdirp = require('mkdirp');
const pathModule = require('path');
const fs = require('fs');
const { swaggerOptions } = require('./conf');

const synchronizeSwagger = {
  init({ url, blacklist, outputPath }) {
    this.url = url;
    this.blacklist = blacklist;
    this.outputPath = outputPath;
    this.parse();
  },

  async parse() {
    const { paths } = await swaggerParserMock(this.url);
    this.generate(paths);
  },

  mkdirSync(outputPath) {
    mkdirp.sync(outputPath, function(err) {
      if (err) {
        console.error(err);
      }
    });
  },

  generateTemplate({ summary, example, method, path }) {
    // prettier-ignore
    return `/**
      ${summary}
    **/
    const Mock = require("mockjs");
    module.exports = function (app) {
      app.${method}('/api${path.replace(/\{([^}]*)\}/g, ":$1")}', (req, res) => {
        res.json(Mock.mock(${example}));
      });
    };`;
  },

  writeFileSync(path, template) {
    try {
      fs.writeFileSync(path, template, { flag: 'wx' });
      console.log(`增加Mock文件：${path}`);
    } catch (err) {
      console.error(err);
    }
  },

  generate(paths) {
    Object.keys(paths).forEach(path => {
      const pathInfos = paths[path];

      Object.keys(pathInfos).forEach(method => {
        const pathInfo = pathInfos[method];
        if (this.blacklist.includes(path) || !pathInfo['responses']['200']) {
          return false;
        }
        const outputPath = pathModule.join(__dirname, this.outputPath, path);
        const summary = pathInfo['summary'];
        const example = pathInfo['responses']['200']['example'];

        // 创建目录
        this.mkdirSync(outputPath);
        // 生成文件模板
        const template = this.generateTemplate({
          summary,
          example,
          method,
          path,
        });
        // 创建文件
        this.writeFileSync(`${outputPath}/${method}.js`, template);
      });
    });
  },
};

synchronizeSwagger.init(swaggerOptions);
