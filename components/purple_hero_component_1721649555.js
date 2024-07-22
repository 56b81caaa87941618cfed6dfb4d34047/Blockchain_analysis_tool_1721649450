Vue.component("purple_hero_component_1721649555", {
    template: `
    <section id="hero-section-container">
        <div id="section-container" class="relative max-w-6xl mx-auto px-4 sm:px-6 bg-white">
            <div id="hero-content-container" class="pt-32 pb-16 md:pt-52 md:pb-32">
                <!-- Hero content -->
                <div id="hero-content" class="max-w-3xl mx-auto text-center" style="position: relative; z-index: 1">
                    <div id="announcement-text" class="mb-6" data-aos="fade-down">
                        <div id="announcement-text-inner" class="flex relative before:absolute before:inset-0 before:blur-md before:bg-purple-500">
                            <a id="announcement-link" class="flex-1 btn-sm py-0.5 transition duration-150 ease-in-out group relative before:absolute before:inset-0 before:rounded-full before:pointer-events-none shadow text-slate-300 hover:text-white before:bg-slate-800/50" href="#0" class="[background:linear-gradient(theme(colors.purple.500),_theme(colors.purple.500))_padding-box,_linear-gradient(theme(colors.purple.500),_theme(colors.purple.200)_75%,_theme(colors.transparent)_100%)_border-box]">
                                <span id="announcement-link-text" class="relative inline-flex items-center">
                                    Introducing our newest feature - Blockchain Intelligence 
                                    <span id="announcement-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-purple-500">-&gt;</span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div class="flex" id="hero-text-container">
                        <h1 id="hero-text" class="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4" data-aos="fade-down">Gain Unparalleled Insights into Blockchain Data</h1>
                    </div>
                    <div class="flex" id="sub-hero-text-container">
                        <p id="sub-hero-text" class="flex-1 text-lg mb-8 text-slate-300" data-aos="fade-down" data-aos-delay="200">Our AI-powered analytics suite helps you make sense of complex blockchain information in real-time.</p>
                    </div>
                    <div id="hero-buttons" class="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4" data-aos="fade-down" data-aos-delay="400">
                        <div id="get-started-button-container" class="flex">
                            <a id="get-started-button" class="flex-1 btn w-full transition duration-150 ease-in-out group text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white">
                                Get Started 
                                <span id="get-started-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-purple-500">-&gt;</span>
                            </a>
                        </div>
                        <div id="docs-button-container" class="flex">
                            <a id="docs-button" class="flex-1 btn bg-opacity-25 hover:bg-opacity-30 w-full transition duration-150 ease-in-out text-slate-200 hover:text-white bg-slate-900">
                                <svg id="docs-icon" class="shrink-0 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="fill-slate-300">
                                    <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                                </svg>
                                <span id="docs-button-text">Read the docs</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`,
    data() {
        return {
            expanded: false, 
            tab: null
        };
    },
});