import React from 'react';

export default function RefundPage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-3xl">
            <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>
            <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">1. Refund Rules</h2>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                    <li><strong>Mistaken Purchases:</strong> Refunds are available for purchases made by mistake.</li>
                    <li><strong>Timeframe:</strong> You may request a refund within 14 days of your initial purchase.</li>
                    <li><strong>Subscription Renewals:</strong> We generally do not offer refunds for subscription renewals unless requested within 48 hours of the renewal charge.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">2. How to Request a Refund</h2>
                <p className="mb-4">
                    To request a refund, please contact our Merchant of Record, Paddle, directly or reach out to our support team.
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                    <li><strong>Contact Paddle:</strong> You can contact Paddle at <a href="mailto:help@paddle.com" className="text-blue-600 hover:underline">help@paddle.com</a> or use <a href="https://paddle.net" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Paddle’s order lookup tool</a>.</li>
                    <li><strong>Contact Us:</strong> You can also email us at <a href="mailto:siduka14@gmail.com" className="text-blue-600 hover:underline">siduka14@gmail.com</a> with your order details.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">3. Merchant of Record</h2>
                <p className="mb-4 font-medium border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 dark:bg-blue-900/20">
                    All payments are processed by Paddle. Refunds are handled via Paddle.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-3">4. Exceptions</h2>
                <p className="mb-4">
                    Please note that refunds may not be available for:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                    <li>Digital products that have been fully downloaded or used.</li>
                    <li>Services that have already been fully performed.</li>
                    <li>Requests made after the 14-day refund period.</li>
                </ul>
            </section>
        </div>
    );
}
