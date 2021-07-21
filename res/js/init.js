function init() {
  //constant values
  const header_html = `
  <a href="/" id="header.home_link" title="返回主页" class="padd_10px home_link header_title">断幺九的小站</span>
  <a href="https://github.com/awathefox" id="header.github_link" title="查看我的github主页" class="padd_10px link">Github</a>
  <a href="mailto:awa_the_fox@qq.com" id="header.contact_link" title="联系我" class="padd_10px link">联系我</a>
  <a href="/friend.html" id="header.friend_link" title="查看友链" class="padd_10px link">友链</a>
  <a href="/about.html" id="header.about_link" title="关于我和这个博客" class="padd_10px link">关于</a>
  <a href="/eula.html" id="header.eula_link" title="查看最终用户许可协议(EULA)" class="padd_10px link">EULA</a>
  <a href="/priv_protect.html" id="header.priv_protect_link" title="查看隐私保护协议" class="padd_10px link">隐私保护</a>
  `;
  const footer_html = `
  <span id="footer.createdby" class="footer_elem">Powered by <a href="https://github.com/Fox-Awa/fastlyblog">FastlyBlog</a></span>
  `;
  var header = document.getElementById("header");
  var footer = document.getElementById("footer");
  var init_header = document.createElement("header");
  var init_footer = document.createElement("footer");
  init_header.setAttribute("class", "header");
  init_footer.setAttribute("class", "footer");
  init_header.innerHTML = header_html;
  init_footer.innerHTML = footer_html;
  header.appendChild(init_header);
  footer.appendChild(init_footer);
  //console.log("[Info]Sync init finished");
}