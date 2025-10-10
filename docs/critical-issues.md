# 🚨 Critical Issues & Emergency Fixes

> **Immediate solutions for the most common and urgent problems**

## 🔴 **Top Critical Issues**

### **1. Subscription Cancellation Problems**

**📊 Impact**: Affects 40% of users  
**⏰ Status**: Known issue, team working on fix  
**🎯 Priority**: CRITICAL

#### **Problem**
Users cannot cancel subscriptions - the cancel button loads indefinitely but doesn't work.

#### **Immediate Solution**
1. ❌ **Don't panic** - this is a confirmed bug
2. 🎫 **Open ticket** in Discord `🛠⎮ticket-support` channel
3. 🏷️ **Tag team members**: `@Fezicles` or `@bonoliver` for billing issues
4. ⏰ **Expected wait**: Currently 5+ days (team is overwhelmed)
5. 💳 **Block payments** on your card if concerned about charges

#### **What NOT to Do**
- ❌ Don't keep clicking the cancel button
- ❌ Don't fall for "quick support" DM scams
- ❌ Don't share your API key with anyone claiming to help

---

### **2. Payment Failures & Card Rejections**

**📊 Impact**: 25% of billing issues  
**⏰ Status**: Ongoing issue with multiple causes  
**🎯 Priority**: CRITICAL

#### **Problem**
Multiple users report credit cards being rejected during subscription attempts.

#### **Quick Fixes (Try in Order)**
1. **💳 Try different payment method**
   - Different credit card
   - PayPal (if available)
   - Debit card instead of credit

2. **🏦 Contact your bank**
   - Many banks flag Chutes transactions as suspicious
   - Ask them to whitelist Chutes payments
   - Verify international transactions are enabled

3. **💰 Check account status**
   - Ensure sufficient funds available
   - Look for "debt" status in dashboard
   - Click "Fix" button if you see payment errors

4. **🔄 Clear browser data**
   - Clear cookies and cache
   - Try incognito/private browsing mode
   - Disable browser extensions

#### **If Still Failing**
- Open support ticket with payment method details
- Include error messages or screenshots
- Mention which browsers/devices you've tried

---

### **3. Scammer Activity Alert**

**📊 Impact**: Increasing reports of fake support  
**⏰ Status**: Ongoing security threat  
**🎯 Priority**: CRITICAL

#### **🚨 Scam Warning Signs**

| ❌ **NEVER TRUST** | ✅ **LEGITIMATE SUPPORT** |
|---|---|
| DMs from "support team" | Only public Discord channels |
| Links to external "support servers" | Official ticket system only |
| Requests for API keys/passwords | Team never asks for credentials |
| "Live chat" or "urgent support" offers | Team responds in public threads |
| "Quick fix" solutions via DM | Solutions posted publicly |

#### **If You've Been Contacted by Scammers**
1. **🚫 Do NOT respond** or click any links
2. **📸 Screenshot** the conversation
3. **🚨 Report** to Discord and block the user
4. **🔄 Rotate your API keys** immediately if you shared them
5. **💬 Post** in Discord general channel to warn others

#### **How to Verify Real Support**
- ✅ Team members have official roles in Discord
- ✅ Real support happens in public channels
- ✅ Official team members: `@Fezicles`, `@bonoliver`, `@jondurbin`, `@fstandhartinger`, `@PaperMoney`, `@cxmplex`

---

### **4. Model "Cold" Status Issues**

**📊 Impact**: 20% of technical issues  
**⏰ Status**: Infrastructure-related, varies by demand  
**🎯 Priority**: HIGH

#### **Problem**
Users get "No available instances" or "Model is cold" errors when trying to use specific models.

#### **Understanding Model States**
| Status | Meaning | What to Do |
|---|---|---|
| 🟢 **"Hot"** | Available with active miners | ✅ Ready to use |
| 🔴 **"Cold"** | No miners available | ⏰ Wait or try different model |
| 🟡 **High Utilization** | 90%+ capacity | ⏰ Expect slower responses |

#### **Immediate Solutions**
1. **📊 Check utilization**: Visit `chutes.ai/app/research/utilization`
2. **🔄 Try different model**: Use similar model that's "hot"
3. **⏰ Wait and retry**: Models often come back online within 30 minutes
4. **🆓 Use free models**: They often have better availability

#### **Alternative Models to Try**
| If This is Cold | Try This Instead |
|---|---|
| DeepSeek R1 | DeepSeek R1-0528 or Hermes 4 70B |
| GLM 4.6 Turbo | GLM 4.5 Air (free) or GLM 4.6 |
| Qwen3 Vision | InternVL3 78B or Gemma 3 12B |

---

### **5. API Key Security Breaches**

**📊 Impact**: 10% of security issues  
**⏰ Status**: User education needed  
**🎯 Priority**: HIGH

#### **Problem**
API keys have broader permissions than users expect, including potential account deletion.

#### **What API Keys Can Do**
- ✅ Make inference requests (expected)
- ⚠️ Access account information
- 🚨 **Delete your entire account** via `DELETE /users/me`
- 🚨 Modify account settings and billing

#### **If Your API Key is Compromised**
1. **🔄 Rotate immediately**:
   - Generate new API key in dashboard
   - Update all applications
   - Delete the old key

2. **🔍 Check account activity**:
   - Review recent API usage
   - Check for unauthorized changes
   - Verify billing information

3. **🛡️ Secure your account**:
   - Change account password
   - Enable 2FA if available
   - Review connected applications

#### **Prevention Best Practices**
- 🚫 Never share API keys in Discord or public channels
- 🔐 Use environment variables, not hardcoded keys
- 👥 Create separate accounts for shared access
- 📊 Monitor usage regularly
- 🔄 Rotate keys periodically

---

## 🆘 **Emergency Contact Information**

### **For Critical Issues**
| Issue Type | Contact Method | Expected Response |
|---|---|---|
| **Account compromised** | Discord ticket + tag `@Fezicles` | Within 24 hours |
| **Billing emergencies** | Discord ticket + tag `@bonoliver` | 1-5 days |
| **Service outages** | Check `status.chutes.ai` first | Real-time updates |
| **Security concerns** | Discord general channel | Community + team |

### **What to Include in Emergency Tickets**
- 🆔 **Account username/email**
- 📅 **When the issue started**
- 🔄 **Steps you've already tried**
- 📸 **Screenshots of errors**
- 🌐 **Browser/device information**

---

## 📊 **Issue Tracking**

### **Current Status of Critical Issues**
| Issue | Status | ETA for Fix | Workaround Available |
|---|---|---|---|
| Subscription cancellation | 🔴 Known bug | TBD | ✅ Support tickets |
| Payment processing | 🟡 Investigating | TBD | ✅ Multiple methods |
| Scammer activity | 🟠 Ongoing | N/A | ✅ User education |
| Model availability | 🟡 Infrastructure | Ongoing | ✅ Alternative models |
| API key security | 🟢 Documented | N/A | ✅ Best practices |

### **How to Stay Updated**
- 📊 **Status page**: `status.chutes.ai`
- 💬 **Discord announcements**: General channel
- 📚 **This documentation**: Check for updates
- 🐦 **Twitter**: `@chutes_ai` for major updates

---

*📅 Last Updated: January 2025*  
*🔄 Report new critical issues in Discord or GitHub Issues*