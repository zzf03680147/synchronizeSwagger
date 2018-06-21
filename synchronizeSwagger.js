const swaggerParserMock = require("swagger-parser-mock");
const mkdirp = require("mkdirp");
const path = require("path");
const fs = require("fs");
const { swaggerOptions } = require('./conf');

const synchronizeSwagger = {
  init({ url, blacklist, outputPath }) {
    this.url = url;
    this.blacklist = blacklist;
    this.outputPath = outputPath;
    this.parse();
  },

  async parse() {
    const spec = await swaggerParserMock(this.url);
    this.generate(spec);
  },

  mkdirp() {

  },
  generateTmpl() {

  },
  generate(spec) {
    const { paths } = spec;

    for (let p in paths) {
      console.dir( p)

      if(paths[p].get) {
        console.dir( paths[p].get.responses)

      }

  //     for (let method in paths[p]) {
  //       let response = paths[p][method];
  //       if(!response["responses"]["200"]) {
  //         continue;

  //       }
  //       let example = response["responses"]["200"]["example"];

  //       let summary = response["summary"];

  //       if (this.blacklist.includes(p)) {
  //         continue;
  //       }

  //       let _path = path.join(__dirname, this.outputPath, p);

  //       mkdirp.sync(_path, function(err) {
  //         if (err) {
  //         }
  //       });

  //       try {
  //         let template = `/**
  //   ${summary}
  // **/
  // const Mock = require("mockjs");
  // module.exports = function (app) {
  //   app.${method}('/api${p.replace(/\{([^}]*)\}/g, ":$1")}', (req, res) => {
  //     res.json(Mock.mock(${example}));
  //   });
  // };`;

  //         fs.writeFileSync(`${_path}/${method}.js`, template, { flag: "wx" });
  //         console.log(`增加Mock文件：${_path}/${method}.js`);
  //       } catch (err) {}
  //     }
    }
  }
};


synchronizeSwagger.init(swaggerOptions);
