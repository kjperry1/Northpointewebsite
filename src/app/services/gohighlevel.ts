// GoHighLevel Webhook Integration
// Documentation: https://help.gohighlevel.com/support/solutions/articles/48001182922-webhooks

const GHL_WEBHOOK_URL = 'YOUR_GHL_WEBHOOK_URL_HERE'; // Replace with your GoHighLevel webhook URL

interface LeadData {
  name: string;
  email: string;
  source?: string;
  tags?: string[];
}

interface GHLContactResponse {
  success: boolean;
  contact?: {
    id: string;
    email: string;
    name: string;
  };
  error?: string;
}

export async function createGHLContact(leadData: LeadData): Promise<GHLContactResponse> {
  try {
    // Split name into first and last name for better organization
    const nameParts = leadData.name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const payload = {
      firstName,
      lastName,
      fullName: leadData.name,
      email: leadData.email,
      source: leadData.source || 'North Pointe Website',
      tags: leadData.tags || ['investor-lead'],
      timestamp: new Date().toISOString(),
      // Additional fields you can use in GoHighLevel workflows
      customFields: {
        leadType: 'Investor',
        platform: 'North Pointe Capital Group',
      }
    };

    const response = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Webhook error! status: ${response.status}`);
    }

    return {
      success: true,
      contact: {
        id: 'webhook-' + Date.now(),
        email: leadData.email,
        name: leadData.name,
      },
    };
  } catch (error) {
    console.error('GoHighLevel Webhook Error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to submit contact',
    };
  }
}