import {Link, useLocation} from 'react-router-dom';

export default function Navbar() {
    const emailAddress = 'calebhubbs33@gmail.com';
    const location = useLocation();

    const {pathname} = location;

    const isAboutPage = pathname === '/about';
    const isBlogPage = pathname === '/blog';

    return (
        <nav className="text-gray-400 font-bold pt-8">
            <div className="mx-auto px-4 py-4 flex justify-end items-center">
                <ul className="flex space-x-6">
                    {isAboutPage && (
                        <>
                            <li>
                                <Link to="/" className="hover:text-slate-400 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blog"
                                    className="hover:text-slate-400 transition-colors"
                                >
                                    Blog
                                </Link>
                            </li>
                        </>
                    )}
                    {isBlogPage && (
                        <>
                            <li>
                                <Link
                                    to="/about"
                                    className="hover:text-slate-400 transition-colors"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="hover:text-slate-400 transition-colors">
                                    Home
                                </Link>
                            </li>
                        </>
                    )}
                    {!isAboutPage && !isBlogPage && (
                        <>
                            <li>
                                <Link
                                    to="/about"
                                    className="hover:text-slate-400 transition-colors"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blog"
                                    className="hover:text-slate-400 transition-colors"
                                >
                                    Blog
                                </Link>
                            </li>
                        </>
                    )}

                    <li>
                        <a
                            href={`mailto:${emailAddress}`}
                            className="ml-6 px-4 py-2 rounded-xl border transition-colors"
                        >
                            Get in Touch
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}