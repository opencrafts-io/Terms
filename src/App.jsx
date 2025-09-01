import React from 'react';
import './App.css';

function App() {
  return (
    <div className='privacy-policy-container'>
      <header className='policy-header'>
        <h1 className='policy-title'>Privacy Policy</h1>
      </header>

      <div className='policy-content-scroll'>
        <p className='policy-effective-date'>
          <strong>Effective Date:</strong> August, 2025
        </p>

        <p className='policy-intro'>
          This Privacy Policy describes how Open Crafts Interactive Limited ("the Platform," "we," "us," or "our") collects, uses, processes, and protects your personal data when you use the Academia mobile applicaƟon ("the App") and its related services.
        </p>

        <p className='policy-intro'>
          The Academia App serves as a school portal for educational institutions, facilitating various academic and administrative functions such as unit registration, checking class schedules, booking classes, accessing academic records, and facilitating communication within the institution.
        </p>

        <p className='policy-intro'>
          We are committed to protecting your privacy and handling your personal data in a transparent and secure manner, in accordance with the Data Protection Act, 2019 (DPA) and other applicable laws of Kenya.
        </p>

        <p className='policy-intro'>
          By accessing, registering for, or using the App, you agree to the collection and use of your information in accordance with this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use our App or services.
        </p>

        <hr className='policy-divider' />

        <section className='policy-section'>
          <h2 className='policy-section-heading'>1. Who We Are</h2>
          <address className='company-address'>
            Open Crafts Interactive Limited <br />
            [Your Company Address] <br />
            P.O. Box [Your Company P.O. Box] <br />
            Nairobi, Kenya <br />
            Phone: <a href="tel:0110877322" >0110877322</a> <br />
            Email: <a href="mailto:info@openCrafts.io" >info@openCrafts.io</a>
          </address>
          <p>
            We are registered as a <strong>Data Controller</strong> with the Office of the Data Protection Commissioner (ODPC) in Kenya.
          </p>
        </section>

        <hr className='policy-divider' />

        <section className='policy-section'>
          <h2 className='policy-section-heading'>2. What Personal Data We Collect</h2>
          <p>
            We may collect and process various types of personal data about you, which we have grouped together as follows:
          </p>
          <ul className='data-list'>
            <li><strong>Identity Data:</strong> Includes your first name, last name, username or student/staff ID, gender, date of birth, and national identification number.</li>
            <li><strong>Contact Data:</strong> Includes your email address, telephone numbers, and physical address.</li>
            <li><strong>Profile Data:</strong> Includes your username and password, academic program/department, and course enrollments.</li>
            <li><strong>Academic Data:</strong> Includes unit registration details, class schedules, attendance records, grades, and other educational records.</li>
            <li><strong>Usage Data:</strong> Includes information about how you use our App, such as features accessed and time spent on the App.</li>
            <li><strong>Technical Data:</strong> Includes your IP address, login data, browser type, operating system, and other device technology.</li>
            <li><strong>Communication Data:</strong> Includes records of your communications within the App and your preferences for receiving communications.</li>
            <li><strong>Institutional Data:</strong> Information provided by your educational institution to manage your access to the App.</li>
          </ul>
          <p>
            We do not collect any <strong>Sensitive Personal Data</strong> (such as details about your race, religious beliefs, or health) unless it's strictly necessary and with your explicit consent.
          </p>
        </section>

        <hr className='policy-divider' />

        <section className='policy-section'>
          <h2 className='policy-section-heading'>3. How We Collect Your Personal Data</h2>
          <p>
            We use different methods to collect data from you, including through:
          </p>
          <ul className='collection-methods-list'>
            <li><strong>Direct Interactions:</strong> Information you provide directly by filling in forms or corresponding with us.</li>
            <li><strong>Automated Technologies:</strong> Technical and Usage Data collected automatically as you interact with the App.</li>
            <li><strong>Educational Institutions:</strong> We receive most of your data directly from your institution, which is responsible for providing accurate and authorized information.</li>
            <li><strong>Third Parties or Publicly Available Sources:</strong> We may receive data from analytics providers (e.g., Google Analytics).</li>
          </ul>
        </section>

        <hr className='policy-divider' />

        <section className='policy-section'>
          <h2 className='policy-section-heading'>4. Purposes for Which We Will Use Your Personal Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use it to:
          </p>
          <ul className='purpose-list'>
            <li>Provide and manage App services.</li>
            <li>Manage your account and profile.</li>
            <li>Facilitate communication within your institution.</li>
            <li>Support educational processes.</li>
            <li>Improve our App and services.</li>
            <li>Administer and protect our business.</li>
            <li>Comply with legal and regulatory obligations.</li>
            <li>Provide customer and technical support.</li>
          </ul>
        </section>

        <hr className='policy-divider' />

        <section className='policy-section'>
          <h2 className='policy-section-heading'>5. Lawful Basis for Processing Your Personal Data</h2>
          <p>
            We rely on the following lawful bases for processing your personal data under the Data Protection Act, 2019:
          </p>
          <ul className='lawful-basis-list'>
            <li><strong>Performance of a Contract:</strong> To provide you with access to the App's services.</li>
            <li><strong>Legitimate Interests:</strong> To improve our services and ensure app security.</li>
            <li><strong>Legal Obligation:</strong> To comply with regulatory requirements.</li>
            <li><strong>Consent:</strong> When you have given explicit consent for a specific purpose.</li>
          </ul>
        </section>

        <hr className='policy-divider' />

        <section className='policy-section'>
          <h2 className='policy-section-heading'>6. Disclosure of Your Personal Data</h2>
          <p>
            We may share your personal data with:
          </p>
          <ul className='disclosure-list'>
            <li>Your <strong>Educational Institution</strong> and its authorized personnel.</li>
            <li>Other App users within your institution.</li>
            <li>Service providers who assist with IT and administration.</li>
            <li>Professional advisers, government agencies, and regulators when legally required.</li>
          </ul>
        </section>
        
        <hr className='policy-divider' />

        <section className='policy-section'>
          <h2 className='policy-section-heading'>7. International Transfers</h2>
          <p>
            We do not typically transfer your personal data outside Kenya. If we do, we will ensure it is protected by adequate safeguards as approved by the Data Commissioner.
          </p>
        </section>

        <hr className='policy-divider' />

        <section className='policy-section'>
          <h2 className='policy-section-heading'>8. Data Security</h2>
          <p>
            We have implemented appropriate <strong>technical and organizational security measures</strong> to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way.
          </p>
          <ul className='security-measures-list'>
            <li><strong>Encryption</strong> for data in transit and at rest.</li>
            <li><strong>Access Controls</strong> to limit data access to authorized personnel.</li>
            <li><strong>Regular Security Audits</strong> and an <strong>Incident Response Plan</strong>.</li>
          </ul>
        </section>

        <hr className='policy-divider' />

        <section className='policy-section'>
          <h2 className='policy-section-heading'>9. Data Retention</h2>
          <p>
            We will only retain your personal data for as long as necessary to fulfill the purposes for which we collected it, or as required by law or your educational institution.
          </p>
        </section>

        <hr className='policy-divider' />

        <section className='policy-section'>
          <h2 className='policy-section-heading'>10. Your Legal Rights (Data Subject Rights)</h2>
          <p>
            Under the Data Protection Act, 2019, you have the right to be informed, access your data, request corrections, and request the erasure of your personal data.
          </p>
        </section>

      </div>
    </div>
  );
}

export default App;