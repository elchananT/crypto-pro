import { motion } from "motion/react";
import Accordion from "./Accordion.tsx";

interface Item {
    heading: string;
    content: string;
}

const items: Item[] = [
    {
        heading: "What is Cryptix?",
        content: "Cryptix is a modern cryptocurrency platform designed to make buying, selling, and managing digital assets simple and secure. We aim to provide users with an intuitive interface, fast transactions, and full control over their crypto portfolio."
    },
    {
        heading: "Is Cryptix secure?",
        content: "Yes, security is our top priority. Cryptix uses advanced encryption protocols, two-factor authentication (2FA), and cold storage for digital assets. Our platform is regularly audited to ensure the highest level of protection for our users."
    },
    {
        heading: "Which cryptocurrencies are supported?",
        content: "Cryptix currently supports all major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Ripple (XRP), and many more. We continuously add new coins and tokens based on market demand and user feedback."
    },
    {
        heading: "What are the fees for transactions?",
        content: "Our platform offers competitive transaction fees, typically ranging from 0.1% to 0.5% per trade. Fees may vary depending on the cryptocurrency and transaction type, and all fees are transparently displayed before you confirm any transaction."
    },
    {
        heading: "How fast are transactions?",
        content: "Transactions on Cryptix are processed in real-time for most cryptocurrencies. Deposits and withdrawals are typically completed within minutes, depending on network congestion and blockchain confirmation times."
    },
    {
        heading: "Do I need to verify my identity?",
        content: "Yes, to comply with regulatory standards and ensure account security, all users must complete identity verification (KYC). The process is simple and usually takes only a few minutes to submit documents and get approved."
    },
    {
        heading: "Can I access Cryptix on mobile?",
        content: "Absolutely. Cryptix is fully mobile-friendly and can be accessed through any web browser on your smartphone or tablet. We also provide a dedicated mobile app for both iOS and Android devices for an even smoother experience."
    },
    {
        heading: "How can I contact support?",
        content: "Our support team is available 24/7 to help with any questions or issues. You can contact us via live chat, email, or our support ticket system. We aim to respond promptly and ensure you get the help you need."
    }
]

const AccordionContainer = () => {
    return (
        <div className="md:grid md:grid-cols-2">
            {items.map(({heading, content}, index) => (
                <motion.div
                    initial={{ opacity: 0, x: -500 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: index * 0.2, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Accordion key={index} heading={heading} content={content} />
                </motion.div>
            ))}
        </div>
    )
}
export default AccordionContainer
