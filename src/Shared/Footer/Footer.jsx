import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className=" text-white">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Contact Us */}
                <div className="text-center bg-[#1F2937] px-6 py-10 space-y-2">
                    <h2 className="text-lg font-semibold">CONTACT US</h2>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>

                {/* Follow Us */}
                <div className="text-center bg-[#111827] px-6 py-10 space-y-2 ">
                    <h2 className="text-lg font-semibold">Follow US</h2>
                    <p>Join us on social media</p>
                    <div className="flex justify-center gap-4 text-xl">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                    </div>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="bg-black text-white text-center py-4 text-sm">
                Copyright © CulinaryCloud. All rights reserved.
            </div>
        </footer>
    );
}
