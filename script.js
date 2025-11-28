const FORMSPREE_ID = "xdkvyoqy"; 

const SITE_DATA = {
    name: { en: "Notre Dame College Math Club", bn: "নটর ডেম কলেজ গণিত ক্লাব" },
    college: { en: "Notre Dame College Mymensingh", bn: "নটর ডেম কলেজ ময়মনসিংহ" },
    logo: "./assets/logo.jpg", 
    email: "m.radifhassan3@gmail.com",
    address: { en: "City Bypass, Barera, Mymensingh", bn: "সিটি বাইপাস, বাড়েরা, ময়মনসিংহ" },
    copyright: { en: "All rights reserved.", bn: "সর্বস্বত্ত্ব সংরক্ষিত।"},
    phone: { en: "+880 1609-321970", bn: "+৮৮০ ১৬০৯-৩২১৯৭০"},
    year: { en: "2025", bn: "২০২৫"},
    location: { en: "Mymensingh", bn: "ময়মনসিংহ"},
    events: { en: "Lectures, workshops and competitions.", bn: "লেকচার, কর্মশালা এবং প্রতিযোগিতা"},
    host: { en: "Want to host a talk?", bn: "আলোচক হতে আগ্রহী?" },
    encouragement: { en: "We encourage students to share their knowledge.", bn: "আমরা শিক্ষার্থীদেরকে তাদের জ্ঞান সবার মাঝে ছড়িয়ে দিতে উদ্বুদ্ধ করি।"},
    resources: { en: "Tools, YouTube channels, and papers we love.", bn: "আমাদের পছন্দের হাতিয়ার, ইউটিউব চ্যানেল ও গবেষণাপত্রসমূহ"},
    articles: { en: "Back to Articles", bn: "প্রবন্ধে ফিরে যান"}
}

const DICTIONARY = {
    'home': { en: 'Home', bn: 'হোম' },
    'events': { en: 'Events', bn: 'অনুষ্ঠানসমূহ' },
    'articles': { en: 'Articles', bn: 'প্রবন্ধ' },
    'resources': { en: 'Resources', bn: 'উপকরনসমূহ' },
    'committee': { en: 'Committee', bn: 'কার্যনির্বাহক সভা' },
    'contact': { en: 'Contact', bn: 'যোগাযোগ' },
    'join_now': { en: 'Join Now', bn: 'যোগ দিন' },
    'read_more': { en: 'Read More', bn: 'আরও পড়ুন' },
    'latest_news': { en: 'Latest News', bn: 'সর্বশেষ সংবাদ' },
    'hero_title': { en: 'In the glow of reasoning,', bn: 'যুক্তির দীপ্তিতে, ' },
    'hero_highlight': { en: 'let the light of Maths burn bright', bn: 'জ্বলে উঠুক গণিতের  জ্যোতি' },
    'hero_desc': { 
        en: 'Math is not about answers; its about proof and showing why something is true. Elegant proof expresses clarity, simplicity, and intellectual beauty in mathematics.', 
        bn: 'গণিত মানেই উত্তর না; এটা হলো যুক্তি এবং দেখানো কেন এটা সত্য হলো। যথাযথ প্রমাণ গণিতের মধ্যেকার স্বচ্ছতা, সরলতা এবং বুদ্ধিবৃত্তিক সৌন্দর্যকে প্রকাশ করে।'
    },
    'view_schedule': { en: 'View Schedule', bn: 'সময়সূচী দেখুন' },
    'register': { en: 'Register', bn: 'রেজিস্ট্রেশন' },
    'rsvp': { en: 'RSVP', bn: 'অংশগ্রহণ' },
    'submit_proposal': { en: 'Submit Proposal', bn: 'প্রস্তাবনা জমা দিন' },
    'send_message': { en: 'Send Message', bn: 'বার্তা পাঠান' },
    'name': { en: 'Name', bn: 'নাম' },
    'message': { en: 'Message', bn: 'বার্তা' },
    'equation_viz': { en: 'Equation Visualization', bn: 'সমীকরণ চিত্র' },
    'loading': { en: 'Loading...', bn: 'লোড হচ্ছে...' },
    'submit_draft': { en: 'Submit Draft', bn: 'খসড়া জমা দিন' },
    'article_prompt': { en: 'Have an interesting math topic to write about?', bn: 'গণিত নিয়ে লেখার মতো কোনো মজার বিষয় আছে?' }
};

const ICONS = {
    menu: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`,
    x: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`,
    calendar: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>`,
    clock: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
    location: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`,
    arrowRight: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>`,
    chevronLeft: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>`,
    chevronRight: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>`
};

const NEWS_SLIDES = [
    {
        id: 1,
        tag: { en: "Latest Event", bn: "সর্বশেষ ইভেন্ট" },
        title: { en: "National Math Olympiad Preparation", bn: "জাতীয় গণিত অলিম্পিয়াড প্রস্তুতি" },
        desc: { en: "Preparation round upcoming Wednesday in Room 402.", bn: "আগামী বুধবার ৪০২ নং কক্ষে প্রস্তুতি পর্ব অনুষ্ঠিত হবে" },
        color: "bg-ndcm-accent"
    },
    {
        id: 2,
        tag: { en: "Announcement", bn: "ঘোষণা" },
        title: { en: "Weekly Problem Solving Round", bn: "সাপ্তাহিক সমস্যা সমাধান পর্ব" },
        desc: { en: "Wednesday at 12:00 PM in Room 402.", bn: "বুধবার দুপুর ১২:০০ টায় ৪০২ নং কক্ষে।" },
        color: "bg-ndcm-primary"
    }
];

const EVENTS = [
    {
        title: { en: "Discussion about Bangladesh Math Olympiad Contents", bn: "বাংলাদেশ গণিত অলিম্পিয়াডের পাঠ্যসূচি নিয়ে আলোচনা" },
        date: { en: "DEC 03", bn: "০৩ ডিসেম্বর" },
        time: { en: "12:00 PM", bn: "দুপুর ১২:০০" },
        location: { en: "Room 402", bn: "৪০২ নং কক্ষ" },
        type: { en: "Lecture", bn: "লেকচার" },
        desc: { en: "An elaborative lectures and discussing about the problems came to BdMO past years and try to solve those questions according to ability", bn: "বিডিএমওতে আসা বিগত বছরের প্রশ্নপত্র নিয়ে বিস্তর আলোচনা এবং সামর্থ্য অনুযায়ী সেসব প্রশ্নের সমাধান করার চেষ্টা।" },
        color: "bg-blue-100 text-blue-800"
    }
    /*{
        title: { en: "Inter-College Integration Bee", bn: "আন্তঃকলেজ ইন্টিগ্রেশন বি" },
        date: { en: "NOV 02", bn: "০২ নভেম্বর" },
        time: { en: "2:30 PM", bn: "দুপুর ২:৩০" },
        location: { en: "Main Hall", bn: "মেইন হল" },
        type: { en: "Competition", bn: "প্রতিযোগিতা" },
        desc: { en: "Test your calculus skills against the best minds in Mymensingh.", bn: "ময়মনসিংহের সেরা মেধাবীদের সাথে আপনার ক্যালকুলাস দক্ষতা যাচাই করুন।" },
        color: "bg-purple-100 text-purple-800"
    },
    {
        title: { en: "Math Olympiad Prep", bn: "গণিত অলিম্পিয়াড প্রস্তুতি" },
        date: { en: "NOV 10", bn: "১০ নভেম্বর" },
        time: { en: "3:00 PM", bn: "বিকেল ৩:০০" },
        location: { en: "Room 201", bn: "কক্ষ ২০১" },
        type: { en: "Workshop", bn: "কর্মশালা" },
        desc: { en: "Problem-solving strategies for the upcoming National Math Olympiad.", bn: "আসন্ন জাতীয় গণিত অলিম্পিয়াডের জন্য সমস্যা সমাধানের কৌশল।" },
        color: "bg-orange-100 text-orange-800"
    },
    {
        title: { en: "Intro to Topology", bn: "টপোলজির পরিচিতি" },
        date: { en: "NOV 18", bn: "১৮ নভেম্বর" },
        time: { en: "4:00 PM", bn: "বিকেল ৪:০০" },
        location: { en: "College Auditorium", bn: "কলেজ অডিটোরিয়াম" },
        type: { en: "Lecture", bn: "লেকচার" },
        desc: { en: "Understanding shapes, surfaces, and why a coffee mug is a donut.", bn: "আকৃতি, তল এবং কেন একটি কফি মগ একটি ডোনাটের সমান তা বোঝা।" },
        color: "bg-blue-100 text-blue-800"
    }*/
];

const RESOURCES = [
    { title: "3Blue1Brown", type: {en: "Video", bn: "ভিডিও"}, desc: {en: "Visual explanations of complex math concepts.", bn: "জটিল গণিত ধারণার ভিজ্যুয়াল ব্যাখ্যা।"}, link: "https://www.3blue1brown.com/" },
    { title: "Project Euler", type: {en: "Tool", bn: "টুল"}, desc: {en: "Challenging mathematical/computer programming problems.", bn: "চ্যালেঞ্জিং গাণিতিক/কম্পিউটার প্রোগ্রামিং সমস্যা।"}, link: "https://projecteuler.net/" },
    { title: "Wolfram Alpha", type: {en: "Tool", bn: "টুল"}, desc: {en: "Computational intelligence engine.", bn: "কম্পিউটেশনাল ইন্টেলিজেন্স ইঞ্জিন।"}, link: "https://www.wolframalpha.com/" },
    { title: "The Art of Problem Solving", type: {en: "Course", bn: "কোর্স"}, desc: {en: "Resources for competition math.", bn: "প্রতিযোগিতামূলক গণিতের জন্য রিসোর্স।"}, link: "https://artofproblemsolving.com/" },
    { title: "Overleaf", type: {en: "Tool", bn: "টুল"}, desc: {en: "Online LaTeX editor for papers.", bn: "গবেষণাপত্রের জন্য অনলাইন LaTeX এডিটর।"}, link: "https://www.overleaf.com/" },
    { title: "arXiv Mathematics", type: {en: "Paper", bn: "পেপার"}, desc: {en: "Open access to preprints in Mathematics.", bn: "গণিতের গবেষণাপত্র বা প্রিপ্রিন্টের উন্মুক্ত ভাণ্ডার।"}, link: "https://arxiv.org/archive/math" },
    { title: "Numberphile", type: {en: "Video", bn: "ভিডিও"}, desc: {en: "Extensive discussion on some interesting topics in Mathematics.", bn: "গণিতের কিছু মজার বিষয় নিয়ে বিস্তর আলোচনা।"}, link: "https://www.numberphile.com/"},
    { title: "Computerphile", type: {en: "Video", bn: "ভিডিও"}, desc: {en: "Extensive discussion on some interesting topics in Computer Science.", bn: "কম্পিউটার বিজ্ঞানের মজার কিছু বিষয় নিয়ে বিস্তর আলোচনা।"}, link: "https://www.numberphile.com/"},
    { title: "Desmos", type: {en: "Tool", bn: "টুল"}, desc: {en: "Online Graph calculator for function visualization.", bn: "অন্তরকের দৃশ্যকল্প উপস্থাপনা করার জন্য অনলাইন ক্যালকুলেটর।"}, link: "https://www.desmos.com/calculator" },
    { title: "Reducible", type: {en: "Video", bn: "ভিডিও"}, desc: {en: "All about animating computer science concepts in a fun, interactive, and intuitive manner.", bn: "কম্পিউটার বিজ্ঞানের ধারণাগুলোকে মজার, অংশগ্রহণভিত্তিক এবং সহজবোধ্যভাবে গতিশীল চিত্রের মাধ্যমে উপস্থাপন করা।"}, link: "https://www.youtube.com/@Reducible" },
    { title: "Chamok Hasan", type: {en: "Video", bn: "ভিডিও"}, desc: {en: "Represnting the entire beauty and arising love for Mathematics through interactive discussion", bn: "অনশগ্রহনভিত্তিক আলোচনার মাধ্যমে গণিতের সম্পূর্ণ সৌন্দর্য উপস্থাপন করা এবং গণিতের প্রতি ভালোবাসা জাগিয়ে তোলা।"}, link: "https://www.youtube.com/@ChamokHasan"},
    { title: "BdMO", type:{en: "Catalog", bn: "তালিকা"}, desc: {en: "Math Olmypiad Booklists and Resources", bn: "গণিত অলিম্পিয়াডের বইয়ের তালিকা ও উপকরণসমূহ"}, link: "https://matholympiad.org.bd/math-related-book-list"}

];

const ARTICLES = [
    {
        id: 101,
        title: { en: "The Infinite Hotel Paradox", bn: "অসীম হোটেলের প্যারাডক্স" },
        author: { en: "Md Radif Hasan", bn: "মোঃ রাদ্বীফ হাসান" },
        role: { en: "President", bn: "সভাপতি" },
        date: { en: "Nov 26, 2025", bn: "২৬ নভেম্বর, ২০২৫" },
        readTime: { en: "1 min read", bn: "১ মিনিট পাঠ" },
        desc: { 
            en: "Imagine a hotel with infinite rooms, all occupied. What happens when a new guest arrives?", 
            bn: "ভাবুন এমন একটি হোটেল যার কক্ষ সংখ্যা অসীম এবং সবগুলোই পূর্ণ। নতুন অতিথি এলে কি হবে?" 
        },
        image: "https://imgs.search.brave.com/eya5oUzh8bfOlXm79fOZbzgGjQYzYCovr_CWi1zfQRA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1tYW5hZ2VyLnN0/YXJzaW5zaWRlci5j/b20vZ2FsbGVyeS8x/MDgwL25hXzY3ZGFk/NGMyZjM0MzkuanBn",

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
        author: { en: "Md Radif Hasan", bn: "মোঃ রাদ্বীফ হাসান" },
        role: { en: "President", bn: "সভাপতি" },
        date: { en: "Nov 26, 2025", bn: "২৬ নভেম্বর, ২০২৫" },
        readTime: { en: "1 min read", bn: "১ মিনিট পাঠ" },
        desc: { en: "Combining e, i, pi, 1, and 0 into a single elegant statement.", bn: "e, i, pi, 1 এবং 0 এর এক বিস্ময়কর মিলন।" },
        image: "https://cdn.mos.cms.futurecdn.net/cv2W6h6obxouAgNzfnJ6w3-700-80.jpg.webp",
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
    { name: {en: "Komol Chandra Sarker", bn: "কমল চন্দ্র সরকার"}, pos: {en: "Moderator", bn: "পরিচালক"}, group: {en: 'Lecturer at Mathematics Department', bn: 'প্রভাষক, গণিত বিভাগ'}, img: "./assets/committee/komol_sir.jpg" },
    { name: {en: "Md Radif Hasan", bn: "মোঃ রাদ্বীফ হাসান"}, pos: {en: "President", bn: "সভাপতি"}, group: {en: 'Science 1', bn: 'বিজ্ঞান ১'}, img: "./assets/committee/radif.jpg" },
    { name: {en: "Fahmid Rahman Sakif", bn: "ফাহমিদ রহমান সাকিফ"}, pos: {en: "General Secretary", bn: "সাধারণ সম্পাদক"}, group: {en: 'Science 1', bn: 'বিজ্ঞান ১'}, img: "https://api.dicebear.com/7.x/initials/svg?seed=FS&backgroundColor=b45309" },
    { name: {en: "Arif Mahmud Fahad", bn: "আরিফ মাহমুদ ফাহাদ"}, pos: {en: "Organizing Secretary", bn: "সাংগঠনিক সম্পাদক"}, group: {en: 'Science 1', bn: 'বিজ্ঞান ১'}, img: "./assets/committee/fahad.jpg" },
    { name: {en: "Syedul Mursalin", bn: "সাইয়্যেদুল মুরসালিন"}, pos: {en: "General Member Representative", bn: "সাধারণ সদস্য প্রতিনিধি"}, group: {en: 'Science 1', bn: 'বিজ্ঞান ১'}, img: "./assets/committee/mursalin.jpg" },
    { name: {en: "Masadunnobi Tapu", bn: "মাসাদুন্নবী তপু"}, pos: {en: "Publicity Secretary", bn: "প্রচার সম্পাদক"}, group: {en: 'Science 5', bn: 'বিজ্ঞান ৫'}, img: "https://api.dicebear.com/7.x/initials/svg?seed=MT&backgroundColor=b45309" },
    { name: {en: "Siyam Sheikh", bn: "সিয়াম শেখ"}, pos: {en: "Treasurer", bn: "কোষাধ্যক্ষ"}, group: {en: 'Science 1', bn: 'বিজ্ঞান ১'}, img: "./assets/committee/siyam.png" },
    { name: {en: "Md Tamim Hasan", bn: "মোঃ তামিম হাসান"}, pos: {en: "Educational Tour Secretary", bn: "শিক্ষা সফর বিষয়ক সম্পাদক"}, group: {en: 'Science 2', bn: 'বিজ্ঞান ২'}, img: "https://api.dicebear.com/7.x/initials/svg?seed=TH&backgroundColor=b45309" }



    
];

let state = {
    view: 'HOME',
    articleId: null, 
    lang: 'en', 
    menuOpen: false,
    currentSlide: 0,
    graphMode: 0 
};


const t = (key) => DICTIONARY[key] ? DICTIONARY[key][state.lang] : key;
const getLang = (obj) => obj ? obj[state.lang] : '';


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
    if(state.view === 'HOME') initMathAnimation(); 
}

function navigate(viewName, params = null) {
    state.view = viewName;
    if (params) state.articleId = params.id;
    state.menuOpen = false;
    window.scrollTo(0, 0);
    render();
    
    
    if (mathAnimationId) cancelAnimationFrame(mathAnimationId);
    
    if (viewName === 'HOME') {
        startSlider();
        initMathAnimation();
    }
}

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


function render() {
    app.innerHTML = `
        ${renderHeader()}
        <main class="flex-grow pt-16 min-h-[80vh]">
            ${renderView()}
        </main>
        ${renderFooter()}
    `;
    
    renderMath(); 
    
    if (state.view === 'HOME') {
        initMathAnimation();
        updateSliderUI();
    }
}

function renderHeader() {
    const navLinks = ['HOME', 'EVENTS', 'ARTICLES', 'RESOURCES', 'COMMITTEE', 'CONTACT'];
    
    const logoHtml = SITE_DATA.logo 
        ? `<img src="${SITE_DATA.logo}" alt="Logo" class="w-10 h-10 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform bg-white">`
        : `<div class="w-10 h-10 bg-ndcm-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md group-hover:bg-ndcm-accent transition-colors">Σ</div>`;

    return `
        <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 transition-all">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center gap-4">
                        <button onclick="toggleLanguage()" class="text-xs font-bold border border-slate-300 rounded px-2 py-1 text-slate-500 hover:text-ndcm-primary hover:border-ndcm-primary transition-colors">
                            ${state.lang === 'en' ? 'BN' : 'EN'}
                        </button>
                        <div class="flex items-center gap-3 cursor-pointer group" onclick="navigate('HOME')">
                            ${logoHtml}
                            <div class="flex flex-col hidden sm:flex">
                                <span class="font-bold text-slate-900 leading-tight">${getLang(SITE_DATA.name)}</span>
                                <span class="text-[10px] tracking-wider text-slate-500 font-medium uppercase">${getLang(SITE_DATA.location)}</span>
                            </div>
                        </div>
                    </div>

                    <div class="hidden md:flex items-center gap-1">
                        ${navLinks.map(link => `
                            <button onclick="navigate('${link}')" class="px-3 py-2 text-sm font-medium transition-colors duration-200 ${state.view === link ? 'text-ndcm-accent font-bold' : 'text-slate-600 hover:text-ndcm-primary'}">
                                ${t(link.toLowerCase())}
                            </button>
                        `).join('')}
                    </div>

                    <div class="md:hidden flex items-center">
                        <button onclick="state.menuOpen = !state.menuOpen; renderHeader();" class="text-slate-600 p-2">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${state.menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            
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


function renderHome() {
    return `
        <div class="fade-in">
            <section class="relative pt-8 pb-20 overflow-hidden">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           
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
                     
                        <div class="relative h-[400px] bg-slate-50 rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex items-center justify-center cursor-pointer" onclick="toggleGraphMode()">
                            <svg id="math-vis" width="100%" height="100%" viewBox="0 0 400 400" class="absolute inset-0 text-ndcm-accent opacity-80">
                                <path id="math-vis-path" d="" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                   
                            <div class="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg border border-gray-100 shadow text-sm font-mono text-ndcm-primary pointer-events-none">
                                <span id="math-label"></span>
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
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-slate-900">${t('events')}</h2>
                <p class="text-slate-600 mt-2">${getLang(SITE_DATA.events)}</p>
            </div>
            <div class="space-y-6">
                ${EVENTS.map(event => `
                    <div class="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6 items-start md:items-center">
                        <div class="flex-shrink-0 w-full md:w-32 bg-slate-50 rounded-lg p-4 text-center border border-gray-200">
                            <div class="text-xs font-bold text-slate-500 uppercase tracking-wide">Date</div>
                            <div class="text-xl font-bold text-ndcm-primary">${getLang(event.date)}</div>
                        </div>
                        <div class="flex-grow">
                            <div class="flex items-center gap-3 mb-2">
                                <span class="text-[10px] font-bold uppercase px-2 py-1 rounded ${event.color}">${getLang(event.type)}</span>
                                <div class="flex items-center gap-1 text-xs text-slate-500 font-medium">
                                    ${ICONS.clock} ${getLang(event.time)}
                                </div>
                            </div>
                            <h3 class="text-xl font-bold text-slate-900 mb-2">${getLang(event.title)}</h3>
                            <p class="text-slate-600 text-sm mb-3">${getLang(event.desc)}</p>
                            <div class="flex items-center gap-1 text-xs text-slate-500 font-medium">
                                ${ICONS.location} ${getLang(event.location)}
                            </div>
                        </div>
                        <div class="flex-shrink-0 w-full md:w-auto">
                            ${event.link ? `
                                <a href="${event.link}" target="_blank" class="block text-center w-full md:w-auto px-6 py-2 bg-ndcm-primary text-white text-sm font-bold rounded-lg hover:bg-ndcm-accent transition-all shadow-md">
                                    ${t('register')}
                                </a>
                            ` : `
                                <button class="w-full md:w-auto px-6 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-bold rounded-lg hover:bg-slate-50 hover:border-ndcm-primary hover:text-ndcm-primary transition-all">
                                    ${t('rsvp')}
                                </button>
                            `}
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="mt-16 bg-slate-900 rounded-2xl p-8 text-center text-white">
                <h3 class="text-xl font-bold mb-2">${getLang(SITE_DATA.host)}</h3>
                <p class="text-slate-300 text-sm mb-6">${getLang(SITE_DATA.encouragement)}</p>
                <button onclick="navigate('CONTACT')" class="bg-ndcm-gold hover:bg-yellow-600 text-white px-6 py-2 rounded-lg font-bold text-sm transition-colors">
                    ${t('submit_proposal')}
                </button>
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

            <div class="mt-12 text-center">
                <p class="text-slate-600 mb-4">${t('article_prompt')}</p>
                <button onclick="navigate('CONTACT')" class="inline-flex items-center gap-2 border border-ndcm-primary text-ndcm-primary px-6 py-2 rounded-full font-medium hover:bg-ndcm-primary hover:text-white transition-colors">
                    ${t('submit_draft')} ${ICONS.arrowRight}
                </button>
            </div>
        </div>
    `;
}

function renderSingleArticle() {
    const article = ARTICLES.find(a => a.id === state.articleId);
    if (!article) return renderArticles();

    return `
        <div class="fade-in max-w-3xl mx-auto px-4 py-12">
            <button onclick="navigate('ARTICLES')" class="mb-6 text-sm text-ndcm-primary hover:underline">← ${getLang(SITE_DATA.articles)}</button>
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
    return `
        <div class="fade-in max-w-6xl mx-auto px-4 py-12">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-slate-900">${t('resources')}</h2>
                <p class="text-slate-600 mt-2">${getLang(SITE_DATA.resources)}</p>
            </div>
            <div class="grid md:grid-cols-3 gap-6">
                ${RESOURCES.map(res => `
                    <a href="${res.link}" target="_blank" class="block bg-white p-6 rounded-xl border border-gray-100 card-hover group h-full">
                        <div class="flex justify-between items-start mb-4">
                            <span class="text-[10px] font-bold uppercase bg-slate-100 text-slate-600 px-2 py-1 rounded">${getLang(res.type)}</span>
                            <span class="text-slate-300 group-hover:text-ndcm-accent transition-colors">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                            </span>
                        </div>
                        <h3 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-ndcm-primary transition-colors">${res.title}</h3>
                        <p class="text-sm text-slate-600">${getLang(res.desc)}</p>
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
                        <p>${getLang(SITE_DATA.phone)}</p>
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
                &copy; ${getLang(SITE_DATA.year)} • ${getLang(SITE_DATA.name)} ${getLang(SITE_DATA.location)} • ${getLang(SITE_DATA.copyright)}
            </div>
        </footer>
    `;
}

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
        "$$ x=A\\sin(at+\\delta), y=B\\sin(bt) $$", 
        "$$ r = e^{\\sin\\theta} - 2\\cos(4\\theta) $$", 
        "$$ z = \\sin(x^2 + y^2) $$" 
    ];

    const labelEl = document.getElementById('math-label');
    if(labelEl) {
        labelEl.innerHTML = labels[state.graphMode];
        renderMath(); 
    }

    function animate() {
        t += 0.02;
        const path = document.getElementById('math-vis-path');
        if (!path || state.view !== 'HOME') return;

        const points = [];
        const width = 400, height = 400;
        const cx = width / 2, cy = height / 2;
        
        if (state.graphMode === 0) {
            const scale = 140;
            for (let i = 0; i <= 200; i++) {
                const theta = (i / 200) * Math.PI * 2;
                const x = cx + scale * Math.sin(3 * theta + t);
                const y = cy + scale * Math.sin(2 * theta);
                points.push(`${x},${y}`);
            }
        } else if (state.graphMode === 1) {
            const scale = 35;
            for (let i = 0; i <= 300; i++) {
                const theta = (i / 300) * Math.PI * 12; 
                const r = Math.exp(Math.sin(theta)) - 2 * Math.cos(4 * theta) + Math.pow(Math.sin((2 * theta - Math.PI) / 24), 5);
                const rotX = r * Math.cos(theta + t*0.5);
                const rotY = r * Math.sin(theta + t*0.5);
                points.push(`${cx + rotX * scale},${cy + rotY * scale}`);
            }
        } else {
            const scale = 30;
            for (let x = -5; x <= 5; x += 0.2) {
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

window.onpopstate = (e) => e.state && navigate(e.state.view);
init();