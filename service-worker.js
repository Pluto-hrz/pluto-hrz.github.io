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

var precacheConfig = [["F:/Blog/public/2020/03/07/hello-world/index.html","a00c7b129a8f1af1bdaadf9c0ed3cecb"],["F:/Blog/public/2020/03/08/1、设置用户和组/index.html","4a5a5563c138b22129d2481a64a235e2"],["F:/Blog/public/2020/03/08/2、设置登录证书/index.html","114dd5c8c38278bc26c742121a8af8ae"],["F:/Blog/public/2020/03/08/3、设置防火墙和端口/index.html","1d008e3c0f25d9d8874298e76e8050c3"],["F:/Blog/public/2020/03/08/4、安装数据库/index.html","d3452c52a7a7d5adce4990c3bf52688e"],["F:/Blog/public/2020/03/08/5、安装python3/index.html","6834a55e6240815a3a66604bbe0c57a5"],["F:/Blog/public/2020/03/08/6、安装测试Django/index.html","d0947838e1580dde3555cf9c594ae7e1"],["F:/Blog/public/2020/03/08/7、配置Django项目/index.html","00318371427b236c3616eb48498fa9d0"],["F:/Blog/public/2020/03/08/8、设置Nginx和uWSGI/index.html","93fb2699e0139fce648a981753f0669a"],["F:/Blog/public/2020/03/10/Request库/index.html","294c2fd3e426a78fdc58a7a0ff733005"],["F:/Blog/public/2020/03/15/BeautifulSoup库/index.html","00fa4c38ccff48c8bacb405c1fde4557"],["F:/Blog/public/2020/04/04/Cookie与Session/index.html","c44a9c6fcdb692f942d3dd4efe04c428"],["F:/Blog/public/2020/04/04/HTTP协议与HTTPS协议/index.html","a6364816dec903335212e8107f561974"],["F:/Blog/public/2020/04/05/C++ 初始/index.html","56e41d2267818a4a24d0c1f604e8e32a"],["F:/Blog/public/2020/04/05/Python-函数装饰器/index.html","c802c021990708705ba19efb3f2420ca"],["F:/Blog/public/2020/04/06/冒泡排序/index.html","d8a99c17e83577c19dcd283dd9ae00bc"],["F:/Blog/public/2020/04/06/插入排序/index.html","c045e9468a1ba42fc789dedf7d47f548"],["F:/Blog/public/2020/04/11/快速排序/index.html","0155784a770471cff12071589c50513d"],["F:/Blog/public/2020/04/11/选择排序/index.html","4232382e3d32ab95de2698c5ddde2a5e"],["F:/Blog/public/2020/04/12/C++ 数据类型/index.html","748ebb936561206197aa42ca6c820d96"],["F:/Blog/public/2020/04/18/希尔排序/index.html","c50f605bce2edd5a1c9003e7f6eee4c5"],["F:/Blog/public/2020/04/18/归并排序/index.html","05248add237c9c667ed3c65dce981869"],["F:/Blog/public/2020/04/19/C++ 运算符/index.html","ce291981d170596e3ddb3a969915fe05"],["F:/Blog/public/2020/04/25/基数排序/index.html","d02115561700518fba946d9c52632f56"],["F:/Blog/public/2020/04/25/计数排序/index.html","9c74824a6ad62a6f69a989a011fd60ff"],["F:/Blog/public/2020/04/26/C++ 程序流程结构/index.html","ddbd7f61ebd995d2fea613c3f15fb207"],["F:/Blog/public/2020/05/01/堆排序/index.html","fd82f900b20317e6ba61d3907982dce3"],["F:/Blog/public/2020/05/01/桶排序/index.html","97f3351ab0c985ee9d5df649da95b278"],["F:/Blog/public/2020/05/02/珠排序/index.html","053677ef5a564f316cd5d7553400f3cf"],["F:/Blog/public/2020/05/02/睡眠排序/index.html","9ff05dc1730da58a6bd3ca3b04fae988"],["F:/Blog/public/2020/05/03/C++ 数组/index.html","7bf79d42729d085ec592c7d4acc2b325"],["F:/Blog/public/2020/05/04/猴子排序/index.html","805593e55312d704d8143f090a1e793b"],["F:/Blog/public/2020/05/10/C++ 函数/index.html","5471533aaf8c8b1a5e3275b5a07b318b"],["F:/Blog/public/2020/05/17/C++ 指针/index.html","1b3788cdd172ece090e03661a336f060"],["F:/Blog/public/2020/05/24/C++ 结构体/index.html","af701dbe678e525ffff5c992a92b8c35"],["F:/Blog/public/2020/07/21/二维数组中的查找/index.html","e7e6bdd0db627bc939876129586c6a0c"],["F:/Blog/public/2020/07/21/空格替换/index.html","9912bae30d79447acb2029014d9b6795"],["F:/Blog/public/2020/07/22/从未到头打印链表/index.html","23595405a5cab1e1638ac1daed7bdd35"],["F:/Blog/public/2020/07/22/用两个栈实现队列/index.html","b9f32f461806dbdb97be04591d2203a8"],["F:/Blog/public/2020/07/22/重建二叉树/index.html","49071b65970fb96a407eb4c4f94706ff"],["F:/Blog/public/2020/07/23/Python-正则表达式/index.html","0dc28abab056c17a02d407ce3c593097"],["F:/Blog/public/2020/07/23/变态跳台阶/index.html","257460bc95d3622837ce89494ac5db36"],["F:/Blog/public/2020/07/23/旋转数组的最小数字/index.html","d8d75d4245370e96093366c727332f8e"],["F:/Blog/public/2020/07/23/跳台阶/index.html","0ebadcee38661a9b4b73c8339e2b43be"],["F:/Blog/public/2020/07/26/数值的整数次方/index.html","f77b843bbe053045df3c900fc721ff4f"],["F:/Blog/public/2020/07/29/Python-QQ空间模拟登陆/index.html","567632d966a2e30dbced2f893d4de27d"],["F:/Blog/public/2020/07/29/Python-文件I-O/index.html","9356d05bc7d87972d3f955541deea1d5"],["F:/Blog/public/2020/07/29/Python-爬取QQ空间相册/index.html","9383477f6a5f1e5d0d91cb7d9688f066"],["F:/Blog/public/2020/07/29/Python-爬取东北大学高数题库/index.html","b8ddc3ef223a296eeea09068f66f40b7"],["F:/Blog/public/2020/07/29/Python-爬取山东大学医学题库/index.html","93f69bfb2c0fba23ebfa340cd68300da"],["F:/Blog/public/2020/07/30/Python-多线程/index.html","1d3aecb01f270e2d7582f0d9f5b70779"],["F:/Blog/public/2020/07/31/好用的图床上传工具-Picgo/index.html","3e04696249fc852f4c39a0b907b71aaf"],["F:/Blog/public/2020/09/04/C++对bmp文件操作/index.html","845bfa5f2f4e550aa4a23120b3e32e07"],["F:/Blog/public/2020/09/10/Python-发送短信/index.html","d70b04ca4f1163f1f751226bbb950e77"],["F:/Blog/public/2020/09/11/Python-发送邮件/index.html","52da5a3065bd72ad19c760aac9c0eba7"],["F:/Blog/public/2020/09/12/jieba库/index.html","3614cef3510981c2d33bc1b4bd329f84"],["F:/Blog/public/2020/09/13/王者荣耀英雄皮肤爬取/index.html","c6c3828721988ca4cd79a489d5955385"],["F:/Blog/public/2020/09/13/网页高频字词分析/index.html","ec335376fa61c0147832a586ce931a0d"],["F:/Blog/public/2020/09/14/wordcloud库/index.html","6879a243e426971f91f1dbd84573b60f"],["F:/Blog/public/2020/09/15/Python-英汉互译/index.html","b12ec1ad85ce43c524727e55928064e9"],["F:/Blog/public/archives/2020/03/index.html","315a146413a851ea953a1328c817aaf4"],["F:/Blog/public/archives/2020/03/page/2/index.html","6754e172dc6c4091d2a4773f12d6fa5c"],["F:/Blog/public/archives/2020/04/index.html","a80a855d0323968e23a994d547b1ee57"],["F:/Blog/public/archives/2020/04/page/2/index.html","f8234eb1ab1de7749bce7bcf6e8a4f6c"],["F:/Blog/public/archives/2020/05/index.html","c58904a8fda7c769941edb5f8ae1fc8a"],["F:/Blog/public/archives/2020/07/index.html","7466e38e672d169db639e5d136111dd5"],["F:/Blog/public/archives/2020/07/page/2/index.html","2dc89faed0751d1b528f54d18c8263ed"],["F:/Blog/public/archives/2020/09/index.html","8f5c5b0de39a613a6f5a82fd0c46bb0a"],["F:/Blog/public/archives/2020/index.html","7f535a80d3507cae7b25cc2cbe7fd962"],["F:/Blog/public/archives/2020/page/2/index.html","dfd5863e862e3b9e579e04ffbce4da2a"],["F:/Blog/public/archives/2020/page/3/index.html","eaead9be295252de51e9c84e5b32e6ff"],["F:/Blog/public/archives/2020/page/4/index.html","1499036516bb381be24e7daf8714740a"],["F:/Blog/public/archives/2020/page/5/index.html","04cc396e1cb8d1f8a7e4efce38fad7e8"],["F:/Blog/public/archives/2020/page/6/index.html","44a8dcbbd080c909e28ade9f2810d42d"],["F:/Blog/public/archives/index.html","a22b1b8efa914b1edc2bd40ef3d09293"],["F:/Blog/public/archives/page/2/index.html","d7aa2b13e272bd217a05b3efd0663cf9"],["F:/Blog/public/archives/page/3/index.html","9754cb6e0cbe896142057398cf43d991"],["F:/Blog/public/archives/page/4/index.html","86f060678a4a36eb9bfcbed0a6378ee6"],["F:/Blog/public/archives/page/5/index.html","13a67f602d5e8a27f36d9cdcf50df5d1"],["F:/Blog/public/archives/page/6/index.html","64fafa033433b9a9ddbad08014f6938f"],["F:/Blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/Blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/Blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/Blog/public/categories/Algorithm/index.html","b6de2440e3a16e6b5171d7417a8ec9af"],["F:/Blog/public/categories/Algorithm/page/2/index.html","22a88dba35bd6ecfde0ffa86eb4d42a3"],["F:/Blog/public/categories/Algorithm/page/3/index.html","3eb4debbea674869091e61a85ab32683"],["F:/Blog/public/categories/Algorithm/二叉树/index.html","081953e54e39bd830a26074e148f0b2e"],["F:/Blog/public/categories/Algorithm/字符串/index.html","9ab1a3fb1f83b51e6103ca58cd45b575"],["F:/Blog/public/categories/Algorithm/排序算法/index.html","5ff812fc0ca58307de6aa62a02f892c9"],["F:/Blog/public/categories/Algorithm/排序算法/page/2/index.html","6d1f178b96a18042bdd6a3a5bf55a160"],["F:/Blog/public/categories/Algorithm/数组/index.html","03025d4f52af7ac49a9152a8ac0e35a3"],["F:/Blog/public/categories/Algorithm/斐波那契数列/index.html","7a97e05d0dc4d4687c0f1d060104e899"],["F:/Blog/public/categories/Algorithm/栈/index.html","5c87a97fa79fc894a0303f5517e6ef55"],["F:/Blog/public/categories/Algorithm/次方运算/index.html","a330c6d95bc34db7a19c2c57adfcbec4"],["F:/Blog/public/categories/Algorithm/链表/index.html","70db4e8f2ccadcb05ab1fca97645a144"],["F:/Blog/public/categories/C/index.html","274b9c333548fff9ed776797926b8a6b"],["F:/Blog/public/categories/C/基础入门/index.html","17fd67a6b5bcb41f69fe53a1a95a2ee8"],["F:/Blog/public/categories/C/课程设计/index.html","9f8e38d198eb3f1cac1f409c99705776"],["F:/Blog/public/categories/Hexo/index.html","ddb06906d0241c0b9b80ab911bfac321"],["F:/Blog/public/categories/Picgo/index.html","f6cf5cc236a633e4db7192f23fa1559b"],["F:/Blog/public/categories/Python/API调用/index.html","429dc296291e1c7d08b2c785a81511ae"],["F:/Blog/public/categories/Python/Django/Web开发/index.html","ce7cf066ce1506f55da2bc836b35fbc5"],["F:/Blog/public/categories/Python/Django/index.html","9730972b6b0643f9cc7c397b4b54069f"],["F:/Blog/public/categories/Python/Django/项目部署/index.html","7e255126e897b51daac910f7be384056"],["F:/Blog/public/categories/Python/index.html","0afe596c620e7b89621afd4c41b97320"],["F:/Blog/public/categories/Python/page/2/index.html","e269b186a58e10b8597d985a4dc27e18"],["F:/Blog/public/categories/Python/page/3/index.html","50c3647cffdc0e48a68e9e5ec38e7b0e"],["F:/Blog/public/categories/Python/基础入门/index.html","083283beaa9f2045e1ebe97eee0321d8"],["F:/Blog/public/categories/Python/爬虫学习/index.html","3b19bdb0dd2beff656f666f3d161e074"],["F:/Blog/public/categories/Python/高级进阶/index.html","d5c02788b661d85968e741f5623e0b62"],["F:/Blog/public/categories/index.html","b0a5e0d58e641651da307afb0669afdc"],["F:/Blog/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["F:/Blog/public/css/index.css","0ad56b840d121f299eff10fe452b875a"],["F:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/Blog/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["F:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["F:/Blog/public/img/alipay.jpg","8fb31a1080def0faaded06df4ead3d5f"],["F:/Blog/public/img/avatar.png","d67ee41c6e812d7c25018a20f9717692"],["F:/Blog/public/img/avatar_pre.png","c291715561b777d5601df42b8d8fc791"],["F:/Blog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["F:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/Blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/Blog/public/img/wechat.jpg","b04f4382ac98f36e70836a99377e4708"],["F:/Blog/public/index.html","fa72058656014667dffa9ec9732d6874"],["F:/Blog/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["F:/Blog/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/Blog/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/Blog/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["F:/Blog/public/page/2/index.html","28f1d9f23e7a589d99f977b0f4335d6c"],["F:/Blog/public/page/3/index.html","21b620c895469a2c92cdf5ff308f25ba"],["F:/Blog/public/page/4/index.html","2d3aff11e187714a7cc119e2fe6fd2c0"],["F:/Blog/public/page/5/index.html","c19287ceac17d7b1bbc254e84edb4b1a"],["F:/Blog/public/page/6/index.html","de4709a34c1688ee6cb14e931a3ac99b"],["F:/Blog/public/tags/Algorithm/index.html","9547a77be163cddf1fbe5c75ff790480"],["F:/Blog/public/tags/Algorithm/page/2/index.html","ed8d38bcc352261ce6a49a5a78ecd592"],["F:/Blog/public/tags/Algorithm/page/3/index.html","63e408c07155559d1e4efcf84c788f62"],["F:/Blog/public/tags/BeautifulSoup/index.html","6f20916c906c24989cd4ed30e9a5e29c"],["F:/Blog/public/tags/C/index.html","07188a35c94c1fdd29043e6f5a681c17"],["F:/Blog/public/tags/Cookie/index.html","0acf5c1bb7055380560f19bc6b646a85"],["F:/Blog/public/tags/Django/index.html","a60d90eb626c527804ac41c13ebcd05f"],["F:/Blog/public/tags/File/index.html","97a31a562de5d2485f212be5ad677175"],["F:/Blog/public/tags/GIL全局解释器锁/index.html","ce6bb25c3a3f89cf7fcae64f4ad1d9c1"],["F:/Blog/public/tags/HTTP/index.html","f5021160ca5106d3914966d350246e37"],["F:/Blog/public/tags/HTTPS/index.html","ee3a4de1c0bbce32f72316d1f243293f"],["F:/Blog/public/tags/Hello-World/index.html","07545255f384ecbf409138acc7f3feb6"],["F:/Blog/public/tags/Markdowm/index.html","04533d1256452353a8e29bc621aaf138"],["F:/Blog/public/tags/Nginx/index.html","75d886a7c727dbfb75745a8ad4eca4a7"],["F:/Blog/public/tags/Picgo/index.html","cd8b16f6cd763790dd33c9bf3cb25756"],["F:/Blog/public/tags/QQ空间/index.html","a35a2f7d1eb85fa52c61d683a8fe0752"],["F:/Blog/public/tags/Re库/index.html","a0501ab8e498b0fd93a949ed497cca9f"],["F:/Blog/public/tags/SFTP/index.html","9a54501c32e0de88e809d34feb3e30f8"],["F:/Blog/public/tags/SMTP/index.html","9b8e11c8a5933d08652e921cc5d52e9f"],["F:/Blog/public/tags/Session/index.html","1d195b96bcc597ce7f35252e051ff5f9"],["F:/Blog/public/tags/Twilio/index.html","9b960173c23e4d4275daeec1f4de77c9"],["F:/Blog/public/tags/Typora/index.html","95a0522bba529e9e8ba4cbddd34e6908"],["F:/Blog/public/tags/Web开发/index.html","f25ec9b245bbc7f5c709b0beda61d9ed"],["F:/Blog/public/tags/bmp文件/index.html","072ae7997ea0e0cc0477f8621b0323fd"],["F:/Blog/public/tags/index.html","5ef89fc3e9a3ea225821fffe34e461c6"],["F:/Blog/public/tags/jieba/index.html","0e90da3e7dffed81328e2766f9fc5416"],["F:/Blog/public/tags/jieba库/index.html","9a0c3eb7acb2c8d43df3f599c61da6c1"],["F:/Blog/public/tags/mysql/index.html","9601ba9a27d6a485f5eb96224db4bd34"],["F:/Blog/public/tags/python/index.html","fbca796cccba730badeb914449144ce7"],["F:/Blog/public/tags/python/page/2/index.html","56725e056f116bb5293b77da259da27b"],["F:/Blog/public/tags/python/page/3/index.html","c4d7236f36f880576cce3f7cc0bd860f"],["F:/Blog/public/tags/queue库/index.html","e9d9319e79959deaa35b5d3760bbead2"],["F:/Blog/public/tags/requests/index.html","ea330e3e22db8a9d88ab175f0a1d725b"],["F:/Blog/public/tags/ssh/index.html","99690d9c0578e3cadca5e310b27b1176"],["F:/Blog/public/tags/threading库/index.html","c2d560abb238b0d8121c6d46968c0471"],["F:/Blog/public/tags/thread库/index.html","b7880cfec75d2a87589806a34a106895"],["F:/Blog/public/tags/uWSGI/index.html","9854ac76c9065417fa4066a2370449c2"],["F:/Blog/public/tags/二分查找/index.html","1b319f0e52e5aee9657322d4bcd1c4c7"],["F:/Blog/public/tags/二叉树/index.html","de0b4aa96c64eb179896cf56c53d72f6"],["F:/Blog/public/tags/冒泡排序/index.html","079452c021479389ae991b0832d73e92"],["F:/Blog/public/tags/函数/index.html","5bb161d15932a2fed7c016c576734261"],["F:/Blog/public/tags/分析/index.html","f1cdd613ab9a2cb44b08ef110256f5d1"],["F:/Blog/public/tags/发送短信/index.html","057084745a278441d28e5194360f4007"],["F:/Blog/public/tags/发送邮件/index.html","2c0848f50a81769c7aa2ed27e3a0a091"],["F:/Blog/public/tags/图床工具/index.html","893e1ee15e197d15392bc87f713100a6"],["F:/Blog/public/tags/图片/index.html","e892799e7bd228543dbf34a0ab05d4da"],["F:/Blog/public/tags/基数排序/index.html","acc3ab45c7c03639c516e9a3024a7dbe"],["F:/Blog/public/tags/基础入门/index.html","f80d10abccc7f8a6766adb21d63c977b"],["F:/Blog/public/tags/堆排序/index.html","3e061ef52f60b49829fe7857c02f5492"],["F:/Blog/public/tags/多线程/index.html","e735e6bc477db2beb77075ed17480d98"],["F:/Blog/public/tags/字符串/index.html","5c5da5657dc71a15a3f8fd5c3f1fbf58"],["F:/Blog/public/tags/对象/index.html","8cfb7c4315c752ef15d1596e3c99295e"],["F:/Blog/public/tags/希尔排序/index.html","ccddcd0a6f463b215109e8803c54bea9"],["F:/Blog/public/tags/归并排序/index.html","f3acc294e561a5d1472651a0d3abd2e0"],["F:/Blog/public/tags/快速排序/index.html","5c0ec5fd1ddd19f3137b7693948b29c2"],["F:/Blog/public/tags/指针/index.html","c3a233913e42df25a9a36f6db208d6dc"],["F:/Blog/public/tags/排序算法/index.html","fb3a2228bb31c291b338a319e9b64c8c"],["F:/Blog/public/tags/排序算法/page/2/index.html","fa123d34b82a9193afb27da97b3d9f2c"],["F:/Blog/public/tags/插入排序/index.html","37dc16e020768b5e76f452afba4a113d"],["F:/Blog/public/tags/数据类型/index.html","eb0248fc81dd1eb61632774fe8275f73"],["F:/Blog/public/tags/数组/index.html","1c527849cfd4fd8b4d3ac5ab98717f62"],["F:/Blog/public/tags/文件I-O/index.html","1e21b169c35b58738f802d276ac1e933"],["F:/Blog/public/tags/文件操作/index.html","03a98982fc8712229bcc99e24840483d"],["F:/Blog/public/tags/斐波那契数列/index.html","5bb05c528f3b83a8f156238fd515ad86"],["F:/Blog/public/tags/服务器/index.html","e2f24956be2ad784c37877468368acec"],["F:/Blog/public/tags/查找/index.html","01a64e995590ae606226fa98c2072156"],["F:/Blog/public/tags/栈/index.html","0f01601eb8a058e6a3c2a05c5a7db7ea"],["F:/Blog/public/tags/桶排序/index.html","58d1d868b568277f654fabf57dea846b"],["F:/Blog/public/tags/正则表达式/index.html","49530984b17ffdd635d02c77685cb39f"],["F:/Blog/public/tags/爬虫/index.html","0f5ed409fa09404ac51c1ce692aa0d13"],["F:/Blog/public/tags/猴子排序/index.html","cf41dde9aa2806d242791225e72b62a8"],["F:/Blog/public/tags/王者荣耀/index.html","1c262c4a6d5ea5530ce0b7fcb267b138"],["F:/Blog/public/tags/珠排序/index.html","93688c829686bcf0d2ea80385acdbc2c"],["F:/Blog/public/tags/百度翻译/index.html","265f0b8f99214bc59ce22275ffb71bb0"],["F:/Blog/public/tags/睡觉排序/index.html","cf2587889d37c4a2bec30c0b366a351b"],["F:/Blog/public/tags/矩阵/index.html","30f66c3b3e1dc4c244a6e45dc71bc5cf"],["F:/Blog/public/tags/程序流程结构/index.html","114128ee8c9f8c538aa50d7fc62ba002"],["F:/Blog/public/tags/类/index.html","d4067ccbd67663c94cf18401fc120f4e"],["F:/Blog/public/tags/线程锁/index.html","9c366857fea90bb8f2b57220ae857092"],["F:/Blog/public/tags/结构体/index.html","7a5ed54481375622ec6e79f0a6d897f9"],["F:/Blog/public/tags/编程基础/index.html","7df62e2c5b231d3e78f2475bdc02b8ff"],["F:/Blog/public/tags/装饰器/index.html","15bd175a45ad0560e48e07b3b54e5ed9"],["F:/Blog/public/tags/计数排序/index.html","5c51598f9111edb478bfaea49cf21de8"],["F:/Blog/public/tags/运算符/index.html","31502f141744967f6f8f6488a8a49e36"],["F:/Blog/public/tags/选择排序/index.html","764197b8e4961a2b8e699ce4d31b68c6"],["F:/Blog/public/tags/递归/index.html","76b95220d725a8d54abd8f693f47552e"],["F:/Blog/public/tags/链表/index.html","cb212b5fab743ebc1ab9b554b61fd663"],["F:/Blog/public/tags/闭包/index.html","82c0d542c6d056e17a8366b35284513b"],["F:/Blog/public/tags/队列/index.html","5065b6e9e55b6d376d5eb3fff1903d4b"],["F:/Blog/public/tags/阿里云/index.html","ec6c574a96b2128474af836b45a7f268"],["F:/Blog/public/tags/项目实战/index.html","cd26729285c321234e3e553aee5030e6"],["F:/Blog/public/tags/项目部署/index.html","f5ec41310d2cfbcbc001c63615efa06c"]];
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







