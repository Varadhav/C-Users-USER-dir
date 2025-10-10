# Chutes AI Knowledge Base

## Table of Contents
1. [Critical Issues & Quick Fixes](#critical-issues--quick-fixes)
2. [Subscription & Billing](#subscription--billing)
3. [Model Configuration & Parameters](#model-configuration--parameters)
4. [API Security & Best Practices](#api-security--best-practices)
5. [Model Status & Performance](#model-status--performance)
6. [Pricing & Plans](#pricing--plans)
7. [Integration Support](#integration-support)
8. [Official Support Channels](#official-support-channels)
9. [Frequently Asked Questions](#frequently-asked-questions)
10. [Available Models](#available-models)

---

## Critical Issues & Quick Fixes

### 🚨 Unsubscribe Button Not Working
**Problem**: Users cannot cancel subscriptions - button loads indefinitely but doesn't work.

**Status**: Known issue acknowledged by team
**Workaround**: 
1. Open a ticket in Discord's 🛠⎮ticket-support channel
2. Tag @Fezicles or @bonoliver for billing issues
3. Be patient - support is currently overwhelmed

**Important**: This is the #1 reported issue. Team is working on billing system updates.

### 💳 Payment Failures & Card Rejections
**Problem**: Multiple users report cards being rejected during subscription attempts.

**Solutions**:
1. Try different payment method
2. Contact your bank - some flag Chutes transactions as suspicious
3. Open support ticket if payment continues to fail
4. Check if you have sufficient funds

### 🔒 Scammer Alert
**Warning**: Fake support accounts are active in Discord
- **Never** click links to "support servers" or "live chat"
- **Never** share API keys in DMs
- **Official support only** through Discord ticket system
- Real staff will **never** DM you first

---

## Subscription & Billing

### Current Subscription Tiers
Based on Discord conversations and website structure:

#### Free Tier
- Limited daily requests
- Access to free models (don't count toward quota)
- Basic support through Discord

#### Base Plan ($3/month)
- Daily request allowance
- Access to all models
- Pay-as-you-go for overages

#### Pro Plan ($20/month) 
- 5,000 requests per day
- Priority support (email access)
- All models included

### Billing Structure
- **Subscription + Pay-as-you-go**: Get daily allowance, then pay per million tokens
- **Free models**: Don't count toward daily quotas
- **Token pricing**: Varies by model (check `/v1/models` endpoint)
- **Tool calls**: Each tool call counts as separate request

### Common Billing Issues
1. **"Debt" status**: Usually means failed payment - click "Fix" button in payments tab
2. **Automatic renewal failures**: System will attempt billing but may continue service temporarily
3. **No email support**: Email bounces back - use Discord tickets only
4. **Account deletion**: Must be done manually by team

---

## Model Configuration & Parameters

### Parameter Support Status
**Critical Confusion**: Team members have given conflicting information about parameter support.

#### Top-K Parameter
- **Status**: Unclear - conflicting reports
- **Evidence**: Some users report it working, others say it's removed
- **Error testing**: `top_k: 2.5` causes errors, `top_k: 1` works
- **Default value**: -1 typically means disabled

#### Top-P Parameter  
- **Status**: Generally reported as working
- **Usage**: Standard decimal values (0.1-1.0)

#### Parameter Validation
- **Decimal values**: May cause errors in some contexts
- **Integer values**: Generally safer
- **Interface differences**: SillyTavern shows more options than web interface

### Model-Specific Issues

#### Thinking/Reasoning Mode
**Known Problems**:
- GLM 4.6: Thinking not displaying properly in some interfaces
- DeepSeek R1: Reasoning mode getting stuck in loops
- Qwen3 Vision Think: Endless loops when entering reasoning mode

**Workaround**: 
- Request reasoning explicitly in prompts
- Check interface-specific settings
- Some models require specific headers/parameters

#### Model Performance Degradation
**Reported Issues**:
- Qwen3 Coder 30B: Quality decreased, tokens/s dropping
- Various models: Performance changes over time
- Tool calling: Some models stopped calling tools properly

---

## API Security & Best Practices

### API Key Risks
**Critical Security Concern**: API keys may have broader permissions than expected.

#### What API Keys Can Do
- Make inference requests
- Potentially delete accounts via `DELETE /users/me` endpoint
- Access account information
- Modify account settings

#### Security Best Practices
1. **Rotate keys immediately** if compromised
2. **Don't share keys** in Discord or other public channels
3. **Monitor usage** regularly in dashboard
4. **Use separate keys** for different applications when possible

#### Current Limitations
- **No restricted access keys** available
- **No scope limitations** on API keys
- **Authorization = API key** (same token for both)

### Safe Sharing Guidelines
**If you must share access**:
1. Create separate account for shared use
2. Use time-limited access
3. Monitor usage closely
4. Rotate keys frequently
5. Never share your main account credentials

---

## Model Status & Performance

### Understanding Model Availability

#### Model States
- **"Hot"**: Available with active miners
- **"Cold"**: No miners available, requests will fail
- **Utilization %**: Shows current capacity usage

#### Monitoring Tools
- **Real-time status**: `chutes.ai/app/research/utilization`
- **Status page**: `status.chutes.ai`
- **Discord alerts**: Team posts updates about issues

#### Common Error Codes
- **503 Service Unavailable**: Model at capacity or no instances
- **429 Too Many Requests**: Rate limiting active
- **No available instances**: Model is "cold"

### Performance Issues
**Frequent Problems**:
1. Models going cold during high demand
2. Utilization reaching 90%+ causing slowdowns  
3. Quality degradation over time for specific models
4. Token/second rates decreasing

**When to Report Issues**:
- Consistent quality problems
- Unexpected model behavior
- Performance significantly worse than usual
- Models stuck in "cold" state for extended periods

---

## Pricing & Plans

### Current Pricing Structure
Based on API data and Discord discussions:

#### Token-Based Pricing (Pay-as-you-go)
Examples from `/v1/models` endpoint:
- **DeepSeek R1**: $0.30 input / $1.20 output per million tokens
- **GLM 4.6 Turbo**: $1.15 input / $3.25 output per million tokens
- **Free models**: $0.00 (GLM 4.5 Air, LongCat Flash, etc.)

#### Subscription Benefits
- **Daily allowances**: Reduce per-token costs
- **All model access**: No restrictions by tier
- **Support levels**: Higher tiers get better support

### Pricing Considerations
- **Tool calls**: Each counts as separate request
- **Context length**: Full model context available
- **Free models**: Unlimited usage, don't count toward quotas
- **Custom models**: Pricing varies, contact team

---

## Integration Support

### Supported Integrations
Based on website footer and Discord discussions:
- **OpenRouter**: BYOK integration available
- **SillyTavern**: Popular frontend, some configuration issues
- **Cline**: AI coding assistant
- **Kilo Code**: Development tool
- **Roo Code**: GitHub integration

### Common Integration Issues

#### OpenRouter Integration
- **BYOK setup**: Some users report difficulties
- **Context size errors**: Even with low usage
- **Model availability**: May differ from direct Chutes access

#### SillyTavern Configuration
- **Parameter access**: More options than web interface
- **Thinking mode**: Parsing issues with some models
- **Authentication**: Use OpenAI Compatible provider

#### General Integration Tips
1. **Use OpenAI Compatible** provider when available
2. **Check model-specific** configuration requirements
3. **Monitor usage** across different interfaces
4. **Report integration-specific** issues with details

---

## Official Support Channels

### Legitimate Support
✅ **Discord**: Main support channel
- 🛠⎮ticket-support for formal tickets
- General channel for quick questions
- Tag appropriate team members

✅ **Team Members** (as of latest info):
- **@Fezicles, @bonoliver**: Billing/subscription issues
- **@jondurbin, @fstandhartinger**: Development/deployment
- **@PaperMoney, @cxmplex**: Backend/platform issues

### Scam Warning Signs
❌ **Fake Support Indicators**:
- DMs from "support team"
- Links to external "support servers"
- Requests for API keys or login info
- "Live chat" or "quick support" links
- Urgency tactics or threats

### Support Response Times
- **General questions**: Usually same day in Discord
- **Billing issues**: Currently 5+ days due to team being overwhelmed
- **Technical issues**: Varies by complexity
- **Priority support**: Available with Pro plan ($20/month)

---

## Frequently Asked Questions

### Subscription & Billing

**Q: Do I pay per token with a subscription?**
A: You get a daily allowance included, then pay per token for overages at discounted rates.

**Q: Can I use any model with my subscription?**
A: Yes, all models are available regardless of subscription tier.

**Q: How do I cancel my subscription?**
A: Currently there's a known issue with the cancel button. Open a support ticket for assistance.

**Q: Why was my card rejected?**
A: Some banks flag Chutes as suspicious. Try a different payment method or contact your bank.

### Models & Performance

**Q: What does "cold" model status mean?**
A: No miners are available to run that model. Check the utilization page or try again later.

**Q: Why is my model performing poorly?**
A: Performance can vary based on demand, model updates, or infrastructure changes. Report persistent issues.

**Q: Do free models have limitations?**
A: Free models don't count toward quotas but may have lower availability during peak times.

### API & Security

**Q: What can someone do with my API key?**
A: Potentially make requests, access account info, and possibly delete your account. Guard keys carefully.

**Q: Can I create restricted API keys?**
A: Not currently available. All API keys have full account permissions.

**Q: How do I rotate my API key?**
A: Generate a new key in your dashboard and update all applications before deleting the old key.

### Technical Issues

**Q: Why isn't thinking mode working?**
A: Known issue with several models. Try requesting reasoning explicitly or check interface settings.

**Q: My integration isn't working. What should I do?**
A: Use OpenAI Compatible provider when possible, check model-specific requirements, and report with details.

---

## Available Models

### Current Model Catalog
Based on `/v1/models` API endpoint (sample of popular models):

#### Reasoning Models
- **DeepSeek R1**: $0.30/$1.20 per million tokens, reasoning support
- **DeepSeek R1-0528**: $0.40/$1.75 per million tokens, tools + reasoning
- **Qwen3 Vision Think**: $0.30/$1.20 per million tokens, multimodal reasoning

#### General Purpose
- **DeepSeek V3.1**: $0.20/$0.80 per million tokens, tools support
- **GLM 4.6 Turbo**: $1.15/$3.25 per million tokens, high performance
- **Hermes 4 70B**: $0.11/$0.38 per million tokens, reasoning support

#### Free Models
- **GLM 4.5 Air**: Free, tools + reasoning
- **LongCat Flash**: Free, long context
- **Gemma 3 4B**: Free, multimodal

#### Specialized Models
- **Qwen3 Coder**: $0.06/$0.25 per million tokens, coding focused
- **InternVL3 78B**: $0.07/$0.26 per million tokens, vision + text
- **Mistral Small 3.2**: $0.06/$0.18 per million tokens, multimodal

### Model Features
- **Context lengths**: Vary by model (8K to 262K tokens)
- **Supported features**: JSON mode, tools, structured outputs, reasoning
- **Input modalities**: Text, image (select models)
- **Quantization**: FP8, BF16 depending on model

### Model Selection Tips
1. **Free models** for testing and light usage
2. **Reasoning models** for complex problem-solving
3. **Vision models** for image analysis tasks
4. **Coder models** for programming assistance
5. **Check utilization** before choosing high-demand models

---

## Status & Updates

### Current Known Issues
1. **Subscription cancellation** - Button not working
2. **Payment processing** - Some cards being rejected
3. **Model thinking mode** - Display issues across multiple models
4. **Support response times** - Delayed due to team capacity

### Recent Improvements
- GLM 4.6 Turbo added
- Billing system updates in progress
- Developer permissions simplified
- Model stability improvements

### Upcoming Features
- **Chutes Long Jobs**: Long-running AI tasks & workflows
- **Improved billing system**: Better subscription management
- **Enhanced documentation**: More comprehensive guides
- **Team expansion**: Faster support response times

---

*Last updated: January 2025*
*This knowledge base is compiled from Discord community discussions and official sources*