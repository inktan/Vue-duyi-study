import Mock from "mockjs"

// Mock.mock("/api/banner", "get", {
Mock.mock("http://10.1.12.30:5000/random_image", "get", {
    code: 0,
    msg: "用于 E2E 测试",
    data: [
        {
            id: 'a01',
            midImg: 'http://10.1.12.30:8081/static/archcollege/%E4%B8%8A%E6%B5%B7%E6%99%AF%E7%91%9E%E6%82%A6%E6%A8%98%E8%87%BB%E9%80%89(%E4%B8%AD%E5%B1%B1%E5%85%AC%E5%9B%AD%E5%BA%97%EF%BC%89%E6%94%B9%E9%80%A0%E5%AE%9E%E5%BD%95%20_%20%E4%B8%8A%E6%B5%B7%E6%88%90%E6%89%A7%E5%BB%BA%E7%AD%91%E8%AE%BE%E8%AE%A1/1_1581327717260951.jpeg',
            bigMig: 'http://10.1.12.30:8081/static/archcollege/%E4%B8%8A%E6%B5%B7%E6%99%AF%E7%91%9E%E6%82%A6%E6%A8%98%E8%87%BB%E9%80%89(%E4%B8%AD%E5%B1%B1%E5%85%AC%E5%9B%AD%E5%BA%97%EF%BC%89%E6%94%B9%E9%80%A0%E5%AE%9E%E5%BD%95%20_%20%E4%B8%8A%E6%B5%B7%E6%88%90%E6%89%A7%E5%BB%BA%E7%AD%91%E8%AE%BE%E8%AE%A1/1_1581327717260951.jpeg',
            title: '件使',
            description: '诗般反映清末民初的文艺作品'
        }, {
            id: 'a02',
            midImg: 'http://10.1.12.30:8081/static/gooood/No.%2019,%20Melbourne%20By%20Biasol%20-%20%E8%B0%B7%E5%BE%B7%E8%AE%BE%E8%AE%A1%E7%BD%91/12_016-No.-19-By-Biasol.jpeg',
            bigMig: 'http://10.1.12.30:8081/static/gooood/No.%2019,%20Melbourne%20By%20Biasol%20-%20%E8%B0%B7%E5%BE%B7%E8%AE%BE%E8%AE%A1%E7%BD%91/12_016-No.-19-By-Biasol.jpeg',
            title: '以进',
            description: '多大家耳熟能详的电视剧本，如《夜宴》《赤壁》《恰同学少年》《血色湘西》《乾隆王朝》《大清御史》《大'
        }, {
            id: 'a03',
            midImg: 'http://10.1.12.30:8081/static/archcollege/%E5%8C%97%E4%BA%AC%E8%A5%BF%E5%8D%95%E6%96%B0%E6%96%87%E5%8C%96%E8%A1%97%E5%90%88%E9%99%A2%E6%94%B9%E9%80%A0%20_%20Super+Partners/1_1560154045414117.jpeg',
            bigMig: 'http://10.1.12.30:8081/static/ArchDaily/6%20Endangered%20World%20Heritage%20Sites%20as%20Seen%20from%20Space/10_DE2_20151016-HATRA.jpeg',
            title: '对模',
            description: '近代史专业背景，很长一段时间，三人都在到处搜集有关这段历史的书和资料进行阅读、研'
        }, {
            id: 'a04',
            midImg: 'http://10.1.12.30:8081/static/ArchDaily/Los%20Huertos%20Housing%20_%20Ensalada%20Works%20+%20Architecture%20NRA/56_LosHuertos_Planimetria_VERDE-01.jpeg',
            bigMig: 'http://10.1.12.30:8081/static/ArchDaily/Bellerive%20Resort%20_%20AVA%20Architects/12_bellerive-resort-ava-architects_13.jpeg',
            title: '型检',
            description: '的（历史资料）能够找到的都找来了······书摞起来的高度有4米左右。主要的书像梁启超的《李鸿章传》、《剑桥晚清史》，北大的黄德明教授的书我也读了······很多人问我接触过什么学'
        }, {
            id: 'a05',
            midImg: 'http://10.1.12.30:8081/static/archiposition/archiposition/%E9%9D%99%E8%B0%A7%E2%80%9C%E7%BB%BF%E6%B4%B2%E2%80%9D%EF%BC%9ACasa%20TO%E6%B0%91%E5%AE%BF%E9%85%92%E5%BA%97%20_%20Ludwig%20Godefroy%20%E2%80%93%20%E6%9C%89%E6%96%B9/20221018140430youfang76.jpg',
            bigMig: 'http://10.1.12.30:8081/static/gooood/BOSCH%20Szh215%20Parking%20House%20Design%20(Phase%20I)%20by%20ARTS%20Group%20Co.,%20Ltd.%20-%20%E8%B0%B7%E5%BE%B7%E8%AE%BE%E8%AE%A1%E7%BD%91/24_022-bosch-szh215-parking-house-design-phase-i-by-arts-group-co-ltd.jpeg',
            title: '应的测试反',
            description: '澜壮阔、跌宕起伏的'
        }
    ],
})
// console.log("mock")

