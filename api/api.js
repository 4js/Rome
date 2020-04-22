import request from "./request.js"
/**
 * 用户登录获取openid
 */
export function getArticleAll(params) {
  return request('getArticleAll', params, {
    prompt: false
  });
}
