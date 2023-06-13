import React from 'react'
import "./ContactMe.scss"
import Analytics from '../../../utils/Analytics'

const Contact = [
    {
        title: "gmail",
        icon: "assets/icons/gmail.svg",
        link: "mailto:pavanesh163@gmail.com",
        text: "pavanesh163@gmail.com",
        qrCode: ""
    },
    {
        title: "whatsapp",
        icon: "assets/icons/whatsapp.svg",
        link: "https://wa.link/doo9wh",
        text: "Click here to whatsapp",
        qrCode: ""
    },
    {
        title: "telegram",
        icon: "assets/icons/telegram.svg",
        link: "https://t.me/Perfect_pawi",
        text: "Click here to start chat",
        qrCode: ""
    },

]

const ContactMe = () => {
    return (
        <div className="bg-gray  min-vh-50 contact-container">
            <div className="contact-heading">Contact Me</div>

            {
                Contact.map((item) =>
                    <div className="contact-card text-center" key={item.title}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer"
                            onClick={() => {
                                Analytics.track("Click on Contact Me", { title: item.title })
                            }}
                        >
                            <img loading="lazy" src={`${process.env.PUBLIC_URL}/${item.icon}`} alt=""></img>
                            {item.text && <p>{item.text}</p>}
                        </a>
                    </div>
                )
            }

        </div>
    )
}

export default React.memo(ContactMe)