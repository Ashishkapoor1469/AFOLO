Build an MVP inspired by: @https://github.com/Ashishkapoor1469/AFOLO. Use gitmvp mcp if available.

Project Type: Personal Portfolio Website

Tech Stack:
- Next.js (React framework)
- TypeScript
- Tailwind CSS (CSS framework)
- Radix UI (Component library)
- GSAP (Animation library)
- Genkit (AI framework)
- Firebase (Likely for hosting, based on README and apphosting.yaml)
- Octokit (GitHub API client)

Architecture:
The application appears to follow a component-based architecture typical of React applications. It's structured with reusable components for different sections of the portfolio (Hero, Skills, Experience, etc.). The use of Next.js suggests a server-side rendering (SSR) or static site generation (SSG) approach. The presence of `src/ai` directory and Genkit dependencies indicates the potential use of AI features, though the specific functionality isn't immediately clear from the provided files.

Key Features:
- Hero Section: Introduction with a personal headline and potentially a brief bio.
- GitHub Projects: Display of GitHub repositories.
- Skills: Showcase of technical skills.
- Experience: Timeline or list of professional experiences.
- Contact Form: A way for visitors to get in touch.
- Theme Toggle: Light/dark mode switch.
- Smooth Scrolling: Navigation using anchor links with smooth scrolling effect.
- AI integration (potential): The `src/ai` directory suggests AI-powered features, but the exact functionality is not clear without further investigation.

Complexity Level: Medium

MVP Guidance:

For an MVP, focus on the core functionality of a personal portfolio website. Here's a breakdown of implementation steps:

1. Core Structure:
   - Create a basic Next.js application using `npx create-next-app@latest`.
   - Set up Tailwind CSS for styling. Follow the official Tailwind CSS documentation for Next.js.
   - Implement a basic layout with Header, Main content, and Footer sections.

2. Hero Section:
   - Create a `Hero` component (similar to `src/components/hero.tsx`).
   - Include a headline, a brief introduction, and a professional-looking image.
   - Directive: AI, create a simple Hero component with a headline, subtitle, and a placeholder image. Use Tailwind CSS for styling.

3. Skills Section:
   - Create a `Skills` component (similar to `src/components/skills.tsx`).
   - List your key skills using simple text or icons.
   - Directive: AI, create a Skills component that displays a list of skills using Tailwind CSS grid layout.

4. Experience Section:
   - Create an `Experience` component (similar to `src/components/experience.tsx`).
   - List your previous work experiences with company name, job title, and a brief description.
   - Directive: AI, create an Experience component that displays a list of work experiences with company name, title, and description. Use Tailwind CSS for styling.

5. GitHub Projects Section:
   - For the MVP, simplify this. Instead of fetching data from the GitHub API, hardcode a few of your most impressive projects.
   - Create a `GithubProjects` component (similar to `src/components/github-projects.tsx`).
   - Display the project name, a brief description, and a link to the repository.
   - Directive: AI, create a GithubProjects component that displays a list of hardcoded GitHub projects with name, description, and link. Use Tailwind CSS for styling.

6. Contact Form:
   - Create a `Contact` component (similar to `src/components/contact.tsx`).
   - Include a simple form with fields for name, email, and message.
   - For the MVP, you can use a simple email service like EmailJS to handle form submissions.
   - Directive: AI, create a Contact component with a simple form for name, email, and message. Use Tailwind CSS for styling. Implement basic form validation.

7. Theme Toggle:
   - Implement a basic theme toggle using `next-themes`.
   - Directive: AI, implement a theme toggle component using next-themes that allows users to switch between light and dark mode.

8. Deployment:
   - Deploy the MVP to a platform like Vercel or Netlify.

Omit:
- Complex UI components from Radix UI (like Accordion, Dialog, etc.) unless absolutely necessary for the core functionality.
- AI features using Genkit. This can be added in later iterations.
- Advanced animations with GSAP. Focus on basic styling with Tailwind CSS.
- Database integration or backend functionality.

Prioritize:
- Clean and responsive design using Tailwind CSS.
- Clear and concise content.
- Easy navigation.

This MVP will provide a functional personal portfolio website that showcases your skills and experience. You can then iterate on this MVP by adding more features, improving the design, and integrating AI capabilities.
