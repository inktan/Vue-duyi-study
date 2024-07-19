import request from "./request"

export async function getBanners() {
    return await request.get('http://10.1.12.30:5000/get_banners');
}

/**
 * 获取博客列表数据
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
 */
export async function getBlogTypes() {
    return await request.get('http://10.1.12.30:5000/get_blogType');
}

/**
 * 获取单个博客内容
 */
export async function getBlog(id) {
    return await request.get(`http://10.1.12.30:5000/get_blog/${id}`);
    // return await request.get(`http://10.1.12.30:5000/get_blog`);
}

/**
 * 提交评论
 */
export async function postComment(commentInfo) {
    return await request.post(`http://10.1.12.30:5000/comment`, commentInfo);
}

/**
 * 分页获取评论
 */
export async function getComments(blogid, page = 1, limit = 10) {
    return await request.get(`http://10.1.12.30:5000/comment`, {
        // get请求参数
        params: {
            blogid, page, limit,
        }
    });
}

