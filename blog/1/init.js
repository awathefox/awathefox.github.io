//init
clearContent();
//metadata start
$title("第一篇博客");
$info("断幺九", 1626880019477);
//metadata end
var content = document.getElementById("content");
const cont=`
<h1 style="text-align: center;">成了！</h1>
<p>第一篇博客，我看看能用这个写什么东西。</p>
<p>自己写的博客确实简单很多啊！</p>
`;
content.innerHTML+=cont;
