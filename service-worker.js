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

var precacheConfig = [["F:/Blog/public/2020/03/07/hello-world/index.html","ec834386c9f6169d5d7ccba67908df02"],["F:/Blog/public/2020/03/08/1、设置用户和组/index.html","bd3119c8f0094aaf3ea6ed6c6802fcab"],["F:/Blog/public/2020/03/08/2、设置登录证书/index.html","a4dd709ae0a03d78f30294ec04fa91d6"],["F:/Blog/public/2020/03/08/3、设置防火墙和端口/index.html","946af364707656eb588c7300d3df7722"],["F:/Blog/public/2020/03/08/4、安装数据库/index.html","50d4b80a2dd720cebf210e4bd003160a"],["F:/Blog/public/2020/03/08/5、安装python3/index.html","f067c3b5cdf992a1a0916595015b0c05"],["F:/Blog/public/2020/03/08/6、安装测试Django/index.html","2c7010ef0a21d7b31aa37b50c7441d0d"],["F:/Blog/public/2020/03/08/7、配置Django项目/index.html","479b28c8dc9d86c50a69e68b55f5c6d2"],["F:/Blog/public/2020/03/08/8、设置Nginx和uWSGI/index.html","8e20bccb378dd1c29a958871d7e44a4a"],["F:/Blog/public/2020/03/10/Request库/index.html","b8c246b9a32cc09da7e4d7c6f8391484"],["F:/Blog/public/2020/03/15/BeautifulSoup库/index.html","2cca74ee8e92849a87d0377fd375f777"],["F:/Blog/public/2020/04/04/Cookie与Session/index.html","101073b176da5b247921679778953e70"],["F:/Blog/public/2020/04/04/HTTP协议与HTTPS协议/index.html","aeca886e0fc125967bb823b6d219f715"],["F:/Blog/public/2020/04/05/C++ 初始/index.html","eca2b64682366db9a90c2f47509a86d3"],["F:/Blog/public/2020/04/05/Python-函数装饰器/index.html","37fd9ac1ade8307779ed510c607b9bcf"],["F:/Blog/public/2020/04/06/冒泡排序/index.html","e15983125307bbe35676cae2a772debd"],["F:/Blog/public/2020/04/06/插入排序/index.html","00a070c98c96b449a2d6e86fc179c25a"],["F:/Blog/public/2020/04/11/快速排序/index.html","5fcd7af56edd7353d1dad2fc73d3dd25"],["F:/Blog/public/2020/04/11/选择排序/index.html","c846c803453faa87b2ecc210540519d0"],["F:/Blog/public/2020/04/12/C++ 数据类型/index.html","74c87684a42d6f35a70d1002184c4145"],["F:/Blog/public/2020/04/18/希尔排序/index.html","77eb58c8c22820a2441dd79b3a046c3e"],["F:/Blog/public/2020/04/18/归并排序/index.html","6a42b7a63c9a889ff6a8a3326cd3bd62"],["F:/Blog/public/2020/04/19/C++ 运算符/index.html","c1fdf1e0f7f1b2fa67253fd7abd30723"],["F:/Blog/public/2020/04/25/基数排序/index.html","06a0277ae89f8f7fc06e75b0dafa148d"],["F:/Blog/public/2020/04/25/计数排序/index.html","3678db1a5527a64000484c432c85d288"],["F:/Blog/public/2020/04/26/C++ 程序流程结构/index.html","175323108564384eb08491c8efddb9aa"],["F:/Blog/public/2020/05/01/堆排序/index.html","c615174c6a8b4ca66a71afef38db1d98"],["F:/Blog/public/2020/05/01/桶排序/index.html","1a161f1f47047fee00a5a0610baba304"],["F:/Blog/public/2020/05/02/珠排序/index.html","c3e27797cb6bc917932d2ea22324e6a8"],["F:/Blog/public/2020/05/02/睡眠排序/index.html","0820e2fed060f50cd2b5a4f17a35f559"],["F:/Blog/public/2020/05/03/C++ 数组/index.html","da739e06798179cfd8dadd1ea1548298"],["F:/Blog/public/2020/05/04/猴子排序/index.html","06f7f9dc07bef35efd1f6688d06e971a"],["F:/Blog/public/2020/05/10/C++ 函数/index.html","7cfa83068fe21b74ce481460be3f51fe"],["F:/Blog/public/2020/05/17/C++ 指针/index.html","6301cc6d28a2c53416b3a2638fb1261b"],["F:/Blog/public/2020/05/24/C++ 结构体/index.html","134e3302b7fe7b4fb13cab89c7ecc698"],["F:/Blog/public/2020/07/21/二维数组中的查找/index.html","d7280941c5af8811cf397e759c9fc9f6"],["F:/Blog/public/2020/07/21/空格替换/index.html","b8b6f9e49975852da547d694863b62bf"],["F:/Blog/public/2020/07/22/从未到头打印链表/index.html","f20e23d84c96c986fc94d0e135cb13a3"],["F:/Blog/public/2020/07/22/用两个栈实现队列/index.html","33843d6363fad49819b880b424cd3721"],["F:/Blog/public/2020/07/22/重建二叉树/index.html","dfcb8805eceeb9ebaf3769117cce2a53"],["F:/Blog/public/2020/07/23/Python-正则表达式/index.html","2bc60ba135a9a06b2068939d637eacef"],["F:/Blog/public/2020/07/23/变态跳台阶/index.html","b19615163d3949bd551bab6d9817df98"],["F:/Blog/public/2020/07/23/旋转数组的最小数字/index.html","a9e1d841d2512777762dd9be7ccaeb83"],["F:/Blog/public/2020/07/23/跳台阶/index.html","f665c75366f7dbd48f9f1a069166a550"],["F:/Blog/public/2020/07/26/数值的整数次方/index.html","1c2b0665a85d74ab180250788bdf08e7"],["F:/Blog/public/2020/07/29/Python-QQ空间模拟登陆/index.html","3e3523371cdb91b09286618a69188b88"],["F:/Blog/public/2020/07/29/Python-文件I-O/index.html","dff76fc8c91feb190bd268cec66cd382"],["F:/Blog/public/2020/07/29/Python-爬取QQ空间相册/index.html","94238edf255d7728f9aee26552341332"],["F:/Blog/public/2020/07/29/Python-爬取东北大学高数题库/index.html","b52d8197a05456fe9a369ff4817c9c42"],["F:/Blog/public/2020/07/29/Python-爬取山东大学医学题库/index.html","c87256d2024843e239266f0cebd54f53"],["F:/Blog/public/2020/07/30/Python-多线程/index.html","38b0b653ca6a53b420dab695540d167b"],["F:/Blog/public/2020/07/31/好用的图床上传工具-Picgo/index.html","5f0071a5d7784c5760b755512a3404aa"],["F:/Blog/public/2020/09/04/C++对bmp文件操作/index.html","d9e06b4888d438d48df179aeb3e1ad25"],["F:/Blog/public/2020/09/10/Python-发送短信/index.html","7e6753cb22a2533fb4161f5268d5cb47"],["F:/Blog/public/2020/09/11/Python-发送邮件/index.html","70621888f1dc7d2d052b84395155755c"],["F:/Blog/public/2020/09/12/jieba库/index.html","94c086aa58c8ebb93346e8bd9f93325d"],["F:/Blog/public/2020/09/13/王者荣耀英雄皮肤爬取/index.html","0c64f27b9819f42985ed235a0ac0f274"],["F:/Blog/public/2020/09/13/网页高频字词分析/index.html","75882a81753a3db62ed4db00fa807011"],["F:/Blog/public/2020/09/14/wordcloud库/index.html","527c9dbdd48bd731e4ea79d0d1a277e7"],["F:/Blog/public/2020/09/15/Python-英汉互译/index.html","3fa94e7f0b14435b77c027cffa489b42"],["F:/Blog/public/2020/09/16/Python-人脸对比/index.html","a4ae2d43a6993ab44621b55278ac8822"],["F:/Blog/public/2020/09/17/Python-颜值打分/index.html","88358a367f55296a39e21e3b88eec788"],["F:/Blog/public/2020/09/18/Python-人脸融合/index.html","71e496f5886cb5bc1a1012e9e677f648"],["F:/Blog/public/archives/2020/03/index.html","73f8aac35ce9156ab93079e3ecc4a211"],["F:/Blog/public/archives/2020/03/page/2/index.html","2d1cece112220477c59ad5e6c93f4c29"],["F:/Blog/public/archives/2020/04/index.html","85e3628e0afc1f5c3907e61da5470023"],["F:/Blog/public/archives/2020/04/page/2/index.html","4311d5972ea19bd34d9234b4d6a336a6"],["F:/Blog/public/archives/2020/05/index.html","ff9cd6c04f1d2b7e2e3a708f12a43702"],["F:/Blog/public/archives/2020/07/index.html","d8ba3cf7a5337a1fe579b23387986c4d"],["F:/Blog/public/archives/2020/07/page/2/index.html","3ce304f2db3bea87142bcced0e81f589"],["F:/Blog/public/archives/2020/09/index.html","3fba9b089f90bd939cc35b5af75e58aa"],["F:/Blog/public/archives/2020/09/page/2/index.html","50a56a268d05cf59b424243883a2fccc"],["F:/Blog/public/archives/2020/index.html","26d4e02f95291907526bb8e75c92f969"],["F:/Blog/public/archives/2020/page/2/index.html","680a2e9a7f97341ebb0b2ea3f5e2d123"],["F:/Blog/public/archives/2020/page/3/index.html","17337999a4347f279cad0efe896c0399"],["F:/Blog/public/archives/2020/page/4/index.html","5c14f3d3485615e2c8174383e7abf11a"],["F:/Blog/public/archives/2020/page/5/index.html","009fc14cc55dc3cfbac38b4c3f86e314"],["F:/Blog/public/archives/2020/page/6/index.html","895ab6ec30cf86f3d2517169849c8216"],["F:/Blog/public/archives/2020/page/7/index.html","093221ae951dd9fdb538034b5c3ea658"],["F:/Blog/public/archives/index.html","f1450a1a8d661c199b06a524f474f019"],["F:/Blog/public/archives/page/2/index.html","48e829922e684430f4bbd85354ca821b"],["F:/Blog/public/archives/page/3/index.html","69c827d22b34705ae48b9f29598d77c7"],["F:/Blog/public/archives/page/4/index.html","cf0895f6c1f7ae9fc8a34b1fd3a54e4b"],["F:/Blog/public/archives/page/5/index.html","fb6126af0171ffe133e0ffcf2ccbec0a"],["F:/Blog/public/archives/page/6/index.html","57fa619b03d00a561417e48ff45fbf94"],["F:/Blog/public/archives/page/7/index.html","a3c06129fab7f919d8432f87187b87b4"],["F:/Blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/Blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/Blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/Blog/public/categories/Algorithm/index.html","06a5e649c38e7e45c9bc044ebf8d2505"],["F:/Blog/public/categories/Algorithm/page/2/index.html","e2eec5481d0205a2ae6b73129202ffaa"],["F:/Blog/public/categories/Algorithm/page/3/index.html","7732a2aff2bd47106742a2424965a1d3"],["F:/Blog/public/categories/Algorithm/二叉树/index.html","ad9eb4631283ed33becc109842513851"],["F:/Blog/public/categories/Algorithm/字符串/index.html","c910c8d261ae310fd01553de9830edff"],["F:/Blog/public/categories/Algorithm/排序算法/index.html","40d265f2856e2e7c84dfbd0b910e3b4a"],["F:/Blog/public/categories/Algorithm/排序算法/page/2/index.html","6b9fad8c96b9efd1fe61356f35f514ce"],["F:/Blog/public/categories/Algorithm/数组/index.html","037345106f6d3620c8dd2c1d35a65acc"],["F:/Blog/public/categories/Algorithm/斐波那契数列/index.html","afd1ed983a94957e01ecb292264a74eb"],["F:/Blog/public/categories/Algorithm/栈/index.html","bbb72ee08a44e69c9accbb7d429343a5"],["F:/Blog/public/categories/Algorithm/次方运算/index.html","c6f9d62d57218d167f388044054f6410"],["F:/Blog/public/categories/Algorithm/链表/index.html","06d1e754d9b66a4d65b86792a4ee162a"],["F:/Blog/public/categories/C/index.html","a1f46d1f3fa05fee2289ec9fcdcf328b"],["F:/Blog/public/categories/C/基础入门/index.html","c9da875988f13221bc5f834f033949e7"],["F:/Blog/public/categories/C/课程设计/index.html","2946ba6e3fb6cd7621ec1ac63742be32"],["F:/Blog/public/categories/Hexo/index.html","dca7ca60b78116997392f3dc62e1f3ea"],["F:/Blog/public/categories/Picgo/index.html","aa84219d26bf4ddabf5d76299b9a0ef5"],["F:/Blog/public/categories/Python/API调用/index.html","dc5a3e37887b864eb44988d849a0b470"],["F:/Blog/public/categories/Python/Django/Web开发/index.html","7d7c444d3fc8d0f509f7afd1e6718769"],["F:/Blog/public/categories/Python/Django/index.html","12421b57fce99a94260eaab418492870"],["F:/Blog/public/categories/Python/Django/项目部署/index.html","5a0afecf48c314c9bc1064bee2252116"],["F:/Blog/public/categories/Python/index.html","a80eeb91f5e8b583e7fb906129944612"],["F:/Blog/public/categories/Python/page/2/index.html","2a7bb57ba40dc8c428803f37e31855f9"],["F:/Blog/public/categories/Python/page/3/index.html","b4a58c04b37c62f1b5bbcb67d22078f5"],["F:/Blog/public/categories/Python/基础入门/index.html","a4e9d2db6129fed9ea7a9c5c7e6f1e33"],["F:/Blog/public/categories/Python/爬虫学习/index.html","b4535d0eec120a652ba41d03429e58e8"],["F:/Blog/public/categories/Python/高级进阶/index.html","a52c12a1e5a8c5f1fa3b5cdb48d1097d"],["F:/Blog/public/categories/index.html","24b1ddc426009899633dcb5eb4d22f66"],["F:/Blog/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["F:/Blog/public/css/index.css","0ad56b840d121f299eff10fe452b875a"],["F:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/Blog/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["F:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["F:/Blog/public/img/alipay.jpg","8fb31a1080def0faaded06df4ead3d5f"],["F:/Blog/public/img/avatar.png","d67ee41c6e812d7c25018a20f9717692"],["F:/Blog/public/img/avatar_pre.png","c291715561b777d5601df42b8d8fc791"],["F:/Blog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["F:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/Blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/Blog/public/img/wechat.jpg","b04f4382ac98f36e70836a99377e4708"],["F:/Blog/public/index.html","5a3f789a46f5c35835d3bb06533563d7"],["F:/Blog/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["F:/Blog/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/Blog/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/Blog/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["F:/Blog/public/page/2/index.html","63afa7e6ae8b27d0fbe51dd985c80846"],["F:/Blog/public/page/3/index.html","11a9b376b98e2c757c1afdb3ac974062"],["F:/Blog/public/page/4/index.html","078f2fd00a5076be77db8f9916e95a39"],["F:/Blog/public/page/5/index.html","8c128356b5320983be42971c589e8b52"],["F:/Blog/public/page/6/index.html","fa745fce31b1a31d27157bfd8561c8c5"],["F:/Blog/public/page/7/index.html","00f16583d86d9eaba60d9edffe645a86"],["F:/Blog/public/tags/Algorithm/index.html","2c21f6b995f63415117b000895e41ab3"],["F:/Blog/public/tags/Algorithm/page/2/index.html","64805c208f76400fd9a1cf484fbf63d3"],["F:/Blog/public/tags/Algorithm/page/3/index.html","d736216652365a5578297328fde782f0"],["F:/Blog/public/tags/BeautifulSoup/index.html","ccf8abcc8934052bb7e2ff31bc34fcf7"],["F:/Blog/public/tags/C/index.html","3de24abfb124f888af93ed47b273607a"],["F:/Blog/public/tags/Cookie/index.html","cb7d98578f3f5f6da7f6490e9b69bb5c"],["F:/Blog/public/tags/Django/index.html","c3a4cff9ee94a183dc6f95cffb0f3e65"],["F:/Blog/public/tags/File/index.html","f7e4246ffa319ed444fee5c9b9fc33e3"],["F:/Blog/public/tags/GIL全局解释器锁/index.html","033399c8156605e47851a196b726e2ca"],["F:/Blog/public/tags/HTTP/index.html","cabb5990782f264d88a01556c3081cbf"],["F:/Blog/public/tags/HTTPS/index.html","26a72c59c2ca6faff2247857620e3dcb"],["F:/Blog/public/tags/Hello-World/index.html","833ba9593029c624e14f6f4a1b20a591"],["F:/Blog/public/tags/Markdowm/index.html","124a126b4dfd3ee4082196b77c33b93e"],["F:/Blog/public/tags/Nginx/index.html","4c94d2091da44a263a62533a8f1ad2c6"],["F:/Blog/public/tags/Picgo/index.html","a1d4f98956a78b3a57586b9784228a00"],["F:/Blog/public/tags/QQ空间/index.html","55e3b9021ad6535ab6854cdef00bbd25"],["F:/Blog/public/tags/Re库/index.html","7ecb4c9881caeed346f89ef06f5c8f12"],["F:/Blog/public/tags/SFTP/index.html","c63ddc43b10cbf768c345fc3df4c30ba"],["F:/Blog/public/tags/SMTP/index.html","5ed4699fc85abc17a22f7204e41fdd60"],["F:/Blog/public/tags/Session/index.html","cccdea7ec90ea27ea0d16a011b25b5cc"],["F:/Blog/public/tags/Twilio/index.html","6d02f7d4e3534dc7524727d493254bf2"],["F:/Blog/public/tags/Typora/index.html","1fe52db9ca3a4ea059185be137133301"],["F:/Blog/public/tags/Web开发/index.html","31f16dda9963b4fe532beee93ee4a1c7"],["F:/Blog/public/tags/bmp文件/index.html","4b568b9767b2712cf026c64c47d40abd"],["F:/Blog/public/tags/index.html","0e8ad2f487ff3e5969fc75fe038c29d6"],["F:/Blog/public/tags/jieba/index.html","3ea4eefcb3bea96c5565282780fc9fa9"],["F:/Blog/public/tags/jieba库/index.html","8546f6cf9892101535214a5aaff97b7d"],["F:/Blog/public/tags/mysql/index.html","5c928f7366d1d43dff5e2094c8a360e6"],["F:/Blog/public/tags/python/index.html","0799b8700c0bef5a92658cbddea71cf4"],["F:/Blog/public/tags/python/page/2/index.html","42c832e8b0293cddf534f1cbf0fe8f66"],["F:/Blog/public/tags/python/page/3/index.html","a2d7dabb2b7a23322b945926b607a81a"],["F:/Blog/public/tags/queue库/index.html","cff36b2dc1abc359ab7cc23b551f07bf"],["F:/Blog/public/tags/requests/index.html","0e9ca4d18d211e7c9f7a38c9d084ea69"],["F:/Blog/public/tags/ssh/index.html","c6969e5e277f5d07100653d6a2e06a5e"],["F:/Blog/public/tags/threading库/index.html","ab231bfb166b629fef42334a1522d7b3"],["F:/Blog/public/tags/thread库/index.html","ab5a094f63933b7f4b5cc25fda842a76"],["F:/Blog/public/tags/uWSGI/index.html","12eec7d9eb5c754e15e0ed86759b1707"],["F:/Blog/public/tags/二分查找/index.html","4d4d84fa888cd17963fc18c73fb9a107"],["F:/Blog/public/tags/二叉树/index.html","b3e157e182f68ae3392113528cd0c38e"],["F:/Blog/public/tags/人脸对比/index.html","7448360397987cacb2f6d6c98a18637e"],["F:/Blog/public/tags/人脸融合/index.html","ac6b753e34ffe16bb25f78b78f1af5c1"],["F:/Blog/public/tags/冒泡排序/index.html","f1ff709212b1919c3c56d54968a0e1a0"],["F:/Blog/public/tags/函数/index.html","38bbc4690564124114adde4dc91d231e"],["F:/Blog/public/tags/分析/index.html","de63a885825a621688e064fea9f9fade"],["F:/Blog/public/tags/发送短信/index.html","b81ec9b5f5ba8cff69604d0c5757164b"],["F:/Blog/public/tags/发送邮件/index.html","57026b514b24e1a37af754a2997938aa"],["F:/Blog/public/tags/图床工具/index.html","ee41e08de44fd60f26e8c45cbd3735c3"],["F:/Blog/public/tags/图片/index.html","ae92ce1cbcfa22b4b0cc27ec86883b1a"],["F:/Blog/public/tags/基数排序/index.html","8980916cc894a41dd9f097ccd146a406"],["F:/Blog/public/tags/基础入门/index.html","c345e9230cc6c2271ca59e5d20f19ef2"],["F:/Blog/public/tags/堆排序/index.html","b82467d752f2cf4e53bf9c611bdbe982"],["F:/Blog/public/tags/多线程/index.html","a3ea8c78f99136d2142e2ed867430405"],["F:/Blog/public/tags/字符串/index.html","ff79d08b23ec611dc1359935dc742534"],["F:/Blog/public/tags/对象/index.html","9118b86b194589066d83623c24b375b3"],["F:/Blog/public/tags/希尔排序/index.html","edb7f01e67439cd1fc5f53b4ae2d0f4e"],["F:/Blog/public/tags/归并排序/index.html","4d288a8e7e3846197ffe31e52f6e2f86"],["F:/Blog/public/tags/快速排序/index.html","bea452264ad64b49ab1ad57255c79c19"],["F:/Blog/public/tags/指针/index.html","b4eb217c9c631f83ad8364b757dc5dc5"],["F:/Blog/public/tags/排序算法/index.html","2c3613d4e3f7c48b4fc25521b84229f9"],["F:/Blog/public/tags/排序算法/page/2/index.html","68453dadd249d5ac3d409906e8957669"],["F:/Blog/public/tags/插入排序/index.html","5e65fce1394b269df15b82515ecfb96c"],["F:/Blog/public/tags/数据类型/index.html","29ea6c61afd083330a9be061d5acb8ab"],["F:/Blog/public/tags/数组/index.html","5d21ddfbf86fda94191193d89550fa58"],["F:/Blog/public/tags/文件I-O/index.html","487d7e00ff4689e08bb348dc2d89f649"],["F:/Blog/public/tags/文件操作/index.html","76d18ee6f74b60155b6a7afee131f6c7"],["F:/Blog/public/tags/斐波那契数列/index.html","dcafc5d39b8ec8878e17ee17236ee99e"],["F:/Blog/public/tags/服务器/index.html","8b45ac0e90121891e2d73fdf8fa580ae"],["F:/Blog/public/tags/查找/index.html","2eef8b8a19315cf9cd07c3dfc1de4488"],["F:/Blog/public/tags/栈/index.html","4f143a4de26c3d72b03d105db4d0b7ed"],["F:/Blog/public/tags/桶排序/index.html","ef8495a3cdd36589fe99f0c5962378d2"],["F:/Blog/public/tags/正则表达式/index.html","77ef7a13099a7a7b867164d15b9c1d20"],["F:/Blog/public/tags/爬虫/index.html","5f22a4681eb1890b196b0b507a61daa4"],["F:/Blog/public/tags/猴子排序/index.html","bc96861615329b63324bd66c278fea46"],["F:/Blog/public/tags/王者荣耀/index.html","005ea7f3808ec9002b3d774cda2680f6"],["F:/Blog/public/tags/珠排序/index.html","cf386491d0ecab9cd1a08312dc43880b"],["F:/Blog/public/tags/百度翻译/index.html","267dca23fe485a951288ec46480a3b13"],["F:/Blog/public/tags/睡觉排序/index.html","f487dd3b63cf42dad122a2366a4fcc1c"],["F:/Blog/public/tags/矩阵/index.html","1c0680895c5a529b302086e13ea7736a"],["F:/Blog/public/tags/程序流程结构/index.html","59d1b51b567dfcf8432747260d95a78e"],["F:/Blog/public/tags/类/index.html","f8f0ab7e093bc28b3e4a7128de38a330"],["F:/Blog/public/tags/线程锁/index.html","8ebd212649bca488aa0563bcfe8acfd2"],["F:/Blog/public/tags/结构体/index.html","59c33db170a964fd671a3babf2c76f4f"],["F:/Blog/public/tags/编程基础/index.html","fcaa13bec170098a6bf45cb56e7923fb"],["F:/Blog/public/tags/装饰器/index.html","4a9075eed46c9cd3e56dc02654fef5e6"],["F:/Blog/public/tags/计数排序/index.html","1b73cd8a8820caa86760d541f2fb3136"],["F:/Blog/public/tags/运算符/index.html","03bb001b9c7b7aab71d374ec78e5b368"],["F:/Blog/public/tags/选择排序/index.html","8c74aaa8d340aa8f5ca0e6acb2eca76f"],["F:/Blog/public/tags/递归/index.html","93a338f16358245103f78a23571eed25"],["F:/Blog/public/tags/链表/index.html","50338625e6bcbe5980aa18ff64e4fa0d"],["F:/Blog/public/tags/闭包/index.html","84626e91be0b67ec44ac11657cf23a0d"],["F:/Blog/public/tags/队列/index.html","2b070e6f8cc860af01e86a9978fa3918"],["F:/Blog/public/tags/阿里云/index.html","96c1b3cbc4bf18f8006bd2fd3f7e8f99"],["F:/Blog/public/tags/项目实战/index.html","cdd54506fce9c47dfb1347d2a563e772"],["F:/Blog/public/tags/项目部署/index.html","2146b81e25866c4fe574e9b8fd3592fd"],["F:/Blog/public/tags/颜值打分/index.html","e22d04a3a092c562460473e9fdd7215a"]];
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







