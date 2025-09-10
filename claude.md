# claude.md — конфигурация проекта для Claude Code

**Проект:** Одностраничный сайт для сообщества «Дагестанцы в Москве».

**Цель файла:** дать разработчикам и CI/CD-инструментам чёткую конфигурацию и структуру проекта на стеке **Next.js (React) + TypeScript + Tailwind CSS** с архитектурой **FSD (Feature-Sliced Design)**.

---

## 1. Краткое описание

Одностраничник (SPA/SSR) с минималистичным дизайном и природной эстетикой (горы, орёл). Секции: Hero, О нас, Новости/Афиша, Галерея, Контакты, Подвал. Проект ориентирован на лёгкость, быстрый отклик, доступность и простоту поддержки.

---

## 2. Технологический стек

* Next.js 14+ (app/ или pages/ — в зависимости от предпочтений; предложено использовать `app/` для современных возможностей)
* React 18+
* TypeScript (строгие настройки)
* Tailwind CSS (JIT)
* FSD — организация кода по слоям: `app`, `pages`, `entities`, `features`, `shared`, `widgets`, `pages` (если используется)

---

## 3. Структура репозитория (FSD)

```
/src
  /app                    # Next.js app (routes, layout, providers)
  /pages                  # (опционально) legacy pages
  /entities               # бизнес-сущности (Event, User, Photo)
    /event
      model.ts            # типы, интерфейсы
      api.ts              # API-интеграции, dto
      ui/                 # presentational components специфичные для сущности
  /features               # конкретная функциональность (events-list, gallery-lightbox)
    /events-list
      ui/
      hooks.ts
      index.ts
  /widgets                # составные блоки из нескольких сущностей (Header, Footer)
  /shared                 # общие утилиты, types, ui-kit
    /ui                   # atoms (Button, Container, Image, Icon)
    /lib                  # helpers (formatDate, apiClient)
    /config               # design tokens, tailwind config
  /styles                 # глобальные стили (если нужны)
  /public                 # статические изображения (логотип, иконки)
  /tests                  # интеграционные сценарии

/.env.local
/next.config.js
/tailwind.config.js
/tsconfig.json
/claude.md

```

---

## 4. Компоненты и контракт (секции)

### Hero

* props: `title: string`, `subtitle?: string`, `ctaLabel: string`, `ctaHref: string`, `background: string | ImageProps` (SVG/иллюстрация гор + орел)
* доступность: semantic `<header role="banner">`, крупный H1

### About

* простой Markdown-блок + список целей

### Events / Афиша

* карточка события: `id, title, date, shortDescription, image, location, link`.
* пагинация или «подгрузка» по кнопке
* endpoint: `/api/events` (fetch при SSR/ISR)

### Gallery

* сетка изображений (masonry/simple grid)
* lightbox при клике (фича в `features/gallery-lightbox`)
* lazy-loading изображений через `next/image`

### Contacts

* форма: `name, email, message` — серверless функция `/api/contact` (validate, rate-limit)
* альтернативно — ссылки на Telegram, VK, Instagram

### Footer

* минималистичный логотип (ориентированная графика орла), копирайт, ссылки

---

## 5. API, контент и данные

* Источник данных: Markdown/MDX (если содержание редко меняется) или headless CMS (Sanity/Contentful/Strapi) для удобного редактирования мероприятий и галереи.
* Рекомендация: хранить события в CMS или в JSON-файлах в `/data/events.json` пока проект мал.
* Контактная форма через serverless-функцию с отправкой в почту (SendGrid) или Webhook в Telegram.

---

## 6. Tailwind / дизайн

* Использовать design tokens в `shared/config/tokens.ts` (spacing, colors, radii, fontSizes).
* Цветовая палитра: черный, желтый и белый — основные цвета АМД.
* Tailwind: настроить `safelist` для динамических классов.
* Включить `@tailwindcss/typography` для текстовых блоков.

Пример `tailwind.config.js`:

```js
module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        accent: '#FFD700',
        secondary: '#FFFFFF'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
```

---

## 7. Accessibility & Performance

* Семантическая разметка (`<header>`, `<main>`, `<section>`, `<footer>`).
* Контрастность текста >= WCAG AA.
* Картинки через `next/image`, lazy-loading, оптимизированные форматы (WebP/AVIF).
* Lighthouse target: Performance >= 90, Accessibility >= 90.

---

## 8. CI / Scripts

`package.json` (важные скрипты):

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint . --ext .ts,.tsx",
    "format": "prettier --write .",
    "test": "jest"
  }
}

---

## 9. Тестирование
* На данном этапе обходимся без тестирования

---

## 10. Безопасность и приватность

* Не хранить секреты в репозитории. Использовать `process.env.*`.
* Защита контактной формы от спама: rate-limit, honeypot, reCAPTCHA (опционально).

---

## 11. SEO и метаданные

* Open Graph и Twitter meta tags (для каждого важного контента, особенно событий)
* Структурированные данные для событий (`schema.org/Event` JSON-LD)

---

## 12. План первой итерации (MVP)

1. Настроить проект Next.js + TS + Tailwind + ESLint + Prettier
2. Реализовать Header (лого) и Hero
3. Статический блок About
4. Events: список из JSON + карточки
5. Gallery: grid + lightbox
6. Contacts: форма + serverless endpoint
7. Footer

---

## 13. Примеры contract/schema (TypeScript)

```ts
// src/entities/event/model.ts
export interface Event {
  id: string;
  title: string;
  date: string; // ISO
  description?: string;
  image?: string;
  location?: string;
  link?: string;
}
```

```ts
// src/shared/ui/Button.tsx
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
}
```

---

## 14. Дополнительно / Рекомендации по айдентике

* Стилевая пауза: использовать силуэт орла + схематичные горы как фон hero (SVG) — лёгкие векторные элементы для быстрого рендеринга.
* Логотип в подвале — «мягкий» (rounded corners, сдержанные цвета).

---

*Конец файла.*
