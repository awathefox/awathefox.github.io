function eula_warn() {
  if (document.cookie.indexOf("confirm_eula=1") == -1) {
    var confirm_eula = confirm(`
    在访问本站点前，请您同意本站点的最终用户许可协议(EULA):
    ${window.location.origin}/eula.html
    我们使用Cookie来记录一些信息。了解我们记录什么并如何使用:
    ${window.location.origin}/priv_protect.html
    点“确定(OK)”代表您同意最终用户许可协议和隐私保护协议。提示将不再弹出。
    点“取消(Cancel)”代表您不同意最终用户许可协议和隐私保护协议。页面将自动关闭，并且在下一次访问本站时将重新弹出。
    请不要点“拒绝本站点再弹出窗口”。您可能会无法访问本站点。
    `);
    if (confirm_eula) {
      document.cookie = `confirm_eula=1; expires=${new Date(
        2100,
        1,
        1,
        1,
        0,
        0,
        0
      ).toUTCString()}; path=/`;
    } else {
      window.location.href = "about:blank";
    }
  }
}
