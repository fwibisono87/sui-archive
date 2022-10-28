"use strict";(self.webpackChunksui_archive=self.webpackChunksui_archive||[]).push([[6918],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=o.createContext({}),r=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=r(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=r(a),c=n,h=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return a?o.createElement(h,i(i({ref:t},d),{},{components:a})):o.createElement(h,i({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var r=2;r<l;r++)i[r]=a[r];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2554:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>r});var o=a(7462),n=(a(7294),a(3905));const l={sidebar_position:6},i="yt-dlp",s={unversionedId:"tools/yt-dlp",id:"tools/yt-dlp",title:"yt-dlp",description:"Supported: YouTube, SPWN, and everything on this list!",source:"@site/docs/tools/yt-dlp.md",sourceDirName:"tools",slug:"/tools/yt-dlp",permalink:"/sui-archive/docs/tools/yt-dlp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tools/yt-dlp.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"ffmpeg",permalink:"/sui-archive/docs/tools/ffmpeg"},next:{title:"yeet",permalink:"/sui-archive/docs/category/yeet"}},p={},r=[{value:"What does this tool do?",id:"what-does-this-tool-do",level:2},{value:"Installation",id:"installation",level:2},{value:"Windows",id:"windows",level:3},{value:"Linux",id:"linux",level:3},{value:"Installation using binaries",id:"installation-using-binaries",level:4},{value:"Installation using pip",id:"installation-using-pip",level:4},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"Choosing formats",id:"choosing-formats",level:3},{value:"Setting save location",id:"setting-save-location",level:3},{value:"Cookies",id:"cookies",level:3},{value:"Configuration File",id:"configuration-file",level:3}],d={toc:r};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"yt-dlp"},"yt-dlp"),(0,n.kt)("p",null,"Supported: YouTube, SPWN, and ",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/yt-dlp/yt-dlp/master/supportedsites.md"},"everything on this list!")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/yt-dlp/yt-dlp"},(0,n.kt)("inlineCode",{parentName:"a"},"yt-dlp"))," is a fork of ",(0,n.kt)("a",{parentName:"p",href:"https://ytdl-org.github.io/youtube-dl/"},(0,n.kt)("inlineCode",{parentName:"a"},"youtube-dl")),', a "Command-line program to download videos from YouTube.com and other video sites", which I find to be more convenient and more-feature complete in most circumstances.'),(0,n.kt)("p",null,"As with most options on this guide, I would assume that you are comfortable with using Command-Line interfaces. However, it is not nescessary. Just follow along, and you'll be fine!"),(0,n.kt)("h2",{id:"what-does-this-tool-do"},"What does this tool do?"),(0,n.kt)("p",null,"As of November 2020, YouTube stores its high-quality videos in seperate audio and video streams. As (presumably) you want to save the best possible video and audio, we need to download ",(0,n.kt)("em",{parentName:"p"},"both")," streams then merge them to a single file. "),(0,n.kt)("p",null,"To be able to merge said files, we need to defer the process to ",(0,n.kt)("a",{parentName:"p",href:"/docs/tools/ffmpeg/"},"ffmpeg"),"."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("h3",{id:"windows"},"Windows"),(0,n.kt)("p",null,"Download the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/yt-dlp/yt-dlp/releases"},"latest release")," (Preferrably the ",(0,n.kt)("inlineCode",{parentName:"p"},".exe"),"). You can run it as-is by opening PowerShell on your downloads folder, and typing in"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"./yt-dlp\n")),(0,n.kt)("p",null,"This command should return"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"PS D:\\Users\\sui\\Downloads> ./yt-dlp\n\nUsage: yt-dlp.exe [OPTIONS] URL [URL...]\n\nyt-dlp.exe: error: You must provide at least one URL.\nType yt-dlp --help to see a list of all options.\n")),(0,n.kt)("h3",{id:"linux"},"Linux"),(0,n.kt)("p",null,"Using your favourite package manager (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"apt")," for ubuntu, or ",(0,n.kt)("inlineCode",{parentName:"p"},"aur")," for arch), install the following packages:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"python3\npython3-pip\npython-is-python3\natomicparsley\n")),(0,n.kt)("p",null,"Installation of ",(0,n.kt)("inlineCode",{parentName:"p"},"yt-dlp")," itself can be achieved in 2 ways, either by directly getting the precompiled binaries directly or using ",(0,n.kt)("a",{parentName:"p",href:"https://pypi.org/project/pip/"},"pip"),"(Python's Package Manager)"),(0,n.kt)("h4",{id:"installation-using-binaries"},"Installation using binaries"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp\n# Downloads the latest release from GitHub and stores it in /usr/local/bin/yt-dlp\n# You can also use, in place of curl, wget and aria2c\nsudo chmod a+rx /usr/local/bin/youtube-dl\n# Grants read and execute permissions to all users for yt-dlp\n")),(0,n.kt)("h4",{id:"installation-using-pip"},"Installation using pip"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -H python3 -m pip install -U yt-dlp \n# Installs yt-dlp globally\n")),(0,n.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,n.kt)("p",null,"In the simplest of terms, you can download a video just with the following command.\nAssuming you want to download ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=a51VH9BYzZA"},"Suisei's Stellar Stellar")," with the url ",(0,n.kt)("inlineCode",{parentName:"p"},"https://www.youtube.com/watch?v=a51VH9BYzZA")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'yt-dlp "https://www.youtube.com/watch?v=a51VH9BYzZA"\n')),(0,n.kt)("h2",{id:"advanced-usage"},"Advanced Usage"),(0,n.kt)("h3",{id:"choosing-formats"},"Choosing formats"),(0,n.kt)("p",null,"You can select formats you want downloaded. To show all formats, use ",(0,n.kt)("inlineCode",{parentName:"p"},"-F")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'yt-dlp "https://www.youtube.com/watch?v=a51VH9BYzZA" -F\n')),(0,n.kt)("p",null,"The output should be as follows: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'yt-dlp "https://www.youtube.com/watch?v=a51VH9BYzZA" -F                                                                          2\n[youtube] a51VH9BYzZA: Downloading webpage\n[youtube] a51VH9BYzZA: Downloading android player API JSON\n[info] a51VH9BYzZA: Downloading subtitles: en, en-zVxKeCQ1ZAM\n[info] Available formats for a51VH9BYzZA:\nID  EXT   RESOLUTION FPS CH \u2502   FILESIZE   TBR PROTO \u2502 VCODEC          VBR ACODEC      ABR ASR MORE INFO\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nsb2 mhtml 48x27        0    \u2502                  mhtml \u2502 images                                  storyboard\nsb1 mhtml 80x45        0    \u2502                  mhtml \u2502 images                                  storyboard\nsb0 mhtml 160x90       0    \u2502                  mhtml \u2502 images                                  storyboard\n599 m4a   audio only      2 \u2502    1.12MiB   31k https \u2502 audio only          mp4a.40.5   31k 22k ultralow, m4a_dash\n600 webm  audio only      2 \u2502    1.22MiB   33k https \u2502 audio only          opus        33k 48k ultralow, webm_dash\n139 m4a   audio only      2 \u2502    1.77MiB   49k https \u2502 audio only          mp4a.40.5   49k 22k low, m4a_dash\n249 webm  audio only      2 \u2502    1.79MiB   49k https \u2502 audio only          opus        49k 48k low, webm_dash\n250 webm  audio only      2 \u2502    2.36MiB   65k https \u2502 audio only          opus        65k 48k low, webm_dash\n140 m4a   audio only      2 \u2502    4.71MiB  129k https \u2502 audio only          mp4a.40.2  129k 44k medium, m4a_dash\n251 webm  audio only      2 \u2502    4.62MiB  127k https \u2502 audio only          opus       127k 48k medium, webm_dash\n17  3gp   176x144     12  1 \u2502    2.78MiB   76k https \u2502 mp4v.20.3       76k mp4a.40.2    0k 22k 144p\n597 mp4   256x144     12    \u2502    1.10MiB   30k https \u2502 avc1.4d400b     30k video only          144p, mp4_dash\n598 webm  256x144     12    \u2502  821.63KiB   22k https \u2502 vp9             22k video only          144p, webm_dash\n394 mp4   256x144     24    \u2502    2.26MiB   62k https \u2502 av01.0.00M.08   62k video only          144p, mp4_dash\n160 mp4   256x144     24    \u2502    1.79MiB   49k https \u2502 avc1.4d400c     49k video only          144p, mp4_dash\n278 webm  256x144     24    \u2502    2.69MiB   74k https \u2502 vp9             74k video only          144p, webm_dash\n395 mp4   426x240     24    \u2502    3.19MiB   88k https \u2502 av01.0.00M.08   88k video only          240p, mp4_dash\n133 mp4   426x240     24    \u2502    2.99MiB   82k https \u2502 avc1.4d4015     82k video only          240p, mp4_dash\n242 webm  426x240     24    \u2502    3.53MiB   97k https \u2502 vp9             97k video only          240p, webm_dash\n396 mp4   640x360     24    \u2502    6.00MiB  165k https \u2502 av01.0.01M.08  165k video only          360p, mp4_dash\n134 mp4   640x360     24    \u2502    5.23MiB  144k https \u2502 avc1.4d401e    144k video only          360p, mp4_dash\n18  mp4   640x360     24  2 \u2502 ~ 10.16MiB  273k https \u2502 avc1.42001E    273k mp4a.40.2    0k 44k 360p\n243 webm  640x360     24    \u2502    6.16MiB  170k https \u2502 vp9            170k video only          360p, webm_dash\n397 mp4   854x480     24    \u2502   10.12MiB  278k https \u2502 av01.0.04M.08  278k video only          480p, mp4_dash\n135 mp4   854x480     24    \u2502    8.00MiB  220k https \u2502 avc1.4d401e    220k video only          480p, mp4_dash\n244 webm  854x480     24    \u2502    9.23MiB  254k https \u2502 vp9            254k video only          480p, webm_dash\n22  mp4   1280x720    24  2 \u2502 ~ 19.61MiB  527k https \u2502 avc1.64001F    527k mp4a.40.2    0k 44k 720p\n398 mp4   1280x720    24    \u2502   19.25MiB  530k https \u2502 av01.0.05M.08  530k video only          720p, mp4_dash\n136 mp4   1280x720    24    \u2502   14.46MiB  398k https \u2502 avc1.4d401f    398k video only          720p, mp4_dash\n247 webm  1280x720    24    \u2502   15.64MiB  430k https \u2502 vp9            430k video only          720p, webm_dash\n399 mp4   1920x1080   24    \u2502   33.00MiB  908k https \u2502 av01.0.08M.08  908k video only          1080p, mp4_dash\n137 mp4   1920x1080   24    \u2502   49.22MiB 1354k https \u2502 avc1.640028   1354k video only          1080p, mp4_dash\n248 webm  1920x1080   24    \u2502   41.45MiB 1140k https \u2502 vp9           1140k video only          1080p, webm_dash\n')),(0,n.kt)("p",null,"To download a particular format, say the best audio available, we can either:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'yt-dlp "https://www.youtube.com/watch?v=a51VH9BYzZA" -f 251\n# OR\nyt-dlp "https://www.youtube.com/watch?v=a51VH9BYzZA" -f "bestaudio"\n')),(0,n.kt)("p",null,"To download the best possible audio and video, and automatically merge both streams:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'yt-dlp "https://www.youtube.com/watch?v=a51VH9BYzZA" -f "bestvideo+bestaudio"\n')),(0,n.kt)("h3",{id:"setting-save-location"},"Setting save location"),(0,n.kt)("p",null,"To set filename and save location, we use ",(0,n.kt)("inlineCode",{parentName:"p"},"-o")),(0,n.kt)("p",null,"For example, if I wanted to save the video in ",(0,n.kt)("inlineCode",{parentName:"p"},"/home/sui/raw/StellarStellar.mp4")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yt-dlp \"https://www.youtube.com/watch?v=a51VH9BYzZA\" -o '/home/sui/raw/StellarStellar.mp4'\n")),(0,n.kt)("p",null,"And we can also use variables in the filename!"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yt-dlp \"https://www.youtube.com/watch?v=a51VH9BYzZA\" -o '/home/sui/raw/%(upload_date)s %(title)s.%(ext)s.mp4'\n")),(0,n.kt)("h3",{id:"cookies"},"Cookies"),(0,n.kt)("p",null,"To be able to access membership streams (which you have legal access to), you can export your cookies from your favourite browser using extensions, such as ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/lennonhill/cookies-txt"},(0,n.kt)("inlineCode",{parentName:"a"},"cookies-txt")),". After getting said ",(0,n.kt)("inlineCode",{parentName:"p"},"cookies.txt"),", say if it's located in ",(0,n.kt)("inlineCode",{parentName:"p"},"/home/sui/cookies.txt"),", "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yt-dlp \"https://www.youtube.com/watch?v=a51VH9BYzZA\" --cookies '/home/sui/cookies.txt'\n")),(0,n.kt)("h3",{id:"configuration-file"},"Configuration File"),(0,n.kt)("p",null,"To help quickly downloading videos on command, you might want to save above command line options into a configuration file. ",(0,n.kt)("br",null),"\nFor Windows: ",(0,n.kt)("inlineCode",{parentName:"p"},"%APPDATA%\\yt-dlp\\config.txt"),(0,n.kt)("br",null),"\nFor Linux: ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/yt-dlp.conf"),(0,n.kt)("br",null)),(0,n.kt)("p",null,"As for the contents, here is what I personally use. Feel free to tweak it to your own use and preferences."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"-o '/home/sui/raw/%(upload_date)s %(title)s.%(ext)s' # replace the directory\n--embed-thumbnail\n--format 'bestvideo+bestaudio/best/mp4'\n--merge-output-format mp4\n--add-metadata\n--cookies '/home/sui/cookies.txt'\n--concurrent-fragments 2\n--write-subs       \n--sub-langs \"en.*,jp,id\"\n")),(0,n.kt)("p",null,"Explaination: ",(0,n.kt)("br",null)),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Ln 3 ensures that yt-dlp will always download the best available audio/video combo\nLn 4 ensures the output to be .mp4\nLn 5 saves the video's metadata (we are here to archive after all)\nLn 7 allows yt-dlp to download more chunks simultaniously\nLn 8 saves subtitles\nLn 9 configures which subtitles to download\n")))}u.isMDXComponent=!0}}]);