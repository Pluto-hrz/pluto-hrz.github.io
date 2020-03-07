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

var precacheConfig = [["F:/Blog/public/2020/03/07/hello-world/index.html","1e7024416e2f77173250c59d74012341"],["F:/Blog/public/2020/03/08/1、设置用户和组/index.html","6fa2393e54e504a7c8c2a9de556579ce"],["F:/Blog/public/2020/03/08/2、设置登录证书/index.html","ac41b45647cfdb24fc3f8c714699f0d9"],["F:/Blog/public/2020/03/08/3、设置防火墙和端口/index.html","fe6d8d4674fc23b525b5a4fba3ed1972"],["F:/Blog/public/2020/03/08/4、安装数据库/index.html","97d4e512e57d223b515b953266753736"],["F:/Blog/public/2020/03/08/5、安装python3/index.html","6811ec2d6a5436a365e19666d0e0615f"],["F:/Blog/public/2020/03/08/6、安装测试Django/index.html","ccf8b0278c372b3efbac382bd71e20f5"],["F:/Blog/public/2020/03/08/7、配置Django项目/index.html","b84d3bc69da140624a1109fa1f7e8187"],["F:/Blog/public/2020/03/08/8、设置Nginx和uWSGI/index.html","f3671a55431ecaf2a3da2899148cddf0"],["F:/Blog/public/archives/2020/03/index.html","c76c6522bc461afe0c89381a92f42169"],["F:/Blog/public/archives/2020/index.html","7f36228171f083a4f3dc5a58f9791adb"],["F:/Blog/public/archives/index.html","efb538261b40e207f8a6e0e45810e2e5"],["F:/Blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/Blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/Blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/Blog/public/categories/Hexo/index.html","5afac496d7eb04e7a5962c6700e76ffc"],["F:/Blog/public/categories/index.html","296cacf99232eb57ad8f756a9e5d292f"],["F:/Blog/public/categories/python/Django/index.html","946f763c409067277bf870c33746392d"],["F:/Blog/public/categories/python/Django/项目部署/index.html","491c5387558e4858a419bedf70aa14c6"],["F:/Blog/public/categories/python/index.html","bd07e48bc6fdf98e5f6d5359dff41370"],["F:/Blog/public/css/index.css","77e4081f0e43a5ceba107c43ea60f1af"],["F:/Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/Blog/public/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["F:/Blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["F:/Blog/public/img/alipay.jpg","8fb31a1080def0faaded06df4ead3d5f"],["F:/Blog/public/img/avatar.png","d67ee41c6e812d7c25018a20f9717692"],["F:/Blog/public/img/avatar_pre.png","c291715561b777d5601df42b8d8fc791"],["F:/Blog/public/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["F:/Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/Blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/Blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/Blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/Blog/public/img/wechat.jpg","b04f4382ac98f36e70836a99377e4708"],["F:/Blog/public/index.html","15dfffe80e2c3ac4add0a1019b54173b"],["F:/Blog/public/js/main.js","06c6a43fd1e82861109b1eee73f8ead7"],["F:/Blog/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/Blog/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/Blog/public/tags/Django/index.html","5031815b120979775b37113c166e715b"],["F:/Blog/public/tags/Hello-World/index.html","31c42b007c6be4ef568412e1bc1a65c6"],["F:/Blog/public/tags/Markdowm/index.html","e5688fc63692443c2c3e3ea7cc5b4592"],["F:/Blog/public/tags/Nginx/index.html","9c1c6f4f77f5300146efa187f1bd966f"],["F:/Blog/public/tags/SFTP/index.html","f134538a9486dad555aa5960670f8472"],["F:/Blog/public/tags/index.html","ab32a8ac4da4af0c3b62b6a031d73680"],["F:/Blog/public/tags/mysql/index.html","0a035552de4a2a1588bce6b8fdfac2a0"],["F:/Blog/public/tags/python/index.html","1aa589d8f415ce70588a198122cf6e3b"],["F:/Blog/public/tags/ssh/index.html","ecacc1654ce583e687909e14fb1e3351"],["F:/Blog/public/tags/uWSGI/index.html","76c1f40d3a6e578cb8e0e71c78dd03d8"],["F:/Blog/public/tags/阿里云/index.html","5115364c168076de615e7a5016db6fe6"],["F:/Blog/public/tags/项目部署/index.html","8553b9cb316cc0d5a50d480d879adcf2"]];
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







