{/* import {privacyPolicyData} from "./privacyPolicyData"; */ }
import { AnimatedSection } from '@/components/AnimatedSection'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'


// privacyPolicyData.js
export const privacyPolicyData = {
   hero: {
      badge: "Privacy Policy",
      heading: {
         before: "Your",
         highlight: "Privacy Matters",
         after: "To Us",
      },
      description:
         "We value the trust you place in us. Explore to know how we collect, use, and protect your information, ensuring transparency, security, and responsible data practices at every step.",
   },

   intro: {
      delay: 0.3,
      text: `The privacy of our users is of the utmost importance to us. By accessing and/or ordering services on our website, you agree to and, where necessary, give consent for the collection, use, disclosure, and transfer of your personal information as outlined in this policy. We are SubTask ("SubTask | Small Steps . Giant Leaps"), a company registered in India under the registration number UDYAM-MP-10-0145397 and our registered office is located at Karond, Bhopal, 462038, Madhya Pradesh, India.`,
   },

   sections: [
      {
         id: 1,
         title: "Information Collected",
         delay: 0.4,
         points: [
            {
               label: "1.1",
               text:
                  "You may also visit our website anonymously. We may also gather information about your usage of the website and information about you from messages you post on the website and emails or letters you send to us.",
            },
         ],
      },
      {
         id: 2,
         title: "Use of Your Information",
         delay: 0.5,
         points: [
            {
               label: "2.1",
               text:
                  "Your information will enable us to provide you with access to the relevant parts of the website and to supply the services you have requested. It will also be used to bill you and to contact you as needed regarding our services.",
            },
            {
               label: "2.2",
               text:
                  "We may use your information to contact you for your thoughts on our services and to occasionally notify you of important changes or developments.",
            },
            {
               label: "2.3",
               text:
                  "If you have agreed to it, we may use your information to inform you about our other products and services that may be of interest to you.",
            },
            {
               label: "2.4",
               text:
                  "If you have agreed to it, we may also share your information with third parties to inform you about goods and services that may be of interest.",
            },
            {
               label: "2.5",
               text:
                  "If you do not want us to use your data in this way, please let us know by using the contact details provided.",
            },
            {
               label: "2.6",
               text:
                  "By submitting comments and feedback, you give us consent to use such content for marketing purposes.",
            },
         ],
      },
      {
         id: 3,
         title: "Disclosure of Your Information",
         delay: 0.6,
         points: [
            {
               label: "3.1",
               text:
                  "We may disclose your information to third parties assisting us in operating our website or conducting our business.",
            },
            {
               label: "3.2",
               text:
                  "With your consent, we may share information with selected third parties for marketing purposes.",
            },
            {
               label: "3.3",
               text:
                  "In the event of a merger or sale, your information may be transferred to the new owners.",
            },
            {
               label: "3.4",
               text:
                  "We may disclose information to comply with legal obligations or protect SubTask’s rights.",
            },
            {
               label: "3.5",
               text:
                  "Information shared with third parties shall be in accordance with Indian laws.",
            },
         ],
      },
      {
         id: 4,
         title: "Cookies",
         delay: 0.6,
         points: [
            {
               label: "4.1",
               text:
                  "We use cookies to enhance user experience, understand preferences, and compile site traffic data.",
            },
            {
               label: "4.2",
               text:
                  "Cookies do not contain confidential information such as address or credit card details.",
            },
            {
               label: "4.3",
               text:
                  "Your IP address is automatically logged for traffic analysis but not for personal identification.",
            },
            {
               label: "4.4",
               text:
                  "Cookies are retained only for the duration of your visit unless login details are saved.",
            },
         ],
      },
      {
         id: 5,
         title: "Protection and Retention of Your Information",
         delay: 0.7,
         points: [
            {
               label: "5.1",
               text:
                  "We implement security measures to protect your information but cannot guarantee complete internet security.",
            },
         ],
      },
      {
         id: 6,
         title: "Accessing and Updating Your Information",
         delay: 0.8,
         points: [
            {
               label: "6.1",
               text:
                  "You may request access or updates to your data. A processing fee of INR 500 may apply.",
            },
         ],
      },
      {
         id: 7,
         title: "Terms Of Use",
         delay: 0.9,
         points: [
            {
               label: "7.1",
               text:
                  "Please review our Terms and Conditions for usage and liability information.",
            },
         ],
      },
      {
         id: 8,
         title: "Changes to Our Privacy Policy",
         delay: 1.0,
         points: [
            {
               label: "8.1",
               text:
                  "We may update this policy and notify users through our website or email.",
            },
         ],
      },
   ],

   contact: {
      delay: 1.1,
      title: "Contacting Us",
      text: " All comments, queries and requests relating to our use of your information are welcomed and should be addressed to: ",
      address: {
         company: "SubTask",
         line1: "Shree dev niwas opposite elixir green new jail road",
         city: "Karond, Bhopal, Madhya Pradesh, INDIA",
         pin: "462038",
         email: "subtask.info@gmail.com",
         phone: "8709952821",
      },
   },
};

export default function Privacy() {
   return (
      <div className="min-h-screen bg-background">
         <Navbar />
         <main>
            {/* Hero Section */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-28">
               <div className="container-custom">
                  <div className="max-w-4xl mx-auto text-center">
                     <AnimatedSection>
                        <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
                           {privacyPolicyData.hero.badge}
                        </span>
                     </AnimatedSection>

                     <AnimatedSection delay={0.1}>
                        <h1 className="heading-xl mb-6">
                           {privacyPolicyData.hero.heading.before}{" "}
                           <span className="text-gold-gradient">
                              {privacyPolicyData.hero.heading.highlight}
                           </span>{" "}
                           {privacyPolicyData.hero.heading.after}
                        </h1>
                     </AnimatedSection>

                     <AnimatedSection delay={0.2}>
                        <p className="body-lg">{privacyPolicyData.hero.description}</p>
                     </AnimatedSection>
                  </div>
               </div>
            </section>

            <div className="max-w-4xl container-custom mx-auto pb-20 md:pb-28">
               <AnimatedSection delay={privacyPolicyData.intro.delay}>
                  <p className="mt-8 body-md">{privacyPolicyData.intro.text}</p>
               </AnimatedSection>

               {privacyPolicyData.sections.map((section) => (
                  <AnimatedSection key={section.id} delay={section.delay}>
                     <h5 className="text-primary text-md font-semibold tracking-wider uppercase mt-4 mb-2 block">
                        {section.id}. {section.title}
                     </h5>

                     {section.points.map((point, idx) => (
                        <p key={idx} className="body-md">
                           <span className="text-primary text-sm font-semibold">
                              {point.label}
                           </span>{" "}
                           {point.text}
                        </p>
                     ))}
                  </AnimatedSection>
               ))}

               <AnimatedSection delay={privacyPolicyData.contact.delay}>
                  <h5 className="text-primary text-md font-semibold tracking-wider uppercase mt-4 mb-2 block">
                     9. {privacyPolicyData.contact.title}
                  </h5>
                  <p className="body-md">
                     {privacyPolicyData.contact.text}
                  </p>
                  <address className="mt-8" style={{ fontWeight: 600, lineHeight: 1.8 }}>
                     <hr />
                     <br />
                     <span className="text-primary font-semibold">
                        {privacyPolicyData.contact.address.company}
                     </span>
                     <br />
                     {privacyPolicyData.contact.address.line1}
                     <br />
                     {privacyPolicyData.contact.address.city}
                     <br />
                     PIN- {privacyPolicyData.contact.address.pin}
                     <br />
                     Email:{" "}
                     <a href={`mailto:${privacyPolicyData.contact.address.email}`}>
                        {privacyPolicyData.contact.address.email}
                     </a>
                     <br />
                     Call:{" "}
                     <a href={`tel:${privacyPolicyData.contact.address.phone}`}>
                        <b>{privacyPolicyData.contact.address.phone}</b>
                     </a>
                  </address>
               </AnimatedSection>
            </div>

         </main >
         <Footer />
      </div >
   )
}