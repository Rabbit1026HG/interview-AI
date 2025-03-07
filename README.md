# Interview Amigo

Interview Amigo is an AI-powered SaaS platform designed to help users enhance their job interview skills through interactive practice sessions. By leveraging AI-driven insights, users can refine their responses, gain confidence, and improve their chances of success in real interviews.

## Features

- **AI-Generated Interview Questions**: Users receive customized interview questions based on their uploaded resume, job description, and job title.
- **Interactive Mock Interviews**: Users can respond to questions using their camera and microphone for a real interview experience.
- **AI-Powered Feedback & Scoring**: Get instant feedback, including strengths, weaknesses, and improvement suggestions.
- **Iterative Practice**: Users can refine their responses by reattempting interviews based on AI feedback.
- **Secure Authentication**: Powered by Clerk for seamless and secure user authentication.
- **Cloud-Based Data Management**: Supabase integration ensures efficient backend data storage and management.
- **Seamless Payment Integration**: Stripe is used for handling subscription and payment transactions.

## Tech Stack

- **Frontend**: Next.js
- **Authentication**: Clerk
- **Backend & Database**: Supabase
- **AI & Machine Learning**: OpenAI API
- **Payments**: Stripe

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/top0329/interview-amigo.git
   cd interview-amigo
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Set up environment variables by creating a `.env.local` file and adding the required keys:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
   CLERK_SECRET_KEY=<your-clerk-secret-key>
    
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    
   NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/
   NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/
    
   NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
    
   OPENAI_API_KEY=<your-openai-api-key>
    
   OPENAI_ASSISTANT_ID=<your-openai-assistant-id>
    
   NEXT_PUBLIC_SERVICE_ID=<your-service-id>
   NEXT_PUBLIC_TEMPLATE_ID=<your-template-id>
   NEXT_PUBLIC_USER_ID=<your-user-id>
    
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<your-stripe-publishable-key>
   STRIPE_SECRET_KEY=<your-stripe-secret-key>
   CLERK_WEBHOOK_SECRET=<your-clerk-webhook-secret>
   STRIPE_WEBHOOK_SECRET=<your-stripe-webhook-secret>
   ```
4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Live Demo

[Visit Interview Amigo](https://interviewamigo.com)



## Contributing

We welcome contributions! Please submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the [MIT License](LICENSE).

---

<!-- Elevate your interview performance with **Interview Amigo** – your AI-powered interview coach! -->

