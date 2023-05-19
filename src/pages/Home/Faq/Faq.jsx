import React from 'react';

const Faq = () => {
    return (
        <div className='py-10'>
            <h1 className="text-4xl font-bold text-center mb-8">Faq's</h1>
            <div className="hero">

                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-md-1/2 w-full'>
                        <img src="https://i.ibb.co/Jj0dJLK/undraw-Questions-re-1fy7.png" className="w-full" />
                    </div>

                    <div className='w-md-1/2 w-full'>
                        <div className="collapse collapse-plus">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title bg-[#0ba5e9] text-primary-content peer-checked:bg-[#0ba5e9] peer-checked:text-secondary-content">
                                How can I place an order?
                            </div>
                            <div className="collapse-content bg-white text-primary-content peer-checked:bg-white peer-checked:text-black mt-4">
                                <p>You can place an order by visiting our website and adding the desired products to your shopping cart. Proceed to the checkout page to complete your purchase.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title bg-[#0ba5e9] text-primary-content peer-checked:bg-[#0ba5e9] peer-checked:text-secondary-content">
                                What payment methods do you accept?
                            </div>
                            <div className="collapse-content bg-white text-primary-content peer-checked:bg-white peer-checked:text-black mt-4">
                                <p>We accept various payment methods, including credit/debit cards, PayPal, and bank transfers. Choose the preferred payment option during the checkout process.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title bg-[#0ba5e9] text-primary-content peer-checked:bg-[#0ba5e9] peer-checked:text-secondary-content">
                                How long does shipping take?
                            </div>
                            <div className="collapse-content bg-white text-primary-content peer-checked:bg-white peer-checked:text-black mt-4">
                                <p>Shipping times may vary depending on your location and the shipping method selected. Generally, orders are processed and shipped within 1-3 business days. You will receive a confirmation email with tracking information once your order has been dispatched.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title bg-[#0ba5e9] text-primary-content peer-checked:bg-[#0ba5e9] peer-checked:text-secondary-content">
                                What is your return policy?
                            </div>
                            <div className="collapse-content bg-white text-primary-content peer-checked:bg-white peer-checked:text-black mt-4">
                                <p>We have a hassle-free return policy. If you are not satisfied with your purchase, you can return the item(s) within 30 days of delivery. Please review our Returns & Refunds page for more detailed information.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title bg-[#0ba5e9] text-primary-content peer-checked:bg-[#0ba5e9] peer-checked:text-secondary-content">
                                Can I track my order?
                            </div>
                            <div className="collapse-content bg-white text-primary-content peer-checked:bg-white peer-checked:text-black mt-4">
                                <p>Yes, you can track your order using the tracking number provided in the shipping confirmation email. Visit the carrier's website and enter the tracking number to get real-time updates on the status of your package.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Faq;