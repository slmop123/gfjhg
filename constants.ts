
import { Vulnerability } from './types';

export const VULNERABILITIES: Vulnerability[] = [
  // 1-10: Injection Attacks
  { id: 1, title: "SQL Injection (SQLi)", description: "إدخال استعلامات SQL خبيثة للوصول إلى قاعدة البيانات أو تعديلها.", severity: "Critical", category: "Injection" },
  { id: 2, title: "NoSQL Injection", description: "استغلال قواعد البيانات غير العلائقية مثل MongoDB عبر معاملات استعلام مشبوهة.", severity: "Critical", category: "Injection" },
  { id: 3, title: "Command Injection", description: "تنفيذ أوامر مباشرة على نظام التشغيل من خلال ثغرات في التطبيق.", severity: "Critical", category: "Injection" },
  { id: 4, title: "LDAP Injection", description: "التلاعب باستعلامات دليل المستخدمين LDAP للوصول غير المصرح به.", severity: "High", category: "Injection" },
  { id: 5, title: "Email Injection", description: "حقن رؤوس رسائل البريد الإلكتروني لإرسال رسائل سبام أو احتيال.", severity: "Medium", category: "Injection" },
  { id: 6, title: "Host Header Injection", description: "التلاعب بترويسة Host لتوجيه المستخدمين لمواقع خبيثة.", severity: "Medium", category: "Injection" },
  { id: 7, title: "Template Injection (SSTI)", description: "حقن كود في محركات القوالب البرمجية لتنفيذ أوامر برمجية.", severity: "Critical", category: "Injection" },
  { id: 8, title: "XPath Injection", description: "استغلال بيانات XML للوصول لمعلومات حساسة عبر لغة XPath.", severity: "High", category: "Injection" },
  { id: 9, title: "CRLF Injection", description: "إدخال أحرف سطر جديد لتسميم ترويسات الـ HTTP.", severity: "Low", category: "Injection" },
  { id: 10, title: "Argument Injection", description: "تمرير معاملات غير متوقعة للأوامر البرمجية المنفذة خلف الكواليس.", severity: "High", category: "Injection" },

  // 11-20: Broken Access Control
  { id: 11, title: "IDOR (Insecure Direct Object Reference)", description: "الوصول لبيانات مستخدمين آخرين عبر تغيير المعرفات في الرابط.", severity: "High", category: "Access Control" },
  { id: 12, title: "Path Traversal", description: "التنقل في مجلدات النظام وقراءة ملفات حساسة مثل /etc/passwd.", severity: "High", category: "Access Control" },
  { id: 13, title: "Privilege Escalation", description: "رفع صلاحيات المستخدم من مستخدم عادي إلى مدير نظام.", severity: "Critical", category: "Access Control" },
  { id: 14, title: "Broken Function Level Authorization", description: "الوصول لوظائف إدارية بدون امتلاك الصلاحيات الكافية.", severity: "High", category: "Access Control" },
  { id: 15, title: "CORS Misconfiguration", description: "إعدادات غير آمنة لمشاركة الموارد بين النطاقات تسمح بسرقة البيانات.", severity: "Medium", category: "Access Control" },
  { id: 16, title: "Open Redirect", description: "استغلال معاملات إعادة التوجيه لتوجيه الضحايا لمواقع تصيد.", severity: "Medium", category: "Access Control" },
  { id: 17, title: "Directory Indexing", description: "السماح للمتصفحين باستعراض قائمة ملفات المجلدات الحساسة.", severity: "Low", category: "Access Control" },
  { id: 18, title: "Forced Browsing", description: "الوصول لصفحات غير مرتبطة لكنها موجودة عبر التخمين.", severity: "Medium", category: "Access Control" },
  { id: 19, title: "Insecure API Terminations", description: "نقاط نهاية للـ API مكشوفة بدون أي حماية أو توثيق.", severity: "High", category: "Access Control" },
  { id: 20, title: "Mass Assignment", description: "تعديل حقول في قاعدة البيانات لم يكن من المفترض للمستخدم تعديلها.", severity: "High", category: "Access Control" },

  // 21-30: Broken Authentication
  { id: 21, title: "Credential Stuffing", description: "استخدام كلمات مرور مسربة من مواقع أخرى لتجربة الدخول.", severity: "High", category: "Authentication" },
  { id: 22, title: "Brute Force Attack", description: "الهجوم بالقوة الغاشمة لتخمين كلمات المرور.", severity: "High", category: "Authentication" },
  { id: 23, title: "Session Fixation", description: "إجبار المستخدم على استخدام Session ID محدد مسبقاً من قبل المهاجم.", severity: "Medium", category: "Authentication" },
  { id: 24, title: "Insufficient Password Policy", description: "سياسات ضعيفة تسمح بكلمات مرور سهلة التخمين.", severity: "Medium", category: "Authentication" },
  { id: 25, title: "JWT Secret Leakage", description: "تسريب مفتاح تشفير التوكن مما يسمح بتزوير الهويات.", severity: "Critical", category: "Authentication" },
  { id: 26, title: "Lack of Multi-Factor Authentication", description: "غياب التحقق الثنائي مما يسهل اختراق الحسابات المسربة.", severity: "Medium", category: "Authentication" },
  { id: 27, title: "Predictable Session IDs", description: "استخدام معرفات جلسة تتبع نمطاً يسهل تخمينه.", severity: "High", category: "Authentication" },
  { id: 28, title: "Insecure Password Recovery", description: "آليات استعادة كلمة مرور تسمح للمهاجم بالسيطرة على الحساب.", severity: "High", category: "Authentication" },
  { id: 29, title: "Remember Me Flaw", description: "تخزين بيانات الدخول بشكل غير آمن في ميزة 'تذكرني'.", severity: "Medium", category: "Authentication" },
  { id: 30, title: "Session Timeout Deficiency", description: "بقاء الجلسة نشطة لفترة طويلة جداً أو للأبد.", severity: "Low", category: "Authentication" },

  // 31-40: XSS & Client Side
  { id: 31, title: "Stored XSS", description: "تخزين سكربت خبيث في قاعدة البيانات ليتم تنفيذه لكل الزوار.", severity: "High", category: "XSS" },
  { id: 32, title: "Reflected XSS", description: "إرسال الرابط الخبيث للضحية ليتم تنفيذ الكود فور الضغط.", severity: "Medium", category: "XSS" },
  { id: 33, title: "DOM-based XSS", description: "ثغرة في كود JavaScript بالمتصفح تسمح بتنفيذ أكواد.", severity: "Medium", category: "XSS" },
  { id: 34, title: "Clickjacking", description: "خداع المستخدم للضغط على أزرار مخفية في صفحة ويب.", severity: "Medium", category: "Client Side" },
  { id: 35, title: "CSRF (Cross-Site Request Forgery)", description: "إجبار الضحية على تنفيذ إجراءات وهو مسجل دخوله.", severity: "High", category: "Client Side" },
  { id: 36, title: "Tabnabbing", description: "تغيير محتوى الصفحة الأصلية في تبويب آخر لخداع المستخدم.", severity: "Low", category: "Client Side" },
  { id: 37, title: "CSS Injection", description: "حقن أكواد CSS لتغيير مظهر الموقع أو سرقة بيانات حساسة.", severity: "Low", category: "Client Side" },
  { id: 38, title: "Window.opener Leakage", description: "إمكانية وصول الصفحة المفتوحة حديثاً للصفحة الأصلية.", severity: "Low", category: "Client Side" },
  { id: 39, title: "HTML Injection", description: "حقن وسوم HTML لتغيير شكل الصفحة أو التصيد.", severity: "Medium", category: "Client Side" },
  { id: 40, title: "Subdomain Takeover", description: "السيطرة على نطاق فرعي يشير لخدمة لم تعد مستخدمة.", severity: "High", category: "Infrastructure" },

  // 41-50: Sensitive Data Exposure & Crypto
  { id: 41, title: "Missing Encryption at Rest", description: "تخزين البيانات الحساسة في قاعدة البيانات بدون تشفير.", severity: "High", category: "Cryptography" },
  { id: 42, title: "Weak Hashing Algorithm", description: "استخدام MD5 أو SHA1 لتشفير كلمات المرور.", severity: "High", category: "Cryptography" },
  { id: 43, title: "Insecure Transmission (HTTP)", description: "إرسال البيانات عبر بروتوكول غير مشفر.", severity: "High", category: "Cryptography" },
  { id: 44, title: "Hardcoded Secrets", description: "وجود مفاتيح API أو كلمات سر داخل الكود المصدري.", severity: "High", category: "Cryptography" },
  { id: 45, title: "Insufficient Entropy", description: "استخدام أرقام عشوائية ضعيفة يسهل التنبؤ بها.", severity: "Medium", category: "Cryptography" },
  { id: 46, title: "Certificate Validation Failure", description: "عدم التحقق من صحة شهادات SSL/TLS.", severity: "High", category: "Cryptography" },
  { id: 47, title: "Broken Cryptography", description: "استخدام خوارزميات قديمة مثل DES أو RC4.", severity: "High", category: "Cryptography" },
  { id: 48, title: "Cleartext Storage of API Keys", description: "تخزين مفاتيح الوصول في ملفات نصية بسيطة.", severity: "High", category: "Cryptography" },
  { id: 49, title: "Padding Oracle Attack", description: "ثغرة في فك التشفير تسمح بمعرفة محتوى البيانات.", severity: "Medium", category: "Cryptography" },
  { id: 50, title: "Information Exposure via Metadata", description: "تسريب معلومات حساسة في الصور أو ملفات الـ PDF.", severity: "Low", category: "Data Exposure" },

  // 51-60: Security Misconfigurations
  { id: 51, title: "Default Credentials", description: "استخدام كلمات السر الافتراضية (admin/admin).", severity: "Critical", category: "Misconfig" },
  { id: 52, title: "Detailed Error Messages", description: "إظهار تفاصيل برمجية (Stack Trace) للمستخدم عند حدوث خطأ.", severity: "Low", category: "Misconfig" },
  { id: 53, title: "Unprotected Cloud Storage", description: "ترك حاويات S3 أو Buckets مفتوحة للعامة.", severity: "Critical", category: "Cloud" },
  { id: 54, title: "Missing Security Headers", description: "غياب ترويسات الأمان مثل CSP و HSTS.", severity: "Medium", category: "Misconfig" },
  { id: 55, title: "Server Information Leakage", description: "كشف نوع وإصدار السيرفر في ترويسات الـ HTTP.", severity: "Low", category: "Misconfig" },
  { id: 56, title: "Unnecessary Services Enabled", description: "تشغيل خدمات لا يحتاجها السيرفر مما يزيد مساحة الهجوم.", severity: "Medium", category: "Misconfig" },
  { id: 57, title: "Improper Assets Management", description: "عدم معرفة السيرفرات والأجهزة المتصلة بالشبكة.", severity: "Medium", category: "Infrastructure" },
  { id: 58, title: "Publicly Accessible Backup Files", description: "ترك ملفات النسخ الاحتياطي (zip, sql) متاحة للتحميل.", severity: "High", category: "Misconfig" },
  { id: 59, title: "Insecure Default Permissions", description: "إعطاء صلاحيات 777 للمجلدات بشكل دائم.", severity: "High", category: "Misconfig" },
  { id: 60, title: "Lack of Resource Quotas", description: "عدم تحديد حدود لاستخدام الموارد مما يسهل هجمات DoS.", severity: "Medium", category: "Infrastructure" },

  // 61-70: Vulnerable Components & SSRF
  { id: 61, title: "Using Outdated Libraries", description: "استخدام مكتبات برمجية بها ثغرات معروفة (CVE).", severity: "High", category: "Components" },
  { id: 62, title: "Vulnerable Plugins", description: "استخدام إضافات (Plugins) غير آمنة في منصات مثل Wordpress.", severity: "High", category: "Components" },
  { id: 63, title: "SSRF (Server-Side Request Forgery)", description: "إجبار السيرفر على إرسال طلبات لشبكات داخلية.", severity: "High", category: "SSRF" },
  { id: 64, title: "Blind SSRF", description: "ثغرة SSRF لا تظهر استجابتها مباشرة لكن يمكن قياس أثرها.", severity: "Medium", category: "SSRF" },
  { id: 65, title: "XXE (XML External Entity)", description: "استغلال معالج XML لقراءة ملفات السيرفر.", severity: "High", category: "Injection" },
  { id: 66, title: "Insecure Deserialization", description: "تحويل البيانات إلى كائنات برمجية بشكل غير آمن.", severity: "Critical", category: "Advanced" },
  { id: 67, title: "HTTP Request Smuggling", description: "تلاعب بطريقة معالجة الطلبات بين الـ Proxy والسيرفر.", severity: "Critical", category: "Advanced" },
  { id: 68, title: "Cache Poisoning", description: "تسميم ذاكرة الكاش لتقديم محتوى خبيث للمستخدمين.", severity: "High", category: "Advanced" },
  { id: 69, title: "JSON Web Encryption (JWE) Flaws", description: "عيوب في فك تشفير بيانات الـ JSON المشفرة.", severity: "Medium", category: "Advanced" },
  { id: 70, title: "GraphQL Introspection Enabled", description: "السماح للمهاجم بمعرفة كامل هيكلة الـ API الخاص بـ GraphQL.", severity: "Low", category: "API Security" },

  // 71-80: API & Mobile Security
  { id: 71, title: "BOLA (Broken Object Level Authorization)", description: "ثغرة API تسمح بتعديل بيانات أشياء لا يملكها المستخدم.", severity: "High", category: "API Security" },
  { id: 72, title: "Excessive Data Exposure in API", description: "إرسال كامل كائن المستخدم في الـ JSON بينما نحتاج فقط الاسم.", severity: "Medium", category: "API Security" },
  { id: 73, title: "API Rate Limiting Absence", description: "عدم وجود حدود لعدد الطلبات مما يسمح بالـ Brute Force.", severity: "Medium", category: "API Security" },
  { id: 74, title: "Broken Object Property Level Authorization", description: "إمكانية تغيير خصائص حساسة في الكائنات عبر الـ API.", severity: "High", category: "API Security" },
  { id: 75, title: "Insecure Deep Linking", description: "روابط عميقة في تطبيقات الجوال تفتح صفحات حساسة.", severity: "Medium", category: "Mobile Security" },
  { id: 76, title: "Root/Jailbreak Detection Bypass", description: "تجاوز فحص حماية نظام الجوال لتشغيل التطبيق.", severity: "Low", category: "Mobile Security" },
  { id: 77, title: "Sensitive Data in Mobile Logs", description: "كتابة بيانات حساسة في سجلات الجوال (Logcat).", severity: "Low", category: "Mobile Security" },
  { id: 78, title: "Insecure Local Storage (Mobile)", description: "تخزين البيانات في SQLite أو SharedPreferences بدون تشفير.", severity: "Medium", category: "Mobile Security" },
  { id: 79, title: "Tapjacking", description: "هجوم شبيه بالـ Clickjacking لكنه يستهدف تطبيقات الجوال.", severity: "Medium", category: "Mobile Security" },
  { id: 80, title: "Improper SSL Pinning", description: "عدم ربط التطبيق بشهادة سيرفر محددة مما يسهل اعتراض البيانات.", severity: "Medium", category: "Mobile Security" },

  // 81-90: Business Logic & Advanced
  { id: 81, title: "Business Logic Flaw: Price Manipulation", description: "تغيير سعر المنتج في الطلب قبل إرساله للسيرفر.", severity: "High", category: "Logic Flaws" },
  { id: 82, title: "Coupon Code Brute Force", description: "تخمين أكواد الخصم بشكل آلي.", severity: "Medium", category: "Logic Flaws" },
  { id: 83, title: "Race Condition", description: "استغلال التزامن في العمليات لسحب أموال مرتين مثلاً.", severity: "High", category: "Logic Flaws" },
  { id: 84, title: "Insecure File Upload", description: "رفع ملفات Shell برمجية بدلاً من الصور.", severity: "Critical", category: "Injection" },
  { id: 85, title: "Server-Side Template Injection", description: "استغلال محركات القوالب لتنفيذ كود برمجي.", severity: "Critical", category: "Advanced" },
  { id: 86, title: "SMTP Header Injection", description: "حقن رؤوس بريد إلكتروني من خلال نماذج الاتصال.", severity: "Medium", category: "Injection" },
  { id: 87, title: "Denial of Service (DoS)", description: "إغراق الموقع بطلبات وهمية لتعطيله.", severity: "High", category: "Infrastructure" },
  { id: 88, title: "Distributed Denial of Service (DDoS)", description: "هجوم تعطيل خدمة منسق من آلاف الأجهزة.", severity: "Critical", category: "Infrastructure" },
  { id: 89, title: "DNS Cache Poisoning", description: "تزوير سجلات الـ DNS لتوجيه المستخدمين لموقع آخر.", severity: "High", category: "Infrastructure" },
  { id: 90, title: "BGP Hijacking", description: "سرقة مسارات الإنترنت لتوجيه حركة البيانات عالمياً.", severity: "Critical", category: "Infrastructure" },

  // 91-100: Miscellaneous & SiteSec Special
  { id: 91, title: "Social Engineering: Phishing", description: "خداع المستخدمين عبر صفحات مزيفة لسرقة بياناتهم.", severity: "High", category: "Social" },
  { id: 92, title: "Spear Phishing", description: "تصيد مستهدف جداً لشخصية معينة في المؤسسة.", severity: "High", category: "Social" },
  { id: 93, title: "Baiting", description: "ترك وسائط تخزين (USB) ملغمة ليقوم الموظفون بفتحها.", severity: "Medium", category: "Social" },
  { id: 94, title: "Physical Security Breach", description: "الوصول الفعلي للسيرفرات أو أجهزة الموظفين.", severity: "Critical", category: "Physical" },
  { id: 95, title: "Insecure API Keys Rotation", description: "عدم تبديل مفاتيح الـ API لفترات طويلة جداً.", severity: "Medium", category: "Misconfig" },
  { id: 96, title: "Shadow IT", description: "استخدام تطبيقات غير مصرح بها داخل المؤسسة.", severity: "Medium", category: "Infrastructure" },
  { id: 97, title: "Zombie Subdomains", description: "نطاقات فرعية منسية تشير لسيرفرات قديمة ضعيفة.", severity: "Medium", category: "Infrastructure" },
  { id: 98, title: "Log Injection", description: "إدخال بيانات خبيثة في السجلات لخداع مديري النظام.", severity: "Medium", category: "Injection" },
  { id: 99, title: "Zero-Day Exploit", description: "ثغرة غير معروفة للمطورين يتم استغلالها قبل إصدار حل.", severity: "Critical", category: "Advanced" },
  { id: 100, title: "SiteSec Final Guardian Breach", description: "محاكاة هجوم معقد يستهدف طبقات الحماية الأخيرة في أنظمتنا.", severity: "Critical", category: "SiteSec" },
];

export const TECH_STACK = [
  { name: "Gemini AI", desc: "محرك الذكاء الاصطناعي لتحليل الكود واكتشاف الأنماط المشبوهة.", icon: "fa-brain" },
  { name: "React 19", desc: "بناء واجهة مستخدم سريعة وتفاعلية.", icon: "fa-react" },
  { name: "Tailwind CSS", desc: "تصميم عصري ومتجاوب مع كافة الأجهزة.", icon: "fa-css3-alt" },
  { name: "TypeScript", desc: "ضمان استقرار الكود وتقليل الأخطاء البرمجية.", icon: "fa-code" },
  { name: "3D Interactivity", desc: "تجربة مستخدم غامرة باستخدام تقنيات العرض الحديثة.", icon: "fa-cube" },
];

export const OFFLINE_OSINT_DATA: Record<string, any> = {
  "google.com": {
    summary: `تقرير استخباراتي سري: بنية Google التحتية (Project Titan).
تعتمد جوجل في حماية مراكز بياناتها على شريحة أمنية مخصصة تسمى 'Titan' تضمن عدم تشغيل أي كود غير موقع برمجياً على خوادمها. 
المعلومات المرصودة:
1. شبكة الألياف البصرية الخاصة بجوجل تحت المحيطات (B2 Cable System) تستخدم تشفيراً طبقيًا عند نقاط الربط.
2. استخدام نظام 'Borg' لإدارة الحاويات يوفر عزلاً تاماً للعمليات الحساسة.
3. رصد محاولات استهداف لبروتوكول QUIC الخاص بهم من مجموعات APT متقدمة.`,
    sources: [
      { web: { uri: "https://cloud.google.com/security/shields/titan", title: "Titan Security Chip Details" } },
      { web: { uri: "https://www.google.com/about/datacenters/inside/locations/", title: "Global Infrastructure Map" } }
    ]
  },
  "tesla.com": {
    summary: `تقرير أمن الشبكات: تيسلا ومنصة الكترون (Electron Logic).
تستخدم تيسلا شبكة CAN bus مشفرة داخل سياراتها مرتبطة بسحابة مركزية عبر بروتوكول توثيق ثنائي المفاتيح.
نقاط استخباراتية:
1. خوادم تيسلا تعتمد على بنية مخصصة تسمى 'Dojo' للذكاء الاصطناعي، محمية بجدران نارية منطقية معزولة فيزيائياً.
2. تم رصد استخدام نظام 'Starlink' كقناة اتصال طوارئ للأسطول، مما يتطلب حماية ضد هجمات الـ Man-in-the-Middle الفضائية.
3. التحديثات الهوائية (OTA) مشفرة بمفاتيح AES-256 يتم تدويرها كل 24 ساعة.`,
    sources: [
      { web: { uri: "https://www.tesla.com/security", title: "Tesla Product Security" } }
    ]
  },
  "facebook.com": {
    summary: `تقرير التهديدات الداخلية: ميتا (Project Vesta).
بعد أحداث كامبريدج أناليتيكا، طورت ميتا نظام 'Vesta' للتحكم في وصول الموظفين للبيانات، وهو نظام يعتمد على سياسة 'الصفر ثقة'.
بيانات تقنية:
1. مراكز بيانات ميتا في 'Luleå' السويدية تستخدم تبريداً طبيعياً محمياً بشبكة استشعار أمنية متكاملة.
2. رصد استخدام لغة 'Hack' البرمجية كخط دفاع أول ضد ثغرات Buffer Overflow الشائعة في C++.
3. أنظمة مكافحة الـ Scrapping تستخدم تعلم الآلة لتمييز سلوك البوتات عن البشر بدقة 99.9%.`,
    sources: [
      { web: { uri: "https://about.meta.com/technologies/", title: "Meta Infrastructure Technology" } }
    ]
  }
};

export const OFFLINE_ADVISOR_QA = [
  { question: "كيف أحمي موقعي من هجمات DDoS المعقدة؟", answer: "الحماية تبدأ من الطبقة السابعة (Layer 7). استخدم خدمات مثل Cloudflare أو AWS Shield، وقم بتفعيل Rate Limiting على مستوى الـ IP، وتأكد من أن خادمك لا يستجيب للطلبات المباشرة بل فقط من خلال الـ Proxy." },
  { question: "ما هي أفضل ممارسة لتخزين كلمات المرور؟", answer: "لا تستخدم MD5 أو SHA1 أبداً. الطريقة الاستخباراتية الصحيحة هي استخدام Argon2 أو BCrypt مع 'Salt' فريد لكل مستخدم و 'Pepper' مخزن في بيئة معزولة تماماً عن قاعدة البيانات." },
  { question: "كيف يعمل الـ Zero Trust في الشركات الكبرى؟", answer: "مبدأ Zero Trust يعني 'لا تثق أبداً، تحقق دائماً'. لا يتم الوثوق بأي جهاز حتى لو كان داخل الشبكة المحلية. يتم التحقق من الهوية والجهاز والموقع وسلوك المستخدم قبل منح أي صلاحية وصول." },
  { question: "ما هو الـ SSRF وكيف يتم استغلاله؟", answer: "ثغرة Server-Side Request Forgery تسمح للمهاجم بإجبار الخادم على إرسال طلبات لشبكات داخلية لا يمكن الوصول إليها من الخارج. يتم سدها بمنع الخادم من الاتصال بـ 127.0.0.1 أو أي IP داخلي." },
  { question: "هل الذكاء الاصطناعي يمكنه اكتشاف الثغرات الصفرية (0-day)؟", answer: "نعم، النماذج المتقدمة مثل Gemini 3 يمكنها تحليل 'المنطق البرمجي' وليس فقط الأنماط المعروفة، مما يسمح لها باكتشاف تسلسلات غير منطقية قد تؤدي لاستغلال ثغرة لم تُعرف بعد." },
  { question: "ما أهمية الـ OSINT في الحماية الاستباقية؟", answer: "الـ OSINT يسمح لك برؤية ما يراه المهاجم. من خلال مراقبة تسريبات البيانات، سجلات DNS القديمة، وحتى تعليقات الموظفين على LinkedIn، يمكنك إغلاق الثغرات قبل أن يستغلها أحد." },
  { question: "كيف أحمي تطبيقات الـ API من هجمات BOLA؟", answer: "هجمات Broken Object Level Authorization هي الأكثر شيوعاً. يجب التأكد من أن كل طلب للبيانات يتضمن تحققاً من أن المستخدم يملك حق الوصول لهذا الـ ID تحديداً، وليس فقط أنه مسجل دخول." },
  { question: "ما هو الفرق بين التشفير (Encryption) والترميز (Encoding)؟", answer: "الترميز (مثل Base64) هو تغيير شكل البيانات لسهولة النقل ولا يوفر أماناً. التشفير (مثل AES) يتطلب مفتاحاً سرياً لقراءة البيانات. الخلط بينهما هو خطأ أمني كارثي." },
  { question: "كيف يتم اكتشاف الـ Backdoors في الأكواد الجاهزة؟", answer: "يتم ذلك عبر تحليل التبعيات (Dependency Scanning) والبحث عن اتصالات خارجية غير مبررة أو استخدام دوال تنفيذ الأوامر مثل exec() و eval() في أماكن غير متوقعة." },
  { question: "ما هو مستقبل الأمن السيبراني مع الكمبيوتر الكمي؟", answer: "الحواسيب الكمية قد تكسر تشفير RSA الحالي في ثوانٍ. الحل هو الانتقال لـ Post-Quantum Cryptography (PQC) التي تعتمد على خوارزميات رياضية لا يمكن للكمبيوتر الكمي حلها بسهولة." }
];

export const CODE_SNIPPETS = [
  { 
    name: "حقن SQL (محاولة دخول)", 
    code: "const user = db.query('SELECT * FROM users WHERE username = \\'' + req.body.username + '\\'');",
    offlineReport: {
      summary: "تم رصد محاولة حقن SQL عالية الخطورة عبر دمج المدخلات مباشرة في الاستعلام البرمجي.",
      vulnerabilities: [
        { type: "SQL Injection", severity: "Critical", description: "المهاجم يمكنه إغلاق نص الاستعلام وكتابة أوامر إضافية مثل OR 1=1 لتجاوز الدخول.", fix: "استخدم الـ Parameterized Queries أو ORM مثل Prisma/Sequelize لمنع دمج النصوص." }
      ]
    }
  },
  { 
    name: "ثغرة XSS في تعليقات", 
    code: "document.getElementById('comment-box').innerHTML = userComment;",
    offlineReport: {
      summary: "رصد إمكانية حقن نصوص برمجية (Script Injection) في واجهة المستخدم.",
      vulnerabilities: [
        { type: "Cross-Site Scripting (Reflected)", severity: "High", description: "استخدام innerHTML يسمح للمهاجم بإرسال <script> وسرقة الـ Cookies الخاصة بالمستخدمين.", fix: "استخدم textContent بدلاً من innerHTML أو قم بتنقية المدخلات باستخدام مكتبة DOMPurify." }
      ]
    }
  },
  { 
    name: "تنفيذ أوامر النظام (RCE)", 
    code: "const exec = require('child_process').exec; exec('nslookup ' + domainName);",
    offlineReport: {
      summary: "كود يسمح بتنفيذ أوامر مباشرة على نظام التشغيل (Remote Code Execution).",
      vulnerabilities: [
        { type: "Command Injection", severity: "Critical", description: "المهاجم يمكنه إرسال domain; rm -rf / لتدمير الخادم بالكامل.", fix: "تجنب استخدام exec مع مدخلات المستخدم. استخدم توابع برمجية (APIs) للقيام بالمهمة أو تحقق من المدخلات عبر White List صارمة." }
      ]
    }
  },
  { 
    name: "تسريب مفاتيح API", 
    code: "const STRIPE_KEY = 'sk_test_4eC39HqLyjWDarjtT1zdp7dc';",
    offlineReport: {
      summary: "تم اكتشاف بيانات حساسة مشفرة بصلابة داخل الكود المصدري (Hardcoded Secrets).",
      vulnerabilities: [
        { type: "Sensitive Data Exposure", severity: "High", description: "وجود مفاتيح الـ API داخل الكود يسمح لأي شخص يصل للمستودع (Repository) بالوصول لحساباتك المالية.", fix: "انقل جميع المفاتيح إلى ملفات .env واستخدم متغيرات البيئة للوصول إليها." }
      ]
    }
  },
  { 
    name: "ثغرة SSRF (جلب صور)", 
    code: "axios.get(req.query.imageUrl).then(res => sendImage(res.data));",
    offlineReport: {
      summary: "إمكانية إجبار الخادم على طلب موارد داخلية غير مصرح بها.",
      vulnerabilities: [
        { type: "Server-Side Request Forgery", severity: "High", description: "المهاجم قد يرسل رابطاً مثل http://localhost:8080/admin للحصول على لوحة التحكم الداخلية.", fix: "تحقق من أن الرابط المرسل يتبع نطاقات محددة مسبقاً (Allow-list) وامنع الوصول لـ localhost والـ IPs الداخلية." }
      ]
    }
  },
  { 
    name: "تخطي المسارات (File Read)", 
    code: "fs.readFileSync('/var/www/uploads/' + req.query.file);",
    offlineReport: {
      summary: "رصد محاولة قراءة ملفات النظام عبر تلاعب بالمسارات.",
      vulnerabilities: [
        { type: "Path Traversal", severity: "High", description: "المهاجم يمكنه إرسال ../../../etc/passwd لقراءة ملف كلمات مرور النظام.", fix: "استخدم path.basename() للحصول على اسم الملف فقط ومنع استخدام النقاط المزدوجة." }
      ]
    }
  },
  { 
    name: "استخدام MD5 لتشفير كلمة السر", 
    code: "const hash = crypto.createHash('md5').update(password).digest('hex');",
    offlineReport: {
      summary: "استخدام خوارزمية تشفير ضعيفة جداً وسهلة الكسر.",
      vulnerabilities: [
        { type: "Insecure Hashing Algorithm", severity: "Medium", description: "خوارزمية MD5 معرضة لهجمات التصادم وقواميس الكلمات الجاهزة (Rainbow Tables).", fix: "انتقل لاستخدام خوارزمية Argon2id أو BCrypt مع جولات تكرار لا تقل عن 10." }
      ]
    }
  },
  { 
    name: "تخطي الصلاحيات (IDOR)", 
    code: "app.get('/api/user/:id', (req, res) => { const user = db.find(req.params.id); res.json(user); });",
    offlineReport: {
      summary: "عدم التحقق من ملكية البيانات قبل عرضها.",
      vulnerabilities: [
        { type: "Insecure Direct Object Reference", severity: "High", description: "يمكن لأي مستخدم تغيير الـ ID في الرابط لرؤية بيانات مستخدمين آخرين.", fix: "تأكد دائماً من أن الـ ID المطلوب يخص المستخدم المسجل حالياً في الـ Session." }
      ]
    }
  },
  { 
    name: "تعطيل حماية CORS", 
    code: "res.setHeader('Access-Control-Allow-Origin', '*');",
    offlineReport: {
      summary: "إعدادات CORS متساهلة جداً تسمح لأي موقع بالوصول لبياناتك.",
      vulnerabilities: [
        { type: "CORS Misconfiguration", severity: "Medium", description: "السماح بـ '*' يعني أن أي موقع خبيث يمكنه إرسال طلبات بالنيابة عن المستخدم وسرقة بياناته.", fix: "حدد النطاقات المسموح لها بالوصول بدقة ولا تستخدم النجمة أبداً في بيئة الإنتاج." }
      ]
    }
  },
  { 
    name: "إعادة توجيه غير آمنة", 
    code: "res.redirect(req.query.next);",
    offlineReport: {
      summary: "إمكانية توجيه المستخدمين لمواقع تصيد خارجية.",
      vulnerabilities: [
        { type: "Unvalidated Redirects", severity: "Low", description: "المهاجم قد يرسل رابطاً ينتهي بـ ?next=http://evil.com لسرقة بيانات الاعتماد.", fix: "تحقق من أن الوجهة تبدأ بـ '/' (توجيه داخلي) أو أنها تنتمي لقائمة نطاقات موثوقة." }
      ]
    }
  }
];

export const HTTP_REQUEST_EXAMPLES = [
  {
    name: "حقن SQL في URL",
    request: "GET /api/products?category=electronics' OR 1=1-- HTTP/1.1\nHost: shop.com\nAccept: */*"
  },
  {
    name: "ثغرة XSS في Header",
    request: "POST /feedback HTTP/1.1\nHost: example.com\nUser-Agent: <script>alert('pwned')</script>\nContent-Type: application/json\n\n{\"msg\": \"hello\"}"
  },
  {
    name: "غياب حماية CSRF",
    request: "POST /user/update-email HTTP/1.1\nHost: bank.com\nCookie: session=secret123\nContent-Type: application/x-www-form-urlencoded\n\nemail=attacker@evil.com"
  }
];
