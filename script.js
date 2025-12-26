/**
 * CyberSec Flashcard App - Bilingual (EN/HE)
 * Offline spaced repetition trainer
 */

// ========== UI TRANSLATIONS ==========
const i18n = {
    en: {
        title: "CyberSec Training",
        reveal: "Reveal Answer",
        didntKnow: "❌ Didn't Know",
        partialKnew: "〜 Partially",
        knewIt: "✓ Knew It",
        reset: "Reset Progress",
        mastery: "Mastery",
        hintOpen: "Click to reveal answer",
        hintMC: "Select an answer below",
        answerLabel: "✓ Answer: ",
        explanationLabel: "💡 Explanation: ",
        confirmReset: "Reset all progress? This cannot be undone.",
        mcLetters: ["A", "B", "C", "D"]
    },
    he: {
        title: "אימון סייבר",
        reveal: "גלה תשובה",
        didntKnow: "❌ לא ידעתי",
        partialKnew: "〜 חלקית",
        knewIt: "✓ ידעתי",
        reset: "אפס התקדמות",
        mastery: "שליטה",
        hintOpen: "לחץ לגילוי התשובה",
        hintMC: "בחר תשובה למטה",
        answerLabel: "✓ תשובה: ",
        explanationLabel: "💡 הסבר: ",
        confirmReset: "לאפס את כל ההתקדמות? לא ניתן לבטל.",
        mcLetters: ["א", "ב", "ג", "ד"]
    }
};

// ========== FLASHCARD DATA (Bilingual) ==========
const flashcards = [
    // ===== OSI MODEL =====
    {id:1,category:"OSI Model",type:"open",
        en:{q:"What are the 7 layers of the OSI model from bottom to top?",a:"Physical → Data Link → Network → Transport → Session → Presentation → Application",e:"Remember: 'Please Do Not Throw Sausage Pizza Away'"},
        he:{q:"מהן 7 השכבות של מודל ה-OSI מלמטה למעלה?",a:"Physical → Data Link → Network → Transport → Session → Presentation → Application",e:"טיפ לזכירה: 'Please Do Not Throw Sausage Pizza Away'"}},
    {id:2,category:"OSI Model",type:"mc",
        en:{q:"Which OSI layer is responsible for IP addressing and routing?",o:["Data Link (Layer 2)","Network (Layer 3)","Transport (Layer 4)","Session (Layer 5)"],e:"Layer 3 (Network) handles logical addressing (IP) and determines the best path."},
        he:{q:"איזו שכבת OSI אחראית על כתובות IP וניתוב?",o:["Data Link (שכבה 2)","Network (שכבה 3)","Transport (שכבה 4)","Session (שכבה 5)"],e:"שכבה 3 (Network) מטפלת בכתובות לוגיות (IP) וקובעת את הנתיב הטוב ביותר."},correctIndex:1},
    {id:3,category:"OSI Model",type:"mc",
        en:{q:"At which layer does TCP operate?",o:["Network (Layer 3)","Transport (Layer 4)","Session (Layer 5)","Application (Layer 7)"],e:"TCP and UDP both operate at Transport layer (Layer 4)."},
        he:{q:"באיזו שכבה פועל פרוטוקול TCP?",o:["Network (שכבה 3)","Transport (שכבה 4)","Session (שכבה 5)","Application (שכבה 7)"],e:"TCP ו-UDP שניהם פועלים בשכבת Transport (שכבה 4)."},correctIndex:1},
    {id:4,category:"OSI Model",type:"open",
        en:{q:"What is the difference between OSI (7 layers) and TCP/IP (5 layers) models?",a:"TCP/IP combines OSI layers 5-7 into Application, and layers 1-2 into Network Access",e:"TCP/IP is practical; OSI is theoretical for teaching networking concepts."},
        he:{q:"מה ההבדל בין מודל OSI (7 שכבות) למודל TCP/IP (5 שכבות)?",a:"TCP/IP משלב את שכבות 5-7 של OSI לשכבת Application אחת, ושכבות 1-2 ל-Network Access",e:"TCP/IP הוא פרקטי; OSI הוא תיאורטי להוראת מושגי רשתות."}},
    {id:5,category:"OSI Model",type:"mc",
        en:{q:"Which layer handles MAC addresses and frame creation?",o:["Physical (Layer 1)","Data Link (Layer 2)","Network (Layer 3)","Transport (Layer 4)"],e:"Data Link layer (Layer 2) works with MAC addresses and creates frames."},
        he:{q:"איזו שכבה מטפלת בכתובות MAC ויצירת Frames?",o:["Physical (שכבה 1)","Data Link (שכבה 2)","Network (שכבה 3)","Transport (שכבה 4)"],e:"שכבת Data Link (שכבה 2) עובדת עם כתובות MAC ויוצרת Frames."},correctIndex:1},
    
    // ===== PORTS =====
    {id:6,category:"Ports",type:"open",
        en:{q:"What port does SSH use by default?",a:"Port 22",e:"SSH (Secure Shell) uses TCP port 22 for secure remote access."},
        he:{q:"באיזה פורט משתמש SSH כברירת מחדל?",a:"Port 22",e:"SSH (Secure Shell) משתמש ב-TCP פורט 22 לגישה מרחוק מאובטחת."}},
    {id:7,category:"Ports",type:"mc",
        en:{q:"Which port is used by HTTPS?",o:["Port 80","Port 443","Port 8080","Port 8443"],e:"HTTPS uses port 443 for encrypted web traffic."},
        he:{q:"באיזה פורט משתמש HTTPS?",o:["Port 80","Port 443","Port 8080","Port 8443"],e:"HTTPS משתמש בפורט 443 לתעבורת אינטרנט מוצפנת."},correctIndex:1},
    {id:8,category:"Ports",type:"open",
        en:{q:"What ports are associated with FTP?",a:"Port 20 (data) and Port 21 (control)",e:"FTP uses port 21 for commands and 20 for data transfer."},
        he:{q:"אילו פורטים משויכים ל-FTP?",a:"Port 20 (נתונים) ו-Port 21 (בקרה)",e:"FTP משתמש בפורט 21 לפקודות ו-20 להעברת נתונים."}},
    {id:9,category:"Ports",type:"mc",
        en:{q:"What is the default port for DNS?",o:["Port 23","Port 25","Port 53","Port 67"],e:"DNS uses UDP/TCP port 53 for domain name resolution."},
        he:{q:"מהו פורט ברירת המחדל של DNS?",o:["Port 23","Port 25","Port 53","Port 67"],e:"DNS משתמש ב-UDP/TCP פורט 53 לתרגום שמות דומיין."},correctIndex:2},
    {id:10,category:"Ports",type:"open",
        en:{q:"What port does RDP use?",a:"Port 3389",e:"RDP uses TCP/UDP 3389 for Windows remote desktop."},
        he:{q:"באיזה פורט משתמש RDP?",a:"Port 3389",e:"RDP משתמש ב-TCP/UDP 3389 ל-Remote Desktop של Windows."}},
    {id:11,category:"Ports",type:"mc",
        en:{q:"Which port is associated with SMB/CIFS file sharing?",o:["Port 389","Port 443","Port 445","Port 636"],e:"SMB/CIFS uses port 445 for Windows file sharing."},
        he:{q:"איזה פורט משויך לשיתוף קבצים SMB/CIFS?",o:["Port 389","Port 443","Port 445","Port 636"],e:"SMB/CIFS משתמש בפורט 445 לשיתוף קבצים ב-Windows."},correctIndex:2},
    {id:12,category:"Ports",type:"mc",
        en:{q:"What port does Telnet use?",o:["Port 21","Port 22","Port 23","Port 25"],e:"Telnet uses port 23. SSH (22) replaced it for secure access."},
        he:{q:"באיזה פורט משתמש Telnet?",o:["Port 21","Port 22","Port 23","Port 25"],e:"Telnet משתמש בפורט 23. SSH (22) החליף אותו לגישה מאובטחת."},correctIndex:2},
    {id:13,category:"Ports",type:"mc",
        en:{q:"What port does SMTP use?",o:["Port 23","Port 25","Port 53","Port 110"],e:"SMTP uses port 25 for sending email."},
        he:{q:"באיזה פורט משתמש SMTP?",o:["Port 23","Port 25","Port 53","Port 110"],e:"SMTP משתמש בפורט 25 לשליחת דואר."},correctIndex:1},
    {id:14,category:"Ports",type:"mc",
        en:{q:"What port does LDAP use?",o:["Port 389","Port 443","Port 445","Port 636"],e:"LDAP uses 389 (unencrypted) or 636 (LDAPS encrypted)."},
        he:{q:"באיזה פורט משתמש LDAP?",o:["Port 389","Port 443","Port 445","Port 636"],e:"LDAP משתמש ב-389 (לא מוצפן) או 636 (LDAPS מוצפן)."},correctIndex:0},
    {id:15,category:"Ports",type:"open",
        en:{q:"What ports does DHCP use?",a:"UDP ports 67 (server) and 68 (client)",e:"DHCP assigns IP addresses dynamically."},
        he:{q:"באילו פורטים משתמש DHCP?",a:"UDP פורטים 67 (שרת) ו-68 (לקוח)",e:"DHCP מקצה כתובות IP באופן דינמי."}},

    // ===== PROTOCOLS =====
    {id:16,category:"Protocols",type:"open",
        en:{q:"What is the difference between TCP and UDP?",a:"TCP is connection-oriented with guaranteed delivery; UDP is connectionless with no guarantee",e:"TCP: reliable, ordered, slower. UDP: fast, no handshake, for streaming/gaming."},
        he:{q:"מה ההבדל בין TCP ל-UDP?",a:"TCP מבוסס חיבור עם אספקה מובטחת; UDP ללא חיבור וללא אחריות",e:"TCP: אמין, מסודר, איטי יותר. UDP: מהיר, ללא Handshake, לסטרימינג/משחקים."}},
    {id:17,category:"Protocols",type:"mc",
        en:{q:"Which protocol maps IP addresses to MAC addresses?",o:["DNS","DHCP","ARP","ICMP"],e:"ARP (Address Resolution Protocol) resolves IP to MAC addresses."},
        he:{q:"איזה פרוטוקול ממפה כתובות IP לכתובות MAC?",o:["DNS","DHCP","ARP","ICMP"],e:"ARP מתרגם כתובות IP לכתובות MAC פיזיות."},correctIndex:2},
    {id:18,category:"Protocols",type:"open",
        en:{q:"What is ICMP used for?",a:"Network diagnostics and error messaging (ping, traceroute)",e:"ICMP sends error messages. Ping uses ICMP Echo Request/Reply."},
        he:{q:"למה משמש ICMP?",a:"אבחון רשת והודעות שגיאה (ping, traceroute)",e:"ICMP שולח הודעות שגיאה. Ping משתמש ב-ICMP Echo Request/Reply."}},
    {id:19,category:"Protocols",type:"open",
        en:{q:"What is Kerberos used for?",a:"Network authentication using tickets in Active Directory",e:"Kerberos uses tickets to prove identity without sending passwords."},
        he:{q:"למה משמש Kerberos?",a:"אימות רשת באמצעות Tickets ב-Active Directory",e:"Kerberos משתמש ב-Tickets להוכחת זהות ללא שליחת סיסמאות."}},
    {id:20,category:"Protocols",type:"open",
        en:{q:"What is DNS and why is it essential?",a:"Translates domain names to IP addresses - without it we'd memorize IPs",e:"DNS is like a phonebook for the internet."},
        he:{q:"מהו DNS ולמה הוא חיוני?",a:"מתרגם שמות דומיין לכתובות IP - בלעדיו היינו צריכים לזכור IP-ים",e:"DNS הוא כמו ספר טלפונים לאינטרנט."}},

    // ===== HTTP =====
    {id:21,category:"HTTP",type:"mc",
        en:{q:"Which HTTP method is used to submit data (e.g., form submission)?",o:["GET","POST","OPTIONS","HEAD"],e:"POST sends data in the request body. GET includes data in URL."},
        he:{q:"איזו שיטת HTTP משמשת לשליחת נתונים (למשל טופס)?",o:["GET","POST","OPTIONS","HEAD"],e:"POST שולח נתונים בגוף הבקשה. GET כולל נתונים ב-URL."},correctIndex:1},
    {id:22,category:"HTTP",type:"open",
        en:{q:"What is the difference between HTTP and HTTPS?",a:"HTTPS adds encryption and identity verification via TLS/SSL",e:"HTTPS wraps HTTP in TLS/SSL encryption."},
        he:{q:"מה ההבדל בין HTTP ל-HTTPS?",a:"HTTPS מוסיף הצפנה ואימות זהות באמצעות TLS/SSL",e:"HTTPS עוטף HTTP בהצפנת TLS/SSL."}},
    {id:23,category:"HTTP",type:"open",
        en:{q:"What information does the User-Agent header reveal?",a:"Browser type, version, OS, and device information",e:"Attackers may spoof User-Agent. Look for anomalies like curl/wget."},
        he:{q:"איזה מידע חושף Header ה-User-Agent?",a:"סוג דפדפן, גרסה, מערכת הפעלה ומידע על המכשיר",e:"תוקפים עשויים לזייף User-Agent. חפש חריגות כמו curl/wget."}},

    // ===== EDR & SECURITY TOOLS =====
    {id:24,category:"EDR",type:"open",
        en:{q:"What does EDR stand for and what is its purpose?",a:"Endpoint Detection and Response - monitors endpoints for suspicious activity and enables incident response",e:"EDR provides visibility, threat detection, investigation, and automated response."},
        he:{q:"מהו EDR ומה מטרתו?",a:"Endpoint Detection and Response - מנטר נקודות קצה לזיהוי פעילות חשודה ומאפשר תגובה לאירועים",e:"EDR מספק נראות, זיהוי איומים, חקירה ותגובה אוטומטית."}},
    {id:25,category:"EDR",type:"mc",
        en:{q:"What is the main difference between AV and EDR?",o:["AV is for servers only","EDR provides behavioral analysis while AV focuses on signatures","AV is more expensive","EDR only works on Linux"],e:"Traditional AV relies on signatures; EDR adds behavioral analysis."},
        he:{q:"מה ההבדל העיקרי בין AV ל-EDR?",o:["AV רק לשרתים","EDR מספק ניתוח התנהגותי בעוד AV מתמקד בחתימות","AV יקר יותר","EDR רק ל-Linux"],e:"AV מסורתי מסתמך על חתימות; EDR מוסיף ניתוח התנהגותי."},correctIndex:1},
    {id:26,category:"SIEM",type:"open",
        en:{q:"What is a SIEM and what is its primary function?",a:"Security Information and Event Management - collects, correlates, and analyzes logs for threat detection",e:"SIEM aggregates logs, correlates events, and alerts on suspicious patterns."},
        he:{q:"מהו SIEM ומה תפקידו העיקרי?",a:"Security Information and Event Management - אוסף, מתאם ומנתח לוגים לזיהוי איומים",e:"SIEM מרכז לוגים, מתאם אירועים ומתריע על דפוסים חשודים."}},
    {id:27,category:"SOAR",type:"open",
        en:{q:"What does SOAR stand for and how does it differ from SIEM?",a:"Security Orchestration, Automation and Response - automates incident response workflows",e:"SIEM detects threats; SOAR automates the response."},
        he:{q:"מהו SOAR ובמה הוא שונה מ-SIEM?",a:"Security Orchestration, Automation and Response - מאוטמט תהליכי תגובה לאירועים",e:"SIEM מזהה איומים; SOAR מאוטמט את התגובה."}},
    {id:28,category:"WAF",type:"open",
        en:{q:"What is a WAF (Web Application Firewall)?",a:"Security layer that filters HTTP traffic to protect web apps from attacks like SQLi, XSS",e:"WAF blocks OWASP Top 10 attacks at the application layer."},
        he:{q:"מהו WAF (Web Application Firewall)?",a:"שכבת אבטחה שמסננת תעבורת HTTP להגנה על אפליקציות מהתקפות כמו SQLi, XSS",e:"WAF חוסם התקפות OWASP Top 10 בשכבת האפליקציה."}},
    {id:29,category:"WAF vs FW",type:"mc",
        en:{q:"What is the main difference between WAF and traditional Firewall?",o:["WAF is faster","Firewall works at Layer 7, WAF at Layer 3","WAF protects web apps at Layer 7, Firewall filters at Layer 3-4","They are the same"],e:"Traditional firewalls filter by IP/port. WAF understands HTTP."},
        he:{q:"מה ההבדל בין WAF ל-Firewall מסורתי?",o:["WAF מהיר יותר","Firewall בשכבה 7, WAF בשכבה 3","WAF מגן על אפליקציות Web בשכבה 7, Firewall מסנן בשכבות 3-4","הם זהים"],e:"Firewalls מסורתיים מסננים לפי IP/פורט. WAF מבין HTTP."},correctIndex:2},

    // ===== THREAT INTELLIGENCE =====
    {id:30,category:"TTPs",type:"open",
        en:{q:"What are TTPs in threat intelligence?",a:"Tactics, Techniques, and Procedures - describes adversary behavior patterns",e:"TTPs describe HOW attackers operate. More persistent than IOCs."},
        he:{q:"מהם TTPs במודיעין איומים?",a:"Tactics, Techniques, and Procedures - מתאר דפוסי התנהגות של תוקפים",e:"TTPs מתארים איך תוקפים פועלים. יציבים יותר מ-IOCs."}},
    {id:31,category:"IOCs",type:"mc",
        en:{q:"Which is NOT typically an Indicator of Compromise (IOC)?",o:["Malicious IP address","File hash (MD5/SHA256)","Attack technique pattern","Malicious domain name"],e:"Attack patterns are TTPs. IOCs are specific artifacts."},
        he:{q:"מה אינו בדרך כלל Indicator of Compromise (IOC)?",o:["כתובת IP זדונית","Hash של קובץ","דפוס טכניקת תקיפה","שם דומיין זדוני"],e:"דפוסי טכניקות הם TTPs. IOCs הם ממצאים ספציפיים."},correctIndex:2},
    {id:32,category:"MITRE ATT&CK",type:"open",
        en:{q:"What is the MITRE ATT&CK framework?",a:"Knowledge base of adversary tactics and techniques based on real-world observations",e:"ATT&CK catalogs attacker behaviors for threat modeling and detection."},
        he:{q:"מהו מסגרת MITRE ATT&CK?",a:"מאגר ידע של טקטיקות וטכניקות תוקפים המבוסס על תצפיות מהעולם האמיתי",e:"ATT&CK מקטלג התנהגויות תוקפים למודלינג איומים וזיהוי."}},
    {id:33,category:"Threat Hunting",type:"open",
        en:{q:"What is proactive threat hunting?",a:"Actively searching for threats that evaded existing security controls",e:"Hunting assumes breach and proactively looks for hidden threats."},
        he:{q:"מהו Threat Hunting פרואקטיבי?",a:"חיפוש יזום אחר איומים שחמקו מבקרות אבטחה קיימות",e:"Hunting מניח פריצה ומחפש באופן יזום איומים נסתרים."}},

    // ===== MALWARE ANALYSIS =====
    {id:34,category:"Analysis",type:"mc",
        en:{q:"What is the difference between static and dynamic malware analysis?",o:["Static runs malware; dynamic examines code","Static examines code without execution; dynamic runs malware in sandbox","They are the same","Static for Windows; dynamic for Linux"],e:"Static: examine code/strings. Dynamic: execute in sandbox."},
        he:{q:"מה ההבדל בין ניתוח Static ל-Dynamic של נוזקות?",o:["Static מריץ נוזקה; Dynamic בוחן קוד","Static בוחן קוד ללא הרצה; Dynamic מריץ בסביבה מבוקרת","הם זהים","Static ל-Windows; Dynamic ל-Linux"],e:"Static: בחינת קוד/מחרוזות. Dynamic: הרצה ב-Sandbox."},correctIndex:1},
    {id:35,category:"Analysis",type:"open",
        en:{q:"What is entropy in malware analysis?",a:"Measure of randomness - high entropy indicates encryption or packing",e:"Packed/encrypted malware shows high entropy (~7-8). Normal is ~5-6."},
        he:{q:"מהי Entropy בניתוח נוזקות?",a:"מדד לאקראיות - Entropy גבוה מצביע על הצפנה או Packing",e:"נוזקות Packed/מוצפנות מראות Entropy גבוה (~7-8). רגיל ~5-6."}},
    {id:36,category:"Analysis",type:"open",
        en:{q:"What are PE file sections commonly analyzed?",a:".text (code), .data (initialized data), .rdata (read-only), .rsrc (resources)",e:"Malware often has unusual sections or suspicious section names."},
        he:{q:"מהם PE File Sections שמנותחים בדרך כלל?",a:".text (קוד), .data (נתונים מאותחלים), .rdata (קריאה בלבד), .rsrc (משאבים)",e:"לנוזקות לעתים יש Sections חריגים או שמות חשודים."}},
    {id:37,category:"Analysis",type:"mc",
        en:{q:"What tool is commonly used for static disassembly?",o:["Wireshark","IDA Pro","Nmap","Burp Suite"],e:"IDA Pro is the industry standard for disassembly and static analysis."},
        he:{q:"איזה כלי נפוץ ל-Disassembly סטטי?",o:["Wireshark","IDA Pro","Nmap","Burp Suite"],e:"IDA Pro הוא הסטנדרט ל-Disassembly וניתוח סטטי."},correctIndex:1},

    // ===== WINDOWS =====
    {id:38,category:"Windows API",type:"open",
        en:{q:"What does CreateMutexA typically indicate in malware?",a:"Single instance check - prevents multiple copies from running",e:"Malware creates mutex with unique name to ensure only one instance runs."},
        he:{q:"על מה מעיד CreateMutexA בנוזקה?",a:"בדיקת מופע יחיד - מונע הרצה של עותקים מרובים",e:"נוזקות יוצרות Mutex עם שם ייחודי להבטחת מופע אחד."}},
    {id:39,category:"Registry",type:"open",
        en:{q:"What registry key is commonly used for persistence?",a:"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run",e:"Programs in Run keys execute at login. Check RunOnce, Services too."},
        he:{q:"איזה מפתח Registry נפוץ ל-Persistence?",a:"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run",e:"תוכניות במפתחות Run מופעלות בהתחברות. בדוק גם RunOnce, Services."}},
    {id:40,category:"Code Injection",type:"mc",
        en:{q:"Which Windows API sequence is used for process injection?",o:["CreateFile → WriteFile → CloseHandle","OpenProcess → VirtualAllocEx → WriteProcessMemory → CreateRemoteThread","RegOpenKey → RegSetValue → RegCloseKey","Socket → Connect → Send"],e:"Classic injection: open process, allocate memory, write, create thread."},
        he:{q:"איזו רצפת Windows API נפוצה ל-Process Injection?",o:["CreateFile → WriteFile → CloseHandle","OpenProcess → VirtualAllocEx → WriteProcessMemory → CreateRemoteThread","RegOpenKey → RegSetValue → RegCloseKey","Socket → Connect → Send"],e:"הזרקה קלאסית: פתיחת תהליך, הקצאת זיכרון, כתיבה, יצירת Thread."},correctIndex:1},
    {id:41,category:"Sysinternals",type:"open",
        en:{q:"What Sysinternals tools investigate a suspicious process?",a:"Process Explorer (processes), Procmon (activity), Autoruns (persistence), Strings (content)",e:"Sysinternals provides powerful Windows internals tools."},
        he:{q:"אילו כלי Sysinternals חוקרים תהליך חשוד?",a:"Process Explorer (תהליכים), Procmon (פעילות), Autoruns (Persistence), Strings (תוכן)",e:"Sysinternals מספק כלים עוצמתיים ל-Windows Internals."}},
    {id:42,category:"Sysinternals",type:"mc",
        en:{q:"What does Procmon capture?",o:["Network packets only","Real-time file system, registry, and process activity","CPU temperature","Disk health"],e:"Process Monitor shows file, registry, and process operations."},
        he:{q:"מה Procmon לוכד?",o:["חבילות רשת בלבד","פעילות מערכת קבצים, Registry ותהליכים בזמן אמת","טמפרטורת CPU","בריאות דיסק"],e:"Process Monitor מציג פעולות קבצים, Registry ותהליכים."},correctIndex:1},

    // ===== PERSISTENCE =====
    {id:43,category:"Persistence",type:"open",
        en:{q:"What is Windows Task Scheduler used for in attacks?",a:"Persistence - scheduled tasks run commands at specified times/events",e:"Attackers create scheduled tasks to maintain access after reboot."},
        he:{q:"למה משמש Windows Task Scheduler בהתקפות?",a:"Persistence - משימות מתוזמנות מריצות פקודות בזמנים/אירועים מוגדרים",e:"תוקפים יוצרים משימות מתוזמנות לשמירת גישה לאחר הפעלה מחדש."}},
    {id:44,category:"Persistence",type:"open",
        en:{q:"What is crontab in Linux and how is it abused?",a:"Cron job scheduler - attackers add entries to execute malicious scripts",e:"Check /etc/crontab, /etc/cron.d/, and user crontabs."},
        he:{q:"מהו crontab ב-Linux ואיך הוא מנוצל?",a:"מתזמן Cron jobs - תוקפים מוסיפים רשומות להרצת סקריפטים זדוניים",e:"בדוק /etc/crontab, /etc/cron.d/ ו-crontab של משתמשים."}},
    {id:45,category:"LOLBins",type:"open",
        en:{q:"What are LOLBins? Give an example.",a:"Living Off The Land Binaries - legitimate Windows binaries abused (e.g., certutil, mshta, regsvr32)",e:"LOLBins blend in as signed Microsoft binaries."},
        he:{q:"מהם LOLBins? תן דוגמה.",a:"Living Off The Land Binaries - קבצי Windows לגיטימיים שמנוצלים (למשל: certutil, mshta, regsvr32)",e:"LOLBins משתלבים כקבצים חתומים של Microsoft."}},

    // ===== NETWORK ATTACKS =====
    {id:46,category:"Network",type:"open",
        en:{q:"What is ARP spoofing/poisoning?",a:"Attacker sends fake ARP to associate their MAC with victim's IP, enabling MITM",e:"ARP has no authentication. Attackers can intercept traffic."},
        he:{q:"מהו ARP Spoofing/Poisoning?",a:"תוקף שולח ARP מזויף לשייך את ה-MAC שלו ל-IP של הקורבן, מאפשר MITM",e:"ל-ARP אין אימות. תוקפים יכולים ליירט תעבורה."}},
    {id:47,category:"Network",type:"mc",
        en:{q:"What is DNS tunneling used for?",o:["Faster DNS resolution","Encrypting DNS queries","Exfiltrating data or C2 through DNS queries","Blocking malicious domains"],e:"DNS tunneling encodes data in DNS to bypass firewalls."},
        he:{q:"למה משמש DNS Tunneling?",o:["רזולוציית DNS מהירה","הצפנת שאילתות DNS","הברחת מידע או C2 דרך שאילתות DNS","חסימת דומיינים זדוניים"],e:"DNS Tunneling מקודד מידע ב-DNS לעקיפת Firewalls."},correctIndex:2},
    {id:48,category:"TOR",type:"open",
        en:{q:"How does TOR provide anonymity?",a:"Routes traffic through multiple encrypted relays, each knowing only previous and next hop",e:"Onion routing: Entry knows source, exit knows destination, no node knows both."},
        he:{q:"איך TOR מספק אנונימיות?",a:"מנתב תעבורה דרך מספר ממסרים מוצפנים, כל אחד יודע רק את הקודם והבא",e:"Onion Routing: צומת כניסה יודע מקור, יציאה יודע יעד, אף צומת לא יודע שניהם."}},

    // ===== ATTACK TOOLS =====
    {id:49,category:"Tools",type:"open",
        en:{q:"What is Mimikatz used for?",a:"Credential extraction from Windows memory - dumps passwords, hashes, Kerberos tickets",e:"Mimikatz can do pass-the-hash, golden ticket attacks."},
        he:{q:"למה משמש Mimikatz?",a:"חילוץ Credentials מזיכרון Windows - מוציא סיסמאות, Hash-ים, Kerberos Tickets",e:"Mimikatz יכול לבצע Pass-the-Hash, התקפות Golden Ticket."}},
    {id:50,category:"Tools",type:"mc",
        en:{q:"What is BloodHound used for?",o:["Network scanning","Mapping AD attack paths and privilege escalation","Password cracking","Malware sandboxing"],e:"BloodHound reveals hidden attack paths in Active Directory."},
        he:{q:"למה משמש BloodHound?",o:["סריקת רשת","מיפוי נתיבי תקיפה והסלמת הרשאות ב-AD","פיצוח סיסמאות","Sandboxing של נוזקות"],e:"BloodHound חושף נתיבי תקיפה נסתרים ב-Active Directory."},correctIndex:1},
    {id:51,category:"Shells",type:"open",
        en:{q:"What is a reverse shell and why prefer it?",a:"Target initiates connection back to attacker - bypasses inbound firewall rules",e:"Outbound connections often allowed. Attacker listens; victim connects out."},
        he:{q:"מהו Reverse Shell ולמה מעדיפים אותו?",a:"היעד יוזם חיבור חזרה לתוקף - עוקף כללי Firewall נכנסים",e:"חיבורים יוצאים לעתים מותרים. התוקף מאזין; הקורבן מתחבר החוצה."}},
    {id:52,category:"Shells",type:"open",
        en:{q:"What is a backdoor?",a:"Hidden access method bypassing normal authentication for persistent unauthorized access",e:"Backdoors: added accounts, modified binaries, webshells, malicious services."},
        he:{q:"מהו Backdoor?",a:"שיטת גישה נסתרת שעוקפת אימות רגיל לגישה לא מורשית מתמשכת",e:"Backdoors: חשבונות נוספים, קבצים שונו, Webshells, שירותים זדוניים."}},

    // ===== DEFENSE =====
    {id:53,category:"Defense",type:"mc",
        en:{q:"What is the purpose of a DMZ?",o:["Direct connection to internet","Isolated segment for public-facing services","Encrypted VPN tunnel","Backup segment"],e:"DMZ hosts public services with restricted access to internal network."},
        he:{q:"מה מטרת DMZ?",o:["חיבור ישיר לאינטרנט","מקטע מבודד לשירותים פונים לציבור","מנהרת VPN מוצפנת","מקטע גיבוי"],e:"DMZ מארח שירותים ציבוריים עם גישה מוגבלת לרשת הפנימית."},correctIndex:1},
    {id:54,category:"Defense",type:"open",
        en:{q:"What is DLP (Data Loss Prevention)?",a:"Technology detecting and preventing unauthorized transfer of sensitive data",e:"DLP monitors data in motion, at rest, and in use."},
        he:{q:"מהו DLP (Data Loss Prevention)?",a:"טכנולוגיה שמזהה ומונעת העברה לא מורשית של מידע רגיש",e:"DLP מנטר מידע בתנועה, במנוחה ובשימוש."}},
    {id:55,category:"Honeypots",type:"open",
        en:{q:"What is a honeypot and what are bogus IP traps?",a:"Decoy systems to attract attackers. Bogus IPs trigger alerts when accessed.",e:"No legitimate traffic should touch honeypots. Any access indicates breach."},
        he:{q:"מהו Honeypot ומהם Bogus IP Traps?",a:"מערכות פיתוי למשוך תוקפים. Bogus IPs מפעילים התראה כשניגשים אליהם.",e:"אין תעבורה לגיטימית ל-Honeypots. כל גישה מצביעה על פריצה."}},
    {id:56,category:"VPN",type:"mc",
        en:{q:"What is the primary security benefit of a VPN?",o:["Faster internet","Encrypted tunnel protecting data in transit","Antivirus protection","Firewall bypass"],e:"VPN encrypts traffic between endpoints."},
        he:{q:"מהו היתרון האבטחתי העיקרי של VPN?",o:["אינטרנט מהיר יותר","מנהרה מוצפנת המגינה על מידע בתנועה","הגנת אנטי-וירוס","עקיפת Firewall"],e:"VPN מצפין תעבורה בין נקודות קצה."},correctIndex:1},
    {id:57,category:"Defense",type:"open",
        en:{q:"What is NAC (Network Access Control)?",a:"Security solution enforcing policy compliance before allowing network connection",e:"NAC checks device health, authentication, and compliance."},
        he:{q:"מהו NAC (Network Access Control)?",a:"פתרון אבטחה שאוכף עמידה במדיניות לפני הרשאת חיבור לרשת",e:"NAC בודק בריאות מכשיר, אימות ותאימות."}},
    {id:58,category:"Email",type:"open",
        en:{q:"What is a Mail Relay and why is it a security concern?",a:"Server forwarding email - open relays can be abused for spam/phishing",e:"Secure mail relays require authentication."},
        he:{q:"מהו Mail Relay ולמה הוא סיכון אבטחתי?",a:"שרת שמעביר דואר - Open Relays יכולים להיות מנוצלים לספאם/פישינג",e:"שרתי דואר מאובטחים דורשים אימות."}},

    // ===== DETECTION =====
    {id:59,category:"Detection",type:"mc",
        en:{q:"A SIEM alert fires on legitimate admin activity. This is a:",o:["True Positive","False Positive","True Negative","False Negative"],e:"False Positive: alert triggered but no actual threat."},
        he:{q:"התראת SIEM נורתה על פעילות Admin לגיטימית. זהו:",o:["True Positive","False Positive","True Negative","False Negative"],e:"False Positive: התראה נורתה אבל אין איום אמיתי."},correctIndex:1},
    {id:60,category:"Detection",type:"open",
        en:{q:"What is True Positive vs False Negative?",a:"True Positive: correctly identified threat. False Negative: missed a real threat (dangerous!)",e:"FNs are worst - actual attacks going undetected."},
        he:{q:"מה ההבדל בין True Positive ל-False Negative?",a:"True Positive: זיהוי נכון של איום. False Negative: החמצת איום אמיתי (מסוכן!)",e:"FN הם הגרועים - התקפות שלא מזוהות."}},
    {id:61,category:"YARA",type:"open",
        en:{q:"What are YARA rules used for?",a:"Pattern matching to identify malware by strings, byte patterns, or conditions",e:"YARA rules describe malware families."},
        he:{q:"למה משמשים חוקי YARA?",a:"התאמת דפוסים לזיהוי נוזקות לפי מחרוזות, דפוסי בתים או תנאים",e:"חוקי YARA מתארים משפחות נוזקות."}},
    {id:62,category:"Logging",type:"open",
        en:{q:"What Windows Event ID indicates a successful logon?",a:"Event ID 4624",e:"4624 = success, 4625 = failed. Check logon type: 2=interactive, 3=network, 10=RDP."},
        he:{q:"איזה Windows Event ID מציין התחברות מוצלחת?",a:"Event ID 4624",e:"4624 = הצלחה, 4625 = נכשלה. בדוק Logon Type: 2=interactive, 3=network, 10=RDP."}},
    {id:63,category:"Logging",type:"mc",
        en:{q:"In Windows logon events, what does Logon Type 3 indicate?",o:["Interactive (keyboard)","Network logon (SMB, mapped drive)","Batch (scheduled task)","Remote Desktop"],e:"Type 3 = network logon. Type 2 = interactive. Type 10 = RDP."},
        he:{q:"באירועי התחברות Windows, על מה מצביע Logon Type 3?",o:["Interactive (מקלדת)","Network Logon (SMB, כונן ממופה)","Batch (משימה מתוזמנת)","Remote Desktop"],e:"Type 3 = התחברות רשת. Type 2 = Interactive. Type 10 = RDP."},correctIndex:1},
    {id:64,category:"Logging",type:"open",
        en:{q:"What are the key Windows Logon Types to know? (2, 3, 10)",a:"Type 2: Interactive (local). Type 3: Network (SMB). Type 10: RDP",e:"Understanding logon types helps identify how attackers accessed systems."},
        he:{q:"מהם סוגי ההתחברות העיקריים ב-Windows? (2, 3, 10)",a:"Type 2: Interactive (מקומי). Type 3: Network (SMB). Type 10: RDP",e:"הבנת סוגי התחברות עוזרת לזהות איך תוקפים ניגשו למערכת."}},

    // ===== CVE & VULNERABILITIES =====
    {id:65,category:"CVE",type:"open",
        en:{q:"What is a CVE?",a:"Common Vulnerabilities and Exposures - standardized identifier for security flaws",e:"Format: CVE-YEAR-NUMBER (e.g., CVE-2021-44228 = Log4Shell)."},
        he:{q:"מהו CVE?",a:"Common Vulnerabilities and Exposures - מזהה סטנדרטי לפגיעויות אבטחה",e:"פורמט: CVE-YEAR-NUMBER (למשל CVE-2021-44228 = Log4Shell)."}},
    {id:66,category:"CVE",type:"open",
        en:{q:"What is a POC (Proof of Concept) in security?",a:"Code or method demonstrating a vulnerability can be exploited",e:"POCs prove exploitability. Can be weaponized into exploits."},
        he:{q:"מהו POC (Proof of Concept) באבטחה?",a:"קוד או שיטה שמדגימים שפגיעות ניתנת לניצול",e:"POC מוכיחים יכולת ניצול. יכולים להפוך ל-Exploits."}},
    {id:67,category:"Tools",type:"mc",
        en:{q:"What is Nessus primarily used for?",o:["Password cracking","Vulnerability scanning","Packet capture","Malware sandboxing"],e:"Nessus scans for vulnerabilities, misconfigurations, and compliance."},
        he:{q:"למה משמש Nessus בעיקר?",o:["פיצוח סיסמאות","סריקת פגיעויות","לכידת חבילות","Sandboxing של נוזקות"],e:"Nessus סורק פגיעויות, תצורות שגויות ותאימות."},correctIndex:1},

    // ===== APT & THREAT ACTORS =====
    {id:68,category:"Threats",type:"open",
        en:{q:"What is an APT (Advanced Persistent Threat)?",a:"Sophisticated long-term attack by well-resourced actors targeting specific organizations",e:"APTs use custom malware, zero-days, maintain access for months/years."},
        he:{q:"מהו APT (Advanced Persistent Threat)?",a:"התקפה מתוחכמת ארוכת טווח על ידי שחקנים עם משאבים המכוונת לארגונים ספציפיים",e:"APT משתמשים בנוזקות מותאמות, Zero-days, שומרים גישה חודשים/שנים."}},
    {id:69,category:"TLP",type:"mc",
        en:{q:"What does TLP:RED mean in threat intelligence?",o:["Share freely","Share within organization only","Not for disclosure - participants only","Share with community"],e:"TLP:RED = most restricted. AMBER = limited. GREEN = community. CLEAR = public."},
        he:{q:"מה המשמעות של TLP:RED במודיעין איומים?",o:["שתף בחופשיות","שתף בארגון בלבד","לא לחשיפה - משתתפים בלבד","שתף עם הקהילה"],e:"TLP:RED = מוגבל ביותר. AMBER = מוגבל. GREEN = קהילה. CLEAR = ציבורי."},correctIndex:2},

    // ===== ADDITIONAL =====
    {id:70,category:"Keyloggers",type:"open",
        en:{q:"What is a keylogger and how can it be detected?",a:"Software/hardware capturing keystrokes. Detect via suspicious processes, API hooks, USB devices",e:"Keyloggers may use SetWindowsHookEx API."},
        he:{q:"מהו Keylogger ואיך לזהות אותו?",a:"תוכנה/חומרה שמקליטה הקשות. זיהוי: תהליכים חשודים, API Hooks, התקני USB",e:"Keyloggers עשויים להשתמש ב-SetWindowsHookEx API."}},
    {id:71,category:"Drivers",type:"open",
        en:{q:"Why are malicious drivers dangerous?",a:"Drivers run in kernel mode with highest privileges, can bypass security tools",e:"Kernel rootkits hard to detect. Windows requires signed drivers."},
        he:{q:"למה Drivers זדוניים מסוכנים?",a:"Drivers רצים במצב Kernel עם הרשאות גבוהות, יכולים לעקוף כלי אבטחה",e:"Kernel Rootkits קשים לזיהוי. Windows דורש Drivers חתומים."}},
    {id:72,category:"Files",type:"mc",
        en:{q:"What does 'rwx' represent in Linux file permissions?",o:["Read, Write, Execute permissions","Root, Web, Xterm access","Recursive, Wide, Xclusive mode","Remote, Wireless, Xfer protocol"],e:"r=read(4), w=write(2), x=execute(1). 755 = rwxr-xr-x."},
        he:{q:"מה מייצג 'rwx' בהרשאות קבצים ב-Linux?",o:["הרשאות Read, Write, Execute","גישת Root, Web, Xterm","מצב Recursive, Wide, Xclusive","פרוטוקול Remote, Wireless, Xfer"],e:"r=read(4), w=write(2), x=execute(1). 755 = rwxr-xr-x."},correctIndex:0},
    {id:73,category:"Files",type:"open",
        en:{q:"What is the hosts file and how is it abused?",a:"/etc/hosts or C:\\Windows\\System32\\drivers\\etc\\hosts - malware adds entries to redirect traffic",e:"Hosts file takes precedence over DNS."},
        he:{q:"מהו קובץ ה-Hosts ואיך הוא מנוצל?",a:"/etc/hosts או C:\\Windows\\System32\\drivers\\etc\\hosts - נוזקות מוסיפות רשומות להפניית תעבורה",e:"קובץ Hosts קודם ל-DNS."}},
    {id:74,category:"Linux",type:"open",
        en:{q:"What are shadow files in Linux?",a:"/etc/shadow stores hashed passwords, readable only by root",e:"Attackers with root dump shadow file for offline cracking."},
        he:{q:"מהם קבצי Shadow ב-Linux?",a:"/etc/shadow מאחסן סיסמאות מוצפנות, קריא רק ל-root",e:"תוקפים עם root מוציאים קובץ Shadow לפיצוח Offline."}},
    {id:75,category:"Network",type:"open",
        en:{q:"What is a FQDN?",a:"Fully Qualified Domain Name - complete domain specifying exact DNS location (e.g., mail.example.com.)",e:"FQDN includes hostname + all domain levels + root (trailing dot)."},
        he:{q:"מהו FQDN?",a:"Fully Qualified Domain Name - שם דומיין מלא המציין מיקום מדויק ב-DNS (למשל: mail.example.com.)",e:"FQDN כולל שם מארח + כל רמות הדומיין + שורש (נקודה סופית)."}},
    {id:76,category:"Protocols",type:"open",
        en:{q:"What is IPv6 and why important for security?",a:"128-bit IP addresses. Security: may bypass IPv4-only controls.",e:"Many networks have IPv6 enabled by default."},
        he:{q:"מהו IPv6 ולמה חשוב לאבטחה?",a:"כתובות IP של 128 ביט. אבטחה: עשוי לעקוף בקרות IPv4-only.",e:"רשתות רבות מפעילות IPv6 כברירת מחדל."}},
    {id:77,category:"Analysis",type:"open",
        en:{q:"What is a thread in process execution?",a:"Smallest unit of execution - processes can have multiple threads sharing memory",e:"Malware creates remote threads for injection. Monitor CreateRemoteThread."},
        he:{q:"מהו Thread בהרצת תהליכים?",a:"יחידת ההרצה הקטנה ביותר - לתהליכים יכולים להיות מספר Threads המשתפים זיכרון",e:"נוזקות יוצרות Remote Threads להזרקה. נטר CreateRemoteThread."}},
    {id:78,category:"Active Directory",type:"open",
        en:{q:"What is Active Directory and why is it a prime target?",a:"Microsoft directory service managing users/computers. Compromising AD = controlling entire domain",e:"AD is the keys to the kingdom."},
        he:{q:"מהו Active Directory ולמה הוא יעד מרכזי?",a:"שירות Directory של Microsoft לניהול משתמשים/מחשבים. פריצה ל-AD = שליטה בכל הדומיין",e:"AD הוא המפתח לממלכה."}},
    {id:79,category:"Defense",type:"open",
        en:{q:"What services are typically placed in a DMZ?",a:"Web servers, mail servers, DNS servers, FTP servers - public-facing services",e:"DMZ isolates public services from internal network."},
        he:{q:"אילו שירותים ממוקמים בדרך כלל ב-DMZ?",a:"שרתי Web, שרתי דואר, שרתי DNS, שרתי FTP - שירותים פונים לציבור",e:"DMZ מבודד שירותים ציבוריים מהרשת הפנימית."}},
    {id:80,category:"Cache",type:"open",
        en:{q:"What is browser cache and what are cookies used for?",a:"Cache: stores files for faster loading. Cookies: session data, preferences, tracking",e:"Both can leak info. Clear during investigations."},
        he:{q:"מהו Cache של דפדפן ולמה משמשים Cookies?",a:"Cache: מאחסן קבצים לטעינה מהירה. Cookies: נתוני Session, העדפות, מעקב",e:"שניהם יכולים לדלוף מידע. נקה בחקירות."}}
];

// ========== STATE ==========
const STORAGE_KEY = 'cybersec_flashcards';
const LANG_KEY = 'cybersec_lang';

// Repetition delays (in number of cards answered)
const REPEAT_DIDNT_KNOW = 3;   // Show again after 3 cards
const REPEAT_PARTIAL = 5;      // Show again after 5 cards
const REPEAT_KNEW_IT = 20;     // Show much later

let currentLang = localStorage.getItem(LANG_KEY) || null;
let state = null;
let currentCard = null;
let isAnswerRevealed = false;
let selectedMCOption = null;

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    const defaultState = { 
        cardStats: {},      // { cardId: { wrong, partial, right, lastSeen } }
        repeatQueue: [],    // [{ cardId, showAfter }] - cards scheduled to repeat
        streak: 0, 
        lastDate: null, 
        totalReviewed: 0,
        questionCounter: 0  // Persistent counter - how many questions answered
    };
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            // Merge with defaults for backwards compatibility
            const merged = { ...defaultState, ...parsed };
            // Ensure repeatQueue is an array
            if (!Array.isArray(merged.repeatQueue)) merged.repeatQueue = [];
            return merged;
        } catch (e) {
            console.error('Failed to load state:', e);
            return defaultState;
        }
    }
    return defaultState;
}

function saveState() { 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); 
}

function saveLang(l) { localStorage.setItem(LANG_KEY, l); }

// Initialize state
state = loadState();

// ========== ELEMENTS ==========
const els = {};

// Initialize elements after DOM is ready
function initElements() {
    els.langScreen = document.getElementById('langScreen');
    els.appContainer = document.getElementById('appContainer');
    els.flashcard = document.getElementById('flashcard');
    els.cardFront = document.getElementById('cardFront');
    els.cardBack = document.getElementById('cardBack');
    els.category = document.getElementById('category');
    els.question = document.getElementById('question');
    els.hint = document.getElementById('hint');
    els.answer = document.getElementById('answer');
    els.explanation = document.getElementById('explanation');
    els.mcOptions = document.getElementById('mcOptions');
    els.revealBtn = document.getElementById('revealBtn');
    els.feedbackBtns = document.getElementById('feedbackBtns');
    els.wrongBtn = document.getElementById('wrongBtn');
    els.partialBtn = document.getElementById('partialBtn');
    els.rightBtn = document.getElementById('rightBtn');
    els.resetBtn = document.getElementById('resetBtn');
    els.langToggle = document.getElementById('langToggle');
    els.progress = document.getElementById('progress');
    els.streak = document.getElementById('streak');
    els.mastery = document.getElementById('mastery');
}

// ========== LANGUAGE ==========
function setLanguage(lang) {
    currentLang = lang;
    saveLang(lang);
    
    // Set RTL for Hebrew
    document.body.classList.toggle('rtl', lang === 'he');
    
    // Update UI strings
    const t = i18n[lang];
    const titleEl = document.querySelector('[data-i18n="title"]');
    if (titleEl) titleEl.textContent = t.title;
    if (els.revealBtn) els.revealBtn.textContent = t.reveal;
    if (els.wrongBtn) els.wrongBtn.textContent = t.didntKnow;
    if (els.partialBtn) els.partialBtn.textContent = t.partialKnew;
    if (els.rightBtn) els.rightBtn.textContent = t.knewIt;
    if (els.resetBtn) els.resetBtn.textContent = t.reset;
    
    // Show app
    if (els.langScreen) els.langScreen.classList.add('hidden');
    if (els.appContainer) els.appContainer.classList.remove('hidden');
    
    console.log('[INIT] Counter:', state.questionCounter, 'Queue:', state.repeatQueue.length, 'items');
    
    updateStats();
    renderCard(selectNextCard());
}

function showLangScreen() {
    els.langScreen.classList.remove('hidden');
    els.appContainer.classList.add('hidden');
}

// ========== CARD SELECTION ==========
// Deterministic queue-based repetition system
// Cards scheduled to repeat MUST appear at exactly the specified time

function selectNextCard() {
    const counter = state.questionCounter;
    
    // Ensure queue exists
    if (!state.repeatQueue) state.repeatQueue = [];
    
    // PRIORITY 1: Check if any card is due to repeat (MUST be shown)
    // Sort queue by showAfter (earliest first)
    state.repeatQueue.sort((a, b) => a.showAfter - b.showAfter);
    
    // Find all cards that are due (showAfter <= current counter)
    const dueCards = state.repeatQueue.filter(item => item.showAfter <= counter);
    
    if (dueCards.length > 0) {
        // Take the first due card (earliest scheduled)
        const dueItem = dueCards[0];
        // Remove it from queue
        state.repeatQueue = state.repeatQueue.filter(item => item.cardId !== dueItem.cardId);
        saveState();
        const card = flashcards.find(c => c.id === dueItem.cardId);
        console.log('[SELECT] Due card:', dueItem.cardId, 'at counter:', counter);
        if (card) return card;
    }
    
    // PRIORITY 2: Pick an unseen card
    const queuedIds = new Set(state.repeatQueue.map(item => item.cardId));
    const unseenCards = flashcards.filter(card => {
        const stats = state.cardStats[card.id];
        return (!stats || !stats.lastSeen) && !queuedIds.has(card.id);
    });
    
    if (unseenCards.length > 0) {
        // Pick first unseen card (deterministic order by ID)
        unseenCards.sort((a, b) => a.id - b.id);
        console.log('[SELECT] Unseen card:', unseenCards[0].id);
        return unseenCards[0];
    }
    
    // PRIORITY 3: All cards seen - pick oldest that's not in queue
    const availableCards = flashcards.filter(card => !queuedIds.has(card.id));
    
    if (availableCards.length > 0) {
        // Sort by right count (fewer = higher priority), then by lastSeen (older = higher)
        availableCards.sort((a, b) => {
            const statsA = state.cardStats[a.id] || { lastSeen: 0, right: 0 };
            const statsB = state.cardStats[b.id] || { lastSeen: 0, right: 0 };
            if (statsA.right !== statsB.right) return statsA.right - statsB.right;
            return statsA.lastSeen - statsB.lastSeen;
        });
        console.log('[SELECT] Oldest card:', availableCards[0].id);
        return availableCards[0];
    }
    
    // PRIORITY 4: Fallback
    console.log('[SELECT] Fallback to first card');
    return flashcards[0];
}

function scheduleRepeat(cardId, delay) {
    // Ensure queue exists
    if (!state.repeatQueue) state.repeatQueue = [];
    
    // Remove any existing entry for this card
    state.repeatQueue = state.repeatQueue.filter(item => item.cardId !== cardId);
    
    // Calculate when card should reappear
    // After answering, counter is incremented, THEN schedule is set
    // So showAfter = counter + delay means: show after 'delay' more answers
    const showAfter = state.questionCounter + delay;
    
    state.repeatQueue.push({
        cardId: cardId,
        showAfter: showAfter
    });
    
    console.log('[SCHEDULE] Card', cardId, 'will show at counter', showAfter, '(current:', state.questionCounter, ', delay:', delay, ')');
}

// ========== RENDER ==========
function renderCard(card) {
    currentCard = card;
    isAnswerRevealed = false;
    selectedMCOption = null;
    const t = i18n[currentLang];
    const content = card[currentLang];
    
    els.cardFront.classList.remove('hidden');
    els.cardBack.classList.remove('visible');
    els.revealBtn.classList.remove('hidden');
    els.feedbackBtns.classList.add('hidden');
    
    els.category.textContent = card.category;
    els.question.textContent = content.q;
    els.hint.textContent = card.type === 'mc' ? t.hintMC : t.hintOpen;
    
    const answerText = card.type === 'mc' ? content.o[card.correctIndex] : content.a;
    els.answer.innerHTML = `<span style="color:var(--accent-green)">${t.answerLabel}</span>${answerText}`;
    els.explanation.innerHTML = `<span style="color:var(--accent-orange)">${t.explanationLabel}</span>${content.e}`;
    
    if (card.type === 'mc') {
        els.mcOptions.innerHTML = content.o.map((opt, i) => 
            `<button class="mc-option" data-index="${i}">${t.mcLetters[i]}. ${opt}</button>`
        ).join('');
        els.mcOptions.classList.remove('hidden');
        document.querySelectorAll('.mc-option').forEach(btn => btn.addEventListener('click', handleMCSelection));
    } else {
        els.mcOptions.innerHTML = '';
        els.mcOptions.classList.add('hidden');
    }
    
    els.flashcard.style.animation = 'none';
    els.flashcard.offsetHeight;
    els.flashcard.style.animation = 'slideIn 0.4s ease';
}

function handleMCSelection(e) {
    if (isAnswerRevealed) return;
    selectedMCOption = parseInt(e.target.dataset.index);
    document.querySelectorAll('.mc-option').forEach((btn, i) => {
        btn.classList.toggle('selected', i === selectedMCOption);
    });
}

function revealAnswer() {
    isAnswerRevealed = true;
    els.cardFront.classList.add('hidden');
    els.cardBack.classList.add('visible');
    
    if (currentCard.type === 'mc') {
        document.querySelectorAll('.mc-option').forEach((btn, i) => {
            btn.classList.remove('selected');
            if (i === currentCard.correctIndex) btn.classList.add('correct');
            else if (i === selectedMCOption) btn.classList.add('incorrect');
        });
    }
    
    els.revealBtn.classList.add('hidden');
    els.feedbackBtns.classList.remove('hidden');
}

// feedback: 'wrong' | 'partial' | 'right'
function handleFeedback(feedback) {
    if (!currentCard) return;
    
    const cardId = currentCard.id;
    console.log('[FEEDBACK]', feedback, 'for card', cardId, 'at counter', state.questionCounter);
    
    // Initialize stats if needed
    if (!state.cardStats[cardId]) {
        state.cardStats[cardId] = { wrong: 0, partial: 0, right: 0, lastSeen: 0 };
    }
    const stats = state.cardStats[cardId];
    stats.lastSeen = Date.now();
    
    // INCREMENT COUNTER FIRST (before scheduling)
    state.questionCounter++;
    console.log('[FEEDBACK] Counter now:', state.questionCounter);
    
    // Update stats and schedule based on feedback
    if (feedback === 'wrong') {
        stats.wrong++;
        // Schedule to show again after exactly 3 more questions
        scheduleRepeat(cardId, REPEAT_DIDNT_KNOW);
    } else if (feedback === 'partial') {
        stats.partial = (stats.partial || 0) + 1;
        // Schedule to show again after exactly 5 more questions
        scheduleRepeat(cardId, REPEAT_PARTIAL);
    } else if (feedback === 'right') {
        stats.right++;
        // Schedule much later (or don't schedule at all if well-known)
        if (stats.right < 3) {
            scheduleRepeat(cardId, REPEAT_KNEW_IT);
        }
        // If right >= 3, card is "mastered" - won't be in queue
        
        // Update streak
        const today = new Date().toDateString();
        if (state.lastDate !== today) { 
            state.streak++; 
            state.lastDate = today; 
        }
    }
    
    state.totalReviewed++;
    
    // SAVE STATE before selecting next card
    saveState();
    
    // Log queue status
    console.log('[QUEUE] Items:', state.repeatQueue.map(q => `Card ${q.cardId} at ${q.showAfter}`).join(', ') || 'empty');
    
    updateStats();
    renderCard(selectNextCard());
}

function updateStats() {
    const t = i18n[currentLang];
    const reviewed = Object.values(state.cardStats).filter(s => s.lastSeen > 0).length;
    els.progress.textContent = `${reviewed}/${flashcards.length}`;
    els.streak.textContent = `🔥 ${state.streak}`;
    
    const mastered = Object.values(state.cardStats).filter(s => s.right > s.wrong && s.right >= 2).length;
    const pct = Math.round((mastered / flashcards.length) * 100);
    els.mastery.textContent = `${t.mastery}: ${pct}%`;
}

function resetProgress() {
    if (confirm(i18n[currentLang].confirmReset)) {
        localStorage.removeItem(STORAGE_KEY);
        state = loadState();
        console.log('[RESET] State cleared, counter:', state.questionCounter);
        updateStats();
        renderCard(selectNextCard());
    }
}

// ========== EVENTS ==========
function initEventListeners() {
    // Language selection buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    // Reveal button
    if (els.revealBtn) {
        els.revealBtn.addEventListener('click', revealAnswer);
    }
    
    // Reset and language toggle
    if (els.resetBtn) {
        els.resetBtn.addEventListener('click', resetProgress);
    }
    
    if (els.langToggle) {
        els.langToggle.addEventListener('click', showLangScreen);
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (!currentLang) return;
        if (!isAnswerRevealed) {
            if (e.code === 'Space' || e.code === 'Enter') { e.preventDefault(); revealAnswer(); }
            if (currentCard?.type === 'mc') {
                const n = parseInt(e.key);
                if (n >= 1 && n <= 4) document.querySelector(`.mc-option[data-index="${n-1}"]`)?.click();
            }
        } else {
            if (e.key === '1' || e.key.toLowerCase() === 'n') handleFeedback('wrong');
            else if (e.key === '2' || e.key.toLowerCase() === 'p') handleFeedback('partial');
            else if (e.key === '3' || e.key.toLowerCase() === 'y') handleFeedback('right');
        }
    });
}

// ========== INIT ==========
function init() {
    initElements();
    initEventListeners();
    
    if (currentLang) {
        setLanguage(currentLang);
    } else {
        showLangScreen();
    }
}

// Run init when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
