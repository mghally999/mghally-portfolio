const background = [
    {
        eduCards: [
            {
                "id": 0,
                "title": "AUC - The American University In Cairo",
                "degree": "Introduction To Programming Using C++",
                "detail": "An in-depth degree course at the American University In Cairo focusing on programming fundamentals and problem-solving using C++ in computer systems.",
                "year": "2018 - 2019"
            },
            {
                "id": 1,
                "title": "Master the Coding Interview: Data Structures + Algorithms",
                "degree": "Data Structures & Algorithms",
                "detail": "An immersive Udemy course concentrating on data structures, algorithms, and mastering Big O Notation to excel in coding interviews.",
                "year": "2023"
            },
            {
                "id": 2,
                "title": "JavaScript – The Complete Guide (Beginner + Advanced)",
                "degree": "JavaScript",
                "detail": "A meticulously crafted online course that guides learners from novice to advanced levels in JavaScript programming. This course offers a thorough exploration of JavaScript fundamentals, covering basic syntax as well as advanced topics like closures and asynchronous programming. Participants engage in hands-on projects, quizzes, and real-world examples, gaining practical experience to reinforce their understanding of JavaScript concepts. Throughout the course, learners encounter theoretical discussions, practical challenges, and expert insights, providing a well-rounded learning experience. Whether you're a beginner venturing into programming or an experienced developer aiming to refine your skills, this course provides a structured learning path to proficiency in JavaScript development.",
                "year": "2023"
            },
            {
                "id": 3,
                "title": "Complete React Developer",
                "degree": "React Development",
                "detail": "A comprehensive Udemy course designed to transform participants into proficient React developers, offering in-depth coverage of React concepts including Redux, Hooks, and GraphQL. This course provides hands-on learning experiences, practical projects, and real-world examples to solidify understanding and enhance skills. Participants also gain insights into best practices, industry trends, and advanced techniques from seasoned instructors, making this course an invaluable resource for aspiring React developers.",
                "year": "2023"
            },
            {
                "id": 4,
                "title": "CSS – The Complete Guide",
                "degree": "CSS",
                "detail": "An encompassing Udemy course covering CSS fundamentals alongside advanced topics like Flexbox, Grid, and Saas. This course goes beyond surface-level instruction, delving into detailed comparisons of CSS techniques and providing challenging code exercises to reinforce learning. Learners also benefit from expert insights and practical tips from the instructor, making this course a valuable resource for mastering CSS.",
                "year": "2022"
            },
            {
                "id": 5,
                "title": "Advanced CSS and Saas: Flexbox, Grid, Animations and More!",
                "degree": "CSS",
                "detail": "An in-depth Udemy course exploring advanced CSS techniques, such as Flexbox, Grid, animations, and more. This course offers detailed insights into the inner workings of CSS, covering topics like rule application, specificity, inheritance, and the cascade. Through challenging exercises and projects, participants gain practical skills while understanding the complexities of modern web design. This course highlights the dedication and hard work needed to master advanced CSS, empowering learners to create stunning and responsive web layouts confidently.",
                "year": "2024"
            },
            {
                "id": 6,
                "title": "Build Responsive Real-World Websites with HTML and CSS",
                "degree": "HTML & CSS",
                "detail": "An intensive Udemy course focusing on building responsive websites using HTML and CSS. Notably, the course incorporates a user-friendly framework for selecting website personalities, colors, and provides various tools and articles for easy inspiration and design implementation.",
                "year": "2023"
            },
            {
                "id": 7,
                "title": "Git and Github – The Practical Guide",
                "degree": "Version Control",
                "detail": "A hands-on Udemy course offering practical guidance in learning Git and GitHub, essential tools for version control in software development projects. Through interactive tutorials and real-world examples, participants gain proficiency in using Git for managing source code versions and GitHub for collaboration and project management. This course equips learners with the necessary skills to streamline their workflow, resolve conflicts, and contribute effectively to collaborative coding projects.",
                "year": "2024"
            }
        ]

    },
    {
        expCards: [
            {
                id: 1,
                title: 'Artway Decor',
                role: 'Senior Web Developer | Digital Marketer',
                url: 'https://artwaydecor.com/',
                desc: "Crafted, maintained, and launched production code for client websites within Artway Decor's web development division, serving illustrious brands such as KFC, McDonald's, Hardeez, Roberto Cavalli, Pizza Hut, and others. This involvement underscored the company's commitment to delivering top-tier digital experiences across diverse industry sectors.",
                year: 'March 2024 - May 2024',
                location: 'Dubai, United Arab Emirates'
            },
            {
                id: 2,
                title: '3s - Secured Smart Systems',
                role: 'Senior Frontend Developer',
                url: 'https://www.3segypt.com/',
                desc: "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Cairo Opera House, Confederation of African Football, Qatar National Bank, Public Prosecution, Egyptair, Fawry, WE Telecom and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
                year: 'Oct 2021 - Feb 2024',
                location: 'Cairo, Egypt'
            },
            {
                id: 3,
                title: 'Gratsia Tours',
                role: 'Frontend Developer',
                url: 'https://www.3segypt.com/',
                desc: "Build and maintain critical components used to construct Gratsia Tour's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
                year: 'Oct 2018 - Aug 2021',
                location: 'Cairo, Egypt'
            }
        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
