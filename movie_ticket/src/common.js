let url= "";
const isSupportWebp = document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0;
if(isSupportWebp){
  // 如果支持webp则去这里请求数据
  url="http://movie.tanfp.cn/image2/";
  // url="http://127.0.0.1:3000/image2/";
}else{
  url="http://movie.tanfp.cn/image/";
  // url="http://127.0.0.1:3000/image/";
}

export var baseUrl=url;
