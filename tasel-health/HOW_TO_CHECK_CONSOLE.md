# 🔍 How to Check Browser Console - Step by Step

## **EASIEST METHOD:**

### **1. Press F12 on your keyboard**
- This works in Chrome, Edge, Firefox, Brave

### **2. You'll see a panel open at the bottom (or side) of browser**

### **3. Click the "Console" tab** (should be one of the tabs at top of panel)

### **4. You'll see a blank area - that's the console!**

---

## **VISUAL GUIDE:**

```
┌────────────────────────────────────────────────────┐
│  Browser Address Bar: http://localhost:3000...     │
├────────────────────────────────────────────────────┤
│                                                     │
│  YOUR WEBSITE (Article page showing here)          │
│                                                     │
│  ← Back to Knowledge Hub  (the button)             │
│                                                     │
├────────────────────────────────────────────────────┤  ← Panel opens HERE
│  Elements | Console | Network | Sources | etc      │  ← Click "Console"
├────────────────────────────────────────────────────┤
│                                                     │
│  CONSOLE OUTPUT APPEARS HERE:                      │
│  > 🚀 HOOK FIRED - useSmartBackButton running     │
│  > 🔍 Full Referrer URL: http://...               │
│  > 📍 Extracted Path: /knowledge-hub/tms          │
│  >                                                  │
│                                                     │
└────────────────────────────────────────────────────┘
```

---

## **IF YOU DON'T SEE LOGS:**

### **Make sure you're in the "Console" tab (not "Elements" or other tabs)**

### **Try refreshing the page while console is open:**
1. Open console (F12)
2. Click "Console" tab
3. **Refresh the page** (F5 or Ctrl+R)
4. Logs should appear when page loads

---

## **ALTERNATIVE: Check if hook is running at all**

**Simple test:**
1. Open console (F12)
2. Type this in the console and press Enter:
   ```
   document.referrer
   ```
3. It will show the previous page URL
4. Send me what it shows!

---

## **WHAT TO DO:**

Try this simpler approach:

1. **Open browser** to any article
2. **Press F12**
3. **Type:** `document.referrer` (then press Enter)
4. **Tell me what it shows!**

This will help me understand what's happening! 🎯
