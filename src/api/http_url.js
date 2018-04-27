let localhostDev = false;
//如果是本地开发，就把localhostDev 设置成true，连接就是拼成‘http://localhost:8080/api/test’
//生产环境，就把localhostDev 设置成false，连接就是拼成‘http://xxx.com/api/test’
let _host = localhostDev ? 'http://localhost:8080' : 'http://wapapi-litchi.jstv.com';
let httpUrl = {
    'videolive': _host + '/videolive/tv/14014171',
    'test1': _host + '/api/test1'
};
export { httpUrl } 