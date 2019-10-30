<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="dns-prefetch" href="//fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('css/custom.css') }}" rel="stylesheet">
        <link href="{{ asset('css/custom-mobile.css') }}" rel="stylesheet">
        <link href="{{ asset('css/face.css') }}" rel="stylesheet">

        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

        <!-- Animate CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">

    </head>
    <body>
        <div id="app">

            <!-- Section 1-->
            <section class="section section1">

                <!-- Top Navbar -->
                <nav class="navbar navbar-expand-md navbar-light bg-transparent position-fixed fixed-top">
                    <div class="container-fluid col-md-12 mt-4">
                        <svg class="menu animated fadeInUp" width="43" height="23" viewBox="0 0 43 23" xlmns="http://www.w3.org/2000/svg">
                            <line y1="1.5" x2="43" y2="1.5" stroke="white" stroke-width="3" />
                            <line y1="11.5" x2="28" y2="11.5" stroke="white" stroke-width="3" />
                            <line y1="21.5" x2="16" y2="21.5" stroke="white" stroke-width="3" />
                        </svg>
                    </div>
                </nav>

                <!-- Lightbulb -->
                <svg class="lightbulb" width="175" height="207" viewBox="0 0 175 207" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip-lightbulb)">
                        <path class="glow" filter="url(#sofGlow)" d="M70.398 153.958C86.7874 161.614 106.421 154.455 114.064 138.036C118.06 129.451 118.157 119.436 114.434 110.903C111.919 103.979 117.043 94.092 117.2 94.0348C117.45 93.4982 117.542 93.0189 117.314 92.3895C117.142 91.9174 116.706 91.4526 116.278 91.2524L88.9622 78.4918C88.4266 78.2415 87.8982 78.256 87.427 78.4278C86.9558 78.5996 86.4918 79.0361 86.242 79.5727C86.1921 79.68 82.0323 90.0178 75.1211 92.5378C74.9641 92.5951 74.807 92.6524 74.6499 92.7097C65.7895 95.4949 58.4011 101.842 54.5049 110.213C46.8623 126.632 54.0085 146.301 70.398 153.958ZM76.2862 96.479C76.4432 96.4217 76.7574 96.3072 76.8073 96.1999C83.083 93.6443 87.2795 86.5898 89.035 83.0985L112.709 94.1577C111.167 97.7491 108.321 105.826 110.672 112.542C114.052 120.131 114.026 128.872 110.479 136.492C103.736 150.979 86.6148 157.222 72.1535 150.466C57.6922 143.711 51.4607 126.559 58.2041 112.071C61.7507 104.452 68.311 98.7633 76.2862 96.479Z" fill="white"/>
                        <path d="M74.0517 146.389C75.0157 146.839 76.2723 146.381 76.7219 145.415C77.1714 144.449 76.7141 143.19 75.75 142.74C64.9308 137.686 60.35 124.832 65.3452 114.101C65.7947 113.135 65.3374 111.876 64.3733 111.426C63.4092 110.975 62.1526 111.434 61.7031 112.4C55.6517 125.12 61.1972 140.384 74.0517 146.389Z" fill="white"/>
                        <path d="M91.7324 77.3035L115.513 88.4128C117.977 89.5637 120.961 88.4755 122.11 86.0073C123.259 83.539 122.173 80.5493 119.709 79.3983L96.0354 68.3391C93.4145 67.2454 90.4801 68.2263 89.3312 70.6945C88.1824 73.1628 89.2686 76.1525 91.7324 77.3035ZM94.18 72.0451L117.961 83.1543C118.389 83.3545 118.668 83.8766 118.418 84.4132C118.168 84.9498 117.697 85.1216 117.162 84.8714L93.4879 73.8121C93.0594 73.612 92.7807 73.0899 93.0305 72.5533C93.2803 72.0167 93.7515 71.8449 94.18 72.0451Z" fill="white"/>
                        <path d="M100.312 68.1161L117.023 75.9226C119.487 77.0735 122.471 75.9854 123.62 73.5171C124.769 71.0489 123.683 68.0591 121.219 66.9081L104.508 59.1016C102.045 57.9507 99.0601 59.0388 97.9113 61.5071C96.7124 64.0826 97.8486 66.9651 100.312 68.1161ZM102.76 62.8576L119.471 70.6642C119.899 70.8643 120.178 71.3864 119.928 71.923C119.678 72.4596 119.207 72.6314 118.672 72.3812L101.961 64.5747C101.532 64.3745 101.254 63.8524 101.503 63.3158C101.753 62.7792 102.332 62.6575 102.76 62.8576Z" fill="white"/>
                        <path class="flicker" d="M66.3591 162.915C65.2879 162.415 64.1385 162.923 63.6889 163.889L57.8946 176.337C57.445 177.303 57.9024 178.562 58.8665 179.012C59.8306 179.463 61.0871 179.004 61.5367 178.039L67.331 165.59C67.7806 164.624 67.3232 163.365 66.3591 162.915Z" fill="white"/>
                        <path class="flicker" d="M32.8471 155.621C33.4044 156.666 34.6254 156.844 35.5107 156.343L47.1617 149.244C48.2041 148.685 48.5393 147.405 47.9321 146.468C47.7106 146.103 47.4392 145.846 47.1179 145.695C46.4751 145.395 45.7897 145.467 45.2186 145.853L33.5675 152.953C32.5751 153.404 32.2399 154.684 32.8471 155.621Z" fill="white"/>
                        <path class="flicker" d="M91.0518 166.742C90.7304 166.592 90.3591 166.549 89.9378 166.613C88.8311 166.75 88.0674 167.83 88.2034 168.939L89.9996 182.451C90.1356 183.56 91.214 184.325 92.3208 184.189C93.4275 184.052 94.1912 182.972 94.0552 181.863L92.259 168.351C92.1302 167.507 91.6945 167.042 91.0518 166.742Z" fill="white"/>
                        <path class="flicker" d="M109.308 161.422L117.38 172.378C118.037 173.208 119.365 173.436 120.194 172.778C121.129 172.17 121.357 170.839 120.593 169.959L112.521 159.003C112.249 158.745 112.085 158.538 111.764 158.388C111.121 158.088 110.328 158.109 109.707 158.603C108.879 159.261 108.651 160.592 109.308 161.422Z" fill="white"/>
                        <path class="flicker" d="M24.1063 127.89C24.1351 128.949 25.1636 129.822 26.2204 129.793L39.894 128.995C40.9508 128.966 41.8216 127.935 41.7927 126.877C41.7711 126.083 41.2782 125.46 40.6355 125.16C40.3141 125.01 39.9428 124.967 39.6786 124.974L26.005 125.772C24.9482 125.801 24.0774 126.832 24.1063 127.89Z" fill="white"/>
                        <line y1="-0.5" x2="13.3996" y2="-0.5" transform="matrix(-0.62128 -0.784298 0.782331 -0.621971 100.93 150.114)" stroke="white"/>
                        <line y1="-0.5" x2="16.1147" y2="-0.5" transform="matrix(0.815609 -0.57757 0.576865 0.817571 92.1836 140.511)" stroke="white"/>
                        <line y1="-0.5" x2="13.4406" y2="-0.5" transform="matrix(-0.390606 -0.921307 0.919528 -0.391266 100.504 134.467)" stroke="white"/>
                        <line y1="-0.5" x2="9.42785" y2="-0.5" transform="matrix(0.837748 -0.544914 0.544206 0.839695 96.2193 124.742)" stroke="white"/>
                    </g>
                        <path d="M113 63.5C114.5 35.5 145.5 14 174 15.5" stroke="white"/>
                    <defs>
                        <clipPath id="clip-lightbulb">
                            <rect width="127.81" height="127.959" fill="white" transform="matrix(-0.906014 -0.423247 0.42199 -0.906601 116.746 206.051)"/>
                        </clipPath>
                        <filter id="sofGlow" height="300%" width="300%" x="-75%" y="-75%">
                            <!-- Thicken out the original shape -->
                            <feMorphology operator="dilate" radius="4" in="SourceAlpha" result="thicken" />
                    
                            <!-- Use a gaussian blur to create the soft blurriness of the glow -->
                            <feGaussianBlur in="thicken" stdDeviation="10" result="blurred" />
                    
                            <!-- Change the colour -->
                            <feFlood flood-color="white" result="glowColor" />
                    
                            <!-- Color in the glows -->
                            <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored" />
                    
                            <!--	Layer the effects together -->
                            <feMerge>
                                <feMergeNode in="softGlow_colored"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>
                </svg>

                <!-- Logo Text -->
                <svg class="logo-text text-k" width="117" height="150" viewBox="0 0 117 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="main-text" d="M79.2808 146.675L80.0254 147.5H81.1367H104.937H110.62L106.78 143.311L44.5187 75.3896L106.19 7.27795L109.973 3.09998H104.337H81.3368H80.2164L79.4708 3.9362L26.2368 63.6396V5.59998V3.09998H23.7368H5.53674H3.03674V5.59998V145V147.5H5.53674H23.7368H26.2368V145V87.9014L79.2808 146.675Z" stroke="white" stroke-width="3"/>
                    <path class="dashline" d="M79.2808 146.675L80.0254 147.5H81.1367H104.937H110.62L106.78 143.311L44.5187 75.3896L106.19 7.27795L109.973 3.09998H104.337H81.3368H80.2164L79.4708 3.9362L26.2368 63.6396V5.59998V3.09998H23.7368H5.53674H3.03674V5.59998V145V147.5H5.53674H23.7368H26.2368V145V87.9014L79.2808 146.675Z" stroke="white" stroke-width="3"/>
                </svg>
                <svg class="logo-text text-z" width="101" height="150" viewBox="0 0 101 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="main-text" d="M97.6985 129.2V126.7H95.1985H31.6863L96.9241 21.3159L97.2984 20.7112V20V5.59998V3.09998H94.7984H6.39845H3.89845V5.59998V21.4V23.9H6.39845H68.7106L3.47279 129.284L3.09845 129.889V130.6V145V147.5H5.59845H95.1985H97.6985V145V129.2Z" stroke="white" stroke-width="3"/>
                    <path class="dashline" d="M97.6985 129.2V126.7H95.1985H31.6863L96.9241 21.3159L97.2984 20.7112V20V5.59998V3.09998H94.7984H6.39845H3.89845V5.59998V21.4V23.9H6.39845H68.7106L3.47279 129.284L3.09845 129.889V130.6V145V147.5H5.59845H95.1985H97.6985V145V129.2Z" stroke="white" stroke-width="3"/>
                </svg>
                          
                <div class="rounded-circle p-5 border">
                    <button class="face-button">
                        <div class="face-container">
                        <span class="eye left"></span>
                        <span class="eye right"></span>
                        <span class="mouth"></span>
                        </div>
                    </button>
                </div>

                <svg class="logo-text text-s" width="106" height="154" viewBox="0 0 106 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="main-text" d="M28.0583 145.869L28.0834 145.88L28.1087 145.891C35.8012 149.248 44.4157 150.9 53.9086 150.9C63.8343 150.9 72.5842 148.969 80.0764 145.01C87.4881 141.095 93.1856 135.931 97.0523 129.486C100.878 123.11 102.809 116.267 102.809 109C102.809 99.8471 100.73 92.3063 96.2808 86.6635C92.048 81.1648 86.925 77.092 80.9166 74.5121C75.1561 71.9083 67.6285 69.3387 58.3782 66.7913C50.8353 64.6739 44.9971 62.8356 40.8318 61.2762C37.0488 59.6829 33.8385 57.4357 31.1714 54.5324C28.8557 51.8748 27.6086 48.3709 27.6086 43.8C27.6086 37.3651 29.7568 32.6659 33.8769 29.3469L33.8931 29.3338L33.909 29.3205C38.1683 25.7712 43.7621 23.9 50.9086 23.9C58.6136 23.9 64.5281 25.8508 68.903 29.5163L68.9185 29.5292L68.9341 29.5419C73.4634 33.2143 75.8556 37.3317 76.4279 41.9101L76.7016 44.1H78.9086H98.9086H101.668L101.396 41.3543C100.264 29.8907 95.1995 20.5956 86.2513 13.6327C77.4468 6.67745 66.1957 3.29999 52.7086 3.29999C43.3458 3.29999 34.9181 4.95317 27.4773 8.3226L27.4691 8.32631L27.4609 8.33008C20.1426 11.7078 14.3665 16.5348 10.2212 22.8242C6.06329 29.1327 4.00859 36.3526 4.00859 44.4C4.00859 53.4244 6.02229 60.9357 10.3024 66.6917L10.324 66.7207L10.3464 66.7491C14.5789 72.1103 19.6321 76.1113 25.5036 78.6891L25.5137 78.6935L25.5238 78.6978C31.2818 81.1656 38.8113 83.6015 48.0696 86.017C55.4905 88.0049 61.3193 89.8427 65.5923 91.526C69.6478 93.1236 72.9775 95.4353 75.6318 98.4516C78.0861 101.241 79.4086 104.946 79.4086 109.8C79.4086 115.885 77.1822 120.792 72.6732 124.709C68.3254 128.469 62.1746 130.5 53.9086 130.5C45.2393 130.5 39.0089 128.402 34.8242 124.581C30.5999 120.467 28.202 115.488 27.5957 109.546L27.3665 107.3H25.1086H5.70859H3.16434L3.20897 109.844C3.35054 117.913 5.62577 125.139 10.0649 131.44L10.0727 131.451L10.0806 131.462C14.4948 137.585 20.5172 142.377 28.0583 145.869Z" stroke="white" stroke-width="3"/>
                    <path class="dashline" d="M28.0583 145.869L28.0834 145.88L28.1087 145.891C35.8012 149.248 44.4157 150.9 53.9086 150.9C63.8343 150.9 72.5842 148.969 80.0764 145.01C87.4881 141.095 93.1856 135.931 97.0523 129.486C100.878 123.11 102.809 116.267 102.809 109C102.809 99.8471 100.73 92.3063 96.2808 86.6635C92.048 81.1648 86.925 77.092 80.9166 74.5121C75.1561 71.9083 67.6285 69.3387 58.3782 66.7913C50.8353 64.6739 44.9971 62.8356 40.8318 61.2762C37.0488 59.6829 33.8385 57.4357 31.1714 54.5324C28.8557 51.8748 27.6086 48.3709 27.6086 43.8C27.6086 37.3651 29.7568 32.6659 33.8769 29.3469L33.8931 29.3338L33.909 29.3205C38.1683 25.7712 43.7621 23.9 50.9086 23.9C58.6136 23.9 64.5281 25.8508 68.903 29.5163L68.9185 29.5292L68.9341 29.5419C73.4634 33.2143 75.8556 37.3317 76.4279 41.9101L76.7016 44.1H78.9086H98.9086H101.668L101.396 41.3543C100.264 29.8907 95.1995 20.5956 86.2513 13.6327C77.4468 6.67745 66.1957 3.29999 52.7086 3.29999C43.3458 3.29999 34.9181 4.95317 27.4773 8.3226L27.4691 8.32631L27.4609 8.33008C20.1426 11.7078 14.3665 16.5348 10.2212 22.8242C6.06329 29.1327 4.00859 36.3526 4.00859 44.4C4.00859 53.4244 6.02229 60.9357 10.3024 66.6917L10.324 66.7207L10.3464 66.7491C14.5789 72.1103 19.6321 76.1113 25.5036 78.6891L25.5137 78.6935L25.5238 78.6978C31.2818 81.1656 38.8113 83.6015 48.0696 86.017C55.4905 88.0049 61.3193 89.8427 65.5923 91.526C69.6478 93.1236 72.9775 95.4353 75.6318 98.4516C78.0861 101.241 79.4086 104.946 79.4086 109.8C79.4086 115.885 77.1822 120.792 72.6732 124.709C68.3254 128.469 62.1746 130.5 53.9086 130.5C45.2393 130.5 39.0089 128.402 34.8242 124.581C30.5999 120.467 28.202 115.488 27.5957 109.546L27.3665 107.3H25.1086H5.70859H3.16434L3.20897 109.844C3.35054 117.913 5.62577 125.139 10.0649 131.44L10.0727 131.451L10.0806 131.462C14.4948 137.585 20.5172 142.377 28.0583 145.869Z" stroke="white" stroke-width="3"/>
                </svg>
                <svg class="logo-text text-h" width="119" height="150" viewBox="0 0 119 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="main-text" d="M115.562 5.59998V3.09998H113.062H94.8618H92.3618V5.59998V64.3H26.3618V5.59998V3.09998H23.8618H5.66174H3.16174V5.59998V145V147.5H5.66174H23.8618H26.3618V145V84.3H92.3618V145V147.5H94.8618H113.062H115.562V145V5.59998Z" stroke="white" stroke-width="3"/>
                    <path class="dashline" d="M115.562 5.59998V3.09998H113.062H94.8618H92.3618V5.59998V64.3H26.3618V5.59998V3.09998H23.8618H5.66174H3.16174V5.59998V145V147.5H5.66174H23.8618H26.3618V145V84.3H92.3618V145V147.5H94.8618H113.062H115.562V145V5.59998Z" stroke="white" stroke-width="3"/>
                </svg>

                <!-- Scroll Down Indicator -->
                <div class="scroll-down-indicator animated fadeInUp">
                    <a class="nav-link" href="#">
                        <svg width="45" height="45" viewBox="0 0 166 162" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip-scroll)">
                                <path d="M83 0C52.4885 0 27.6667 24.2137 27.6667 53.9738V108.029C27.6667 137.789 52.4885 162 83 162C113.511 162 138.333 137.789 138.333 108.029V53.9738C138.333 24.2137 113.511 0 83 0ZM132.185 108.029C132.185 134.481 110.121 156 83 156C55.8793 156 33.8147 134.481 33.8147 108.029V53.9738C33.8147 27.522 55.8793 5.99991 83 5.99991C110.121 5.99991 132.185 27.5212 132.185 53.9738V108.029Z" fill="white"/>
                                <path d="M83 17.9997C81.3022 17.9997 79.9256 19.3417 79.9256 21.0001V48.1671C79.9256 49.8255 81.3022 51.1675 83 51.1675C84.6978 51.1675 86.0744 49.8255 86.0744 48.1671V21.0001C86.0736 19.3417 84.6978 17.9997 83 17.9997Z" fill="white"/>
                                <path class="blink" d="M44 46C44 30.536 56.536 18 72 18V18V51H44V46Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip-scroll">
                                    <rect width="166" height="162" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>                                
                    </a>
                    <span class="text-white">Scroll Down</span>
                </div>

                <!-- Bottom Navbar-->
                <nav class="navbar navbar-expand-md navbar-light bg-transparent position-fixed fixed-bottom">
                    <div class="container-fluid col-md-12 mb-4">
                        
                        <!-- Left Side Of Navbar -->
                        <ul class="navbar-nav mr-auto copyright animated fadeInUp">
                            <span class="text-white">© 2019 Kz Sherwin.</span>
                        </ul>
    
                        <!-- Right Side Of Navbar -->
                        <ul class="navbar-nav ml-auto animated fadeInUp">
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">
                                    <i class="fab fa-facebook"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">
                                    <i class="fas fa-envelope"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>

            <section class="face-button-body">
                <div id="container">
                    <button class="face-button">
                        <div class="face-container">
                            <span class="eye left"></span>
                            <span class="eye right"></span>
                            <span class="mouth"></span>
                        </div>
                    </button>
                </div>
            </section>

            <section class="section section1">
                <div>
                    <svg height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="45"/>
                    </svg>
                    <svg width="300px" height="175px" version="1.1">
                        <path fill="transparent" stroke="#000000" stroke-width="4" d="M10 80 Q 77.5 10, 145 80 T 280 80" class="path"></path>
                    </svg>
                </div>
            </section>

        </div>

        <!-- Scrolling Animation -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js" integrity="sha256-lPE3wjN2a7ABWHbGz7+MKBJaykyzqCbU96BJWjio86U=" crossorigin="anonymous"></script>
        <!-- ZDog -->
        <script src="https://unpkg.com/zdog@1/dist/zdog.dist.min.js"></script>
        <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}" defer></script>
        <script src="{{ asset('js/custom.js') }}"></script>
        <script src="{{ asset('js/face.js') }}"></script>
    </body>
</html>
