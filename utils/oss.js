let OSS = require('ali-oss');	

export function aloss(path,name,file){
  if(!name&&!file) return
  let client = new OSS({
      region: 'oss-cn-shenzhen',
      //云账号AccessKey有所有API访问权限，建议遵循阿里云安全最佳实践，部署在服务端使用RAM子账号或STS，部署在客户端使用STS。
      accessKeyId: 'LTAI4G95d9YHaDAsDPFz3tW8',
      accessKeySecret: 'v60Ci9eiu7HefyuhEfLhuEUhUyHDIt',
      bucket: 'yunke-couese'
  });
  async function put () {
      try {
          //object-name可以自定义为文件名（例如file.txt）或目录（例如abc/test/file.txt）的形式，实现将文件上传至当前Bucket或Bucket下的指定目录。
          let names = path  + name
          // console.log('names',path,'-----',name,'-----',names);
          let result = await client.put(names,file);
          return result
      } catch (e) {
          console.log(e);
      }
  }
  return put()
}
