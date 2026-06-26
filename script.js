// ==========================================
// 1. KO'P TILLI TIZIM (UZB / RUS / ENG) DATA
// ==========================================
const translations = {
    uz: {
        nav_home: "Asosiy", nav_about: "HR-OLAN Haqida", nav_services: "Xizmatlar", nav_order: "Buyurtma Berish", nav_faq: "FAQ",
        hero_title: "Xavfsizligingiz — Bizning Oliy Vazifamiz", hero_desc: "Ko'chalar, idoralar va barcha turdagi ob'ektlar uchun uzluksiz video kuzatuv va monitoring xizmatlari.", hero_btn: "Buyurtma Berish",
        about_title: "HR-OLAN Haqida", about_desc1: "Biz intellektual video kuzatuv va xavfsizlik tizimlarini joriy etish bo'yicha yetakchi kompaniyalardan birimiz.", about_desc2: "Biz faqatgina kameralar o'rnatmaymiz, balki ularning uzluksiz ishlashini 24/7 rejimida monitoring qilib boramiz.",
        stat_obj: "Himoyalangan Ob'ektlar", stat_cams: "O'rnatilgan Kameralar", services_title: "Bizning Xizmatlar",
        service1_title: "Tashkilotlar uchun", service1_desc: "Ofis va zavodlar uchun ichki va tashqi yuqori aniqlikdagi aqlli kameralarni o'rnatish.",
        service2_title: "Ko'chalar monitoringi", service2_desc: "Keng qamrovli hududlar va ko'chalarni tungi ko'rish rejimiga ega kameralar bilan jihozlash.",
        service3_title: "24/7 Texnik Ko'rik", service3_desc: "Kameralarning uzluksiz ishlashini ta'minlash va nosozliklarni darhol bartaraf etish.",
        live_title: "Jonli Monitoring Markazi", form_title: "Arizani To'ldiring", form_btn: "Yuborish",
        faq_main_title: "Ko'p Beriladigan Savollar",
        faq1_q: "Kameralar o'rnatilgandan keyin nazorat qanday olib boriladi?", faq1_a: "Bizning maxsus dasturiy ta'minotimiz orqali kameralar holati 24/7 nazorat qilinadi. Agar biron bir kamera tarmoqdan uzilsa, tizimimiz buni darhol aniqlaydi.",
        faq2_q: "Uskunalar uchun kafolat bormi?", faq2_a: "Ha, barcha o'rnatilgan rasmiy kameralar va uskunalarimizga 1 yildan 3 yilgacha to'liq kafolat beriladi.",
        faq3_q: "Xizmat ko'rsatish narxi qanday hisoblanadi?", faq3_a: "Narxlar ob'ektning hajmi, tanlangan kameralar turi va soniga qarab individual ravishda hisoblab chiqiladi."
    },
    ru: {
        nav_home: "Главная", nav_about: "О HR-OLAN", nav_services: "Услуги", nav_order: "Заказать", nav_faq: "FAQ",
        hero_title: "Ваша безопасность — Наша главная задача", hero_desc: "Непрерывное видеонаблюдение и мониторинг для улиц, офисов и любых типов объектов.", hero_btn: "Оставить заявку",
        about_title: "О компании HR-OLAN", about_desc1: "Мы являемся одной из ведущих компаний по внедрению интеллектуальных систем видеонаблюдения и безопасности.", about_desc2: "Мы не просто устанавливаем камеры, мы обеспечиваем их бесперебойную работу в режиме 24/7.",
        stat_obj: "Защищенных объектов", stat_cams: "Установлено камер", services_title: "Наши Услуги",
        service1_title: "Для организаций", service1_desc: "Установка умных камер высокого разрешения внутри и снаружи офисов и заводов.",
        service2_title: "Мониторинг улиц", service2_desc: "Оснащение больших территорий и улиц камерами с режимом ночного видения.",
        service3_title: "Технический осмотр 24/7", service3_desc: "Обеспечение бесперебойной работы камер и немедленное устранение неполадок.",
        live_title: "Центр живого мониторинга", form_title: "Заполните заявку", form_btn: "Отправить",
        faq_main_title: "Часто задаваемые вопросы",
        faq1_q: "Как осуществляется контроль после установки?", faq1_a: "Состояние камер контролируется круглосуточно с помощью нашего ПО. Если камера отключается, система сразу это фиксирует.",
        faq2_q: "Есть ли гарантия на оборудование?", faq2_a: "Да, на все установленные официальные камеры предоставляется полная гарантия от 1 года до 3 лет.",
        faq3_q: "Как рассчитывается стоимость?", faq3_a: "Цены рассчитываются индивидуально в зависимости от размера объекта, типа и количества выбранных камер."
    },
    en: {
        nav_home: "Home", nav_about: "About HR-OLAN", nav_services: "Services", nav_order: "Order Now", nav_faq: "FAQ",
        hero_title: "Your Safety — Our Ultimate Mission", hero_desc: "Uninterrupted video surveillance and monitoring services for streets, offices, and all types of objects.", hero_btn: "Order Service",
        about_title: "About HR-OLAN", about_desc1: "We are one of the leading companies in implementing intelligent video surveillance and security systems.", about_desc2: "We don't just install cameras; we continuously monitor their performance 24/7.",
        stat_obj: "Protected Objects", stat_cams: "Installed Cameras", services_title: "Our Services",
        service1_title: "For Organizations", service1_desc: "Installation of high-definition smart cameras inside and outside offices or factories.",
        service2_title: "Street Monitoring", service2_desc: "Equipping wide areas and streets with advanced night-vision cameras.",
        service3_title: "24/7 Tech Maintenance", service3_desc: "Ensuring continuous operation of cameras and immediate troubleshooting.",
        live_title: "Live Monitoring Center", form_title: "Fill the Form", form_btn: "Submit",
        faq_main_title: "Frequently Asked Questions",
        faq1_q: "How is monitoring conducted after installation?", faq1_a: "Camera status is monitored 24/7 via our software. If any camera disconnects, our system detects it instantly.",
        faq2_q: "Is there a warranty for equipment?", faq2_a: "Yes, all installed official cameras and equipment come with a full 1 to 3-year warranty.",
        faq3_q: "How is the service cost calculated?", faq3_a: "Prices are calculated individually based on the size of the object, type, and number of cameras."
    }
};

// Til almashtirish logikasi
const langSelect = document.getElementById('lang-select');
langSelect.addEventListener('change', (e) => {
    const selectedLang = e.target.value;
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[selectedLang][key]) {
            element.textContent = translations[selectedLang][key];
        }
    });
});

// ==========================================
// 2. KUN / TUN REJIMINI BOSHQARISH (DARK/LIGHT)
// ==========================================
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    if(document.body.classList.contains('dark-mode')) {
        icon.className = "fa-solid fa-sun"; // Quyosh piktogrammasi
    } else {
        icon.className = "fa-solid fa-moon"; // Oy piktogrammasi
    }
});

// ==========================================
// 3. FAQ ACCOORDEON (YIG'ILIB YOYILISH LOGIKASI)
// ==========================================
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const currentItem = header.parentElement;
        const isActive = currentItem.classList.contains('active');
        
        // Ochilganlarini yopish
        document.querySelectorAll('.accordion-item').forEach(item => item.classList.remove('active'));
        
        // Agar oldindan ochiq bo'lmagan bo'lsa, ochish
        if (!isActive) {
            currentItem.classList.add('active');
        }
    });
});

// ==========================================
// 4. TELEGRAM BOT INTEGRATSIYASI
// ==========================================
const BOT_TOKEN = '8779473185:AAEz8VvEr30qYXhv1RUFcos1D7RaXWUlTz8'; 
const CHAT_ID = '8735507318';     

const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const msg = document.getElementById('message').value;

    formResponse.style.color = "#3b82f6";
    formResponse.textContent = "Sending / Yuborilmoqda...";

    const telegramMessage = `🔔 **HR-OLAN WEB APP - YANGI ARIZA**\n\n👤 **Mijoz:** ${name}\n📞 **Tel:** ${phone}\n✉️ **Xabar:** ${msg}`;
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: telegramMessage,
            parse_mode: 'Markdown'
        })
    })
    .then(response => response.json())
    .then(data => {
        if(data.ok) {
            formResponse.style.color = "#10b981";
            formResponse.textContent = "Muvaffaqiyatli yuborildi! / Успешно отправлено!";
            contactForm.reset();
        } else {
            formResponse.style.color = "#ef4444";
            formResponse.textContent = "Xatolik! Token yoki Chat ID xato.";
        }
    })
    .catch(error => {
        formResponse.style.color = "#ef4444";
        formResponse.textContent = "Tarmoqda xatolik yuz berdi.";
    });
});

// Mobil menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});