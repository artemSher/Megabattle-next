# ITMO.MEGABATTLE

Сайт проекта ITMO.MEGABATTLE, объединяющего талант студентов в одном месте.

## Технологический стек

- Next.js
- React
- TypeScript
- CSS Modules

## Структура проекта

```
src/
├── components/       # Компоненты React
│   ├── layout/       # Компоненты макета (Header, Footer)
│   ├── sections/     # Секции сайта
│   └── ui/           # Переиспользуемые UI компоненты
├── pages/            # Страницы Next.js
├── styles/           # Глобальные стили
├── types/            # TypeScript типы
└── utils/            # Вспомогательные функции
```

## Запуск проекта

1. Установите зависимости:
```bash
npm install
```

2. Запустите сервер разработки:
```bash
npm run dev
```

3. Откройте [http://localhost:3000](http://localhost:3000) в вашем браузере.

## Сборка проекта

Для создания продакшн-версии приложения:

```bash
npm run build
```

После сборки вы можете запустить приложение с помощью:

```bash
npm start
```

## Структура компонентов

- `Layout` - основная структура сайта
- `Header` - навигация
- `Footer` - подвал сайта
- `HeroSection` - главная секция с видео
- `AboutSection` - секция о проекте
- `ScheduleSection` - секция с расписанием мероприятий
- `StoriesSection` - истории участников
- `TeamSection` - секция команды с фильтрацией
- `ContactsSection` - контакты
