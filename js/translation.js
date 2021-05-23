$(document).ready(function () {
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
        "My Blog": {
            cn: "我的部落格"
        }
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
        "© 2020 Kz Sherwin.": {
            cn: "© 2020 何孔正。"
        },
        "Hi there, I'm KZ Sherwin. People normally call me 'Kay-Zee', which is my initial.": {
            cn: "你好，我是何孔正。朋友们通常叫我'KZ', 也就是我名字的缩写。"
        },
        "I'm currently working as a software engineer at Shopee Singapore.": {
            cn: "我目前是一名在新加坡虾皮公司就职的软件工程师。"
        },
        "The reason why I choose to dive into IT field might involve with quite a lot of stuffs but the fun fact is that I'm really passionate about coding.": {
            cn: "为什么我会选择加入资讯工程领域或许牵涉蛮多的因素，但有趣的事实是我真的非常热衷于编程。"
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
        "Monash High Achiever Award": {
            cn: "莫纳什杰出成就奖"
        },
        "F-Secure Inter-Varsity Cyber Security Competition 2019 Semifinalist": {
            cn: "F-Secure网络安全校际竞争2019（半决赛）"
        },
        "Inti College Unicode Competition^": {
            cn: "英迪学院大学代码竞赛^"
        },
        "Facebook CTF 2019^": {
            cn: "面子书网络安全夺旗战^"
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
            cn: `<img class="project-img embed-responsive-item" src="images/ez_social_project_cover_cn.png" alt="Ez Social - KZSH Demo" />`,
            en: `<img class="project-img embed-responsive-item" src="images/ez_social_project_cover.png" alt="Ez Social - KZSH Demo" />`
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
        "Ez Social": {
            cn: "易吉社交"
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
        "Stock Management": {
            cn: "货物管理"
        },
        "Multi-Player": {
            cn: "多个玩家"
        },
        "Other Experience": {
            cn: "其他经验"
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
            cn: "提供学弟妹指导及学习技巧"
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
        "Ski Instructor": {
            cn: "滑雪教练"
        },
        "Conduct group/short-term lesson with up to 15 students (aged from 3 - 71)": {
            cn: "给予团课/短期课程，最高记录为一班15位学生（年龄介于3至71岁）"
        },
        "Assist in setting up the environment for ski competition": {
            cn: "协助设立滑雪竞赛现场"
        },
        "Software Engineer - Backend": {
            cn: "软件工程师 - 后端"
        },
        "Design and develop backend infrastructure": {
            cn: "设计与开发后端架构"
        },
        "Conduct system monitoring and performance optimisation": {
            cn: "监控系统及优化性能"
        },
        "Debug and fix errors": {
            cn: "锁定漏洞和处理异常"
        },
        "Brainstorm new ideas and create some mini-tools for team's day-to-day work": {
            cn: "构想新点子与创建些团队内部每天所需的小工具"
        },
        "More and still learning...": {
            cn: "还有很多，还在学习呢。。。"
        },
        "Jul'18 - Nov'18": {
            cn: "7月18年 - 11月18年"
        },
        "Dec'18 - Feb'19": {
            cn: "12月18年 - 2月19年"
        },
        "Dec'19 - Mar'20": {
            cn: "12月19年 - 3月20年"
        },
        "Jun'20 - Now": {
            cn: "6月20年 - 现在"
        },
        ".": {
            cn: "。"
        },
        "Currently Not Available": {
            cn: "暂且没有"
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
        },
        "Project Cover Editor": {
            cn: "项目封面编辑器"
        },
        "Save": {
            cn: "保存"
        },
        "Enter": {
            cn: "输入"
        },
        "Clear": {
            cn: "清除"
        },
        "Save": {
            cn: "保存"
        },
        "Upload Image": {
            cn: "上传照片"
        },
        "Image": {
            cn: "照片"
        },
        "Text": {
            cn: "字体"
        }
    }

    var translator = $('body').translate({ lang: "en", t: dict }); //use English

    function resetLanguageButtonStyle(button) {
        $('head style').remove();
    }

    function updateLanguageButtonStyle(button, lang_code) {
        $('head').append('<style>\
            #lang-' + lang_code + '::after {background-color: red;}\
            #lang-' + lang_code + ' {background-color:red; color:white;}\
        </style>');
    }

    $('#lang-cn').click(function () {
        translator.lang("cn");
        resetLanguageButtonStyle($('#lang-en'));
        updateLanguageButtonStyle($(this), 'cn');
    });

    $('#lang-en').click(function () {
        translator.lang("en");
        resetLanguageButtonStyle($('#lang-cn'));
        updateLanguageButtonStyle($(this), 'en');
    });
})
