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

var precacheConfig = [["F:/Blog/public/2020/03/07/hello-world/index.html","5042b8e9ba5b2533de36a57c2343d2eb"],["F:/Blog/public/2020/03/08/1、设置用户和组/index.html","c392c9e75a12c316e2c14ebc2581e95c"],["F:/Blog/public/2020/03/08/2、设置登录证书/index.html","78c0478f038195310886c0f2d3cdd9c0"],["F:/Blog/public/2020/03/08/3、设置防火墙和端口/index.html","96fc9dffb37c8c946f425b8ac299a5e9"],["F:/Blog/public/2020/03/08/4、安装数据库/index.html","4e59e34a608cb7b4c3afcc8a85939dec"],["F:/Blog/public/2020/03/08/5、安装python3/index.html","053ea98c0a41f314ee63bb5996c6950b"],["F:/Blog/public/2020/03/08/6、安装测试Django/index.html","a318c6a6334ae95da2f8d15c1387b485"],["F:/Blog/public/2020/03/08/7、配置Django项目/index.html","2be60f4bf06880bc70383fcc052a4c85"],["F:/Blog/public/2020/03/08/8、设置Nginx和uWSGI/index.html","e4ae9341b034eed7e731b1a241d76729"],["F:/Blog/public/2020/03/10/Request库/index.html","eea2daff0b6f860368293b7630788b60"],["F:/Blog/public/2020/03/15/BeautifulSoup库/index.html","9763af3e9a9c69299dadd5df288ee985"],["F:/Blog/public/2020/04/04/Cookie与Session/index.html","2662ac4d5c71e12460f212e87f028317"],["F:/Blog/public/2020/04/04/HTTP协议与HTTPS协议/index.html","1b48db40b56ffc34ed386352410c3e89"],["F:/Blog/public/2020/04/05/C++ 初始/index.html","289409057da89ea2477d91e310d76f96"],["F:/Blog/public/2020/04/05/Python-函数装饰器/index.html","b46488713ffd9318f23ad1d65f70dae8"],["F:/Blog/public/2020/04/06/冒泡排序/index.html","5df3701bd5e762fc265469b928c498c9"],["F:/Blog/public/2020/04/06/插入排序/index.html","927c2b3589a8584acb3bc154fd7ef24e"],["F:/Blog/public/2020/04/11/快速排序/index.html","4eadb8e2e2401e1a3ca84d03e2bd6aff"],["F:/Blog/public/2020/04/11/选择排序/index.html","674bb74aba1f2af07734b8cbfe16294d"],["F:/Blog/public/2020/04/12/C++ 数据类型/index.html","4bcc8788299cfd80bbde2b9191570568"],["F:/Blog/public/2020/04/18/希尔排序/index.html","c0ef24c73aae145d79ae9c4abc921444"],["F:/Blog/public/2020/04/18/归并排序/index.html","3faeb7678ee6d890ebe12a2f7076a570"],["F:/Blog/public/2020/04/19/C++ 运算符/index.html","ee67aa6a97ea84f98b856c15ecc0b2b8"],["F:/Blog/public/2020/04/25/基数排序/index.html","09737dca002527842be37d88ea93f4f7"],["F:/Blog/public/2020/04/25/计数排序/index.html","eb9fbc517254ddc837ae3c85971eea04"],["F:/Blog/public/2020/04/26/C++ 程序流程结构/index.html","a8dd1da1c0d09d27bade51a7e9d6d3a6"],["F:/Blog/public/2020/05/01/堆排序/index.html","c378441b94f2ffbdfb058509d79016a6"],["F:/Blog/public/2020/05/01/桶排序/index.html","6bfb795a7739f735b5ccf56ee00350a7"],["F:/Blog/public/2020/05/02/珠排序/index.html","2345a4b714d184db071fc18c2931b5f1"],["F:/Blog/public/2020/05/02/睡眠排序/index.html","3caa0be93dbd27669432e63697abd26a"],["F:/Blog/public/2020/05/03/C++ 数组/index.html","125b6eb33a89c968842a63b61963bf9e"],["F:/Blog/public/2020/05/04/猴子排序/index.html","3c57b7899a62a7dbad8f4bf5f74f2dfd"],["F:/Blog/public/2020/05/10/C++ 函数/index.html","cd42acf8d8dcbdb07e3761f290b2cf8c"],["F:/Blog/public/2020/05/17/C++ 指针/index.html","7859fda59044afea04ff3b24551ceebb"],["F:/Blog/public/2020/05/24/C++ 结构体/index.html","c876b2a3040fd6632994569a25985f17"],["F:/Blog/public/2020/07/21/二维数组中的查找/index.html","eb0c96d7ced846351dfd6a6c9f9cc45b"],["F:/Blog/public/2020/07/21/空格替换/index.html","7651c55e10708a089d7a8863219bd698"],["F:/Blog/public/2020/07/22/从未到头打印链表/index.html","8eb58341f9961175a9b933d03d8193b8"],["F:/Blog/public/2020/07/22/用两个栈实现队列/index.html","f99842d8b7e5e88b735e8f2b489ba471"],["F:/Blog/public/2020/07/22/重建二叉树/index.html","a6436cf13389282d737d8c70c2b1fe77"],["F:/Blog/public/2020/07/23/Python-正则表达式/index.html","1f27dbe25d8a5f7083ca3b1a657146de"],["F:/Blog/public/2020/07/23/变态跳台阶/index.html","b920d7dc48bd2d5c370adfd5839724a3"],["F:/Blog/public/2020/07/23/旋转数组的最小数字/index.html","0f44a3c18cd6b8a5d769d28ac684d646"],["F:/Blog/public/2020/07/23/跳台阶/index.html","046034355f46a8f7a08d9560144cfe79"],["F:/Blog/public/2020/07/26/数值的整数次方/index.html","f1169864f3d7b683dfa0c220a611109f"],["F:/Blog/public/2020/07/29/Python-QQ空间模拟登陆/index.html","bda3e4d3c6644a9905899401df897f5a"],["F:/Blog/public/2020/07/29/Python-文件I-O/index.html","a879c1827cb70d986a435e067dfe0d87"],["F:/Blog/public/2020/07/29/Python-爬取QQ空间相册/index.html","243326de02d6e8310c7ed326af1736fd"],["F:/Blog/public/2020/07/29/Python-爬取东北大学高数题库/index.html","d4b567516d1b2d1483d4f2ee47563e44"],["F:/Blog/public/2020/07/29/Python-爬取山东大学医学题库/index.html","624e34230853784ec5c5e62f604c2643"],["F:/Blog/public/2020/07/30/Python-多线程/index.html","ad746429ef4b555ff40596bed0beeb9d"],["F:/Blog/public/2020/07/31/好用的图床上传工具-Picgo/index.html","bd7058afed0d1defa4c3756d503e1605"],["F:/Blog/public/2020/09/04/C++对bmp文件操作/index.html","ff10eec099c04313903a106fa6548445"],["F:/Blog/public/archives/2020/03/index.html","d1e64ae9c7958a01ef528a1d89dd4d3d"],["F:/Blog/public/archives/2020/03/page/2/index.html","6a648272123ec60962ed0d8ff565046c"],["F:/Blog/public/archives/2020/04/index.html","d1ca2f67c40796938b73d8f3147e766e"],["F:/Blog/public/archives/2020/04/page/2/index.html","6c9b2b5d4cdba3380c76511df46bd667"],["F:/Blog/public/archives/2020/05/index.html","75e089defcabf43172c9576d3a6f5bd2"],["F:/Blog/public/archives/2020/07/index.html","b4a5da1e386dc9d3c3e46e599ee3270c"],["F:/Blog/public/archives/2020/07/page/2/index.html","0ffcb12d218013d774cc51ec4c15bd0e"],["F:/Blog/public/archives/2020/09/index.html","ee8b07d9efad00fb892a0fbac009580f"],["F:/Blog/public/archives/2020/index.html","58b94c6eedbc3924a92a67f03668beed"],["F:/Blog/public/archives/2020/page/2/index.html","8c3527e7a9e6282aac174fad611ac78c"],["F:/Blog/public/archives/2020/page/3/index.html","8f667a03636fc5008b17bf6330367aa3"],["F:/Blog/public/archives/2020/page/4/index.html","e4d6d3f29e4fb4855fd8d65837ffcfc0"],["F:/Blog/public/archives/2020/page/5/index.html","0e2cf1f0dcc010f6c43b9adc8c54eb36"],["F:/Blog/public/archives/2020/page/6/index.html","ae4f322efffc03dfec697c078e900796"],["F:/Blog/public/archives/index.html","68b38509c52b8e5be4a3b9b385377838"],["F:/Blog/public/archives/page/2/index.html","dfe69e39a59b688b59b5589511295dda"],["F:/Blog/public/archives/page/3/index.html","af6a8f7aca080eb60c5fa3553daa3a60"],["F:/Blog/public/archives/page/4/index.html","e03de306abaa3effb81248185ca400c0"],["F:/Blog/public/archives/page/5/index.html","740055d2226ff1c16d79a4160356e315"],["F:/Blog/public/archives/page/6/index.html","720a875a2292a84f73a4620b131a769b"],["F:/Blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/Blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/Blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/Blog/public/categories/Algorithm/index.html","d0b9d8c6439cee10483b8a7f6567c25b"],["F:/Blog/public/categories/Algorithm/page/2/index.html","ff72716921a73b1f67d070cf0365aa47"],["F:/Blog/public/categories/Algorithm/page/3/index.html","98a753b9202d5149db977fb7fda2d8a7"],["F:/Blog/public/categories/Algorithm/二叉树/index.html","2651b31981cc5d2d4412e27c1f29c41c"],["F:/Blog/public/categories/Algorithm/字符串/index.html","ee11f4557535502aee357cc6fa2ddfb5"],["F:/Blog/public/categories/Algorithm/排序算法/index.html","192b6eaf82bcad6cee58b1e914de1a95"],["F:/Blog/public/categories/Algorithm/排序算法/page/2/index.html","37e8ae8e1d01275793f5d2606177ec5e"],["F:/Blog/public/categories/Algorithm/数组/index.html","7173adb25cca2ededfa79d7cc84e649e"],["F:/Blog/public/categories/Algorithm/斐波那契数列/index.html","aef5c9adf7bab6ace6fd4648cf5b0802"],["F:/Blog/public/categories/Algorithm/栈/index.html","5c903416829a4e5c92211aeff3e35126"],["F:/Blog/public/categories/Algorithm/次方运算/index.html","3c08095adde082ffdfe08e993ae518ab"],["F:/Blog/public/categories/Algorithm/链表/index.html","04c39bc2415ffebb90df082affd3a1ee"],["F:/Blog/public/categories/C/index.html","59434b95e9d715bccf0c6a4687d6fd2e"],["F:/Blog/public/categories/C/基础入门/index.html","1dc31127962c56faa0f9d8cf4781b28e"],["F:/Blog/public/categories/C/课程设计/index.html","8f443cf4780f11e1f54aca8110598e72"],["F:/Blog/public/categories/Hexo/index.html","18a5ea55c69f573677913193993cf2e5"],["F:/Blog/public/categories/Picgo/index.html","366ea7b8cc78fe36d939e71402099580"],["F:/Blog/public/categories/Python/Django/Web开发/index.html","34af7ea86b4c71972f858c3bc19a027b"],["F:/Blog/public/categories/Python/Django/index.html","f17bf0286c3adc69c62b42be5eb304e6"],["F:/Blog/public/categories/Python/Django/项目部署/index.html","8422099755e5e83161365466b9c51590"],["F:/Blog/public/categories/Python/index.html","b9dd372557094976e15fbf79e820b904"],["F:/Blog/public/categories/Python/page/2/index.html","cefbbb4f3b161d4cd50ca8bdb732acc0"],["F:/Blog/public/categories/Python/基础入门/index.html","b475fbb20da06f67596068498ea27409"],["F:/Blog/public/categories/Python/爬虫学习/index.html","8bfb552d4b11feaa5487696bb32318b6"],["F:/Blog/public/categories/Python/高级进阶/index.html","684ccfec7746b1832beea17dbf2877b0"],["F:/Blog/public/categories/index.html","8d82dd4fcc447e6bb34fc5572eba71f2"],["F:/Blog/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["F:/Blog/public/css/index.css","0ad56b840d121f299eff10fe452b875a"],["F:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/Blog/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["F:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["F:/Blog/public/img/alipay.jpg","8fb31a1080def0faaded06df4ead3d5f"],["F:/Blog/public/img/avatar.png","d67ee41c6e812d7c25018a20f9717692"],["F:/Blog/public/img/avatar_pre.png","c291715561b777d5601df42b8d8fc791"],["F:/Blog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["F:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/Blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/Blog/public/img/wechat.jpg","b04f4382ac98f36e70836a99377e4708"],["F:/Blog/public/index.html","bd81b77a861069b83ae15b19ab5c5684"],["F:/Blog/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["F:/Blog/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/Blog/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/Blog/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["F:/Blog/public/page/2/index.html","988e926039e50b5c71bc69ef311cd79e"],["F:/Blog/public/page/3/index.html","792ab2d40b60d2615bf50c98686e9877"],["F:/Blog/public/page/4/index.html","6f790af15dd0e6d4aa4237dd8f2edd79"],["F:/Blog/public/page/5/index.html","c9b41a1b0de7673c74cb4951ef5c21ae"],["F:/Blog/public/page/6/index.html","11f5ccae5fd166158ad2bd295ce7f97f"],["F:/Blog/public/tags/Algorithm/index.html","70b2e69e7e609be8aa79a82ca1ba3b32"],["F:/Blog/public/tags/Algorithm/page/2/index.html","579a21358e3a8ddc352706a90d5adf43"],["F:/Blog/public/tags/Algorithm/page/3/index.html","a2d2692a732ba498512911b2f4b61109"],["F:/Blog/public/tags/BeautifulSoup/index.html","73a5821f28775ad7773e33b61620f6a2"],["F:/Blog/public/tags/C/index.html","76326fa45cf3f86096ecf4a019c19809"],["F:/Blog/public/tags/Cookie/index.html","6a45dc3be482aa7e46827d55f089d98a"],["F:/Blog/public/tags/Django/index.html","dee91cffb52f637f67c551601a997e9d"],["F:/Blog/public/tags/File/index.html","7a66d46ed6f0dba6856802a356f3c6da"],["F:/Blog/public/tags/GIL全局解释器锁/index.html","96744b3e52dc11c824ab9e54ebe1e0a5"],["F:/Blog/public/tags/HTTP/index.html","cb0d388d3cd21024fa8e61389530075c"],["F:/Blog/public/tags/HTTPS/index.html","cd42db1e60350432c27e0b82777b5786"],["F:/Blog/public/tags/Hello-World/index.html","1b58555d3a26599c5db80ba53e92c3a6"],["F:/Blog/public/tags/Markdowm/index.html","3735e799c12ba5871c8f6d132599b5e9"],["F:/Blog/public/tags/Nginx/index.html","b8b6d01b0a44a93ef2f4972fa9b0d9ee"],["F:/Blog/public/tags/Picgo/index.html","5b57b51d2b3102a640521149a85c2eec"],["F:/Blog/public/tags/QQ空间/index.html","9bd27a45705752f92c15139c70063755"],["F:/Blog/public/tags/Re库/index.html","dda5e8a1bc3b42c78a66e1b97b2e8edf"],["F:/Blog/public/tags/SFTP/index.html","265665f664f02b1387c6e825e99f67df"],["F:/Blog/public/tags/Session/index.html","285ef79a65331e1bd9d8e59e64a5d691"],["F:/Blog/public/tags/Typora/index.html","43cde8ee6f3fb28491008e51df88ae25"],["F:/Blog/public/tags/Web开发/index.html","89c18365b9a98977baf414f10b2e051e"],["F:/Blog/public/tags/bmp文件/index.html","56c5cac1b841a2c5529ab31602ea7567"],["F:/Blog/public/tags/index.html","c088f06ef4cd36b7877772f0e53022df"],["F:/Blog/public/tags/mysql/index.html","ed9dbaa85a06f62448af1f2040220a35"],["F:/Blog/public/tags/python/index.html","856b96a81b168d1348e78ace3dc4e7e8"],["F:/Blog/public/tags/python/page/2/index.html","0128165f4a4bb048974de6c1476457c7"],["F:/Blog/public/tags/python/page/3/index.html","8f690a1f41efd5b548bb7da8559b773e"],["F:/Blog/public/tags/queue库/index.html","012f56f7c5db5496bc93eed5aaf59046"],["F:/Blog/public/tags/requests/index.html","8923fb1d188ca83741c7fca863859be9"],["F:/Blog/public/tags/ssh/index.html","41ca6e8652c414f85a2bdc5ac651417d"],["F:/Blog/public/tags/threading库/index.html","4631fcadc00c40eca9df771948f4da3d"],["F:/Blog/public/tags/thread库/index.html","3ba53d39f0a68db669c7fd5fb541690c"],["F:/Blog/public/tags/uWSGI/index.html","25f566b8d6bc94a15c86f7ea3e498250"],["F:/Blog/public/tags/二分查找/index.html","1caa240d3c47604d986f5ae3212f18cf"],["F:/Blog/public/tags/二叉树/index.html","82e8a1bbd1e612967268a389faf262dd"],["F:/Blog/public/tags/冒泡排序/index.html","f1fd642e14661bc38d2cecec255459bf"],["F:/Blog/public/tags/函数/index.html","df767d6d1a3073783b81aab721cb268c"],["F:/Blog/public/tags/图床工具/index.html","b863344339f49902dd18ea438eecb7c6"],["F:/Blog/public/tags/图片/index.html","f35a0723c1a7c9b9228621b862b25056"],["F:/Blog/public/tags/基数排序/index.html","840d814d24c6bcbe7e7572a17876d5ea"],["F:/Blog/public/tags/基础入门/index.html","2a7afef0312f3e6ec7243a5aa2e94ec2"],["F:/Blog/public/tags/堆排序/index.html","2f132175ec87fd807ad03cf8b5beffc9"],["F:/Blog/public/tags/多线程/index.html","b6571573374010ebab577eb32de08080"],["F:/Blog/public/tags/字符串/index.html","934bd8dd3b58f4ec5d6c1e262090549f"],["F:/Blog/public/tags/对象/index.html","7f47056227fb957a18af5266b331f6ac"],["F:/Blog/public/tags/希尔排序/index.html","af5f44978cfb386e6738261dd457812c"],["F:/Blog/public/tags/归并排序/index.html","0e8c0ef7dff3dd4eb8a151cbd44c309f"],["F:/Blog/public/tags/快速排序/index.html","f43b0aa6284da322fb8789fe70ef0bb5"],["F:/Blog/public/tags/指针/index.html","c0ce3c8b39e729cb2219d64c5b4c6802"],["F:/Blog/public/tags/排序算法/index.html","8df9fb35eae7eb6ee867ed0bcd4ddec8"],["F:/Blog/public/tags/排序算法/page/2/index.html","a1ac43a8f566820a545a8b42729f279d"],["F:/Blog/public/tags/插入排序/index.html","db3538e167c858aeeb8fb1a7fb4013d4"],["F:/Blog/public/tags/数据类型/index.html","09d589b812dae5b24faf38eb8a9df96c"],["F:/Blog/public/tags/数组/index.html","9cd82bc146d04d50d0c9478970b9c5b0"],["F:/Blog/public/tags/文件I-O/index.html","ff604d41c113ffe39fb37b96c8f41d0b"],["F:/Blog/public/tags/文件操作/index.html","6ef1e3d1c120f17a190d8a589ba03963"],["F:/Blog/public/tags/斐波那契数列/index.html","90176d2ed2fe8d35fb0b2233d63f3029"],["F:/Blog/public/tags/服务器/index.html","5ee5c2d172e0716c6e5aab8cd9f61465"],["F:/Blog/public/tags/查找/index.html","6913f0cb235d78aca790e89f34e80382"],["F:/Blog/public/tags/栈/index.html","a7636aa91099b4c0da40ef59b0fd551a"],["F:/Blog/public/tags/桶排序/index.html","6fd420f7d722e797808a152b3c773790"],["F:/Blog/public/tags/正则表达式/index.html","92575059b57ab83203279a76930409fd"],["F:/Blog/public/tags/爬虫/index.html","395385c7ffa626d5b94592671188e636"],["F:/Blog/public/tags/猴子排序/index.html","ab6595e44b74f55e933bc72b91c16a7a"],["F:/Blog/public/tags/珠排序/index.html","3b89c8d5bf5a3bca66a575a6ff3db23a"],["F:/Blog/public/tags/睡觉排序/index.html","6397c505946d6ae5cfd4856f16ffb4f0"],["F:/Blog/public/tags/矩阵/index.html","b112cb25f6f81d3503b972c183243a53"],["F:/Blog/public/tags/程序流程结构/index.html","26589e6a1563bb6fdbd023642187fa1e"],["F:/Blog/public/tags/类/index.html","d7885c856878ce6dfbb3759c0a55f06e"],["F:/Blog/public/tags/线程锁/index.html","d6b7dd18d3b1900e743fee5d0189f8e3"],["F:/Blog/public/tags/结构体/index.html","dee41a3624ab4abf8332a31eb192c298"],["F:/Blog/public/tags/编程基础/index.html","1f72e5b2f4113ab5ee0a568b287d9a0f"],["F:/Blog/public/tags/装饰器/index.html","69163e9b007d0bcfcebc3864bf6275f0"],["F:/Blog/public/tags/计数排序/index.html","f78c80df915935b69ca885440e359cd6"],["F:/Blog/public/tags/运算符/index.html","c48ba31b13a7e501d596c8201baf31cb"],["F:/Blog/public/tags/选择排序/index.html","d3006f7055b0ad0b0c0240ec84637810"],["F:/Blog/public/tags/递归/index.html","5f07ce8126e44e9c5df8ff05cef9041f"],["F:/Blog/public/tags/链表/index.html","55d5c6f70d9c0bbb835d6d038f5b23df"],["F:/Blog/public/tags/闭包/index.html","824284305224d64b90f12ac3d7dbfb15"],["F:/Blog/public/tags/队列/index.html","303060cad205ab41e558a62cbfa45554"],["F:/Blog/public/tags/阿里云/index.html","e4bc74cec558985a83feaad835082302"],["F:/Blog/public/tags/项目实战/index.html","3fbd64b544697e920934b5a7f478d10a"],["F:/Blog/public/tags/项目部署/index.html","3e44186f54d47ad66d468c1e0deaf1e6"]];
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







