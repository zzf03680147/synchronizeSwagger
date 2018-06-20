const swaggerParserMock = require("swagger-parser-mock");
const mkdirp = require("mkdirp");
const path = require("path");
const fs = require("fs");

const synchronizeSwagger = {
  init({ url, blacklist, output }) {
    this.url = url;
    this.blacklist = blacklist;
    this.output = output;
    this.parse();
  },

  async parse() {
    const spec = await swaggerParserMock(this.url);
    this.generate(spec);
  },

  generate(spec) {
    const { paths } = spec;

    for (let p in paths) {
      for (let method in paths[p]) {
        let response = paths[p][method];
        let example = response["responses"]["200"]["example"];
        let summary = response["summary"];

        if (this.blacklist.includes(p)) {
          continue;
        }

        let _path = path.join(__dirname, this.output, p);

        mkdirp.sync(_path, function(err) {
          if (err) {
          }
        });

        try {
          let template = `/**
    ${summary}
  **/
  const Mock = require("mockjs");
  module.exports = function (app) {
    app.${method}('/api${p.replace(/\{([^}]*)\}/g, ":$1")}', (req, res) => {
      res.json(Mock.mock(${example}));
    });
  };`;

          fs.writeFileSync(`${_path}/${method}.js`, template, { flag: "wx" });
          console.log(`增加Mock文件：${_path}/${method}.js`);
        } catch (err) {}
      }
    }
  }
};

const options = {
  url: "https://tap-dev.dianrong.com/api/v2/api-docs",
  output: "./routes",
  blacklist: ["/healthCheck", "/error", "/v", "/v2", "/v3", "/v4"]
};

synchronizeSwagger.init(options);
