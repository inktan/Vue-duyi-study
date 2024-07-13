import request from "./request"

export async function getBanners() {
    return await request.get('http://10.1.12.30:5000/random_image');
}


