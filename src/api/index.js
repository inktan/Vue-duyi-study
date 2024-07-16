import request from "./request"

export async function getBanners() {
    return await request.get('http://10.1.12.30:5000/get_banners');
}

/**
 * 获取博客列表数据
 * @param {*} page 
 * @param {*} limit 
 * @param {*} categoryid 
 * @returns 
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
    return await request.get('http://10.1.12.30:5000/get_blogs', {
        params: {
            page, limit, categoryid,
        }
    });
}

/**
 * 获取博客分类
 * @param {*} page 
 * @param {*} limit 
 * @param {*} categoryid 
 * @returns 
 */
export async function getBlogTypes() {
    return await request.get('http://10.1.12.30:5000/get_blogType');
}

