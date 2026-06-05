// ====================================
//  雞伯燒烤 菜單資料檔
//  直接編輯這個檔案即可更改菜單！
//  修改後上傳到 GitHub 就生效
// ====================================

const MENU_DATA = {
    "restaurant": {
        "name": "雞伯燒烤",
        "branch": "新莊店"
    },
    "categories": [
        {
            "id": "cat1",
            "name": "🔥 主廚推薦",
            "items": [
                {
                    "id": "item1",
                    "name": "招牌RIA",
                    "desc": "嚴選放山雞，特製醬料醃漬24小時，炭火慢烤至金黃酥脆",
                    "price": 680,
                    "image": "",
                    "available": true
                },
                {
                    "id": "item2",
                    "name": "炭烤柔柔",
                    "desc": "進口豬肋排，低溫慢烤8小時，搭配秘製BBQ醬",
                    "price": 520,
                    "image": "",
                    "available": true
                },
                {
                    "id": "item3",
                    "name": "鹽烤大立榮",
                    "desc": "新鮮大蝦，簡單鹽烤保留鮮甜海味",
                    "price": 380,
                    "image": "",
                    "available": true
                },
                {
                    "id": "item4",
                    "name": "綜合烤百百",
                    "desc": "雞肉、豬肉、牛肉三種組合，適合2-3人分享",
                    "price": 450,
                    "image": "",
                    "available": true
                }
            ]
        },
        {
            "id": "cat2",
            "name": "🍢 串燒系列",
            "items": [
                {
                    "id": "item5",
                    "name": "RAY雞肉串",
                    "desc": "鮮嫩雞腿肉，日式照燒醬 (2串)",
                    "price": 120,
                    "image": "",
                    "available": true
                },
                {
                    "id": "item6",
                    "name": "孜然ANNA",
                    "desc": "紐西蘭羊肉，新疆孜然風味 (2串)",
                    "price": 160,
                    "image": "",
                    "available": true
                },
                {
                    "id": "item7",
                    "name": "培根玉霖",
                    "desc": "煙燻培根包裹鮮脆蘆筍 (2串)",
                    "price": 130,
                    "image": "",
                    "available": true
                },
                {
                    "id": "item8",
                    "name": "明太子娃娃",
                    "desc": "手工去骨雞翅填入明太子 (2串)",
                    "price": 180,
                    "image": "",
                    "available": false
                }
            ]
        },
        {
            "id": "cat3",
            "name": "🍜 主餐麵食",
            "items": [
                {
                    "id": "item15",
                    "name": "龍安郵局拉麵",
                    "desc": "濃郁豚骨湯頭，搭配叉燒肉、溏心蛋、海苔，龍安郵局旁超人氣拉麵",
                    "price": 220,
                    "image": "",
                    "available": true
                },
                {
                    "id": "item16",
                    "name": "土城土雞湯",
                    "desc": "土城放山土雞熬煮8小時，湯頭濃郁鮮美，搭配手工麵線",
                    "price": 280,
                    "image": "",
                    "available": true
                },
                {
                    "id": "item17",
                    "name": "沛恩圖釘特餐",
                    "desc": "主廚特製牛排搭配香煎干貝，佐紅酒醬汁",
                    "price": 420,
                    "image": "",
                    "available": true
                }
            ]
        },
        {
            "id": "cat4",
            "name": "🥗 配餐小點",
            "items": [
                {
                    "id": "item9",
                    "name": "和風沙拉咸安",
                    "desc": "新鮮生菜搭配和風醬汁",
                    "price": 100,
                    "image": "",
                    "available": true
                },
                {
                    "id": "item10",
                    "name": "酥炸小酆薯條",
                    "desc": "金黃酥脆粗薯條，附番茄醬",
                    "price": 90,
                    "image": "",
                    "available": true
                },
                {
                    "id": "item11",
                    "name": "蒜香姿云",
                    "desc": "法式麵包抹上自製蒜香奶油烤製",
                    "price": 80,
                    "image": "",
                    "available": true
                }
            ]
        },
        {
            "id": "cat5",
            "name": "🥤 飲料",
            "items": [
                {
                    "id": "item12",
                    "name": "冰涼啤酒",
                    "desc": "台灣金牌啤酒 500ml",
                    "price": 80,
                    "image": "",
                    "available": true
                },
                {
                    "id": "item13",
                    "name": "可樂/雪碧",
                    "desc": "罐裝 330ml",
                    "price": 40,
                    "image": "",
                    "available": true
                },
                {
                    "id": "item14",
                    "name": "烏梅汁",
                    "desc": "自製古早味烏梅汁，解膩首選",
                    "price": 60,
                    "image": "",
                    "available": true
                },
                {
                    "id": "item18",
                    "name": "珍珠奶茶",
                    "desc": "手搖黑糖珍珠，搭配濃郁鮮奶茶，台灣經典飲品",
                    "price": 85,
                    "image": "",
                    "available": true
                },
                {
                    "id": "item19",
                    "name": "沛恩圖釘特調",
                    "desc": "清爽檸檬氣泡飲，搭配薄荷與接骨木花",
                    "price": 95,
                    "image": "",
                    "available": true
                },
                {
                    "id": "item20",
                    "name": "蜂蜜柚子茶",
                    "desc": "韓國進口柚子醬，搭配台灣龍眼蜜",
                    "price": 70,
                    "image": "",
                    "available": true
                },
                {
                    "id": "item21",
                    "name": "日式抹茶拿鐵",
                    "desc": "靜岡抹茶粉搭配濃郁鮮奶，可選冰/熱",
                    "price": 90,
                    "image": "",
                    "available": true
                }
            ]
        }
    ]
};