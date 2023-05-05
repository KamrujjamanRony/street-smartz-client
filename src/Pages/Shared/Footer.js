import React from 'react';

const Footer = () => {
    return (
        <footer className=' bg-base-200 text-base-content mt-12'>
            <div className="container mx-auto footer p-8">
                <div>
                    <span className="footer-title">Company</span>
                    <a href='www.google.com' className="link link-hover">About Us</a>
                    <a href='www.google.com' className="link link-hover">Contact</a>
                    <a href='www.google.com' className="link link-hover">Help and Support</a>
                    <a href='www.google.com' className="link link-hover">FAQs</a>
                </div>
                <div>
                    <a href='www.google.com' className="footer-title">Supports</a>
                    <a href='www.google.com' className="link link-hover">Courses</a>
                    <a href='www.google.com' className="link link-hover">Career</a>
                    <a href='www.google.com' className="link link-hover">Affiliate</a>
                    <a href='www.google.com' className="link link-hover">Events</a>
                </div>
                <div>
                    <a href='www.google.com'pan className="footer-title">Quick Links</a>
                    <a href='www.google.com' className="link link-hover">Partnership</a>
                    <a href='www.google.com' className="link link-hover">Become a Instructor</a>
                    <a href='www.google.com' className="link link-hover">Get the App</a>
                    <a href='www.google.com' className="link link-hover">Privacy policy</a>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@gmail.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-4 text-center text-gray-500'>
                <p>Copyright © 2022 - All right reserved by Street Smartz</p>
            </div>
        </footer>
    );
};

export default Footer;