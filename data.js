// Каталог інструкцій Lego WeDo 2.0
const LEGO_DATA = [
 {
  "t": "AT-AT",
  "c": "Роботи",
  "ac": [
   "Роботи",
   "Крокуючі",
   "Зоряні війни"
  ],
  "p": "https://drive.google.com/file/d/1ZCles9WuXkyiRbXFbA-mza-zsr9Akl6H/preview",
  "i": "Моделі/інструкції/зображення/at-at-191.jpg"
 },
 {
  "t": "AT-ST",
  "c": "Роботи",
  "ac": [
   "Зоряні війни",
   "Крокуючі",
   "Роботи"
  ],
  "p": "https://drive.google.com/file/d/1XUBW3fIe9LDMKr9NE4GRKFoNpL6tJi6k/preview",
  "i": "Моделі/інструкції/зображення/at-st-192.jpg"
 },
 {
  "t": "R2D2",
  "c": "Роботи",
  "ac": [
   "Зоряні війни",
   "Роботи"
  ],
  "p": "https://drive.google.com/file/d/1w0ynE8surfyq2Cx8FJEfvgOK3G_5I73t/preview",
  "i": "Моделі/інструкції/зображення/r2d2-194.jpg"
 },
 {
  "t": "X-wing",
  "c": "Космос",
  "ac": [
   "Зоряні війни",
   "Космос"
  ],
  "p": "https://drive.google.com/file/d/1uWd8O6oU1qFn5vlENlDtjiXXhhR5mqjW/preview",
  "i": "Моделі/інструкції/зображення/x-wing-199.jpg"
 },
 {
  "t": "Авто-шоу",
  "c": "Автомобілі, мотоцикли",
  "ac": [
   "Автомобілі, мотоцикли",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/1bnZL8XsDSm83VrAtUZaFKAVW2RTwhM8i/preview",
  "i": "Моделі/інструкції/зображення/avto-shou-554.jpg"
 },
 {
  "t": "Автобус",
  "c": "Транспорт",
  "ac": [
   "Транспорт"
  ],
  "p": "https://drive.google.com/file/d/10yPWMZZ4lyK9p_8B2XKYmPiu-LOWeH44/preview",
  "i": "Моделі/інструкції/зображення/avtobus-270.jpg"
 },
 {
  "t": "Автовишка",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Спецтехніка"
  ],
  "p": "https://drive.google.com/file/d/1c0s6aKbp4lCbSI40DF_z1AgwiaVPwBLK/preview",
  "i": "Моделі/інструкції/зображення/avtovyshka-534.jpg"
 },
 {
  "t": "Автоматичні ворота",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1_4X6A0mJH34L8Tmj3fMq9CyY1yWWEWIL/preview",
  "i": "Моделі/інструкції/зображення/avtomatychni-vorota-25.jpg"
 },
 {
  "t": "Автомобіль",
  "c": "Автомобілі, мотоцикли",
  "ac": [
   "Автомобілі, мотоцикли"
  ],
  "p": "https://drive.google.com/file/d/1P5A2pK-YHD1qcQJifM9dl-fsA8Rr9eEa/preview",
  "i": "Моделі/інструкції/зображення/avtomobil-287.jpg"
 },
 {
  "t": "Автомобіль \"Гелік\"",
  "c": "Автомобілі, мотоцикли",
  "ac": [
   "Автомобілі, мотоцикли"
  ],
  "p": "https://drive.google.com/file/d/1jxqhAUhgsLSo6iHAQ857VmrMB5hek_qm/preview",
  "i": "Моделі/інструкції/зображення/avtomobil-helik-425.jpg"
 },
 {
  "t": "Автомобіль Тесла",
  "c": "Автомобілі, мотоцикли",
  "ac": [
   "Автомобілі, мотоцикли"
  ],
  "p": "https://drive.google.com/file/d/1O95Fi0yQy0-X8IGTuQhpPSBKJ_rQXKU5/preview",
  "i": "Моделі/інструкції/зображення/avtomobil-tesla-273.jpg"
 },
 {
  "t": "Аероплан",
  "c": "Літаки, вертольоти",
  "ac": [
   "Літаки, вертольоти"
  ],
  "p": "https://drive.google.com/file/d/1BY-abDsadrcWoM4igXoGdxY5QmmMDeYo/preview",
  "i": "Моделі/інструкції/зображення/aeroplan-308.jpg"
 },
 {
  "t": "Акула",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1d8xo3aqgHP3C6Sj8xrZbD3lGNkSg1iWr/preview",
  "i": "Моделі/інструкції/зображення/akula-116.jpg"
 },
 {
  "t": "Ангел",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1vhsQ_yrsCn1fPgDiaBW5Ux5uNajUkqIC/preview",
  "i": "Моделі/інструкції/зображення/anhel-364.jpg"
 },
 {
  "t": "Андроїд",
  "c": "Механізми",
  "ac": [
   "Зоряні війни",
   "Механізми",
   "Роботи"
  ],
  "p": "https://drive.google.com/file/d/1Mvqeus-e1KDrf9gQiidpmlzWpQP4undq/preview",
  "i": "Моделі/інструкції/зображення/androyid-363.jpg"
 },
 {
  "t": "Анкілозавр",
  "c": "Динозаври",
  "ac": [
   "Динозаври",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/1KbjwjCyZwcq1_S4ha18zd15ONZAxKoZn/preview",
  "i": "Моделі/інструкції/зображення/ankilozavr-571.jpg"
 },
 {
  "t": "Анігілятор",
  "c": "Роботи",
  "ac": [
   "Роботи",
   "Крокуючі"
  ],
  "p": "https://drive.google.com/file/d/1fU7YIg5p2FOPFkg-h0N7utYC-qvQq038/preview",
  "i": "Моделі/інструкції/зображення/anihilyator-15.jpg"
 },
 {
  "t": "Артроплевра",
  "c": "Динозаври",
  "ac": [
   "Динозаври",
   "Комахи"
  ],
  "p": "https://drive.google.com/file/d/1o3q1dstjCPYH5hK-y9j1en8-VC6uLCp7/preview",
  "i": "Моделі/інструкції/зображення/artroplevra-71.jpg"
 },
 {
  "t": "Бабка",
  "c": "Міні-моделі",
  "ac": [
   "Комахи",
   "Міні-моделі"
  ],
  "p": "https://drive.google.com/file/d/1HVaiAv4n6xWdGm8loPisU6vevsRNFaWx/preview",
  "i": "Моделі/інструкції/зображення/babka-512.jpg"
 },
 {
  "t": "Баггі",
  "c": "Автомобілі, мотоцикли",
  "ac": [
   "Автомобілі, мотоцикли",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/1uXy2rUvB73yNU7TeHN0WnBZVOuuKWKsY/preview",
  "i": "Моделі/інструкції/зображення/bahhi-274.jpg"
 },
 {
  "t": "Банкомат",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1hZzZCrSn0aOyn1CL69MmCG-Q-73EPJxz/preview",
  "i": "Моделі/інструкції/зображення/bankomat-367.jpg"
 },
 {
  "t": "Баскет-бот",
  "c": "Спорт",
  "ac": [
   "Спорт"
  ],
  "p": "https://drive.google.com/file/d/1m0_zN_q8ZNPfbd5_p2FbssE8CGRbnxwz/preview",
  "i": "Моделі/інструкції/зображення/basket-bot-43.jpg"
 },
 {
  "t": "Батискаф",
  "c": "Кораблі",
  "ac": [
   "Кораблі"
  ],
  "p": "https://drive.google.com/file/d/1BEcyqm7oi_IlN8v1GN0EwYNsL1JgdY0A/preview",
  "i": "Моделі/інструкції/зображення/batyskaf-212.jpg"
 },
 {
  "t": "Баштовий кран",
  "c": "Спецтехніка",
  "ac": [
   "Спецтехніка"
  ],
  "p": "https://drive.google.com/file/d/1goCLHqDwMTQiGQZqFG-LmP8LjXr6I0cI/preview",
  "i": "Моделі/інструкції/зображення/bashtovyy-kran-26.jpg"
 },
 {
  "t": "Бензопила",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1fwYTAEQSnYMm5NpGRyiCge8jAmJlIa6y/preview",
  "i": "Моделі/інструкції/зображення/benzopyla-352.png"
 },
 {
  "t": "Бетмобіль",
  "c": "Автомобілі, мотоцикли",
  "ac": [
   "Автомобілі, мотоцикли",
   "Міні-моделі"
  ],
  "p": "https://drive.google.com/file/d/1TKVo8kF_RVxPV8EmKi9v39ODo6PM2ixk/preview",
  "i": "Моделі/інструкції/зображення/betmobil-207.jpg"
 },
 {
  "t": "Бик",
  "c": "Міні-моделі",
  "ac": [
   "Міні-моделі",
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1iX_FPhpSjphnHCDdP94igiUd2L7xCmpU/preview",
  "i": "Моделі/інструкції/зображення/byk-505.jpg"
 },
 {
  "t": "Богомол",
  "c": "Комахи",
  "ac": [
   "Комахи"
  ],
  "p": "https://drive.google.com/file/d/1T7Ox8r6QEz12L9TZCHmHWYX37es0osad/preview",
  "i": "Моделі/інструкції/зображення/bohomol-117.jpg"
 },
 {
  "t": "Божевільний смітник",
  "c": "Роботи",
  "ac": [
   "Роботи"
  ],
  "p": "https://drive.google.com/file/d/1Rg1pu0YNG3ZO9TQSKmHGVaR4ckK4HynZ/preview",
  "i": "Моделі/інструкції/зображення/bozhevilnyy-smitnyk-36.jpg"
 },
 {
  "t": "Боксер",
  "c": "Моделі для змагань",
  "ac": [
   "Моделі для змагань",
   "Нові інструкції",
   "Спорт"
  ],
  "p": "https://drive.google.com/file/d/1-cakMEQME0gsSiPKMrWj0ikRJ9oOpwc8/preview",
  "i": "Моделі/інструкції/зображення/bokser-573.jpg"
 },
 {
  "t": "Болотохід",
  "c": "Крокуючі",
  "ac": [
   "Крокуючі"
  ],
  "p": "https://drive.google.com/file/d/1jF5k9Xyuv1WF2BHNHp2UX_NBraECr1sF/preview",
  "i": "Моделі/інструкції/зображення/bolotokhid-19.jpg"
 },
 {
  "t": "Бормашина",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1GJqTuxm51_lxO_QTpoI93xT6Qh7l1YFK/preview",
  "i": "Моделі/інструкції/зображення/bormashyna-90.png"
 },
 {
  "t": "Бульдог",
  "c": "Міні-моделі",
  "ac": [
   "Міні-моделі",
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/19kddCAB37h4iM_JJqxiSOTlnzupti9JB/preview",
  "i": "Моделі/інструкції/зображення/buldoh-504.jpg"
 },
 {
  "t": "Бій із ведмедем",
  "c": "Люди",
  "ac": [
   "Люди"
  ],
  "p": "https://drive.google.com/file/d/1Anxanv9XGrEoNVgUDTiqqLndycOB8uZs/preview",
  "i": "Моделі/інструкції/зображення/biy-iz-vedmedem-373.jpg"
 },
 {
  "t": "Білка",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1nSuWt4ZzCbLC3rTFyoXYCAQrZEFFaFTX/preview",
  "i": "Моделі/інструкції/зображення/bilka-89.jpg"
 },
 {
  "t": "Біплан",
  "c": "Літаки, вертольоти",
  "ac": [
   "Літаки, вертольоти"
  ],
  "p": "https://drive.google.com/file/d/1qDh97A2L1HjGJf07Hnio0paXx26fLRD3/preview",
  "i": "Моделі/інструкції/зображення/biplan-311.jpg"
 },
 {
  "t": "Важіль",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/16eMwsjw3jiHK68OgomPOrEIOLhp3i0yH/preview",
  "i": "Моделі/інструкції/зображення/vazhil-461.png"
 },
 {
  "t": "Важільний механізм",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1vSpDWNE-k4XCnizAMN1brfZxjQsbObmz/preview",
  "i": "Моделі/інструкції/зображення/vazhilnyy-mekhanizm-407.jpg"
 },
 {
  "t": "Валентинка",
  "c": "Люди",
  "ac": [
   "Люди"
  ],
  "p": "https://drive.google.com/file/d/1KieMsCtZPMxCuNLKVjuS9dFYAsqhp0Q6/preview",
  "i": "Моделі/інструкції/зображення/valentynka-374.jpg"
 },
 {
  "t": "Валлі",
  "c": "Моделі без смартхаба",
  "ac": [
   "Моделі без смартхаба",
   "Роботи"
  ],
  "p": "https://drive.google.com/file/d/1Aqw2aIyLMvJMhHz1CX9quc34xN-mN9Mn/preview",
  "i": "Моделі/інструкції/зображення/valli-4.jpg"
 },
 {
  "t": "Вантажна платформа",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Спецтехніка"
  ],
  "p": "https://drive.google.com/file/d/1Fid1zmXKxFkVYJNzpsb9a4a6QSvIYJ-D/preview",
  "i": "Моделі/інструкції/зображення/vantazhna-platforma-555.jpg"
 },
 {
  "t": "Вантажний космічний корабель",
  "c": "Космос",
  "ac": [
   "Космос",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/1zYaZfiWJZbEuv7mKCXQAsbhW6-TAytuo/preview",
  "i": "Моделі/інструкції/зображення/vantazhnyy-kosmichnyy-korabel-562.jpg"
 },
 {
  "t": "Вантажівка",
  "c": "Автомобілі, мотоцикли",
  "ac": [
   "Автомобілі, мотоцикли",
   "Спецтехніка"
  ],
  "p": "https://drive.google.com/file/d/1t_TTZfQK29cKn4HKI1hwv-2OrrsObusa/preview",
  "i": "Моделі/інструкції/зображення/vantazhivka-339.jpg"
 },
 {
  "t": "Ведмідь",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1mCaQAU3IxAMPD6I6KADdJ-ou1Z6Ix_RL/preview",
  "i": "Моделі/інструкції/зображення/vedmid-112.jpg"
 },
 {
  "t": "Велосипед 3-х колісний",
  "c": "Механізми",
  "ac": [
   "Механізми",
   "Міні-моделі"
  ],
  "p": "https://drive.google.com/file/d/1zLdB7co4K4W55WlZVtp2MVc7lDJlHWDS/preview",
  "i": "Моделі/інструкції/зображення/velosyped-3-kh-kolisnyy-518.jpg"
 },
 {
  "t": "Велосипедист",
  "c": "Люди",
  "ac": [
   "Люди",
   "Спорт"
  ],
  "p": "https://drive.google.com/file/d/1nD2HPid6H7L2uurOoucs78E-H7P3J10w/preview",
  "i": "Моделі/інструкції/зображення/velosypedyst-45.jpg"
 },
 {
  "t": "Велосипедисти",
  "c": "Люди",
  "ac": [
   "Люди",
   "Спорт"
  ],
  "p": "https://drive.google.com/file/d/1Ho7dyf9iN6XloBur_-fTwAp0lGS3m1MU/preview",
  "i": "Моделі/інструкції/зображення/velosypedysty-382.jpg"
 },
 {
  "t": "Велотренажер",
  "c": "Спорт",
  "ac": [
   "Спорт"
  ],
  "p": "https://drive.google.com/file/d/1heajdHjbzLq6bKTmQtNjPkWHkpZQcdcy/preview",
  "i": "Моделі/інструкції/зображення/velotrenazher-46.jpg"
 },
 {
  "t": "Венерина мухолівка",
  "c": "Рослини",
  "ac": [
   "Рослини"
  ],
  "p": "https://drive.google.com/file/d/1tmrXq6407kW3s7F8X8O3zO706zyx71JF/preview",
  "i": "Моделі/інструкції/зображення/veneryna-mukholivka-396.jpg"
 },
 {
  "t": "Вентилятор",
  "c": "Механізми",
  "ac": [
   "Механізми",
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/1ZCjxKd7aCdjiplcFE1CCxiIhSLAO1JER/preview",
  "i": "Моделі/інструкції/зображення/ventylyator-375.jpg"
 },
 {
  "t": "Вертоліт",
  "c": "Міні-моделі",
  "ac": [
   "Військова техніка",
   "Літаки, вертольоти",
   "Міні-моделі",
   "Нові інструкції",
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/1oRsC2CMklImDG-uSzXd-sWkZqw5UyZiO/preview",
  "i": "Моделі/інструкції/зображення/vertolit-496.jpg"
 },
 {
  "t": "Вертоліт КА-32",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Літаки, вертольоти"
  ],
  "p": "https://drive.google.com/file/d/1uzZrzIsCkTKKPl8zUjO_teRLG-tl9Cvz/preview",
  "i": "Моделі/інструкції/зображення/vertolit-ka-32-572.jpg"
 },
 {
  "t": "Веселий автопоїзд",
  "c": "Транспорт",
  "ac": [
   "Транспорт"
  ],
  "p": "https://drive.google.com/file/d/1C3QJtY4CVPkI87TsToDTDL5WddmumhZH/preview",
  "i": "Моделі/інструкції/зображення/veselyy-avtopoyizd-475.jpg"
 },
 {
  "t": "Веселий робот",
  "c": "Механізми",
  "ac": [
   "Механізми",
   "Роботи"
  ],
  "p": "https://drive.google.com/file/d/18Kmsi7mt6BjI_bHXjVMYXsoxaQMhWJ-s/preview",
  "i": "Моделі/інструкції/зображення/veselyy-robot-377.jpg"
 },
 {
  "t": "Вигин",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/1RlgUaongbPWUp7kCh6YbOrWB_YSsMqtp/preview",
  "i": "Моделі/інструкції/зображення/vyhyn-443.png"
 },
 {
  "t": "Винищувач",
  "c": "Літаки, вертольоти",
  "ac": [
   "Літаки, вертольоти",
   "Військова техніка"
  ],
  "p": "https://drive.google.com/file/d/1_V5ARzyD0Wd--FFaJdkN3K9ZfBctc0ix/preview",
  "i": "Моделі/інструкції/зображення/vynyshchuvach-323.jpg"
 },
 {
  "t": "Воротар",
  "c": "Спорт",
  "ac": [
   "Спорт"
  ],
  "p": "https://drive.google.com/file/d/1uudvLHoDHVXcw-Skl4mKi7cwmi0zZEOn/preview",
  "i": "Моделі/інструкції/зображення/vorotar-47.jpg"
 },
 {
  "t": "Восьминіг",
  "c": "Міні-моделі",
  "ac": [
   "Міні-моделі",
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/15zrGMbNgbjH-KXQvwrJqRkwxEBoGu4Xk/preview",
  "i": "Моделі/інструкції/зображення/vosmynih-499.jpg"
 },
 {
  "t": "Воїн (сумо)",
  "c": "Моделі для змагань",
  "ac": [
   "Моделі для змагань"
  ],
  "p": "https://drive.google.com/file/d/1LB8elI_6fcFyoNXv0ZFxontu_HkAEaU3/preview",
  "i": "Моделі/інструкції/зображення/voyin-sumo-97.jpg"
 },
 {
  "t": "Вудка",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/16J82bI2Q8Dv2Wbtb9EQpHdGJetuOTVBC/preview",
  "i": "Моделі/інструкції/зображення/vudka-360.png"
 },
 {
  "t": "Візок Санти",
  "c": "Новорічні",
  "ac": [
   "Новорічні"
  ],
  "p": "https://drive.google.com/file/d/1SU0DciUF3OfRM72EZ6wVUosaGSy_8iU-/preview",
  "i": "Моделі/інструкції/зображення/vizok-santy-430.png"
 },
 {
  "t": "Вітрильник",
  "c": "Кораблі",
  "ac": [
   "Кораблі",
   "Міні-моделі"
  ],
  "p": "https://drive.google.com/file/d/12fDCq8XwaI_9OcTGv65slWg4xACN6Uv7/preview",
  "i": "Моделі/інструкції/зображення/vitrylnyk-508.jpg"
 },
 {
  "t": "Вітроелектростанція",
  "c": "Механізми",
  "ac": [
   "Механізми",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/1HBWSZQe8gzgPf2acbiWX1UrLRcS7v5M_/preview",
  "i": "Моделі/інструкції/зображення/vitroelektrostantsiya-578.jpg"
 },
 {
  "t": "Гармата",
  "c": "Військова техніка",
  "ac": [
   "Військова техніка"
  ],
  "p": "https://drive.google.com/file/d/1QqXoQVt9wFp38DFbS82SL02ktMP2MFJX/preview",
  "i": "Моделі/інструкції/зображення/harmata-228.jpg"
 },
 {
  "t": "Геккон",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1SBMl89dNWRVVbjSFSDvyBWb_l68Mh0VR/preview",
  "i": "Моделі/інструкції/зображення/hekkon-27.jpg"
 },
 {
  "t": "Гладіатор",
  "c": "Моделі для змагань",
  "ac": [
   "Моделі для змагань"
  ],
  "p": "https://drive.google.com/file/d/1mT5B2wcQO1c8YX8iv8XjfCy5opATYsJT/preview",
  "i": "Моделі/інструкції/зображення/hladiator-98.png"
 },
 {
  "t": "Годзілла",
  "c": "Динозаври",
  "ac": [
   "Динозаври"
  ],
  "p": "https://drive.google.com/file/d/1WSqbsS-s_-H6mawian04pYgP5RDhYGhR/preview",
  "i": "Моделі/інструкції/зображення/hodzilla-72.jpg"
 },
 {
  "t": "Голова динозавра",
  "c": "Динозаври",
  "ac": [
   "Динозаври"
  ],
  "p": "https://drive.google.com/file/d/1d08dVWRkylgXyDo-RLG49J8tIDEvGKpj/preview",
  "i": "Моделі/інструкції/зображення/holova-dynozavra-73.jpg"
 },
 {
  "t": "Гольфіст",
  "c": "Люди",
  "ac": [
   "Люди",
   "Спорт"
  ],
  "p": "https://drive.google.com/file/d/1nwJOLtKoqcZf3AtALKMqtbQd1mkFfOUj/preview",
  "i": "Моделі/інструкції/зображення/holfist-51.jpg"
 },
 {
  "t": "Гондола",
  "c": "Кораблі",
  "ac": [
   "Кораблі"
  ],
  "p": "https://drive.google.com/file/d/1ZK7PrA4Gybs8VyTEOINBT-traMr6CX4t/preview",
  "i": "Моделі/інструкції/зображення/hondola-216.jpg"
 },
 {
  "t": "Гоночний автомобіль",
  "c": "Автомобілі, мотоцикли",
  "ac": [
   "Автомобілі, мотоцикли",
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/1qPPspUtPbjapPCrNrbTfCJjaM6sl9EcP/preview",
  "i": "Моделі/інструкції/зображення/honochnyy-avtomobil-278.jpg"
 },
 {
  "t": "Горила",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1nLg5L5hcalQilu3fiN-aN6VnCFy3HjR8/preview",
  "i": "Моделі/інструкції/зображення/horyla-121.jpg"
 },
 {
  "t": "Гулівер",
  "c": "Люди",
  "ac": [
   "Люди"
  ],
  "p": "https://drive.google.com/file/d/1p-yA4fwuVkZNEj8Ovp4RqfGGmbI8vlgR/preview",
  "i": "Моделі/інструкції/зображення/huliver-383.jpg"
 },
 {
  "t": "Гусениця",
  "c": "Комахи",
  "ac": [
   "Комахи",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/1lSs1aqFw_u_4ZOl9kmxvm6Ov-ViuLiqM/preview",
  "i": "Моделі/інструкції/зображення/husenytsya-124.jpg"
 },
 {
  "t": "Гідроплан",
  "c": "Літаки, вертольоти",
  "ac": [
   "Літаки, вертольоти"
  ],
  "p": "https://drive.google.com/file/d/17X5ektvaKikpGNwUzkJaNESiiEJmIg-P/preview",
  "i": "Моделі/інструкції/зображення/hidroplan-214.jpg"
 },
 {
  "t": "Гімнаст",
  "c": "Спорт",
  "ac": [
   "Спорт"
  ],
  "p": "https://drive.google.com/file/d/1Cz-82l66kWVRbpAkBq6A5IXjdx6vjJjF/preview",
  "i": "Моделі/інструкції/зображення/himnast-476.jpg"
 },
 {
  "t": "Гітара",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1uKZCXcBumFgWHl8nDFpPxMwE2h2gYg_m/preview",
  "i": "Моделі/інструкції/зображення/hitara-381.jpg"
 },
 {
  "t": "Двоголовий дракон",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/17K3l2SzyP6YuoUqCZMeHxfRFFby1FUlv/preview",
  "i": "Моделі/інструкції/зображення/dvoholovyy-drakon-129.jpg"
 },
 {
  "t": "Двомоторна платформа",
  "c": "Моделі для змагань",
  "ac": [
   "Моделі для змагань"
  ],
  "p": "https://drive.google.com/file/d/11ZwA-5GPA0qJfcwdEl-z7x7eVbgMEeln/preview",
  "i": "Моделі/інструкції/зображення/dvomotorna-platforma-101.jpg"
 },
 {
  "t": "Двомоторний робот",
  "c": "Моделі для змагань",
  "ac": [
   "Моделі для змагань"
  ],
  "p": "https://drive.google.com/file/d/1bhBbzZFF9j67omh_YY3hHKB8d0Kzq9m6/preview",
  "i": "Моделі/інструкції/зображення/dvomotornyy-robot-102.jpg"
 },
 {
  "t": "Двохвинтовий вертоліт",
  "c": "Літаки, вертольоти",
  "ac": [
   "Літаки, вертольоти"
  ],
  "p": "https://drive.google.com/file/d/1ddOtIrru4PHNifqKOywdrkZOzA06NVbV/preview",
  "i": "Моделі/інструкції/зображення/dvokhvyntovyy-vertolit-318.jpg"
 },
 {
  "t": "Джип",
  "c": "Автомобілі, мотоцикли",
  "ac": [
   "Автомобілі, мотоцикли",
   "Моделі без смартхаба",
   "Міні-моделі"
  ],
  "p": "https://drive.google.com/file/d/1Q7KExnt9I7e9IFROzbdWoG5-h0upw9qp/preview",
  "i": "Моделі/інструкції/зображення/dzhyp-2.jpg"
 },
 {
  "t": "Джойстик",
  "c": "Механізми",
  "ac": [
   "Механізми",
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/1iW71rUqgpjBowIY6ft_RsR9zzuCh7YvU/preview",
  "i": "Моделі/інструкції/зображення/dzhoystyk-439.jpg"
 },
 {
  "t": "Джойстик управління",
  "c": "Космос",
  "ac": [
   "Космос",
   "Механізми",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/17GS8mzO2m9LvY6ocLJjihIF0Stmgio7p/preview",
  "i": "Моделі/інструкції/зображення/dzhoystyk-upravlinnya-563.jpg"
 },
 {
  "t": "Дзига",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1b9EArq64YLqX7dv36YH5Jzis6IU0J1Y5/preview",
  "i": "Моделі/інструкції/зображення/dzyha-380.jpg"
 },
 {
  "t": "Динозавр",
  "c": "Динозаври",
  "ac": [
   "Динозаври"
  ],
  "p": "https://drive.google.com/file/d/1UXntmEkJ816kNcaY8NkbZ09y_FXiO32y/preview",
  "i": "Моделі/інструкції/зображення/dynozavr-492.jpg"
 },
 {
  "t": "Диригент",
  "c": "Люди",
  "ac": [
   "Люди"
  ],
  "p": "https://drive.google.com/file/d/19CMAtG3hG_vXdRpagedyJnCQEItAz9UB/preview",
  "i": "Моделі/інструкції/зображення/dyryhent-384.jpg"
 },
 {
  "t": "Дослідницький супутник",
  "c": "Космос",
  "ac": [
   "Космос",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/186v_HAweMGol4Qm9dajXg32iImc4xs1x/preview",
  "i": "Моделі/інструкції/зображення/doslidnytskyy-suputnyk-561.jpg"
 },
 {
  "t": "Драгстер",
  "c": "Автомобілі, мотоцикли",
  "ac": [
   "Автомобілі, мотоцикли"
  ],
  "p": "https://drive.google.com/file/d/119L_KoidMExXQbyQx3tHl8u0QfasEF3i/preview",
  "i": "Моделі/інструкції/зображення/drahster-286.jpg"
 },
 {
  "t": "Дракон",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1CDWh7kMBzZdpyK1aQKOLhHlr-Svd4nXt/preview",
  "i": "Моделі/інструкції/зображення/drakon-74.jpg"
 },
 {
  "t": "Дракоша",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1zzusOwSeaoBl-nsMetxgZ4virh673hJd/preview",
  "i": "Моделі/інструкції/зображення/drakosha-109.jpg"
 },
 {
  "t": "Дройдека",
  "c": "Роботи",
  "ac": [
   "Роботи",
   "Зоряні війни"
  ],
  "p": "https://drive.google.com/file/d/10znQAT59BVg0AQ9btKZGeX41qr9tgby1/preview",
  "i": "Моделі/інструкції/зображення/droydeka-197.jpg"
 },
 {
  "t": "Діметродон",
  "c": "Динозаври",
  "ac": [
   "Динозаври"
  ],
  "p": "https://drive.google.com/file/d/14YrQzZfqQW15725OatNhNgxi7EjnwTTZ/preview",
  "i": "Моделі/інструкції/зображення/dimetrodon-59.jpg"
 },
 {
  "t": "Евакуатор",
  "c": "Автомобілі, мотоцикли",
  "ac": [
   "Автомобілі, мотоцикли",
   "Спецтехніка"
  ],
  "p": "https://drive.google.com/file/d/10lSvLB7olSPf_ApqgIRvklNSOi9F-dM2/preview",
  "i": "Моделі/інструкції/зображення/evakuator-351.jpg"
 },
 {
  "t": "Екскаватор",
  "c": "Спецтехніка",
  "ac": [
   "Спецтехніка"
  ],
  "p": "https://drive.google.com/file/d/1v2zoBfWSCFCEcr2W9wdiDKsOs-xI54xU/preview",
  "i": "Моделі/інструкції/зображення/ekskavator-261.jpg"
 },
 {
  "t": "Жаба",
  "c": "Міні-моделі",
  "ac": [
   "Міні-моделі",
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1jyqHovCIZJHjZKur3j-w_ZWc5yg8W8X8/preview",
  "i": "Моделі/інструкції/зображення/zhaba-498.jpg"
 },
 {
  "t": "Жабеня",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1YJYXUmK-KqPWRbNCVli2yv5CUQa1MXAR/preview",
  "i": "Моделі/інструкції/зображення/zhabenya-547.jpg"
 },
 {
  "t": "Жабенятко",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "Офіційні/zhabenyatko-716.pdf",
  "i": ""
 },
 {
  "t": "Жаби",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1Az_7-9pjAj9o51-pc3kxMP-xVMtPtILE/preview",
  "i": "Моделі/інструкції/зображення/zhaby-150.jpg"
 },
 {
  "t": "Жираф",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1ejIoCQhjh2fdCiAR7t2XHi8Wk83J7-6H/preview",
  "i": "Моделі/інструкції/зображення/zhyraf-127.jpg"
 },
 {
  "t": "Жук",
  "c": "Комахи",
  "ac": [
   "Комахи"
  ],
  "p": "https://drive.google.com/file/d/1-Al44_UDhRRAU2wxEnbQKg6qZ1SQ5C2B/preview",
  "i": "Моделі/інструкції/зображення/zhuk-477.jpg"
 },
 {
  "t": "Заварник чаю",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1s_P-Hd20nU_kczomOJzo_muVy6e_UaQa/preview",
  "i": "Моделі/інструкції/зображення/zavarnyk-chayu-385.jpg"
 },
 {
  "t": "Залізна людина",
  "c": "Роботи",
  "ac": [
   "Роботи"
  ],
  "p": "https://drive.google.com/file/d/1nFnRfibGLs5HrAgBRuz4RCz2dDhQC6c6/preview",
  "i": "Моделі/інструкції/зображення/zalizna-lyudyna-526.jpg"
 },
 {
  "t": "Залізничний навантажувач",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/15RyO67GpYHJtm9R1mKsLhylcuZ-VQv4z/preview",
  "i": "Моделі/інструкції/зображення/zaliznychnyy-navantazhuvach-247.jpg"
 },
 {
  "t": "Зауропод",
  "c": "Динозаври",
  "ac": [
   "Динозаври"
  ],
  "p": "https://drive.google.com/file/d/1O9VFJl81-iVYWJ8bUl-U__fzDac6yir7/preview",
  "i": "Моделі/інструкції/зображення/zauropod-60.jpg"
 },
 {
  "t": "Захват",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "Офіційні/zakhvat-85.pdf",
  "i": ""
 },
 {
  "t": "Захоплення",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/1lvmfHMit4IHk9f2WNLeJDW1lACDZgGgS/preview",
  "i": "Моделі/інструкції/зображення/zakhoplennya-441.png"
 },
 {
  "t": "Заєць",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1tnLGLv5utXfJCbcQMVdtAUdzYpqcqqTq/preview",
  "i": "Моделі/інструкції/зображення/zayets-540.jpg"
 },
 {
  "t": "Заєць із молотком",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/19ctqFyKj_Fmd_PCelxvapWpqcvnqBHnD/preview",
  "i": "Моделі/інструкції/зображення/zayets-iz-molotkom-386.jpg"
 },
 {
  "t": "Збиральна машина",
  "c": "Спецтехніка",
  "ac": [
   "Спецтехніка"
  ],
  "p": "https://drive.google.com/file/d/1Tp_E2ir6-Vfnf2pBHMHKfUITqlVyQP49/preview",
  "i": "Моделі/інструкції/зображення/zbyralna-mashyna-294.jpg"
 },
 {
  "t": "Згинання",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "Офіційні/zhynannya-946.pdf",
  "i": ""
 },
 {
  "t": "Землемірка",
  "c": "Комахи",
  "ac": [
   "Комахи",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/1wG2X9udccJKi9Ka9Lq2rOyKlEYXDDVqK/preview",
  "i": "Моделі/інструкції/зображення/zemlemirka-584.jpg"
 },
 {
  "t": "Землетрус",
  "c": "Механізми",
  "ac": [
   "Механізми",
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/1Hqv6GNHnX3dfFYNOlQDg_qX-3mN_dGIW/preview",
  "i": "Моделі/інструкції/зображення/zemletrus-442.png"
 },
 {
  "t": "ЗигЗаг",
  "c": "Моделі для змагань",
  "ac": [
   "Моделі для змагань"
  ],
  "p": "https://drive.google.com/file/d/1H6ErPrk3YGic6IIJT7GYI2EbjYK5g7Wk/preview",
  "i": "Моделі/інструкції/зображення/zyhzah-110.jpg"
 },
 {
  "t": "Зимовий дослідник",
  "c": "Моделі для змагань",
  "ac": [
   "Моделі для змагань"
  ],
  "p": "https://drive.google.com/file/d/1CcEy7W-YEHsNYGDj0_CkQl1tmD0y82Nl/preview",
  "i": "Моделі/інструкції/зображення/zymovyy-doslidnyk-103.jpg"
 },
 {
  "t": "Змія",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/152FI38RQAewZ_QbLcgsXkqQIBSF7ry89/preview",
  "i": "Моделі/інструкції/зображення/zmiya-130.jpg"
 },
 {
  "t": "Кабріолет",
  "c": "Автомобілі, мотоцикли",
  "ac": [
   "Автомобілі, мотоцикли",
   "Моделі без смартхаба"
  ],
  "p": "https://drive.google.com/file/d/1Kg_U-YjK_D_Sw6Q5tf-FPLU9AcMho8Wq/preview",
  "i": "Моделі/інструкції/зображення/kabriolet-1.jpg"
 },
 {
  "t": "Какаду",
  "c": "Птахи",
  "ac": [
   "Птахи"
  ],
  "p": "https://drive.google.com/file/d/1UpT3rg5brr3N7RaJK9wwoFsF3aHmYFFJ/preview",
  "i": "Моделі/інструкції/зображення/kakadu-132.jpg"
 },
 {
  "t": "Канатна дорога",
  "c": "Механізми",
  "ac": [
   "Механізми",
   "Транспорт"
  ],
  "p": "https://drive.google.com/file/d/1C4vJga6QNqich7t9SoOEHGn9lWGVpJ2s/preview",
  "i": "Моделі/інструкції/зображення/kanatna-doroha-267.jpg"
 },
 {
  "t": "Карлсон",
  "c": "Люди",
  "ac": [
   "Люди"
  ],
  "p": "https://drive.google.com/file/d/17IkCB3a6EjAr5BYXcE2BBKgpf55BmSQx/preview",
  "i": "Моделі/інструкції/зображення/karlson-324.jpg"
 },
 {
  "t": "Карусель",
  "c": "Механізми",
  "ac": [
   "Механізми",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/184MbNWfwAR_0sBotG157I7ZsHJSuVmyC/preview",
  "i": "Моделі/інструкції/зображення/karusel-203.jpg"
 },
 {
  "t": "Карусель \"Вітерець\"",
  "c": "Механізми",
  "ac": [
   "Механізми",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/1IEDNyNTODoUCobDgUvmW8deGGhGwptIL/preview",
  "i": "Моделі/інструкції/зображення/karusel-viterets-550.jpg"
 },
 {
  "t": "Каса",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1CpdNoheu7c9aL5tmyGKyF7iFCxLeDrK4/preview",
  "i": "Моделі/інструкції/зображення/kasa-387.jpg"
 },
 {
  "t": "Катамаран-дослідник",
  "c": "Кораблі",
  "ac": [
   "Кораблі",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/19Ez9EI8JOQ9nMABjMz3t-JIWK7OlZO51/preview",
  "i": "Моделі/інструкції/зображення/katamaran-doslidnyk-577.jpg"
 },
 {
  "t": "Катапульта",
  "c": "Механізми",
  "ac": [
   "Військова техніка",
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1KTBI0g21A6oDZXuaNfWrDTf0aVHCCge0/preview",
  "i": "Моделі/інструкції/зображення/katapulta-262.jpg"
 },
 {
  "t": "Катапульта для птахів",
  "c": "Механізми",
  "ac": [
   "Механізми",
   "Військова техніка"
  ],
  "p": "https://drive.google.com/file/d/18M1fP3bKInRvvsn7gavyW3jcr2X7SrTJ/preview",
  "i": "Моделі/інструкції/зображення/katapulta-dlya-ptakhiv-485.jpg"
 },
 {
  "t": "Катер",
  "c": "Кораблі",
  "ac": [
   "Кораблі"
  ],
  "p": "https://drive.google.com/file/d/1eGde2WM1PuURCKQeJjxKEADZLzXuXktQ/preview",
  "i": "Моделі/інструкції/зображення/kater-217.jpg"
 },
 {
  "t": "Катюша",
  "c": "Військова техніка",
  "ac": [
   "Військова техніка"
  ],
  "p": "https://drive.google.com/file/d/1lDeDZh8vr5AEjZO_YG4HvHUJpHeruKM3/preview",
  "i": "Моделі/інструкції/зображення/katyusha-226.jpg"
 },
 {
  "t": "Качка",
  "c": "Міні-моделі",
  "ac": [
   "Міні-моделі",
   "Птахи"
  ],
  "p": "https://drive.google.com/file/d/1c-LQ4vkVD0moGry9Vkr0xiOMZ41uy9Qt/preview",
  "i": "Моделі/інструкції/зображення/kachka-516.jpg"
 },
 {
  "t": "Качка, що повертається, качка",
  "c": "Птахи",
  "ac": [
   "Птахи"
  ],
  "p": "https://drive.google.com/file/d/1KUGtxkiwHEYdTCt7lyaCGUWzmVIKswFO/preview",
  "i": "Моделі/інструкції/зображення/kachka-shcho-povertayetsya-kachka-115.jpg"
 },
 {
  "t": "Квадрокоптер",
  "c": "Літаки, вертольоти",
  "ac": [
   "Літаки, вертольоти"
  ],
  "p": "https://drive.google.com/file/d/1VCs3ghlhZBTYmxk006iCSvUhj99oDr-S/preview",
  "i": "Моделі/інструкції/зображення/kvadrokopter-325.jpg"
 },
 {
  "t": "Квітка",
  "c": "Рослини",
  "ac": [
   "Рослини"
  ],
  "p": "https://drive.google.com/file/d/1vLsncredwXS70BaWDYf7lJgRIoBFqYAp/preview",
  "i": "Моделі/інструкції/зображення/kvitka-419.jpg"
 },
 {
  "t": "Квітка та бджола",
  "c": "Комахи",
  "ac": [
   "Комахи",
   "Офіційні інструкції LEGO",
   "Рослини"
  ],
  "p": "https://drive.google.com/file/d/1pugSXuwDa6QUbUpYR1P00CBzTW8Roa__/preview",
  "i": "Моделі/інструкції/зображення/kvitka-ta-bdzhola-470.png"
 },
 {
  "t": "Квітка і бджола",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "Офіційні/kvitka-i-bdzhola-505.pdf",
  "i": ""
 },
 {
  "t": "Кенгуру",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Крокуючі",
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1bR63rfNu1lSKSP71vswepV5SFbG2fQzD/preview",
  "i": "Моделі/інструкції/зображення/kenhuru-542.jpg"
 },
 {
  "t": "Кермування",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "Офіційні/kermuvannya-991.pdf",
  "i": ""
 },
 {
  "t": "Ковалі",
  "c": "Люди",
  "ac": [
   "Люди"
  ],
  "p": "https://drive.google.com/file/d/1HUg9ySgKieCAbQ20F9BXSUutvcOWqiZZ/preview",
  "i": "Моделі/інструкції/зображення/kovali-390.jpg"
 },
 {
  "t": "Ковзанка",
  "c": "Спецтехніка",
  "ac": [
   "Спецтехніка"
  ],
  "p": "https://drive.google.com/file/d/1Cwfr4qri3wLKvfcycnnx6laLtzSQPJDn/preview",
  "i": "Моделі/інструкції/зображення/kovzanka-341.jpg"
 },
 {
  "t": "Коди з датчиком нахилу",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/1Tn58KQEsvzEX-6-CwtarqEz9npp_YHDp/preview",
  "i": "Моделі/інструкції/зображення/kody-z-datchykom-nakhylu-446.png"
 },
 {
  "t": "Коди з датчиком руху",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/1jA5TjCB_aJSuBUO0FCbS5BOfiDIcxJte/preview",
  "i": "Моделі/інструкції/зображення/kody-z-datchykom-rukhu-445.png"
 },
 {
  "t": "Коді",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/1SY9dWOVazU-IyIXbTFmcGbCEJrWkwDAd/preview",
  "i": "Моделі/інструкції/зображення/kodi-447.png"
 },
 {
  "t": "Коді з датчиком нахилу",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "Офіційні/kodi-z-datchykom-nakhylu-10.pdf",
  "i": ""
 },
 {
  "t": "Коді з датчиком руху",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "Офіційні/kodi-z-datchykom-rukhu-46.pdf",
  "i": ""
 },
 {
  "t": "Коливання",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/1KC6ByIq9jH9UtsnR8-qByCTCN1nHiHTh/preview",
  "i": "Моделі/інструкції/зображення/kolyvannya-448.png"
 },
 {
  "t": "Комар",
  "c": "Комахи",
  "ac": [
   "Комахи"
  ],
  "p": "https://drive.google.com/file/d/1vQkbKVKgkaVr3SsZd0Lh9CwbwvyIu32O/preview",
  "i": "Моделі/інструкції/зображення/komar-134.jpg"
 },
 {
  "t": "Комбайн",
  "c": "Спецтехніка",
  "ac": [
   "Спецтехніка"
  ],
  "p": "https://drive.google.com/file/d/1meNLMg-OpgKJEbNfKcR1U4ROu7aXwRxI/preview",
  "i": "Моделі/інструкції/зображення/kombayn-249.jpg"
 },
 {
  "t": "Конвертоплан",
  "c": "Нові інструкції",
  "ac": [
   "Літаки, вертольоти",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/1o33eYuzGLW1UGfSUNiBqtzbsvIzliNCM/preview",
  "i": "Моделі/інструкції/зображення/konvertoplan-531.jpg"
 },
 {
  "t": "Конвеєр",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/1THDGkxhgbVIsWhHS52l_oc_0tTQ5X0Yc/preview",
  "i": "Моделі/інструкції/зображення/konveyer-449.png"
 },
 {
  "t": "Коник",
  "c": "Комахи",
  "ac": [
   "Комахи"
  ],
  "p": "https://drive.google.com/file/d/1E9XaLD2DjzfHrGL7nUqpJeIZh25-BNnX/preview",
  "i": "Моделі/інструкції/зображення/konyk-141.jpg"
 },
 {
  "t": "Контейнерний навантажувач",
  "c": "Спецтехніка",
  "ac": [
   "Спецтехніка"
  ],
  "p": "https://drive.google.com/file/d/1scMgoTdnSEesk-MhZ1b7xAMEPLxi1FkN/preview",
  "i": "Моделі/інструкції/зображення/konteynernyy-navantazhuvach-347.jpg"
 },
 {
  "t": "Конячка",
  "c": "Міні-моделі",
  "ac": [
   "Міні-моделі",
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1tjRNGnxuqhe5dyrE7fDhEcWO5XI2bu3E/preview",
  "i": "Моделі/інструкції/зображення/konyachka-506.jpg"
 },
 {
  "t": "Конячка з візком",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1HiXbO7NfmHl4WfbyP3ePZMPL2mUaWCme/preview",
  "i": "Моделі/інструкції/зображення/konyachka-z-vizkom-495.jpg"
 },
 {
  "t": "Корабель",
  "c": "Кораблі",
  "ac": [
   "Кораблі",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/1lZO2207Qm9FI2c1bRi3qyHhtu6ZZC30o/preview",
  "i": "Моделі/інструкції/зображення/korabel-220.jpg"
 },
 {
  "t": "Корабель у шторм",
  "c": "Кораблі",
  "ac": [
   "Кораблі"
  ],
  "p": "https://drive.google.com/file/d/1eGKfxvpjrvxO-Ggnuf01qjFDgfncgWZ9/preview",
  "i": "Моделі/інструкції/зображення/korabel-u-shtorm-222.jpg"
 },
 {
  "t": "Кораблик на хвилях",
  "c": "Кораблі",
  "ac": [
   "Кораблі",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/1rKpAVOdiO86uoEGA8fWnjDDmhVYGSey5/preview",
  "i": "Моделі/інструкції/зображення/korablyk-na-khvylyakh-543.jpg"
 },
 {
  "t": "Коробка передач",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1zAnqcX0tOHp8bRrm6jMquCMbCJ3jZ-Bw/preview",
  "i": "Моделі/інструкції/зображення/korobka-peredach-403.jpg"
 },
 {
  "t": "Космічний ліфт",
  "c": "Космос",
  "ac": [
   "Космос",
   "Механізми",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/1XlsQ9ITx0AfC8QBZrum3cy7dP9LVqFpf/preview",
  "i": "Моделі/інструкції/зображення/kosmichnyy-lift-559.jpg"
 },
 {
  "t": "Космодром",
  "c": "Космос",
  "ac": [
   "Космос",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/1ecTlm5fnl2LaTgj5eoNHNvWOaL_vWq-k/preview",
  "i": "Моделі/інструкції/зображення/kosmodrom-582.jpg"
 },
 {
  "t": "Космонавт",
  "c": "Космос",
  "ac": [
   "Космос"
  ],
  "p": "https://drive.google.com/file/d/12-icBfTB1WDUQ1QOwnr2-LaQRU7oCw7p/preview",
  "i": "Моделі/інструкції/зображення/kosmonavt-490.jpg"
 },
 {
  "t": "Космічний бій",
  "c": "Космос",
  "ac": [
   "Космос"
  ],
  "p": "https://drive.google.com/file/d/1VRltjI8Lr3hLTE4DpPvPnEl7mCwk3h7-/preview",
  "i": "Моделі/інструкції/зображення/kosmichnyy-biy-235.jpg"
 },
 {
  "t": "Космічний корабель Схід",
  "c": "Космос",
  "ac": [
   "Космос"
  ],
  "p": "Моделі/instructions/kosmicheskiy-korabl-vostok-231.pdf",
  "i": "Моделі/інструкції/зображення/kosmichnyy-korabel-skhid-231.jpg"
 },
 {
  "t": "Космічні перегони",
  "c": "Космос",
  "ac": [
   "Космос",
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1TY5WO3NbeUKaTKr1Tg8nd1WI_r_mT-0s/preview",
  "i": "Моделі/інструкції/зображення/kosmichni-perehony-234.jpg"
 },
 {
  "t": "Котушка",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/17OWnm9POspXa8nhg7hLMedbwyzrwAART/preview",
  "i": "Моделі/інструкції/зображення/kotushka-444.png"
 },
 {
  "t": "КПП",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1Djape1XPXUhgj5Dg3rXtKr7YM0kPBqao/preview",
  "i": "Моделі/інструкції/зображення/kpp-388.png"
 },
 {
  "t": "Краб",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1hC-wQty5F5N4PpMZw28sYVAx1aJFXsl4/preview",
  "i": "Моделі/інструкції/зображення/krab-137.jpg"
 },
 {
  "t": "Крокодил",
  "c": "Міні-моделі",
  "ac": [
   "Міні-моделі",
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1SKTIKvk6sZH4Bw6wRX2TBOK1YOSJzMy3/preview",
  "i": "Моделі/інструкції/зображення/krokodyl-497.jpg"
 },
 {
  "t": "Крокуюча людина",
  "c": "Люди",
  "ac": [
   "Люди",
   "Крокуючі"
  ],
  "p": "https://drive.google.com/file/d/1OECD46QZ_79sM6EHNcrCSirxpwd5k3WD/preview",
  "i": "Моделі/інструкції/зображення/krokuyucha-lyudyna-21.jpg"
 },
 {
  "t": "Крокуюча істота",
  "c": "Крокуючі",
  "ac": [
   "Крокуючі"
  ],
  "p": "https://drive.google.com/file/d/1p_t0Dv7wny4QDA5TDeYYXlzkm9-ZwKBJ/preview",
  "i": "Моделі/інструкції/зображення/krokuyucha-istota-23.jpg"
 },
 {
  "t": "Крокуючий робот",
  "c": "Нові інструкції",
  "ac": [
   "Крокуючі",
   "Нові інструкції",
   "Роботи"
  ],
  "p": "https://drive.google.com/file/d/1EZgmg3mOxHv9UvmhyaoTCbmY4dzLJImV/preview",
  "i": "Моделі/інструкції/зображення/krokuyuchyy-robot-533.jpg"
 },
 {
  "t": "Кріпер",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1CYIKH2UsMuqzTSM6XXb0inT0vmxNK2bn/preview",
  "i": "Моделі/інструкції/зображення/kriper-39.jpg"
 },
 {
  "t": "Культиватор",
  "c": "Спецтехніка",
  "ac": [
   "Спецтехніка"
  ],
  "p": "https://drive.google.com/file/d/1wGayvdqFuIZuYcl6LbWjLpRk52KxqTJf/preview",
  "i": "Моделі/інструкції/зображення/kultyvator-253.jpg"
 },
 {
  "t": "Кухар",
  "c": "Люди",
  "ac": [
   "Люди"
  ],
  "p": "https://drive.google.com/file/d/1jenAj96IEFi6Gx8mLia--9-Z-LtVijmN/preview",
  "i": "Моделі/інструкції/зображення/kukhar-399.jpg"
 },
 {
  "t": "Кінг-Конг",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/19eMXclaiRW82voNMYu9Ym8aE4yctRVE6/preview",
  "i": "Моделі/інструкції/зображення/kinh-konh-76.jpg"
 },
 {
  "t": "Кінь",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1ETywCAfOvaccXsEJ9d4B3Ihyt4OoXfrN/preview",
  "i": "Моделі/інструкції/зображення/kin-146.jpg"
 },
 {
  "t": "Кіт",
  "c": "Нові інструкції",
  "ac": [
   "Крокуючі",
   "Нові інструкції",
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1zz0aCypjRIilfkA-Up-XIujWtrRMkEyF/preview",
  "i": "Моделі/інструкції/зображення/kit-545.jpg"
 },
 {
  "t": "Кіт на велосипеді",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Спорт",
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1tojeORXRaVbN7ce-yGc5v3AhMsMZsQFS/preview",
  "i": "Моделі/інструкції/зображення/kit-na-velosypedi-536.jpg"
 },
 {
  "t": "Кіт та миша",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1mJ2U06RNX4SUkIJNeVJie40yKAJCjJdK/preview",
  "i": "Моделі/інструкції/зображення/kit-ta-mysha-136.jpg"
 },
 {
  "t": "Кіт та мишка",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1x1Kk3Wr2mN_eJK6JEK9MBY6OJKdwf1IG/preview",
  "i": "Моделі/інструкції/зображення/kit-ta-myshka-493.jpg"
 },
 {
  "t": "Лев",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1ab4LQuf58E0fQmMAmhh_krHDtcWx-epy/preview",
  "i": "Моделі/інструкції/зображення/lev-142.jpg"
 },
 {
  "t": "Кажан",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1gYh7cM0YFW0OSNyR0u7-4uleLKtrznCh/preview",
  "i": "Моделі/інструкції/зображення/kazhan-479.jpg"
 },
 {
  "t": "Лижник",
  "c": "Люди",
  "ac": [
   "Люди",
   "Спорт"
  ],
  "p": "https://drive.google.com/file/d/1t6h9xMdbWiWqhcExlVSPbDP2ycyAIQ2l/preview",
  "i": "Моделі/інструкції/зображення/lyzhnyk-52.jpg"
 },
 {
  "t": "Лижник Санта",
  "c": "Новорічні",
  "ac": [
   "Новорічні"
  ],
  "p": "https://drive.google.com/file/d/1-UHuvfCQ18XwFPt1e0eRi-rPix413jvI/preview",
  "i": "Моделі/інструкції/зображення/lyzhnyk-santa-86.jpg"
 },
 {
  "t": "Лисиця",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1TxqWu3S1ShOXzs8e60M6qWihVUPyL4N5/preview",
  "i": "Моделі/інструкції/зображення/lysytsya-145.jpg"
 },
 {
  "t": "Лицар на коні",
  "c": "Люди",
  "ac": [
   "Люди"
  ],
  "p": "https://drive.google.com/file/d/1pZ3km-bQ9UqJ1rXuc9z5CZRAFd3ToA-W/preview",
  "i": "Моделі/інструкції/зображення/lytsar-na-koni-40.jpg"
 },
 {
  "t": "Лицарський турнір",
  "c": "Люди",
  "ac": [
   "Люди"
  ],
  "p": "https://drive.google.com/file/d/1ix-XH8RoKnSpBL07qPu_obI2Z3MNCZkH/preview",
  "i": "Моделі/інструкції/зображення/lytsarskyy-turnir-418.jpg"
 },
 {
  "t": "Локатор",
  "c": "Космос",
  "ac": [
   "Космос",
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1HSdwM70KIisG9bBEW3bGJEoFrMQQgTh0/preview",
  "i": "Моделі/інструкції/зображення/lokator-243.jpg"
 },
 {
  "t": "Локомотив",
  "c": "Транспорт",
  "ac": [
   "Транспорт"
  ],
  "p": "https://drive.google.com/file/d/1iSF7HMyf9GlfwUjJi_pFMMwpfy2Bon-X/preview",
  "i": "Моделі/інструкції/зображення/lokomotyv-244.jpg"
 },
 {
  "t": "Лунатик",
  "c": "Космос",
  "ac": [
   "Космос",
   "Нові інструкції",
   "Крокуючі"
  ],
  "p": "https://drive.google.com/file/d/1rT-Z-nesP8w6DYqis4DB7o2kpRr_WyJA/preview",
  "i": "Моделі/інструкції/зображення/lunatyk-546.jpg"
 },
 {
  "t": "Людина з возом",
  "c": "Люди",
  "ac": [
   "Люди",
   "Крокуючі"
  ],
  "p": "https://drive.google.com/file/d/1Df73ADiNIwbriTBdCWP_Z2l-LnMEVRav/preview",
  "i": "Моделі/інструкції/зображення/lyudyna-z-vozom-20.jpg"
 },
 {
  "t": "Лімузин",
  "c": "Автомобілі, мотоцикли",
  "ac": [
   "Автомобілі, мотоцикли"
  ],
  "p": "https://drive.google.com/file/d/15O8-IzF6eWLiGNvAsX00qw5Ne4NYQK5u/preview",
  "i": "Моделі/інструкції/зображення/limuzyn-480.jpg"
 },
 {
  "t": "Літак",
  "c": "Нові інструкції",
  "ac": [
   "Військова техніка",
   "Літаки, вертольоти",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/1m2It45VJHnwDlPiE5GsPPQii8lzrHkf0/preview",
  "i": "Моделі/інструкції/зображення/litak-551.jpg"
 },
 {
  "t": "Літак на віражах",
  "c": "Літаки, вертольоти",
  "ac": [
   "Літаки, вертольоти"
  ],
  "p": "https://drive.google.com/file/d/1yK9KpvkTLe0-s2lvOZNhl1brEta2WAhs/preview",
  "i": "Моделі/інструкції/зображення/litak-na-virazhakh-529.jpg"
 },
 {
  "t": "Літаючих Санта",
  "c": "Новорічні",
  "ac": [
   "Новорічні"
  ],
  "p": "https://drive.google.com/file/d/1Rr8dr9DgkF_snYWhMVveI0SXkgc_8LM_/preview",
  "i": "Моделі/інструкції/зображення/litayuchykh-santa-85.jpg"
 },
 {
  "t": "Ліфт",
  "c": "Механізми",
  "ac": [
   "Механізми",
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/1G72ESHDpgvHGBDFR9EqyJZMNWbCQ46R4/preview",
  "i": "Моделі/інструкції/зображення/lift-391.jpg"
 },
 {
  "t": "Мавпа",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1Fervhe2mtr5nbcTlzHHPjkgWAN2ectFD/preview",
  "i": "Моделі/інструкції/зображення/mavpa-153.jpg"
 },
 {
  "t": "Майло (науковий всюдихід)",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/129ZClyZGqQB9H2CNd424qR1xHHRJ0Cs2/preview",
  "i": "Моделі/інструкції/зображення/maylo-naukovyy-vsyudykhid-455.png"
 },
 {
  "t": "Майло з датчиком нахилу",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/1Sx-TLACxNc3xNwnDlVIPATjFPGngfQZt/preview",
  "i": "Моделі/інструкції/зображення/maylo-z-datchykom-nakhylu-451.png"
 },
 {
  "t": "Майло з датчиком переміщення",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/1JQbur_x0CEF9m6B-44fuHHEdf0AEALJ8/preview",
  "i": "Моделі/інструкції/зображення/maylo-z-datchykom-peremishchennya-452.png"
 },
 {
  "t": "Майло з датчиком переміщення (мод.)",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "Офіційні/maylo-z-datchykom-peremishchennya-mod-544.pdf",
  "i": ""
 },
 {
  "t": "Майло спільна робота",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/18AtlGuCkDcMHDFBziuSgdp4RhxiVhrW_/preview",
  "i": "Моделі/інструкції/зображення/maylo-spilna-robota-454.png"
 },
 {
  "t": "Майло — науковий всюдихід",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "Офіційні/maylo-naukovyy-vsyudykhid-666.pdf",
  "i": ""
 },
 {
  "t": "Майло — спільна робота",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "Офіційні/maylo-spilna-robota-717.pdf",
  "i": ""
 },
 {
  "t": "Малювальна акула",
  "c": "Моделі, що малюють",
  "ac": [
   "Моделі, що малюють",
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1cxZUsR2fqxOkVou8YkqHZlXAJemOVhjv/preview",
  "i": "Моделі/інструкції/зображення/malyuvalna-akula-6.jpg"
 },
 {
  "t": "Малювання",
  "c": "Моделі, що малюють",
  "ac": [
   "Моделі, що малюють"
  ],
  "p": "https://drive.google.com/file/d/1pElf9s4WilaDYagek9v3Ys-QX8CsKwE3/preview",
  "i": "Моделі/інструкції/зображення/malyuvannya-7.jpg"
 },
 {
  "t": "Мандрівники",
  "c": "Люди",
  "ac": [
   "Люди"
  ],
  "p": "https://drive.google.com/file/d/171hS4BHc-cRq0qYa5z04el0sDWMt1qoc/preview",
  "i": "Моделі/інструкції/зображення/mandrivnyky-370.jpg"
 },
 {
  "t": "Маніпулятор",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1iGe1gPfemGVGxVvVx6L85ZXe5CtNddZ4/preview",
  "i": "Моделі/інструкції/зображення/manipulyator-353.jpg"
 },
 {
  "t": "Марна машинка",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1v0PLT-VG1XKQKA69vwweqoE8n0yCBq03/preview",
  "i": "Моделі/інструкції/зображення/marna-mashynka-369.jpg"
 },
 {
  "t": "Марсохід",
  "c": "Космос",
  "ac": [
   "Космос"
  ],
  "p": "https://drive.google.com/file/d/17fZW7iYShF_e6-umcSulFxZlHlm02rA7/preview",
  "i": "Моделі/інструкції/зображення/marsokhid-237.jpg"
 },
 {
  "t": "Машинка",
  "c": "Автомобілі, мотоцикли",
  "ac": [
   "Автомобілі, мотоцикли"
  ],
  "p": "https://drive.google.com/file/d/1md2_gpAckvXLd--6y2LOnnn9X1NiaveA/preview",
  "i": "Моделі/інструкції/зображення/mashynka-111.jpg"
 },
 {
  "t": "Машинка з двома швидкостями",
  "c": "Автомобілі, мотоцикли",
  "ac": [
   "Автомобілі, мотоцикли",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/1TYJBUYhkcFjTPMwNQ42MiTwTZBEEOsaz/preview",
  "i": "Моделі/інструкції/зображення/mashynka-z-dvoma-shvydkostyamy-586.jpg"
 },
 {
  "t": "Меганевра",
  "c": "Динозаври",
  "ac": [
   "Динозаври",
   "Комахи"
  ],
  "p": "https://drive.google.com/file/d/1cKZ9A6Qtz5VICqpjCvvkaUDbPsBUzVfG/preview",
  "i": "Моделі/інструкції/зображення/mehanevra-65.jpg"
 },
 {
  "t": "Млин",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1Ta8jC3WrpMvS6-zH1BY8S3RKb2jN4IZi/preview",
  "i": "Моделі/інструкції/зображення/mlyn-393.jpg"
 },
 {
  "t": "Метелик",
  "c": "Міні-моделі",
  "ac": [
   "Міні-моделі",
   "Комахи"
  ],
  "p": "https://drive.google.com/file/d/1NMN4ptQTn94bdjihICF-P6ulpcUkoa_t/preview",
  "i": "Моделі/інструкції/зображення/metelyk-510.jpg"
 },
 {
  "t": "Модель сонячної системи",
  "c": "Космос",
  "ac": [
   "Космос",
   "Механізми",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/1hji1VRy42dtP0M7hH-dMY8c0A-8MfUkL/preview",
  "i": "Моделі/інструкції/зображення/model-sonyachnoyi-systemy-365.jpg"
 },
 {
  "t": "Монорельс",
  "c": "Транспорт",
  "ac": [
   "Транспорт"
  ],
  "p": "https://drive.google.com/file/d/1FhKR74veVw4yqw_t_hdwP84YXFtxfhIa/preview",
  "i": "Моделі/інструкції/зображення/monorels-245.jpg"
 },
 {
  "t": "Монстртрак",
  "c": "Автомобілі, мотоцикли",
  "ac": [
   "Автомобілі, мотоцикли"
  ],
  "p": "https://drive.google.com/file/d/1xkgamo2YJubhHLqGwJr3pfgHlLN3X_2L/preview",
  "i": "Моделі/інструкції/зображення/monstrtrak-290.jpg"
 },
 {
  "t": "Моторолер",
  "c": "Автомобілі, мотоцикли",
  "ac": [
   "Автомобілі, мотоцикли",
   "Міні-моделі",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/1w39I0RM3bwizyf5FgkdcW_4k_-FBKcFb/preview",
  "i": "Моделі/інструкції/зображення/motoroler-519.jpg"
 },
 {
  "t": "Мотоцикл",
  "c": "Автомобілі, мотоцикли",
  "ac": [
   "Автомобілі, мотоцикли",
   "Міні-моделі"
  ],
  "p": "https://drive.google.com/file/d/1_C5xwBBPzHqpdJDKFTeBe5ZyXEXosav2/preview",
  "i": "Моделі/інструкції/зображення/mototsykl-291.jpg"
 },
 {
  "t": "Мотоцикліст",
  "c": "Автомобілі, мотоцикли",
  "ac": [
   "Автомобілі, мотоцикли",
   "Люди"
  ],
  "p": "https://drive.google.com/file/d/1OiJXtz4FIpH4OvuiP_MZkgM-Sokto8YN/preview",
  "i": "Моделі/інструкції/зображення/mototsyklist-293.jpg"
 },
 {
  "t": "Музикант",
  "c": "Люди",
  "ac": [
   "Люди"
  ],
  "p": "https://drive.google.com/file/d/1Wqd3__ckw9i8MhdW2xZdBxQhMezyP2ZL/preview",
  "i": "Моделі/інструкції/зображення/muzykant-395.jpg"
 },
 {
  "t": "Мураха",
  "c": "Комахи",
  "ac": [
   "Комахи"
  ],
  "p": "https://drive.google.com/file/d/1AFelD6rvX8y8jE3JAdmZnOZ-vMjC6Gn9/preview",
  "i": "Моделі/інструкції/зображення/murakha-151.jpg"
 },
 {
  "t": "Муха",
  "c": "Міні-моделі",
  "ac": [
   "Комахи",
   "Міні-моделі",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/1mUe80DXbKLnzYr4cVHuaZynYYR0lXUTj/preview",
  "i": "Моделі/інструкції/зображення/mukha-511.jpg"
 },
 {
  "t": "Міжзоряний корабель",
  "c": "Космос",
  "ac": [
   "Космос",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/1tTRlYjzij_ZPQUlXQmqIDOMkuivVjNDi/preview",
  "i": "Моделі/інструкції/зображення/mizhzoryanyy-korabel-560.jpg"
 },
 {
  "t": "Міксер",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1n273QFRThLeaX5tqy35s_JgkcaspNvQf/preview",
  "i": "Моделі/інструкції/зображення/mikser-91.png"
 },
 {
  "t": "Міоланія",
  "c": "Динозаври",
  "ac": [
   "Динозаври",
   "Крокуючі"
  ],
  "p": "https://drive.google.com/file/d/1rnpP0Xq7bXjz1mnXMAqrw1QYUNGMZHKN/preview",
  "i": "Моделі/інструкції/зображення/miolaniya-67.jpg"
 },
 {
  "t": "Місяцехід",
  "c": "Космос",
  "ac": [
   "Космос",
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/1elS423JgB3ZeqldPrHgoOplGB35yYK_J/preview",
  "i": "Моделі/інструкції/зображення/misyatsekhid-236.png"
 },
 {
  "t": "Навантажувач",
  "c": "Спецтехніка",
  "ac": [
   "Спецтехніка"
  ],
  "p": "https://drive.google.com/file/d/1sA7VVz5dQ14hGLUglUetxyduGqm5XJJS/preview",
  "i": "Моделі/інструкції/зображення/navantazhuvach-28.jpg"
 },
 {
  "t": "Навантажувач вилковий",
  "c": "Спецтехніка",
  "ac": [
   "Спецтехніка"
  ],
  "p": "https://drive.google.com/file/d/1lKd8rphCD513vIBQc6NjIR9uCcVHk3a5/preview",
  "i": "Моделі/інструкції/зображення/navantazhuvach-vylkovyy-335.jpg"
 },
 {
  "t": "Нафтовий насос",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1PyzWQaad0kqPBoMzjESKSjAIr4w6XEmL/preview",
  "i": "Моделі/інструкції/зображення/naftovyy-nasos-397.jpg"
 },
 {
  "t": "Нахил",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/1ONLaf6aJVAwBSbnTMKr85oW6VLSAafY5/preview",
  "i": "Моделі/інструкції/зображення/nakhyl-456.png"
 },
 {
  "t": "Невідомий динозавр",
  "c": "Динозаври",
  "ac": [
   "Динозаври"
  ],
  "p": "https://drive.google.com/file/d/1kUubRX_GZqnhay0aKZoiL8_tfrbYmp1X/preview",
  "i": "Моделі/інструкції/зображення/nevidomyy-dynozavr-69.jpg"
 },
 {
  "t": "Новорічна ялинка",
  "c": "Новорічні",
  "ac": [
   "Новорічні"
  ],
  "p": "https://drive.google.com/file/d/1X1JaMPbu4g6IitfOaZfaJUfTbxHk-Trv/preview",
  "i": "Моделі/інструкції/зображення/novorichna-yalynka-84.jpg"
 },
 {
  "t": "Новорічний експрес",
  "c": "Новорічні",
  "ac": [
   "Новорічні",
   "Нові інструкції",
   "Транспорт"
  ],
  "p": "https://drive.google.com/file/d/12JuNcqeowZI5rJi8qJD3Ao6YXLt94tG_/preview",
  "i": "Моделі/інструкції/зображення/novorichnyy-ekspres-574.jpg"
 },
 {
  "t": "Новорічний паровоз",
  "c": "Новорічні",
  "ac": [
   "Новорічні",
   "Транспорт"
  ],
  "p": "https://drive.google.com/file/d/1uABQ1f58U-u4GVOsIGXjnkXcXXzgr3wf/preview",
  "i": "Моделі/інструкції/зображення/novorichnyy-parovoz-248.jpg"
 },
 {
  "t": "Носоріг",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1t-Y99ffQMFVBr45eweS-FIDVON6vCsSa/preview",
  "i": "Моделі/інструкції/зображення/nosorih-152.jpg"
 },
 {
  "t": "Обертання (дриль)",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/15M78btGishkoJhpUCAFaJGe8Gqyf_TUD/preview",
  "i": "Моделі/інструкції/зображення/obertannya-dryl-435.png"
 },
 {
  "t": "Олень Рудольф",
  "c": "Новорічні",
  "ac": [
   "Новорічні",
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1-NOAD2aMAFx2E_PjZ7G5c0uCyr90A_Jl/preview",
  "i": "Моделі/інструкції/зображення/olen-rudolf-82.jpg"
 },
 {
  "t": "Олень Свен",
  "c": "Новорічні",
  "ac": [
   "Новорічні",
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1C-P7sIHXYw67mbmWT3qyecJvirOs4oLl/preview",
  "i": "Моделі/інструкції/зображення/olen-sven-527.jpg"
 },
 {
  "t": "Павук",
  "c": "Комахи",
  "ac": [
   "Комахи"
  ],
  "p": "https://drive.google.com/file/d/1fI8wx4YnQlRbFe5YS57juTn4tnSxByue/preview",
  "i": "Моделі/інструкції/зображення/pavuk-156.jpg"
 },
 {
  "t": "Панда",
  "c": "Міні-моделі",
  "ac": [
   "Міні-моделі",
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1p6Yqp6-Epw0c4zWfAArWIq7fI5B0K1A3/preview",
  "i": "Моделі/інструкції/зображення/panda-503.jpg"
 },
 {
  "t": "Папуга",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Птахи"
  ],
  "p": "https://drive.google.com/file/d/1i26-XfXl878nixGv-x0esGCFcy9MfV5m/preview",
  "i": "Моделі/інструкції/зображення/papuha-583.jpg"
 },
 {
  "t": "Паразауролоф",
  "c": "Динозаври",
  "ac": [
   "Динозаври"
  ],
  "p": "https://drive.google.com/file/d/1KDRLrC_UJuI3_zApP6hChZo-0Hhpl6sP/preview",
  "i": "Моделі/інструкції/зображення/parazaurolof-64.jpg"
 },
 {
  "t": "Пасхальний заєць",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1EDfg74WJVFSUxLQSS19tHyshmBllbXFk/preview",
  "i": "Моделі/інструкції/зображення/paskhalnyy-zayets-528.jpg"
 },
 {
  "t": "Пелікан",
  "c": "Птахи",
  "ac": [
   "Птахи"
  ],
  "p": "https://drive.google.com/file/d/1TTI1C9Z_daAous8OEuZl7foFknUZqoZ0/preview",
  "i": "Моделі/інструкції/зображення/pelikan-161.jpg"
 },
 {
  "t": "Пенальті",
  "c": "Механізми",
  "ac": [
   "Механізми",
   "Спорт"
  ],
  "p": "https://drive.google.com/file/d/1jfyxY5M7aWo3MefXHnhvY2sobFUq8RBr/preview",
  "i": "Моделі/інструкції/зображення/penalti-55.jpg"
 },
 {
  "t": "Планетохід",
  "c": "Космос",
  "ac": [
   "Космос"
  ],
  "p": "https://drive.google.com/file/d/1PJyjTB59IRrs-rpkx4sFdYMhhBI_aXFR/preview",
  "i": "Моделі/інструкції/зображення/planetokhid-232.jpg"
 },
 {
  "t": "Плезіозавр",
  "c": "Динозаври",
  "ac": [
   "Динозаври"
  ],
  "p": "https://drive.google.com/file/d/1nsBCbbb4SLm5-VVcObD9wVLJ7IAeAk3R/preview",
  "i": "Моделі/інструкції/зображення/pleziozavr-61.jpg"
 },
 {
  "t": "Поверни",
  "c": "Роботи",
  "ac": [
   "Роботи"
  ],
  "p": "https://drive.google.com/file/d/1oOCYmGEliw2y3A3kat3zQp2-K0cjxnh9/preview",
  "i": "Моделі/інструкції/зображення/poverny-37.jpg"
 },
 {
  "t": "Поворот",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/1hsoA9k7Tvo3nRHlVqhYVbb2oPbKgiIZb/preview",
  "i": "Моделі/інструкції/зображення/povorot-457.jpg"
 },
 {
  "t": "Повороти та лінія",
  "c": "Моделі для змагань",
  "ac": [
   "Моделі для змагань"
  ],
  "p": "https://drive.google.com/file/d/1nNJ20cfNb4d9Vh14Qv1HPe6obVzLUmSH/preview",
  "i": "Моделі/інструкції/зображення/povoroty-ta-liniya-113.jpg"
 },
 {
  "t": "Пожежна машина",
  "c": "Спецтехніка",
  "ac": [
   "Спецтехніка"
  ],
  "p": "https://drive.google.com/file/d/1AgFF9Yfxoh4RyQoKsJBAaGXipsHh2pr2/preview",
  "i": "Моделі/інструкції/зображення/pozhezhna-mashyna-295.jpg"
 },
 {
  "t": "Позашляховик",
  "c": "Автомобілі, мотоцикли",
  "ac": [
   "Автомобілі, мотоцикли",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/1b4uQxzY9xp-Lu8ZFa-iNrvT-9nNBJ3Gp/preview",
  "i": "Моделі/інструкції/зображення/pozashlyakhovyk-276.jpg"
 },
 {
  "t": "Портовий кран",
  "c": "Спецтехніка",
  "ac": [
   "Спецтехніка"
  ],
  "p": "https://drive.google.com/file/d/136LNez-EZR1cEgr-fDlxOM5q9PRPlXd_/preview",
  "i": "Моделі/інструкції/зображення/portovyy-kran-345.jpg"
 },
 {
  "t": "Потенціометр",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1Y2O2U5Vu1i8t4_rUzVjnzZQQ1ddNumqY/preview",
  "i": "Моделі/інструкції/зображення/potentsiometr-400.jpg"
 },
 {
  "t": "Поштовх",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/1Cogs3k961UTkMCNx9hB6ugEuLPGJ7s-p/preview",
  "i": "Моделі/інструкції/зображення/poshtovkh-465.png"
 },
 {
  "t": "Пошуковий всюдихід",
  "c": "Космос",
  "ac": [
   "Космос",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/15QKXvBMDcZMnxiXLtOegEG4lzIsB53zJ/preview",
  "i": "Моделі/інструкції/зображення/poshukovyy-vsyudykhid-565.jpg"
 },
 {
  "t": "Прес",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1_J0Cp7AF9svihAhkUzCq6dEM7dCPpcyT/preview",
  "i": "Моделі/інструкції/зображення/pres-92.jpg"
 },
 {
  "t": "Прибулець",
  "c": "Космос",
  "ac": [
   "Космос",
   "Крокуючі"
  ],
  "p": "https://drive.google.com/file/d/1-cPdmHHV4a2mGSM8HVSIi5PeS2TNx5yt/preview",
  "i": "Моделі/інструкції/зображення/prybulets-484.jpg"
 },
 {
  "t": "Принтер",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1NNYrGaV9rR5zbsR8CTG7Eg6QI5OM_Itq/preview",
  "i": "Моделі/інструкції/зображення/prynter-93.png"
 },
 {
  "t": "Птах",
  "c": "Птахи",
  "ac": [
   "Птахи"
  ],
  "p": "https://drive.google.com/file/d/1w9TdBNS-sK6MYVgcuxewEfFbaaEqL3jx/preview",
  "i": "Моделі/інструкції/зображення/ptakh-144.jpg"
 },
 {
  "t": "Птах махає крилами",
  "c": "Птахи",
  "ac": [
   "Птахи"
  ],
  "p": "https://drive.google.com/file/d/12GnizG7AEYIKKNwutnLWlwkhb93aGLoI/preview",
  "i": "Моделі/інструкції/зображення/ptakh-makhaye-krylamy-165.jpg"
 },
 {
  "t": "Птахи",
  "c": "Птахи",
  "ac": [
   "Птахи"
  ],
  "p": "https://drive.google.com/file/d/1aOoBTGOHYWp_Qh10nSVEgud0o1726qw2/preview",
  "i": "Моделі/інструкції/зображення/ptakhy-167.jpg"
 },
 {
  "t": "Пташеня в яйці",
  "c": "Птахи",
  "ac": [
   "Птахи"
  ],
  "p": "https://drive.google.com/file/d/1cEUO7OzyKQCaj_iwgsxp5k7JreJMFxKO/preview",
  "i": "Моделі/інструкції/зображення/ptashenya-v-yaytsi-431.jpg"
 },
 {
  "t": "Пташенята",
  "c": "Птахи",
  "ac": [
   "Птахи"
  ],
  "p": "https://drive.google.com/file/d/1E7BVH00clNSiFlRO3c2SCh-YA9iu072Y/preview",
  "i": "Моделі/інструкції/зображення/ptashenyata-164.jpg"
 },
 {
  "t": "Птеранодон",
  "c": "Динозаври",
  "ac": [
   "Динозаври"
  ],
  "p": "https://drive.google.com/file/d/1atW9eDahsMWaOc5G3IbICftL2PsNFB6C/preview",
  "i": "Моделі/інструкції/зображення/pteranodon-63.jpg"
 },
 {
  "t": "Птеродактиль",
  "c": "Динозаври",
  "ac": [
   "Динозаври"
  ],
  "p": "https://drive.google.com/file/d/1o6Qvl8caED1y6I5s8rfBTjUynqKJU7A_/preview",
  "i": "Моделі/інструкції/зображення/pterodaktyl-77.jpg"
 },
 {
  "t": "Пугало",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1hLs3frN5cxDl1TKiPkzFR9ibMbSjLp3U/preview",
  "i": "Моделі/інструкції/зображення/puhalo-401.jpg"
 },
 {
  "t": "Пуголовок",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO",
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1p5afSgwrOXmeU-KLGBzqfiKBZ4VGB_1g/preview",
  "i": "Моделі/інструкції/зображення/puholovok-436.png"
 },
 {
  "t": "Пускова установка",
  "c": "Космос",
  "ac": [
   "Космос"
  ],
  "p": "https://drive.google.com/file/d/1SIuwhCBfvzy47rB7loUzHzmTpE4qo0Ok/preview",
  "i": "Моделі/інструкції/зображення/puskova-ustanovka-239.jpg"
 },
 {
  "t": "Підвішений космічний корабель",
  "c": "Космос",
  "ac": [
   "Космос",
   "Моделі без смартхаба"
  ],
  "p": "https://drive.google.com/file/d/1NCqG4RWe-aCnwwBnd5tLHZhoRVhDiX6Q/preview",
  "i": "Моделі/інструкції/зображення/pidvishenyy-kosmichnyy-korabel-3.jpg"
 },
 {
  "t": "Підйом",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "Офіційні/pidyom-377.pdf",
  "i": ""
 },
 {
  "t": "Підйомний кран",
  "c": "Спецтехніка",
  "ac": [
   "Спецтехніка"
  ],
  "p": "https://drive.google.com/file/d/1Dkgvgq0nQeKTgmT9MS6Ol2gq_f2ipR56/preview",
  "i": "Моделі/інструкції/зображення/pidyomnyy-kran-334.jpg"
 },
 {
  "t": "Підйомник",
  "c": "Спецтехніка",
  "ac": [
   "Спецтехніка"
  ],
  "p": "https://drive.google.com/file/d/1bAssTL96Yhs_EG9OFrBd1sRieQEaDuGF/preview",
  "i": "Моделі/інструкції/зображення/pidyomnyk-349.jpg"
 },
 {
  "t": "Підтягування",
  "c": "Люди",
  "ac": [
   "Люди",
   "Спорт"
  ],
  "p": "https://drive.google.com/file/d/1FpcPLtlJiizM-qTa-qO7hPtqB8Vt1Nrn/preview",
  "i": "Моделі/інструкції/зображення/pidtyahuvannya-56.jpg"
 },
 {
  "t": "Пінгвін",
  "c": "Птахи",
  "ac": [
   "Птахи"
  ],
  "p": "https://drive.google.com/file/d/169HoR956kIBfWnxn4GwBGbJqXbsKTVM8/preview",
  "i": "Моделі/інструкції/зображення/pinhvin-483.jpg"
 },
 {
  "t": "Піратський корабель",
  "c": "Кораблі",
  "ac": [
   "Кораблі"
  ],
  "p": "https://drive.google.com/file/d/17vV7I5xAgYoVTWciUTRCBD0NJiEEyvLl/preview",
  "i": "Моделі/інструкції/зображення/piratskyy-korabel-219.jpg"
 },
 {
  "t": "Равлик",
  "c": "Міні-моделі",
  "ac": [
   "Міні-моделі",
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1y78mx575pl_THS_TRc0BKxXfP4gmO5cB/preview",
  "i": "Моделі/інструкції/зображення/ravlyk-501.jpg"
 },
 {
  "t": "Равлик-ліхтарик",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO",
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1llt3IJcS5TltVqbsc71LFylvuI0RvMnn/preview",
  "i": "Моделі/інструкції/зображення/ravlyk-likhtaryk-468.png"
 },
 {
  "t": "Радар",
  "c": "Космос",
  "ac": [
   "Військова техніка",
   "Космос",
   "Механізми",
   "Міні-моделі"
  ],
  "p": "https://drive.google.com/file/d/1WBXFvrj_baNulGqasmpiK9OTtQnindyr/preview",
  "i": "Моделі/інструкції/зображення/radar-227.jpg"
 },
 {
  "t": "Радіо",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1m4bCsN720DoeYKrExpcsqV9UfzelPWrl/preview",
  "i": "Моделі/інструкції/зображення/radio-402.jpg"
 },
 {
  "t": "Ретромобіль",
  "c": "Автомобілі, мотоцикли",
  "ac": [
   "Автомобілі, мотоцикли",
   "Міні-моделі"
  ],
  "p": "https://drive.google.com/file/d/1oNUznV434FLtJRONDYB95eC9HbkATdFM/preview",
  "i": "Моделі/інструкції/зображення/retromobil-524.jpg"
 },
 {
  "t": "Рибалка",
  "c": "Люди",
  "ac": [
   "Люди"
  ],
  "p": "https://drive.google.com/file/d/12HBsf2UFcfzrOb-n2oGrsuyRIg4kZVlK/preview",
  "i": "Моделі/інструкції/зображення/rybalka-406.jpg"
 },
 {
  "t": "Рибка",
  "c": "Міні-моделі",
  "ac": [
   "Міні-моделі",
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1eSXFCVXJJ-R7kztOwDmsnHk1b6JYAMXE/preview",
  "i": "Моделі/інструкції/зображення/rybka-500.jpg"
 },
 {
  "t": "Вівця, що малює",
  "c": "Моделі, що малюють",
  "ac": [
   "Моделі, що малюють",
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1-3yjuslIKEvuPukxyACA175EGKRRMqg3/preview",
  "i": "Моделі/інструкції/зображення/vivtsya-shcho-malyuye-8.jpg"
 },
 {
  "t": "Робо-рука",
  "c": "Механізми",
  "ac": [
   "Механізми",
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/1kTf66cbJqt57QQgH3ZrJMEMUiuDEryt-/preview",
  "i": "Моделі/інструкції/зображення/robo-ruka-355.jpg"
 },
 {
  "t": "Робот \"Атлас\"",
  "c": "Роботи",
  "ac": [
   "Роботи",
   "Крокуючі"
  ],
  "p": "https://drive.google.com/file/d/1dFglISMRtDkxjtaF7Xa3dTgiB4Myq_J5/preview",
  "i": "Моделі/інструкції/зображення/robot-atlas-427.jpg"
 },
 {
  "t": "Робот \"Спот\"",
  "c": "Роботи",
  "ac": [
   "Роботи",
   "Крокуючі"
  ],
  "p": "https://drive.google.com/file/d/1U8epRt-3Q7f0W95lTbyvmWD1VZlW0ibc/preview",
  "i": "Моделі/інструкції/зображення/robot-spot-428.jpg"
 },
 {
  "t": "Робот на візку",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Роботи",
   "Крокуючі"
  ],
  "p": "https://drive.google.com/file/d/1x_3j1p5cIe_2wwsMX8oVb2rgt_nKrMrZ/preview",
  "i": "Моделі/інструкції/зображення/robot-na-vizku-535.jpg"
 },
 {
  "t": "Робот прибульців",
  "c": "Космос",
  "ac": [
   "Космос",
   "Нові інструкції",
   "Крокуючі"
  ],
  "p": "https://drive.google.com/file/d/1Z5HTMbxjRyryArAL7-j2Ie0IwOtk92-d/preview",
  "i": "Моделі/інструкції/зображення/robot-prybultsiv-567.jpg"
 },
 {
  "t": "Робот, що повертає",
  "c": "Моделі для змагань",
  "ac": [
   "Моделі для змагань",
   "Роботи"
  ],
  "p": "https://drive.google.com/file/d/1kY_iaeS7qGMibVHH7Vovk2FOIByX2Cf9/preview",
  "i": "Моделі/інструкції/зображення/robot-shcho-povertaye-114.jpg"
 },
 {
  "t": "Робот, що тягне",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO",
   "Роботи"
  ],
  "p": "https://drive.google.com/file/d/12Dl7IIw9DTFNEwENEV-pzT2V3mH7hs5J/preview",
  "i": "Моделі/інструкції/зображення/robot-shcho-tyahne-467.png"
 },
 {
  "t": "Робот-гітарист",
  "c": "Роботи",
  "ac": [
   "Роботи"
  ],
  "p": "https://drive.google.com/file/d/1pIlBTwTQTfjpxKkgdetqf7X8vvHIsd-o/preview",
  "i": "Моделі/інструкції/зображення/robot-hitaryst-38.jpg"
 },
 {
  "t": "Робот-захисник",
  "c": "Космос",
  "ac": [
   "Космос",
   "Нові інструкції",
   "Роботи"
  ],
  "p": "https://drive.google.com/file/d/1jnYHDiSpTbvC0oGOl6p3nJROWeR-QOQE/preview",
  "i": "Моделі/інструкції/зображення/robot-zakhysnyk-568.jpg"
 },
 {
  "t": "Робот-лаборант",
  "c": "Моделі для змагань",
  "ac": [
   "Моделі для змагань",
   "Нові інструкції",
   "Роботи"
  ],
  "p": "https://drive.google.com/file/d/1rpb5LMcYubOjyE74dNlip2dlKO_bpj_J/preview",
  "i": "Моделі/інструкції/зображення/robot-laborant-558.jpg"
 },
 {
  "t": "Робот-охоронець",
  "c": "Космос",
  "ac": [
   "Космос",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/1ybhi2-1vN31dTzWoD0qcP9QiJr5hPrWC/preview",
  "i": "Моделі/інструкції/зображення/robot-okhoronets-569.jpg"
 },
 {
  "t": "Робот-сумоїст",
  "c": "Моделі для змагань",
  "ac": [
   "Моделі для змагань",
   "Роботи"
  ],
  "p": "https://drive.google.com/file/d/1ciDmy2S9Hu86qwdpKuMECt2c5taUp95k/preview",
  "i": "Моделі/інструкції/зображення/robot-sumoyist-99.jpg"
 },
 {
  "t": "Робот-шпигун",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO",
   "Роботи"
  ],
  "p": "https://drive.google.com/file/d/119Trd9TZYG9nVRiAhjn2RAAg1gqClXS2/preview",
  "i": "Моделі/інструкції/зображення/robot-shpyhun-460.png"
 },
 {
  "t": "Робот-шукач",
  "c": "Космос",
  "ac": [
   "Космос",
   "Нові інструкції",
   "Роботи"
  ],
  "p": "https://drive.google.com/file/d/1vpqIl9F_hGJHX0deg_Zr4JT5z8jFWNQt/preview",
  "i": "Моделі/інструкції/зображення/robot-shukach-564.jpg"
 },
 {
  "t": "Ровер",
  "c": "Автомобілі, мотоцикли",
  "ac": [
   "Автомобілі, мотоцикли",
   "Космос"
  ],
  "p": "https://drive.google.com/file/d/1A9OXS3kDcJfpg61BPXe_8zdIs1KjWTl9/preview",
  "i": "Моделі/інструкції/зображення/rover-30.jpg"
 },
 {
  "t": "Родео",
  "c": "Люди",
  "ac": [
   "Люди"
  ],
  "p": "https://drive.google.com/file/d/1sCFtCxWYpgl2s264LpgIHwxjWO1QwtWd/preview",
  "i": "Моделі/інструкції/зображення/rodeo-405.jpg"
 },
 {
  "t": "Розпушування",
  "c": "Спецтехніка",
  "ac": [
   "Спецтехніка"
  ],
  "p": "https://drive.google.com/file/d/1Jq2TNeDuzGSz-Sk1M-3eC0jucZXKoRM6/preview",
  "i": "Моделі/інструкції/зображення/rozpushuvannya-254.jpg"
 },
 {
  "t": "Рух",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/1m2rvWEI6b3YhSm64NsM9ydzvBMdxkEg-/preview",
  "i": "Моделі/інструкції/зображення/rukh-438.png"
 },
 {
  "t": "Рух по лінії",
  "c": "Моделі для змагань",
  "ac": [
   "Моделі для змагань"
  ],
  "p": "https://drive.google.com/file/d/1bqnv73fVP0PsQ9v4cIRJ4ml1mqmESsHM/preview",
  "i": "Моделі/інструкції/зображення/rukh-po-liniyi-107.jpg"
 },
 {
  "t": "Савана",
  "c": "Рослини",
  "ac": [
   "Рослини"
  ],
  "p": "https://drive.google.com/file/d/1JcYAmS3PmvprbVemvZSSm7PnwemoQS-t/preview",
  "i": "Моделі/інструкції/зображення/savana-408.jpg"
 },
 {
  "t": "Самоскид",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO",
   "Спецтехніка"
  ],
  "p": "https://drive.google.com/file/d/1ZkwnY0Tw9pLaWFCCOdi8a0gLQuiXCKjB/preview",
  "i": "Моделі/інструкції/зображення/samoskyd-462.png"
 },
 {
  "t": "Санта-Клаус",
  "c": "Новорічні",
  "ac": [
   "Новорічні"
  ],
  "p": "https://drive.google.com/file/d/155aOu6_KNpocwiF6lyR1pbucpMd8rXzS/preview",
  "i": "Моделі/інструкції/зображення/santa-klaus-88.jpg"
 },
 {
  "t": "Свердлильний верстат",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1xtUHAoz946XIH_m9mV-od5CYM5s9FoMv/preview",
  "i": "Моделі/інструкції/зображення/sverdlylnyy-verstat-94.png"
 },
 {
  "t": "Світлофор та шлагбаум",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1-_pUARyI2Xuks-2p4TebE6-12N4xY146/preview",
  "i": "Моделі/інструкції/зображення/svitlofor-ta-shlahbaum-389.jpg"
 },
 {
  "t": "Сейф",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1Rph_kjVNSP8cYkK6i_1dQtz7iNcYQ2a5/preview",
  "i": "Моделі/інструкції/зображення/seyf-409.jpg"
 },
 {
  "t": "Сигналізація",
  "c": "Механізми",
  "ac": [
   "Механізми",
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/1n1OEEkyxgzpvjrEtb24yLOlpY7vI1n4G/preview",
  "i": "Моделі/інструкції/зображення/syhnalizatsiya-463.jpg"
 },
 {
  "t": "Скорпіон",
  "c": "Комахи",
  "ac": [
   "Комахи"
  ],
  "p": "https://drive.google.com/file/d/1q_zT6zYV_gG1Sf42IlmZ5cRdqlGMfW8T/preview",
  "i": "Моделі/інструкції/зображення/skorpion-104.jpg"
 },
 {
  "t": "Слон",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1Wngn9JjrdZo1gg9YOPOGmneEydRI-ohC/preview",
  "i": "Моделі/інструкції/зображення/slon-173.jpg"
 },
 {
  "t": "Сміттєвоз",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "Офіційні/smittyevoz-309.pdf",
  "i": ""
 },
 {
  "t": "Сноубордист",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Спорт"
  ],
  "p": "https://drive.google.com/file/d/1KSgmoSGvpVINNz_tz_I1Mq49laBEGrCY/preview",
  "i": "Моделі/інструкції/зображення/snoubordyst-552.jpg"
 },
 {
  "t": "Снігохід",
  "c": "Спецтехніка",
  "ac": [
   "Спецтехніка"
  ],
  "p": "https://drive.google.com/file/d/1-GTu4glZOmttXVUYb1hJLAZA-lvsFtjJ/preview",
  "i": "Моделі/інструкції/зображення/snihokhid-297.png"
 },
 {
  "t": "Собака",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1rcKUe7IQcn6xACYjbyj7qyn8I18yO7zI/preview",
  "i": "Моделі/інструкції/зображення/sobaka-168.jpg"
 },
 {
  "t": "Сова",
  "c": "Міні-моделі",
  "ac": [
   "Міні-моделі",
   "Птахи"
  ],
  "p": "https://drive.google.com/file/d/1xZGgCqRMQbP-YnDSwx1D9QsBm-FOdNsc/preview",
  "i": "Моделі/інструкції/зображення/sova-514.jpg"
 },
 {
  "t": "Сортувальник деталей",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1ncx1f02CIUqxIxX_fg-HZL2vGrLe5fjt/preview",
  "i": "Моделі/інструкції/зображення/sortuvalnyk-detaley-411.jpg"
 },
 {
  "t": "Спіннер",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1pmPeKN8HYnhxDeWbg_pFYPLiIqc9Sf5Y/preview",
  "i": "Моделі/інструкції/зображення/spinner-412.jpg"
 },
 {
  "t": "Спірограф",
  "c": "Моделі, що малюють",
  "ac": [
   "Моделі, що малюють"
  ],
  "p": "https://drive.google.com/file/d/133U5ZSdSvr6cbvpj3dYV1aWBOrjmmHv_/preview",
  "i": "Моделі/інструкції/зображення/spirohraf-10.jpg"
 },
 {
  "t": "Стегозавр",
  "c": "Динозаври",
  "ac": [
   "Динозаври"
  ],
  "p": "https://drive.google.com/file/d/1FayM5lBRZn5Hqd2KnmSGgOGhQqW62p8u/preview",
  "i": "Моделі/інструкції/зображення/stehozavr-62.jpg"
 },
 {
  "t": "Страус",
  "c": "Птахи",
  "ac": [
   "Птахи"
  ],
  "p": "https://drive.google.com/file/d/1_nHkM58tAQzDJ6MPQLazPzI3ggmA3qkv/preview",
  "i": "Моделі/інструкції/зображення/straus-487.jpg"
 },
 {
  "t": "Стріляюча гармата",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1kHIcgU3p8KE3OzjkWzKTbao2aU2NegjR/preview",
  "i": "Моделі/інструкції/зображення/strilyayucha-harmata-81.jpg"
 },
 {
  "t": "Стріляючий пускач",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1-nYSENMPN-RpClzH2exvh2WJ25ZqexSj/preview",
  "i": "Моделі/інструкції/зображення/strilyayuchyy-puskach-80.jpg"
 },
 {
  "t": "Стів",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1Li4LgMKwp6bNkMGKHZ2jj03LSt82DDTk/preview",
  "i": "Моделі/інструкції/зображення/stiv-41.jpg"
 },
 {
  "t": "Суперкар",
  "c": "Автомобілі, мотоцикли",
  "ac": [
   "Автомобілі, мотоцикли"
  ],
  "p": "https://drive.google.com/file/d/17cLXnHs6o8WX3TJMRDVic0-nUNYtkcgw/preview",
  "i": "Моделі/інструкції/зображення/superkar-299.jpg"
 },
 {
  "t": "Супутник",
  "c": "Космос",
  "ac": [
   "Космос",
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/1TIiErNI0ghCrgd-mX5Fpm58PO_m3865u/preview",
  "i": "Моделі/інструкції/зображення/suputnyk-464.png"
 },
 {
  "t": "Супутники",
  "c": "Космос",
  "ac": [
   "Космос"
  ],
  "p": "https://drive.google.com/file/d/1xm5HfQahOc9nh_ZROvQIgdQ4-vAEnNhM/preview",
  "i": "Моделі/інструкції/зображення/suputnyky-242.jpg"
 },
 {
  "t": "Сфінкс",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1zpHbX8OS1aAMrLqz2ZbOdqT-Uw-Nx-HP/preview",
  "i": "Моделі/інструкції/зображення/sfinks-105.jpg"
 },
 {
  "t": "Танк",
  "c": "Військова техніка",
  "ac": [
   "Військова техніка"
  ],
  "p": "https://drive.google.com/file/d/1HlpjSnE9U-zZlLQdMgAsa9UaDSk3xA6Q/preview",
  "i": "Моделі/інструкції/зображення/tank-229.jpg"
 },
 {
  "t": "Танкбот",
  "c": "Роботи",
  "ac": [
   "Роботи"
  ],
  "p": "https://drive.google.com/file/d/1uPG_BKhMRIiWsbTWnj8yNWFc-okDDCa-/preview",
  "i": "Моделі/інструкції/зображення/tankbot-230.jpg"
 },
 {
  "t": "Танцюрист",
  "c": "Люди",
  "ac": [
   "Люди",
   "Спорт"
  ],
  "p": "https://drive.google.com/file/d/1hh93MY80BAW8u7BDidZ9pbcEwsewm_9Y/preview",
  "i": "Моделі/інструкції/зображення/tantsyuryst-57.jpg"
 },
 {
  "t": "Танцюючі птахи",
  "c": "Птахи",
  "ac": [
   "Птахи"
  ],
  "p": "https://drive.google.com/file/d/1bM-yXO8At5xw_B3kiisJgbBhe5wgtz4s/preview",
  "i": "Моделі/інструкції/зображення/tantsyuyuchi-ptakhy-179.jpg"
 },
 {
  "t": "Танці",
  "c": "Люди",
  "ac": [
   "Люди"
  ],
  "p": "https://drive.google.com/file/d/1SIrd5Zurk8C5ROh_a3mX_YTIdADDbpEV/preview",
  "i": "Моделі/інструкції/зображення/tantsi-415.jpg"
 },
 {
  "t": "Телеграф",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/16wi4pb3CZFtbtZy9a3uKfBFcVimY182I/preview",
  "i": "Моделі/інструкції/зображення/telehraf-416.jpg"
 },
 {
  "t": "Телескоп Хаббл",
  "c": "Космос",
  "ac": [
   "Космос",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/1_FKXOCVB4IIQP15pyJFj6WK6sV25rryb/preview",
  "i": "Моделі/інструкції/зображення/teleskop-khabbl-557.jpg"
 },
 {
  "t": "Терези",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1kmwnpi9AlKBcCASyw0jg8-CQHWfnodrD/preview",
  "i": "Моделі/інструкції/зображення/terezy-378.jpg"
 },
 {
  "t": "Технозавр",
  "c": "Динозаври",
  "ac": [
   "Динозаври"
  ],
  "p": "https://drive.google.com/file/d/10RaxLjcLC7TM9LNcbqtOxBPtt89Dh2Xy/preview",
  "i": "Моделі/інструкції/зображення/tekhnozavr-70.jpg"
 },
 {
  "t": "Тигр",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1A5JBVZd8vbOcvFPd1dJpaRwBSPq0cT6_/preview",
  "i": "Моделі/інструкції/зображення/tyhr-180.jpg"
 },
 {
  "t": "Тиранозавр",
  "c": "Динозаври",
  "ac": [
   "Динозаври"
  ],
  "p": "https://drive.google.com/file/d/17MBw3dHD04mlvyhunsrXuJvWO1a0CNxI/preview",
  "i": "Моделі/інструкції/зображення/tyranozavr-68.jpg"
 },
 {
  "t": "Токарний верстат",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1eYyzM6VIwaQf2TqjM7hNXPhRVkmS0cCL/preview",
  "i": "Моделі/інструкції/зображення/tokarnyy-verstat-95.jpg"
 },
 {
  "t": "Том і Джері",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/15w6cu0bSR2E_Orfv-dFPn93b4CzgyT3r/preview",
  "i": "Моделі/інструкції/зображення/tom-i-dzheri-181.jpg"
 },
 {
  "t": "Трактор",
  "c": "Міні-моделі",
  "ac": [
   "Міні-моделі",
   "Спецтехніка"
  ],
  "p": "https://drive.google.com/file/d/1Ikqz5vt9BPJlxD3b1nmvGXHUMS9WwOAF/preview",
  "i": "Моделі/інструкції/зображення/traktor-525.jpg"
 },
 {
  "t": "Трал",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/1a5eCrJSDXkbQHaDQdITJzVFvtsNgHfeY/preview",
  "i": "Моделі/інструкції/зображення/tral-466.png"
 },
 {
  "t": "Трицератопс",
  "c": "Динозаври",
  "ac": [
   "Динозаври"
  ],
  "p": "https://drive.google.com/file/d/1Ghe54jDpHU91fVY5E5YuaSBCLvLoYnJ5/preview",
  "i": "Моделі/інструкції/зображення/trytseratops-66.jpg"
 },
 {
  "t": "Трицикл",
  "c": "Автомобілі, мотоцикли",
  "ac": [
   "Автомобілі, мотоцикли",
   "Міні-моделі"
  ],
  "p": "https://drive.google.com/file/d/1JTHri5eEDI5OVHZfeR_Nyd4jombPr0U6/preview",
  "i": "Моделі/інструкції/зображення/trytsykl-520.jpg"
 },
 {
  "t": "Тролейбус",
  "c": "Транспорт",
  "ac": [
   "Транспорт"
  ],
  "p": "https://drive.google.com/file/d/19IJL6tiKhBS5UHdSFSZcnX00-anCohQM/preview",
  "i": "Моделі/інструкції/зображення/troleybus-300.jpg"
 },
 {
  "t": "Тукан",
  "c": "Міні-моделі",
  "ac": [
   "Міні-моделі",
   "Птахи"
  ],
  "p": "https://drive.google.com/file/d/1kRiJO6vsnmxqIPGm0_M3SckYEGsfX74T/preview",
  "i": "Моделі/інструкції/зображення/tukan-515.jpg"
 },
 {
  "t": "Турбо-вентилятор",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1S49ecClQsrXcgCgKhSJJyC7Je8saOHnD/preview",
  "i": "Моделі/інструкції/зображення/turbo-ventylyator-34.jpg"
 },
 {
  "t": "Турист",
  "c": "Люди",
  "ac": [
   "Люди"
  ],
  "p": "https://drive.google.com/file/d/1AmeniFF5tWPlTIOEYsAFucij9eEeX3Bw/preview",
  "i": "Моделі/інструкції/зображення/turyst-417.jpg"
 },
 {
  "t": "Турнір роботів",
  "c": "Космос",
  "ac": [
   "Космос",
   "Моделі для змагань",
   "Нові інструкції",
   "Роботи"
  ],
  "p": "https://drive.google.com/file/d/1BCt1U3x_Bjuj96wzfyeBhqKOQ4K3Ffx0/preview",
  "i": "Моделі/інструкції/зображення/turnir-robotiv-570.jpg"
 },
 {
  "t": "Тягач",
  "c": "Моделі без смартхаба",
  "ac": [
   "Моделі без смартхаба",
   "Спецтехніка"
  ],
  "p": "https://drive.google.com/file/d/1OCQOqma9Jq4ghISCnIVnRFp1do4qkc0G/preview",
  "i": "Моделі/інструкції/зображення/tyahach-5.jpg"
 },
 {
  "t": "Тягнучий робот",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "Офіційні/tyahnuchyy-robot-649.pdf",
  "i": ""
 },
 {
  "t": "Фабрика Санти",
  "c": "Новорічні",
  "ac": [
   "Новорічні"
  ],
  "p": "https://drive.google.com/file/d/115f9k7JuTypcR3uPV3hdpw4TqBOm4fT1/preview",
  "i": "Моделі/інструкції/зображення/fabryka-santy-83.jpg"
 },
 {
  "t": "Фенек",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1vcWrfHz4PEKzc3e6p07yFUJEmvyONM1f/preview",
  "i": "Моделі/інструкції/зображення/fenek-489.jpg"
 },
 {
  "t": "Формула-1",
  "c": "Автомобілі, мотоцикли",
  "ac": [
   "Автомобілі, мотоцикли"
  ],
  "p": "https://drive.google.com/file/d/11G7gS5A70eFt1BFCzQVWQGBTT1DV0CFn/preview",
  "i": "Моделі/інструкції/зображення/formula-1-305.jpg"
 },
 {
  "t": "Фунікулер",
  "c": "Механізми",
  "ac": [
   "Механізми",
   "Транспорт"
  ],
  "p": "https://drive.google.com/file/d/1t_Q7ngzlZGb-8IYbmRrrrgVpb8WaBNB2/preview",
  "i": "Моделі/інструкції/зображення/funikuler-269.jpg"
 },
 {
  "t": "Фітнес-кіт",
  "c": "Спорт",
  "ac": [
   "Спорт",
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1TU0vfN71YKdm-tE9gtAwMN89ordyoxDl/preview",
  "i": "Моделі/інструкції/зображення/fitnes-kit-35.jpg"
 },
 {
  "t": "Хакерський прилад",
  "c": "Космос",
  "ac": [
   "Космос",
   "Механізми",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/1gzdNOdsQLP2PqOzi4q9MRRJbSVr4kLEE/preview",
  "i": "Моделі/інструкції/зображення/khakerskyy-prylad-566.jpg"
 },
 {
  "t": "Хамелеон",
  "c": "Тварини",
  "ac": [
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1nmiLMHfi1MM4XUksarza7fH4SYrzi5bQ/preview",
  "i": "Моделі/інструкції/зображення/khameleon-187.jpg"
 },
 {
  "t": "Хаммер",
  "c": "Автомобілі, мотоцикли",
  "ac": [
   "Автомобілі, мотоцикли",
   "Військова техніка",
   "Нові інструкції"
  ],
  "p": "https://drive.google.com/file/d/1T_w-5zvi4za7cHd1rVgUEc4EGy0uSx_f/preview",
  "i": "Моделі/інструкції/зображення/khammer-306.jpg"
 },
 {
  "t": "Харвестер",
  "c": "Космос",
  "ac": [
   "Космос",
   "Нові інструкції",
   "Спецтехніка"
  ],
  "p": "https://drive.google.com/file/d/1wjuWCv-psjthfoBAAha0bfjXmggfcrWp/preview",
  "i": "Моделі/інструкції/зображення/kharvester-580.jpg"
 },
 {
  "t": "Хитання",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "Офіційні/khytannya-269.pdf",
  "i": ""
 },
 {
  "t": "Ходьба",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/1ydqsGSViLICsyh4SX4iwWx-T_vaNcfDn/preview",
  "i": "Моделі/інструкції/зображення/khodba-469.png"
 },
 {
  "t": "Хот-рід",
  "c": "Автомобілі, мотоцикли",
  "ac": [
   "Автомобілі, мотоцикли"
  ],
  "p": "https://drive.google.com/file/d/1G7VEmzXUDtRKUBijN7179cxdQgToYT-g/preview",
  "i": "Моделі/інструкції/зображення/khot-rid-307.jpg"
 },
 {
  "t": "Художник",
  "c": "Люди",
  "ac": [
   "Люди",
   "Моделі, що малюють"
  ],
  "p": "https://drive.google.com/file/d/1-isaQ8EIw21LZ5C6ck4aa6xxTrpBDIvM/preview",
  "i": "Моделі/інструкції/зображення/khudozhnyk-12.jpg"
 },
 {
  "t": "Цвіркун",
  "c": "Комахи",
  "ac": [
   "Комахи"
  ],
  "p": "https://drive.google.com/file/d/1qinWY5Hb_AKoP64Ncvi91RH3MqY9qtQI/preview",
  "i": "Моделі/інструкції/зображення/tsvirkun-170.jpg"
 },
 {
  "t": "Циркач",
  "c": "Люди",
  "ac": [
   "Люди"
  ],
  "p": "https://drive.google.com/file/d/1-Lwa5mkIFkatNPWMfRVqCltD65T6RHLN/preview",
  "i": "Моделі/інструкції/зображення/tsyrkach-420.jpg"
 },
 {
  "t": "Черв'як",
  "c": "Комахи",
  "ac": [
   "Комахи"
  ],
  "p": "https://drive.google.com/file/d/1zOUqVifdPxzjH_tptRTzW4yI2voi0scK/preview",
  "i": "Моделі/інструкції/зображення/cherv-yak-188.jpg"
 },
 {
  "t": "Черепаха",
  "c": "Міні-моделі",
  "ac": [
   "Міні-моделі",
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/140bTOyWzdQ6m9C-DvR_4dBUJJ0hg0FIW/preview",
  "i": "Моделі/інструкції/зображення/cherepakha-502.jpg"
 },
 {
  "t": "Човен",
  "c": "Кораблі",
  "ac": [
   "Кораблі"
  ],
  "p": "https://drive.google.com/file/d/1d34RzHOHg7h8oSQ7XqKK_-Fc0L7BZOh1/preview",
  "i": "Моделі/інструкції/зображення/choven-223.jpg"
 },
 {
  "t": "Чопер",
  "c": "Автомобілі, мотоцикли",
  "ac": [
   "Автомобілі, мотоцикли",
   "Міні-моделі"
  ],
  "p": "https://drive.google.com/file/d/1q0Q0IjAo2K_14PRGCYbsPc55A9vFsV38/preview",
  "i": "Моделі/інструкції/зображення/choper-521.jpg"
 },
 {
  "t": "Шалені фанати",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1TloaTfhmJuweTre05jo0A4_2Gvhqmz77/preview",
  "i": "Моделі/інструкції/зображення/shaleni-fanaty-371.jpg"
 },
 {
  "t": "Шахтар",
  "c": "Люди",
  "ac": [
   "Люди"
  ],
  "p": "https://drive.google.com/file/d/1QTr2v-MFaxoOdgGe1urudIOS37eXoqll/preview",
  "i": "Моделі/інструкції/зображення/shakhtar-421.jpg"
 },
 {
  "t": "Швейна машина",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1mzoq1_zArace6MtWFMdPy9IX9FNSYy0m/preview",
  "i": "Моделі/інструкції/зображення/shveyna-mashyna-96.jpg"
 },
 {
  "t": "Швидкісний поїзд",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Транспорт"
  ],
  "p": "https://drive.google.com/file/d/1bbwt_UWEt0vbH5K6gruER9lzAebX9MDm/preview",
  "i": "Моделі/інструкції/зображення/shvydkisnyy-poyizd-579.jpg"
 },
 {
  "t": "Шлюз",
  "c": "Механізми",
  "ac": [
   "Механізми",
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/1YzBX4Z0cNHw7YjfdNECPbQ-zjDWuxK-8/preview",
  "i": "Моделі/інструкції/зображення/shlyuz-471.png"
 },
 {
  "t": "Штангіст",
  "c": "Люди",
  "ac": [
   "Люди",
   "Спорт"
  ],
  "p": "https://drive.google.com/file/d/1r62zL8Ae1BqAIaNs2bo9e8kz2S_L1U2j/preview",
  "i": "Моделі/інструкції/зображення/shtanhist-58.jpg"
 },
 {
  "t": "Яйцебот",
  "c": "Моделі, що малюють",
  "ac": [
   "Моделі, що малюють"
  ],
  "p": "https://drive.google.com/file/d/1HS4_HMVRxwGGL9IP_ihrrGfhAbphTdbx/preview",
  "i": "Моделі/інструкції/зображення/yaytsebot-13.jpg"
 },
 {
  "t": "Яхта",
  "c": "Кораблі",
  "ac": [
   "Кораблі",
   "Міні-моделі"
  ],
  "p": "https://drive.google.com/file/d/1QAfrRCYxvbjKtPOIyx2xiK06C0mHbinD/preview",
  "i": "Моделі/інструкції/зображення/yakhta-225.jpg"
 },
 {
  "t": "Ящик",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1hnhmrpIK4LWkkEPAkUgUTgHsV8ADjzsi/preview",
  "i": "Моделі/інструкції/зображення/yashchyk-422.jpg"
 },
 {
  "t": "Ігровий пістолет",
  "c": "Механізми",
  "ac": [
   "Механізми"
  ],
  "p": "https://drive.google.com/file/d/1stoOvPVPZ8hRp0AcncE-tGC9MPx5sdSX/preview",
  "i": "Моделі/інструкції/зображення/ihrovyy-pistolet-361.png"
 },
 {
  "t": "Ілистий стрибун",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Тварини"
  ],
  "p": "https://drive.google.com/file/d/1kRln88yrP5fKM2ZAhRm5Xcfz4imOs2SO/preview",
  "i": "Моделі/інструкції/зображення/ilystyy-strybun-541.jpg"
 },
 {
  "t": "Індіанець",
  "c": "Люди",
  "ac": [
   "Люди"
  ],
  "p": "https://drive.google.com/file/d/13WR9OkT1CzUVuPuuSHd9UfrzKKc9XkbK/preview",
  "i": "Моделі/інструкції/зображення/indianets-202.jpg"
 },
 {
  "t": "Інопланетянин",
  "c": "Космос",
  "ac": [
   "Космос"
  ],
  "p": "https://drive.google.com/file/d/1OMKLkvWEIhcWhGtYuwfMxpHBUk43TtR9/preview",
  "i": "Моделі/інструкції/зображення/inoplanetyanyn-432.jpg"
 },
 {
  "t": "Їзда",
  "c": "Офіційні інструкції LEGO",
  "ac": [
   "Офіційні інструкції LEGO"
  ],
  "p": "https://drive.google.com/file/d/1-CDM8odoKKo5UpEIEKfbOm8TfiCFNal2/preview",
  "i": "Моделі/інструкції/зображення/yizda-440.png"
 },
 {
  "t": "Avtomatychni Vorota",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1RmfQdGxmDkpNhM9W2Uf_KSpRkmmiB14G/preview",
  "i": "Моделі/інструкції/зображення/avtomatychni-vorota-362.jpg"
 },
 {
  "t": "Planetokhid",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/17Qr2btbDni5tFfNDATQjIHX83scvPZG7/preview",
  "i": "Моделі/інструкції/зображення/planetokhid-233.jpg"
 },
 {
  "t": "Vudka",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/12VueohjJRj_On8THZtHSmplNXnKU0L1G/preview",
  "i": "Моделі/інструкції/зображення/vudka-530.jpg"
 },
 {
  "t": "Pidyomnyk",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1K4e80CucnX2WM6atFKKMmEgfrfgNDK02/preview",
  "i": "Моделі/інструкції/зображення/pidyomnyk-29.jpg"
 },
 {
  "t": "Zayets",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1lWsbqXXKg6e0xK-ca--sYNm9eOYAA4cz/preview",
  "i": "Моделі/інструкції/зображення/zayets-155.jpg"
 },
 {
  "t": "Traktor",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1D-FPLopVbptlu62NPTTbJnLkHjjS07rF/preview",
  "i": "Моделі/інструкції/зображення/traktor-258.jpg"
 },
 {
  "t": "Honochnyy Avtomobil",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/12LnmWTrJKqT5LpGrHd94-iIfSqoHL4gA/preview",
  "i": "Моделі/інструкції/зображення/honochnyy-avtomobil-282.jpg"
 },
 {
  "t": "Honochnyy Avtomobil",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1aEAe7zdce6lNNtIt3jG6afRWbm7oY8HW/preview",
  "i": "Моделі/інструкції/зображення/honochnyy-avtomobil-280.jpg"
 },
 {
  "t": "Bahhi",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1lBd0KBMYlYhPsyvjBC_Z9g_l0K2LmFS5/preview",
  "i": "Моделі/інструкції/зображення/bahhi-576.jpg"
 },
 {
  "t": "Byk",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1M1XVu_ekyRG9sBdxDOUw1sD6SZb6tjtL/preview",
  "i": "Моделі/інструкції/зображення/byk-120.jpg"
 },
 {
  "t": "Navantazhuvach Vylkovyy",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1LjQjuqvjkPXjJKbYaEcCBjPd6N8qg-ef/preview",
  "i": "Моделі/інструкції/зображення/navantazhuvach-vylkovyy-337.jpg"
 },
 {
  "t": "Traktor",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/16h-jevlhmacuQ4KWQ6XUE_r8RYEVa1T-/preview",
  "i": "Моделі/інструкції/зображення/traktor-33.jpg"
 },
 {
  "t": "Litak",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1JXWOUJUq2XDN9o3-B9CkwjAjJkEooGWm/preview",
  "i": "Моделі/інструкції/зображення/litak-31.jpg"
 },
 {
  "t": "Zhaba",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1fTnt8jYSdGKeA5ec03s2-FszW5VGmpdV/preview",
  "i": "Моделі/інструкції/зображення/zhaba-147.jpg"
 },
 {
  "t": "Krokuyuchyy Robot",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1JRoJ6BWcN-DnE1otoLgEI7E1-Y_8hSIW/preview",
  "i": "Моделі/інструкції/зображення/krokuyuchyy-robot-17.jpg"
 },
 {
  "t": "Pozashlyakhovyk",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1KJKb7iyvxdBXJkcsqjIKNVR87aRXUFMW/preview",
  "i": "Моделі/інструкції/зображення/pozashlyakhovyk-285.jpg"
 },
 {
  "t": "Vertolit",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1kIjvgNMK_47E8jQxRwB5z3bwhsnFb9O9/preview",
  "i": "Моделі/інструкції/зображення/vertolit-322.jpg"
 },
 {
  "t": "Robo Ruka",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1aJ3Kxl2Eq7uzyJTeRQLA5qhI2El4nLZp/preview",
  "i": "Моделі/інструкції/зображення/robo-ruka-359.jpg"
 },
 {
  "t": "Konvertoplan",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1bUzU7bcszlQaGZ-RbkBULCAcbTy6x7AY/preview",
  "i": "Моделі/інструкції/зображення/konvertoplan-330.jpg"
 },
 {
  "t": "Vertolit",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1RX0opszuywAwZm3WUE1-hHddrrfITmEr/preview",
  "i": "Моделі/інструкції/зображення/vertolit-284.jpg"
 },
 {
  "t": "Bashtovyy Kran",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/19oIfkQRJi4WcZDAEogIs5SjZFj3WHAeO/preview",
  "i": "Моделі/інструкції/зображення/bashtovyy-kran-336.jpg"
 },
 {
  "t": "Krokuyuchyy Robot",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1kZ9kyUwoLWCL9L9PthKHar80UxmjYEa-/preview",
  "i": "Моделі/інструкції/зображення/krokuyuchyy-robot-16.jpg"
 },
 {
  "t": "Katapulta",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1SCN8H7j6UBGssFKuNpxCz-zwIBsu54Sj/preview",
  "i": "Моделі/інструкції/зображення/katapulta-264.jpg"
 },
 {
  "t": "Monorels",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1jtH593TcLuIW6QODuthouwiV5SuxGIPx/preview",
  "i": "Моделі/інструкції/зображення/monorels-246.jpg"
 },
 {
  "t": "Pidyomnyy Kran",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1aJZC7IwQriugz7VD5y9BFEeJUJgyxpBF/preview",
  "i": "Моделі/інструкції/зображення/pidyomnyy-kran-346.jpg"
 },
 {
  "t": "Husenytsya",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1Kf184QLy6boVWmRemvMmXG-ryFRNq4Yr/preview",
  "i": "Моделі/інструкції/зображення/husenytsya-539.jpg"
 },
 {
  "t": "Mukha",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/13gQ2mX50mqXXosSBsrybrp50c5cV2alv/preview",
  "i": "Моделі/інструкції/зображення/mukha-549.jpg"
 },
 {
  "t": "Velosypedyst",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1LyoYJAGnxWhgm6AAmupzdVZPfPG8rLPd/preview",
  "i": "Моделі/інструкції/зображення/velosypedyst-44.jpg"
 },
 {
  "t": "Malyuvannya",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1USQYBahxMMtDxSir5T3k-9CxeHmkhn3K/preview",
  "i": "Моделі/інструкції/зображення/malyuvannya-9.jpg"
 },
 {
  "t": "Bohomol",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1ZXswS4-lv72v1d_kh9hQc5EC7fWDs1XI/preview",
  "i": "Моделі/інструкції/зображення/bohomol-118.jpg"
 },
 {
  "t": "Planetokhid",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1mPGkSAwLgaDW0361Q_FO9YX5igSWhDVS/preview",
  "i": "Моделі/інструкції/зображення/planetokhid-241.jpg"
 },
 {
  "t": "Mototsykl",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/115C2OpZgrTs0aXl8ze7Pye_NxaDfOHgC/preview",
  "i": "Моделі/інструкції/зображення/mototsykl-517.jpg"
 },
 {
  "t": "Vertolit",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1jBo4A-T7O6_5h_vH4iRPvIoM4GHjISxx/preview",
  "i": "Моделі/інструкції/зображення/vertolit-315.jpg"
 },
 {
  "t": "Aeroplan",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1lNvNLsPXKzkE-KWHAb_BvPA_Njrap22M/preview",
  "i": "Моделі/інструкції/зображення/aeroplan-309.jpg"
 },
 {
  "t": "Mototsykl",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/17Y-0r4rnHcnA464R0bFh2TeocTVoyk1v/preview",
  "i": "Моделі/інструкції/зображення/mototsykl-292.jpg"
 },
 {
  "t": "Dzhyp",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1TX_Z9spdELEJ0RkkagIj-r7cqfze_Skm/preview",
  "i": "Моделі/інструкції/зображення/dzhyp-523.jpg"
 },
 {
  "t": "Zmiya",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1XZ9eHKHFWn3u56nhex2o3CNLXa6Y5_Am/preview",
  "i": "Моделі/інструкції/зображення/zmiya-131.jpg"
 },
 {
  "t": "Tyranozavr",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1j2cPHVaJNRyBjxC3SDw7HndVlgOiqMm9/preview",
  "i": "Моделі/інструкції/зображення/tyranozavr-79.jpg"
 },
 {
  "t": "Lift",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1x6aF6XespwXnmfY3jBIG-jNE1QTprk-a/preview",
  "i": "Моделі/інструкції/зображення/lift-450.jpg"
 },
 {
  "t": "Zayets",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1eaFLaaKTQjPqIYn0dwp7Sq3P0cv_J6ar/preview",
  "i": "Моделі/інструкції/зображення/zayets-128.jpg"
 },
 {
  "t": "Kit",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1kvS9SL8zs-1I4fhGt5_v4YosON3yWtYA/preview",
  "i": "Моделі/інструкції/зображення/kit-135.jpg"
 },
 {
  "t": "Lyzhnyk",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1ux7ABzJfpFspeBpjBU2OuGgf8d3kEgDL/preview",
  "i": "Моделі/інструкції/зображення/lyzhnyk-54.jpg"
 },
 {
  "t": "Vertolit",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1ZhvfVoSpBtEB84f239fCZ3eEFyNSrS1B/preview",
  "i": "Моделі/інструкції/зображення/vertolit-537.jpg"
 },
 {
  "t": "Karusel",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1c_1w1RKIkqSWa-T23mfzKMHnzNdoDlah/preview",
  "i": "Моделі/інструкції/зображення/karusel-206.jpg"
 },
 {
  "t": "Skorpion",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1pp1YhN8NLWQw5uiPHDt3O8DwE7LJnaVy/preview",
  "i": "Моделі/інструкції/зображення/skorpion-172.jpg"
 },
 {
  "t": "Horyla",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1xTMvw-Zycv8Uoc7kPARb-VbAscVtRdgO/preview",
  "i": "Моделі/інструкції/зображення/horyla-123.jpg"
 },
 {
  "t": "Pelikan",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1Lu7wZ-EQWe4LYZ99Cb2DoeC2I2DcJ-e2/preview",
  "i": "Моделі/інструкції/зображення/pelikan-473.jpg"
 },
 {
  "t": "Samoskyd",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1bFlNA0ZwZm-tr1kaPheGoKz3ENhktmPs/preview",
  "i": "Моделі/інструкції/зображення/samoskyd-350.jpg"
 },
 {
  "t": "Kater",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/116uzWNE9TGsRG5wDxQn5HdQEbOrFGysk/preview",
  "i": "Моделі/інструкції/зображення/kater-218.jpg"
 },
 {
  "t": "Vorotar",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/12IbFRu2h1byTwplA3zWKueVi9qkDEPVg/preview",
  "i": "Моделі/інструкції/зображення/vorotar-50.jpg"
 },
 {
  "t": "Robo Ruka",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1u7rfYnNRu5xZW48-qsTvVP0PmyzNMK7T/preview",
  "i": "Моделі/інструкції/зображення/robo-ruka-357.jpg"
 },
 {
  "t": "Shvydkisnyy Poyizd",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1ooxIrROhKVJUsVyLfp70GEiCcA1X0nMq/preview",
  "i": "Моделі/інструкції/зображення/shvydkisnyy-poyizd-32.jpg"
 },
 {
  "t": "Ventylyator",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1jRKMJUbUKBWvVh9YiXE_U8A1hogSNq9r/preview",
  "i": "Моделі/інструкції/зображення/ventylyator-376.jpg"
 },
 {
  "t": "Robo Ruka",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1qXaMyS0bQFY7FRrUVrgbq87Mv8C_zLF4/preview",
  "i": "Моделі/інструкції/зображення/robo-ruka-358.jpg"
 },
 {
  "t": "Ravlyk",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1Rvzb_qgooRP04goz0RsxKwWN8_0Z-9IJ/preview",
  "i": "Моделі/інструкції/зображення/ravlyk-183.jpg"
 },
 {
  "t": "Tyahach",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1bgRbQao61s_L7eUAG0HBV51nUVOxo1_D/preview",
  "i": "Моделі/інструкції/зображення/tyahach-260.jpg"
 },
 {
  "t": "Lift",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1HDtpFsCz1hd0uMpRTN-FYQDl4XSs2UXb/preview",
  "i": "Моделі/інструкції/зображення/lift-392.jpg"
 },
 {
  "t": "Khammer",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1hLH5-bY5N_jWRTagwoTI2qBNsdioLZYS/preview",
  "i": "Моделі/інструкції/зображення/khammer-575.jpg"
 },
 {
  "t": "Betmobil",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1TiMC8fhIFZAFJ9hw0KMgZ_2Gw9ztvCZb/preview",
  "i": "Моделі/інструкції/зображення/betmobil-208.jpg"
 },
 {
  "t": "Honochnyy Avtomobil",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1Kc9Iiyju2lDATj2chpjmcIh4OKursGMa/preview",
  "i": "Моделі/інструкції/зображення/honochnyy-avtomobil-281.jpg"
 },
 {
  "t": "Korabel",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1F7QwZV7GWmBICBS1W_Sb_lIALtA58zRc/preview",
  "i": "Моделі/інструкції/зображення/korabel-221.jpg"
 },
 {
  "t": "Hidroplan",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1HBwK20aP9N7YEoQpxlED3-xbrgp6IKaG/preview",
  "i": "Моделі/інструкції/зображення/hidroplan-215.jpg"
 },
 {
  "t": "Mavpa",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1MvHqM9eyuVcJGpTAQvQC-Yw6M71A0Enm/preview",
  "i": "Моделі/інструкції/зображення/mavpa-154.jpg"
 },
 {
  "t": "Kachka",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1gZM5GFCtIZHBYq_cA1U8hLyq2R46X6tz/preview",
  "i": "Моделі/інструкції/зображення/kachka-186.jpg"
 },
 {
  "t": "Honochnyy Avtomobil",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1yrPw60QPiG8_-J1MO7QU1qz_sV43Lwwe/preview",
  "i": "Моделі/інструкції/зображення/honochnyy-avtomobil-283.jpg"
 },
 {
  "t": "Zhaba",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1edvWJcZPrRhNgBvVxKkVQifA2jIGgjHQ/preview",
  "i": "Моделі/інструкції/зображення/zhaba-148.jpg"
 },
 {
  "t": "Zauropod",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1yiLZBvbjtUtxIDxcXaMaHS8IrrBlI_Om/preview",
  "i": "Моделі/інструкції/зображення/zauropod-75.jpg"
 },
 {
  "t": "Krokuyuchyy Robot",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/108rnuLubvtV9Te8YKfOFAo8eijyNwAZx/preview",
  "i": "Моделі/інструкції/зображення/krokuyuchyy-robot-22.jpg"
 },
 {
  "t": "Kasa",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1mg038-CLuCOVEu1wI2bFgeMxEOhNjfbr/preview",
  "i": "Моделі/інструкції/зображення/kasa-410.jpg"
 },
 {
  "t": "Zbyralna Mashyna",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1yIIq4C8XeEGZuxLvvJP2y9xCJJxYHA79/preview",
  "i": "Моделі/інструкції/зображення/zbyralna-mashyna-304.jpg"
 },
 {
  "t": "Olen Rudolf",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1CJldxrpvuypZXk3YGXLskSWVzwcTwHXt/preview",
  "i": "Моделі/інструкції/зображення/olen-rudolf-494.jpg"
 },
 {
  "t": "Ventylyator",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1dfIYH8sfWVAY2jik7uswUXi2R3cQA71F/preview",
  "i": "Моделі/інструкції/зображення/ventylyator-404.jpg"
 },
 {
  "t": "Pozashlyakhovyk",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1rwIypO_CBHyHMnCSqWDjvvdzThqiShe2/preview",
  "i": "Моделі/інструкції/зображення/pozashlyakhovyk-277.jpg"
 },
 {
  "t": "Lyzhnyk",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1uwWZBbo4t6VXJEcMQkylWAjo23-8q5KB/preview",
  "i": "Моделі/інструкції/зображення/lyzhnyk-87.jpg"
 },
 {
  "t": "Sova",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/11BBUGC6AjYS1_TUES2j0mcHdrh1BgCAf/preview",
  "i": "Моделі/інструкції/зображення/sova-177.jpg"
 },
 {
  "t": "Ilystyy Strybun",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1q1AAUikAZRO0uZBj4-nCdgHG88dV4qF_/preview",
  "i": "Моделі/інструкції/зображення/ilystyy-strybun-169.jpg"
 },
 {
  "t": "Traktor",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1Rkv8BOhEgaviokxdng9Rxz7eMSOPcl0Z/preview",
  "i": "Моделі/інструкції/зображення/traktor-255.jpg"
 },
 {
  "t": "Slon",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1kJ32r0mYe7UL5jXwZ6_7zDLIam11i6h-/preview",
  "i": "Моделі/інструкції/зображення/slon-174.jpg"
 },
 {
  "t": "Byk",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/16H8ij8CyPz-9xX_EjBshv0VTPsKyCgX-/preview",
  "i": "Моделі/інструкції/зображення/byk-119.jpg"
 },
 {
  "t": "Honochnyy Avtomobil",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1pjMvGkny6BApZQZdrA08UZAcGzIM4_k6/preview",
  "i": "Моделі/інструкції/зображення/honochnyy-avtomobil-279.jpg"
 },
 {
  "t": "Kombayn",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1pbS4TPQkRqwtJai2djEqLa-k2Wa9yEnz/preview",
  "i": "Моделі/інструкції/зображення/kombayn-250.jpg"
 },
 {
  "t": "Litak",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1mNXM6UJIg8O4BI0a9Kky-jYCQzrnmipg/preview",
  "i": "Моделі/інструкції/зображення/litak-332.jpg"
 },
 {
  "t": "Betmobil",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1Z3sfkpwh53zwHrj4K4sVvNyxLK4oMiyV/preview",
  "i": "Моделі/інструкції/зображення/betmobil-209.jpg"
 },
 {
  "t": "Tank",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1huzg324DdncrvrAyavB3hDTJnCAOPb1w/preview",
  "i": "Моделі/інструкції/зображення/tank-488.jpg"
 },
 {
  "t": "Avtomobil",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1R0p_GZcvbI6nGSvpoh3pAa30Lueqj5eO/preview",
  "i": "Моделі/інструкції/зображення/avtomobil-288.jpg"
 },
 {
  "t": "Vorotar",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1D9KghZG_wKGidVpngjQfg27bO-Sgu7ul/preview",
  "i": "Моделі/інструкції/зображення/vorotar-48.jpg"
 },
 {
  "t": "Litak",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1QJCwXldjrkdvBAwQMeIF17vPxmC8CxLH/preview",
  "i": "Моделі/інструкції/зображення/litak-333.jpg"
 },
 {
  "t": "Korabel",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/160734ode3Q87MVMo3WxEz3g0Ms1MF0PS/preview",
  "i": "Моделі/інструкції/зображення/korabel-544.jpg"
 },
 {
  "t": "Litak",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1y8LPPdG91iiJi_BjNnFzpF3RatijbS3Y/preview",
  "i": "Моделі/інструкції/зображення/litak-329.jpg"
 },
 {
  "t": "Radar",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1gsSaiXJxBaHi4RmipEDc6a0SxJm4bdYQ/preview",
  "i": "Моделі/інструкції/зображення/radar-507.jpg"
 },
 {
  "t": "Vertolit",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/16D2aED8qtLXCuXM8VJPBjGy15HU79PSg/preview",
  "i": "Моделі/інструкції/зображення/vertolit-321.jpg"
 },
 {
  "t": "Drakon",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1GFERwNBGmXjjGoRvP_AR33bvkgNYFVK-/preview",
  "i": "Моделі/інструкції/зображення/drakon-143.jpg"
 },
 {
  "t": "Novorichna Yalynka",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1Bqkk-ZXwKVtX6te-xkY1UyBbPv0Uu7Zw/preview",
  "i": "Моделі/інструкції/зображення/novorichna-yalynka-491.jpg"
 },
 {
  "t": "Vantazhivka",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1gElatBZeZPTI9YVOMVA_IhzUUceCv751/preview",
  "i": "Моделі/інструкції/зображення/vantazhivka-482.jpg"
 },
 {
  "t": "Betmobil",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1ZDOfskKKbDuhSxXIYRCC-jdsmyoz-8Et/preview",
  "i": "Моделі/інструкції/зображення/betmobil-522.jpg"
 },
 {
  "t": "Litak",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/10khJRe6JRnd8v4gY5R_rT9yFyXJr_M_c/preview",
  "i": "Моделі/інструкції/зображення/litak-327.jpg"
 },
 {
  "t": "Aeroplan",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1vBJ8oMgUwRFgBtaMGaP8Z_m4dMfX2ncq/preview",
  "i": "Моделі/інструкції/зображення/aeroplan-310.jpg"
 },
 {
  "t": "Kombayn",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1djIrwSHsJT9camWfPRpy66TxJFOQYWMq/preview",
  "i": "Моделі/інструкції/зображення/kombayn-251.jpg"
 },
 {
  "t": "Traktor",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1mnS3KRrVu_iB7_thepQvih6M2d5zi31Y/preview",
  "i": "Моделі/інструкції/зображення/traktor-259.jpg"
 },
 {
  "t": "X Wing",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1Ctvt66a3MNPHPjf8Li_nZc8o1zFLHiMR/preview",
  "i": "Моделі/інструкції/зображення/x-wing-201.jpg"
 },
 {
  "t": "X Wing",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1OMECYu9qTc-Am9jUECBPRiqhU-oOjmNo/preview",
  "i": "Моделі/інструкції/зображення/x-wing-200.jpg"
 },
 {
  "t": "Krokuyuchyy Robot",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1sVuy6AHEciRHWXC2e11PqYwHm7-5UR3E/preview",
  "i": "Моделі/інструкції/зображення/krokuyuchyy-robot-42.jpg"
 },
 {
  "t": "Pavuk",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1e6cJov2ZyuGBUPqnU1reOICG8r3HD-Ua/preview",
  "i": "Моделі/інструкції/зображення/pavuk-157.jpg"
 },
 {
  "t": "Drakon",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1DxEFRL3ZPOEoCgTeTFQVfJydPX5AFuKQ/preview",
  "i": "Моделі/інструкції/зображення/drakon-126.jpg"
 },
 {
  "t": "Pavuk",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1UtskXKmGuU1n_234QUU7Cv4JF299GDgf/preview",
  "i": "Моделі/інструкції/зображення/pavuk-160.jpg"
 },
 {
  "t": "Pidyomnyy Kran",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/18m8FebvlocuS-57-ivueBkPN_tfqd5tC/preview",
  "i": "Моделі/інструкції/зображення/pidyomnyy-kran-344.jpg"
 },
 {
  "t": "Slon",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1ViRwmEKw9eVoGZc6yKo6UM5xVwPYNgkX/preview",
  "i": "Моделі/інструкції/зображення/slon-486.jpg"
 },
 {
  "t": "Tyahach",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1jo0FgbS6B47p5kuI3b7OFkIlS7CvLxgH/preview",
  "i": "Моделі/інструкції/зображення/tyahach-303.jpg"
 },
 {
  "t": "Krokuyuchyy Robot",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1PrMXgWlnGn8LPLxKupgJ72L4sg3uXsVp/preview",
  "i": "Моделі/інструкції/зображення/krokuyuchyy-robot-556.jpg"
 },
 {
  "t": "Avtobus",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1sourHM7uPOTjmCrPhwKkxlTvr26l2McJ/preview",
  "i": "Моделі/інструкції/зображення/avtobus-272.jpg"
 },
 {
  "t": "Yakhta",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1Zh3L5zRbOthZn78Q_IdKC6oDvLcPKoNR/preview",
  "i": "Моделі/інструкції/зображення/yakhta-509.jpg"
 },
 {
  "t": "Spirohraf",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1ot2CdocAfLkBuaZEqTZMY7fDVDj-q-k9/preview",
  "i": "Моделі/інструкції/зображення/spirohraf-11.jpg"
 },
 {
  "t": "Vantazhivka",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1WLIiWA3MrCFSuHTVQpooqJPO3axD9hLC/preview",
  "i": "Моделі/інструкції/зображення/vantazhivka-340.jpg"
 },
 {
  "t": "Pavuk",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1Mbp_jrzDjxVvmTkvuPVgSRpW_TVjNiVD/preview",
  "i": "Моделі/інструкції/зображення/pavuk-162.jpg"
 },
 {
  "t": "Bahhi",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1ezyzSUUkQO9wKwg2gS3-RUGc3bkueMtD/preview",
  "i": "Моделі/інструкції/зображення/bahhi-472.jpg"
 },
 {
  "t": "Skorpion",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1WAPxcf04gAxT5HWsvbv4zi7Q4dzsjebJ/preview",
  "i": "Моделі/інструкції/зображення/skorpion-171.jpg"
 },
 {
  "t": "Babka",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/17lX17bJWuGrqMqk3cck51XIoQ_I6hT0o/preview",
  "i": "Моделі/інструкції/зображення/babka-178.jpg"
 },
 {
  "t": "Novorichna Yalynka",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1dujOtFCIBRPCoop8AA7dvwgOA45tgtZF/preview",
  "i": "Моделі/інструкції/зображення/novorichna-yalynka-429.jpg"
 },
 {
  "t": "Betmobil",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1aTAIkrt_Ptw6x7NruNEunCPOUgEXoHab/preview",
  "i": "Моделі/інструкції/зображення/betmobil-210.jpg"
 },
 {
  "t": "Traktor",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1xsOD_aE5slSBVgN0-xq372Z0MJonMuA9/preview",
  "i": "Моделі/інструкції/зображення/traktor-257.jpg"
 },
 {
  "t": "Ravlyk",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1-zQRHHJr3Lz7tkAcJi-NSPjLQS9eZvVa/preview",
  "i": "Моделі/інструкції/зображення/ravlyk-184.jpg"
 },
 {
  "t": "Litak",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1jIzZTUwk30QFciqhQROrvG35o0-rRDrj/preview",
  "i": "Моделі/інструкції/зображення/litak-326.jpg"
 },
 {
  "t": "Pozashlyakhovyk",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1qQAyWDagNityDEeDZutGVhvttpanVreZ/preview",
  "i": "Моделі/інструкції/зображення/pozashlyakhovyk-538.jpg"
 },
 {
  "t": "Papuha",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1jW8jqCGDpmGvsptMIv_29hw5jZn2n98o/preview",
  "i": "Моделі/інструкції/зображення/papuha-163.jpg"
 },
 {
  "t": "Yashchyk",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1PTVAMozMXoAr81WN3Dg21vawP4ieH9--/preview",
  "i": "Моделі/інструкції/зображення/yashchyk-423.jpg"
 },
 {
  "t": "Vorotar",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1jZ2zhTQtDq3pTmFJC7T2KrEYci5YO3ZT/preview",
  "i": "Моделі/інструкції/зображення/vorotar-49.jpg"
 },
 {
  "t": "Tantsyuryst",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1rL-uClmLeSTsURUXjU_BAUWV8VzZ8DCh/preview",
  "i": "Моделі/інструкції/зображення/tantsyuryst-413.jpg"
 },
 {
  "t": "Lyzhnyk",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1vlm9iXRndXuM0zsomFJynYBIntFNyS5L/preview",
  "i": "Моделі/інструкції/зображення/lyzhnyk-53.jpg"
 },
 {
  "t": "Pavuk",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1aNw0ewDjs1CoU19OXvn7OXb01-MxHOF_/preview",
  "i": "Моделі/інструкції/зображення/pavuk-158.jpg"
 },
 {
  "t": "Byk",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1kzuWDisaPoFy1QGOwJ2CRCbpJJ5oRbU3/preview",
  "i": "Моделі/інструкції/зображення/byk-106.jpg"
 },
 {
  "t": "Kit Na Velosypedi",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1hvbeEHmtB7h_u2qz2TgF0BDKQiWlEN7G/preview",
  "i": "Моделі/інструкції/зображення/kit-na-velosypedi-474.jpg"
 },
 {
  "t": "Povorot",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1_Ce_kIoDStSWBo10BkS_r8oV7TmGFDh1/preview",
  "i": "Моделі/інструкції/зображення/povorot-458.jpg"
 },
 {
  "t": "Bahhi",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1GWjoifRmg9X-40_7CJ5osPYrQ5zcsN4D/preview",
  "i": "Моделі/інструкції/зображення/bahhi-275.jpg"
 },
 {
  "t": "Vertolit",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1tOrEbXIYFH6tpq7o7LyppdiQQZP7sTcp/preview",
  "i": "Моделі/інструкції/зображення/vertolit-312.jpg"
 },
 {
  "t": "Sobaka",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1jXFZLMlCr7nfbKnZzmyslrgoxb7Yf_rw/preview",
  "i": "Моделі/інструкції/зображення/sobaka-176.jpg"
 },
 {
  "t": "Rukh Po Liniyi",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1_z4bdnyCNuDEJM-eTMQ1GkyjX8SGSJrm/preview",
  "i": "Моделі/інструкції/зображення/rukh-po-liniyi-108.jpg"
 },
 {
  "t": "Kanatna Doroha",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1BYebJaua7v0MJ_f8qqAq5pbD-wLAZ8-a/preview",
  "i": "Моделі/інструкції/зображення/kanatna-doroha-268.jpg"
 },
 {
  "t": "Androyid",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1_P5J9OwTj1oYWxuulR0L167Z2N_YGclN/preview",
  "i": "Моделі/інструкції/зображення/androyid-196.jpg"
 },
 {
  "t": "Litak",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1IVYXAkNOARaOzDgYy5omU3AiHSQkN_TC/preview",
  "i": "Моделі/інструкції/зображення/litak-331.jpg"
 },
 {
  "t": "Naftovyy Nasos",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1OCys2XRIIQYGclsD1AEL-aJh1CEQ0Oi6/preview",
  "i": "Моделі/інструкції/зображення/naftovyy-nasos-398.jpg"
 },
 {
  "t": "Cherepakha",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1q8HHMN53glCI_zmaUGFJAmWAPMm2qA6u/preview",
  "i": "Моделі/інструкції/зображення/cherepakha-190.jpg"
 },
 {
  "t": "Krokodyl",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1678w67nJwIvRU_t3BOnrORjySlWnm08J/preview",
  "i": "Моделі/інструкції/зображення/krokodyl-478.jpg"
 },
 {
  "t": "Motoroler",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1zOOlQPUL9IW61OH8QKAIWdrLSIu4rwDC/preview",
  "i": "Моделі/інструкції/зображення/motoroler-548.jpg"
 },
 {
  "t": "Vertolit",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/15A1slpalbbcxpPOkfPyon9TfTd3tETnI/preview",
  "i": "Моделі/інструкції/зображення/vertolit-316.jpg"
 },
 {
  "t": "Vertolit",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1GBqj-dGP0z1X3rdsj83KkQLzO5aI3FLN/preview",
  "i": "Моделі/інструкції/зображення/vertolit-313.jpg"
 },
 {
  "t": "Traktor",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1N4voTVhvDTQeJG0LP2IOMUhlceyMoXv0/preview",
  "i": "Моделі/інструкції/зображення/traktor-256.jpg"
 },
 {
  "t": "Katapulta",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1JdHGPTS0mYWLz5KqgDTJqc2NAjG_E2Ev/preview",
  "i": "Моделі/інструкції/зображення/katapulta-266.jpg"
 },
 {
  "t": "Model Sonyachnoyi Systemy",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1MR21FlZy_BVnq5Iy8ENUr4GHkktWJRpM/preview",
  "i": "Моделі/інструкції/зображення/model-sonyachnoyi-systemy-581.jpg"
 },
 {
  "t": "Pavuk",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1Za1djbZ1h7PwXU_iHAZ6df2jgSXXlGki/preview",
  "i": "Моделі/інструкції/зображення/pavuk-159.jpg"
 },
 {
  "t": "Sobaka",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1r9Ig8rSBUH0aSzTyZSLYEU_H7NFaKij2/preview",
  "i": "Моделі/інструкції/зображення/sobaka-175.jpg"
 },
 {
  "t": "Karusel",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1sKUliN2CGN54hXdr8DEu5Pj1AgvdzPYJ/preview",
  "i": "Моделі/інструкції/зображення/karusel-532.jpg"
 },
 {
  "t": "Piratskyy Korabel",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1JU-vV1735i57lm7wW3Pl6UScEV_IeMqU/preview",
  "i": "Моделі/інструкції/зображення/piratskyy-korabel-224.jpg"
 },
 {
  "t": "Ravlyk",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1_iX0u9RhC810_iI9XdVHCyFX7oUAAKEm/preview",
  "i": "Моделі/інструкції/зображення/ravlyk-182.jpg"
 },
 {
  "t": "Troleybus",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1Hkt0eX61btukTmeIjLBkaFnGMLhRMJD7/preview",
  "i": "Моделі/інструкції/зображення/troleybus-301.jpg"
 },
 {
  "t": "Ventylyator",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1TrGg9Ww2Jpu8sDIBR3eic6pGkkNWzk1H/preview",
  "i": "Моделі/інструкції/зображення/ventylyator-379.jpg"
 },
 {
  "t": "Krokuyuchyy Robot",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1Cz7m209yw_8gYj1gM0WZSPDmPiOZQY3c/preview",
  "i": "Моделі/інструкції/зображення/krokuyuchyy-robot-24.jpg"
 },
 {
  "t": "Marsokhid",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1TRUmTwJI4uyz4oLMHi9PQPVKN5GwlF1Z/preview",
  "i": "Моделі/інструкції/зображення/marsokhid-238.jpg"
 },
 {
  "t": "Ptakh",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1U3Z9KG3h3Vin6pB1ej9W4ZV9GSOSyDf8/preview",
  "i": "Моделі/інструкції/зображення/ptakh-166.jpg"
 },
 {
  "t": "Zhaba",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1RhvnUDFQG4YwcYbfNcTmuXZArjlBcSwG/preview",
  "i": "Моделі/інструкції/зображення/zhaba-149.jpg"
 },
 {
  "t": "Kit",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1qdvkBW-I3nLI5FwbwhSmPYThx4li6KkU/preview",
  "i": "Моделі/інструкції/зображення/kit-133.jpg"
 },
 {
  "t": "Yaytsebot",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/16pcMA-1fWQjJdfhJjoFmH1n073KsBgvj/preview",
  "i": "Моделі/інструкції/зображення/yaytsebot-14.jpg"
 },
 {
  "t": "Batyskaf",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1f6RNVX6e8bltnvZAvYMheWjBgPmeNWx0/preview",
  "i": "Моделі/інструкції/зображення/batyskaf-213.jpg"
 },
 {
  "t": "Karusel",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1eiKyxhDVGFnqeJLEcfq_HPp8H6qVm-Js/preview",
  "i": "Моделі/інструкції/зображення/karusel-204.jpg"
 },
 {
  "t": "Avtobus",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1ST_l6yKiFt2GvK7Bh_Klp0WV9bsdRBjA/preview",
  "i": "Моделі/інструкції/зображення/avtobus-271.jpg"
 },
 {
  "t": "Pozhezhna Mashyna",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1xoHxE7s9cLlDDrwIHQGRkgtrij4h6zAa/preview",
  "i": "Моделі/інструкції/зображення/pozhezhna-mashyna-296.jpg"
 },
 {
  "t": "Vertolit",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1AcsrrO6farkluwHPeHqB4oCzQuaQJjim/preview",
  "i": "Моделі/інструкції/зображення/vertolit-320.jpg"
 },
 {
  "t": "Navantazhuvach Vylkovyy",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1hJJqX6AivLbeo5ImGftuj2SV1qBK_SQ4/preview",
  "i": "Моделі/інструкції/зображення/navantazhuvach-vylkovyy-348.jpg"
 },
 {
  "t": "Vertolit",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1HangPAQHMe7lxkT7jLwCf9HlAuBkCUIC/preview",
  "i": "Моделі/інструкції/зображення/vertolit-317.jpg"
 },
 {
  "t": "Maylo Z Datchykom Peremishchennya",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1E4u-TI3LsZoQFTcYHGxj3Zkx3qMfaA9b/preview",
  "i": "Моделі/інструкції/зображення/maylo-z-datchykom-peremishchennya-453.jpg"
 },
 {
  "t": "Vertolit",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/190sg8HIfEN4Q7Q0f6QE932KRe43a0K1d/preview",
  "i": "Моделі/інструкції/зображення/vertolit-319.jpg"
 },
 {
  "t": "Horyla",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1sgelSsII7RA8i2oPMOxyRQdDdLV60E-1/preview",
  "i": "Моделі/інструкції/зображення/horyla-122.jpg"
 },
 {
  "t": "Tyahach",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1YLtHOyHPwzOHf4oUsC0c84_4xGRig45c/preview",
  "i": "Моделі/інструкції/зображення/tyahach-302.jpg"
 },
 {
  "t": "Krokodyl",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1opMNtG9v8-5Np0HbeMNFHGz236hEIeM7/preview",
  "i": "Моделі/інструкції/зображення/krokodyl-140.jpg"
 },
 {
  "t": "Navantazhuvach Vylkovyy",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/10oFOFcAPYEbs53g1-BgVETcdDp63pUqA/preview",
  "i": "Моделі/інструкції/зображення/navantazhuvach-vylkovyy-338.jpg"
 },
 {
  "t": "Pidyomnyy Kran",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/15rhlStXu_28zd1tRcUZ1iiEAQWhSRiXK/preview",
  "i": "Моделі/інструкції/зображення/pidyomnyy-kran-343.jpg"
 },
 {
  "t": "Lift",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/14YDPCko8Y1nR1S1K17E5DVzSzspENGQe/preview",
  "i": "Моделі/інструкції/зображення/lift-426.jpg"
 },
 {
  "t": "At St",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1ybDhi_b7Y_rVQd4DhBZKIwQHEpCOmP9x/preview",
  "i": "Моделі/інструкції/зображення/at-st-193.jpg"
 },
 {
  "t": "Kachka",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1bo-xejOWSccCqwB4qxPCXMFIbrLUUXD6/preview",
  "i": "Моделі/інструкції/зображення/kachka-185.jpg"
 },
 {
  "t": "Vertolit",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1c3FkIqunUfHwnqjrZeDkhLXWvg2_0aVs/preview",
  "i": "Моделі/інструкції/зображення/vertolit-434.jpg"
 },
 {
  "t": "Krokodyl",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1kFyZR605uk9tZo181eo4k8t8s7FNCqXq/preview",
  "i": "Моделі/інструкції/зображення/krokodyl-139.jpg"
 },
 {
  "t": "Kombayn",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1DLj93Lz6FsFK4X978b-d4l9smJz8e5Pa/preview",
  "i": "Моделі/інструкції/зображення/kombayn-252.jpg"
 },
 {
  "t": "Drakon",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/11Mc1kQKJyzOq0YFBqoYx9UXNVhIucZ0Q/preview",
  "i": "Моделі/інструкції/зображення/drakon-125.jpg"
 },
 {
  "t": "Robo Ruka",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1arDNzEe829ZbmYJrIgDpfrYmMI3keDkE/preview",
  "i": "Моделі/інструкції/зображення/robo-ruka-356.jpg"
 },
 {
  "t": "Katapulta",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/19ycJynsMxw2PKW70ip-Q4Iq_HrDQ4RP-/preview",
  "i": "Моделі/інструкції/зображення/katapulta-263.jpg"
 },
 {
  "t": "R2d2",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1dkHJPmatnu_bdgSjJ4ecfUZG6Ori_nd5/preview",
  "i": "Моделі/інструкції/зображення/r2d2-195.jpg"
 },
 {
  "t": "Rover",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1JRN5fZnQijDjYNjV5dk03B0XOZmj1qdB/preview",
  "i": "Моделі/інструкції/зображення/rover-240.jpg"
 },
 {
  "t": "Ventylyator",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1GhcDcWFayolDZOyVIZvkI9PgGx8x86Mf/preview",
  "i": "Моделі/інструкції/зображення/ventylyator-433.jpg"
 },
 {
  "t": "Litak",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/181hHNHX-cBpjva5U8OeLrZBJreAgBt1Y/preview",
  "i": "Моделі/інструкції/зображення/litak-328.jpg"
 },
 {
  "t": "Kin",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1PS7_3hbYh2DzWGXhgipxXJHKyLPf0BvM/preview",
  "i": "Моделі/інструкції/зображення/kin-481.jpg"
 },
 {
  "t": "Manipulyator",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1Wgd3FoHvKZjUlM3kvrKyMd_ZZ4u_oIjs/preview",
  "i": "Моделі/інструкції/зображення/manipulyator-354.jpg"
 },
 {
  "t": "Pterodaktyl",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/141zBgrymuTJsqvKZr8OLtTzlb4UF4o7T/preview",
  "i": "Моделі/інструкції/зображення/pterodaktyl-78.jpg"
 },
 {
  "t": "Robot Sumoyist",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1l57omdjcbiCVkxQhsGyCZxi09ItL6tQL/preview",
  "i": "Моделі/інструкції/зображення/robot-sumoyist-100.jpg"
 },
 {
  "t": "Vertolit",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1j577bw9BizxMKiBB9wsonb9EI4NF-CC1/preview",
  "i": "Моделі/інструкції/зображення/vertolit-553.jpg"
 },
 {
  "t": "Shaleni Fanaty",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1bt-tCht8j93V2VkcQrtsbmBvWEmTFPgE/preview",
  "i": "Моделі/інструкції/зображення/shaleni-fanaty-372.jpg"
 },
 {
  "t": "Krokuyuchyy Robot",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1XuJk7Kp-uM4OMiX-ZLY6LzojUf-ZUkQG/preview",
  "i": "Моделі/інструкції/зображення/krokuyuchyy-robot-585.jpg"
 },
 {
  "t": "Avtomobil",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1usqOISEPSiZu0blkWs-VvfhjBbwnFnNT/preview",
  "i": "Моделі/інструкції/зображення/avtomobil-289.jpg"
 },
 {
  "t": "Bashtovyy Kran",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1nxE96dSYS8U0Gj46-dWBHv4c-m2O4qQM/preview",
  "i": "Моделі/інструкції/зображення/bashtovyy-kran-342.jpg"
 },
 {
  "t": "Karusel",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/10i1tLcLWydG597ry_IpvYCK0KBQWjvwz/preview",
  "i": "Моделі/інструкції/зображення/karusel-205.jpg"
 },
 {
  "t": "Betmobil",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1-ob_ySl6AGVC1vwG8sZFNMLyU7EVTwhK/preview",
  "i": "Моделі/інструкції/зображення/betmobil-211.jpg"
 },
 {
  "t": "Krokuyuchyy Robot",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1ZG8WzJKfWGLshgS8daOTIA47JBtLZbOb/preview",
  "i": "Моделі/інструкції/зображення/krokuyuchyy-robot-18.jpg"
 },
 {
  "t": "Tantsyuryst",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1q_X8KWyWf9dvbS5sByegPrOIJuUCRzDQ/preview",
  "i": "Моделі/інструкції/зображення/tantsyuryst-414.jpg"
 },
 {
  "t": "Honochnyy Avtomobil",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1N7689nNfaif1MqVD6dwgRxBtyc95LmhR/preview",
  "i": "Моделі/інструкції/зображення/honochnyy-avtomobil-437.jpg"
 },
 {
  "t": "Vertolit",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/16K0yTDrmeUZTv5D8nSaIs9JxLhffBMA4/preview",
  "i": "Моделі/інструкції/зображення/vertolit-314.jpg"
 },
 {
  "t": "Krokodyl",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1UJaFulwJ5vmBtYS2HCBLOtDWoUFAR4iI/preview",
  "i": "Моделі/інструкції/зображення/krokodyl-138.jpg"
 },
 {
  "t": "Valli",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1EQi04ZYFt3Ibx_j8Y2BDFjSxJ37PId9z/preview",
  "i": "Моделі/інструкції/зображення/valli-424.jpg"
 },
 {
  "t": "Cherepakha",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1dDwm4Y09njXV6K3cllDA2wmR4V6Ejx_L/preview",
  "i": "Моделі/інструкції/зображення/cherepakha-189.jpg"
 },
 {
  "t": "Babka",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/19BzRVJu-sMaVZa80QLdSb2LYYSGb_D9R/preview",
  "i": "Моделі/інструкції/зображення/babka-513.jpg"
 },
 {
  "t": "Mototsykl",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1iSfD0hSjkjlki2SZ84m_bU79eKjn8vft/preview",
  "i": "Моделі/інструкції/зображення/mototsykl-394.jpg"
 },
 {
  "t": "Katapulta",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1yRP7sWZll_qDUAV6djdG_sxI3uRL2Xhv/preview",
  "i": "Моделі/інструкції/зображення/katapulta-265.jpg"
 },
 {
  "t": "Bankomat",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/1KVF3jesDDFhSIb0MA98PV8YyefAokAE6/preview",
  "i": "Моделі/інструкції/зображення/bankomat-368.jpg"
 },
 {
  "t": "Snihokhid",
  "c": "Нові інструкції",
  "ac": [
   "Нові інструкції",
   "Різне"
  ],
  "p": "https://drive.google.com/file/d/155g3xWTsZdy4nwO4nL52v3NFE8zkZ6wo/preview",
  "i": "Моделі/інструкції/зображення/snihokhid-298.jpg"
 }
];

const CATEGORY_EMOJI = {"Автомобілі, мотоцикли": "🚗", "Військова техніка": "🪖", "Динозаври": "🦕", "Тварини": "🐾", "Зоряні війни": "⭐", "Кораблі": "🚢", "Космос": "🚀", "Люди": "👤", "Механізми": "⚙️", "Міні-моделі": "🔹", "Моделі без смартхаба": "📦", "Моделі для змагань": "🏆", "Комахи": "🐛", "Новорічні": "🎄", "Офіційні інструкції LEGO": "📋", "Птахи": "🐦", "Рослини": "🌱", "Моделі, що малюють": "🎨", "Роботи": "🤖", "Літаки, вертольоти": "✈️", "Спецтехніка": "🚜", "Спорт": "⚽", "Транспорт": "🚌", "Крокуючі": "🦿", "Нові інструкції": "🆕"};
