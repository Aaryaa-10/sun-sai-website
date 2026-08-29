import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      organisation,
    } = body;

    // Basic server-side validation
    if (!name || !email || !phone) {
      return Response.json(
        {
          success: false,
          message: "Name, email and phone are required.",
        },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Sun Sai Website <onboarding@resend.dev>",
      to: ["aryaamoriya@gmail.com", "pardhantravel.neeta@gmail.com"],
      subject: `New Sun Sai Enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Sun Sai Website Enquiry</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Organisation / Company:</strong> ${
            organisation || "Not provided"
          }</p>

          <hr />

          <p>
            This enquiry was submitted through the Sun Sai website.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          success: false,
          message: "Unable to send enquiry.",
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Enquiry sent successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Enquiry API error:", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}