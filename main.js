function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.style.setProperty('--mainTextColor', '#fff');
        document.documentElement.style.setProperty('--secondaryTextColor', '#adb0b1');
        document.documentElement.style.setProperty('--mainLinkColor', 'rgb(30, 190,214)');
        document.documentElement.style.setProperty('--mainBorderColor', '#2b3031');
        document.documentElement.style.setProperty('--mainBgColor', '#131415');
        document.getElementById("sun").classList.add("disabled_icon")
        document.getElementById("sun").classList.remove("enabled_icon")
        document.getElementById("moon").classList.add("enabled_icon")
        document.getElementById("moon").classList.remove("disabled_icon")
    } else {
        document.documentElement.style.setProperty('--mainTextColor', '#000');
        document.documentElement.style.setProperty('--secondaryTextColor', 'rgb(51 51 51)');
        document.documentElement.style.setProperty('--mainLinkColor', '#0da2b8');
        document.documentElement.style.setProperty('--mainBorderColor', 'rgb(218, 218, 218)');
        document.documentElement.style.setProperty('--mainBgColor', 'rgb(249, 250,251)');
        document.getElementById("sun").classList.add("enabled_icon")
        document.getElementById("sun").classList.remove("disabled_icon")
        document.getElementById("moon").classList.add("disabled_icon")
        document.getElementById("moon").classList.remove("enabled_icon")
    }
}

const translations = {
    en: {
        pageTitle: "Eduardo Marquez",
        metaOgDescription: "Eduardo Marquez is a Software developer, whom started developing in 2019. He has experience with both backend and frontend developing.",
        metaDescription: "Eduardo Marquez is a Software developer, whom started developing in 2019. He has experience with both backend and frontend developing.",
        bio: "Backend Developer, DevOps at <a href='https://www.linkedin.com/company/moonshot-robots/' target='_blank'>Moonshot Robots</a>.<br>Bachelor of Computer Science, Universidade Anhembi Morumbi, Graduated in 2022.",
        linkedin: "Linkedin",
        github: "Github",
        downloadResume: "Download Resume",
        resumeLink: "./assets/EN_US_Resume_Eduardo_Marquez.pdf",
        personalInformation: "Personal Information",
        nationality: "Nationality: Brazilian and Portuguese (Dual Citizenship)",
        languages: "Languages:",
        langPortuguese: "Portuguese (native)",
        langEnglish: "English (advanced C1.1)",
        certificates: "Certificates",
        certAWS: "AWS Academy Graduate - AWS Academy Cloud Foundations",
        certSantanderBootcamp: "Santander Bootcamp 2023",
        certEnglishInsigna: "C1.1 English Insigna",
        certSantanderCoders: "Santander Coders 2024 | DevOps",
        techStack: "Tech stack",
        workHistory: "Work History",
        job1Title: "🚧 BACKEND DEVELOPER, DEVOPS  | MOONSHOT ROBOTS",
        job1Dates: "November/2024 – Present",
        job1Desc1: "Leading Backend Development for the “AnnaHealth” project.",
        job1Desc2: "Backend integration with the “AnnaHealth” Web server.",
        job2Title: "🚧 CLOUD DEVELOPER, DEVOPS  | ATODOGAS",
        job2Dates: "June/2024 – October/2024",
        job2Desc1: "Cloud Server Deployment: Deployed servers in cloud environments using AWS EC2 and Amazon RDS, ensuring high availability and scalability of applications;",
        job2Desc2: "Process Automation: Implemented CI/CD processes using Docker, automating the development and deployment lifecycle",
        job3Title: "🚧 BACKEND DEVELOPER, DEVOPS  | EMPATHY",
        job3Dates: "April/2024 – May/2024",
        job3Desc1: "Led Backend Development: Solely responsible for developing the backend of the ABCasa project, ensuring robust and efficient server-side functionality;",
        job3Desc2: "App Integration: Integrated the backend with the ABCasa app, facilitating seamless communication between the app and the server;",
        job3Desc3: "Deployment: Successfully deployed the app to both the Google Play Store and Apple App Store, ensuring a smooth user experience across different platforms.",
        job4Title: "🚧 BACKEND  DEVELOPER, DEVOPS  | EMPATHY",
        job4Dates: "August/2022 – January/2024",
        job4Desc1: "Led the development of APIs to support the integration process with partner companies, generating a total volume of 1M annual requests, and replacing a previously manual process that consumed an average of 600 annual hours",
        job4Desc2: "Delivered APIs by leveraging GCP and AWS services.",
        job5Title: "🚧 WEB DEVELOPER, SOFTWARE DEVELOPER | Support Inf.",
        job5Dates: "April/2022 - July/2022",
        job5Desc1: "Maintenance and development of Java Web programs.",
        job5Desc2: "Migration of programs from ERP systems (developed in Cobol) to Java Web.",
        job5Desc3: "Full-Stack development in JavaScript and Vue.js (Front-End), Java, SpringBoot, and Hibernate (Back-End)",
        job5Desc4: "Creation of reports using the Jasper tool.",
        job5Desc5: "Database: Postgres and Oracle.",
        job5Desc6: "Control and versioning using Git.",
        job5Desc7: "Utilization of Linux for development.",
        personalProjects: "Personal Projects",
        project1Name: "‍💻 dropcode",
        project1Dates: "July/2023 – October/2023",
        project1Desc1: "The <a href='https://dropcode.vercel.app/' target='_blank'><strong>dropcode</strong></a> platform was created for sharing code snippets between your friends and colleagues.",
        project1Desc2: "Developed the platform in Next.js 13, using the new app router. <br> Deployed the platform on <a href='https://vercel.com/' target='_blank'><strong>Vercel</strong></a>.",
        project1Desc3: "An API in NodeJS was developed to facilitate interactions with the database. Fastify was used for handling routes, Prisma for simplified database management, while Zod provided secure validation of incoming data. <br> The API was deployed on <a href='https://www.cyclic.sh/' target='_blank'><strong>Cyclic</strong></a>.",
        project1Desc4: "The database was created in PostgreSQL.<br> Stored it in <a href='https://supabase.com/' target='_blank'><strong>Supabase</strong></a>."
    },
    pt: {
        pageTitle: "Eduardo Marquez",
        metaOgDescription: "Eduardo Marquez é um desenvolvedor de software que começou a desenvolver em 2019. Possui experiência com desenvolvimento backend e frontend.",
        metaDescription: "Eduardo Marquez é um desenvolvedor de software que começou a desenvolver em 2019. Possui experiência com desenvolvimento backend e frontend.",
        bio: "Desenvolvedor Backend, DevOps na <a href='https://www.linkedin.com/company/moonshot-robots/' target='_blank'>Moonshot Robots</a>.<br>Bacharel em Ciência da Computação, Universidade Anhembi Morumbi, Graduado em 2022.",
        linkedin: "Linkedin",
        github: "Github",
        downloadResume: "Baixar Currículo",
        resumeLink: "./assets/PT_BR_Resume_Eduardo_Marquez.pdf",
        personalInformation: "Informações Pessoais",
        nationality: "Nacionalidade: Brasileira e Portuguesa (Dupla Cidadania)",
        languages: "Idiomas:",
        langPortuguese: "Português (nativo)",
        langEnglish: "Inglês (avançado C1.1)",
        certificates: "Certificados",
        certAWS: "AWS Academy Graduate - AWS Academy Cloud Foundations",
        certSantanderBootcamp: "Santander Bootcamp 2023",
        certEnglishInsigna: "Inglês C1.1 Insigna",
        certSantanderCoders: "Santander Coders 2024 | DevOps",
        techStack: "Habilidades Técnicas",
        workHistory: "Histórico Profissional",
        job1Title: "🚧 DESENVOLVEDOR BACKEND, DEVOPS  | MOONSHOT ROBOTS",
        job1Dates: "Novembro/2024 – Atual",
        job1Desc1: "Liderando o Desenvolvimento Backend para o projeto “AnnaHealth”.",
        job1Desc2: "Integração backend com o servidor Web “AnnaHealth”.",
        job2Title: "🚧 DESENVOLVEDOR CLOUD, DEVOPS  | ATODOGAS",
        job2Dates: "Junho/2024 – Outubro/2024",
        job2Desc1: "Deploy de Servidores na Cloud: Deploy de servidores em ambientes de nuvem, utilizando AWS EC2 e Amazon RDS, garantindo alta disponibilidade e escalabilidade das aplicações;",
        job2Desc2: "Automação de Processos: Implementou processos de CI/CD usando Docker, automatizando o ciclo de vida de desenvolvimento e deploy.",
        job3Title: "🚧 DESENVOLVEDOR BACKEND, DEVOPS  | EMPATHY",
        job3Dates: "Abril/2024 – Maio/2024",
        job3Desc1: "Liderou o Desenvolvimento Backend: Único responsável pelo desenvolvimento do backend do projeto ABCasa, garantindo funcionalidade robusta e eficiente do lado do servidor;",
        job3Desc2: "Integração do App: Integrou o backend com o app ABCasa, facilitando a comunicação transparente entre o app e o servidor;",
        job3Desc3: "Deployment: Realizou com sucesso o deploy do app tanto na Google Play Store quanto na Apple App Store, garantindo uma experiência de usuário fluida em diferentes plataformas.",
        job4Title: "🚧 DESENVOLVEDOR BACKEND, DEVOPS  | EMPATHY",
        job4Dates: "Agosto/2022 – Janeiro/2024",
        job4Desc1: "Liderou o desenvolvimento de APIs para apoiar o processo de integração com empresas parceiras, gerando um volume total de 1M de requisições anuais, e substituindo um processo anteriormente manual que consumia uma média de 600 horas anuais.",
        job4Desc2: "Entregou APIs utilizando serviços GCP e AWS.",
        job5Title: "🚧 DESENVOLVEDOR WEB, DESENVOLVEDOR DE SOFTWARE | Support Inf.",
        job5Dates: "Abril/2022 - Julho/2022",
        job5Desc1: "Manutenção e desenvolvimento de programas Java Web.",
        job5Desc2: "Migração de programas de sistemas ERP (desenvolvidos em Cobol) para Java Web.",
        job5Desc3: "Desenvolvimento Full-Stack em JavaScript e Vue.js (Front-End), Java, SpringBoot e Hibernate (Back-End).",
        job5Desc4: "Criação de relatórios utilizando a ferramenta Jasper.",
        job5Desc5: "Banco de dados: Postgres e Oracle.",
        job5Desc6: "Controle e versionamento utilizando Git.",
        job5Desc7: "Utilização de Linux para desenvolvimento.",
        personalProjects: "Projetos Pessoais",
        project1Name: "‍💻 dropcode",
        project1Dates: "Julho/2023 – Outubro/2023",
        project1Desc1: "A plataforma <a href='https://dropcode.vercel.app/' target='_blank'><strong>dropcode</strong></a> foi criada para compartilhar trechos de código entre seus amigos e colegas.",
        project1Desc2: "Desenvolvi a plataforma em Next.js 13, usando o novo app router. <br> Deploy da plataforma na <a href='https://vercel.com/' target='_blank'><strong>Vercel</strong></a>.",
        project1Desc3: "Uma API em NodeJS foi desenvolvida para facilitar as interações com o banco de dados. Fastify foi usado para lidar com rotas, Prisma para gerenciamento simplificado do banco de dados, enquanto Zod forneceu validação segura dos dados de entrada. <br> A API teve o deploy feito na <a href='https://www.cyclic.sh/' target='_blank'><strong>Cyclic</strong></a>.",
        project1Desc4: "O banco de dados foi criado em PostgreSQL.<br> Armazenado no <a href='https://supabase.com/' target='_blank'><strong>Supabase</strong></a>."
    }
};

let currentLanguage = 'en';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;

    if (translations[lang].pageTitle) {
        document.title = translations[lang].pageTitle;
    }

    const metaOgDesc = document.querySelector('meta[property="og:description"]');
    if (metaOgDesc && translations[lang].metaOgDescription) {
        metaOgDesc.content = translations[lang].metaOgDescription;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && translations[lang].metaDescription) {
        metaDesc.content = translations[lang].metaDescription;
    }

    document.querySelectorAll('[data-translate-key]').forEach(element => {
        const key = element.getAttribute('data-translate-key');
        if (translations[lang][key]) {
            if (element.tagName === 'A' && element.href && !element.href.startsWith(window.location.origin) && !element.href.startsWith('mailto:')) {
                // Preserve external links
            } else if (key === 'resumeLink' && element.tagName === 'A') {
                 element.href = translations[lang][key];
            }
            else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    const resumeLinkElement = document.getElementById('resumeLink');
    if (resumeLinkElement && translations[lang].resumeLink) { // Check if translations[lang].resumeLink exists
        resumeLinkElement.href = translations[lang].resumeLink;
    }
    const langToggleButton = document.getElementById('language-toggle-btn');
    if (langToggleButton) {
        langToggleButton.textContent = lang.toUpperCase();
        langToggleButton.setAttribute('aria-label', lang === 'en' ? 'Switch to Portuguese' : 'Mudar para Inglês');
    }
}

function getInitialLanguage() {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
        return savedLang;
    }
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.toLowerCase().startsWith('pt')) {
        return 'pt';
    }
    return 'en';
}

window.onload = function () {
    const toggleSwitch = document.getElementById('darkmode-toggle');
    if (toggleSwitch) {
        const darkModeSaved = localStorage.getItem('darkMode') === 'enabled';
        toggleSwitch.checked = darkModeSaved;
        switchTheme({ target: toggleSwitch });
        setTimeout(() => {
            if (document.getElementById("sun")) document.getElementById("sun").style.transition = "all 0.02s";
            if (document.getElementById("moon")) document.getElementById("moon").style.transition = "all 0.02s";
        }, 0);

        toggleSwitch.addEventListener('change', (e) => {
            switchTheme(e);
            localStorage.setItem('darkMode', e.target.checked ? 'enabled' : 'disabled');
        });
    } else {
        console.warn("Darkmode toggle not found.");
    }
    const langToggleButton = document.getElementById('language-toggle-btn');
    if (langToggleButton) {
        langToggleButton.addEventListener('click', () => {
            const newLang = currentLanguage === 'en' ? 'pt' : 'en';
            setLanguage(newLang);
        });
    }

    currentLanguage = getInitialLanguage();
    setLanguage(currentLanguage);

    console.log("Page loaded and initialized.");
};