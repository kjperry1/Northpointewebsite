# GoHighLevel Webhook Integration Setup Guide

This website uses GoHighLevel webhooks to capture investor leads. Follow these simple steps to complete the setup.

---

## Setup Steps (5 minutes)

### Step 1: Create a Webhook in GoHighLevel

1. Log in to your **GoHighLevel** account
2. Navigate to **Settings** → **Webhooks** (or **Automation** → **Webhooks**)
3. Click **Create Webhook** or **Add Webhook**
4. Configure the webhook:
   - **Name**: North Pointe Website Leads
   - **Webhook Type**: Incoming Webhook (or Custom Webhook)
   - **Method**: POST
5. Click **Save** or **Create**
6. **Copy the webhook URL** that GoHighLevel generates (it looks like: `https://services.leadconnectorhq.com/hooks/...`)

### Step 2: Update Your Website Code

1. Open the file: `/src/app/services/gohighlevel.ts`
2. Find this line:
   ```typescript
   const GHL_WEBHOOK_URL = 'YOUR_GHL_WEBHOOK_URL_HERE';
   ```
3. Replace it with your actual webhook URL:
   ```typescript
   const GHL_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/YOUR_ACTUAL_WEBHOOK_URL';
   ```
4. Save the file

### Step 3: Test the Integration

1. Go to your website
2. Fill out the gate entry form with test data:
   - Name: `Test User`
   - Email: `test@example.com`
3. Submit the form
4. Check GoHighLevel:
   - Go to **Contacts** or **Opportunities**
   - Look for the test contact you just created
   - Verify the data was captured correctly

---

## Data Sent to GoHighLevel

Each form submission sends the following data:

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "fullName": "John Smith",
  "email": "john@example.com",
  "source": "Website Gate Entry",
  "tags": ["investor-network", "gated-entry"],
  "timestamp": "2026-03-18T10:30:00.000Z",
  "customFields": {
    "leadType": "Investor",
    "platform": "North Pointe Capital Group"
  }
}
```

---

## Setting Up Automation in GoHighLevel

Once your webhook is receiving data, you can create powerful automations:

### Option 1: Create a Workflow

1. Go to **Automation** → **Workflows**
2. Click **Create Workflow**
3. Set the trigger to **Webhook Received** (select your webhook)
4. Add actions:
   - ✅ Send welcome email
   - ✅ Add to nurture sequence
   - ✅ Assign to sales team member
   - ✅ Send SMS notification
   - ✅ Create task for follow-up

### Option 2: Create a Contact Trigger

1. Go to **Contacts**
2. Set up automation rules based on:
   - **Tag**: `investor-network`
   - **Source**: `Website Gate Entry` or `Website CTA Form`
3. Configure automatic actions

---

## Form Locations on Website

There are **two forms** that submit to GoHighLevel:

### 1. Gate Entry Form (First Screen)
- **Source**: `Website Gate Entry`
- **Tags**: `investor-network`, `gated-entry`
- **Purpose**: Captures leads before they access the site

### 2. Bottom CTA Form (Contact Section)
- **Source**: `Website CTA Form`
- **Tags**: `investor-network`, `bottom-cta`
- **Purpose**: Captures additional leads from engaged visitors

---

## Webhook Data Mapping

Use these fields in your GoHighLevel workflows:

| Website Field | GoHighLevel Field | Notes |
|--------------|-------------------|-------|
| Full Name | `fullName` | Complete name as entered |
| First Name | `firstName` | Auto-parsed from full name |
| Last Name | `lastName` | Auto-parsed from full name |
| Email | `email` | Email address |
| Source | `source` | Where the lead came from |
| Tags | `tags` | Array of tags for segmentation |
| Lead Type | `customFields.leadType` | Always "Investor" |
| Platform | `customFields.platform` | Always "North Pointe Capital Group" |

---

## Troubleshooting

### ❌ "Failed to submit" error

**Possible causes:**
- Webhook URL is incorrect or incomplete
- Webhook is disabled in GoHighLevel
- Network/CORS issues

**Solutions:**
1. Double-check your webhook URL (should start with `https://services.leadconnectorhq.com/hooks/`)
2. Verify the webhook is **Active** in GoHighLevel settings
3. Check browser console (F12) for detailed error messages
4. Test the webhook directly using a tool like Postman

### ❌ Leads not appearing in GoHighLevel

**Check:**
1. Webhook is **Active** in GoHighLevel
2. Webhook URL is correct in `/src/app/services/gohighlevel.ts`
3. Review **GoHighLevel Activity Logs** for incoming webhook data
4. Check **Contacts** section - leads might be created but not visible in default view

### ❌ Duplicate contacts being created

**Solution:**
- In GoHighLevel, enable **Contact Deduplication** based on email address
- Go to **Settings** → **Business Profile** → **Duplicate Detection**

---

## Advanced: Webhook Response Handling

By default, GoHighLevel webhooks return a simple success response. If you need to capture the contact ID or other data returned by GoHighLevel, you can modify the webhook response handling in `/src/app/services/gohighlevel.ts`.

Example:
```typescript
const responseData = await response.json();
console.log('GoHighLevel Response:', responseData);
```

---

## Testing with Mock Data

Before going live, test with these sample contacts:

1. **Test 1**: Dr. Sarah Johnson, sarah.johnson@example.com
2. **Test 2**: Michael Chen, m.chen@example.com  
3. **Test 3**: Emily Rodriguez, emily.r@example.com

After testing, delete these contacts from GoHighLevel.

---

## Security Best Practices

✅ **Keep your webhook URL private** - Don't share it publicly
✅ **Enable webhook authentication** in GoHighLevel if available
✅ **Monitor webhook activity** regularly for suspicious submissions
✅ **Set up rate limiting** if you experience spam
✅ **Use CAPTCHA** if you get bot submissions (can add to forms)

---

## Next Steps After Setup

1. ✅ **Test thoroughly** with multiple submissions
2. ✅ **Create email templates** for automated responses
3. ✅ **Set up SMS sequences** for high-priority leads
4. ✅ **Configure notifications** to alert your team
5. ✅ **Create custom pipelines** for investor tracking
6. ✅ **Build reporting dashboards** to track lead sources

---

## Support & Resources

- **GoHighLevel Webhooks Guide**: https://help.gohighlevel.com/support/solutions/articles/48001182922-webhooks
- **GoHighLevel Community**: https://community.gohighlevel.com/
- **GoHighLevel Support**: Available in your GHL dashboard

---

## Quick Reference

**File to edit**: `/src/app/services/gohighlevel.ts`
**Line to change**: `const GHL_WEBHOOK_URL = 'YOUR_GHL_WEBHOOK_URL_HERE';`
**Where to get webhook URL**: GoHighLevel → Settings → Webhooks → Create Webhook

---

Need help? Check the browser console (F12) for detailed error messages, or review the GoHighLevel activity logs to see incoming webhook data.
