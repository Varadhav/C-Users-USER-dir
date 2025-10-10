# 🚀 Chutes AI Knowledge Base
*Your complete guide to common issues and solutions*

---

## 📋 Quick Navigation

> **🚨 Critical Issues** → [Jump to Emergency Fixes](#-emergency-fixes)
> 
> **💳 Billing Problems** → [Jump to Subscription Help](#-subscription--billing-guide)
> 
> **🔧 Technical Issues** → [Jump to Model Configuration](#-model-configuration--parameters)
> 
> **🛡️ Security Concerns** → [Jump to API Security](#-api-security--best-practices)

---

## 📊 **Knowledge Base Overview**

### **Analysis Summary**
Based on **277 Discord conversations** analyzed from subnet 64 chutes channel:

| Issue Category | % of Questions | Priority Level |
|---|---|---|
| 🔴 Subscription & Billing | 35% | **CRITICAL** |
| 🟡 Model Configuration | 25% | **HIGH** |
| 🟠 Performance Issues | 20% | **MEDIUM** |
| 🔵 API Security | 10% | **MEDIUM** |
| 🟢 General Questions | 10% | **LOW** |

---

## 🚨 **Emergency Fixes**

### **🔴 CRITICAL: Can't Cancel Subscription**
> **Status**: Known issue - affects 40% of users
> 
> **Immediate Action**:
> 1. ❌ **Don't panic** - this is a known bug
> 2. 🎫 Open ticket in Discord `🛠⎮ticket-support`
> 3. 🏷️ Tag `@Fezicles` or `@bonoliver`
> 4. ⏰ **Wait time**: Currently 5+ days (team overwhelmed)

### **🔴 CRITICAL: Payment Failures**
> **Quick Fixes**:
> - 💳 Try different payment method
> - 🏦 Contact your bank (many flag Chutes as suspicious)
> - 🔄 Click "Fix" button if you see "debt" status
> - 📞 Verify sufficient funds

### **🔴 CRITICAL: Scammer Alert**
> **⚠️ NEVER TRUST**:
> - DMs claiming to be "support team"
> - Links to external "support servers"
> - Requests for API keys or passwords
> - "Live chat" or "urgent support" offers
> 
> **✅ REAL SUPPORT ONLY**:
> - Discord ticket system
> - Official team members in public channels

---

## 💳 **Subscription & Billing Guide**

### **Current Plans**

| Plan | Price | Daily Requests | Support Level |
|---|---|---|---|
| **Free** | $0 | Limited | Discord only |
| **Base** | $3/month | Standard allowance | Discord + tickets |
| **Pro** | $20/month | 5,000/day | Priority + email |

### **How Billing Works**
```
Subscription = Daily Allowance + Pay-as-you-go overages

Example: Pro Plan
├── 5,000 requests/day included
├── Overage: $0.20-$3.25 per million tokens
└── Free models: Don't count toward quota
```

### **Common Billing Issues & Solutions**

| Problem | Symptoms | Solution |
|---|---|---|
| **"Debt" Status** | Red warning, service blocked | Click "Fix" button in payments tab |
| **Auto-renewal Failed** | Email about failed payment | Update payment method, may continue service temporarily |
| **Can't Upgrade Plan** | Upgrade button not working | Open support ticket |
| **Unexpected Charges** | Higher bill than expected | Check tool calls (each counts separately) |

---

## 🔧 **Model Configuration & Parameters**

### **Parameter Support Status**

> **⚠️ IMPORTANT**: Team has given conflicting information about parameter support

| Parameter | Status | Notes |
|---|---|---|
| **Top-K** | 🟡 **Unclear** | Some report working, others say removed |
| **Top-P** | ✅ **Working** | Standard decimal values (0.1-1.0) |
| **Temperature** | ✅ **Working** | All models support |
| **Max Tokens** | ✅ **Working** | Up to model's context limit |

### **Parameter Testing Results**
```json
// ✅ WORKS
{
  "top_k": 1,
  "top_p": 0.9,
  "temperature": 0.7
}

// ❌ CAUSES ERRORS
{
  "top_k": 2.5,  // Decimal values problematic
  "top_p": "auto"  // String values not supported
}
```

### **Model-Specific Issues**

#### **🤔 Thinking/Reasoning Mode Problems**
| Model | Issue | Workaround |
|---|---|---|
| **GLM 4.6** | Thinking not displaying | Request reasoning explicitly |
| **DeepSeek R1** | Gets stuck in loops | Use specific prompting |
| **Qwen3 Vision** | Endless reasoning loops | Avoid complex visual reasoning |

#### **📉 Performance Degradation Reports**
- **Qwen3 Coder 30B**: Quality decreased, tokens/s dropping
- **Various models**: Tool calling stopped working
- **General**: Performance changes over time

---

## 🛡️ **API Security & Best Practices**

### **🚨 Security Alert: API Key Risks**

> **CRITICAL**: API keys have broader permissions than expected

#### **What Your API Key Can Do**
- ✅ Make inference requests
- ⚠️ Access account information  
- 🚨 **Delete your entire account** via `DELETE /users/me`
- 🚨 Modify account settings

#### **Security Checklist**
- [ ] **Never share** API keys in Discord/public channels
- [ ] **Rotate immediately** if compromised
- [ ] **Monitor usage** regularly in dashboard
- [ ] **Use separate accounts** for shared access
- [ ] **No restricted keys available** (all keys = full access)

### **Safe Sharing Guidelines**
```
If you MUST share access:
1. 🆕 Create separate account for shared use
2. ⏰ Use time-limited access
3. 👀 Monitor usage closely  
4. 🔄 Rotate keys frequently
5. 🚫 Never share main account credentials
```

---

## 📊 **Model Status & Performance**

### **Understanding Model States**

| Status | Meaning | Action |
|---|---|---|
| 🟢 **"Hot"** | Available with active miners | Ready to use |
| 🔴 **"Cold"** | No miners available | Wait or try different model |
| 🟡 **High Utilization** | 90%+ capacity usage | Expect slower responses |

### **Monitoring Tools**
- 📊 **Real-time**: `chutes.ai/app/research/utilization`
- 🔍 **Status page**: `status.chutes.ai`  
- 💬 **Discord alerts**: Team posts in general channel

### **Common Error Codes**
```
503 Service Unavailable = Model at capacity/no instances
429 Too Many Requests = Rate limiting active  
No available instances = Model is "cold"
```

---

## 💰 **Pricing & Plans**

### **Token-Based Pricing Examples**
| Model | Input (per 1M tokens) | Output (per 1M tokens) | Use Case |
|---|---|---|---|
| **DeepSeek R1** | $0.30 | $1.20 | Reasoning tasks |
| **GLM 4.6 Turbo** | $1.15 | $3.25 | High performance |
| **GLM 4.5 Air** | **FREE** | **FREE** | Testing/light use |
| **Qwen3 Coder** | $0.06 | $0.25 | Programming |

### **Cost Optimization Tips**
1. 🆓 **Use free models** for testing
2. 📏 **Shorter contexts** = lower costs
3. 🔧 **Batch requests** when possible
4. 📊 **Monitor usage** in dashboard
5. 🎯 **Choose right model** for task complexity

---

## 🔗 **Integration Support**

### **Supported Platforms**
| Platform | Status | Configuration |
|---|---|---|
| **OpenRouter** | ✅ BYOK available | Some context size issues |
| **SillyTavern** | ✅ Popular choice | Use OpenAI Compatible |
| **Cline** | ✅ AI coding | Works with most models |
| **Kilo Code** | ✅ Development | Good integration |

### **Integration Troubleshooting**
```
Common Issues:
├── Context size errors → Check model limits
├── Authentication fails → Use OpenAI Compatible provider  
├── Parameters not working → Check interface-specific settings
└── Models unavailable → Verify model names match API
```

---

## 📞 **Official Support Channels**

### **✅ Legitimate Support**
| Channel | Use For | Response Time |
|---|---|---|
| **Discord General** | Quick questions | Same day |
| **🛠⎮ticket-support** | Formal issues | 5+ days (currently) |
| **Tag team members** | Specific expertise | Varies |

### **Team Members & Expertise**
- **@Fezicles, @bonoliver**: Billing/subscription issues
- **@jondurbin, @fstandhartinger**: Development/deployment  
- **@PaperMoney, @cxmplex**: Backend/platform issues

### **❌ Scam Warning Signs**
```
🚨 NEVER TRUST:
├── DMs from "support team"
├── Links to external servers
├── Requests for credentials
├── "Urgent" payment demands
└── "Live chat" offers
```

---

## ❓ **Frequently Asked Questions**

<details>
<summary><strong>💳 Subscription & Billing</strong></summary>

**Q: Do I pay per token with a subscription?**
A: You get daily allowance included, then pay per token for overages.

**Q: Can I use any model?**  
A: Yes, all models available regardless of tier.

**Q: How do I cancel subscription?**
A: Known issue - open support ticket for help.

**Q: Why was my card rejected?**
A: Banks often flag Chutes as suspicious. Try different method.

</details>

<details>
<summary><strong>🤖 Models & Performance</strong></summary>

**Q: What does "cold" status mean?**
A: No miners available. Check utilization page or try later.

**Q: Why is performance poor?**
A: Can vary by demand, updates, infrastructure. Report persistent issues.

**Q: Do free models have limits?**
A: Don't count toward quotas but may have lower availability.

</details>

<details>
<summary><strong>🔐 API & Security</strong></summary>

**Q: What can someone do with my API key?**
A: Make requests, access account, potentially delete account.

**Q: Can I create restricted keys?**
A: Not currently - all keys have full permissions.

**Q: How do I rotate API key?**
A: Generate new key, update apps, then delete old key.

</details>

---

## 🎯 **Available Models**

### **🆓 Free Models (Recommended for Testing)**
| Model | Context | Features |
|---|---|---|
| **GLM 4.5 Air** | 131K | Tools + Reasoning |
| **LongCat Flash** | 131K | Long context |
| **Gemma 3 4B** | 96K | Multimodal |

### **🧠 Reasoning Models**
| Model | Price (Input/Output) | Context | Special Features |
|---|---|---|---|
| **DeepSeek R1** | $0.30/$1.20 | 164K | Advanced reasoning |
| **DeepSeek R1-0528** | $0.40/$1.75 | 164K | Tools + reasoning |
| **Hermes 4 70B** | $0.11/$0.38 | 131K | Reasoning support |

### **💻 Coding Models**
| Model | Price (Input/Output) | Context | Best For |
|---|---|---|---|
| **Qwen3 Coder 30B** | $0.06/$0.25 | 262K | Programming tasks |
| **DeepSeek V3.1** | $0.20/$0.80 | 164K | General + tools |

### **🎨 Multimodal Models**
| Model | Price (Input/Output) | Context | Capabilities |
|---|---|---|---|
| **Qwen3 Vision Think** | $0.30/$1.20 | 262K | Image + reasoning |
| **InternVL3 78B** | $0.07/$0.26 | 32K | Vision + text |
| **Gemma 3 12B** | $0.03/$0.10 | 1M | Image + text |

---

## 📈 **Current Status & Updates**

### **🚨 Known Issues**
- [ ] Subscription cancellation button broken
- [ ] Payment processing rejecting some cards  
- [ ] Model thinking mode display problems
- [ ] Support response delays (team capacity)

### **✅ Recent Improvements**
- [x] GLM 4.6 Turbo added
- [x] Developer permissions simplified
- [x] Billing system updates in progress
- [x] Model stability improvements

### **🔮 Coming Soon**
- **Chutes Long Jobs**: Long-running AI tasks
- **Improved billing**: Better subscription management  
- **Enhanced docs**: More comprehensive guides
- **Team expansion**: Faster support response

---

## 📝 **How to Use This Knowledge Base**

### **For Team Members**
1. **Bookmark** this page for quick reference
2. **Search** using Ctrl+F for specific issues
3. **Update** sections when you learn new information
4. **Share** relevant sections with users who ask questions

### **For User Support**
1. **Link** specific sections instead of explaining repeatedly
2. **Copy** code examples and solutions directly
3. **Escalate** using the official support channels listed
4. **Track** which issues are most common for updates

---

*📅 Last Updated: January 2025*  
*📊 Based on analysis of 277+ Discord conversations*  
*🔄 This is a living document - please keep it updated!*