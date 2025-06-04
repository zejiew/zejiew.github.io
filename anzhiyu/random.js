var posts=["2025/04/26/这是一篇测试文章/","2025/04/25/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };