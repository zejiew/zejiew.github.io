var posts=["2025/04/25/hello-world/","2025/04/26/这是一篇测试文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };