import config from "./config.js"
const method = ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD', 'TRACE', 'CONNECT'];

function prompt(e = {}, op, reject, resolve) {
  let title = e.msg || '请求错误 ！';
  if (!title) return;
  let icon = 'success';
  if (e.status !== 200) {
    icon = 'none';
    reject(title, e.data)
  } else if (resolve) resolve(e.data);
  if (op.prompt !== false) wx.showToast({
    title,
    icon,
    duration: 2000
  })
}

export default (url = '', data={}, op = {}, type = 0) => {
  if (op.loading !== false) wx.showNavigationBarLoading();
  try{
    const user = wx.getStorageSync('user');
    if(user) data = Object.assign(data, {user_no: JSON.parse(user).user_no});
    return new Promise((resolve, reject) => {
      wx.request({
        data,
        url: config.request_url  + url,
        method: method[type],
        success: (v) => prompt(v.data, op, reject, resolve),
        fail: (e) => prompt(e, op, reject),
        complete() {
          if (op.loading !== false) wx.hideNavigationBarLoading()
        }
      })
    })
  }catch(err){
    console.log(err);
  }
}