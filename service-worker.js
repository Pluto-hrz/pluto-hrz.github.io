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

var precacheConfig = [["F:/Blog/public/2020/03/07/hello-world/index.html","8da3c088b676020b8a24d24fbfb481b4"],["F:/Blog/public/2020/03/08/1、设置用户和组/index.html","ebe40f7c3ebd3c9395f5d97d55f4d158"],["F:/Blog/public/2020/03/08/2、设置登录证书/index.html","97b0071d39c60ee3254760bea1abdec5"],["F:/Blog/public/2020/03/08/3、设置防火墙和端口/index.html","d1f14a22f26be1740f3b183aad379298"],["F:/Blog/public/2020/03/08/4、安装数据库/index.html","ded035d033918e152737b2730dae0861"],["F:/Blog/public/2020/03/08/5、安装python3/index.html","5fbc485951a1a80ca8d8606530668490"],["F:/Blog/public/2020/03/08/6、安装测试Django/index.html","991e444482e288f642ebbe37041fd3fe"],["F:/Blog/public/2020/03/08/7、配置Django项目/index.html","023704cb43dc56236b3b1372f6e8bc33"],["F:/Blog/public/2020/03/08/8、设置Nginx和uWSGI/index.html","a88c74a290d3813ddbfe4711bc3fda8f"],["F:/Blog/public/2020/03/10/Request库/index.html","6fb0378e7562918ae73833ae24a542bb"],["F:/Blog/public/2020/03/15/BeautifulSoup库/index.html","16502998a01659bd19e06dd3e30f3d8a"],["F:/Blog/public/2020/04/05/C++ 初始/index.html","1bb214e8c913d2e5e3a57ac0c53b1dad"],["F:/Blog/public/2020/04/12/C++ 数据类型/index.html","b056a829960cd50cc28d4e4621e3da56"],["F:/Blog/public/2020/04/19/C++ 运算符/index.html","58b545b93fc2478d4801dc244647cee9"],["F:/Blog/public/2020/04/26/C++ 程序流程结构/index.html","d638391813a4b0c849b391451d935b52"],["F:/Blog/public/2020/05/03/C++ 数组/index.html","3379244dbb9f56f2c0a3cfcc0eead09d"],["F:/Blog/public/2020/05/10/C++ 函数/index.html","8eb3f72509435da911937296d1939e3b"],["F:/Blog/public/2020/05/17/C++ 指针/index.html","d56ba45566bd9150513e76d18345007c"],["F:/Blog/public/2020/05/24/C++ 结构体/index.html","bc429193e6f7cbe4453b9f3acbd1f9bb"],["F:/Blog/public/2020/07/21/二维数组中的查找/index.html","8e2db1543e55ba2e6ea58f75e1f08f8e"],["F:/Blog/public/2020/07/21/空格替换/index.html","6a39298d85e2e4cb35be7ee23ed25f20"],["F:/Blog/public/2020/07/22/从未到头打印链表/index.html","375578b969e527d2449ebf3becfa4acb"],["F:/Blog/public/2020/07/22/用两个栈实现队列/index.html","27114c4a472ec5d912d202427d143dcd"],["F:/Blog/public/2020/07/22/重建二叉树/index.html","22b0b2e59efd0592ce8ac65001585aa2"],["F:/Blog/public/2020/07/23/Python-正则表达式/index.html","8e3f03e82f90b2f89776cdbcaedba564"],["F:/Blog/public/2020/07/23/变态跳台阶/index.html","1dc37459314cdd214af35a8bc6a5caf1"],["F:/Blog/public/2020/07/23/旋转数组的最小数字/index.html","a3ff42fa4342db5de6e4cbf5b50c1e30"],["F:/Blog/public/2020/07/23/跳台阶/index.html","32d1b0ca0da114b3a9545b8e2eb50e73"],["F:/Blog/public/2020/07/26/数值的整数次方/index.html","4ea0572981392bf862e15fd18274c1ec"],["F:/Blog/public/2020/07/29/Python-QQ空间模拟登陆/index.html","bf1f1ea7f4033bfa35729defb02e816f"],["F:/Blog/public/2020/07/29/Python-文件I-O/index.html","680d729cde57dc133dd5907a48aab782"],["F:/Blog/public/2020/07/29/Python-爬取QQ空间相册/index.html","c4c379e777b85b04b08483ac29bc9ecc"],["F:/Blog/public/2020/07/29/Python-爬取东北大学高数题库/index.html","602f8188c683aab41665b75d6a60b3f4"],["F:/Blog/public/2020/07/29/Python-爬取山东大学医学题库/index.html","6e45405cde73f354d2036ea7483dccfd"],["F:/Blog/public/2020/07/30/Python-多线程/index.html","61be821a6cc353d13a1b62b08cdc1879"],["F:/Blog/public/2020/07/31/好用的图床上传工具-Picgo/index.html","4c037b879260c7ea92bd841d62911912"],["F:/Blog/public/archives/2020/03/index.html","d82cfcc6ae9025d8cb74dcbaf6380acc"],["F:/Blog/public/archives/2020/03/page/2/index.html","0c45fbca24434c94ea9f008cedf88337"],["F:/Blog/public/archives/2020/04/index.html","a52facb9c952b0f2e4ae4c8489992499"],["F:/Blog/public/archives/2020/05/index.html","0cebb8eb032a5906cc9fb87b86a5e7d0"],["F:/Blog/public/archives/2020/07/index.html","396cda1abaa4159bc908307a675cbe4f"],["F:/Blog/public/archives/2020/07/page/2/index.html","87944160785089db4c842ae65633e9e0"],["F:/Blog/public/archives/2020/index.html","fba436e11f56c1cf069d250813e5e6ab"],["F:/Blog/public/archives/2020/page/2/index.html","fb813e97a3b718d7ebf2a61288e5e55d"],["F:/Blog/public/archives/2020/page/3/index.html","612336a4114bdd9442e3749b6e00cdb9"],["F:/Blog/public/archives/2020/page/4/index.html","2545b1a65f1a1ae29b7d3d8f65389b86"],["F:/Blog/public/archives/index.html","97173af0707e72392e37a906ab1e572d"],["F:/Blog/public/archives/page/2/index.html","a2b8f5ef79c1e54d276829552ac92a40"],["F:/Blog/public/archives/page/3/index.html","cd73d52289b52e4d125ef696d357dd46"],["F:/Blog/public/archives/page/4/index.html","618154583ceecf0502d9274c498fcd3a"],["F:/Blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/Blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/Blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/Blog/public/categories/Algorithm/index.html","1eb84e379f74e0f2f92ee5954d7cfddb"],["F:/Blog/public/categories/Algorithm/二叉树/index.html","df5d48c1ac3d7d95925dcdd477e82fc7"],["F:/Blog/public/categories/Algorithm/字符串/index.html","212dd9c08ba7213946e9ddbb369348db"],["F:/Blog/public/categories/Algorithm/数组/index.html","67d04a327518e12cc6ffd32a894c41c3"],["F:/Blog/public/categories/Algorithm/斐波那契数列/index.html","a47c301d06026957fce91bf91287ea98"],["F:/Blog/public/categories/Algorithm/栈/index.html","c34ede0210ce5c76f6f3c3b1a09d5bd1"],["F:/Blog/public/categories/Algorithm/次方运算/index.html","39644a5d00dbf4caada9fd735cda0a5b"],["F:/Blog/public/categories/Algorithm/链表/index.html","f9d981e009cff3a825dd1351f372e34c"],["F:/Blog/public/categories/C/index.html","dc4f71ee9a22c8f96d1ee9c5e1b06852"],["F:/Blog/public/categories/C/基础入门/index.html","89b4a81d6fa339bc54e15a19d7575e7c"],["F:/Blog/public/categories/Hexo/index.html","8c3af35154658dc43f3d664e35db61fe"],["F:/Blog/public/categories/Picgo/index.html","6ae2f4cf8b416f3d2e8db06c6a83f6b3"],["F:/Blog/public/categories/Python/Django/index.html","6948b26267e851dd71f6e85d7e8cfdf9"],["F:/Blog/public/categories/Python/Django/项目部署/index.html","7762b4509ebe2fd883b661b01aa3917f"],["F:/Blog/public/categories/Python/index.html","6633762b16403b819e0516bcd0a1baff"],["F:/Blog/public/categories/Python/page/2/index.html","8f42676632146f7e5d21d8bf882d668b"],["F:/Blog/public/categories/Python/基础入门/index.html","c118c9252b2ff58adc087b6aaa231e7d"],["F:/Blog/public/categories/Python/爬虫学习/index.html","b88d5101a768d3db8dd88773342bc191"],["F:/Blog/public/categories/Python/高级进阶/index.html","6afc4a4fc90a8461b5b4d13452dd87b9"],["F:/Blog/public/categories/index.html","aa75c679c28e837284a04358572d7263"],["F:/Blog/public/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["F:/Blog/public/css/index.css","0ad56b840d121f299eff10fe452b875a"],["F:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/Blog/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["F:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["F:/Blog/public/img/alipay.jpg","8fb31a1080def0faaded06df4ead3d5f"],["F:/Blog/public/img/avatar.png","d67ee41c6e812d7c25018a20f9717692"],["F:/Blog/public/img/avatar_pre.png","c291715561b777d5601df42b8d8fc791"],["F:/Blog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["F:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/Blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/Blog/public/img/wechat.jpg","b04f4382ac98f36e70836a99377e4708"],["F:/Blog/public/index.html","805b306e8e91c0a8320a346c724bf378"],["F:/Blog/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["F:/Blog/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/Blog/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/Blog/public/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["F:/Blog/public/page/2/index.html","be83c630b4c61a1243d6d5c75f0eea68"],["F:/Blog/public/page/3/index.html","1366ce09a6b6e162f957f5276d513dc1"],["F:/Blog/public/page/4/index.html","55843355fd96d8b57ab7c5db8444693f"],["F:/Blog/public/tags/Algorithm/index.html","fcaed7da1c3b35ad1b4ab91094b3997b"],["F:/Blog/public/tags/BeautifulSoup/index.html","45463d57e6fd8a884c603d9c763de783"],["F:/Blog/public/tags/C/index.html","49cd45e996bc32882a462f061951475b"],["F:/Blog/public/tags/Django/index.html","f4838bfd87ced94fcdecc04706e47e22"],["F:/Blog/public/tags/File/index.html","f0c1fbf6c33aa2a47de8133108e1b959"],["F:/Blog/public/tags/GIL全局解释器锁/index.html","1951732ab5e4ed43885dab9bf575d797"],["F:/Blog/public/tags/Hello-World/index.html","0564e6483dade1aabbaa4ab5f4cfddad"],["F:/Blog/public/tags/Markdowm/index.html","f6d534dc35348507a604fe80a67611db"],["F:/Blog/public/tags/Nginx/index.html","d73e30b8caaf8e484aad955f9f447b69"],["F:/Blog/public/tags/Picgo/index.html","24f58adfd095b4fe2267bec5448c17cd"],["F:/Blog/public/tags/QQ空间/index.html","2027c6e5de9807b060d031242574a360"],["F:/Blog/public/tags/Re库/index.html","8ed3b371a850d197f29bf3e76e950fc2"],["F:/Blog/public/tags/SFTP/index.html","922bdd3fa59020f79eb64aa7d61226e5"],["F:/Blog/public/tags/Typora/index.html","255aa15be3b4058efaee4073ff1761d2"],["F:/Blog/public/tags/index.html","e9ef6f050aa7c69da1485b868c65ccdc"],["F:/Blog/public/tags/mysql/index.html","068138fb6682263a67b32d2c19a948d8"],["F:/Blog/public/tags/python/index.html","e7fec598acd0588b79e174e4888ecf14"],["F:/Blog/public/tags/python/page/2/index.html","bb066f1d55a07b3663fdf185d6dc2807"],["F:/Blog/public/tags/python/page/3/index.html","e96dc2d49989d530b48437428ba3bd41"],["F:/Blog/public/tags/queue库/index.html","11f0b4e1829988bd8f1ad00a22eb7866"],["F:/Blog/public/tags/requests/index.html","dfb70c5c33a5d9c0b512b7a7c8ac3a1f"],["F:/Blog/public/tags/ssh/index.html","421e5b5c4495c1fdbface125f4d1250f"],["F:/Blog/public/tags/threading库/index.html","947384ce00ebf121c473d15062863755"],["F:/Blog/public/tags/thread库/index.html","961a2fe003d317f679770a25ba1a6e8d"],["F:/Blog/public/tags/uWSGI/index.html","5b10485c794650c6f4436f253dcb43b9"],["F:/Blog/public/tags/二分查找/index.html","7cfe194d4654b361de97263629c2be92"],["F:/Blog/public/tags/二叉树/index.html","2079c0337cf82524f0d7ed79bf73c921"],["F:/Blog/public/tags/函数/index.html","98e0f0daed095fac2aa7152cd5ca42ce"],["F:/Blog/public/tags/图床工具/index.html","e19130a887e14c68a2e1f85f983fc6b0"],["F:/Blog/public/tags/基础入门/index.html","515d14e228644bd4bc1ae6414ad456be"],["F:/Blog/public/tags/多线程/index.html","7f67ef001dcd1ef6145528515916c046"],["F:/Blog/public/tags/字符串/index.html","1c16a2fd3bbd3904a0b70f46abf1ab25"],["F:/Blog/public/tags/指针/index.html","d40089de039bd71ddee67752d8f99df4"],["F:/Blog/public/tags/数据类型/index.html","66aa7e76d66b0ea3201e9c2bca0f8827"],["F:/Blog/public/tags/数组/index.html","2f3a21250930cac008900c1b94cc494d"],["F:/Blog/public/tags/文件I-O/index.html","185f45616c0d128efcbb081f8ab35fd8"],["F:/Blog/public/tags/斐波那契数列/index.html","1811b7bc14f2897b659e788d86bda023"],["F:/Blog/public/tags/服务器/index.html","def7ffad057b35f81e7e797adf8f4e7e"],["F:/Blog/public/tags/查找/index.html","357465f0cb32fe6df74e4ee677c575d0"],["F:/Blog/public/tags/栈/index.html","4cdb068352ab4518df42d532a3575035"],["F:/Blog/public/tags/正则表达式/index.html","9d07e24e03f55e222c63796fc1bd9e4c"],["F:/Blog/public/tags/爬虫/index.html","3622422a5c1cec30337de16e508f73e0"],["F:/Blog/public/tags/矩阵/index.html","d684ca32527c23a555ba902b0082ed3d"],["F:/Blog/public/tags/程序流程结构/index.html","b0b8102a48a2c9523859a521f7f5e1bd"],["F:/Blog/public/tags/线程锁/index.html","762371236af740052d63148987842d60"],["F:/Blog/public/tags/结构体/index.html","d39c71cb35ddbf603957a5e27501a717"],["F:/Blog/public/tags/编程基础/index.html","49fb3367bbafe88331f583adb800f10d"],["F:/Blog/public/tags/运算符/index.html","26a9b981be0aa2d28543ec42391add9a"],["F:/Blog/public/tags/递归/index.html","7c587aa48a979a3ef8354f2fea55b9ee"],["F:/Blog/public/tags/链表/index.html","12c5665f4af1df2b2a10390a11286f08"],["F:/Blog/public/tags/队列/index.html","834b2a08b78f9cafe2ac1e35bc04278e"],["F:/Blog/public/tags/阿里云/index.html","ce360e291c5074940ddbdafb04ff6514"],["F:/Blog/public/tags/项目实战/index.html","c45ff79c6b1ea690918e7b135c93063d"],["F:/Blog/public/tags/项目部署/index.html","fc7fde03ccd2366ec915b6710762fd05"]];
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







