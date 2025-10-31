import React from 'react';
import bannerImage from './images/behavior-consult.jpeg'; // Using baby.jpg as the banner

function BehaviorConsultation() {
  return (
    <div className="behavior-page">
      <div
        className="behavior-banner"
        style={{ backgroundImage: `url(${bannerImage})` }}
      ></div>
      <div className="behavior-text-content">
        <h2 className="behavior-title">BEHAVIOR CONSULTATION</h2>
        <div className="behavior-content">
          <p>
           Hadia Khan, M.A., BCBA is board-certified behavior analyst and has been in the field of applied 
           behavior analysis (ABA) for 8 years. She has a master’s degree in Applied Behavior Analysis and a 
           graduate certificate in Autism from Ball State University. Applied behavior analysis (ABA) is a 
           form of therapy that is based on the science of learning and behavior. It aims to increase 
           helpful behaviors and decrease harmful ones in school-aged children. Hadia is certified in both 
           QBS/Safety Care certification and crisis prevention intervention (CPI) for de-escalation and behavior 
           management.
          </p>
          <p>
            Hadia has worked with children and adolescents with autism, ADHD, ODD, and Down’s Syndrome while 
            implementing effective research-based approaches to address challenging behaviors through behavior 
            support plans. She has provided services across modalities (i.e., school, clinic, home-support) and 
            across states including California, Georgia, and Michigan. She is experienced in providing ABA 
            services to individuals with developmental disabilities through early intervention services, 
            family-focused training, and home-based support. Behaviors are multi-faceted with concurring 
            functions and variables to consider when conducting a consultation.
          </p>
          <p>
            During consultations, Hadia will conduct a functional assessment screening tool to identify factors 
            influencing problem behaviors. Consultations will be a detailed 30-minute phone call discussing the 
            challenging behavior of concern. Hadia will complete a functional screening tool or descriptive 
            analysis of the behavior to identify factors influencing problem behaviors. Hadia will provide 
            evidence-based proactive strategies, supplementary materials, and outline a potential plan to 
            discuss the behavior(s) of concern. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default BehaviorConsultation;
