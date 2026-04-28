
// const header = document.querySelector('header');
// const headerBurger = document.querySelector('header .burger');
// const headerMenuBurger = document.querySelector('header .menuBurger');
// const headerMenuBurgerA = document.querySelectorAll('header .menuBurger');

// headerBurger.addEventListener('click', () => {
//     headerBurger.classList.toggle("open");
//     headerMenuBurger.classList.toggle("open");
//     body.classList.toggle("noScroll");
// })

// headerMenuBurgerA.forEach(element => {
//     element.addEventListener('click', () => {
//         headerBurger.classList.toggle("open");
//         headerMenuBurger.classList.toggle("open");
//         body.classList.toggle("noScroll");
//     })
// });

// window.addEventListener('resize', function () {
//     if (window.innerWidth >= 1280) {
//         if (headerBurger.classList.contains("open")) {

//             headerBurger.classList.remove("open");
//             headerMenuBurger.classList.remove("open");
//             body.classList.remove("noScroll");
//         }
//     }
// });






// shared-teacher.js

// document.addEventListener('DOMContentLoaded', function () {
//     // --- Анимация возврата на главную ---
//     const backLink = document.querySelector('.back-button');
//     if (backLink) {
//         backLink.addEventListener('click', function (e) {
//             e.preventDefault();
//             const targetUrl = this.getAttribute('href');
//             document.body.classList.add('page-transition-out');
//             setTimeout(() => {
//                 window.location.href = targetUrl;
//                 setTimeout(() => {
//                     document.body.classList.remove('page-transition-out');
//                 }, 500);
//             }, 500);
//         });
//     }

//     // --- Логика табов ---
//     const tabBtns = document.querySelectorAll('.tab-btn');
//     const tabContents = document.querySelectorAll('.tab-content');

//     if (tabBtns.length > 0) {
//         tabBtns.forEach(btn => {
//             btn.addEventListener('click', () => {
//                 const tabId = btn.getAttribute('data-tab');

//                 tabBtns.forEach(b => b.classList.remove('active'));
//                 tabContents.forEach(c => c.classList.remove('active'));

//                 btn.classList.add('active');
//                 const activeTab = document.getElementById(`tab-${tabId}`);
//                 if (activeTab) {
//                     activeTab.classList.add('active');
//                 }

//                 localStorage.setItem('teacherActiveTab', tabId);
//             });
//         });

//         // Восстановление сохраненной вкладки
//         const savedTab = localStorage.getItem('teacherActiveTab');
//         if (savedTab) {
//             const tabToOpen = document.querySelector(`.tab-btn[data-tab="${savedTab}"]`);
//             if (tabToOpen) tabToOpen.click();
//         }
//     }
// });






// teachers-js.js

// document.addEventListener('DOMContentLoaded', function () {
//     // --- Получаем параметры из URL ---
//     const urlParams = new URLSearchParams(window.location.search);
//     const fromDirection = urlParams.get('from');
//     const directionName = urlParams.get('dir');

//     // --- Определяем readable название направления для кнопки ---
//     const directionTitles = {
//         'stretching': 'stretching',
//         'strip_dir': 'strip с нуля',
//         'high-heels': 'high heels',
//         'jazz-funk': 'jazz funk',
//         'hip-hop': 'hip-hop choreo',
//         'author-choreo': 'авторская хореография',
//         'dancehall': 'dancehall',
//         'choreo-kids': 'choreo kids'
//     };

//     const directionTitle = directionTitles[directionName] || 'направлению';

//     // --- Строим навигацию ---
//     const backBar = document.querySelector('.back-bar');
//     const existingButton = document.querySelector('.back-button');

//     if (backBar) {
//         // Если переход с направления — добавляем две кнопки
//         if (fromDirection === 'direction' && directionName) {
//             // Очищаем back-bar
//             backBar.innerHTML = '';

//             // Создаём контейнер для кнопок
//             const navButtons = document.createElement('div');
//             navButtons.className = 'nav-buttons';

//             // Кнопка "назад" (на главную)
//             const backBtn = document.createElement('button');
//             backBtn.className = 'nav-button nav-button-back';
//             backBtn.innerHTML = '<span>назад</span>';
//             backBtn.setAttribute('href', 'index.html#teachers');
//             backBtn.addEventListener('click', function(e) {
//                 e.preventDefault();
//                 const targetUrl = this.getAttribute('href');
//                 document.body.classList.add('page-transition-out');
//                 setTimeout(() => {
//                     window.location.href = targetUrl;
//                     setTimeout(() => {
//                         document.body.classList.remove('page-transition-out');
//                     }, 500);
//                 }, 500);
//             });

//             // Кнопка "к направлению"
//             const forwardBtn = document.createElement('button');
//             forwardBtn.className = 'nav-button nav-button-forward';
//             forwardBtn.innerHTML = `<span>к ${directionTitle}</span>`;
//             forwardBtn.setAttribute('href', `${directionName}.html`);
//             forwardBtn.addEventListener('click', function(e) {
//                 e.preventDefault();
//                 const targetUrl = this.getAttribute('href');
//                 document.body.classList.add('page-transition-out');
//                 setTimeout(() => {
//                     window.location.href = targetUrl;
//                     setTimeout(() => {
//                         document.body.classList.remove('page-transition-out');
//                     }, 500);
//                 }, 500);
//             });

//             navButtons.appendChild(backBtn);
//             navButtons.appendChild(forwardBtn);
//             backBar.appendChild(navButtons);
//         } 
//         // Если переход прямой — оставляем одну кнопку
//         else if (existingButton) {
//             // Просто обновляем существующую кнопку, если нужно
//             existingButton.addEventListener('click', function(e) {
//                 e.preventDefault();
//                 const targetUrl = this.getAttribute('href');
//                 document.body.classList.add('page-transition-out');
//                 setTimeout(() => {
//                     window.location.href = targetUrl;
//                     setTimeout(() => {
//                         document.body.classList.remove('page-transition-out');
//                     }, 500);
//                 }, 500);
//             });
//         }
//     }

//     // --- Логика табов (без изменений) ---
//     const tabBtns = document.querySelectorAll('.tab-btn');
//     const tabContents = document.querySelectorAll('.tab-content');

//     if (tabBtns.length > 0) {
//         tabBtns.forEach(btn => {
//             btn.addEventListener('click', () => {
//                 const tabId = btn.getAttribute('data-tab');

//                 tabBtns.forEach(b => b.classList.remove('active'));
//                 tabContents.forEach(c => c.classList.remove('active'));

//                 btn.classList.add('active');
//                 const activeTab = document.getElementById(`tab-${tabId}`);
//                 if (activeTab) {
//                     activeTab.classList.add('active');
//                 }

//                 localStorage.setItem('teacherActiveTab', tabId);
//             });
//         });

//         const savedTab = localStorage.getItem('teacherActiveTab');
//         if (savedTab) {
//             const tabToOpen = document.querySelector(`.tab-btn[data-tab="${savedTab}"]`);
//             if (tabToOpen) tabToOpen.click();
//         }
//     }
// });






// teachers-js.js

// document.addEventListener('DOMContentLoaded', function () {
//     // --- Получаем параметры из URL ---
//     const urlParams = new URLSearchParams(window.location.search);
//     const fromDirection = urlParams.get('from');
//     const directionName = urlParams.get('dir');

//     // --- Определяем readable название направления для кнопки ---
//     const directionTitles = {
//         'stretching': 'stretching',
//         'strip-zero': 'strip с нуля',
//         'high-heels': 'high heels',
//         'jazz-funk': 'jazz funk',
//         'hip-hop': 'hip-hop choreo',
//         'author-choreo': 'авторская хореография',
//         'dancehall': 'dancehall',
//         'choreo-kids': 'choreo kids'
//     };

//     const directionTitle = directionTitles[directionName] || 'направлению';

//     // --- Строим навигацию ---
//     const backBar = document.querySelector('.back-bar');

//     if (backBar) {
//         // Если переход с направления — добавляем две кнопки
//         if (fromDirection === 'direction' && directionName) {
//             // Очищаем back-bar
//             backBar.innerHTML = '';

//             // Создаём контейнер для кнопок
//             const navButtons = document.createElement('div');
//             navButtons.className = 'nav-buttons';

//             // Кнопка "назад" (на главную)
//             const backBtn = document.createElement('button');
//             backBtn.className = 'nav-button nav-button-back';
//             backBtn.innerHTML = '<span>назад</span>';
//             backBtn.setAttribute('href', 'index.html#teachers');
//             backBtn.addEventListener('click', function(e) {
//                 e.preventDefault();
//                 const targetUrl = this.getAttribute('href');
//                 document.body.classList.add('page-transition-out');
//                 setTimeout(() => {
//                     window.location.href = targetUrl;
//                     setTimeout(() => {
//                         document.body.classList.remove('page-transition-out');
//                     }, 500);
//                 }, 500);
//             });

//             // Кнопка "к направлению"
//             const forwardBtn = document.createElement('button');
//             forwardBtn.className = 'nav-button nav-button-forward';
//             forwardBtn.innerHTML = `<span>к ${directionTitle}</span>`;
//             forwardBtn.setAttribute('href', `${directionName}.html`);
//             forwardBtn.addEventListener('click', function(e) {
//                 e.preventDefault();
//                 const targetUrl = this.getAttribute('href');
//                 document.body.classList.add('page-transition-out');
//                 setTimeout(() => {
//                     window.location.href = targetUrl;
//                     setTimeout(() => {
//                         document.body.classList.remove('page-transition-out');
//                     }, 500);
//                 }, 500);
//             });

//             navButtons.appendChild(backBtn);
//             navButtons.appendChild(forwardBtn);
//             backBar.appendChild(navButtons);
//         } 
//         // Если переход прямой — оставляем одну кнопку
//         else {
//             const existingButton = document.querySelector('.back-button');
//             if (existingButton) {
//                 existingButton.addEventListener('click', function(e) {
//                     e.preventDefault();
//                     const targetUrl = this.getAttribute('href');
//                     document.body.classList.add('page-transition-out');
//                     setTimeout(() => {
//                         window.location.href = targetUrl;
//                         setTimeout(() => {
//                             document.body.classList.remove('page-transition-out');
//                         }, 500);
//                     }, 500);
//                 });
//             }
//         }
//     }

//     // --- Логика табов (без изменений) ---
//     const tabBtns = document.querySelectorAll('.tab-btn');
//     const tabContents = document.querySelectorAll('.tab-content');

//     if (tabBtns.length > 0) {
//         tabBtns.forEach(btn => {
//             btn.addEventListener('click', () => {
//                 const tabId = btn.getAttribute('data-tab');

//                 tabBtns.forEach(b => b.classList.remove('active'));
//                 tabContents.forEach(c => c.classList.remove('active'));

//                 btn.classList.add('active');
//                 const activeTab = document.getElementById(`tab-${tabId}`);
//                 if (activeTab) {
//                     activeTab.classList.add('active');
//                 }

//                 localStorage.setItem('teacherActiveTab', tabId);
//             });
//         });

//         const savedTab = localStorage.getItem('teacherActiveTab');
//         if (savedTab) {
//             const tabToOpen = document.querySelector(`.tab-btn[data-tab="${savedTab}"]`);
//             if (tabToOpen) tabToOpen.click();
//         }
//     }
// });






// teachers-js.js

document.addEventListener('DOMContentLoaded', function () {
    // --- Получаем параметры из URL ---
    const urlParams = new URLSearchParams(window.location.search);
    const fromDirection = urlParams.get('from');
    const directionName = urlParams.get('dir');

    // --- Определяем readable название направления для кнопки ---
    const directionTitles = {
        'stretching': 'stretching',
        'strip': 'strip с нуля',
        'highHeels': 'high heels',
        'jazzFunk': 'jazz funk',
        'hipHop': 'hip-hop choreo',
        'authorChoreo': 'авторская хореография',
        'dancehall': 'dancehall',
        'choreoKids': 'choreo kids'
    };

    const directionTitle = directionTitles[directionName] || 'направлению';

    // --- Строим навигацию ---
    const backBar = document.querySelector('.back-bar');

    if (backBar) {
        // Если переход с направления — добавляем две кнопки (слева и справа)
        if (fromDirection === 'direction' && directionName) {
            // Очищаем back-bar
            backBar.innerHTML = '';

            // Левая кнопка "назад"
            const backBtn = document.createElement('button');
            backBtn.className = 'nav-button nav-button-back';
            // backBtn.innerHTML = '<span>назад</span>';
            backBtn.innerHTML = '<span>на главную</span>';
            backBtn.setAttribute('href', 'index.html#teachers');
            backBtn.addEventListener('click', function (e) {
                e.preventDefault();
                const targetUrl = this.getAttribute('href');
                document.body.classList.add('page-transition-out');
                setTimeout(() => {
                    window.location.href = targetUrl;
                    setTimeout(() => {
                        document.body.classList.remove('page-transition-out');
                    }, 500);
                }, 500);
            });

            // Правая кнопка "к направлению"
            const forwardBtn = document.createElement('button');
            forwardBtn.className = 'nav-button nav-button-forward';
            forwardBtn.innerHTML = `<span>к ${directionTitle}</span>`;
            forwardBtn.setAttribute('href', `${directionName}_dir.html`);
            forwardBtn.addEventListener('click', function (e) {
                e.preventDefault();
                const targetUrl = this.getAttribute('href');
                document.body.classList.add('page-transition-out');
                setTimeout(() => {
                    window.location.href = targetUrl;
                    setTimeout(() => {
                        document.body.classList.remove('page-transition-out');
                    }, 500);
                }, 500);
            });

            backBar.appendChild(backBtn);
            backBar.appendChild(forwardBtn);
        }
        // Если переход прямой — оставляем одну кнопку слева
        else {
            const existingButton = document.querySelector('.back-button');
            if (existingButton) {
                // Убедимся что кнопка одна и она слева
                existingButton.classList.add('nav-button', 'nav-button-back');
                // existingButton.innerHTML = '<span>назад</span>';
                existingButton.innerHTML = '<span>на главную</span>';


                existingButton.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetUrl = this.getAttribute('href');
                    document.body.classList.add('page-transition-out');
                    setTimeout(() => {
                        window.location.href = targetUrl;
                        setTimeout(() => {
                            document.body.classList.remove('page-transition-out');
                        }, 500);
                    }, 500);
                });

                // Добавляем пустой div справа для баланса (чтобы кнопка осталась слева)
                const spacer = document.createElement('div');
                spacer.style.width = 'auto';
                backBar.appendChild(spacer);
            }
        }
    }

    // --- Логика табов (без изменений) ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');

                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));

                btn.classList.add('active');
                const activeTab = document.getElementById(`tab-${tabId}`);
                if (activeTab) {
                    activeTab.classList.add('active');
                }

                localStorage.setItem('teacherActiveTab', tabId);
            });
        });

        const savedTab = localStorage.getItem('teacherActiveTab');
        if (savedTab) {
            const tabToOpen = document.querySelector(`.tab-btn[data-tab="${savedTab}"]`);
            if (tabToOpen) tabToOpen.click();
        }
    }


    // const links = document.querySelectorAll('a[href$=".html"], a[href*=".html?"], a[href*=".html#"], a[href$="_teach.html"], a[href$=".html/"]');
    const links = document.querySelectorAll('a[href*=".html"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Отменяем мгновенный переход

            const targetUrl = this.getAttribute('href');

            // Добавляем класс для анимации ухода
            document.body.classList.add('page-transition-out');

            // Ждём окончания анимации и переходим
            setTimeout(() => {
                window.location.href = targetUrl;
                setTimeout(() => {
                    document.body.classList.remove('page-transition-out');

                }, 500)
            }, 500); // Время должно совпадать с длительностью CSS-анимации
        });
    });










    
    // Применяем защиту только к определённому контейнеру
const targetContainer = document.querySelector('.tab-content'); // Замените на нужный селектор

if (targetContainer) {
    // Полный список коротких слов (с поддержкой английской c вместо русской)
    const shortWords = [
        'в', 'во', 'на', 'за', 'под', 'над', 'перед', 'через', 'у', 'о', 'об',
        'от', 'до', 'из', 'изо', 'без', 'безо', 'для', 'про', 'при', 'с', 'со',
        'c',  // ← английская c для защиты от дурака
        'к', 'ко', 'по', 'и', 'а', 'но', 'да', 'или', 'либо', 'то', 'что', 'как',
        'не', 'ни', 'бы', 'же', 'ли', 'уж', 'ведь', 'вот', 'вон', 'даже', 'только',
        'ещё', 'уже', 'все', 'всё', 'это'
    ];

    // Защита чисел (число + слово после него)
    function protectNumbers(text) {
        const numberRegex = /(\d+)\s+([А-Яа-яёЁ\w\-]+)/giu;
        return text.replace(numberRegex, `<span class="nowrap">$1 $2</span>`);
    }

    // Защита двух заглавных слов подряд (имена, фамилии, названия)
    function protectCapitalPairs(text) {
        const capitalRegex = /([А-ЯЁ][а-яё]*|[A-Z][a-z]*)\s+([А-ЯЁ][а-яё]*|[A-Z][a-z]*)/gu;
        return text.replace(capitalRegex, (match, word1, word2) => {
            if (match.includes('<span')) return match;
            return `<span class="nowrap">${word1} ${word2}</span>`;
        });
    }

    // Защита от висячего одинокого слова на последней строке
    function protectLastWord(text) {
        if (text.includes('data-last-word-protected')) return text;
        const lastWordRegex = /\s+([А-Яа-яёЁ\w]{2,})([.!?;:)]*)$/u;
        if (lastWordRegex.test(text)) {
            const replaced = text.replace(lastWordRegex, (match, word, punctuation) => {
                if (word.length <= 5) {
                    return `<span class="nowrap" data-last-word-protected="true"> ${word}${punctuation}</span>`;
                }
                return match;
            });
            if (replaced !== text) return replaced;
        }
        return text;
    }

    // Защита тире от переноса в начало строки
    function protectDashes(text) {
        const dashRegex = /([А-Яа-яёЁ\w\d]+)\s+([—–-])\s+([А-Яа-яёЁ\w\d]+)/giu;
        return text.replace(dashRegex, `<span class="nowrap">$1 $2</span> $3`);
    }

    // Защита коротких слов (предлоги, союзы и т.д.)
    function protectShortWords(text) {
        let changed = false;
        let result = text;
        for (const word of shortWords) {
            const regex = new RegExp(`(^|\\s)(${word})\\s+([А-Яа-яёЁ\\w\\-]+)`, 'giu');
            if (regex.test(result)) {
                result = result.replace(regex, `$1<span class="nowrap">$2 $3</span>`);
                changed = true;
            }
        }
        return { text: result, changed };
    }

    function processTextNode(textNode) {
        let text = textNode.textContent;
        let changed = false;

        let newText = protectNumbers(text);
        if (newText !== text) {
            text = newText;
            changed = true;
        }

        newText = protectDashes(text);
        if (newText !== text) {
            text = newText;
            changed = true;
        }

        newText = protectCapitalPairs(text);
        if (newText !== text) {
            text = newText;
            changed = true;
        }

        newText = protectLastWord(text);
        if (newText !== text) {
            text = newText;
            changed = true;
        }

        const result = protectShortWords(text);
        if (result.changed) {
            text = result.text;
            changed = true;
        }

        if (changed) {
            const span = document.createElement('span');
            span.innerHTML = text;
            textNode.parentNode.replaceChild(span, textNode);
        }
    }

    function walkAndProcess(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            if (node.textContent.trim().length > 0 &&
                node.parentNode.tagName !== 'SCRIPT' &&
                node.parentNode.tagName !== 'STYLE') {
                processTextNode(node);
            }
        }
        else if (node.nodeType === Node.ELEMENT_NODE) {
            if (!node.classList || !node.classList.contains('nowrap')) {
                node.childNodes.forEach(child => walkAndProcess(child));
            }
        }
    }

    // Запускаем обработку только внутри targetContainer
    walkAndProcess(targetContainer);
}
});
