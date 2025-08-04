# 📦 راهنمای Publish و Version Bump

این راهنما نحوه publish کردن و version bump کردن پکیج `austro-byte-datepicker` رو توضیح می‌ده.

## 🚀 مراحل Publish

### 1. آماده‌سازی کد

```bash
# اطمینان از اینکه همه تغییرات commit شده
git status

# اگر تغییرات جدید داریم
git add .
git commit -m "Your commit message"
git push origin1 master
```

### 2. Build کردن پروژه

```bash
# Build کردن کامپوننت‌ها
yarn build

# یا
npm run build
```

### 3. تست کردن پکیج

```bash
# تست کردن محتوای پکیج (بدون publish)
npm pack --dry-run
```

### 4. Version Bump

```bash
# روش 1: Manual version bump
# فایل package.json رو باز کنید و version رو تغییر بدید
# مثال: "1.0.2" -> "1.0.3"

# روش 2: استفاده از npm version
npm version patch    # 1.0.2 -> 1.0.3 (bug fixes)
npm version minor    # 1.0.2 -> 1.1.0 (new features)
npm version major    # 1.0.2 -> 2.0.0 (breaking changes)
```

### 5. Publish کردن

```bash
# Login به npm (اگر قبلاً نکرده‌اید)
npm login

# Publish کردن
npm publish

# یا برای publish به صورت public
npm publish --access public
```

### 6. Push کردن تغییرات

```bash
# Push کردن version bump
git push origin1 master
git push origin1 --tags
```

## 📋 چک‌لیست قبل از Publish

### ✅ کد
- [ ] همه تغییرات commit شده
- [ ] کد تست شده و کار می‌کنه
- [ ] Build موفق بوده

### ✅ پکیج
- [ ] `package.json` آپدیت شده
- [ ] `version` درست bump شده
- [ ] `description` مناسب
- [ ] `keywords` درست
- [ ] `homepage` درست
- [ ] `repository` درست

### ✅ فایل‌ها
- [ ] `.npmignore` درست تنظیم شده
- [ ] فایل‌های اضافی حذف شده
- [ ] `dist/` folder موجود
- [ ] `README.md` آپدیت شده

### ✅ تست
- [ ] `npm pack --dry-run` اجرا شده
- [ ] محتوای پکیج درست
- [ ] سایز پکیج مناسب

## 🔄 انواع Version Bump

### Patch (1.0.2 -> 1.0.3)
```bash
npm version patch
```
**برای:**
- Bug fixes
- Documentation updates
- Minor improvements

### Minor (1.0.2 -> 1.1.0)
```bash
npm version minor
```
**برای:**
- New features
- New components
- Backward compatible changes

### Major (1.0.2 -> 2.0.0)
```bash
npm version major
```
**برای:**
- Breaking changes
- Major API changes
- Complete rewrites

## 📝 مثال کامل

```bash
# 1. آماده‌سازی
git status
git add .
git commit -m "Add new feature: custom themes"
git push origin1 master

# 2. Build
yarn build

# 3. تست
npm pack --dry-run

# 4. Version bump (minor چون feature جدید)
npm version minor

# 5. Publish
npm publish

# 6. Push
git push origin1 master
git push origin1 --tags
```

## 🛠️ دستورات مفید

### بررسی وضعیت npm
```bash
# بررسی login
npm whoami

# بررسی پکیج
npm view austro-byte-datepicker

# بررسی version های موجود
npm view austro-byte-datepicker versions
```

### مدیریت پکیج
```bash
# Unpublish (فقط در 72 ساعت اول)
npm unpublish austro-byte-datepicker@1.0.3

# Deprecate کردن version
npm deprecate austro-byte-datepicker@1.0.2 "Use version 1.0.3 instead"
```

### GitHub Pages
```bash
# آپدیت gh-pages branch
git checkout gh-pages
git checkout master -- index.html demo-interactive.html
git add .
git commit -m "Update demo files"
git push origin1 gh-pages
git checkout master
```

## ⚠️ نکات مهم

### قبل از Publish
1. **همیشه `yarn build` اجرا کنید**
2. **`npm pack --dry-run` چک کنید**
3. **README.md آپدیت کنید**
4. **CHANGELOG.md آپدیت کنید**

### بعد از Publish
1. **GitHub Pages آپدیت کنید**
2. **Release notes بنویسید**
3. **تست کنید که پکیج درست نصب می‌شه**

### Version Naming
- **Patch**: Bug fixes (1.0.2 -> 1.0.3)
- **Minor**: New features (1.0.2 -> 1.1.0)
- **Major**: Breaking changes (1.0.2 -> 2.0.0)

## 🔧 Troubleshooting

### مشکل: npm publish failed
```bash
# چک کردن login
npm whoami

# Login مجدد
npm login

# چک کردن package name
npm view austro-byte-datepicker
```

### مشکل: Version already exists
```bash
# Version bump کنید
npm version patch
# یا
npm version minor
# یا
npm version major
```

### مشکل: Build failed
```bash
# پاک کردن cache
yarn cache clean
npm cache clean --force

# نصب مجدد dependencies
rm -rf node_modules
yarn install
```

## 📚 منابع مفید

- [npm publish documentation](https://docs.npmjs.com/cli/v8/commands/npm-publish)
- [Semantic Versioning](https://semver.org/)
- [npm version documentation](https://docs.npmjs.com/cli/v8/commands/npm-version)

---

**نکته:** همیشه قبل از publish کردن، مطمئن شوید که کد تست شده و کار می‌کند! 🚀 