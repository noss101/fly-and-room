import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center text-[#272724]">
          Privacy <span className="text-primary">Policy</span>
        </h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose max-w-none">
            <h2>Introduction</h2>
            <p>
              Triploro.com ("we", "us", or "our") operates the Triploro travel platform and related services, including flight, hotel, car rental, trip, pickup,
              and eSIM bookings (the "Service"). This page explains how we collect, use, and disclose personal data when you use our Service.
            </p>
            
            <h2>Information Collection and Use</h2>
            <p>
              We collect different types of information when you browse Triploro or make a booking so that we can provide and improve our travel services.
              Types of Data Collected:
            </p>
            <ul>
              <li>Personal Data (name, email address, phone number)</li>
              <li>Usage Data (IP address, browser type, pages visited)</li>
              <li>Cookies and Tracking Data</li>
            </ul>
            
            <h2>Use of Data</h2>
            <p>
              Triploro.com uses the collected data for various purposes:
            </p>
            <ul>
              <li>To provide and maintain our Service</li>
              <li>To process your travel bookings</li>
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
                <li>By email: Contact@triploro.com</li>
                <li>Through our website's <a href="/contact">contact page</a></li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  );
};

export default PrivacyPolicyPage;