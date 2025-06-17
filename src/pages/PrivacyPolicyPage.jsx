import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Privacy <span className="text-primary">Policy</span>
        </h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose max-w-none">
            <h2>Introduction</h2>
            <p>
              Fly and Room ("we", "us", or "our") operates the flyandroom.com website (the "Service").
              This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service.
            </p>
            
            <h2>Information Collection and Use</h2>
            <p>
              We collect several different types of information for various purposes to provide and improve our Service to you.
              Types of Data Collected:
            </p>
            <ul>
              <li>Personal Data (name, email address, phone number)</li>
              <li>Usage Data (IP address, browser type, pages visited)</li>
              <li>Cookies and Tracking Data</li>
            </ul>
            
            <h2>Use of Data</h2>
            <p>
              Fly and Room uses the collected data for various purposes:
            </p>
            <ul>
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features</li>
              <li>To provide customer support</li>
              <li>To gather analysis to improve our Service</li>
              <li>To monitor the usage of our Service</li>
            </ul>
            
            <h2>Security of Data</h2>
            <p>
              The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
              While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
            
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              You are advised to review this Privacy Policy periodically for any changes.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul>
              <li>By email: privacy@flyandroom.com</li>
              <li>By visiting this page on our website: flyandroom.com/contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;