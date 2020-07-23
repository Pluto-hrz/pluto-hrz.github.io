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

var precacheConfig = [["F:/Blog/public/2020/03/07/hello-world/index.html","ee47f8df1dbe7ce5ed1e10ddf76a9386"],["F:/Blog/public/2020/03/08/1、设置用户和组/index.html","88601d6442200ad1442f10f015608227"],["F:/Blog/public/2020/03/08/2、设置登录证书/index.html","6eb0a1d195271341a22e31a0b4e4374f"],["F:/Blog/public/2020/03/08/3、设置防火墙和端口/index.html","6891278632ea5e2f899fd6b2d98c023f"],["F:/Blog/public/2020/03/08/4、安装数据库/index.html","9e25d4178483434052f89004d258d5e7"],["F:/Blog/public/2020/03/08/5、安装python3/index.html","082c92793ed4c77c90e77cc976cf4c4b"],["F:/Blog/public/2020/03/08/6、安装测试Django/index.html","5bd1f9a39807298fbb008192dfeadcb1"],["F:/Blog/public/2020/03/08/7、配置Django项目/index.html","83869219bb74c20877d2c96cb4eb40b1"],["F:/Blog/public/2020/03/08/8、设置Nginx和uWSGI/index.html","7f279824f9243825d38d9e65ebcf66f1"],["F:/Blog/public/2020/03/10/Request库/index.html","101702751872eece2cbf49e3745651f4"],["F:/Blog/public/2020/03/15/BeautifulSoup库/index.html","e69e4594bdfe3000a781c533881fb2cf"],["F:/Blog/public/2020/07/21/二维数组中的查找/index.html","97840c65175a20f7b8c587c923b0df3a"],["F:/Blog/public/2020/07/21/空格替换/index.html","7a1c36db33b08e32bb6271f35ae2a9a9"],["F:/Blog/public/2020/07/22/从未到头打印链表/index.html","edb4d56a3a981332ddabf9e570f9b336"],["F:/Blog/public/2020/07/22/用两个栈实现队列/index.html","a263c527c03f19613b37efa4d0d39ed1"],["F:/Blog/public/2020/07/22/重建二叉树/index.html","0e914826b80abfc1ed1230bf8f2f9327"],["F:/Blog/public/2020/07/23/变态跳台阶/index.html","2a8a7666bc18a6d3327adf5e136619f3"],["F:/Blog/public/2020/07/23/旋转数组的最小数字/index.html","7018a30b33441d5e3201750036f17195"],["F:/Blog/public/2020/07/23/跳台阶/index.html","52e1ddec993025548c14adadbfae3591"],["F:/Blog/public/archives/2020/03/index.html","76503b9864f705e8ed9ca8327e2dea95"],["F:/Blog/public/archives/2020/03/page/2/index.html","d2cbb71e0ece5edec8dd3205240bde7e"],["F:/Blog/public/archives/2020/07/index.html","c93756ba439252c320ebfa74ec2e565e"],["F:/Blog/public/archives/2020/index.html","516eaff5e13b96ab7270430caac1e0cc"],["F:/Blog/public/archives/2020/page/2/index.html","b57f652955953795f6bbdcee2f89648a"],["F:/Blog/public/archives/index.html","a756d3c9666b726b2407f4c1e67b8269"],["F:/Blog/public/archives/page/2/index.html","e2925e906c2cec4bf34ed000dbf53ce8"],["F:/Blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/Blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/Blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/Blog/public/backup/1、设置用户和组.html","8c00b1a83b7314e4345ed728f757cc08"],["F:/Blog/public/backup/2、设置登录证书.html","6264e7fabdc526f9deb78e7b87828436"],["F:/Blog/public/backup/3、设置防火墙和端口.html","7ebc888e1795947ca8833d8bfc52c520"],["F:/Blog/public/backup/4、安装数据库.html","c313b9089ad8b3b15e8c4e264b7db63f"],["F:/Blog/public/backup/5、安装python3.html","d7af8d3c43153c18be9c0c0689e63ce6"],["F:/Blog/public/backup/6、安装测试Django.html","de6401f9855341073ca7bec4bf7c5db3"],["F:/Blog/public/backup/7、配置Django项目.html","a1eb17fa4b83c86b26900fd66bed33b2"],["F:/Blog/public/backup/8、设置Nginx和uWSGI.html","7946db24c505d59d1b1b229e4c043db4"],["F:/Blog/public/backup/BeautifulSoup库.html","cd223bd44102171b803c4c856919ccad"],["F:/Blog/public/backup/Request库.html","2130e8d557d2f25ea13fe478454e3240"],["F:/Blog/public/backup/hello-world.html","a52e9670ebba1ad7bd35d0ad3dcf26a1"],["F:/Blog/public/categories/Algorithm/index.html","95d6a59d0be88b5c253e6c97f25826d9"],["F:/Blog/public/categories/Algorithm/二叉树/index.html","cc3e8f4931d74e30ebc85ea807523638"],["F:/Blog/public/categories/Algorithm/字符串/index.html","b4b112c203d767d035cde8a13b513f87"],["F:/Blog/public/categories/Algorithm/数组/index.html","c4c0b92a3f7107051149612873fe07b8"],["F:/Blog/public/categories/Algorithm/斐波那契数列/index.html","9016edf7720fdc93007538be98b69ca0"],["F:/Blog/public/categories/Algorithm/栈/index.html","0fe5f2aac46bdc9d36fbf0e787b8593c"],["F:/Blog/public/categories/Algorithm/链表/index.html","3faf8a42ead288cf87febd0c5abc06f4"],["F:/Blog/public/categories/Hexo/index.html","ef61ae4aa7990185dfc85a0d43e5ca75"],["F:/Blog/public/categories/index.html","4d709cc739546695df9650f1d0eacd6b"],["F:/Blog/public/categories/python/Django/index.html","a6029bb03563542ebd8a6e43c5441b43"],["F:/Blog/public/categories/python/Django/项目部署/index.html","0a54a68758f85ba068d31b25b3eb7809"],["F:/Blog/public/categories/python/index.html","1be45b89cc683e7185f7c736a3b7b514"],["F:/Blog/public/categories/python/爬虫学习/index.html","2293efab4ac7eef6260f08b4b58ebb46"],["F:/Blog/public/css/index.css","0ad56b840d121f299eff10fe452b875a"],["F:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/Blog/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["F:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["F:/Blog/public/img/alipay.jpg","8fb31a1080def0faaded06df4ead3d5f"],["F:/Blog/public/img/avatar.png","d67ee41c6e812d7c25018a20f9717692"],["F:/Blog/public/img/avatar_pre.png","c291715561b777d5601df42b8d8fc791"],["F:/Blog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["F:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/Blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/Blog/public/img/wechat.jpg","b04f4382ac98f36e70836a99377e4708"],["F:/Blog/public/index.html","9458adbf03cfcb766e9cc66501b46f38"],["F:/Blog/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["F:/Blog/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/Blog/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/Blog/public/page/2/index.html","97a6ce2cc0c9add157e132d0055e4e79"],["F:/Blog/public/tags/Algorithm/index.html","0ad9978b5e2c2343574d3b75e70ffbd1"],["F:/Blog/public/tags/BeautifulSoup/index.html","3fe64a3a1a1f508fde6f2386c425a0ba"],["F:/Blog/public/tags/Django/index.html","3f9352399053d6495768b7c0dd3d15be"],["F:/Blog/public/tags/Hello-World/index.html","fe123917492485e4304322d50e47631d"],["F:/Blog/public/tags/Markdowm/index.html","11094ae61cc6007e9e55f7a7c06a4ed2"],["F:/Blog/public/tags/Nginx/index.html","1808765230aa16ad2b11e2a66a80244b"],["F:/Blog/public/tags/SFTP/index.html","483e947419fb1f7450428a582e7a7cff"],["F:/Blog/public/tags/index.html","d0c77280e81509c9afdb824383bc13c8"],["F:/Blog/public/tags/mysql/index.html","d277de023325597a0f4c2a12ff8c16df"],["F:/Blog/public/tags/python/index.html","e0a894e7ac3667895ab36d6c0616faf7"],["F:/Blog/public/tags/python/page/2/index.html","ae7a8c1df885fb04f192dcd629bf95b7"],["F:/Blog/public/tags/requests/index.html","a2145cd49273c6e1365d9ea003ecc97d"],["F:/Blog/public/tags/ssh/index.html","5f3543679986df9de2de095547a75790"],["F:/Blog/public/tags/uWSGI/index.html","d9cf881921222a1fb4e4b4ce285627cd"],["F:/Blog/public/tags/二分查找/index.html","df4375c1920c7918cad2c60e3ec54247"],["F:/Blog/public/tags/二叉树/index.html","d98d549b6b48384635476faa9de4e29a"],["F:/Blog/public/tags/字符串/index.html","cf5b809a9c59d579771af129afccedda"],["F:/Blog/public/tags/数组/index.html","ad50a41d99351e45751668418a494808"],["F:/Blog/public/tags/斐波那契数列/index.html","8c43addbadccb89a8c7e831c75d3e274"],["F:/Blog/public/tags/查找/index.html","dd46f56bcfe670e3847f85dcb3bb9269"],["F:/Blog/public/tags/栈/index.html","96addd9c5bd168209e78b45f95d44ab4"],["F:/Blog/public/tags/爬虫/index.html","913ec056c9af074491fa0e00e9d4022d"],["F:/Blog/public/tags/矩阵/index.html","16bd3b4f11c11a096a638ead124ee6a2"],["F:/Blog/public/tags/编程基础/index.html","bf3582af8118491537a49e7ee723ce49"],["F:/Blog/public/tags/递归/index.html","6e13c953f1a293bd93e5b3e605d6bbb0"],["F:/Blog/public/tags/链表/index.html","76c67cce3a98e91f44470ad3165ba2b5"],["F:/Blog/public/tags/队列/index.html","35f3cc8e0789e5eca83713bbab47394d"],["F:/Blog/public/tags/阿里云/index.html","ce8c1278a20076b581672407c1718965"],["F:/Blog/public/tags/项目部署/index.html","c2e4c5a3fdfaa208f58c6e72d224603f"]];
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







