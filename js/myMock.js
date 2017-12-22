
// 获取积分页面
Mock.mock('/card/getPointRecordList.html', {
    "code": 0,
    "data": {
        "pointRecordList|0-1": [
            {
                "changeTime": "@datetime",
                "points|-1000-1000": -20,
                "remark|0-1": '开卡送积分'
            }
        ],
        "pointOutput": {
            "availablePoints|0-1": 0,
            "points|0-1": 0,
            "totalPoints|0-1": 0
        },
        "url": "www.baidu.com"
    },
    "msg": "请求错误，请稍后重试"
})


// 电子券详情页面
Mock.mock("card/getTicketDetail.html", {
    "code": 0,
    "data": {
        "ticket": {
            "discRate": 90,
            "gainTime": "2017-07-03 11:24:06",
            "goodsLimit": "N",
            "instID": 217,
            "invalidDate": "2017-07-03 00:00:00",
            "remark": "只能单独使用 只能自己使用 仅限新用户使用",
            "targetFee": 1,
            "ticketFee": 1,
            "ticketName": "5元代金券",
            "ticketType": "D",
            "status": "N",
            "useTime": "2017-07-03 11:24:06",
            "validDate": "2017-07-03 00:00:00"
        }
    },
    msg: "失败啦啦啦啦啦"
})

// 扫码领券页面
Mock.mock("card/scanTicket.html", {
    "code": 1,
    "data": {
        "event": {
            "title": "测试",
            "description": "<p>147585</p><p>4715</p><img src='https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/space/pic/item/cdbf6c81800a19d8570106d639fa828ba71e46e7.jpg' />"
        },
        "ticket": {
            "goodsLimit": "N",
            "invalidDate": "2017-10-08",
            "validDate": "2017-10-10",
            "ticketName": "这是一个测试标题题",
            "ticketType": "D",
            "ticketNo": "12345678912345678900",
            "ticketSrc": "Y"
        }
    },
    "msg": "您还不是会员您还不是会员您还不是会员您还不是会员",
    "url": "www.baidu.com"
})


// 电子券列表页面
Mock.mock("card/getTicketList.html", {
    "code": 0,
    "data": {
        "ticketList|0-1": [
            {//电子券为代金券,并且无商品限制时,即ticketType = V,goodsLimit=N
                "goodsLimit": "N",
                "discRate|1": [10, 20, 30, 40, 50, 60, 70, 80, 90],
                "instID": 224,
                "invalidDate": "2017.07.03",
                "targetFee|1-1000": 2,
                "ticketFee|1-1000": 1,
                "ticketName": "电子券123",
                "ticketType|1": ["D", "V"],
                "validDate": "2017.07.03"
            },
            {//商品限制时goodsLimit=Y
                "goodsLimit": "Y",
                "instID": 235,
                "invalidDate": "2017.09.30",
                "ticketName": "vz电子券1",
                "ticketType": "V",
                "validDate": "2017.08.29"
            }
        ]
    }
})


// 积分商城页面
Mock.mock("card/getPresentList.html", {
    "code": 0,
    "data": {
        "presentList|2-10": [
            {
                "picUrl": "",
                "presentID": 1,
                "presentName": "五折券五折券五折券五折券五折券五折券五折券",
                "price": 60000,
                "ticketDO": {
                    "goodsLimit|1": ["N", "Y"],
                    "invalidDate": "2017-07-03 00:00:00",
                    "ticketName": "测试1",
                    "ticketType|1": ["V", "D"],
                    "validDate": "2017-07-03 00:00:00",
                    "ticketFee": 100.50,
                    "discRate": 90,
                    "targetFee": 200
                }
            }
        ]
    }
})


// 礼品详情页面
Mock.mock("card/getPresentDetail.html", {
    "code": 0,
    "data": {
        "present": {
            "amount": 50,
            "buyAmount": 10,
            "endTime": "2017-10-08 10:49:28",
            "merchID": 1,
            "notice": "12341234这是一段测试文本啊啊啊aaaaa",
            "perLimit": 2,
            "picUrl": 0,
            "presentDesc": "<p>147585</p><p>147585</p><p>147585</p><p>147585</p><p>147585</p><p>147585</p><p>147585</p><p>147585</p><p>147585</p><p>4715</p><p>1234123412341234这是一段测试文本啊啊啊aaaaa12341234这是一段测试文本啊啊啊aaaaa这是一段测试文本啊啊啊aaaaa</p>",
            "presentID": 1,
            "presentName": "五折券",
            "price": 60000,
            "startTime": "2017-09-28 10:49:22",
            "ticketID": 70,
            "ticketDO": {
                "goodsLimit": "Y",
                "invalidDate": "2017-07-03 00:00:00",
                "ticketName": "测试1",
                "ticketType": "V",
                "validDate": "2017-07-03 00:00:00"
            }
        }
    }
})


Mock.mock("card/getCardInfo.html", {
    "code": 0,
    "msg": "haha",
    "data": {
        "cardInfo": {
            "bindDate": "2017.10.08",
            "mobile": "13659995456",
            "points": 184,
            "ticketCount": 2,
            "vipCardNo": "274516463628"
        }
    }
})
// 进入集卡页面
Mock.mock("card/enterCollectEvent.html", {
    "code": 0,
    "msg": "享受惠的订惠的订单若",
    "data": {
        "openCount": 0,
        "remainCount":1,
        "event": {
            "eventID": 1,
            "title": "测试",
            "startDate": "2017-10-08",
            "endDate": "2017-10-10",
            "cardCount": 1,
            "defaultPage": "Y",
            "pageConfig": {
                // "event_bg": "./img/bg_collect_card.png",
                "card_pics": [
                    {
                        card_cover: "./img/red_packet.png",
                        card_bg: "./img/red_packet_result.png"
                    },
                    {
                        card_cover: "./img/red_packet.png",
                        card_bg: "./img/red_packet_result.png"
                    }
                ]
            },
            "remark": "享受优惠的订单若发生"
        }
    }
})
// 翻卡
Mock.mock("card/turnCard.html", {
    "code": 0,
    "msg": "haha",
    "data": {
        "openCount": 1,
        "remainCount": 1
    }
})

// 抽奖
Mock.mock("card/collectTicket.html", {
    "code": 0,
    "msg": "失败啦啦啦啦啦",
    "data": {
        "ticket": {
            "goodsLimit": "N",
            "invalidDate": "2017-10-08",
            "validDate": "2017-10-10",
            "targetFee": 1000,
            "ticketName": "AAAAA",
            "ticketType": "V",
            "ticketSrc": "Y",
            "ticketFee": 1234,
            "discRate": 90
        }
    }
})

// TODO
  // 翻卡时如果code返回非0   OK
  // 进页面时按钮状态
  // 如果 remainCount === 0   按钮变灰不能点
  // 
  // 按钮状态：黄色开 黄色拆   灰色开 灰色拆 
  
  // 待开>0 && 页面红包未开完    黄色开          途中 页面红包开完  黄色拆
  // 待开=0 && 页面红包未开完    灰色开
  // 页面红包开完     黄色拆   拆完执行页面进入方法
  // 页面红包未开完 &&   灰色拆

  // 页面红包是否开完？   已开红包 = 卡槽数 ？开完 ： 未开完

  // 如果 openCount / cardCount 
  // 进入页面，如果卡槽数和已翻卡一致，直接抽奖   翻卡数 = 卡槽数
  // 电子券数字单位位置问题
  // 拆过之后，按钮变成开
