// ==========================================
// 1. KO'P TILLI TIZIM (UZB / RUS / ENG) DATA 
// ==========================================
const translations = {
    uz: {
        nav_home: "Asosiy", nav_about: "HR-OLAN Haqida", nav_services: "Xizmatlar", nav_order: "Buyurtma Berish", nav_faq: "FAQ", nav_contact: "Kontaktlar",
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
        faq3_q: "Xizmat ko'rsatish narxi qanday hisoblanadi?", faq3_a: "Narxlar ob'ektning hajmi, tanlangan kameralar turi va soniga qarab individual ravishda hisoblab chiqiladi.",
        benefits_title: "Xizmat paketi tarkibi", benefits_subtitle: "Biz bilan shartnoma tuzganingizda quyidagilarga mutlaqo bepul ega bo'lasiz:",
        benefit1_h: "Bepul loyihalash", benefit1_p: "Mutaxassislarimiz ob'ektni o'rganib, kameralar uchun eng maqbul nuqtalarni chizib berishadi.",
        benefit2_h: "Intellektual Tizim (AI)", benefit2_p: "Yuzni aniqlash, harakat datchiklari va smart-notifikatsiya tizimi ulanadi.",
        benefit3_h: "Bulutli Saqlash xizmati", benefit3_p: "Videolar nafaqat yozish qurilmasiga, balki xavfsiz onlayn serverga ham saqlanadi.",
        benefit4_h: "Rasmiy Kafolat", benefit4_p: "Har bir o'rnatilgan tizim uchun 1 yildan 3 yilgacha texnik va uskunaviy kafolat.",
        contact_main_title: "Biz bilan Bog'lanish", team_title: "Mas'ul shaxslar", boss_role: "Kompaniya rahbari", admin_role: "Bosh Administrator",
        channels_title: "To'g'ridan-to'g'ri Aloqa", contact_phone: "Telefon raqam", work_time: "Ish tartibi", work_hours: "Dushanba - Shanba, 09:00 - 18:00",
        address_title: "Ofis manzili", address_text: "Toshkent shahri, Chilonzor tumani", social_title: "Ijtimoiy Tarmoqlarimiz", social_desc: "Yangiliklar va jonli jarayonlarni ijtimoiy tarmoqlarimizda kuzatib boring:",
        popup_success_title: "Muvaffaqiyatli yuborildi!", popup_success_desc: "Tez orada operatorlarimiz siz bilan bog'lanishadi."
    },
    ru: {
        nav_home: "Главная", nav_about: "О HR-OLAN", nav_services: "Услуги", nav_order: "Заказать", nav_faq: "FAQ", nav_contact: "Контакты",
        hero_title: "Ваша безопасность — Наша главная задача", hero_desc: "Непрерывное видеонаблюдение и мониторинг для улиц, offices и любых типов объектов.", hero_btn: "Оставить заявку",
        about_title: "О компании HR-OLAN", about_desc1: "Мы являемся одной из ведущих компаний по внедрению интеллектуальных систем видеонаблюдения и безопасности.", about_desc2: "Мы не просто устанавливаем камеры, мы обеспечиваем их бесперебойную работу в режиме 24/7.",
        stat_obj: "Защищенных объектов", stat_cams: "Установлено камер", services_title: "Наши Услуги",
        service1_title: "Для организаций", service1_desc: "Установка умных камер высокого разрешения внутри и снаружи офисов и заводов.",
        service2_title: "Мониторинг улиц", service2_desc: "Оснащение больших территорий и улиц камерами с режимом ночного видения.",
        service3_title: "Технический осмотр 24/7", service3_desc: "Обеспечение бесперебойной работы камер и немедленное устранение неполадок.",
        live_title: "Центр живого мониторинга", form_title: "Заполните заявку", form_btn: "Отправить",
        faq_main_title: "Часто задаваемые вопросы",
        faq1_q: "Как осуществляется контроль после установки?", faq1_a: "Состояние камер контролируется круглосуточно с помощью нашего ПО. Если камера отключается, система сразу это фиксирует.",
        faq2_q: "Есть ли гарантия на оборудование?", faq2_a: "Да, на все установленные официальные камеры предоставляется полная гарантия от 1 года до 3 лет.",
        faq3_q: "Как рассчитывается стоимость?", faq3_a: "Цены рассчитываются индивидуально в зависимости от размера объекта, типа и количества выбранных камер.",
        benefits_title: "Что входит в пакет услуг", benefits_subtitle: "При заключении договора с нами вы получаете абсолютно бесплатно:",
        benefit1_h: "Бесплатное проектирование", benefit1_p: "Наши специалисты изучат объект и составят оптимальную схему расположения камер.",
        benefit2_h: "Интеллектуальная система (AI)", benefit2_p: "Подключение распознавания лиц, датчиков движения и смарт-уведомлений.",
        benefit3_h: "Облачное хранилище", benefit3_p: "Видео сохраняется не только на регистратор, но и на защищенный онлайн-сервер.",
        benefit4_h: "Официальная гарантия", benefit4_p: "Техническая гарантия на все оборудование и работы сроком от 1 года до 3 лет.",
        contact_main_title: "Связаться с нами", team_title: "Ответственные лица", boss_role: "Руководитель компании", admin_role: "Главный Администратор",
        channels_title: "Прямая связь", contact_phone: "Номер телефона", work_time: "Режим работы", work_hours: "Понедельник - Суббота, 09:00 - 18:00",
        address_title: "Адрес офиса", address_text: "Город Ташкент, Чиланзарский район", social_title: "Наши социальные сети", social_desc: "Следите за новостями и живыми процессами в наших социальных сетях:",
        popup_success_title: "Успешно отправлено!", popup_success_desc: "Наши операторы свяжутся с вами в ближайшее время."
    },
    en: {
        nav_home: "Home", nav_about: "About HR-OLAN", nav_services: "Services", nav_order: "Order Now", nav_faq: "FAQ", nav_contact: "Contacts",
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
        faq3_q: "How is the service cost calculated?", faq3_a: "Prices are calculated individually based on the size of the object, type, and number of cameras.",
        benefits_title: "What's Included in the Package", benefits_subtitle: "When you sign a contract with us, you get these completely for free:",
        benefit1_h: "Free Designing", benefit1_p: "Our experts inspect the object and design the most optimal camera layout.",
        benefit2_h: "Intelligent System (AI)", benefit2_p: "Face recognition, motion sensors, and smart notification system setup.",
        benefit3_h: "Cloud Storage Service", benefit3_p: "Footage is saved both on the local recorder and a secure online server.",
        benefit4_h: "Official Warranty", benefit4_p: "Full 1 to 3-year technical and equipment warranty for every installation.",
        contact_main_title: "Contact Us", team_title: "Responsible Persons", boss_role: "Head of Company", admin_role: "General Administrator",
        channels_title: "Direct Channels", contact_phone: "Phone Number", work_time: "Working Hours", work_hours: "Monday - Saturday, 09:00 - 18:00",
        address_title: "Office Address", address_text: "Tashkent city, Chilanzar district", social_title: "Our Social Networks", social_desc: "Follow the latest updates and live processes on our social networks:",
        popup_success_title: "Successfully Sent!", popup_success_desc: "Our operators will contact you shortly."
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
        icon.className = "fa-solid fa-sun";
    } else {
        icon.className = "fa-solid fa-moon";
    }
});

// ==========================================
// 3. FAQ ACCOORDEON (YIG'ILIB YOYILISH LOGIKASI)
// ==========================================
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const currentItem = header.parentElement;
        const isActive = currentItem.classList.contains('active');
        
        document.querySelectorAll('.accordion-item').forEach(item => item.classList.remove('active'));
        
        if (!isActive) {
            currentItem.classList.add('active');
        }
    });
});

// ==========================================
// 4. YANGI TELEGRAM BOT INTEGRATSIYASI & OVERLAY
// ==========================================
const BOT_TOKEN = '8779473185:AAEz8VvEr30qYXhv1RUFcos1D7RaXWUlTz8'; 
const CHAT_ID = '8735507318';     

const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');
const successOverlay = document.getElementById('success-overlay'); 

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
            formResponse.textContent = ""; // Pastdagi matnni o'chirish
            
            // Orqa fonni xiralashtirib, chiroyli oynani ochish
            successOverlay.classList.add('active');
            contactForm.reset(); 

            // 3 soniyadan keyin oynani avtomatik yopish
            setTimeout(() => {
                successOverlay.classList.remove('active');
            }, 3000);

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

// ==========================================
// 5. MOBIL MENYU LOGIKASI
// ==========================================
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});