import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa6'
import { RiTwitterXFill } from 'react-icons/ri'

const Footer = () => {
    return (
        <footer className="relative w-full bg-(--primary) dark:bg-(--primary) text-(--secondary) dark:text-(--secondary) py-8 px-6">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto py-10 pt-18">

                {/* LEFT SIDE LINKS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">

                    {/* Contact */}
                    <div className="flex flex-col gap-3">
                        <h1 className="font-bold text-lg mb-2 text-(--dropdownh1) dark:text-(--dropdownh1)">Contact Us</h1>

                        <div className="flex gap-3 text-lg">
                            <a href="https://facebook.com"><FaFacebook /></a>
                            <a href="https://instagram.com"><FaInstagram /></a>
                            <a href="https://twitter.com"><RiTwitterXFill /></a>
                            <a href="https://pinterest.com"><FaPinterest /></a>
                        </div>

                        <span>123 Fashion St, New York, NY 10001</span>
                        <span>Email Us</span>
                        <span>+1 (555) 123-4567</span>
                    </div>

                    {/* Customer */}
                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold text-lg mb-2 text-(--dropdownh1) dark:text-(--dropdownh1)">Customer</h1>
                        <a href="/help" className="hover:underline">Help & Contact Us</a>
                        <a href="/returns" className="hover:underline">Returns & Refunds</a>
                        <a href="/shipping" className="hover:underline">Shipping Info</a>
                        <a href="/faqs" className="hover:underline">FAQs</a>
                        <a href="/track-order" className="hover:underline">About Group Gifting</a>
                    </div>

                    {/* Company */}
                    <div className="flex flex-col  gap-2">
                        <h1 className="font-bold text-lg mb-2 text-(--dropdownh1) dark:text-(--dropdownh1)">Company</h1>
                        <a href="/about-us" className="hover:underline">About Us</a>
                        <a href="/our-story" className="hover:underline">Our Story</a>
                        <a href="/careers" className="hover:underline">Careers</a>
                        <a href="/sustainability" className="hover:underline">Sustainability</a>
                        <a href="/press" className="hover:underline">Press</a>
                        <a href="/privacy" className="hover:underline">Privacy Policy</a>
                        <a href="/terms" className="hover:underline">Terms & Conditions</a>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="flex flex-col items-start space-y-3 text-sm">
                    <h1 className="font-semibold text-lg text-(--dropdownh1) dark:text-(--dropdownh1)">Get the latest news from us</h1>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="p-2 w-full bg-transparent border border-(--secondary) rounded text-(--secondary)"
                    />

                    <button className="p-2 px-4 bg-(--secondary) text-(--primary) rounded">
                        Subscribe
                    </button>

                    <p>
                        By signing up, you agree to our{" "}
                        <a className="underline">Privacy Policy</a> and{" "}
                        <a className="underline">Terms & Conditions</a>.
                    </p>
                </div>
            </div>

            {/* COPYRIGHT */}
            <div className="mt-12 bottom-0 text-left text-sm">
                &copy; 2024 Tohon. All rights reserved.
            </div>

        </footer>
    )
}

export default Footer
