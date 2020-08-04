/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["F:/Blog/public/2020/03/07/hello-world/index.html","d96e478381a09aa41ca512046434e0c0"],["F:/Blog/public/2020/03/08/1、设置用户和组/index.html","c82c4c6dfb1c1511cdf1252ffaad0f23"],["F:/Blog/public/2020/03/08/2、设置登录证书/index.html","44bfe97ccfa52c27f873f1c973659ae5"],["F:/Blog/public/2020/03/08/3、设置防火墙和端口/index.html","a99660c56943e1dd70dfcf398c510790"],["F:/Blog/public/2020/03/08/4、安装数据库/index.html","a73004e9ecd8e562fecdc50e6a9045bc"],["F:/Blog/public/2020/03/08/5、安装python3/index.html","510054a674ba1f56236330587fe57871"],["F:/Blog/public/2020/03/08/6、安装测试Django/index.html","55d102e8bdbc5ba24d8493669aaa36ed"],["F:/Blog/public/2020/03/08/7、配置Django项目/index.html","177189590f380422588b7cc024798789"],["F:/Blog/public/2020/03/08/8、设置Nginx和uWSGI/index.html","625565382a0319916ae4b38a86edfc31"],["F:/Blog/public/2020/03/10/Request库/index.html","e3bc9a060469c869e7bfc97141586b81"],["F:/Blog/public/2020/03/15/BeautifulSoup库/index.html","aa3b9ff0ff7201d3535447afe657d316"],["F:/Blog/public/2020/04/04/Cookie与Session/index.html","9767e65aa0d51d48580d0a7cf0699329"],["F:/Blog/public/2020/04/04/HTTP协议与HTTPS协议/index.html","630a38d9b9c58d705e435956dff183c3"],["F:/Blog/public/2020/04/05/C++ 初始/index.html","b57f94678c8261e757c9f1ffabd00d26"],["F:/Blog/public/2020/04/05/Python-函数装饰器/index.html","bff847a818d804b6caf211c30cba6cd9"],["F:/Blog/public/2020/04/06/冒泡排序/index.html","a21631330e09911e3d5f34b90439aa46"],["F:/Blog/public/2020/04/06/插入排序/index.html","420aaea167e95d761048c66af969e0df"],["F:/Blog/public/2020/04/11/快速排序/index.html","cf73ec32bc75c1321e399ee2253a0319"],["F:/Blog/public/2020/04/11/选择排序/index.html","f87505491f471d035581f8cbb27f62fa"],["F:/Blog/public/2020/04/12/C++ 数据类型/index.html","e206bc1cf091c802bce46ec51ba7b08b"],["F:/Blog/public/2020/04/18/希尔排序/index.html","0942e7b286f53376c829256ae9d76d4c"],["F:/Blog/public/2020/04/18/归并排序/index.html","426091b3915ba3a9c09c5bfe2a02be4d"],["F:/Blog/public/2020/04/19/C++ 运算符/index.html","0868f7ab9a255b638a7195d5cb35157d"],["F:/Blog/public/2020/04/25/基数排序/index.html","c53185a0d5f60d2978a654230d580f8d"],["F:/Blog/public/2020/04/25/计数排序/index.html","5659e8cbdfd3df8ee94ed328b5f232f6"],["F:/Blog/public/2020/04/26/C++ 程序流程结构/index.html","92d43c3703438bbb6bb6d19998a2e269"],["F:/Blog/public/2020/05/01/堆排序/index.html","43a4ed3b43c0acac440f5db95aa45a8e"],["F:/Blog/public/2020/05/01/桶排序/index.html","e5db639b4dec2444b17d2d6441b74599"],["F:/Blog/public/2020/05/02/珠排序/index.html","eb5d97b13f9e9f66a35052bb042722ec"],["F:/Blog/public/2020/05/02/睡眠排序/index.html","40ddf872775aa4a33fe9f94be88a51c2"],["F:/Blog/public/2020/05/03/C++ 数组/index.html","7ef4e21be19cbd562149beb9c84e6374"],["F:/Blog/public/2020/05/04/猴子排序/index.html","188cb408a8eb52882217bca5bcc3abdd"],["F:/Blog/public/2020/05/10/C++ 函数/index.html","29027d8c6a55f29f2a6e6aae0d7f1696"],["F:/Blog/public/2020/05/17/C++ 指针/index.html","30287750b832c351b99ada17802a026c"],["F:/Blog/public/2020/05/24/C++ 结构体/index.html","28c4a7afbe274968862490c420258910"],["F:/Blog/public/2020/07/21/二维数组中的查找/index.html","027d41f4654e8e6125e894e3560bf49d"],["F:/Blog/public/2020/07/21/空格替换/index.html","13354a6f2b9c6c4c2ea868faf09ec8bc"],["F:/Blog/public/2020/07/22/从未到头打印链表/index.html","dad8510e212fc79f7b74cee08605a739"],["F:/Blog/public/2020/07/22/用两个栈实现队列/index.html","0b97d7239f4a200d0f9efdb6735aa2d8"],["F:/Blog/public/2020/07/22/重建二叉树/index.html","3f53fa886a4df4d9f7be8ae15e724396"],["F:/Blog/public/2020/07/23/Python-正则表达式/index.html","4fc3fb32887c7253fcc0d01bd11553cc"],["F:/Blog/public/2020/07/23/变态跳台阶/index.html","a8e1073200b4bf082250e2fc997bce5d"],["F:/Blog/public/2020/07/23/旋转数组的最小数字/index.html","229632e02897b3b684a0c74f423b5762"],["F:/Blog/public/2020/07/23/跳台阶/index.html","61cc190e1440d51b3f4b37234af842c1"],["F:/Blog/public/2020/07/26/数值的整数次方/index.html","1304cce3fda42acecf09ff064942c8e7"],["F:/Blog/public/2020/07/29/Python-QQ空间模拟登陆/index.html","346e0ad744a81c463a499a49cdcd0639"],["F:/Blog/public/2020/07/29/Python-文件I-O/index.html","430849b0deba6733bcbbac4a6f01c07d"],["F:/Blog/public/2020/07/29/Python-爬取QQ空间相册/index.html","ff22696c329decbc0f40cbe83c1191ec"],["F:/Blog/public/2020/07/29/Python-爬取东北大学高数题库/index.html","9475880259ee15a3d7c1553291b56e75"],["F:/Blog/public/2020/07/29/Python-爬取山东大学医学题库/index.html","35e3f14fac98505e87a4871ccb0e5384"],["F:/Blog/public/2020/07/30/Python-多线程/index.html","393d4f14ded0fbf67bb478d458652cf8"],["F:/Blog/public/2020/07/31/好用的图床上传工具-Picgo/index.html","4d7aab09a619d93e1f61456c09b90c96"],["F:/Blog/public/archives/2020/03/index.html","9721055ddd46afd679edb9574b4e4677"],["F:/Blog/public/archives/2020/03/page/2/index.html","e9ba4c30795309fb17e77dacfab56638"],["F:/Blog/public/archives/2020/04/index.html","a47969a883d3396339dbef1771aaa990"],["F:/Blog/public/archives/2020/04/page/2/index.html","5c60c5b1f5b3f012079eba7e00d99d60"],["F:/Blog/public/archives/2020/05/index.html","0eb2f83a3bbc3f01e9f52697c67835f2"],["F:/Blog/public/archives/2020/07/index.html","2125326f683956b468a65c19c8b7ff4b"],["F:/Blog/public/archives/2020/07/page/2/index.html","01d66df6368cf53e7cbff8c536d4afbe"],["F:/Blog/public/archives/2020/index.html","ad951f93f994f0b233c1d6bfd1af3e8a"],["F:/Blog/public/archives/2020/page/2/index.html","1167dbe78862b3bf6e5fb96965710582"],["F:/Blog/public/archives/2020/page/3/index.html","86ff4281378b990d390040bd65f06031"],["F:/Blog/public/archives/2020/page/4/index.html","e2f740c3a3e53d824318156229894e5d"],["F:/Blog/public/archives/2020/page/5/index.html","23d69ec5bec9c95fed3b7309a4034e3d"],["F:/Blog/public/archives/2020/page/6/index.html","ebd564e3f5c48b511ef0c2fe8e28655c"],["F:/Blog/public/archives/index.html","bc889680359b5486a89f190cd3731321"],["F:/Blog/public/archives/page/2/index.html","4fdc14f068c9587294db99793b5cfeca"],["F:/Blog/public/archives/page/3/index.html","adadedba7665bb96b5d432fdf0d4b1e9"],["F:/Blog/public/archives/page/4/index.html","01f6874788c8686dd260eda8141928a3"],["F:/Blog/public/archives/page/5/index.html","6d360392dd76e03a9f88f8319af4bc0d"],["F:/Blog/public/archives/page/6/index.html","aded18d00e7cabf168ced0c9faebab83"],["F:/Blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/Blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/Blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/Blog/public/categories/Algorithm/index.html","b5d1c308bb1eef96da8ad6866c7ddbfb"],["F:/Blog/public/categories/Algorithm/page/2/index.html","ade73020ef93ef358c978268f286a387"],["F:/Blog/public/categories/Algorithm/page/3/index.html","bf83f09e2ffa7be5de5d15dbf89f8655"],["F:/Blog/public/categories/Algorithm/二叉树/index.html","9c5cc801c2f8eb5e3c8fc654da44bbc1"],["F:/Blog/public/categories/Algorithm/字符串/index.html","4dcaa6b6ecd76bcb651942a2a5d6f3db"],["F:/Blog/public/categories/Algorithm/排序算法/index.html","2d56991a1bc7f5c66fb7981790087112"],["F:/Blog/public/categories/Algorithm/排序算法/page/2/index.html","0a386716261873b541241e8f95637b99"],["F:/Blog/public/categories/Algorithm/数组/index.html","be7a915294e8594f11fcee78da44999b"],["F:/Blog/public/categories/Algorithm/斐波那契数列/index.html","43489b81a16bb894fb506636ed712459"],["F:/Blog/public/categories/Algorithm/栈/index.html","d2e3f26cb5dc6700e53e2dca471643f7"],["F:/Blog/public/categories/Algorithm/次方运算/index.html","74e8743dc8cbeb5741d3771ab9094eef"],["F:/Blog/public/categories/Algorithm/链表/index.html","86ced117a49ef633b07124c46eb305f9"],["F:/Blog/public/categories/C/index.html","cd9593aaad135ed160dd0c04f75d5ee2"],["F:/Blog/public/categories/C/基础入门/index.html","5dbe12db47c9253a0bcb4f48104ab52b"],["F:/Blog/public/categories/Hexo/index.html","da513efc96ba892cb1575a387035d0c6"],["F:/Blog/public/categories/Picgo/index.html","0c901b748e9e831aab53ccd6d93aa834"],["F:/Blog/public/categories/Python/Django/Web开发/index.html","b713ef5028e5b22088d7d3d18e1af9a5"],["F:/Blog/public/categories/Python/Django/index.html","493e99e0815bb48fc73be278be093826"],["F:/Blog/public/categories/Python/Django/项目部署/index.html","dfd89926594954888da87e32d3365b59"],["F:/Blog/public/categories/Python/index.html","7afcd3bc40db64eba18873ba69de5b7f"],["F:/Blog/public/categories/Python/page/2/index.html","74dd4ff58b91db72719c2847d9e0546a"],["F:/Blog/public/categories/Python/基础入门/index.html","5447ea610b9425f98a788b7f9058b22f"],["F:/Blog/public/categories/Python/爬虫学习/index.html","b85fbd41065f7107e12f592bb4097504"],["F:/Blog/public/categories/Python/高级进阶/index.html","0f9c064f378679b77095214cd9d956df"],["F:/Blog/public/categories/index.html","ea1f1b8556ba97cff023e94af924fb57"],["F:/Blog/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["F:/Blog/public/css/index.css","0ad56b840d121f299eff10fe452b875a"],["F:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/Blog/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["F:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["F:/Blog/public/img/alipay.jpg","8fb31a1080def0faaded06df4ead3d5f"],["F:/Blog/public/img/avatar.png","d67ee41c6e812d7c25018a20f9717692"],["F:/Blog/public/img/avatar_pre.png","c291715561b777d5601df42b8d8fc791"],["F:/Blog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["F:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/Blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/Blog/public/img/wechat.jpg","b04f4382ac98f36e70836a99377e4708"],["F:/Blog/public/index.html","54cb8a4ea573baffa58796ba968bf120"],["F:/Blog/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["F:/Blog/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/Blog/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/Blog/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["F:/Blog/public/page/2/index.html","5fb41f63759c77d82771d3a4730e4b35"],["F:/Blog/public/page/3/index.html","e630edbce1ac0300c63f7cb22c890b77"],["F:/Blog/public/page/4/index.html","c95977ba01aeaaac30b9c97cbf6f082e"],["F:/Blog/public/page/5/index.html","8980f5c5c30091c3a276385c6ec917d0"],["F:/Blog/public/page/6/index.html","45e6fc2d1ff0bd0da8f6109565e179f6"],["F:/Blog/public/tags/Algorithm/index.html","6ee3e365044a071e9b8cb0dd70a09c90"],["F:/Blog/public/tags/Algorithm/page/2/index.html","de48941ee640567602811bfd0055c8a7"],["F:/Blog/public/tags/Algorithm/page/3/index.html","f7694c8670181f6e0147af6043e29c51"],["F:/Blog/public/tags/BeautifulSoup/index.html","008aee48d759e074bff06087be59f233"],["F:/Blog/public/tags/C/index.html","5bce13eda20f6cc354ad91855c90b90d"],["F:/Blog/public/tags/Cookie/index.html","000cc254eb7359823c53cb3284be9bd1"],["F:/Blog/public/tags/Django/index.html","8dc9458cbd4f8fa47270e9d755b44131"],["F:/Blog/public/tags/File/index.html","e3b8d3774376e49ce468b156c02dd1b5"],["F:/Blog/public/tags/GIL全局解释器锁/index.html","fb547c91599c0fe292955e441c2575fb"],["F:/Blog/public/tags/HTTP/index.html","802c54119d382c109184c4cee26c8a84"],["F:/Blog/public/tags/HTTPS/index.html","2c52dd22bc20abdc464b1ef919b3ea5c"],["F:/Blog/public/tags/Hello-World/index.html","d30d02071eef25018a4df321ae5f7d88"],["F:/Blog/public/tags/Markdowm/index.html","4f38c9d4a9862c13edbcbe21b04573e8"],["F:/Blog/public/tags/Nginx/index.html","c73faf2b1cdc78568d8ee0fa3ccde238"],["F:/Blog/public/tags/Picgo/index.html","4cbb4b2ad92fb2da31608eeb5dd4f6bc"],["F:/Blog/public/tags/QQ空间/index.html","3be2ec19c48d0776147d6844bda5dd89"],["F:/Blog/public/tags/Re库/index.html","bb88e703cf6d0df6d04b2acfe232dd2f"],["F:/Blog/public/tags/SFTP/index.html","f9a197231d2b0c2e1de2d0eba77b0f49"],["F:/Blog/public/tags/Session/index.html","579fcf91dab4bdece4e7dc2297e20607"],["F:/Blog/public/tags/Typora/index.html","aa2861e738e5898507389bb5b35f42e8"],["F:/Blog/public/tags/Web开发/index.html","280b76ce2a7c8822acd2e2bad05e2658"],["F:/Blog/public/tags/index.html","0096180767672f4371b28920ab14879c"],["F:/Blog/public/tags/mysql/index.html","65745d3743922a01da9db1d4f5ba3f85"],["F:/Blog/public/tags/python/index.html","1cbfc6a687832cdd7aaf405a00a0cfac"],["F:/Blog/public/tags/python/page/2/index.html","1c2459eb92d81a5e811a88267e6c87d6"],["F:/Blog/public/tags/python/page/3/index.html","583183bfa17743ca692c3a1cc214ef06"],["F:/Blog/public/tags/queue库/index.html","4203f5d1b1b17792fe90b0787ce61a01"],["F:/Blog/public/tags/requests/index.html","9741bf232c37f86ff9664a72db0e13ac"],["F:/Blog/public/tags/ssh/index.html","68e351e22e74db1af39276be7831ec22"],["F:/Blog/public/tags/threading库/index.html","b99a6f1a372fa5a0f475525516d859f5"],["F:/Blog/public/tags/thread库/index.html","43bdc1adcd6fc15ed2fa300304a93edd"],["F:/Blog/public/tags/uWSGI/index.html","fc3eb47cfe3146ab0e0f5ad638d8b699"],["F:/Blog/public/tags/二分查找/index.html","7584672d308c5830dc3860ace7079a68"],["F:/Blog/public/tags/二叉树/index.html","7bba772c14268d5d63726b403acd0131"],["F:/Blog/public/tags/冒泡排序/index.html","ef4a211924b8063434c9896d63333849"],["F:/Blog/public/tags/函数/index.html","c9ef21da12f7d22ceb8528d3c7e03b69"],["F:/Blog/public/tags/图床工具/index.html","45aaadc3793a29d255aaa64e25232ca1"],["F:/Blog/public/tags/基数排序/index.html","98ff3e93740eb4c105aad9bcdf6ab858"],["F:/Blog/public/tags/基础入门/index.html","5628fc5cc2dd3b7e75ce0c977d980e7e"],["F:/Blog/public/tags/堆排序/index.html","a8b96d741797b4dda2c84c7dcad624ea"],["F:/Blog/public/tags/多线程/index.html","79807f32fea26df50b6dd243b1a31f98"],["F:/Blog/public/tags/字符串/index.html","f77ad9f6263fe5877a7c06cb66fc2a16"],["F:/Blog/public/tags/希尔排序/index.html","e04d1632e1057eb8964217262411458f"],["F:/Blog/public/tags/归并排序/index.html","f343e4e9274545b750e3d51a7e0f9a0d"],["F:/Blog/public/tags/快速排序/index.html","d75eb258dfb3ae87a3293371e212db2b"],["F:/Blog/public/tags/指针/index.html","686d25fd2d85f0c131a2fadc6e5bdc34"],["F:/Blog/public/tags/排序算法/index.html","789bd9ec6bad327bf05d2f407f0fd1b3"],["F:/Blog/public/tags/排序算法/page/2/index.html","9d0af85bcace064e7a094bbdff4f59b8"],["F:/Blog/public/tags/插入排序/index.html","07092f8b3bbd54b4b7ef5d2ad3fda65e"],["F:/Blog/public/tags/数据类型/index.html","ce5b74f54b715d652cb38f788dcc994f"],["F:/Blog/public/tags/数组/index.html","8d4c3352ea88ec66476e49a38aa0d5e0"],["F:/Blog/public/tags/文件I-O/index.html","0ddac1f20ec71de66402d7dc92070967"],["F:/Blog/public/tags/斐波那契数列/index.html","0c9fb3bba31e90e0fb4128ceae2ff002"],["F:/Blog/public/tags/服务器/index.html","c155b750125bbc371285a2ff16cca9ef"],["F:/Blog/public/tags/查找/index.html","6a7125c1f04e087a3d7e0a179a2aacac"],["F:/Blog/public/tags/栈/index.html","4611f405ff847c076d6a4a5494397b78"],["F:/Blog/public/tags/桶排序/index.html","ab5e5a1a5dbde651d25a4f5bbbfdcdf0"],["F:/Blog/public/tags/正则表达式/index.html","c829477735b921a37e2a0576d41a1fa1"],["F:/Blog/public/tags/爬虫/index.html","b9b232e8eae0cc58ff83f29766c58b5e"],["F:/Blog/public/tags/猴子排序/index.html","6d6ec00ee760dea41e482fe288722f70"],["F:/Blog/public/tags/珠排序/index.html","a1fe7ac1a025859a779736ca24b78133"],["F:/Blog/public/tags/睡觉排序/index.html","7f120f4807177baa642739d96fcc5ca2"],["F:/Blog/public/tags/矩阵/index.html","05bad7b42e0fbf92fef1ac4335eeb207"],["F:/Blog/public/tags/程序流程结构/index.html","3767a5d73e84ec25a94afbccf62a2803"],["F:/Blog/public/tags/线程锁/index.html","fb27fe65824c202cd0bca33cada87d96"],["F:/Blog/public/tags/结构体/index.html","c16a1454081274332ea6555cf750686c"],["F:/Blog/public/tags/编程基础/index.html","a16da5317bdb9ceee50d58f9c7eda6d4"],["F:/Blog/public/tags/装饰器/index.html","518e16365054931fda6126606a75b74e"],["F:/Blog/public/tags/计数排序/index.html","ebeec55507cc2aaa440713ae0b91db08"],["F:/Blog/public/tags/运算符/index.html","dc2fafa97d38fffd99fbe569b8475e43"],["F:/Blog/public/tags/选择排序/index.html","e6bfecbc35e92167f4e21eb37f65603b"],["F:/Blog/public/tags/递归/index.html","cfa88b10bc403f22b178d858ff3b99d4"],["F:/Blog/public/tags/链表/index.html","54bdbac2dbd792326d8b4690b30690a6"],["F:/Blog/public/tags/闭包/index.html","b9efe917b7b69fad37d05062f6dbfddb"],["F:/Blog/public/tags/队列/index.html","fe736b45d641f7468ff3b9f6b30be7d5"],["F:/Blog/public/tags/阿里云/index.html","a95890495b6776cc12fcbdc1ecf087c4"],["F:/Blog/public/tags/项目实战/index.html","1073be0ba167a900a322b420f47ca935"],["F:/Blog/public/tags/项目部署/index.html","827ea97e5649adc1248c3ff3a90f291d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







