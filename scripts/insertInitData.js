require('dotenv').config();

// const { addJobApplicant } = require("./db/methods/jobApplicant");

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types

const { MONGO_URI } = require('./config/index');

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log(`MongoDB is connected`))
  .catch(error => console.log(`Mongodb connection error ${error}`));
  
// This will be some mock data

const Users = [
  {
    "profileUrl": "",
    "fullName": "Bill Gates",
    "description": "I am an artist",
    "userName": "bill_gate",
    "email": "bill@gmail.com",
    "university": "5cc8c57b0cad06bbee98a1df",
    "gender": "male",
    "password": "1234abc",
    "language": "eng",
    "country": "USA",
    "city": "Odessa",
    "skills": [],
    "recommendations": [],
    "contacts": [],
    "socialNetworks": [],
    "savedJobs": [],
    "appliedJobs": [],
  },
  {
    "profileUrl": "",
    "fullName": "Alina Gludenlo",
    "description": "I am a dancer and artist",
    "userName": "alina_g",
    "email": "alina@gmail.com",
    "university": "5cc8c57b0cad06bbee98a1df",
    "gender": "female",
    "password": "bolaabc",
    "language": "eng",
    "country": "London",
    "city": "Odessa",
    "skills": [],
    "recommendations": [],
    "contacts": [],
    "socialNetworks": [],
    "savedJobs": [],
    "appliedJobs": [],
  }
];

const Universities = [
  {
    "name": "Odessa State Medical University",
    "country": "Ukraine",
    "students": []
  },
  {
    "name": "Odessa National I I Mechnikov University",
    "country": "Ukraine",
    "students": []
  },
  {
    "name": "Odessa State Academy of Civil Engineering and Architecture",
    "country": "Ukraine",
    "students": []
  },
  {
    "name": "Odessa State Maritime Academy",
    "country": "Ukraine",
    "students": []
  }
];

const Companies = [
  {
    name: "SunnyWay",
    location: "Ukraine",
    description: "Услуги перевода, написания текстов, он-лайн поддержка.",
    website: "",
    industry: "Public and business services",
    phone: "+380957768218"
  },{
    name: "7makeup",
    location: "Ukraine",
    description: "Бизнес-школа «Сообщество успешных мастеров индустрии красоты»",
    website: "vk.com/7makeup",
    industry: "Education and science",
    phone: ""
  },{
    name: "WaySeB",
    location: "Ukraine",
    description: "Консультационный контакт центр",
    website: "",
    industry: "Telecommunications and networking",
    phone: "0676275058"
  },{
    name: "BodyArt",
    location: "",
    description: "Компания высокого уровня, занимается тематикой диетологии. Продаем по странам СНГ пищевые добавки + программы по снижению веса .\n\nТелефонные продажи. По горячей базе клиентов",
    website: "http://bodyartisrael.com/",
    industry: "Public and business services",
    phone: ""
  },{
    name: "Marrytime",
    location: "Ukraine",
    description: "Наша компания занимается предоставлением услуг по продвижению и технической поддержке успешных англаязычных сайтов, которые ищут возможность расширения своей целевой аудитрии на территории Украины и других стран СНГ.",
    website: "http://finance.agency777.com/",
    industry: "Telecommunications and networking",
    phone: "0633421926"
  },{
    name: "Nexteum",
    location: "Ukraine",
    description: "Nexteum — компания с 14-летним опытом разработки программных продуктов для западного рынка. Мы создаем софт и сети online-магазинов, лидирующих в области автотюнинга, мотоспорта, активного отдыха, экстремального и водного спорта, охоты и рыбалки.Ориентация на современные технологии, грамотный менеджмент и динамичный рост вывели компанию Nexteum в TOP 30 IT-компаний Украины.",
    website: "http://nexteum.com/",
    industry: "IT",
    phone: "0503945964"
  },{
    name: "Оссистем",
    location: "Ukraine",
    description: "Разработка, внедрение и сопровождение компьютерных информационных бизнес-систем.",
    website: "http://os-system.com/",
    industry: "IT",
    phone: "+380504005993"
  },
];

const ForumQuestions = [
  {
    "title": "Where is the closest restauarant to Polytech?",
    "question": "I am looking for the closest restaurant in the university, I need to have my launch but I dont know where to have it.",
    "askedBy": "5ce6d1b05eebc116c2cb8307",
    "answers": [],
    "applause": 0,
    "tags": [""]
  },{
    "title": "Who knows mathematics very well?",
    "question": "",
    "askedBy": "5cfacfd6a0055d72af53f294",
    "answers": [],
    "applause": 0,
    "tags": [""]
  },
];

const ForumAnswers = [
  {
    "forumQuestionId": "5cfb5b174757e8fa50689827",
    "answeredBy": "5cfacfd6a0055d72af53f294",
    "answer": "Here on this website you can find jobs by just going to the job section and then looking for a job that best suits your skill and interest.",
    "likes": 0
  },
  {
    "forumQuestionId": "5cfb5b204757e8fa5068984f",
    "answeredBy": "5cc8cae9c3face5d9d4e5ceb",
    "answer": "The most difficult subject in physics and higher mathematics.",
    "likes": 20
  },
];

const JobCategory = [
  {
    name: "IT, computers & Internet"
  },{
    name: "Hotels, restaurants & tourism"
  },{
    name: "Logistics, warehouse & international commerce"
  },{
    name: "Retail"
  },{
    name: "Telecommunications"
  },{
    name: "Sales & procurement"
  },{
    name: "Service sector"
  },{
    name: "Secretarial, clerical & administrative assistants"
  }
];

const Recruiters = [
  {
    fullName: "Надежда",
    companyId: "5cfb6779987f820da1779e0b",
    jobsPosted: [], // Ids of jobs model
    telegramChatId: 0
  },{
    fullName: "Мартыненко Дмитрий",
    companyId: "5cfb6779987f820da1779e0d",
    jobsPosted: [], // Ids of jobs model
    telegramChatId: 0
  },{
    fullName: "Makeup",
    companyId: "5cfb6779987f820da1779e0c",
    jobsPosted: [], // Ids of jobs model
    telegramChatId: 0
  },{
    fullName: "Александр",
    companyId: "5cfb6779987f820da1779e0f",
    jobsPosted: [], // Ids of jobs model
    telegramChatId: 0
  },{
    fullName: "Ксения",
    companyId: "5cfb6779987f820da1779e10",
    jobsPosted: [], // Ids of jobs model
    telegramChatId: 0
  },{
    fullName: "Мария Цуприк",
    companyId: "5cfb6779987f820da1779e11",
    jobsPosted: [], // Ids of jobs model
    telegramChatId: 0
  }
]

const Jobs = [
  {
    title: "Project manager в Черноморск ",
    city: "Ильичевск",
    companyId: ObjectId("5cfb6779987f820da1779e11"),
    recruiterId: ObjectId("5cfb68c7dbb3ae0fc22f179e"),
    salary: "800 to 1500",
    description: "коммуникация с заказчиками на всех этапах проекта (от инициации до сдачи проекта клиенту) pre-sales:общение с потенциальными клиентами, сбор требований, проведение встреч по оценке проекта, оформление документа с оценкой, проведение риск-анализа ведение IT-проектов в Redmine/Jira/Trello, несение ответственности за качественное и своевременное их исполнение управление рисками в проектах распределение ресурсов, формирование команд, управление проектным коллективом, проведение Scrum-митингов",
    requirements: "опыт работы PM от 6 месяцев высокий уровень коммуникативных и лидерских навыков cтрессоустойчивость, способность работать со сложными ситуациями / клиентами, навыки работы с возражениями хорошие теоретические знания Agile-методологий управления проектами: Scrum/Kanban базовые знания о фреймворках/языках программирования и их применении владение Software Engineering Process базовые навыки работы с баг-трэкинговыми системами (Jira, Trello, Redmine) английский язык на уровне Upper-Intermediate",
    applicants: [],
    category: ObjectId("5cfb6007a30a657a6dde7341"),
  },
  {
    title: "Full-Stack Python Engineer",
    city: "Ильичевск",
    companyId: ObjectId("5cfb6779987f820da1779e11"),
    recruiterId: ObjectId("5cfb68c7dbb3ae0fc22f179e"),
    salary: "800 to 1500",
    description: "Конкурентную заработную плату. Официальное оформление. Курсы английского языка 2 раза в неделю. Компенсация проезда для иногородних. Комната отдыха, корпоративы, тимбилдинг. Бонусы после года работы в нашей компании. Дружный коллектив небезразличных людей, которые горят своим делом. Чай / кофе / печенье / фрукты. Испытательный период 2 месяца",
    requirements: "Не менее 3-х лет коммерческого опыта  как Full-Stack разработчик.   Экспертные знания  Python ( Django/Flask)  Опыт работы с SQLAlchemy, PostgreSQL Умение проектировать API, работать с OpenAPI / Swagger Навыки администрирования серверов, в частности - работа с Docker Опыт работы с облачной архитектурой- AWS Опыт работы с CI tools (Jenkins) Английский язык - intermediate и выше",
    applicants: [],
    category: ObjectId("5cfb6007a30a657a6dde7341"),
  },
  {
    title: "Java Developer",
    city: "Ильичевск",
    companyId: ObjectId("5cfb6779987f820da1779e11"),
    recruiterId: ObjectId("5cfb68c7dbb3ae0fc22f179e"),
    salary: "800 to 1500",
    description: "Разработка новых, оптимизация и поддержка существующих web проектов с использованием Scrum методологии. Участие в планировании и оценке проектов. Техническое лидерство и упреждающее (проактивное) поведение в команде",
    requirements: "Коммерческий опыт разработки на Java от 2 лет. Знание и опыт работы с microservices, Docker,  kubernetes. Опыт работы с использованием Tomcat, Maven, Git. Опыт работы с базами данных Oracle/SQL/MySQL/MongoDB. Самостоятельность и умение решать сложные задачи. Английский язык - Intermediate и выше. Ответственность и мотивация на работу в команде",
    applicants: [],
    category: ObjectId("5cfb6007a30a657a6dde7341"),
  },
  {
    title: "Copywriter",
    city: "odessa",
    companyId: ObjectId("5cfb6779987f820da1779e10"),
    recruiterId: ObjectId("5cfb68c7dbb3ae0fc22f179d"),
    salary: "800 to 1500",
    description: "Доход: $400-$1200; Оплата по контракту $400−$800 в зависимости от уровня навыков; Оплачиваемые овертаймы и бонусы до 50% ($200-$400) от базовой ставки; Контракт с американской компанией; Участие в highload проекте; Стать частью команды работающей над крупнейшим интернет магазином по продаже товаров для автоспорта и стайлинга машин, входящим в топ-5 лучших магазинов на рынке США; Опыт работы в e-commerce проекте; Благоприятные условия для стимула ваших идей по оптимизации процессов.",
    requirements: "График работы в офисе с 9.30 до 18.00; English level — Advanced/Fluent.",
    applicants: [],
    category: ObjectId("5cfb6007a30a657a6dde7347"),
  },
];

const Skills = [
  {
    name: "Art"
  },{
    name: "Acting"
  },{
    name: "Dedication"
  },{
    name: "Designing"
  },{
    name: "Fitness"
  },{
    name: "Languages"
  },{
    name: "Sewing"
  },{
    name: "Logical thinking"
  },{
    name: "Loyalty Organising"
  },{
    name: "Managing Mechanical"
  },{
    name: "Baking"
  },{
    name: "Carpentry"
  },{
    name: "Self-confidence"
  },{
    name: "Music"
  },{
    name: "Sport"
  },{
    name: "Teaching"
  },{
    name: "Team worker"
  },{
    name: "Comedy"
  },{
    name: "Communication"
  },{
    name: "Computer literacy "
  },{
    name: "Cooking"
  },{
    name: "Creativity"
  },{
    name: "Guitar playing"
  },{
    name: "Gardening"
  },{
    name: "Instructing"
  },{
    name: "Photography"
  },{
    name: "Writing"
  },{
    name: "Dancing"
  },{
    name: "Math"
  },{
    name: "Public Speaking"
  },{
    name: "Accounting"
  },{
    name: "Research"
  },{
    name: "Graphics"
  },{
    name: "Video Creation"
  },{
    name: "Money Management"
  },{
    name: "SEO"
  },{
    name: "Magic"
  },{
    name: "Singing"
  },
]


const JobApplicant = [
  {
    userId: ObjectId("5cc8c5cc1d22be54b26ab354"),
    jobId: ObjectId("5cfb6eb9f5f914176525476f"),
    resumeUrl: "",
    message: "I will like to apply for this job, I think I am a good fit for it."
  },{
    userId: ObjectId("5cfb69ee8b130911478fae1c"),
    jobId: ObjectId("5cfb6eb9f5f9141765254771"),
    resumeUrl: "",
    message: "I will like to apply for this job, I think I am a good fit for it."
  },{
    userId: ObjectId("5cfb69ee8b130911478fae1c"),
    jobId: ObjectId("5cfb6eb9f5f9141765254770"),
    resumeUrl: "",
    message: "I will like to apply for this job, I think I am a good fit for it."
  },{
    userId: ObjectId("5cfb69c9bfbf6810eb7408c0"),
    jobId: ObjectId("5cfb6eb9f5f9141765254771"),
    resumeUrl: "",
    message: "I will like to apply for this job, I think I am a good fit for it."
  },{
    userId: ObjectId("5cc8c5cc1d22be54b26ab354"),
    jobId: ObjectId("5cfb6eb9f5f9141765254770"),
    resumeUrl: "",
    message: "I will like to apply for this job, I think I am a good fit for it."
  },{
    userId: ObjectId("5cfb69c9bfbf6810eb7408c0"),
    jobId: ObjectId("5cfb6eb9f5f9141765254770"),
    resumeUrl: "",
    message: "I will like to apply for this job, I think I am a good fit for it."
  },{
    userId: ObjectId("5cfb69ee8b130911478fae1c"),
    jobId:  ObjectId("5cfb6eb9f5f9141765254770"),
    resumeUrl: "",
    message: "I will like to apply for this job, I think I am a good fit for it."
  },{
    userId: ObjectId("5cfb69ee8b130911478fae1c"),
    jobId: ObjectId("5cfb6eb9f5f914176525476f"),
    resumeUrl: "",
    message: "I will like to apply for this job, I think I am a good fit for it."
  }
];

// addJobApplicant(JobApplicant)
//   .then(res => console.log(res))
//   .catch(err => console.error(err))

module.exports = {
  Universities,
  Users,
  JobApplicant,
  Companies,
  Skills,
  ForumQuestions,
  ForumAnswers,
  JobCategory,
  Recruiters,
  Jobs
};