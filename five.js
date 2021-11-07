let data = [
    {
        "id": 0,
        "name": "肥宅心碎賞櫻3日",
        "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
        "area": "高雄",
        "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
        "group": 87,
        "price": 1400,
        "rate": 10
    },
    {
        "id": 1,
        "name": "貓空纜車雙程票",
        "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "area": "台北",
        "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
        "group": 99,
        "price": 240,
        "rate": 2
    },
    {
        "id": 2,
        "name": "台中谷關溫泉會1日",
        "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "area": "台中",
        "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
        "group": 20,
        "price": 1765,
        "rate": 7
    }
];

//innerHTML資料

const list = document.querySelector('.list')
const search = document.querySelector('.search')

function init() {
    let str = '';
    let searchStr = ''
    let totalNum = 0
    data.forEach(function (i) {
        str += `
            <li class="card mt32">
                <div class="card-title">
                    <span class="tag-top  bg-secondary">${i.area}</span>
                    <img class="card-img"
                        src="${i.imgUrl}"
                        alt="">
                    <span class ="bg-primary tag-xs">${i.rate}</span>
                </div>
                <div class="card-main">
                    <h2>${i['name']}</h2>
                    <P class="mt16 text-light">
                        ${i.description}
                    </P>
                </div>
                <div class="card-footer mt32 primary d-flex juctify-content-between align-items-center">
                    <p><i class="fas fa-exclamation-circle me8"></i>剩下最後${i.rate} 組</p>
                    <p class="d-flex align-items-center">TWD <span class="text-xl ms4">${i.price}</span></p>
                </div>
            </li>
         `

        totalNum += 1
        searchStr = `<sapn class=" ms30 text-light">本次搜尋共 ${totalNum} 筆資料</sapn>`
    })
    list.innerHTML = str
    search.innerHTML = searchStr
}

init()



//上方新增按鈕
const ticketName = document.querySelector('.ticketName')
const ticketImg = document.querySelector('.ticketImg')
const ticketArea = document.querySelector('.ticketArea')
const ticketPrice = document.querySelector('.ticketPrice')
const ticketNum = document.querySelector('.ticketNum')
const ticketStar = document.querySelector('.ticketStar')
const ticketDescribe = document.querySelector('.ticketDescribe')
const sava = document.querySelector('.sava')

sava.addEventListener('click', function (e) {
    let obj = {}
    obj.name = ticketName.value
    obj.imgUrl = ticketImg.value
    obj.area = ticketArea.value
    obj.description = ticketDescribe.value
    obj.price = ticketPrice.value
    obj.group = ticketNum.value
    obj.rate = ticketStar.value
    data.push(obj)
    init()


    //表單填寫
    if (ticketName.value === '') {
        alert('請填寫正確套票名稱')
    } else if (ticketImg.value === '') {
        alert('請填寫正確圖片網址')
        return
    } else if (ticketArea.value === '') {
        alert('請填寫正確景點地區')
    } else if (ticketPrice.value === '') {
        alert('請填寫正確套票金額')
    } else if (ticketNum.value === '') {
        alert('請填寫正確套票組數')
    } else if (ticketStar.value === '') {
        alert('請填寫正確套票星級')
    } else if (ticketDescribe.value === '') {
        alert('請填寫正確套票描述')
    }
})










//篩選地區結果
const changeArea = document.querySelector('.changeArea')
changeArea.addEventListener('change', function (e) {
    let str = '';
    let searchStr = ''
    let totalNum = 0
    data.forEach(function (i) {
        if (e.target.value == '全部') {
            str += `
            <li class="card mt32">
                <div class="card-title">
                    <span class="tag-top  bg-secondary">${i.area}</span>
                    <img class="card-img"
                        src="${i.imgUrl}"
                        alt="">
                    <span class ="bg-primary tag-xs">${i.rate}</span>
                </div>
                <div class="card-main">
                    <h2>${i['name']}</h2>
                    <P class="mt16 text-light">
                        ${i.description}
                    </P>
                </div>
                <div class="card-footer mt32 primary d-flex juctify-content-between align-items-center">
                    <p><i class="fas fa-exclamation-circle me8"></i>剩下最後${i.rate} 組</p>
                    <p class="d-flex align-items-center">TWD <span class="text-xl ms4">${i.price}</span></p>
                </div>
            </li>
         `
            totalNum += 1
            searchStr = `<sapn class=" ms30 text-light">本次搜尋共 ${totalNum} 筆資料</sapn>`
        } else if (e.target.value === '高雄' && i.area === '高雄') {
            str += `
            <li class="card mt32">
                <div class="card-title">
                    <span class="tag-top  bg-secondary">${i.area}</span>
                    <img class="card-img"
                        src="${i.imgUrl}"
                        alt="">
                    <span class ="bg-primary tag-xs">${i.rate}</span>
                </div>
                <div class="card-main">
                    <h2>${i['name']}</h2>
                    <P class="mt16 text-light">
                        ${i.description}
                    </P>
                </div>
                <div class="card-footer mt32 primary d-flex juctify-content-between align-items-center">
                    <p><i class="fas fa-exclamation-circle me8"></i>剩下最後${i.rate} 組</p>
                    <p class="d-flex align-items-center">TWD <span class="text-xl ms4">${i.price}</span></p>
                </div>
            </li>
         `
            totalNum += 1
            searchStr = `<sapn class=" ms30 text-light">本次搜尋共 ${totalNum} 筆資料</sapn>`
        } else if (e.target.value === '台中' && i.area === '台中') {
            str += `
            <li class="card mt32">
                <div class="card-title">
                    <span class="tag-top  bg-secondary">${i.area}</span>
                    <img class="card-img"
                        src="${i.imgUrl}"
                        alt="">
                    <span class ="bg-primary tag-xs">${i.rate}</span>
                </div>
                <div class="card-main">
                    <h2>${i['name']}</h2>
                    <P class="mt16 text-light">
                        ${i.description}
                    </P>
                </div>
                <div class="card-footer mt32 primary d-flex juctify-content-between align-items-center">
                    <p><i class="fas fa-exclamation-circle me8"></i>剩下最後${i.rate} 組</p>
                    <p class="d-flex align-items-center">TWD <span class="text-xl ms4">${i.price}</span></p>
                </div>
            </li>
         `
            totalNum += 1
            searchStr = `<sapn class=" ms30 text-light">本次搜尋共 ${totalNum} 筆資料</sapn>`
        } else if (e.target.value === '台北' && i.area === '台北') {
            str += `
            <li class="card mt32">
                <div class="card-title">
                    <span class="tag-top  bg-secondary">${i.area}</span>
                    <img class="card-img"
                        src="${i.imgUrl}"
                        alt="">
                    <span class ="bg-primary tag-xs">${i.rate}</span>
                </div>
                <div class="card-main">
                    <h2>${i['name']}</h2>
                    <P class="mt16 text-light">
                        ${i.description}
                    </P>
                </div>
                <div class="card-footer mt32 primary d-flex juctify-content-between align-items-center">
                    <p><i class="fas fa-exclamation-circle me8"></i>剩下最後${i.rate} 組</p>
                    <p class="d-flex align-items-center">TWD <span class="text-xl ms4">${i.price}</span></p>
                </div>
            </li>
         `
            totalNum += 1
            searchStr = `<sapn class=" ms30 text-light">本次搜尋共 ${totalNum} 筆資料</sapn>`
        }
    })
    list.innerHTML = str
    search.innerHTML = searchStr
})