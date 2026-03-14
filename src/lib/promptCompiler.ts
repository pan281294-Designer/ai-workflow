export interface WorkflowState {
    category?: string;
    industry?: string;
    template?: string;
    features?: string;
    style?: string;
    content?: string;
    productName?: string;
    headline?: string;
    targetAudience?: string;
    cta?: string;
    colorPreference?: string;
}

export function compilePrompt(state: WorkflowState): string {
    const {
        category = "landing page",
        industry = "SaaS",
        productName = "Product",
        headline = "",
        features = "",
        targetAudience = "General Audience",
        cta = "Get Started",
        style = "Clean and modern",
        colorPreference = "Default brand colors",
    } = state;

    return `Create a modern ${industry} ${category} for ${productName}.

Sections:
- Hero: ${headline}
- Features: ${features.replace(/\\n/g, ', ')}
- Testimonials
- CTA: ${cta}

Target Audience:
${targetAudience}

Style:
${style}. Color preference: ${colorPreference}.`;
}
