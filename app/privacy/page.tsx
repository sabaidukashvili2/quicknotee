import React from 'react';

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-3xl">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">1. What Data We Collect</h2>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                    <li><strong>Personal Information:</strong> We collect your email address when you sign up for an account.</li>
                    <li><strong>Usage Data:</strong> We may collect anonymous analytics data to understand how our service is used.</li>
                    <li><strong>Billing Data:</strong> All billing and payment information is handled directly by our Merchant of Record, Paddle. We do not store your credit card information.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">2. Why We Collect Data</h2>
                <p className="mb-4">We use your data to:</p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                    <li>Provide and maintain the service.</li>
                    <li>Allow you to access your account and notes.</li>
                    <li>Improve our product and user experience.</li>
                    <li>Process payments and subscriptions via Paddle.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">3. Legal Basis for Processing</h2>
                <p className="mb-4">
                    We process your personal data under the following legal bases:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                    <li><strong>Contract:</strong> Processing is necessary for the performance of our contract with you (providing the service).</li>
                    <li><strong>Legitimate Interests:</strong> For improving our services and fraud prevention.</li>
                    <li><strong>Consent:</strong> For cookies and optional marketing communications.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">4. Who We Share Data With</h2>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                    <li><strong>Paddle:</strong> We share necessary information with Paddle.com, our Merchant of Record, to process payments and handle tax compliance.</li>
                    <li><strong>Service Providers:</strong> We may use third-party services for analytics and hosting (e.g., Vercel, Supabase) who process data on our behalf under strict confidentiality agreements.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">5. User Rights</h2>
                <p className="mb-4">You have the following rights regarding your data:</p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                    <li><strong>Right to Access:</strong> You can request a copy of your data.</li>
                    <li><strong>Right to Deletion:</strong> You can request that we delete your account and associated data.</li>
                    <li><strong>Right to Withdraw Consent:</strong> You can withdraw consent for cookies or marketing at any time.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">6. Cookies</h2>
                <p className="mb-4">
                    We use cookies to maintain your session and improve your experience. You can control cookie preferences through your browser settings.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">7. Contact Us</h2>
                <p className="mb-4">
                    If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:siduka14@gmail.com" className="text-blue-600 hover:underline">siduka14@gmail.com</a>
                </p>
            </section>
        </div>
    );
}
