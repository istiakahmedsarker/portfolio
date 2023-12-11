import { FaGithub, FaDownload } from "react-icons/fa";

const Banner = () => {
    return (
        <div>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h2>
                <p className="text-xl mb-4 mx-auto">Hi!, I'm Istiak. A passionate Front-end React web developer.</p>
                <div className="text-3xl flex gap-4 items-center">
                    <a
                        href="https://github.com/istiakahmedsarker"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border-b-4 border-teal-700 px-2 py-1 rounded hover:border-teal-300"
                    >
                        <FaGithub className="text-2xl" />
                        <span className="font-bold">Github</span>
                    </a>
                    <a
                        href="/path-to-your-resume.pdf"
                        download="IstiakAhmedSarkerResume.pdf"
                        className="flex items-center gap-2 border-b-4 border-teal-700 px-2 py-1 rounded hover:border-teal-300"
                    >
                        <FaDownload className="text-2xl"/>
                        <span className="font-bold">Resume</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
