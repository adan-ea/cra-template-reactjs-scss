import { Link } from 'react-router-dom';
import useDarkMode from '../../hooks/useDarkMode';

const Header = () => {
    const [colorTheme, setColorTheme] = useDarkMode();
    return (
        <div className="sticky top-0 backdrop-blur mb-5 p-5 flex items-center justify-between text-slate-700 font-semibold text-sm leading-4 dark:text-slate-200">
            {/* Logo Start */}
            <div />
            {/* Logo End */}

            <div className="flex items-center">
                {/* Hamburger menu Start */}
                <div className="-my-1 ml-2 -mr-1 md:hidden">
                    <button
                        type="button"
                        className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                    >
                        <span className="sr-only"> Navigation</span>
                        <svg
                            width="24"
                            height="24"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
                {/* Hamburger menu End */}

                <div className="hidden md:flex items-center">
                    <nav>
                        <ul className="flex items-center space-x-8">
                            <li>
                                <Link
                                    to="/page1"
                                    className="hover:text-red-700 dark:hover:text-red-500"
                                >
                                    Page One
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="/error404"
                                    className="hover:text-red-700 dark:hover:text-red-500"
                                >
                                    Page Dosen&apos;t exist
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Dark mode toggle Start */}
                    <div className="flex items-center ml-6 pl-6 dark:border-slate-800">
                        <button
                            onClick={() => {
                                setColorTheme(colorTheme);
                            }}
                            type="button"
                            id="headlessui-listbox-button-3"
                            aria-haspopup="true"
                            aria-expanded="false"
                            aria-labelledby="headlessui-listbox-label-2 headlessui-listbox-button-undefined"
                        >
                            {/* sun icon from light mode Start */}
                            <span className="dark:hidden">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-6 h-6"
                                >
                                    <path
                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        className="fill-red-400/20 stroke-red-700"
                                    />
                                    <path
                                        d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                                        className="stroke-red-700"
                                    />
                                </svg>
                            </span>
                            {/* sun icon from light mode End */}
                            {/* Moon icon from dark mode Start */}
                            <span className="hidden dark:inline">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="w-6 h-6"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                                        className="fill-red-400/20"
                                    />
                                    <path
                                        d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                                        className="fill-red-700"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                                        className="fill-red-700"
                                    />
                                </svg>
                            </span>
                            {/* Moon icon from dark mode End */}
                        </button>
                    </div>
                    {/* Dark mode toggle End */}
                </div>
            </div>
        </div>
    );
};

export default Header;
