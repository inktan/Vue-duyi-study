import Mock from "mockjs"

Mock.mock("/api/banner", "get", {
    code: 0,
    msg: "用于 E2E 测试",
    data: [
        {

        }, {

        }
    ],
})
// console.log("mock")

