var posts=["2025/06/14/Rufus：轻量高效的USB启动盘制作利器/","2025/06/14/Windows11免费激活工具HEU KMS，开源软件，支持获取永久数字权限等多种激活方式，智能寻找最佳激活方式。已更新到V63.00版本/","2025/06/14/WIN11官方镜像安装方法的步骤/","2025/04/25/hello-world/","2025/06/05/WindowsCleaner：专治C盘爆红的开源清理工具/","2025/04/26/这是一篇测试文章/","2025/06/05/集成AI的超好用的PDF编辑器阅读器-PDFgear-1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };