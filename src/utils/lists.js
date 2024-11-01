export const listMenu = ["home", "about", "projects", "contact"]

export const services = [
    {
        image: "https://img.icons8.com/sci-fi/48/web-design.png",
        name: "Website development",
        description: "Turning ideas into effortless, engaging websites, crafted with care and designed for impact."
    },
    {
        image: "https://img.icons8.com/sci-fi/48/internet.png",
        name: "Web app development",
        description: "Crafting dynamic web applications with seamless API integration using Nestjs, Node, Next.js, React, Tailwind, and PostgreSQL. I focus on creating fast, reliable, and visually striking apps."
    },
]

export const programmingLanguages = [
    {
        name: "Javascript",
        imageSrc: "https://img.icons8.com/fluency/32/javascript.png",
        alt: "Javascript"
    },
    {
        name: "Nestjs",
        imageSrc: "https://img.icons8.com/color/32/nestjs.png",
        alt: "Nestjs"
    },
    {
        name: "Nodejs",
        imageSrc: "https://img.icons8.com/color/32/nodejs.png",
        alt: "Nodejs"
    },
    {
        name: "React",
        imageSrc: "https://img.icons8.com/officel/32/react.png",
        alt: "React"
    },
    {
        name: "TailwindCSS",
        imageSrc: "https://img.icons8.com/color/32/tailwindcss.png",
        alt: "TailwindCSS"
    },
    {
        name: "Next.js",
        imageSrc: "https://img.icons8.com/color/50/nextjs.png",
        alt: "Next.js"
    },
    {
        name: "PostgreSQL",
        imageSrc: "https://img.icons8.com/color/32/postgreesql.png",
        alt: "PostgreSQL"
    },
    {
        name: "Python",
        imageSrc: "https://img.icons8.com/fluency/32/python.png",
        alt: "Python"
    },
    {
        name: "MongoDB",
        imageSrc: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png",
        alt: "MongoDB"
    }
]

export const projects = [
    {
        title: "XpressScribe",
        imageUrl: "/Xpressscribe/soplist.png",
    },
    {
        title: "SchoLAR",
        imageUrl: "/scholar/admindash.png",
    },
    {
        title: "GAMS Portal",
        imageUrl: "/GAMS/dashboard.png",
    },
    {
        title: "Oxte Website",
        imageUrl: "/oxte/landing.png",
    },
]

export const projectsList = [
    {
        title: "XpressScribe",
        description:
            "A web app where users can generate statement of purpose, letter of intent after filling a form. This tool allows users to create customized documents tailored to their needs using OpenAi.",
        slides: [
            "/Xpressscribe/login.png",
            "/Xpressscribe/dashboard.png",
            "/Xpressscribe/soplist.png",
            "/Xpressscribe/demoinfo.png",
            "/Xpressscribe/intro.png",
            "/Xpressscribe/acadfunding.png",
            "/Xpressscribe/hometies.png",
            "/Xpressscribe/travelexperience.png",
            "/Xpressscribe/review.png",
            "/Xpressscribe/subscribe.png",
            "/Xpressscribe/history.png",
        ],
        stack: [
            "Nestjs", "Reactjs", "PostgreSQl", "Stripe", "OpenAI"
        ],
        link: "https://github.com/hamilak"
    },
    {
        title: "SchoLAR",
        description: "A web application that streamlines the scholarship process for organizations and users. With four user roles—Admin, Assessor, Program Officer, and Finance Officer—each has specific permissions for efficient management. Users can easily browse available scholarships, submit applications, and monitor their status through a user-friendly dashboard. Admins can add scholarships and communicate directly with applicants. The app provides insightful reports and analytics, ensuring transparency and effective management, ultimately making educational opportunities more accessible.",
        slides: [
            "/scholar/signup.png",
            "/scholar/profiles.png",
            "/scholar/dashboard.png",
            "/scholar/scholarships.png",
            "/scholar/allscholarships.png",
            "/scholar/admindash.png",
            "/scholar/applicants.png",
            "/scholar/available.png",
            "/scholar/userapplication.png",
            "/scholar/users.png",
        ],
        stack: [
            "Nestjs", "Reactjs", "PostgreSQl", "Turborepo"
        ],
        link: "https://github.com/hamilak"
    },
    // {
    //     title: "Expense app",
    //     description: "A web application that streamlines the scholarship process for organizations and users. With four user roles—Admin, Assessor, Program Officer, and Finance Officer—each has specific permissions for efficient management. Users can easily browse available scholarships, submit applications, and monitor their status through a user-friendly dashboard. Admins can add scholarships and communicate directly with applicants. The app provides insightful reports and analytics, ensuring transparency and effective management, ultimately making educational opportunities more accessible.",
    //     slides: [
    //         "/scholar/signup.png",
    //         "/scholar/profiles.png",
    //         "/scholar/dashboard.png",
    //         "/scholar/scholarships.png",
    //         "/scholar/allscholarships.png",
    //         "/scholar/admindash.png",
    //         "/scholar/applicants.png",
    //         "/scholar/available.png",
    //         "/scholar/userapplication.png",
    //         "/scholar/users.png",
    //     ],
    //     stack: [
    //         "Nestjs", "Nextjs", "PostgreSQl", "Turborepo"
    //     ]
    // },
    {
        title: "GAMS Portal",
        description: "A student portal for scholarship applications, enabling users to answer eligibility criteria set by administrators and track the status of their applications efficiently in a user-friendly interface.",
        slides: [
            "/GAMS/dashboard.png",
            "/GAMS/questions.png",
            "/GAMS/application.png",
            "/GAMS/profile.png",
        ],
        stack: [
            "Nestjs", "Reactjs", "PostgreSQl"
        ],
        link: "https://github.com/hamilak"
    },
    {
        title: "Oxte Website",
        // description: "A simple website",
        slides: [
            "/oxte/landing.png",
            "/oxte/section.png",
        ],
        stack: [
            "Reactjs", "TailwindCSS", "rsuite"
        ],
        link: "https://github.com/hamilak"
    },
]

export const contactList = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/kalimah-arigbabu-profile",
        src: "https://img.icons8.com/fluency/50/linkedin.png",
        alt: "LinkedIn"
    },
    {
        name: "Github",
        href: "https://github.com/hamilak",
        src: "https://img.icons8.com/pulsar-color/48/github.png",
        alt: "Github"
    },
    {
        name: "Gmail",
        href: "mailto:arigbabu.kalimah@gmail.com",
        src: "https://img.icons8.com/color/48/gmail-new.png",
        alt: "Gmail"
    },
    // {
    //     name: "Twitter",
    //     href: "",
    //     src: "https://img.icons8.com/pulsar-color/48/twitterx.png",
    //     alt: "Twitter"
    // },
    {
        name: "Upwork",
        href: "https://www.upwork.com/freelancers/~01139649d1919d1b53?mp_source=share",
        src: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-upwork-a-global-freelancing-platform-where-professionals-connect-and-collaborate-remotely-logo-shadow-tal-revivo.png",
        alt: "Upwork"
    },
]