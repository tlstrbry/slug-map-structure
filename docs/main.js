
ymaps.ready(init);

function getColor(level) {
    switch (level) {
        case 1: return 'islands#greenIcon';
        case 2: return 'islands#lightGreenIcon';
        case 3: return 'islands#yellowIcon';
        case 4: return 'islands#orangeIcon';
        case 5: return 'islands#redIcon';
        default: return 'islands#grayIcon';
    }
}

function init() {
    const map = new ymaps.Map("map", {
        center: [60.0, 30.0],
        zoom: 9
    });

    fetch('points.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(point => {
                const placemark = new ymaps.Placemark([point.lat, point.lon], {
                    balloonContent: `Уровень заражённости: ${point.level}`
                }, {
                    preset: getColor(point.level)
                });
                map.geoObjects.add(placemark);
            });
        });
}
