import emailjs from "@emailjs/browser";

// REPLACE THESE WITH YOUR ACTUAL KEYS
const SERVICE_ID = "service_cfl8k3r";
const TEMPLATE_ID = "template_hl7vg4e";
const PUBLIC_KEY = "iuBDlFyHnBIJ-owDw";

interface EmailData {
    name: string;
    email: string;
    message: string;
    phone?: string;
}

export const sendEmail = async (data: EmailData) => {
    try {
        const templateParams = {
            name: data.name,
            email: data.email,
            phone: data.phone || "N/A",
            message: data.message, // This will contain the structured body
        };

        const response = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            templateParams,
            PUBLIC_KEY
        );
        return response;
    } catch (error) {
        console.error("Email send failed:", error);
        throw error;
    }
};

export const formatMembershipEmail = (formData: any) => {
    return `
=========== New Membership Registration ===========
Name: ${formData.name}
Role: ${formData.role}
Father/Husband Name: ${formData.fatherHusband}
DOB: ${formData.dob}
Phone: ${formData.phone}
Email: ${formData.email}
Address: ${formData.address}
===================================================
  `;
};
