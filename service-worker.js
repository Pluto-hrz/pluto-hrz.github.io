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

var precacheConfig = [["F:/Blog/public/2020/03/07/hello-world/index.html","7035c2aec2e7afc57acf5dce093d107c"],["F:/Blog/public/2020/03/08/1、设置用户和组/index.html","14790d0445d5e1c7a0eeb4aec799e6fd"],["F:/Blog/public/2020/03/08/2、设置登录证书/index.html","db978202a7398b3ab394245d6df88013"],["F:/Blog/public/2020/03/08/3、设置防火墙和端口/index.html","5d03af5e3bc933b5da9a2fdb522e9b68"],["F:/Blog/public/2020/03/08/4、安装数据库/index.html","5c3551861a4bc06f0a93bce008b2ac3d"],["F:/Blog/public/2020/03/08/5、安装python3/index.html","c30f89f14403c061d464a0a6ce2a36ff"],["F:/Blog/public/2020/03/08/6、安装测试Django/index.html","c226d5034efec0579f1d7b52bf8aa3e2"],["F:/Blog/public/2020/03/08/7、配置Django项目/index.html","5e61a9d086012bbd2e9be8f8a265ecab"],["F:/Blog/public/2020/03/08/8、设置Nginx和uWSGI/index.html","ff554cd773ef91d12beee81bb2d3de6f"],["F:/Blog/public/2020/03/10/Request库/index.html","e88b99a6dd22a5331d29f373461da74b"],["F:/Blog/public/2020/03/15/BeautifulSoup库/index.html","3c0f469aa6993e0460c292de8acffc69"],["F:/Blog/public/archives/2020/03/index.html","03eb5b398ff870a3864e564549e90b31"],["F:/Blog/public/archives/2020/03/page/2/index.html","78b2816145f094baf45760fc8909996e"],["F:/Blog/public/archives/2020/index.html","88d3365c9400240d2c9d90f284052f36"],["F:/Blog/public/archives/2020/page/2/index.html","c1724e86fa25888c1016a805edb5f89f"],["F:/Blog/public/archives/index.html","1839fafb9ec40c42a85d60452c6608c4"],["F:/Blog/public/archives/page/2/index.html","062da19912a5e4f8f021ea90b41d005a"],["F:/Blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/Blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/Blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/Blog/public/categories/Hexo/index.html","6a1dbe5b1b4fc268df4db724ee0c1afc"],["F:/Blog/public/categories/index.html","68ad6bdb38397318047031325a84c653"],["F:/Blog/public/categories/python/Django/index.html","c3af30d757574e9dd64988fdc72219a1"],["F:/Blog/public/categories/python/Django/项目部署/index.html","5dfbb09dbc15da99f31c7fce42868abf"],["F:/Blog/public/categories/python/index.html","5fc78319666fc24f8231b1d70fbcaa3d"],["F:/Blog/public/categories/python/爬虫学习/index.html","8a63995c14e805c7ad08b769b99ec0ca"],["F:/Blog/public/css/index.css","0ad56b840d121f299eff10fe452b875a"],["F:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/Blog/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["F:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["F:/Blog/public/img/alipay.jpg","8fb31a1080def0faaded06df4ead3d5f"],["F:/Blog/public/img/avatar.png","d67ee41c6e812d7c25018a20f9717692"],["F:/Blog/public/img/avatar_pre.png","c291715561b777d5601df42b8d8fc791"],["F:/Blog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["F:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/Blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/Blog/public/img/wechat.jpg","b04f4382ac98f36e70836a99377e4708"],["F:/Blog/public/index.html","286f41f37fd25a766ac322aaed94b6d5"],["F:/Blog/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["F:/Blog/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/Blog/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/Blog/public/page/2/index.html","fd3917ffeaae9e4c2d7439fc42e2b2f3"],["F:/Blog/public/tags/BeautifulSoup/index.html","cbd781e28e4d781cf0ebf40f971697db"],["F:/Blog/public/tags/Django/index.html","d70bf0cb7e1d389081edad6d9768ae55"],["F:/Blog/public/tags/Hello-World/index.html","001b09c3dbe817bf62d2f0cc5cf5dc05"],["F:/Blog/public/tags/Markdowm/index.html","8954c3e494f52dfa436a1672881ea986"],["F:/Blog/public/tags/Nginx/index.html","3dacfa817748c4830ac44393d4ccd11d"],["F:/Blog/public/tags/SFTP/index.html","59fc9c64618be743ffda950b1270ff39"],["F:/Blog/public/tags/index.html","9e2179b4f9baf1c7608cc31d85075848"],["F:/Blog/public/tags/mysql/index.html","b88fd3c78187c360d94316e194bcecb7"],["F:/Blog/public/tags/python/index.html","c0a2b54688bead5ecfcc6e912b7b7d04"],["F:/Blog/public/tags/requests/index.html","482e76a05493a51a6daf1c86754fc38d"],["F:/Blog/public/tags/ssh/index.html","223879e19d8b673850bfc974e9964377"],["F:/Blog/public/tags/uWSGI/index.html","d2ae8f5d9c726d530c503dde62a0d309"],["F:/Blog/public/tags/爬虫/index.html","0c62c264b3333099215b01a3cf2a99e6"],["F:/Blog/public/tags/阿里云/index.html","9ae60c0d67f4f489a60a322346e6e8b6"],["F:/Blog/public/tags/项目部署/index.html","f74ca8279708cf12d13d8bbc1df7fb44"],["F:/Blog/public/备份文件夹/1、设置用户和组.html","8a3ecb9b7840a1c092ad00b0aade7150"],["F:/Blog/public/备份文件夹/2、设置登录证书.html","5c7008a6e062eb65abfabf930b609fba"],["F:/Blog/public/备份文件夹/3、设置防火墙和端口.html","9c88020f07b432e783ea6f5d08917fdd"],["F:/Blog/public/备份文件夹/4、安装数据库.html","125c6eb9674f2f7af82ea7e4c9cbe8b0"],["F:/Blog/public/备份文件夹/5、安装python3.html","902cbe91a7a8e2e416a51fcff60d8ec6"],["F:/Blog/public/备份文件夹/6、安装测试Django.html","9f7c1d9058e5ac8ec8ddbebe424d0272"],["F:/Blog/public/备份文件夹/7、配置Django项目.html","782b4a714c36f543a9b3a620675bb204"],["F:/Blog/public/备份文件夹/8、设置Nginx和uWSGI.html","70a23e9cbde5da54ae8347cf8749e95b"],["F:/Blog/public/备份文件夹/BeautifulSoup库.html","e7421b4832dccd4ccb4f3a85cf06dbd0"],["F:/Blog/public/备份文件夹/Request库.html","d68520664f6f26224301ddedf901de2e"],["F:/Blog/public/备份文件夹/hello-world.html","2de7e630e8f3c6ef4f443159275e71b9"]];
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







