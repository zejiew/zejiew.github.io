var posts=["2025/04/25/hello-world/","2025/04/26/这是一篇测试文章/","2025/06/05/集成AI的超好用的PDF编辑器阅读器-PDFgear-1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };