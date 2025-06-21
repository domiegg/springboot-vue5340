const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootm7qt4/",
            name: "springbootm7qt4",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootm7qt4/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "家政服务管理平台"
        } 
    }
}
export default base
