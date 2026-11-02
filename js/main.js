/* =========================================================
   IceForce — основной скрипт сайта
   Разделы:
     1. Данные о товарах
     2. Вспомогательные функции
     3. Мобильное меню
     4. Кнопка «Наверх» и уведомления
     5. Проверка форм с понятными сообщениями
     6. Модальное окно быстрого заказа (главная)
     7. Карусели категорий (главная)
     8. Фильтры и сортировка каталога
     9. Страница товара (product.html?id=...)
    10. Страница заявки (order.html?product=...)
   ========================================================= */
'use strict';

/* ---------- 1. Данные о товарах ---------- */
const CATEGORIES = {
  "clothing": "Одежда",
  "protection": "Защита",
  "equipment": "Инвентарь"
};

const PRODUCTS = {
  "stick": {
    "name": "Хоккейная клюшка",
    "category": "equipment",
    "price": 12990,
    "image": "hockey-stick",
    "alt": "Композитная хоккейная клюшка с чёрно-красным древком",
    "badge": {
      "text": "Хит",
      "mod": ""
    },
    "short": "Лёгкая клюшка для точных передач и мощных бросков.",
    "lead": "Композитная клюшка со средним прогибом: быстро заряжается при броске и уверенно держит шайбу при приёме.",
    "features": [
      "Композитное древко и крюк",
      "Средняя точка прогиба",
      "Шероховатое покрытие для надёжного хвата"
    ],
    "description": [
      "Клюшка подходит для игроков, которые много бросают с ходу и в одно касание. Средняя точка прогиба делает её универсальной: одинаково удобно бросать с кистей и щелчком.",
      "Перед покупкой проверьте длину: стоя на коньках, верх клюшки должен находиться примерно на уровне подбородка. Лишнюю длину можно укоротить."
    ],
    "sizes": [
      "JR",
      "INT",
      "SR"
    ],
    "specs": [
      [
        "Размерная категория",
        "SR",
        "Для взрослых игроков"
      ],
      [
        "Длина",
        "152 см",
        "Можно укоротить под рост"
      ],
      [
        "Жёсткость (флекс)",
        "75",
        "Подходит игрокам весом 70–85 кг"
      ],
      [
        "Загиб крюка",
        "P92",
        "Универсальный загиб для бросков и передач"
      ],
      [
        "Хват",
        "Левый / правый",
        "Выбирается при оформлении заявки"
      ],
      [
        "Материал",
        "Композит (карбон)",
        "Лёгкость и прочность"
      ],
      [
        "Вес",
        "420 г",
        "Без обмотки"
      ]
    ]
  },
  "chest": {
    "name": "Хоккейный нагрудник",
    "category": "protection",
    "price": 14990,
    "image": "hockey-chest",
    "alt": "Чёрно-серый хоккейный нагрудник с усиленными плечами",
    "badge": {
      "text": "Новинка",
      "mod": "new"
    },
    "short": "Защита корпуса и плеч для тренировок и матчей.",
    "lead": "Нагрудник с усиленными плечевыми чашками и защитой позвоночника для силовой игры.",
    "features": [
      "Усиленные плечевые чашки",
      "Защита груди и позвоночника",
      "Регулировка по бокам"
    ],
    "description": [
      "Модель рассчитана на игроков, которые часто вступают в единоборства у борта. Плотная пена и пластиковые вставки распределяют удар по большей площади.",
      "Нагрудник не должен ограничивать подъём рук: при примерке поднимите руки вверх и проверьте, что плечевые чашки не съезжают."
    ],
    "sizes": [
      "JR",
      "INT",
      "SR"
    ],
    "specs": [
      [
        "Размерная категория",
        "SR",
        "Размеры S–XL"
      ],
      [
        "Зоны защиты",
        "Грудь, плечи, позвоночник",
        "Полная защита корпуса"
      ],
      [
        "Наполнитель",
        "Пена HD и пластиковые вставки",
        "Гасит удары шайбы и клюшки"
      ],
      [
        "Регулировка",
        "Боковые ремни на липучках",
        "Точная посадка по корпусу"
      ],
      [
        "Вентиляция",
        "Перфорация в зоне спины",
        "Меньше перегрева на тренировке"
      ],
      [
        "Вес",
        "1,6 кг",
        "Размер L"
      ]
    ]
  },
  "helmet": {
    "name": "Хоккейный шлем",
    "category": "protection",
    "price": 9990,
    "image": "hockey-helmet",
    "alt": "Золотистый хоккейный шлем с белыми внутренними вставками",
    "badge": {
      "text": "Популярный",
      "mod": "discount"
    },
    "short": "Шлем с регулировкой посадки и совместимостью с визором.",
    "lead": "Шлем с внутренней пеной с памятью формы и быстрой регулировкой размера без инструментов.",
    "features": [
      "Регулировка без инструментов",
      "Пена EPP с памятью формы",
      "Совместим с решёткой и визором"
    ],
    "description": [
      "Шлем плотно облегает голову и не смещается при резких движениях. Вентиляционные отверстия помогают голове не перегреваться в течение матча.",
      "Решётка или визор устанавливаются на штатные крепления. Если играете в детской или юниорской лиге, проверьте регламент: защита лица там обычно обязательна."
    ],
    "sizes": [
      "YTH",
      "JR",
      "SR"
    ],
    "specs": [
      [
        "Размеры",
        "S / M / L",
        "Окружность головы 52–62 см"
      ],
      [
        "Регулировка",
        "Боковые защёлки",
        "Без инструментов"
      ],
      [
        "Внутренний слой",
        "Пена EPP",
        "Сохраняет форму после ударов"
      ],
      [
        "Вентиляция",
        "10 отверстий",
        "Отвод тепла во время игры"
      ],
      [
        "Защита лица",
        "Решётка или визор",
        "Продаются отдельно"
      ],
      [
        "Вес",
        "560 г",
        "Размер M без решётки"
      ]
    ]
  },
  "thermal": {
    "name": "Термобельё",
    "category": "clothing",
    "price": 5990,
    "image": "category-thermal",
    "alt": "Чёрный комплект компрессионного термобелья: лонгслив и брюки",
    "badge": null,
    "short": "Комплект базового слоя для комфорта во время тренировок.",
    "lead": "Компрессионный комплект, который отводит влагу и не натирает под защитой.",
    "features": [
      "Лонгслив и брюки в комплекте",
      "Отвод влаги",
      "Плоские швы"
    ],
    "description": [
      "Базовый слой надевается первым — под защиту. Он отводит пот от тела, поэтому экипировка дольше остаётся сухой, а игроку не холодно в перерывах.",
      "Компрессионная посадка поддерживает мышцы и не собирается складками под нагрудником и шортами."
    ],
    "sizes": [
      "YTH",
      "JR",
      "SR"
    ],
    "specs": [
      [
        "Комплект",
        "Лонгслив и брюки",
        "Можно носить по отдельности"
      ],
      [
        "Состав",
        "Полиэстер 88 %, эластан 12 %",
        "Тянется и быстро сохнет"
      ],
      [
        "Посадка",
        "Компрессионная",
        "Не собирается складками"
      ],
      [
        "Швы",
        "Плоские",
        "Не натирают под защитой"
      ],
      [
        "Размеры",
        "XS–XXL",
        "Детские и взрослые"
      ]
    ]
  },
  "gamashi": {
    "name": "Гамаши",
    "category": "clothing",
    "price": 2490,
    "image": "category-gamashi",
    "alt": "Пара чёрных хоккейных гамаш",
    "badge": null,
    "short": "Эластичные гамаши для фиксации щитков.",
    "lead": "Лёгкие сетчатые гамаши, которые удерживают щитки на месте и пропускают воздух.",
    "features": [
      "Сетчатая дышащая ткань",
      "Подходят под ленту и липучку",
      "Не теряют форму после стирки"
    ],
    "description": [
      "Гамаши надеваются поверх щитков и закрепляются лентой или липучками на шортах. Они не дают щиткам сползать во время игры.",
      "Выбирайте длину по размеру щитков: гамаши должны полностью закрывать щиток и заходить под шорты."
    ],
    "sizes": [
      "YTH",
      "JR",
      "INT",
      "SR"
    ],
    "specs": [
      [
        "Материал",
        "Полиэстер (сетка)",
        "Лёгкий и дышащий"
      ],
      [
        "Длина",
        "66 см",
        "Для размера SR"
      ],
      [
        "Фиксация",
        "Лента или липучка",
        "Не входит в комплект"
      ],
      [
        "Цвет",
        "Чёрный",
        "Подходит к любой форме"
      ],
      [
        "Уход",
        "Машинная стирка при 30 °C",
        "Не сушить на батарее"
      ]
    ]
  },
  "gloves": {
    "name": "Хоккейные перчатки",
    "category": "protection",
    "price": 8990,
    "image": "category-gloves",
    "alt": "Пара чёрных хоккейных краг с сегментированной защитой",
    "badge": null,
    "short": "Защита кистей и пальцев с гибкой посадкой.",
    "lead": "Перчатки с сегментированной защитой пальцев и тонкой ладонью для точного ощущения клюшки.",
    "features": [
      "Сегментированная защита пальцев",
      "Тонкая ладонь из искусственной замши",
      "Усиленный большой палец"
    ],
    "description": [
      "Сегменты на тыльной стороне позволяют сжимать клюшку без усилия, а тонкая ладонь даёт хорошее ощущение крюка и шайбы.",
      "Кончики пальцев не должны упираться в край перчатки. Если между пальцами и краем остаётся больше 1 см — возьмите размер меньше."
    ],
    "sizes": [
      "YTH",
      "JR",
      "SR"
    ],
    "specs": [
      [
        "Размеры",
        "13″ / 14″ / 15″",
        "Подбираются по длине кисти"
      ],
      [
        "Ладонь",
        "Искусственная замша",
        "Тонкая и износостойкая"
      ],
      [
        "Защита",
        "Пена и пластиковые вставки",
        "Сегменты на пальцах"
      ],
      [
        "Большой палец",
        "Усиленный замок",
        "Защита от загиба"
      ],
      [
        "Вес",
        "480 г",
        "Пара, размер 14″"
      ]
    ]
  },
  "visor": {
    "name": "Визор",
    "category": "protection",
    "price": 3990,
    "image": "category-visor",
    "alt": "Прозрачный поликарбонатный визор для хоккейного шлема",
    "badge": null,
    "short": "Прозрачный защитный экран для хоккейного шлема.",
    "lead": "Поликарбонатный визор с покрытием против запотевания и царапин.",
    "features": [
      "Ударопрочный поликарбонат",
      "Покрытие против запотевания",
      "Крепление на два винта"
    ],
    "description": [
      "Визор защищает глаза и верхнюю часть лица, сохраняя полный обзор. Покрытие уменьшает запотевание при перепадах температуры.",
      "Протирайте визор только мягкой салфеткой из микрофибры: бумажные полотенца оставляют царапины."
    ],
    "sizes": [
      "SR"
    ],
    "specs": [
      [
        "Материал",
        "Поликарбонат",
        "Выдерживает удар шайбы"
      ],
      [
        "Покрытие",
        "Против запотевания и царапин",
        "Чистый обзор весь матч"
      ],
      [
        "Форма",
        "Прямая",
        "Широкий угол обзора"
      ],
      [
        "Крепление",
        "Два боковых винта",
        "Подходит к большинству шлемов"
      ],
      [
        "Толщина",
        "2,5 мм",
        "Без искажений"
      ]
    ]
  },
  "elbow": {
    "name": "Налокотники",
    "category": "protection",
    "price": 6990,
    "image": "category-elbow-pads",
    "alt": "Пара чёрных хоккейных налокотников с жёсткими чашками",
    "badge": null,
    "short": "Защитные налокотники с амортизирующими вставками.",
    "lead": "Налокотники с жёсткой чашкой и мягкой амортизирующей подкладкой.",
    "features": [
      "Жёсткая пластиковая чашка",
      "Амортизирующая подкладка",
      "Два регулируемых ремня"
    ],
    "description": [
      "Налокотники защищают локтевой сустав и предплечье от ударов о лёд и борт. Чашка распределяет удар, а мягкий слой гасит его.",
      "Правильно подобранный налокотник закрывает пространство между перчаткой и плечевой чашкой нагрудника без зазоров."
    ],
    "sizes": [
      "YTH",
      "JR",
      "SR"
    ],
    "specs": [
      [
        "Чашка",
        "Пластик",
        "Распределяет силу удара"
      ],
      [
        "Подкладка",
        "Пена средней плотности",
        "Гасит удар"
      ],
      [
        "Фиксация",
        "Два ремня на липучках",
        "Не съезжает при движении"
      ],
      [
        "Размеры",
        "S–XL",
        "По обхвату руки"
      ],
      [
        "Вес",
        "540 г",
        "Пара, размер M"
      ]
    ]
  },
  "shorts": {
    "name": "Хоккейные шорты",
    "category": "protection",
    "price": 9990,
    "image": "category-hockey-shorts",
    "alt": "Чёрные хоккейные шорты с защитными вставками",
    "badge": null,
    "short": "Защитные шорты с усиленными зонами бёдер и копчика.",
    "lead": "Шорты с защитой бёдер, почек и копчика и регулируемым поясом.",
    "features": [
      "Защита бёдер, почек и копчика",
      "Регулируемый пояс",
      "Прочная нейлоновая оболочка"
    ],
    "description": [
      "Шорты защищают зону, которая чаще всего страдает при падениях. Вставки закрывают бёдра, почки и копчик и не мешают движению при катании.",
      "Длина шорт должна доходить до верхнего края щитков, чтобы колено оставалось защищённым при наклоне."
    ],
    "sizes": [
      "YTH",
      "JR",
      "SR"
    ],
    "specs": [
      [
        "Зоны защиты",
        "Бёдра, почки, копчик",
        "Полная защита нижней части корпуса"
      ],
      [
        "Оболочка",
        "Нейлон 420D",
        "Устойчива к порезам"
      ],
      [
        "Пояс",
        "Регулируемый, на шнуровке",
        "Подгоняется по талии"
      ],
      [
        "Размеры",
        "S–XL",
        "Объём талии 70–100 см"
      ],
      [
        "Вес",
        "1,3 кг",
        "Размер L"
      ]
    ]
  },
  "shin": {
    "name": "Щитки",
    "category": "protection",
    "price": 8490,
    "image": "category-shin-guards",
    "alt": "Пара чёрных хоккейных щитков для голени и колена",
    "badge": null,
    "short": "Щитки для защиты голени и коленного сустава.",
    "lead": "Анатомические щитки с жёсткой коленной чашкой и защитой икроножной мышцы.",
    "features": [
      "Жёсткая коленная чашка",
      "Защита голени и икры",
      "Анатомическая форма"
    ],
    "description": [
      "Щитки защищают колено и голень от ударов шайбой и клюшкой. Мягкая боковая защита закрывает икроножную мышцу.",
      "Размер подбирают по расстоянию от середины колена до верха ботинка конька. Колено должно находиться точно в центре чашки."
    ],
    "sizes": [
      "YTH",
      "JR",
      "SR"
    ],
    "specs": [
      [
        "Размеры",
        "13″ / 14″ / 15″ / 16″",
        "По длине голени"
      ],
      [
        "Коленная чашка",
        "Пластик и пена",
        "Защита сустава"
      ],
      [
        "Внутренняя подкладка",
        "Влагоотводящая ткань",
        "Быстро сохнет"
      ],
      [
        "Фиксация",
        "Ремни на липучках",
        "Используются вместе с гамашами"
      ],
      [
        "Вес",
        "920 г",
        "Пара, размер 15″"
      ]
    ]
  },
  "skates": {
    "name": "Хоккейные коньки",
    "category": "equipment",
    "price": 24990,
    "image": "category-skates",
    "alt": "Чёрный хоккейный конёк с белой шнуровкой и стальным лезвием",
    "badge": null,
    "short": "Коньки с поддержкой голеностопа для игры на льду.",
    "lead": "Коньки с жёстким композитным ботинком и сменным лезвием из нержавеющей стали.",
    "features": [
      "Жёсткий композитный ботинок",
      "Сменное лезвие",
      "Термоформовка под стопу"
    ],
    "description": [
      "Жёсткий ботинок поддерживает голеностоп при резких стартах и торможениях, а термоформовка помогает подогнать посадку под форму стопы.",
      "Перед первым выходом на лёд коньки нужно заточить. Размер коньков обычно на 1–1,5 меньше размера обычной обуви — сверяйтесь с таблицей."
    ],
    "sizes": [
      "YTH",
      "JR",
      "INT",
      "SR"
    ],
    "specs": [
      [
        "Ботинок",
        "Композит",
        "Поддержка голеностопа"
      ],
      [
        "Лезвие",
        "Нержавеющая сталь",
        "Сменное"
      ],
      [
        "Полнота",
        "Средняя (D)",
        "Подходит большинству игроков"
      ],
      [
        "Размеры",
        "4–12 (SR)",
        "Есть детские и юниорские"
      ],
      [
        "Термоформовка",
        "Да",
        "Подгонка под стопу"
      ],
      [
        "Вес",
        "820 г",
        "Один конёк, размер 8"
      ]
    ]
  },
  "jersey": {
    "name": "Джерси",
    "category": "clothing",
    "price": 4990,
    "image": "category-jersey",
    "alt": "Тёмно-синее хоккейное джерси с белыми полосами и эмблемой рыси",
    "badge": null,
    "short": "Хоккейная игровая майка для тренировок и матчей.",
    "lead": "Свободное игровое джерси из прочной сетки с усиленными локтями.",
    "features": [
      "Прочная дышащая сетка",
      "Усиленные локти",
      "Свободный крой под защиту"
    ],
    "description": [
      "Джерси надевается поверх нагрудника и налокотников, поэтому оно шире обычной спортивной футболки. Сетчатая ткань хорошо пропускает воздух.",
      "Номер и фамилию можно нанести после покупки — уточните этот вопрос при оформлении заявки."
    ],
    "sizes": [
      "YTH",
      "JR",
      "SR"
    ],
    "specs": [
      [
        "Материал",
        "Полиэстер (сетка)",
        "Дышащая ткань"
      ],
      [
        "Крой",
        "Свободный",
        "Надевается поверх защиты"
      ],
      [
        "Локти",
        "Двойной слой ткани",
        "Дольше не протираются"
      ],
      [
        "Размеры",
        "XS–XXL",
        "Детские и взрослые"
      ],
      [
        "Нанесение",
        "Номер и фамилия",
        "По запросу"
      ]
    ]
  }
};

/* ---------- 2. Вспомогательные функции ---------- */
const NBSP = ' ';

function formatPrice(value) {
  return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, NBSP) + NBSP + '₽';
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Адаптивное изображение: AVIF → WebP → JPG, две ширины (400w и 800w)
function pictureHtml(product, className, sizes, lazy) {
  const set = (ext) =>
    `images/${product.image}-400.${ext} 400w, images/${product.image}-800.${ext} 800w`;
  return `<picture>
    <source type="image/avif" srcset="${set('avif')}" sizes="${sizes}">
    <source type="image/webp" srcset="${set('webp')}" sizes="${sizes}">
    <img class="${className}" src="images/${product.image}-800.jpg" srcset="${set('jpg')}"
      sizes="${sizes}" width="800" height="800" alt="${escapeHtml(product.alt)}"
      ${lazy ? 'loading="lazy"' : ''} decoding="async">
  </picture>`;
}

function productCardHtml(id) {
  const p = PRODUCTS[id];
  const badge = p.badge
    ? `<span class="product-card__badge${p.badge.mod ? ' product-card__badge--' + p.badge.mod : ''}">${p.badge.text}</span>`
    : '';
  return `<li><article class="product-card" data-category="${p.category}" data-price="${p.price}">
    <div class="product-card__image-wrapper">
      ${badge}
      ${pictureHtml(p, 'product-card__image', '(min-width: 1280px) 370px, (min-width: 768px) 28vw, (min-width: 480px) 42vw, 82vw', true)}
    </div>
    <p class="product-card__category">${CATEGORIES[p.category]}</p>
    <h3 class="product-card__title"><a class="product-card__link" href="product.html?id=${id}">${p.name}</a></h3>
    <p class="product-card__description">${p.short}</p>
    <p class="product-card__price">${formatPrice(p.price)}</p>
    <div class="product-card__actions">
      <a class="button button--secondary" href="product.html?id=${id}">Подробнее<span class="visually-hidden"> о товаре «${p.name}»</span></a>
      <a class="button button--primary" href="order.html?product=${id}">Заказать<span class="visually-hidden"> «${p.name}»</span></a>
    </div>
  </article></li>`;
}

// Делает недоступными размеры, которых нет у выбранного товара
function limitSizes(select, productId) {
  if (!select) return;
  const product = PRODUCTS[productId];
  Array.from(select.options).forEach((option) => {
    if (!option.value) return;
    option.disabled = Boolean(product) && !product.sizes.includes(option.value);
  });
  if (select.selectedOptions[0] && select.selectedOptions[0].disabled) {
    select.value = '';
  }
}

/* ---------- 3. Мобильное меню ---------- */
function initMobileNav() {
  const button = document.querySelector('.site-header__menu-button');
  const nav = document.getElementById('site-nav');
  if (!button || !nav) return;

  const desktop = window.matchMedia('(min-width: 1024px)');

  const setOpen = (open) => {
    button.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('site-nav--open', open);
  };

  button.addEventListener('click', () => {
    setOpen(button.getAttribute('aria-expanded') !== 'true');
  });

  // Esc закрывает меню и возвращает фокус на кнопку
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      button.focus();
    }
  });

  // Клик вне шапки закрывает меню
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.site-header')) setOpen(false);
  });

  // При переходе на desktop меню сбрасывается в исходное состояние
  desktop.addEventListener('change', () => setOpen(false));
}

/* ---------- 4. Кнопка «Наверх» и уведомления ---------- */
function initScrollTop() {
  const button = document.getElementById('scroll-top');
  if (!button) return;

  const update = () => {
    button.classList.toggle('scroll-top--visible', window.scrollY > 400);
  };

  window.addEventListener('scroll', update, { passive: true });
  update();

  button.addEventListener('click', () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    // Переносим фокус в начало контента, чтобы клавиатура тоже «поднялась»
    const main = document.getElementById('main');
    if (main) main.focus({ preventScroll: true });
  });
}

let toastTimer;
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  clearTimeout(toastTimer);
  toast.textContent = '';
  // Небольшая пауза, чтобы скринридер объявил даже повторное сообщение
  window.setTimeout(() => {
    toast.textContent = message;
  }, 50);
  toastTimer = window.setTimeout(() => {
    toast.textContent = '';
  }, 6000);
}

/* ---------- 5. Проверка форм ---------- */
function errorElementFor(field) {
  const ids = (field.getAttribute('aria-describedby') || '').split(/\s+/);
  const errorId = ids.find((id) => id.endsWith('-error'));
  return errorId ? document.getElementById(errorId) : null;
}

function errorMessage(field) {
  const v = field.validity;
  if (v.valueMissing) {
    if (field.type === 'checkbox') return 'Подтвердите согласие, чтобы отправить форму.';
    if (field.tagName === 'SELECT') return 'Выберите значение из списка.';
    return 'Заполните это поле.';
  }
  if (v.typeMismatch && field.type === 'email') return 'Введите email в формате name@example.ru.';
  if (v.patternMismatch && field.type === 'tel') return 'Введите телефон, например: +7 999 000-00-00.';
  if (v.rangeUnderflow || v.rangeOverflow) return `Укажите значение от ${field.min} до ${field.max}.`;
  if (v.tooShort) return `Минимум ${field.minLength} символов (сейчас ${field.value.length}).`;
  if (v.badInput) return 'Введите корректное значение.';
  return field.validationMessage;
}

function validateField(field) {
  const error = errorElementFor(field);
  if (field.checkValidity()) {
    field.removeAttribute('aria-invalid');
    if (error) error.textContent = '';
    return true;
  }
  field.setAttribute('aria-invalid', 'true');
  if (error) error.textContent = errorMessage(field);
  return false;
}

function clearErrors(form) {
  form.querySelectorAll('[aria-invalid]').forEach((field) => {
    field.removeAttribute('aria-invalid');
    const error = errorElementFor(field);
    if (error) error.textContent = '';
  });
}

/*
  Без JS работает встроенная проверка браузера.
  С JS включаем свою: ошибка показывается текстом под полем,
  связана с полем через aria-describedby, поле получает aria-invalid,
  а фокус переводится на первое поле с ошибкой.
*/
function enhanceForm(form, onSuccess) {
  form.noValidate = true;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const fields = Array.from(form.elements).filter((el) => el.willValidate);
    const invalid = fields.filter((field) => !validateField(field));

    if (invalid.length) {
      invalid[0].focus();
      return;
    }
    onSuccess(form);
  });

  // Ошибка исчезает, как только поле исправлено
  const recheck = (event) => {
    const field = event.target;
    if (field.getAttribute('aria-invalid') === 'true') validateField(field);
  };
  form.addEventListener('input', recheck);
  form.addEventListener('change', recheck);
  form.addEventListener('reset', () => clearErrors(form));
}

function defaultSuccess(form) {
  showToast(form.dataset.success || 'Форма отправлена.');
  form.reset();
}

/* ---------- 6. Модальное окно быстрого заказа ---------- */
function initOrderDialog() {
  const dialog = document.getElementById('order-dialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;

  const form = dialog.querySelector('#order-form');
  const productName = dialog.querySelector('#dialog-product');
  const productId = dialog.querySelector('#dialog-product-id');
  const sizeSelect = dialog.querySelector('#dialog-size');
  const fullFormLink = dialog.querySelector('#dialog-full-form');
  let lastTrigger = null;

  const open = (id, trigger) => {
    const product = PRODUCTS[id];
    if (!product) return;
    lastTrigger = trigger;
    form.reset();
    productName.value = `${product.name} — ${formatPrice(product.price)}`;
    productId.value = id;
    limitSizes(sizeSelect, id);
    fullFormLink.href = `order.html?product=${id}`;
    dialog.showModal();
    document.body.classList.add('has-dialog');
    sizeSelect.focus();
  };

  const close = () => {
    if (dialog.open) dialog.close();
  };

  document.querySelectorAll('[data-order-product]').forEach((button) => {
    button.addEventListener('click', () => open(button.dataset.orderProduct, button));
  });

  dialog.querySelectorAll('[data-dialog-close]').forEach((button) => {
    button.addEventListener('click', close);
  });

  // Клик по затемнённому фону закрывает окно
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) close();
  });

  // Esc закрывает окно нативно; после закрытия фокус возвращается на кнопку
  dialog.addEventListener('close', () => {
    document.body.classList.remove('has-dialog');
    if (lastTrigger) lastTrigger.focus();
  });

  enhanceForm(form, () => {
    const product = PRODUCTS[productId.value];
    const size = sizeSelect.value;
    close();
    showToast(`Заявка на «${product.name}», размер ${size}, отправлена! Мы свяжемся с вами.`);
    form.reset();
  });
}

/* ---------- 7. Карусели категорий ---------- */
function initCarousels() {
  const tracks = document.querySelectorAll('.category-carousel');
  if (!tracks.length) return;

  const updateButtons = (track) => {
    const max = track.scrollWidth - track.clientWidth;
    document.querySelectorAll(`[data-scroll-target="${track.id}"]`).forEach((button) => {
      button.disabled = button.dataset.direction === 'left'
        ? track.scrollLeft <= 2
        : track.scrollLeft >= max - 2;
    });
  };

  tracks.forEach((track) => {
    // Колесо мыши листает ленту, но у края отпускает прокрутку страницы
    track.addEventListener('wheel', (event) => {
      const max = track.scrollWidth - track.clientWidth;
      if (max <= 0 || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      const delta = event.deltaY;
      const atStart = track.scrollLeft <= 0 && delta < 0;
      const atEnd = track.scrollLeft >= max - 1 && delta > 0;
      if (atStart || atEnd) return;
      event.preventDefault();
      track.scrollLeft += delta;
    }, { passive: false });

    track.addEventListener('scroll', () => updateButtons(track), { passive: true });
    window.addEventListener('resize', () => updateButtons(track));
    updateButtons(track);
  });

  document.querySelectorAll('[data-scroll-target]').forEach((button) => {
    button.addEventListener('click', () => {
      const track = document.getElementById(button.dataset.scrollTarget);
      const item = track && track.querySelector('.category-carousel__item');
      if (!track) return;
      const step = item ? item.getBoundingClientRect().width + 16 : 250;
      track.scrollBy({ left: (button.dataset.direction === 'right' ? 1 : -1) * step });
    });
  });
}

/* ---------- 8. Каталог ---------- */
function initCatalog() {
  const form = document.getElementById('filters-form');
  const grid = document.getElementById('products-grid');
  if (!form || !grid) return;

  const toggle = document.querySelector('.catalog-filters__toggle');
  const count = document.getElementById('products-count');
  const empty = document.getElementById('catalog-empty');
  const items = Array.from(grid.querySelectorAll('[data-product-item]'));
  items.forEach((item, index) => { item.dataset.order = index; });

  const setPanel = (open) => {
    if (!toggle) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Скрыть фильтры' : 'Показать фильтры';
    form.classList.toggle('filters-form--open', open);
  };

  if (toggle) {
    toggle.addEventListener('click', () => {
      setPanel(toggle.getAttribute('aria-expanded') !== 'true');
    });
  }

  // Значения фильтров берём из адреса — ссылкой на отфильтрованный каталог можно поделиться
  const params = new URLSearchParams(window.location.search);
  const selected = params.getAll('category');
  form.querySelectorAll('input[name="category"]').forEach((input) => {
    input.checked = selected.includes(input.value);
  });
  form.elements['price-from'].value = params.get('price-from') || '';
  form.elements['price-to'].value = params.get('price-to') || '';
  form.elements.sort.value = params.get('sort') || 'default';
  if (Array.from(params.keys()).length) setPanel(true);

  const plural = (n) => {
    const mod10 = n % 10;
    const mod100 = n % 100;
    if (mod10 === 1 && mod100 !== 11) return 'товар';
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'товара';
    return 'товаров';
  };

  const apply = () => {
    const categories = Array.from(form.querySelectorAll('input[name="category"]:checked'))
      .map((input) => input.value);
    const from = Number(form.elements['price-from'].value) || 0;
    const to = Number(form.elements['price-to'].value) || Infinity;
    const sort = form.elements.sort.value;

    let visible = 0;
    items.forEach((item) => {
      const card = item.querySelector('.product-card');
      const price = Number(card.dataset.price);
      const show = (!categories.length || categories.includes(card.dataset.category))
        && price >= from && price <= to;
      item.hidden = !show;
      if (show) visible += 1;
    });

    const sorted = items.slice().sort((a, b) => {
      const ca = a.querySelector('.product-card');
      const cb = b.querySelector('.product-card');
      if (sort === 'price-asc') return ca.dataset.price - cb.dataset.price;
      if (sort === 'price-desc') return cb.dataset.price - ca.dataset.price;
      if (sort === 'name') return ca.dataset.name.localeCompare(cb.dataset.name, 'ru');
      return a.dataset.order - b.dataset.order;
    });
    sorted.forEach((item) => grid.appendChild(item));

    count.textContent = `Найдено: ${visible} ${plural(visible)}`;
    empty.hidden = visible > 0;

    // Обновляем адрес страницы без перезагрузки
    const query = new URLSearchParams(new FormData(form));
    Array.from(query.entries()).forEach(([key, value]) => {
      if (!value || (key === 'sort' && value === 'default')) query.delete(key);
    });
    const search = query.toString();
    window.history.replaceState(null, '', search ? `?${search}` : window.location.pathname);
  };

  let timer;
  form.addEventListener('input', () => {
    clearTimeout(timer);
    timer = window.setTimeout(apply, 250);
  });
  form.addEventListener('change', apply);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    apply();
    // На мобильном после «Применить» сворачиваем панель и показываем результат
    if (toggle && !window.matchMedia('(min-width: 1024px)').matches) {
      setPanel(false);
      count.scrollIntoView({ block: 'start' });
    }
  });
  form.addEventListener('reset', () => window.setTimeout(apply, 0));

  document.querySelectorAll('[data-filters-reset]').forEach((button) => {
    button.addEventListener('click', () => {
      form.reset();
      form.querySelector('input').focus();
    });
  });

  apply();
}

/* ---------- 9. Страница товара ---------- */
function initProductPage() {
  const root = document.getElementById('product');
  if (!root) return;

  const id = new URLSearchParams(window.location.search).get('id');
  const product = PRODUCTS[id];
  if (!product || id === 'stick') return; // клюшка уже свёрстана в HTML

  const $ = (selector) => document.getElementById(selector);
  document.title = `${product.name} — IceForce`;
  $('breadcrumb-product').textContent = product.name;
  $('product-category').textContent = CATEGORIES[product.category];
  $('product-title').textContent = product.name;
  $('product-price').textContent = formatPrice(product.price);
  $('product-lead').textContent = product.lead;
  $('product-sizes').textContent = product.sizes.join(', ');
  $('product-order-link').href = `order.html?product=${id}`;
  $('product-table-caption').textContent = `Характеристики товара «${product.name}»`;

  $('product-figure').innerHTML = pictureHtml(
    product, 'product__image', '(min-width: 1280px) 500px, (min-width: 768px) 40vw, 90vw', false
  );
  $('product-features').innerHTML = product.features
    .map((feature) => `<li>${feature}</li>`).join('');
  $('product-specs').innerHTML = product.specs.map(([name, value, note]) => `<tr>
      <th scope="row">${name}</th>
      <td data-label="Значение">${value}</td>
      <td data-label="Комментарий">${note}</td>
    </tr>`).join('');
  $('product-description').innerHTML = product.description
    .map((text) => `<p>${text}</p>`).join('');

  // Похожие товары: сначала из той же категории
  const others = Object.keys(PRODUCTS).filter((key) => key !== id);
  const related = others.filter((key) => PRODUCTS[key].category === product.category)
    .concat(others.filter((key) => PRODUCTS[key].category !== product.category))
    .slice(0, 3);
  $('related-products').innerHTML = related.map(productCardHtml).join('');
}

/* ---------- 10. Страница заявки ---------- */
function initOrderPage() {
  const form = document.getElementById('order-page-form');
  if (!form) return;

  const productSelect = form.elements.product;
  const sizeSelect = form.elements.size;
  const quantity = form.elements.quantity;
  const address = form.elements.address;
  const addressField = document.getElementById('order-address-field');
  const dateInput = form.elements.date;
  const $ = (selector) => document.getElementById(selector);

  // Товар из адреса: order.html?product=helmet
  const fromUrl = new URLSearchParams(window.location.search).get('product');
  if (PRODUCTS[fromUrl]) productSelect.value = fromUrl;

  // Нельзя выбрать дату в прошлом
  const today = new Date();
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  dateInput.min = today.toISOString().slice(0, 10);

  const update = () => {
    const product = PRODUCTS[productSelect.value];
    limitSizes(sizeSelect, productSelect.value);
    const qty = Math.min(Math.max(Number(quantity.value) || 1, 1), 10);
    const courier = form.elements.delivery.value === 'courier';

    addressField.hidden = !courier;
    address.required = courier;
    if (!courier) {
      address.removeAttribute('aria-invalid');
      $('order-address-error').textContent = '';
    }

    $('summary-product').textContent = product ? product.name : 'не выбран';
    $('summary-size').textContent = sizeSelect.value || '—';
    $('summary-quantity').textContent = String(qty);
    $('summary-delivery').textContent = courier ? 'Курьер' : 'Самовывоз';
    $('summary-total').textContent = formatPrice(product ? product.price * qty : 0);
  };

  form.addEventListener('input', update);
  form.addEventListener('change', update);
  form.addEventListener('reset', () => window.setTimeout(update, 0));
  update();

  enhanceForm(form, () => {
    const product = PRODUCTS[productSelect.value];
    showToast(`Заявка на «${product.name}» отправлена! Менеджер свяжется с вами в течение рабочего дня.`);
    form.reset();
  });
}

/* ---------- Запуск ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initScrollTop();
  initOrderDialog();
  initCarousels();
  initCatalog();
  initProductPage();
  initOrderPage();

  const contactForm = document.getElementById('contact-form');
  if (contactForm) enhanceForm(contactForm, defaultSuccess);
});
