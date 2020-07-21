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

var precacheConfig = [["F:/Blog/public/2020/03/07/hello-world/index.html","4b6d86d4af413b553de97c04982134d8"],["F:/Blog/public/2020/03/08/1、设置用户和组/index.html","3bfc3bc5035c4639d100058ed1048361"],["F:/Blog/public/2020/03/08/2、设置登录证书/index.html","3dc586d7568f4c45d1d16097cbe52f90"],["F:/Blog/public/2020/03/08/3、设置防火墙和端口/index.html","aa0b878661feca09976ec207d492352d"],["F:/Blog/public/2020/03/08/4、安装数据库/index.html","99fa4b2db0b33ccee7a0407a216fe4de"],["F:/Blog/public/2020/03/08/5、安装python3/index.html","27f14794871ab60956aba13739c78245"],["F:/Blog/public/2020/03/08/6、安装测试Django/index.html","6c31f5925c4b871964ab814c447aa0a4"],["F:/Blog/public/2020/03/08/7、配置Django项目/index.html","5d9c52ecc4a93ce316a2281774f055ba"],["F:/Blog/public/2020/03/08/8、设置Nginx和uWSGI/index.html","3354592ad3b3b757b277628b6913e890"],["F:/Blog/public/2020/03/10/Request库/index.html","6825e660504c5166e61b74a41489dd9f"],["F:/Blog/public/2020/03/15/BeautifulSoup库/index.html","48987b9d491e74b96bcd79139d2b254a"],["F:/Blog/public/archives/2020/03/index.html","47ae9d5066c5e8810f942c8567cbddba"],["F:/Blog/public/archives/2020/03/page/2/index.html","7e08cf293118fab8c80df5be62361ad3"],["F:/Blog/public/archives/2020/index.html","6c1b50c740a91d9194f8a3c2efe01f4a"],["F:/Blog/public/archives/2020/page/2/index.html","97f677a318f9eae8584394977f69da15"],["F:/Blog/public/archives/index.html","111be1e937fb319eb54e91c6614a0520"],["F:/Blog/public/archives/page/2/index.html","958b180d0d9393175d6cef5ee79b88be"],["F:/Blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/Blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/Blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/Blog/public/backup/1、设置用户和组.html","1f972e412d5226d4153d452697ec890c"],["F:/Blog/public/backup/2、设置登录证书.html","c24b33bac87c34fbab33c30014ea45f4"],["F:/Blog/public/backup/3、设置防火墙和端口.html","af8baa97ae1ef07f90ac988c088fc472"],["F:/Blog/public/backup/4、安装数据库.html","3729df2b4dd96789b933ae1759451bf0"],["F:/Blog/public/backup/5、安装python3.html","9eb180081c7c17a9e8eb162239559695"],["F:/Blog/public/backup/6、安装测试Django.html","be7419271ad8cb3516683f07d932abe4"],["F:/Blog/public/backup/7、配置Django项目.html","ead39ff1030d3d06cebc95eea6d28918"],["F:/Blog/public/backup/8、设置Nginx和uWSGI.html","b9ae85fb2deadaff24b3a6b0f96a2d02"],["F:/Blog/public/backup/BeautifulSoup库.html","322e0b70a62976356488f6dd6989d748"],["F:/Blog/public/backup/Request库.html","20457a226c5451d4eaa3ece30d337274"],["F:/Blog/public/backup/hello-world.html","aa9b2580b0733b882084dc8d1223fd27"],["F:/Blog/public/categories/Hexo/index.html","81850a6de0d74ce6e8a63c1a5f109652"],["F:/Blog/public/categories/index.html","90353e42652f5ef3a44f386a54899124"],["F:/Blog/public/categories/python/Django/index.html","bb75fc4f511409db41ca254603e99902"],["F:/Blog/public/categories/python/Django/项目部署/index.html","e2b57deec7a059f2335b2f878e62efa0"],["F:/Blog/public/categories/python/index.html","e7d0add8927cf12a71244c233e41307b"],["F:/Blog/public/categories/python/爬虫学习/index.html","cc261bf8b84dc8d9c12b99e8ca63be9e"],["F:/Blog/public/css/index.css","0ad56b840d121f299eff10fe452b875a"],["F:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/Blog/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["F:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["F:/Blog/public/img/alipay.jpg","8fb31a1080def0faaded06df4ead3d5f"],["F:/Blog/public/img/avatar.png","d67ee41c6e812d7c25018a20f9717692"],["F:/Blog/public/img/avatar_pre.png","c291715561b777d5601df42b8d8fc791"],["F:/Blog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["F:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/Blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/Blog/public/img/wechat.jpg","b04f4382ac98f36e70836a99377e4708"],["F:/Blog/public/index.html","dec11133868d6d8c397a743a40d6bf6e"],["F:/Blog/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["F:/Blog/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/Blog/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/Blog/public/page/2/index.html","84704e585b32107c30ded7a1d0a98d2e"],["F:/Blog/public/tags/BeautifulSoup/index.html","2c8af1b75fe0d964f1536c800a9001e8"],["F:/Blog/public/tags/Django/index.html","a0b68bce5655cc80571627b6504ea09e"],["F:/Blog/public/tags/Hello-World/index.html","91aa5bae9c983efd099ab423cffca539"],["F:/Blog/public/tags/Markdowm/index.html","1ca2d632b2586306372a6c84095c123c"],["F:/Blog/public/tags/Nginx/index.html","be5715b0c8eff107fdf6a8c7127069ce"],["F:/Blog/public/tags/SFTP/index.html","0d1f24326caf8c1aaa18013b6f5aca63"],["F:/Blog/public/tags/index.html","3b81fa12a19235900f3af4d6c9bfde77"],["F:/Blog/public/tags/mysql/index.html","ce426ca65d836457431db3551ef552ab"],["F:/Blog/public/tags/python/index.html","058643b7860e43b8e63ddf14e9b8eb89"],["F:/Blog/public/tags/requests/index.html","61631813cd385946712cb236ddef182d"],["F:/Blog/public/tags/ssh/index.html","44144f4cf04fab6a578c8358e265eb43"],["F:/Blog/public/tags/uWSGI/index.html","bf7c2ffcb920e86267895a27a4d110e6"],["F:/Blog/public/tags/爬虫/index.html","562a6c8f14a892c4b4669bfcae81c948"],["F:/Blog/public/tags/阿里云/index.html","b265a28a077467c19fa182d0a97c200e"],["F:/Blog/public/tags/项目部署/index.html","4b82ba1491016245e28a9ec7d17dd185"]];
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







