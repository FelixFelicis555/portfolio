import React from 'react'
import "./LandingContact.scss"
import Analytics from '../../../utils/Analytics'

const Contacts = [
    {
        icon: "assets/icons/github.svg",
        link: "https://github.com/FelixFelicis555",
        title: "felixfelicis555",
        type: "github"
    },
    {
        icon: "assets/icons/stack-overflow.svg",
        link: "https://stackoverflow.com/users/17564547/felixfelicis555",
        title: "pavanesh-G",
        type: "stack-overflow"
    },
    {
        icon: "assets/icons/InterviewBit.svg",
        link: "https://www.interviewbit.com/profile/pavanesh-guggilapu",
        title: "yoursmaggi13",
        type: "InterviewBit"
    },
    {
        icon: "assets/icons/code.svg",
        link: "https://www.codechef.com/users/yours_maggi13",
        title: "yoursmaggi13",
        type: "codechef"
    },
    {
        icon: "assets/icons/linkedin.svg",
        link: "https://www.linkedin.com/in/pavanesh-g/",
        title: "pavanesh-G",
        type: "linkedin"
    },
    {
        icon: "assets/icons/twitter.svg",
        link: "https://twitter.com/Smart_pawi",
        title: "Smart_pawi",
        type: "twitter"
    },
    {
        icon: "assets/icons/instagram.svg",
        link: "https://www.instagram.com/felix_felicis555/",
        title: "felix_felicis555",
        type: "instagram"
    },
    {
        icon: "assets/icons/facebook.svg",
        link: "https://www.facebook.com/pavanesh.nandu",
        title: "pavanesh nandu",
        type: "facebook"
    },
]


const LandingContact = () => {
    return (
        <div className="min-vh-50 bg-blue landing-contact-root">
            <p className="landing-contact-heading">Click below to know more about me.</p>
            <div className="landing-contact-container">
                {
                    Contacts.map((item) => <LandingContactCard item={item} key={item?.icon} />)
                }
            </div>
        </div>
    )
}

export default React.memo(LandingContact)


const LandingContactCard = (props) => {
    const { icon, link, title, type } = props.item
    return (
        <div className="landing-contact-card">
            <a href={link} target="_blank" rel="noopener noreferrer"
                onClick={() => {
                    Analytics.track("Click on About Me", { title: type })
                }}
            >
                <img loading="lazy" src={`${process.env.PUBLIC_URL}/${icon}`} alt=""></img>
                <div className="text-section">
                    <span className="subtitle">Click here to know more</span>
                    <p className="title">/{title}</p>
                </div>
            </a>
        </div >
    )
}

