import axios from "axios"
import { showMessage } from "@/utils";

const ins = axios.create(); //  创建一个axios实例
ins.interceptors.response.use(function (resp) {
    // console.log('拦截器');
    if (resp.data.code === 0) {
        return resp.data.data;
    }
    const options = {
        content: resp.data.msg,
        type: "error",
        duration: 2000,
        // container: containerRef.value,
        // callback: function () {
        //     console.log("完成!!!")
        // }
    }
    showMessage(options);
    return null;
});

export default ins;
