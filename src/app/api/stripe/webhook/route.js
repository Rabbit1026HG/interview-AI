// import { buffer } from "micro";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: "2024-06-20",
// });

// export const config = {
//   api: {
//     bodyParser: false, // Disable Next.js default body parsing to properly handle raw request
//   },
// };

// async function handler(req, res) {
//   if (req.method === "POST") {
//     const buf = await buffer(req);
//     const sig = req.headers["stripe-signature"];

//     let event;

//     try {
//       event = stripe.webhooks.constructEvent(
//         buf,
//         sig,
//         process.env.STRIPE_WEBHOOK_SECRET
//       );
//     } catch (err) {
//       console.error("Webhook signature verification failed:", err.message);
//       return res.status(400).send(`Webhook Error: ${err.message}`);
//     }

//     // Handle the event
//     switch (event.type) {
//       case "checkout.session.completed":
//         const session = event.data.object;
//         // Handle successful checkout session completion
//         console.log("Checkout Session completed:", session);
//         // Save the session or perform the necessary logic here
//         break;
//       default:
//         console.log(`Unhandled event type: ${event.type}`);
//     }

//     res.json({ received: true });
//   } else {
//     res.setHeader("Allow", "POST");
//     res.status(405).end("Method Not Allowed");
//   }
// }

// export default handler;
