import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="terms-and-conditions" style={{height:'75vh'}}>
      <h2>EasyCure Terms and Conditions</h2>
      <p>
        Welcome to EasyCure! These terms and conditions 
        outline the rules and regulations for using our EasyCure application ("application",
        "service") offered by [EasyCure] ("we", "us", or "our").
      </p>
      <p>
        By accessing or using the application, you agree to be bound by these Terms.
        If you disagree with any part of the terms and conditions, you may not access
        or use the application.
      </p>
      <p>
        These Terms apply to all users of the application, including without limitation
        users who are browsers, vendors, customers, merchants, and/or contributors
        of content.
      </p>
      {/* Add additional sections for specific terms like: */}
      <ul>
        <li>Account Creation and Termination</li>
        <li>Intellectual Property Rights</li>
        <li>User Content</li>
        <li>Links to Third-Party Sites</li>
        <li>Termination</li>
        <li>Disclaimers</li>
        <li>Governing Law</li>
      </ul>
      <p>
        We reserve the right to update or change our Terms and Conditions without
        prior notice. You should check this Terms and Conditions page periodically for
        changes. Your continued use of the application following the posting of any
        changes to the Terms and Conditions constitutes acceptance of those changes.
      </p>
      <p>
        Questions about the Terms and Conditions should be sent to us at [your email address].
      </p>
    </div>
  );
};

export default TermsAndConditions;
