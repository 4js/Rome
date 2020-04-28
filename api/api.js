import request from "./request.js"
/**
 * 获取所有文章资讯
 */
export function getArticleAll(params) {
  return request('getArticleAll', params, {
    prompt: false
  });
}

/**
 * 获取某篇文章
 */
export function getArticleByID(params) {
  return request('getArticleByID', params, {
    prompt: false
  });
}
