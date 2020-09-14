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

var precacheConfig = [["F:/Blog/public/2020/03/07/hello-world/index.html","ec834386c9f6169d5d7ccba67908df02"],["F:/Blog/public/2020/03/08/1、设置用户和组/index.html","bd3119c8f0094aaf3ea6ed6c6802fcab"],["F:/Blog/public/2020/03/08/2、设置登录证书/index.html","a4dd709ae0a03d78f30294ec04fa91d6"],["F:/Blog/public/2020/03/08/3、设置防火墙和端口/index.html","946af364707656eb588c7300d3df7722"],["F:/Blog/public/2020/03/08/4、安装数据库/index.html","50579a9650a56f37c7e9f441dc7266be"],["F:/Blog/public/2020/03/08/5、安装python3/index.html","f067c3b5cdf992a1a0916595015b0c05"],["F:/Blog/public/2020/03/08/6、安装测试Django/index.html","2c7010ef0a21d7b31aa37b50c7441d0d"],["F:/Blog/public/2020/03/08/7、配置Django项目/index.html","479b28c8dc9d86c50a69e68b55f5c6d2"],["F:/Blog/public/2020/03/08/8、设置Nginx和uWSGI/index.html","8e20bccb378dd1c29a958871d7e44a4a"],["F:/Blog/public/2020/03/10/Request库/index.html","b8c246b9a32cc09da7e4d7c6f8391484"],["F:/Blog/public/2020/03/15/BeautifulSoup库/index.html","2cca74ee8e92849a87d0377fd375f777"],["F:/Blog/public/2020/04/04/Cookie与Session/index.html","101073b176da5b247921679778953e70"],["F:/Blog/public/2020/04/04/HTTP协议与HTTPS协议/index.html","aeca886e0fc125967bb823b6d219f715"],["F:/Blog/public/2020/04/05/C++ 初始/index.html","eca2b64682366db9a90c2f47509a86d3"],["F:/Blog/public/2020/04/05/Python-函数装饰器/index.html","d6f8a9ef1a4343f7591946699cdc2b17"],["F:/Blog/public/2020/04/06/冒泡排序/index.html","e15983125307bbe35676cae2a772debd"],["F:/Blog/public/2020/04/06/插入排序/index.html","00a070c98c96b449a2d6e86fc179c25a"],["F:/Blog/public/2020/04/11/快速排序/index.html","5fcd7af56edd7353d1dad2fc73d3dd25"],["F:/Blog/public/2020/04/11/选择排序/index.html","c846c803453faa87b2ecc210540519d0"],["F:/Blog/public/2020/04/12/C++ 数据类型/index.html","74c87684a42d6f35a70d1002184c4145"],["F:/Blog/public/2020/04/18/希尔排序/index.html","77eb58c8c22820a2441dd79b3a046c3e"],["F:/Blog/public/2020/04/18/归并排序/index.html","6a42b7a63c9a889ff6a8a3326cd3bd62"],["F:/Blog/public/2020/04/19/C++ 运算符/index.html","c1fdf1e0f7f1b2fa67253fd7abd30723"],["F:/Blog/public/2020/04/25/基数排序/index.html","06a0277ae89f8f7fc06e75b0dafa148d"],["F:/Blog/public/2020/04/25/计数排序/index.html","3678db1a5527a64000484c432c85d288"],["F:/Blog/public/2020/04/26/C++ 程序流程结构/index.html","175323108564384eb08491c8efddb9aa"],["F:/Blog/public/2020/05/01/堆排序/index.html","c615174c6a8b4ca66a71afef38db1d98"],["F:/Blog/public/2020/05/01/桶排序/index.html","1a161f1f47047fee00a5a0610baba304"],["F:/Blog/public/2020/05/02/珠排序/index.html","c3e27797cb6bc917932d2ea22324e6a8"],["F:/Blog/public/2020/05/02/睡眠排序/index.html","0820e2fed060f50cd2b5a4f17a35f559"],["F:/Blog/public/2020/05/03/C++ 数组/index.html","da739e06798179cfd8dadd1ea1548298"],["F:/Blog/public/2020/05/04/猴子排序/index.html","06f7f9dc07bef35efd1f6688d06e971a"],["F:/Blog/public/2020/05/10/C++ 函数/index.html","7cfa83068fe21b74ce481460be3f51fe"],["F:/Blog/public/2020/05/17/C++ 指针/index.html","6301cc6d28a2c53416b3a2638fb1261b"],["F:/Blog/public/2020/05/24/C++ 结构体/index.html","134e3302b7fe7b4fb13cab89c7ecc698"],["F:/Blog/public/2020/07/21/二维数组中的查找/index.html","d7280941c5af8811cf397e759c9fc9f6"],["F:/Blog/public/2020/07/21/空格替换/index.html","b8b6f9e49975852da547d694863b62bf"],["F:/Blog/public/2020/07/22/从未到头打印链表/index.html","7312109c661affcff452de6406b95891"],["F:/Blog/public/2020/07/22/用两个栈实现队列/index.html","0a4f54e6c9c49aff55207ae730ca4f6a"],["F:/Blog/public/2020/07/22/重建二叉树/index.html","dfcb8805eceeb9ebaf3769117cce2a53"],["F:/Blog/public/2020/07/23/Python-正则表达式/index.html","2bc60ba135a9a06b2068939d637eacef"],["F:/Blog/public/2020/07/23/变态跳台阶/index.html","b19615163d3949bd551bab6d9817df98"],["F:/Blog/public/2020/07/23/旋转数组的最小数字/index.html","a9e1d841d2512777762dd9be7ccaeb83"],["F:/Blog/public/2020/07/23/跳台阶/index.html","f665c75366f7dbd48f9f1a069166a550"],["F:/Blog/public/2020/07/26/数值的整数次方/index.html","1c2b0665a85d74ab180250788bdf08e7"],["F:/Blog/public/2020/07/29/Python-QQ空间模拟登陆/index.html","3e3523371cdb91b09286618a69188b88"],["F:/Blog/public/2020/07/29/Python-文件I-O/index.html","dff76fc8c91feb190bd268cec66cd382"],["F:/Blog/public/2020/07/29/Python-爬取QQ空间相册/index.html","94238edf255d7728f9aee26552341332"],["F:/Blog/public/2020/07/29/Python-爬取东北大学高数题库/index.html","b52d8197a05456fe9a369ff4817c9c42"],["F:/Blog/public/2020/07/29/Python-爬取山东大学医学题库/index.html","c87256d2024843e239266f0cebd54f53"],["F:/Blog/public/2020/07/30/Python-多线程/index.html","38b0b653ca6a53b420dab695540d167b"],["F:/Blog/public/2020/07/31/好用的图床上传工具-Picgo/index.html","5f0071a5d7784c5760b755512a3404aa"],["F:/Blog/public/2020/09/04/C++对bmp文件操作/index.html","d9e06b4888d438d48df179aeb3e1ad25"],["F:/Blog/public/2020/09/10/Python-发送短信/index.html","3066c0318afe251e46605fcbb9256e43"],["F:/Blog/public/2020/09/11/Python-发送邮件/index.html","2952b236444bbd00967dfa0a3a80b207"],["F:/Blog/public/2020/09/12/jieba库/index.html","bb357ebb462dd969bbec9c6814aa0fee"],["F:/Blog/public/2020/09/13/王者荣耀英雄皮肤爬取/index.html","677fd401314f95ddeb60d3b66ec3b327"],["F:/Blog/public/2020/09/13/网页高频字词分析/index.html","75882a81753a3db62ed4db00fa807011"],["F:/Blog/public/2020/09/14/Python-人脸对比/index.html","173d54dc07a688964b6b7ef2be2fc54b"],["F:/Blog/public/2020/09/14/Python-人脸融合/index.html","6f0e0017b0f9af1c5a0e88dd7bd3809e"],["F:/Blog/public/2020/09/14/Python-英汉互译/index.html","c16af31b22cfb9684a0ee70e245606c2"],["F:/Blog/public/2020/09/14/Python-颜值打分/index.html","489a1bed46012c01b865f537bd676a17"],["F:/Blog/public/2020/09/14/wordcloud库/index.html","5d4440b7fd36f316113a0301f382fab9"],["F:/Blog/public/archives/2020/03/index.html","c9172ce57d7e935548f0a2b610a27de1"],["F:/Blog/public/archives/2020/03/page/2/index.html","9d33c889923b3d28e7341a758e01d8b9"],["F:/Blog/public/archives/2020/04/index.html","73d4346b109ce3bbbb4b9454b014b27d"],["F:/Blog/public/archives/2020/04/page/2/index.html","a3bd56c848019fb2da8451561aebf007"],["F:/Blog/public/archives/2020/05/index.html","c0a80f6034a37d79b2b55f0f8b3e7411"],["F:/Blog/public/archives/2020/07/index.html","87ed26b59f5c6e09b46095b665f4cbd9"],["F:/Blog/public/archives/2020/07/page/2/index.html","f8ffbc4bd672d0f9defea16b4990705d"],["F:/Blog/public/archives/2020/09/index.html","8e77ca3fbb8cf6b002cebbb048493af3"],["F:/Blog/public/archives/2020/09/page/2/index.html","709ecdd6f4729670f4096b15032ff901"],["F:/Blog/public/archives/2020/index.html","32430f5976faf6347f09098163e0d77d"],["F:/Blog/public/archives/2020/page/2/index.html","57ecde79bad765ab9ec0ae0995502161"],["F:/Blog/public/archives/2020/page/3/index.html","e47cf55490103339f8a9c426f6ad1d58"],["F:/Blog/public/archives/2020/page/4/index.html","df5ac15238fe4c37f89157a5a4388b0b"],["F:/Blog/public/archives/2020/page/5/index.html","9b366b02fe576082a517efec64313a85"],["F:/Blog/public/archives/2020/page/6/index.html","f14d3a7c103ec8c68fd5bdce6c6e54f8"],["F:/Blog/public/archives/2020/page/7/index.html","231216eaad41acd13f98a2a9e21bae85"],["F:/Blog/public/archives/index.html","fdc3c79e543fd1327b784cbb809ec28a"],["F:/Blog/public/archives/page/2/index.html","a6f6a2555e39fe0fab57da922518127e"],["F:/Blog/public/archives/page/3/index.html","1b8fae6e4aa148b97deda4ebe1f30ba9"],["F:/Blog/public/archives/page/4/index.html","54f2a888e8d12b5a84ddc3c4166bbd7e"],["F:/Blog/public/archives/page/5/index.html","987ad49ef9c454dd14e6245a0c5097c5"],["F:/Blog/public/archives/page/6/index.html","d2c653f18b395da6642479c83cf5d383"],["F:/Blog/public/archives/page/7/index.html","6e69fe7a330d0f07bd9998201c7e3788"],["F:/Blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/Blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/Blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/Blog/public/categories/Algorithm/index.html","2a74872d4623da1a291869214181082d"],["F:/Blog/public/categories/Algorithm/page/2/index.html","bb8ccbb0f02716c256d78d9cfce6a823"],["F:/Blog/public/categories/Algorithm/page/3/index.html","3ea2589c7379a98c950f27fe5ba224f7"],["F:/Blog/public/categories/Algorithm/二叉树/index.html","70d508ca4c73bef87e061daf69ecfb5f"],["F:/Blog/public/categories/Algorithm/字符串/index.html","856b81c49b1ea984c13615652e237cc2"],["F:/Blog/public/categories/Algorithm/排序算法/index.html","31751343397683cf2d0d314865e0721a"],["F:/Blog/public/categories/Algorithm/排序算法/page/2/index.html","261b1b3d9d5fedf03f7a86063e259781"],["F:/Blog/public/categories/Algorithm/数组/index.html","0b25268539f25d326e57b6f40a89310f"],["F:/Blog/public/categories/Algorithm/斐波那契数列/index.html","d3b70155916234eacda0d2ba660d3fd4"],["F:/Blog/public/categories/Algorithm/栈/index.html","ea0f28438e5c97a084b77a1a0b0f0bd5"],["F:/Blog/public/categories/Algorithm/次方运算/index.html","488bd8dd1fd5c406ff4a66709d8efff7"],["F:/Blog/public/categories/Algorithm/链表/index.html","4ccaf900d55d58baf0bceec89a09d467"],["F:/Blog/public/categories/C/index.html","02a9708a2e7401be631f559bc1ab0867"],["F:/Blog/public/categories/C/基础入门/index.html","f9be26a8b921062ed1470afd6fd76734"],["F:/Blog/public/categories/C/课程设计/index.html","25a2a5a46a4006093bb725c40f7c652c"],["F:/Blog/public/categories/Hexo/index.html","e45bd1e07d03f93d6d7e6a39b5f27655"],["F:/Blog/public/categories/Picgo/index.html","d1dff510dbd42cbb79313bb08bdc1ee2"],["F:/Blog/public/categories/Python/API调用/index.html","3018fccc0d709b5d99fcf4eafbfa0d41"],["F:/Blog/public/categories/Python/Django/Web开发/index.html","ec0d698ad2c8b4cf9a633be961bdbb08"],["F:/Blog/public/categories/Python/Django/index.html","aff5ac2cdc33d1bae9215f421d70488c"],["F:/Blog/public/categories/Python/Django/项目部署/index.html","41a51bce0cf2591a7ee422c275565fdf"],["F:/Blog/public/categories/Python/index.html","b2e7c6fa50c6a96be33165495e0d7e25"],["F:/Blog/public/categories/Python/page/2/index.html","7eee8b586027eb5616670d88454188f2"],["F:/Blog/public/categories/Python/page/3/index.html","f626f741b6c2dd49d7d3f9e6d4ae260a"],["F:/Blog/public/categories/Python/基础入门/index.html","895fee2865d8d1001b72c68ca62a1bd9"],["F:/Blog/public/categories/Python/爬虫学习/index.html","5e43240fb076bac505a94ae5118d4e3a"],["F:/Blog/public/categories/Python/高级进阶/index.html","3f8d9523a542a7d34f1d50f06063d0db"],["F:/Blog/public/categories/index.html","8a43cd39b10196115e42204828bc7598"],["F:/Blog/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["F:/Blog/public/css/index.css","0ad56b840d121f299eff10fe452b875a"],["F:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/Blog/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["F:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["F:/Blog/public/img/alipay.jpg","8fb31a1080def0faaded06df4ead3d5f"],["F:/Blog/public/img/avatar.png","d67ee41c6e812d7c25018a20f9717692"],["F:/Blog/public/img/avatar_pre.png","c291715561b777d5601df42b8d8fc791"],["F:/Blog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["F:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/Blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/Blog/public/img/wechat.jpg","b04f4382ac98f36e70836a99377e4708"],["F:/Blog/public/index.html","8e02ff111ee3f9e8fe889df04e081328"],["F:/Blog/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["F:/Blog/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/Blog/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/Blog/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["F:/Blog/public/page/2/index.html","1c99e8f6f54b7149bc4ae3b070ed918b"],["F:/Blog/public/page/3/index.html","355426f13e2d6446aa724a877f610bdd"],["F:/Blog/public/page/4/index.html","d4d001321018a3e3dc478db72f1c3300"],["F:/Blog/public/page/5/index.html","3271c209cd12aed54111519db1c616ba"],["F:/Blog/public/page/6/index.html","0fd523c7f9c1eef108733a8044f1f1d5"],["F:/Blog/public/page/7/index.html","ade8513677ae7ef617f0b0faaf9d773e"],["F:/Blog/public/tags/Algorithm/index.html","95fc1ba8e6b7da0f22b2513d0b3fb478"],["F:/Blog/public/tags/Algorithm/page/2/index.html","03e431f480a841ab20ceca571f97de1e"],["F:/Blog/public/tags/Algorithm/page/3/index.html","e0708ba85114c7e57340fe621edd2ed4"],["F:/Blog/public/tags/BeautifulSoup/index.html","225135628af1bf85d3377dcb0ac70bcb"],["F:/Blog/public/tags/C/index.html","86640bd89f72fea547004fde6619b5ae"],["F:/Blog/public/tags/Cookie/index.html","c3b3d13d15758b90c3b91647cf01d3ad"],["F:/Blog/public/tags/Django/index.html","a4e6457e8822ad5e980673622e08fe8d"],["F:/Blog/public/tags/File/index.html","069d64cb1ad27bf72067675a0a918090"],["F:/Blog/public/tags/GIL全局解释器锁/index.html","2e2062b2119780c1c79d4e15507f6ff6"],["F:/Blog/public/tags/HTTP/index.html","73b9b4b108e6ea2df09a326de1708c4c"],["F:/Blog/public/tags/HTTPS/index.html","1e1ced4c27a50bb04c9e392c7d308afd"],["F:/Blog/public/tags/Hello-World/index.html","cb5b6b6ac7c38ac27ccb74d2a0db1d5c"],["F:/Blog/public/tags/Markdowm/index.html","7f9e4a4d03725245fe64262406652230"],["F:/Blog/public/tags/Nginx/index.html","5ac7f29fc5af870d029dfe6de17d00f0"],["F:/Blog/public/tags/Picgo/index.html","e6645d1677008e10bb6e07a6c6bce421"],["F:/Blog/public/tags/QQ空间/index.html","d84dcfbbcf69824129e78f56ed0f12bf"],["F:/Blog/public/tags/Re库/index.html","e1c052a58036ef904ec3ff1b25a422dc"],["F:/Blog/public/tags/SFTP/index.html","bebe035bf084a8df57d5b81ec8d47c8c"],["F:/Blog/public/tags/SMTP/index.html","8acec9c63cf61884e955bb84457ed9a3"],["F:/Blog/public/tags/Session/index.html","6bcac730960d53dab484ad9d0ae584f0"],["F:/Blog/public/tags/Twilio/index.html","b5f776d51c6607dfd0a7276c388a213d"],["F:/Blog/public/tags/Typora/index.html","45125e695ad44fdb4c1ccc16c28abbdd"],["F:/Blog/public/tags/Web开发/index.html","e561a72123e78a9babf45976fea3613e"],["F:/Blog/public/tags/bmp文件/index.html","d4a58e4871ced6dc5d9ecf01291d4309"],["F:/Blog/public/tags/index.html","d1f6bb2a572931c834b09db5bffdab12"],["F:/Blog/public/tags/jieba/index.html","9b2de81cc9733dda45425ff66fefea68"],["F:/Blog/public/tags/jieba库/index.html","fdad0bcfc35341ab5454f9fb3a63b7fb"],["F:/Blog/public/tags/mysql/index.html","5dc687323b9032e4e53176263eb97849"],["F:/Blog/public/tags/python/index.html","7db44bc8a47ed0dcfddbe87673bbf2e5"],["F:/Blog/public/tags/python/page/2/index.html","eaa59fea753a67a5f20187ec8eac847a"],["F:/Blog/public/tags/python/page/3/index.html","0b2fe2703e94fa421915b6f5f79f119e"],["F:/Blog/public/tags/queue库/index.html","d42b567449980bf505566c09faf878a2"],["F:/Blog/public/tags/requests/index.html","39f6023c48128c37825ee44c2367999f"],["F:/Blog/public/tags/ssh/index.html","715d1936d8f4fb49a0a4a8205b9cab30"],["F:/Blog/public/tags/threading库/index.html","a7006baa365fcde19cf71589ef7d51db"],["F:/Blog/public/tags/thread库/index.html","c9e9a901b5ffd23a8fb1030b77e1a809"],["F:/Blog/public/tags/uWSGI/index.html","51445b5fde693d4c5653edef97a5664c"],["F:/Blog/public/tags/二分查找/index.html","b1f5ddeeaecd833ebdbfbae8daefc5d1"],["F:/Blog/public/tags/二叉树/index.html","29df744c404ff4465522ddd8d6caeae3"],["F:/Blog/public/tags/人脸对比/index.html","e6b897ce326c56adc0e94f9f70b57c01"],["F:/Blog/public/tags/人脸融合/index.html","7c2c60744d53f3e9b1af2593d417f1e6"],["F:/Blog/public/tags/冒泡排序/index.html","901cb6200c3ae602ad068b55447acc28"],["F:/Blog/public/tags/函数/index.html","74672d577d1e4f847bd8b74d44ca5379"],["F:/Blog/public/tags/分析/index.html","d0a11074b0b8ad47e4e69570bb1760da"],["F:/Blog/public/tags/发送短信/index.html","26c31d24b07c6c2b2ec10e6c3eec1c6a"],["F:/Blog/public/tags/发送邮件/index.html","8f616537dd16a0d9f742f1de0de6d428"],["F:/Blog/public/tags/图床工具/index.html","7a5d23d6f070cfaf39970d15f75a4653"],["F:/Blog/public/tags/图片/index.html","6a290f79f7d4a4aec2bfa6df9a70a8a8"],["F:/Blog/public/tags/基数排序/index.html","e8a2fb9ea61f6a38a78b4bc64171e4a9"],["F:/Blog/public/tags/基础入门/index.html","5b343927858dd5af63de8105537564dd"],["F:/Blog/public/tags/堆排序/index.html","6dc43e98229cab320c7e89b98b3c66bd"],["F:/Blog/public/tags/多线程/index.html","d6f778c1be801525c35320df105ac1bd"],["F:/Blog/public/tags/字符串/index.html","b0f2c20b8a0f18945fba1aa38a24eada"],["F:/Blog/public/tags/对象/index.html","aed47ce2b7e4e2be9b63743975688488"],["F:/Blog/public/tags/希尔排序/index.html","0763901bb6f8f984da797f02d821ce1d"],["F:/Blog/public/tags/归并排序/index.html","d5fb72fe3638f6dc3d8c4fc718ac0b26"],["F:/Blog/public/tags/快速排序/index.html","b5daaf0d40814de7724e1a0b5eb2c158"],["F:/Blog/public/tags/指针/index.html","9a25378a6e9a31cfc3b9d3641084f690"],["F:/Blog/public/tags/排序算法/index.html","c7bbfdb25d1814a283a553d8ea023840"],["F:/Blog/public/tags/排序算法/page/2/index.html","9bc3f2fd6b0763b3ae8764f8c3c9a9f2"],["F:/Blog/public/tags/插入排序/index.html","7483d8305dbc3eea79ae83837ea48b1a"],["F:/Blog/public/tags/数据类型/index.html","29c592288163080600796299c4103852"],["F:/Blog/public/tags/数组/index.html","531611f46986f69d5a482c6750a62d62"],["F:/Blog/public/tags/文件I-O/index.html","9ece6f5f3efc0537b5f5555168955016"],["F:/Blog/public/tags/文件操作/index.html","9957e7db3dbe876d370bc1ba63d57b60"],["F:/Blog/public/tags/斐波那契数列/index.html","c5118e7a8d83273d9af701cc01a74269"],["F:/Blog/public/tags/服务器/index.html","5e5cd111c18cad7620b7b679c8c577a5"],["F:/Blog/public/tags/查找/index.html","2dbfdaa38173ce49f99d52ce5cd1fca0"],["F:/Blog/public/tags/栈/index.html","a303432b42e62115881d4c07ff58cd4e"],["F:/Blog/public/tags/桶排序/index.html","9544ce49c278ce4d0312ad880adabc23"],["F:/Blog/public/tags/正则表达式/index.html","7d91a022f8fa1c0d9cbd80da35a365bc"],["F:/Blog/public/tags/爬虫/index.html","05547a22c941a8179173a212c1dce59b"],["F:/Blog/public/tags/猴子排序/index.html","9c3905a1ed1b2f64fd0e2416b49f922f"],["F:/Blog/public/tags/王者荣耀/index.html","b948a025acf3f55a99f26f0766ed93eb"],["F:/Blog/public/tags/珠排序/index.html","0174d1f72f681063ab3177864db8bfa9"],["F:/Blog/public/tags/百度翻译/index.html","c95fc1f2c51bcc4bad84d45a9b989b75"],["F:/Blog/public/tags/睡觉排序/index.html","85d4085cc0d660767a32b40e216690b8"],["F:/Blog/public/tags/矩阵/index.html","3d9f695f9dd5257e31969072232296f2"],["F:/Blog/public/tags/程序流程结构/index.html","e1d593281bd4d7470076092c4b828d73"],["F:/Blog/public/tags/类/index.html","b9c37c10f2dfb751b98af9b4472c4f24"],["F:/Blog/public/tags/线程锁/index.html","a3b011875b590a85b214fa284f59dc65"],["F:/Blog/public/tags/结构体/index.html","dacf1d19631fc3e6cf6593ff9bbaaefd"],["F:/Blog/public/tags/编程基础/index.html","d4b571d610f37e73bab65a14777c2554"],["F:/Blog/public/tags/装饰器/index.html","6625faa284c4f873bbe8c5d194377663"],["F:/Blog/public/tags/计数排序/index.html","98e7e17fcad9e4d6328c82a8cf5bfed1"],["F:/Blog/public/tags/运算符/index.html","eadf19fd219e36ec8d83f4eaddd43d79"],["F:/Blog/public/tags/选择排序/index.html","20467fbf386e9a4420fc9c37c054e7a8"],["F:/Blog/public/tags/递归/index.html","844a86f5a357d88b827bb84848feb7e9"],["F:/Blog/public/tags/链表/index.html","0d06b7b565a6ed59333e6230b7c65c60"],["F:/Blog/public/tags/闭包/index.html","4e8167a9fcbcc2e9d211b8d4d45f8c52"],["F:/Blog/public/tags/队列/index.html","c5c8b0d0fdb3317ec645dfbe8bf65747"],["F:/Blog/public/tags/阿里云/index.html","eb0e36eaf1bc8b6ecd8ce502ad1374cf"],["F:/Blog/public/tags/项目实战/index.html","3926e3d0a1248ba48f3f79b18a1e7f80"],["F:/Blog/public/tags/项目部署/index.html","a963646973b9a99c521a430552a539bd"],["F:/Blog/public/tags/颜值打分/index.html","d54423d66f60c99625fc2540490718d5"]];
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







