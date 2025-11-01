import { connectDB } from "../../../lib/mongodb";
import AppointmentEN from "../../../models/AppointmentEN";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    await connectDB();
    const saved = await AppointmentEN.create(data);

    const recipient =
      data.branch === "Riyadh"
        ? "websitedesignbahrain@gmail.com"
        : "zulaikhakhalid541@gmail.com";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "bnooninfo@gmail.com",
        pass: "vydxquzqzibdmjle",
      },
    });

    await transporter.sendMail({
      from: `"Appointment Request" <bnooninfo@gmail.com>`,
      to: recipient,
      subject: `New Appointment Request (${data.branch})`,
      html: `
        <h3>New Appointment Request</h3>
        <p><b>I am interested in:</b> ${data.interest}</p>
        <p><b>Branch:</b> ${data.branch}</p>
        <p><b>Doctor:</b> ${data.doctor}</p>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Is this appointment for you?:</b> ${data.isForYou}</p>
        <p><b>Nationality:</b> ${data.nationality}</p>
        <p><b>Country of Residence:</b> ${data.countryOfResidence}</p>
        <p><b>City (if in Saudi Arabia):</b> ${data.cityIfInSA}</p>
        <p><b>Gender:</b> ${data.gender}</p>
        <p><b>Mobile:</b> ${data.mobile}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Preferred Date:</b> ${data.preferredDate}</p>
        <p><b>Preferred Time:</b> ${data.preferredTime}</p>
        <p><b>How did you hear about us?:</b> ${data.howHeard}</p>
      `,
    });

    return Response.json(
      { success: true, message: "Saved & email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ API Error:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
