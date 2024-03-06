const expertise = [
    {
        id: 0,
        title: 'Frontend Development',
        desc: 'I\'m a skilled Frontend developer with extensive experience in building robust web applications using HTML, CSS, JavaScript, React.js, and Angular. I possess a strong understanding of client-side rendering, API integration, SPAs and responsive design. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients.',
    },
    {
        id: 2,
        title: 'Designing (UI/UX)',
        desc: 'I\'am proficient in using HTML, CSS, Scss, CSS frameworks and design software such as Figma. Through participating in projects, courses and freelance works, I have gained practical experience in UI/UX design. Designing is my passion, and it has allowed me to continue to develop my creative skills and grow in the field.',
    },
    {
        id: 3,
        title: 'Github',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
