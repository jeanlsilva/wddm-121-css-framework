import jsLogo from "../assets/images/javascript-logo.png";
import reactLogo from "../assets/images/react-logo.png";
import nextJSLogo from "../assets/images/nextjs-logo.png";
import nodeJSLogo from "../assets/images/nodejs-logo.png"
import postgresLogo from "../assets/images/postgresql-logo.png";
import nestJSLogo from "../assets/images/nestjs-logo.svg";
import typeORMLogo from "../assets/images/typeorm-logo.png";
import materialUILogo from "../assets/images/material-ui-logo.png";

function Technologies() {
    return (
        <section id="2" class="lg:h-screen">
            <h1 class="text-5xl font-bold text-white my-24 lg:my-10">These are the technologies I rock</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="flex flex-col items-center justify-center">
                    <img src={jsLogo} alt="javascript" class="w-48" />
                </div>
                <div class="flex flex-col items-center justify-center">
                    <img src={reactLogo} alt="react" class="w-48" />
                </div>
                <div class="flex flex-col items-center justify-center">
                    <img src={nextJSLogo} alt="nextjs" class="w-64" />
                </div>
                <div class="flex flex-col items-center justify-center">
                    <img src={materialUILogo} alt="mui" class="w-64" />
                </div>
                <div class="flex flex-col items-center justify-center">
                    <img src={nodeJSLogo} alt="node" class="w-64" />
                </div>
                <div class="flex flex-col items-center justify-center">
                    <img src={nestJSLogo} alt="next" class="w-64" />
                </div>
                <div class="flex flex-col items-center justify-center">
                    <img src={postgresLogo} alt="postgres" class="w-64" />
                </div>
                <div class="flex flex-col items-center justify-center">
                    <img src={typeORMLogo} alt="typeorm" class="w-64" />
                </div>
            </div>
        </section>
    )
}

export default Technologies;