$(document).ready(function(){
    var styleElem = "<style>\
                        #lang-en::after {background-color: red;} \
                        #lang-en {background-color:red; color:white;}\
                    </style>"
    $('head').append(styleElem);

    // Enable translation to full page js navigation bar
    $('.fp-tooltip').addClass('trn');

    var dict = {
        "Home": {
            cn: "主页"
        },
        "About Me": {
            cn: "我的简介"
        },
        "My Projects": {
            cn: "我的项目"
        },
        "Work Experience": {
            cn: "工作经验"
        },
        "Job Interests": {
            cn: "工作兴趣"
        },
        "Scroll Down": {
            cn: "滑至下方"
        },  
        "© 2019 Kz Sherwin.": {
            cn: "© 2019 何孔正。"
        },
        "Hi there, I'm KZ Sherwin. People normally call me 'Kay-Zee', which is my initial.": {
            cn: "你好，我是何孔正。朋友们通常叫我'KZ', 也就是我名字的缩写。"
        },
        "I'm a software developer from Malaysia.": {
            cn: "我是名来自马来西亚的软件开发师。"
        },
        "The reason why I choose this as my career might involve with quite a lot of stuffs but the fun fact is that I'm passionate about coding.": {
            cn: "为什么我会选择它为我的职业或许牵涉蛮多的因素，但有趣的事实是我非常热衷于编程。"
        },
        "For more information about my background, check it out below:": {
            cn: "关于更多我背景的详情，请查阅下方："
        },
        "Education": {
            cn: "教育"
        },
        "Skillsets": {
            cn: "技能"
        },
        "Awards": {
            cn: "奖状"
        },
        "Degree": {
            cn: "奖状"
        },
        "Courses": {
            cn: "课程"
        },
        "BCompSc, Monash University.": {
            cn: "莫纳什大学计算机科学学位"
        },
        "NxForce 2018 - Asia Cybersecurity Exchange": {
            cn: "NxForce 2018 - 亚洲网络安全交流"
        },
        "Programming": {
            cn: "程序语言"
        },
        "Frameworks": {
            cn: "软体框架"
        },
        "Others": {
            cn: "其他"
        },
        "Competitions": {
            cn: "竞赛"
        },
        "Professional": {
            cn: "专业"
        },
        "Monash - Petrosains Gerontechnology Challenge 2018 (1st Place)": {
            cn: "莫纳什 - 馬來西亞國家石油科学馆年长科技竞赛2018（冠军）"
        },
        "ISACA - Cybersecurity Fundamentals Certificate": {
            cn: "ISACA - 网络安全初级证书"
        },
        project1_img: {
            cn: `<img class="project-img embed-responsive-item" src="images/cps_project_cover_cn.png" alt="Inventory Management - KZSH Demo" />`,
            en: `<img class="project-img embed-responsive-item" src="images/cps_project_cover.png" alt="Inventory Management - KZSH Demo" />`
        },
        project2_img: {
            cn: `<img class="project-img embed-responsive-item" src="images/tictactoe_project_cover_cn.png" alt="Tic Tac Toe - KZSH Demo" />`,
            en: `<img class="project-img embed-responsive-item" src="images/tictactoe_project_cover.png" alt="Tic Tac Toe - KZSH Demo" />`
        },
        project3_img: {
            cn: `<img class="project-img embed-responsive-item" src="images/obj_detect_project_cover_cn.png" alt="Object Detection - KZSH Demo" />`,
            en: `<img class="project-img embed-responsive-item" src="images/obj_detect_project_cover.png" alt="Object Detection - KZSH Demo" />`
        },
        project4_img: {
            cn: `<img class="project-img embed-responsive-item" src="images/black_with_white_border.png" alt="Single Page App - KZSH Demo" />`,
            en: `<img class="project-img embed-responsive-item" src="images/cps_project_cover.png" alt="Single Page App - KZSH Demo" />`
        },
        "CPS": {
            cn: "库存管理"
        },
        "Tic Tac Toe": {
            cn: "井字游戏"
        },
        "Object Detection": {
            cn: "物体检测"
        },
        "Demo Website": {
            cn: "示范网站"
        },
        "View GitHub": {
            cn: "查看GitHub"
        },
        "View More": {
            cn: "查看更多"
        },
        "Trainee - Web Developer &amp; E-commerce": {
            cn: "培训生 - 网站开发师 & 电子商务"
        },
        "Design a simple and clean website": {
            cn: "设计简约干净的网站"
        },
        "Assist on product delivery": {
            cn: "协助产品输送"
        },
        "Learn new knowledge about social media advertising and providing related services for the company": {
            cn: "学习关于社交媒体广告的新知识及为公司提供相关服务"
        },
        "PASS Maths Tutor": {
            cn: "PASS 数学导师"
        },
        "Provide guidance and/or learning tips to juniors": {
            cn:"提供学弟妹指导及学习技巧"
        },
        "Assist them when they have difficulty towards teaching materials": {
            cn: "协助他们解决教材上的疑问"
        },
        "Prepare weekly lessons and challenges": {
            cn: "自备每周教学及一些小问题/挑战"
        },
        "Vacation Trainee – Advisory – Cyber Security": {
            cn: "假期培训生 – 顾问 – 网络安全"
        },
        "Conduct risk assessment against clients' system based on details provided by both client and government": {
            cn: "根据客户方及政府方所提供的资料，对客户系统进行风险评估"
        },
        "Web Developer": {
            cn: "网站开发师"
        },
        "Build simple landing webpage/e-commerce site using WordPress": {
            cn: "利用WordPress建立简单的展示网页/电子商务网站"
        },
        "Follow up task progress and requirements with clients":{
            cn: "与客户跟进任务进度及需求"
        },
        "Customize web apps using Laravel": {
            cn: "利用Laravel定制网络应用"
        },
        "Nov'17 - Jan'18": {
            cn: "11月17年 - 1月18年"
        },
        "Jul'18 - Nov'18": {
            cn: "7月18年 - 11月18年"
        },
        "Dec'18 - Feb'19": {
            cn: "12月18年 - 2月19年"
        },
        "Jul'19 - Nov'19": {
            cn: "7月19年 - 11月19年"
        },
        ".": {
            cn: "。"
        },
        "Have you ever had a thought of having something that can automate some specific tasks and format outputs into your desired presentation?": {
            cn: "您可曾想过拥有一样快速提高工作效率的东西，即可以自动化地处理一些特定且重复的工作，也可以将其资料显示成您要的模版呢？"
        },
        "Here comes to what you need: a fully customized web app/system.": {
            cn: "向您介绍：专为个人定制网络应用/系统。"
        },
        "For more details, send me an enquiry to ": {
            cn: "更多详情，请电邮您的询问至"
        },
        "my email": {
            cn: "我的电邮"
        },
        "Fully Customized": {
            cn: "个人定制"
        },
        "Web App/System": {
            cn: "网络应用/系统"
        },
        "Free 1-Year": {
            cn: "免费1年"
        },
        "Maintenance": {
            cn: "维修服务"
        },
        "High Quality": {
            cn: "优质质量"
        },
        "Reasonable Price": {
            cn: "合理价格"
        }
    }

    var translator = $('body').translate({lang: "en", t: dict}); //use English

    function resetLanguageButtonStyle(button){
        $('head style').remove();
    }

    function updateLanguageButtonStyle(button, lang_code){
        $('head').append('<style>\
            #lang-' + lang_code + '::after {background-color: red;}\
            #lang-' + lang_code + ' {background-color:red; color:white;}\
        </style>');
    }

    $('#lang-cn').click(function(){
        translator.lang("cn");
        resetLanguageButtonStyle($('#lang-en'));
        updateLanguageButtonStyle($(this), 'cn');
    });

    $('#lang-en').click(function(){
        translator.lang("en");
        resetLanguageButtonStyle($('#lang-cn'));
        updateLanguageButtonStyle($(this), 'en');
    });
})