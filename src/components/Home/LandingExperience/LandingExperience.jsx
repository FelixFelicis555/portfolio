import React from 'react'
import "./LandingExperience.scss"

const ExperienceData = [
    {
        title: "Internship",
        icon: "assets/icons/experience/medal.svg",
        exp: [
            {
                title: "Summer Intern",
                org: "ServiceNow",
                orgLink: "https://www.servicenow.com/",
                timeline: "May 2021 - June 2021"
            },
            {
                title: "Web & Data Science Intern",
                org: "HaqDarshak,Pune",
                orgLink: "https://haqdarshak.com/",
                timeline: "Jul 2020 - Sep 2020"
            },
            {
                title:"Data Science Intern",
                org:"Intuit,Bangalore",
                orgLink:"https://www.intuit.com/in/company/",
                timeline:"May 2020- Jul 2020"

            }
        ]
    },
        {
        title: "Experience",
        icon: "assets/icons/experience/layers.svg",
        exp: [
             {
                title: "Software Engineer",
                org: "Uber, Bangalore",
                orgLink: "https://www.uber.com/",
                timeline: "Aug 2022 - Upcoming"
            },
            {
                title: "Software Engineer - Frontend",
                org: "INDmoney, Gurugram",
                orgLink: "http://indmoney.com/",
                timeline: "March 2019 - Jul 2020"
            },
            {
                title: "Software Engineer",
                org: "Ideas Revenue Solution",
                orgLink: "https://ideas.com/",
                timeline: "Jan 2019 - March 2019"
            }
        ]
    },
    {
        title: "Education",
        icon: "assets/icons/experience/mortarboards.svg",
        exp: [
            {
                title: "Bachelor of Technology - CSE",
                org: "RVR&JCE,Guntur",
                orgLink: "https://rvrjcce.ac.in/",
                timeline: "2018 - 2022"
            },
        ]
    }
]

const LandingExperience = () => {
    return (
        <div className="min-vh-50">
            <p className="experience-heading">Education and Experience</p>

            <div className="experience-container">
                {
                    ExperienceData.map((item) =>
                        <div className="experience-card" key={item?.title}>
                            <img loading="lazy" src={`${process.env.PUBLIC_URL}/${item.icon}`} alt=""></img>
                            <p className="card-title">{item.title}</p>

                            {
                                Array.isArray(item?.exp) && item?.exp.map((ex) =>
                                    <div key={ex.org}>
                                        <p className="ex-title">{ex.title}</p>
                                        <a className="ex-org" href={ex.orgLink} target="_blank" rel="noopener noreferrer">
                                            <p>{ex.org}</p>
                                        </a>
                                        <p className="ex-timeline">{ex.timeline}</p>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default LandingExperience