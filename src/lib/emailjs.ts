// EmailJS configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_bgt1jyy', 
  TEMPLATE_ID: 'template_8nlx7jp', 
  PUBLIC_KEY: 't1TCYIJxs2Mubb8hf', 
};

// Email template parameters interface
export interface EmailTemplateParams {
  from_name: string;
  from_company: string;
  from_phone: string;
  from_email: string;
  from_industry: string;
  from_job_title: string;
  to_email: string;
}