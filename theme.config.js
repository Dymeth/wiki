import EditLink from './components/EditLink';
export default {
  logo: (
    <span className="ft-logo">
      <span className="ft-logo__main">FUNTIME</span>
      <span className="ft-logo__sub">WIKI</span>
    </span>
  ),

  navbar: {
    extraContent: (
      <div className="ft-toplinks">
        <a href="/" className="ft-toplinks__item">Главная</a>
        <a
          href="https://funtime.su"
          className="ft-toplinks__item"
          target="_blank"
          rel="noreferrer"
        >
          Основной сайт
        </a>
      </div>
    )
  },

  head: (
    <>
      <meta name="theme-color" content="#070607" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Funtime Wiki — правила, гайды и инструкции по серверу." />
      <meta property="og:title" content="Funtime Wiki" />
      <meta property="og:description" content="Правила, гайды и инструкции по серверу Funtime." />
    </>
  ),

  docsRepositoryBase: "https://github.com/FunTimeMC/wiki/blob/main",
  editLink: { text: "Предложить правку" },

  gitTimestamp: ({ timestamp }) => {
    return (
      <span className="ft-gitstamp">
        Обновлено: {timestamp.toLocaleDateString("ru-RU")}
      </span>
    );
  },

  toc: {
    title: ""
  },

  search: {
    placeholder: "Поиск..."
  },

  footer: {
    text: "Сервер © 2025 FunTime.su никак не относится к Mojang, AB."
  }
};
