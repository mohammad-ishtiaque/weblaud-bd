import type { ActionFunction } from "react-router";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const action: ActionFunction = async ({ request }) => {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { 
      status: 405, 
      headers: { "Content-Type": "application/json" } 
    });
  }

  try {
    const formData = await request.formData();
    const contactData: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    // Validate required fields
    if (!contactData.name || !contactData.email || !contactData.message) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: "Please fill in all required fields." 
      }), { 
        status: 400, 
        headers: { "Content-Type": "application/json" } 
      });
    }

    // Here you would integrate with your email service or database
    console.log("Contact form submission:", contactData);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Thank you for your message! We'll get back to you soon." 
    }), { 
      headers: { "Content-Type": "application/json" } 
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(JSON.stringify({ 
      success: false, 
      message: "Sorry, there was an error sending your message. Please try again." 
    }), { 
      status: 500, 
      headers: { "Content-Type": "application/json" } 
    });
  }
};