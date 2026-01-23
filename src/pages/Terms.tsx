import { AnimatedSection } from '@/components/AnimatedSection'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { Key } from 'react';

export const termsAndConditions = {
   meta: {
      title: "Terms and Conditions",
      effectiveDate: "2025-01-01",
      companyName: "SubTask",
      jurisdiction: "India"
   },

   introduction:
      "By accessing this website or engaging SubTask for any services, you agree to be legally bound by these Terms and Conditions. If you do not agree, discontinue use immediately.",

   sections: [
      {
         id: "legal-agreement",
         title: "Legal Binding Agreement",
         content:
            "These Terms constitute a legally binding agreement between the user and SubTask. Use of the website, proposals, invoices, communications, or services implies full acceptance."
      },
      {
         id: "services",
         title: "Services",
         content:
            "SubTask provides web development, web and software applications, automation, and digital IT services on a best-effort, commercially reasonable basis, subject to agreed scope."
      },
      {
         id: "scope-and-changes",
         title: "Scope of Work & Change Management",
         content:
            "Services commence only after written confirmation. Any change in scope requires written approval and may affect pricing and timelines. Verbal commitments are not binding."
      },
      {
         id: "payments",
         title: "Fees, Payments & Taxes",
         content:
            "Fees are payable as per agreed milestones or invoices. Advance payments may be required. All fees are exclusive of applicable taxes. Payments are non-refundable unless explicitly stated in writing."
      },
      {
         id: "intellectual-property",
         title: "Intellectual Property Rights",
         content:
            "All intellectual property remains the property of SubTask until full payment is received. Upon full payment, the client receives a limited, non-transferable right to use the agreed deliverables."
      },
      {
         id: "client-obligations",
         title: "Client Obligations",
         content:
            "Clients must provide accurate requirements, timely approvals, and have rights to shared materials. SubTask is not liable for delays caused by client-side dependencies."
      },
      {
         id: "confidentiality",
         title: "Confidentiality",
         content:
            "Both parties agree to maintain confidentiality of sensitive information unless disclosure is required by law or authorized in writing."
      },
      {
         id: "disclaimer",
         title: "Disclaimer of Warranties",
         content:
            "All services and content are provided on an 'as is' and 'as available' basis without warranties of any kind, express or implied."
      },
      {
         id: "liability",
         title: "Limitation of Liability",
         content:
            "SubTask shall not be liable for indirect, incidental, or consequential damages. Total liability shall not exceed the amount paid for the specific service."
      },
      {
         id: "third-party",
         title: "Third-Party Services",
         content:
            "SubTask may rely on third-party tools and platforms and is not responsible for outages, changes, or failures caused by such third parties."
      },
      {
         id: "termination",
         title: "Termination",
         content:
            "Either party may terminate services with written notice. Outstanding payments become immediately due. No refunds will be issued for completed or ongoing work."
      },
      {
         id: "non-solicitation",
         title: "Non-Solicitation",
         content:
            "Clients shall not solicit or hire SubTask employees or contractors during the engagement and for 12 months thereafter."
      },
      {
         id: "force-majeure",
         title: "Force Majeure",
         content:
            "SubTask shall not be liable for delays or failures caused by events beyond reasonable control, including natural disasters or government actions."
      },
      {
         id: "governing-law",
         title: "Governing Law & Jurisdiction",
         content:
            "These Terms shall be governed by the laws of India, and courts in India shall have exclusive jurisdiction."
      },
      {
         id: "modifications",
         title: "Modifications to Terms",
         content:
            "SubTask reserves the right to modify these Terms at any time. Continued use constitutes acceptance of the updated Terms."
      }
   ],

   contact: {
      email: "subtask.info@gmail.com",
      phone: " 9617432190",
      whatsapp: "9973565868"
   }
};

const terms = () => {
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
                           TERMS AND CONDITIONS
                        </span>
                     </AnimatedSection>
                     <AnimatedSection delay={0.1}>
                        <h1 className="heading-xl mb-6">
                           Professional {' '}
                           <span className="text-gold-gradient"> Accountability Matters</span>
                           {' '}to us
                        </h1>
                     </AnimatedSection>
                     <AnimatedSection delay={0.2}>
                        <p className="body-lg">
                           We believe in clarity and mutual respect. Our Terms of Service define the rules, responsibilities, and expectations that govern the use of our website and services, ensuring a transparent, secure, and professional relationship between SubTask and our clients.
                        </p>
                     </AnimatedSection>
                  </div>
               </div>
            </section>
            <div className="max-w-4xl container-custom mx-auto pb-20 md:pb-28">
               <AnimatedSection delay={0.25} className='mt-8 body-md'>
                  {termsAndConditions.introduction}
               </AnimatedSection>
               {termsAndConditions?.sections?.map((tAndC: { id: string; title: string; content: string; }, i: number) => {
                  return (<AnimatedSection delay={0.25 + i * 0.05}>
                     <h5 key={tAndC.id} style={{ fontWeight: "bolder", textTransform: "capitalize" }} className="text-primary text-md font-semibold tracking-wider uppercase mt-4 mb-2 block">{i + 1}. {tAndC.title}</h5>
                     <p className='body-md'>
                        {tAndC.content}
                     </p>
                  </AnimatedSection>)
               })}
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

export default terms