import React from 'react';

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-3xl">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
                <p className="mb-4">
                    By accessing or using our service, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">2. Product Description</h2>
                <p className="mb-4">
                    QuickNote is a web-based application designed to help users quickly capture, organize, and manage their notes and ideas efficiently. We provide tools for text editing, organization, and storage of your personal notes.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">3. User Responsibilities</h2>
                <p className="mb-4">
                    You agree not to use the service for any illegal or unauthorized purpose. You must not abuse, harass, threaten, impersonate, or intimidate other users. You are responsible for all content posted and activity that occurs under your account.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">4. Intellectual Property</h2>
                <p className="mb-4">
                    The service and its original content, features, and functionality are and will remain the exclusive property of QuickNote and its licensors. You retain all rights to the content you create and store on the service.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">5. Payment Terms</h2>
                <p className="mb-4 font-medium">
                    Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Paddle provides all customer service inquiries and handles returns.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">6. Subscription and Cancellation</h2>
                <p className="mb-4">
                    If you subscribe to a paid plan, you will be billed in advance on a recurring and periodic basis. You may cancel your subscription at any time through your account settings. Cancellation will take effect at the end of the current billing period.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">7. Limitation of Liability</h2>
                <p className="mb-4">
                    In no event shall QuickNote, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service. Use of the service is at your own risk.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">8. Contact Us</h2>
                <p className="mb-4">
                    If you have any questions about these Terms, please contact us at: <a href="mailto:siduka14@gmail.com" className="text-blue-600 hover:underline">siduka14@gmail.com</a>
                </p>
            </section>
        </div>
    );
}
