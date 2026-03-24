export const VILO_SCHEDULING_URL =
  'https://capu.villelab.com/schedule/reunion-descubrimiento-con-alvaro/';

export const VILO_DIAGNOSIS_ROUTE = '/diagnostico';

const FIDELIDAPP_URL = process.env.NEXT_PUBLIC_FIDELIDAPP_URL ?? '';
const FIDELIDAPP_ACCOUNT_ID = process.env.NEXT_PUBLIC_FIDELIDAPP_ACCOUNT_ID ?? '';

export interface ViloLeadPayload {
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  biggestBottleneck: string;
  urgency: string;
  context: string;
}

export interface ViloLeadAssessment {
  score: number;
  qualified: boolean;
  tag: string;
}

export function assessViloLead(lead: ViloLeadPayload): ViloLeadAssessment {
  let score = 0;

  if (['founder', 'owner', 'ceo', 'director'].includes(lead.role)) score += 12;
  if (['leads', 'follow-up', 'operaciones', 'propuestas'].includes(lead.biggestBottleneck)) score += 18;
  if (['30-dias', 'trimestre'].includes(lead.urgency)) score += 15;
  if (lead.context.trim().length >= 40) score += 15;
  if (lead.company.trim().length >= 3) score += 5;

  const qualified = score >= 32;

  return {
    score,
    qualified,
    tag: qualified ? 'vilo-diagnosis-qualified' : 'vilo-diagnosis-review',
  };
}

export async function saveViloLead(
  lead: ViloLeadPayload,
  assessment: ViloLeadAssessment,
): Promise<void> {
  if (!FIDELIDAPP_URL || !FIDELIDAPP_ACCOUNT_ID) return;

  try {
    await fetch(`${FIDELIDAPP_URL}/api/landing/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: `${lead.name} | ${lead.company}`.slice(0, 120),
        email: lead.email,
        phone: lead.phone,
        accountId: FIDELIDAPP_ACCOUNT_ID,
        tags: assessment.tag,
      }),
    });
  } catch {
    // Non-blocking: the funnel should continue even if lead persistence fails.
  }
}
