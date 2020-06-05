// 사용자의 위도 경도 받기 -> 그것에서 온도와 장소 뽑아내기 -> html에 추가해주기 


const COORDS = "coords" // 위도 : ....경도 : ....














function loadedCoords() {
    const loadcoords = localStorage.getItem(COORDS)
    console.log(loadedCoords)
    if (loadedCoords === null) {
        askforPosition()
    } else {
        getweather()
    }
} // 위도와 경도를 접어넣어서 온도와 장소를 가져오는 함수 

function init() {
    loadedCoords()
} // 실행할 것 

init() // 실행할 것을 실행 