import Mock from "mockjs"

// Mock.mock("/api/banner", "get", {
Mock.mock("http://10.1.12.30:5000/random_image", "get", {
    code: 0,
    msg: "用于 E2E 测试",
    data: [
        {
            id: 'a01',
            midImg: '',
            bigMig: '',
            title: '件使',
            description: '诗般反映清末民初的文艺作品'
        }, {
            id: 'a02',
            midImg: '',
            bigMig: '',
            title: '以进',
            description: '多大家耳熟能详的电视剧本，如《夜宴》《赤壁》《恰同学少年》《血色湘西》《乾隆王朝》《大清御史》《大'
        }, {
            id: 'a03',
            midImg: '',
            bigMig: '',
            title: '对模',
            description: '近代史专业背景，很长一段时间，三人都在到处搜集有关这段历史的书和资料进行阅读、研'
        }, {
            id: 'a04',
            midImg: '',
            bigMig: '',
            title: '型检',
            description: '的（历史资料）能够找到的都找来了······书摞起来的高度有4米左右。主要的书像梁启超的《李鸿章传》、《剑桥晚清史》，北大的黄德明教授的书我也读了······很多人问我接触过什么学'
        }, {
            id: 'a05',
            midImg: '',
            bigMig: '',
            title: '应的测试反',
            description: '澜壮阔、跌宕起伏的'
        }
    ],
})
// console.log("mock")

