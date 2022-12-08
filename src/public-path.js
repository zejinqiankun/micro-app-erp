/* eslint-disable */
/**
 * webpack 默认的 publicPath 为 "" 空字符串，会基于当前路径来加载资源。但是我们在主应用中加载微应用资源的时候会导致资源丢失，所以需要重新设置 __webpack_public_path__ 的值
 */
if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}