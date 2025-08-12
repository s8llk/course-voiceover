# Voice Landing (Vite + React + Tailwind)

## تشغيل محلياً
```bash
npm install
npm run dev
```

## النشر على GitHub Pages
1) غيّر قيمة `base` في `vite.config.js` بحسب اسم مستودعك:
   - لمستودع مشروع مثل `username/voice-landing` استخدم: `/voice-landing/`
   - لموقع `username.github.io` استخدم: `/`
2) اربط المستودع وادفع الشيفرة:
```bash
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```
3) انشر:
```bash
npm run deploy
```
ثم من Settings → Pages اختر فرع `gh-pages`.  

> نصيحة: سكربت `predeploy` ينشئ `404.html` تلقائياً لدعم توجيه صفحات SPA.