import { AnimatedSection } from '@/components/AnimatedSection'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

export const cookieConst = {
   "meta": {
      "title": "Cookie Policy",
      "effectiveDate": "2025-01-01",
      "companyName": "SubTask",
      "jurisdiction": "India",
      "heroText": "We use cookies to enhance your browsing experience, understand website usage, and improve our services. Our Cookie Policy explains what cookies we use, why we use them, and how you can manage your preferences, giving you full control with complete transparency."
   },
   "introduction": "This Cookie Policy explains how SubTask uses cookies and similar technologies to ensure a secure, reliable, and user-friendly experience while respecting your privacy and choices.",
   "whatAreCookies": {
      "title": "What Are Cookies",
      "content": "Cookies are small text files stored on your device when you visit a website. They help websites function efficiently, remember preferences, and improve user experience."
   },
   "whyWeUseCookies": {
      "title": "Why We Use Cookies",
      "points": [
         "To ensure essential website functionality",
         "To improve performance and user experience",
         "To understand usage patterns and improve our services",
         "To maintain security and prevent misuse"
      ]
   },
   "typesOfCookies": {
      "title": "Types of Cookies We Use",
      "categories": [
         {
            "id": "essential",
            "name": "Essential Cookies",
            "description": "Required for core website functionality, security, and accessibility. These cookies cannot be disabled."
         },
         {
            "id": "performance",
            "name": "Performance & Analytics Cookies",
            "description": "Help us understand how visitors interact with the website so we can improve performance and usability."
         },
         {
            "id": "functional",
            "name": "Functional Cookies",
            "description": "Remember user preferences and settings to provide a more personalized experience."
         },
         {
            "id": "thirdParty",
            "name": "Third-Party Cookies",
            "description": "Set by external services used on our website. Their use is governed by the respective third-party privacy policies."
         }
      ]
   },
   "userChoices": {
      "title": "Your Choices & Control",
      "content": "You can manage or disable cookies through your browser settings. Please note that disabling certain cookies may affect website functionality and performance."
   },
   "dataPrivacy": {
      "title": "Data & Privacy",
      "content": "Cookies do not directly identify you. Any information collected is processed in accordance with our Privacy Policy and applicable data protection laws."
   },
   "policyUpdates": {
      "title": "Updates to This Policy",
      "content": "We may update this Cookie Policy from time to time to reflect changes in technology, law, or business practices. Continued use of the website implies acceptance of the updated policy."
   },
   "contact": {
      "title": "Contact Us",
      "email": "subtask.info@gmail.com",
      "phone": "8709952821",
      "whatsapp": "8709952821"
   }
}

const cookies = () => {
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
                           COOKIES POLICY
                        </span>
                     </AnimatedSection>
                     <AnimatedSection delay={0.1}>
                        <h1 className="heading-xl mb-6">
                           Cookies {' '}
                           <span className="text-gold-gradient"> transparency Matters</span>
                           {' '}to us
                        </h1>
                     </AnimatedSection>
                     <AnimatedSection delay={0.2}>
                        <p className="body-lg">
                           {cookieConst.meta.heroText}
                        </p>
                     </AnimatedSection>
                  </div>
               </div>
            </section>
            <div className="max-w-4xl container-custom mx-auto pb-20 md:pb-28">
               <AnimatedSection delay={0.2}>
                  <p className='mt-8 body-md'>
                     {cookieConst.introduction}
                  </p>
               </AnimatedSection>

               {/* whatAreCookies */}
               <AnimatedSection delay={0.3}>
                  <h5 style={{ fontWeight: "bolder", textTransform: "capitalize" }} className="text-primary text-md font-semibold tracking-wider uppercase mt-4 mb-2 block">{cookieConst.whatAreCookies.title}</h5>
                  <p className='body-md'>
                     {cookieConst.whatAreCookies.content}
                  </p>
               </AnimatedSection>

               {/* whyWeUseCookies */}
               <AnimatedSection delay={0.3}>
                  <h5 style={{ fontWeight: "bolder", textTransform: "capitalize" }} className="text-primary text-md font-semibold tracking-wider uppercase mt-4 mb-2 block">{cookieConst.whyWeUseCookies.title}</h5>
                  <p className='body-md'>
                     {cookieConst?.whyWeUseCookies.points.map((point: string, i: number) => {
                        return (<AnimatedSection delay={0.3 + i * 0.25}>
                           <li key={i} className="list-inside list-disc marker:text-primary">{point}</li>
                        </AnimatedSection>)
                     })}
                  </p>
               </AnimatedSection>

               {/* typesOfCookies */}
               <AnimatedSection delay={0.3}>
                  <h5 style={{ fontWeight: "bolder", textTransform: "capitalize" }} className="text-primary text-md font-semibold tracking-wider uppercase mt-4 mb-2 block">{cookieConst?.typesOfCookies?.title}</h5>
               </AnimatedSection>
               {cookieConst?.typesOfCookies?.categories?.map((cType: { id: string; name: string; description: string; }, i: number) => {
                  return (<AnimatedSection delay={0.3 + i * 0.05}>
                     <h5 key={cType.id} style={{ fontWeight: "bolder", textTransform: "capitalize" }} className="text-primary text-sm font-semibold tracking-wider uppercase mt-4 mb-2 block">{i + 1}. {cType.name}</h5>
                     <p className='body-md'>
                        {cType.description}
                     </p>
                  </AnimatedSection>)
               })}

               {/* userChoices */}
               <AnimatedSection delay={0.3}>
                  <h5 style={{ fontWeight: "bolder", textTransform: "capitalize" }} className="text-primary text-md font-semibold tracking-wider uppercase mt-4 mb-2 block">{cookieConst.userChoices.title}</h5>
                  <p className='body-md'>
                     {cookieConst.userChoices.content}
                  </p>
               </AnimatedSection>

               {/* dataPrivacy */}
               <AnimatedSection delay={0.3}>
                  <h5 style={{ fontWeight: "bolder", textTransform: "capitalize" }} className="text-primary text-md font-semibold tracking-wider uppercase mt-4 mb-2 block">{cookieConst.dataPrivacy.title}</h5>
                  <p className='body-md'>
                     {cookieConst.dataPrivacy.content}
                  </p>
               </AnimatedSection>

               {/* policyUpdates */}
               <AnimatedSection delay={0.3}>
                  <h5 style={{ fontWeight: "bolder", textTransform: "capitalize" }} className="text-primary text-md font-semibold tracking-wider uppercase mt-4 mb-2 block">{cookieConst.policyUpdates.title}</h5>
                  <p className='body-md'>
                     {cookieConst.policyUpdates.content}
                  </p>
               </AnimatedSection>

               <AnimatedSection delay={.35}>
                  <address style={{ fontWeight: 600, lineHeight: 1.8, }} className='mt-8'>
                     <hr />
                     <br />
                     <span className="text-primary font-semibold ">SubTask&nbsp;</span><br />
                     Shree dev niwas opposite elixir green new jail road<br />
                     Karond, Bhopal, Madhya Pradesh, INDIA<br />
                     PIN- 462038<br />
                     Email: <a href="mailto:subtask.info@gmail.com?subject=Query%20for privacy policy&body=Write Your query here..." target="_blank">subtask.info@gmail.com</a><br />
                     Call: <a href="tel:8709952821"><b>8709952821</b></a><br />
                  </address>
               </AnimatedSection>
            </div>
         </main >
         <Footer />
      </div >
   )
}

export default cookies