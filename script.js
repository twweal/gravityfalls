function switchLanguage() {
    // Отримуємо вибрану мову з випадаючого списку
    const language = document.getElementById("lang").value;

    // Текст для кожної мови
    const translations = {
        en: {
            main: "MAIN",
            lore: "LORE",
            soundtracks: "SOUNDTRACKS",
            facts: "INTERESTING FACTS",
            shop: "SHOP",

            loretext: "LORE", 

            p1: "1951/2 - Stan and Ford are born",
            p2: "1964 (probably) - Stan and Ford find the Stan-O-War (they use a sharpie to write their names in the cave where the boat was and sharpies were first sold in 1964)",
            p3: "1964/5 - Stan and Ford turn 13 and have a bar mitzvah (Stan’s bar mitzvah is mentioned in the journal)",
            p4: "1968/69/70 - a baby is born, who may or may not be Shermie Pines<",
            p5: "1969/70 - Stan is kicked out and Ford goes to university",
            p6: "1975 - Ford goes to Gravity Falls",
            p7: "1978 - Ford finishes Journal 1 and starts Journal 2 (in the blacklight journal he says Journal 1 covers his first three years in Gravity Falls)",
            p8: "1979 - Ford meets Bill",
            p9: "1981 - Ford starts Journal 3",
            p10: "1982 - Fiddleford goes down to help with the portal",
            p11: "1983 - portal goes wrong",
            p12: "1999 - Dipper and Mabel are born",
            p13: "2012 - the entire show happens"

        },
        uk: {
            main: "ГОЛОВНА",
            lore: "ЛОР",
            soundtracks: "САУНДТРЕКИ",
            facts: "ЦІКАВІ ФАКТИ",
            shop: "МАГАЗИН",

            loretext: "ЛОР", 

            p1: "1951/2 - Народилися Стен і Форд",
            p2: "1964 (імовірно) — Стен і Форд знаходять Стен-О-Війну (вони пишуть свої імена в печері, де знаходився човен, і вперше продаються в 1964 році).",
            p3: "1964/5 – Стену та Форду виповнюється 13 років, і вони мають бар-міцву (бар-міцва Стена згадується в журналі).",
            p4: "1968/69/70 - народилася дитина, яка може бути або не бути Шермі Пайнс<",
            p5: "1969/70 - Стена виганяють, а Форд вступає до університету",
            p6: "1975 - Форд відправляється в Гравіті Фолз",
            p7: "1978 — Форд закінчує Журнал 1 і починає Журнал 2 (у журналі blacklight він каже, що Журнал 1 охоплює його перші три роки в Гравіті Фолз)",
            p8: "1979 - Форд зустрічає Білла",
            p9: "1981 — Форд починає писати третій щоденик",
            p10: "1982 - Фіддлфорд спускається, щоб допомогти з порталом",
            p11: "1983 - портал виходить з ладу",
            p12: "1999 — народилися Діппер і Мейбл",
            p13: "2012 - відбувається все шоу"
        }
    };

    // Зміна тексту на вибрану мову
    document.getElementById("main").textContent = translations[language].main;
    document.getElementById("lore").textContent = translations[language].lore;
    document.getElementById("soundtracks").textContent = translations[language].soundtracks;
    document.getElementById("facts").textContent = translations[language].facts;
    document.getElementById("shop").textContent = translations[language].shop;

    document.getElementById("loretext").textContent = translations[language].loretext;

    document.getElementById("p1").textContent = translations[language].p1;
    document.getElementById("p2").textContent = translations[language].p2;
    document.getElementById("p3").textContent = translations[language].p3;
    document.getElementById("p4").textContent = translations[language].p4;
    document.getElementById("p5").textContent = translations[language].p5;
    document.getElementById("p6").textContent = translations[language].p6;
    document.getElementById("p7").textContent = translations[language].p7;
    document.getElementById("p8").textContent = translations[language].p8;
    document.getElementById("p9").textContent = translations[language].p9;
    document.getElementById("p10").textContent = translations[language].p10;
    document.getElementById("p11").textContent = translations[language].p11;
    document.getElementById("p12").textContent = translations[language].p12;
    document.getElementById("p13").textContent = translations[language].p13;
}
