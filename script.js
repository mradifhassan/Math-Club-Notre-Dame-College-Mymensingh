/**
 * Math Club - Notre Dame College Mymensingh
 * Core Application Logic
 */

// --- CONFIGURATION & CONSTANTS ---

// Using a placeholder Formspree ID. User must replace this.
const FORMSPREE_ID = "xdkvyoqy"; // Replace with your actual Formspree form ID

const SITE_DATA = {
    name: { en: "Math Club Notre Dame College", bn: "গণিত ক্লাব নটর ডেম কলেজ" },
    college: { en: "Notre Dame College Mymensingh", bn: "নটর ডেম কলেজ ময়মনসিংহ" },
    email: "mathclub@ndcm.edu.bd",
    address: { en: "Barora, Mymensingh", bn: "বারেরা, ময়মনসিংহ" },
    phone: "+880 1234 567890"
};

// --- BILINGUAL CONTENT DATABASE ---

const DICTIONARY = {
    'home': { en: 'Home', bn: 'হোম' },
    'events': { en: 'Events', bn: 'ইভেন্ট' },
    'articles': { en: 'Articles', bn: 'আর্টিকেল' },
    'resources': { en: 'Resources', bn: 'রিসোর্স' },
    'committee': { en: 'Committee', bn: 'কমিটি' },
    'contact': { en: 'Contact', bn: 'যোগাযোগ' },
    'join_now': { en: 'Join Now', bn: 'যোগ দিন' },
    'read_more': { en: 'Read More', bn: 'আরও পড়ুন' },
    'latest_news': { en: 'Latest News', bn: 'সর্বশেষ সংবাদ' },
    'hero_title': { en: 'In the glow of reasoning,', bn: 'যুক্তির দীপ্তিতে, ' },
    'hero_highlight': { en: 'let the light of Maths burn bright', bn: 'জ্বলে উঠুক গণিতের  জ্যোতি' },
    'hero_desc': { 
        en: 'Welcome to the NDCM Math Club. A sanctuary for thinkers, solvers, and dreamers. Join us to unravel the mysteries of the universe through numbers.', 
        bn: 'এনডিসিএম গণিত ক্লাবে স্বাগতম। চিন্তাবিদ এবং সমাধানকারীদের জন্য একটি আশ্রয়স্থল। সংখ্যার মাধ্যমে মহাবিশ্বের রহস্য উন্মোচন করতে আমাদের সাথে যোগ দিন।'
    },
    'view_schedule': { en: 'View Schedule', bn: 'সময়সূচী দেখুন' },
    'register': { en: 'Register', bn: 'রেজিস্ট্রেশন' },
    'rsvp': { en: 'RSVP', bn: 'অংশগ্রহণ' },
    'submit_proposal': { en: 'Submit Proposal', bn: 'প্রস্তাবনা জমা দিন' },
    'send_message': { en: 'Send Message', bn: 'বার্তা পাঠান' },
    'name': { en: 'Name', bn: 'নাম' },
    'message': { en: 'Message', bn: 'বার্তা' },
    'equation_viz': { en: 'Equation Visualization', bn: 'সমীকরণ ভিজ্যুয়ালাইজেশন' },
    'loading': { en: 'Loading...', bn: 'লোড হচ্ছে...' }
};

const NEWS_SLIDES = [
    {
        id: 1,
        tag: { en: "Latest Event", bn: "সর্বশেষ ইভেন্ট" },
        title: { en: "National Math Olympiad Registration", bn: "জাতীয় গণিত অলিম্পিয়াড রেজিস্ট্রেশন" },
        desc: { en: "Selection round this Friday at Main Auditorium.", bn: "এই শুক্রবার মূল অডিটোরিয়ামে বাছাই পর্ব।" },
        color: "bg-ndcm-accent"
    },
    {
        id: 2,
        tag: { en: "Announcement", bn: "ঘোষণা" },
        title: { en: "Weekly Problem Solving", bn: "সাপ্তাহিক সমস্যা সমাধান" },
        desc: { en: "Thursday at 2:00 PM in Room 304.", bn: "বৃহস্পতিবার দুপুর ২:০০ টায় ৩০৪ নং কক্ষে।" },
        color: "bg-ndcm-primary"
    }
];

const EVENTS = [
    /*{
        title: { en: "Inter-College Integration Bee", bn: "আন্তঃকলেজ ইন্টিগ্রেশন বি" },
        date: { en: "DEC 03", bn: "০৩ ডিসেম্বর" },
        time: { en: "2:30 PM", bn: "দুপুর ২:৩০" },
        location: { en: "Main Hall", bn: "মেইন হল" },
        type: { en: "Competition", bn: "প্রতিযোগিতা" },
        desc: { en: "Test your calculus skills against the best minds in Mymensingh.", bn: "ময়মনসিংহের সেরা মেধাবীদের সাথে আপনার ক্যালকুলাস দক্ষতা যাচাই করুন।" },
        color: "bg-purple-100 text-purple-800",
        link: "https://docs.google.com/forms" // Placeholder for registration form
    },*/
    {
        title: { en: "The Beauty of Prime Numbers", bn: "মৌলিক সংখ্যার সৌন্দর্য" },
        date: { en: "DEC 03", bn: "০৩ ডিসেম্বর" },
        time: { en: "12:00 PM", bn: "দুপুর ১২:০০" },
        location: { en: "Room 402 | By Kamal Chandra Sarker", bn: "কক্ষ ৪০২ | কমল চন্দ্র সরকার" },
        type: { en: "Lecture", bn: "লেকচার" },
        desc: { en: "An exploration into the distribution of primes and Riemann Hypothesis.", bn: "মৌলিক সংখ্যার বণ্টন এবং রিম্যান হাইপোথিসিস নিয়ে আলোচনা।" },
        color: "bg-blue-100 text-blue-800"
    }
];

const ARTICLES = [
    {
        id: 101,
        title: { en: "The Infinite Hotel Paradox", bn: "অসীম হোটেলের প্যারাডক্স" },
        author: { en: "Aarav Rahman", bn: "আরভ রহমান" },
        role: { en: "President", bn: "প্রেসিডেন্ট" },
        date: { en: "Sep 20, 2024", bn: "২০ সেপ্টেম্বর, ২০২৪" },
        readTime: { en: "5 min read", bn: "৫ মিনিট পাঠ" },
        desc: { 
            en: "Imagine a hotel with infinite rooms, all occupied. What happens when a new guest arrives?", 
            bn: "ভাবুন এমন একটি হোটেল যার কক্ষ সংখ্যা অসীম এবং সবগুলোই পূর্ণ। নতুন অতিথি এলে কি হবে?" 
        },
        image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=600",
        // Content containing LaTeX
        content: {
            en: `
                <p>Hilbert's paradox of the Grand Hotel is a thought experiment which illustrates a counterintuitive property of infinite sets.</p>
                <p>Consider a hotel with a countably infinite number of rooms, all of which are occupied. One might think that the hotel cannot accommodate any newly arriving guests. However, we can accommodate a new guest by moving the guest in room $n$ to room $n+1$.</p>
                <div class="bg-gray-50 p-4 rounded border border-gray-200 my-4 text-center">
                    $$ n \\rightarrow n + 1 $$
                </div>
                <p>This leaves room 1 empty for the new guest. This works because the set of integers $\\mathbb{Z}$ has the same cardinality as the set of natural numbers $\\mathbb{N}$.</p>
            `,
            bn: `
                <p>হিলবার্টের গ্র্যান্ড হোটেলের প্যারাডক্স অসীম সেটের একটি অদ্ভুত বৈশিষ্ট্য তুলে ধরে।</p>
                <p>ধরুন একটি হোটেলে অসীম সংখ্যক কক্ষ আছে এবং সবগুলোই পূর্ণ। আমরা মনে করতে পারি নতুন কোনো অতিথিকে জায়গা দেওয়া সম্ভব নয়। কিন্তু, আমরা যদি $n$ নম্বর কক্ষের অতিথিকে $n+1$ নম্বর কক্ষে পাঠিয়ে দেই:</p>
                <div class="bg-gray-50 p-4 rounded border border-gray-200 my-4 text-center">
                    $$ n \\rightarrow n + 1 $$
                </div>
                <p>তাহলে ১ নম্বর কক্ষটি খালি হয়ে যায়। এটি সম্ভব কারণ পূর্ণসংখ্যা $\\mathbb{Z}$ এবং স্বাভাবিক সংখ্যা $\\mathbb{N}$ এর কার্ডিনালিটি সমান।</p>
            `
        }
    },
    {
        id: 102,
        title: { en: "Euler's Identity", bn: "অয়লারের অভেদ" },
        author: { en: "Ishita Jahan", bn: "ইশিতা জাহান" },
        role: { en: "Vice President", bn: "ভাইস প্রেসিডেন্ট" },
        date: { en: "Oct 12, 2024", bn: "১২ অক্টোবর, ২০২৪" },
        readTime: { en: "6 min read", bn: "৬ মিনিট পাঠ" },
        desc: { en: "Combining e, i, pi, 1, and 0 into a single elegant statement.", bn: "e, i, pi, 1 এবং 0 এর এক বিস্ময়কর মিলন।" },
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600",
        content: {
            en: `
                <p>Often called the most beautiful equation in mathematics, Euler's identity connects five fundamental constants:</p>
                <div class="bg-gray-50 p-4 rounded border border-gray-200 my-4 text-center">
                    $$ e^{i\\pi} + 1 = 0 $$
                </div>
                <p>It is a special case of Euler's formula, which states that for any real number $x$:</p>
                <div class="text-center my-2">$$ e^{ix} = \\cos x + i\\sin x $$</div>
            `,
            bn: `
                <p>গণিতের সবচেয়ে সুন্দর সমীকরণ হিসেবে পরিচিত অয়লারের অভেদ পাঁচটি মৌলিক ধ্রুবককে সংযুক্ত করে:</p>
                <div class="bg-gray-50 p-4 rounded border border-gray-200 my-4 text-center">
                    $$ e^{i\\pi} + 1 = 0 $$
                </div>
                <p>এটি অয়লারের সূত্রের একটি বিশেষ রূপ, যেখানে যেকোনো বাস্তব সংখ্যা $x$ এর জন্য:</p>
                <div class="text-center my-2">$$ e^{ix} = \\cos x + i\\sin x $$</div>
            `
        }
    }
];

const COMMITTEE = [
    { name: {en: "Md Radif Hasan", bn: "মোঃ রাদ্বীফ হাসান"}, pos: {en: "President", bn: "প্রেসিডেন্ট"}, group: {en: 'Science 1', bn: 'বিজ্ঞান ১'}, img: "./assets/committee/radif.jpg" },
    { name: {en: "Fahmid Rahman Sakif", bn: "ফাহমিদ রহমান সাকিফ"}, pos: {en: "General Secretary", bn: "সাধারণ সম্পাদক"}, group: {en: 'Science 1', bn: 'বিজ্ঞান ১'}, img: "https://api.dicebear.com/7.x/initials/svg?seed=SS&backgroundColor=b45309" },
    { name: {en: "Arif Mahmud Fahad", bn: "আরিফ মাহমুদ ফাহাদ"}, pos: {en: "Organizing Secretary", bn: "সাংগঠনিক সম্পাদক"}, group: {en: 'Science 1', bn: 'বিজ্ঞান ১'}, img: "../assets/committee/fahad.jpg" },
    
];

// --- STATE MANAGEMENT ---

let state = {
    view: 'HOME',
    articleId: null, // For single article view
    lang: 'en', // 'en' or 'bn'
    menuOpen: false,
    currentSlide: 0,
    graphMode: 0 // 0: Lissajous, 1: Butterfly, 2: SineGrid
};

// --- HELPER FUNCTIONS ---

const t = (key) => DICTIONARY[key] ? DICTIONARY[key][state.lang] : key;
const getLang = (obj) => obj ? obj[state.lang] : '';

// --- NAVIGATION & RENDERING CORE ---

const app = document.getElementById('app');
let mathAnimationId;
let sliderInterval;

function init() {
    updateBodyLang();
    render();
    startSlider();
}

function updateBodyLang() {
    document.body.classList.remove('lang-en', 'lang-bn');
    document.body.classList.add(`lang-${state.lang}`);
}

function toggleLanguage() {
    state.lang = state.lang === 'en' ? 'bn' : 'en';
    updateBodyLang();
    render();
    if(state.view === 'HOME') initMathAnimation(); // Re-init graph for labels if any
}

function navigate(viewName, params = null) {
    state.view = viewName;
    if (params) state.articleId = params.id;
    state.menuOpen = false;
    window.scrollTo(0, 0);
    render();
    
    // Lifecycle hooks
    if (mathAnimationId) cancelAnimationFrame(mathAnimationId);
    
    if (viewName === 'HOME') {
        startSlider();
        initMathAnimation();
    }
}

// LaTeX Auto-Render trigger
function renderMath() {
    if (window.renderMathInElement) {
        renderMathInElement(document.body, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false},
                {left: '\\(', right: '\\)', display: false},
                {left: '\\[', right: '\\]', display: true}
            ],
            throwOnError : false
        });
    }
}

// --- RENDERERS ---

function render() {
    app.innerHTML = `
        ${renderHeader()}
        <main class="flex-grow pt-16 min-h-[80vh]">
            ${renderView()}
        </main>
        ${renderFooter()}
    `;
    
    renderMath(); // Apply LaTeX
    
    if (state.view === 'HOME') {
        initMathAnimation();
        updateSliderUI();
    }
}

function renderHeader() {
    const navLinks = ['HOME', 'EVENTS', 'ARTICLES', 'RESOURCES', 'COMMITTEE', 'CONTACT'];
    
    return `
        <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 transition-all">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <!-- Logo & Lang Toggle -->
                    <div class="flex items-center gap-4">
                        <button onclick="toggleLanguage()" class="text-xs font-bold border border-slate-300 rounded px-2 py-1 text-slate-500 hover:text-ndcm-primary hover:border-ndcm-primary transition-colors">
                            ${state.lang === 'en' ? 'BN' : 'EN'}
                        </button>
                        <div class="flex items-center gap-3 cursor-pointer group" onclick="navigate('HOME')">
                            <div class="w-10 h-10 bg-ndcm-primary text-white rounded-lg flex items-center justify-center font-bold text-xl shadow-md group-hover:bg-ndcm-accent transition-colors">
                                Σ
                            </div>
                            <div class="flex flex-col hidden sm:flex">
                                <span class="font-bold text-slate-900 leading-tight">${getLang(SITE_DATA.name)}</span>
                                <span class="text-[10px] tracking-wider text-slate-500 font-medium uppercase">Mymensingh</span>
                            </div>
                        </div>
                    </div>

                    <!-- Desktop Nav -->
                    <div class="hidden md:flex items-center gap-1">
                        ${navLinks.map(link => `
                            <button onclick="navigate('${link}')" class="px-3 py-2 text-sm font-medium transition-colors duration-200 ${state.view === link ? 'text-ndcm-accent font-bold' : 'text-slate-600 hover:text-ndcm-primary'}">
                                ${t(link.toLowerCase())}
                            </button>
                        `).join('')}
                    </div>

                    <!-- Mobile Menu Button -->
                    <div class="md:hidden flex items-center">
                        <button onclick="state.menuOpen = !state.menuOpen; renderHeader();" class="text-slate-600 p-2">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${state.menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Mobile Menu -->
            ${state.menuOpen ? `
                <div class="md:hidden bg-white border-t border-gray-100 mobile-menu-enter shadow-lg absolute w-full">
                    <div class="px-2 pt-2 pb-3 space-y-1">
                        ${navLinks.map(link => `
                            <button onclick="navigate('${link}')" class="block w-full text-left px-3 py-3 rounded-md text-base font-medium ${state.view === link ? 'bg-blue-50 text-ndcm-accent' : 'text-slate-600 hover:bg-gray-50'}">
                                ${t(link.toLowerCase())}
                            </button>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        </nav>
    `;
}

function renderView() {
    switch(state.view) {
        case 'HOME': return renderHome();
        case 'EVENTS': return renderEvents();
        case 'ARTICLES': return renderArticles();
        case 'ARTICLE_SINGLE': return renderSingleArticle();
        case 'RESOURCES': return renderResources();
        case 'COMMITTEE': return renderCommittee();
        case 'CONTACT': return renderContact();
        default: return renderHome();
    }
}

// --- VIEW COMPONENTS ---

function renderHome() {
    return `
        <div class="fade-in">
            <section class="relative pt-8 pb-20 overflow-hidden">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <!-- News Ticker -->
                    <div class="mb-12">
                        <div class="slider-container bg-slate-50 rounded-xl border border-gray-200 h-28 shadow-inner relative overflow-hidden">
                            <div class="slider-track h-full" id="slider-track">
                                ${NEWS_SLIDES.map(slide => `
                                    <div class="slide flex flex-col justify-center px-8 md:px-12 h-full relative">
                                        <div class="absolute left-0 top-0 bottom-0 w-1.5 ${slide.color}"></div>
                                        <div class="flex items-center gap-3 mb-1">
                                            <span class="text-[10px] font-bold uppercase tracking-wider text-white px-2 py-0.5 rounded-full ${slide.color}">
                                                ${getLang(slide.tag)}
                                            </span>
                                        </div>
                                        <h3 class="font-bold text-lg md:text-xl text-slate-800 truncate">${getLang(slide.title)}</h3>
                                        <p class="text-sm text-slate-600 truncate">${getLang(slide.desc)}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>

                    <!-- Hero Grid -->
                    <div class="grid lg:grid-cols-2 gap-12 items-center">
                        <div class="space-y-6">
                            <h1 class="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                                ${t('hero_title')} <br />
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-ndcm-primary to-ndcm-accent">${t('hero_highlight')}</span>
                            </h1>
                            <p class="text-lg text-slate-600 leading-relaxed max-w-lg">
                                ${t('hero_desc')}
                            </p>
                            <div class="flex flex-wrap gap-4 pt-4">
                                <button onclick="navigate('EVENTS')" class="px-8 py-3 bg-ndcm-primary text-white rounded-lg font-bold hover:bg-ndcm-accent transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                    ${t('view_schedule')}
                                </button>
                                <button onclick="navigate('CONTACT')" class="px-8 py-3 bg-white text-slate-900 border border-gray-200 rounded-lg font-bold hover:border-ndcm-accent hover:text-ndcm-accent transition-all">
                                    ${t('join_now')}
                                </button>
                            </div>
                        </div>
                        
                        <!-- Graph Visualization Area -->
                        <div class="relative h-[400px] bg-slate-50 rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex items-center justify-center cursor-pointer" onclick="toggleGraphMode()">
                            <svg id="math-vis" width="100%" height="100%" viewBox="0 0 400 400" class="absolute inset-0 text-ndcm-accent opacity-80">
                                <path id="math-vis-path" d="" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <!-- LaTeX Equation Overlay -->
                            <div class="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg border border-gray-100 shadow text-sm font-mono text-ndcm-primary pointer-events-none">
                                <span id="math-label">$$ y = \sin(ax + t) $$</span>
                            </div>
                            <div class="absolute top-4 right-4 text-xs text-slate-400">Click to change graph</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `;
}

function renderEvents() {
    return `
        <div class="fade-in max-w-5xl mx-auto px-4 py-12">
            <h2 class="text-3xl font-bold text-slate-900 text-center mb-12">${t('events')}</h2>
            <div class="space-y-6">
                ${EVENTS.map(event => `
                    <div class="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6 items-start md:items-center">
                        <div class="flex-shrink-0 w-full md:w-32 bg-slate-50 rounded-lg p-4 text-center border border-gray-200">
                            <div class="text-xs font-bold text-slate-500 uppercase">Date</div>
                            <div class="text-xl font-bold text-ndcm-primary">${getLang(event.date)}</div>
                        </div>
                        <div class="flex-grow">
                            <div class="flex items-center gap-3 mb-2">
                                <span class="text-[10px] font-bold uppercase px-2 py-1 rounded ${event.color}">${getLang(event.type)}</span>
                                <div class="text-xs text-slate-500 font-medium">${getLang(event.time)}</div>
                            </div>
                            <h3 class="text-xl font-bold text-slate-900 mb-2">${getLang(event.title)}</h3>
                            <p class="text-slate-600 text-sm mb-3">${getLang(event.desc)}</p>
                            <div class="text-xs text-slate-500 font-medium">📍 ${getLang(event.location)}</div>
                        </div>
                        <div class="flex-shrink-0 w-full md:w-auto">
                            ${event.link ? `
                                <a href="${event.link}" target="_blank" class="block text-center w-full md:w-auto px-6 py-2 bg-ndcm-primary text-white text-sm font-bold rounded-lg hover:bg-ndcm-accent transition-all shadow-md">
                                    ${t('register')}
                                </a>
                            ` : `
                                <button class="w-full md:w-auto px-6 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-bold rounded-lg hover:bg-slate-50">
                                    ${t('rsvp')}
                                </button>
                            `}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderArticles() {
    return `
        <div class="fade-in max-w-7xl mx-auto px-4 py-12">
            <h2 class="text-3xl font-bold text-slate-900 text-center mb-16">${t('articles')}</h2>
            <div class="grid md:grid-cols-2 gap-8">
                ${ARTICLES.map(article => `
                    <div class="bg-white rounded-xl overflow-hidden border border-gray-100 card-hover flex flex-col md:flex-row h-full cursor-pointer" onclick="navigate('ARTICLE_SINGLE', {id: ${article.id}})">
                        <div class="md:w-2/5 h-48 md:h-auto bg-gray-200 relative overflow-hidden">
                            <img src="${article.image}" alt="Article" class="absolute inset-0 w-full h-full object-cover">
                        </div>
                        <div class="p-6 md:w-3/5 flex flex-col justify-between">
                            <div>
                                <h3 class="text-xl font-bold text-slate-900 mb-2 hover:text-ndcm-primary">${getLang(article.title)}</h3>
                                <p class="text-slate-600 text-sm mb-4 line-clamp-2">${getLang(article.desc)}</p>
                            </div>
                            <div class="flex items-center gap-3 pt-4 border-t border-gray-100">
                                <div class="text-xs">
                                    <div class="font-bold text-slate-900">${getLang(article.author)}</div>
                                    <div class="text-slate-500">${getLang(article.date)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderSingleArticle() {
    const article = ARTICLES.find(a => a.id === state.articleId);
    if (!article) return renderArticles();

    return `
        <div class="fade-in max-w-3xl mx-auto px-4 py-12">
            <button onclick="navigate('ARTICLES')" class="mb-6 text-sm text-ndcm-primary hover:underline">← Back to Articles</button>
            <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">${getLang(article.title)}</h1>
            <div class="flex items-center gap-4 mb-8 text-sm text-slate-500 border-b border-gray-100 pb-4">
                <span class="font-bold text-slate-900">${getLang(article.author)}</span>
                <span>•</span>
                <span>${getLang(article.date)}</span>
                <span>•</span>
                <span>${getLang(article.readTime)}</span>
            </div>
            
            <img src="${article.image}" class="w-full h-64 md:h-96 object-cover rounded-xl mb-8 shadow-sm">
            
            <div class="article-content text-slate-700 text-lg leading-relaxed">
                ${getLang(article.content)}
            </div>
        </div>
    `;
}

function renderCommittee() {
    return `
        <div class="fade-in max-w-7xl mx-auto px-4 py-12">
            <h2 class="text-3xl font-bold text-slate-900 text-center mb-16">${t('committee')}</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${COMMITTEE.map(member => `
                    <div class="bg-white rounded-xl overflow-hidden border border-gray-100 text-center p-6 card-hover">
                        <div class="w-24 h-24 mx-auto bg-gray-100 rounded-full mb-4 overflow-hidden border-2 border-ndcm-light">
                            <img src="${member.img}" class="w-full h-full object-cover">
                        </div>
                        <h3 class="text-lg font-bold text-slate-900">${getLang(member.name)}</h3>
                        <div class="text-xs font-bold text-ndcm-accent uppercase tracking-wider mb-2">${getLang(member.pos)}</div>
                        <div class="text-sm text-slate-500">${getLang(member.group)}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderResources() {
    const resources = [
        { title: "3Blue1Brown", desc: "Visual Math", link: "https://www.3blue1brown.com/" },
        { title: "Wolfram Alpha", desc: "Computational Engine", link: "https://www.wolframalpha.com/" },
        { title: "Overleaf", desc: "LaTeX Editor", link: "https://www.overleaf.com/" }
    ];
    return `
        <div class="fade-in max-w-4xl mx-auto px-4 py-12">
            <h2 class="text-3xl font-bold text-slate-900 text-center mb-16">${t('resources')}</h2>
            <div class="grid md:grid-cols-3 gap-6">
                ${resources.map(res => `
                    <a href="${res.link}" target="_blank" class="bg-white p-6 rounded-xl border border-gray-100 card-hover text-center">
                        <h3 class="font-bold text-lg mb-2">${res.title}</h3>
                        <p class="text-slate-600 text-sm">${res.desc}</p>
                    </a>
                `).join('')}
            </div>
        </div>
    `;
}

function renderContact() {
    return `
        <div class="fade-in max-w-4xl mx-auto px-4 py-12">
            <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 grid md:grid-cols-5">
                <div class="md:col-span-2 bg-ndcm-primary text-white p-8">
                    <h2 class="text-2xl font-bold mb-6">${t('contact')}</h2>
                    <div class="space-y-4 text-sm opacity-90">
                        <p>${SITE_DATA.email}</p>
                        <p>${getLang(SITE_DATA.address)}</p>
                        <p>${SITE_DATA.phone}</p>
                    </div>
                </div>
                <div class="md:col-span-3 p-8">
                    <form action="https://formspree.io/f/${FORMSPREE_ID}" method="POST" class="space-y-4">
                        <input type="text" name="name" placeholder="${t('name')}" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-ndcm-primary" required>
                        <input type="email" name="email" placeholder="Email" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-ndcm-primary" required>
                        <textarea name="message" rows="4" placeholder="${t('message')}" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-ndcm-primary" required></textarea>
                        <button type="submit" class="w-full bg-ndcm-primary text-white font-bold py-3 rounded-lg hover:bg-ndcm-accent transition-colors">
                            ${t('send_message')}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `;
}

function renderFooter() {
    return `
        <footer class="bg-white border-t border-gray-100 py-8 mt-auto">
            <div class="max-w-7xl mx-auto px-4 text-center text-xs text-slate-500">
                &copy; 2024 ${getLang(SITE_DATA.name)}. All rights reserved.
            </div>
        </footer>
    `;
}

// --- LOGIC: SLIDER & GRAPH ---

function startSlider() {
    if (sliderInterval) clearInterval(sliderInterval);
    sliderInterval = setInterval(() => {
        state.currentSlide = (state.currentSlide + 1) % NEWS_SLIDES.length;
        updateSliderUI();
    }, 5000);
}

function updateSliderUI() {
    const track = document.getElementById('slider-track');
    if (track) track.style.transform = `translateX(-${state.currentSlide * 100}%)`;
}

function toggleGraphMode() {
    state.graphMode = (state.graphMode + 1) % 3;
    initMathAnimation();
}

function initMathAnimation() {
    let t = 0;
    const labels = [
        "$$ x=A\\sin(at+\\delta), y=B\\sin(bt) $$", // Lissajous
        "$$ r = e^{\\sin\\theta} - 2\\cos(4\\theta) $$", // Butterfly
        "$$ z = \\sin(x^2 + y^2) $$" // Ripple
    ];

    // Update Label
    const labelEl = document.getElementById('math-label');
    if(labelEl) {
        labelEl.innerHTML = labels[state.graphMode];
        renderMath(); // Re-render LaTeX for the new label
    }

    function animate() {
        t += 0.02;
        const path = document.getElementById('math-vis-path');
        if (!path || state.view !== 'HOME') return;

        const points = [];
        const width = 400, height = 400;
        const cx = width / 2, cy = height / 2;
        
        if (state.graphMode === 0) {
            // Lissajous
            const scale = 140;
            for (let i = 0; i <= 200; i++) {
                const theta = (i / 200) * Math.PI * 2;
                const x = cx + scale * Math.sin(3 * theta + t);
                const y = cy + scale * Math.sin(2 * theta);
                points.push(`${x},${y}`);
            }
        } else if (state.graphMode === 1) {
            // Butterfly Curve
            const scale = 35;
            for (let i = 0; i <= 300; i++) {
                const theta = (i / 300) * Math.PI * 12; // Multiple loops
                const r = Math.exp(Math.sin(theta)) - 2 * Math.cos(4 * theta) + Math.pow(Math.sin((2 * theta - Math.PI) / 24), 5);
                // Rotate whole graph with time t
                const rotX = r * Math.cos(theta + t*0.5);
                const rotY = r * Math.sin(theta + t*0.5);
                points.push(`${cx + rotX * scale},${cy + rotY * scale}`);
            }
        } else {
            // 3D-ish Ripple Grid (Simple Isymetric Projection)
            const scale = 30;
            for (let x = -5; x <= 5; x += 0.2) {
                // Just drawing one cross section line for performance in SVG path
                const yVal = Math.sin(x*x + t) * 2; 
                const isoX = cx + (x * scale);
                const isoY = cy + (yVal * 10);
                points.push(`${isoX},${isoY}`);
            }
        }

        path.setAttribute('d', `M ${points.join(' L ')}`);
        mathAnimationId = requestAnimationFrame(animate);
    }

    if (mathAnimationId) cancelAnimationFrame(mathAnimationId);
    mathAnimationId = requestAnimationFrame(animate);
}

// --- BOOTSTRAP ---
window.onpopstate = (e) => e.state && navigate(e.state.view);
init();