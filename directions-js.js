// // directions-js.js

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

//     // --- Модальное окно для видео ---
//     const modal = document.getElementById('videoModal');
//     const modalVideo = document.getElementById('modalVideo');
//     const closeModal = document.querySelector('.close-modal');

//     // Открытие видео в модальном окне
//     function openVideo(videoSrc) {
//         if (modalVideo) {
//             modalVideo.src = videoSrc;
//             modalVideo.play();
//             modal.classList.add('active');
//         }
//     }

//     // Закрытие модального окна
//     function closeVideoModal() {
//         if (modalVideo) {
//             modalVideo.pause();
//             modalVideo.src = '';
//         }
//         modal.classList.remove('active');
//     }

//     // Навешиваем обработчики на видео-карточки
//     const videoCards = document.querySelectorAll('.video-card');
//     videoCards.forEach(card => {
//         card.addEventListener('click', () => {
//             const videoSrc = card.getAttribute('data-video-src');
//             if (videoSrc) {
//                 openVideo(videoSrc);
//             }
//         });
//     });

//     // Закрытие по клику на фон
//     if (modal) {
//         modal.addEventListener('click', (e) => {
//             if (e.target === modal) {
//                 closeVideoModal();
//             }
//         });
//     }

//     // Закрытие по кнопке
//     if (closeModal) {
//         closeModal.addEventListener('click', closeVideoModal);
//     }

//     // Закрытие по Escape
//     document.addEventListener('keydown', (e) => {
//         if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
//             closeVideoModal();
//         }
//     });
// });






// directions-js.js

// document.addEventListener('DOMContentLoaded', function () {
//     // --- Получаем параметры из URL ---
//     const urlParams = new URLSearchParams(window.location.search);
//     const fromTeacher = urlParams.get('from');
//     const teacherName = urlParams.get('teacher');

//     // --- Определяем readable название преподавателя для кнопки ---
//     const teacherTitles = {
//         'Bondareva': 'Аня Бондарева',
//         'Danilushkina': 'Вика Данилушкина',
//         'Kopytina': 'Виктория Копытина',
//         'Romanchuk': 'Лика Романчук',
//         'Vasilchuk': 'Настя Васильчук',
//         'Chernykh': 'Марина Черных',
//         'Gvozdenko': 'Алина Гвозденко',
//         'Shvetsova': 'Анастасия Швецова',
//         'Golanova': 'Юлия Голанова',
//         'Merenkova': 'Аня Меренкова'
//     };

//     const teacherTitle = teacherTitles[teacherName] || 'преподавателю';

//     // --- Строим навигацию ---
//     const backBar = document.querySelector('.back-bar');

//     if (backBar) {
//         // Если переход с преподавателя — добавляем две кнопки
//         if (fromTeacher === 'teacher' && teacherName) {
//             // Очищаем back-bar
//             backBar.innerHTML = '';

//             // Создаём контейнер для кнопок
//             const navButtons = document.createElement('div');
//             navButtons.className = 'nav-buttons';

//             // Кнопка "назад" (на главную)
//             const backBtn = document.createElement('button');
//             backBtn.className = 'nav-button nav-button-back';
//             backBtn.innerHTML = '<span>назад</span>';
//             backBtn.setAttribute('href', 'index.html#directions');
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

//             // Кнопка "к преподавателю"
//             const forwardBtn = document.createElement('button');
//             forwardBtn.className = 'nav-button nav-button-forward';
//             forwardBtn.innerHTML = `<span>к ${teacherTitle}</span>`;
//             forwardBtn.setAttribute('href', `${teacherName}_teach.html`);
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
//         // Если переход прямой — оставляем одну кнопку (уже есть в HTML)
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

//     // --- Модальное окно для видео (без изменений) ---
//     const modal = document.getElementById('videoModal');
//     const modalVideo = document.getElementById('modalVideo');
//     const closeModal = document.querySelector('.close-modal');

//     function openVideo(videoSrc) {
//         if (modalVideo) {
//             modalVideo.src = videoSrc;
//             modalVideo.play();
//             modal.classList.add('active');
//         }
//     }

//     function closeVideoModal() {
//         if (modalVideo) {
//             modalVideo.pause();
//             modalVideo.src = '';
//         }
//         modal.classList.remove('active');
//     }

//     const videoCards = document.querySelectorAll('.video-card');
//     videoCards.forEach(card => {
//         card.addEventListener('click', () => {
//             const videoSrc = card.getAttribute('data-video-src');
//             if (videoSrc) {
//                 openVideo(videoSrc);
//             }
//         });
//     });

//     if (modal) {
//         modal.addEventListener('click', (e) => {
//             if (e.target === modal) {
//                 closeVideoModal();
//             }
//         });
//     }

//     if (closeModal) {
//         closeModal.addEventListener('click', closeVideoModal);
//     }

//     document.addEventListener('keydown', (e) => {
//         if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
//             closeVideoModal();
//         }
//     });
// });






// directions-js.js

document.addEventListener('DOMContentLoaded', function () {
    // --- Получаем параметры из URL ---
    const urlParams = new URLSearchParams(window.location.search);
    const fromTeacher = urlParams.get('from');
    const teacherName = urlParams.get('teacher');

    // --- Определяем readable название преподавателя для кнопки ---
    const teacherTitles = {
        'Bondareva': 'Аня Бондарева',
        'Danilushkina': 'Вика Данилушкина',
        'Kopytina': 'Виктория Копытина',
        'Romanchuk': 'Лика Романчук',
        'Vasilchuk': 'Настя Васильчук',
        'Chernykh': 'Марина Черных',
        'Gvozdenko': 'Алина Гвозденко',
        'Shvetsova': 'Анастасия Швецова',
        'Golanova': 'Юлия Голанова',
        'Merenkova': 'Аня Меренкова'
    };

    const teacherTitle = teacherTitles[teacherName] || 'преподавателю';

    // --- Строим навигацию ---
    const backBar = document.querySelector('.back-bar');

    if (backBar) {
        // Если переход с преподавателя — добавляем две кнопки (слева и справа)
        if (fromTeacher === 'teacher' && teacherName) {
            // Очищаем back-bar
            backBar.innerHTML = '';

            // Левая кнопка "назад"
            const backBtn = document.createElement('button');
            backBtn.className = 'nav-button nav-button-back';
            // backBtn.innerHTML = '<span>назад</span>';
            backBtn.innerHTML = '<span>на главную</span>';
            backBtn.setAttribute('href', 'index.html#directions');
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

            // Правая кнопка "к преподавателю"
            const forwardBtn = document.createElement('button');
            forwardBtn.className = 'nav-button nav-button-forward';
            forwardBtn.innerHTML = `<span>к ${teacherTitle}</span>`;
            forwardBtn.setAttribute('href', `${teacherName}_teach.html`);
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
                existingButton.classList.add('nav-button', 'nav-button-back');
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

                // Добавляем пустой div справа для баланса
                const spacer = document.createElement('div');
                spacer.style.width = 'auto';
                backBar.appendChild(spacer);
            }
        }
    }

    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const closeBtn = document.querySelector('.close-modal');
    const videoCards = document.querySelectorAll('.video-card');

    // Открытие модалки при клике
    videoCards.forEach(card => {
        card.addEventListener('click', function () {
            const videoSrc = this.querySelector('.video-preview video').getAttribute('data-src');
            modalVideo.src = videoSrc;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            modalVideo.play();
        });
    });

    // Закрытие по клику на фон
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modalVideo.pause();
            modalVideo.src = '';
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Закрытие по кнопке
    closeBtn.addEventListener('click', function () {
        modalVideo.pause();
        modalVideo.src = '';
        modal.classList.remove('active');
        document.body.style.overflow = '';

    });


    // Находим все ссылки
    // const links = document.querySelectorAll('a[href$=".html"]');
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
const targetContainer = document.querySelector('.text-block'); // Замените на нужный селектор

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