module.exports = function() {
  return function(req, res, next) {
    let buff_arr = [];

    // if(req.method.toLowerCase() != 'post'){
    //   next();
    //   return;
    // }

    if (req.headers['content-type'] && req.headers['content-type'].startsWith('multipart/form-data;')) {
      next();
      return;
    }

    req.on('data', data => {
      buff_arr.push(data);
    });

    req.on('end', () => {
      let body = Buffer.concat(buff_arr);
      body = body.toString();
      if (body.trim().length !== 0) {
        req.body = eval('(' + body + ')');
      }
      // req.body = JSON.parse(body);
      next();
    });

    req.on('error', err => {
      console.log('post解析异常:\n' + err);
    });
  };
};
