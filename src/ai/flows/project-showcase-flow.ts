'use server';
/**
 * @fileOverview A project showcase AI agent.
 *
 * - enhanceProjectDetails - A function that handles enhancing project details.
 * - EnhanceProjectDetailsInput - The input type for the enhanceProjectDetails function.
 * - EnhanceProjectDetailsOutput - The return type for the enhanceProjectDetails function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceProjectDetailsInputSchema = z.object({
  name: z.string().describe('The name of the project repository.'),
  description: z.string().describe('The original description of the project from GitHub.'),
});
export type EnhanceProjectDetailsInput = z.infer<typeof EnhanceProjectDetailsInputSchema>;

const EnhanceProjectDetailsOutputSchema = z.object({
    description: z.string().describe("An engaging, concise description of the project (2-3 sentences). Highlight the project's purpose and key features."),
    tags: z.array(z.string()).describe("A list of 3-5 relevant technology tags (e.g., 'React', 'Node.js', 'AI').")
});
export type EnhanceProjectDetailsOutput = z.infer<typeof EnhanceProjectDetailsOutputSchema>;

export async function enhanceProjectDetails(input: EnhanceProjectDetailsInput): Promise<EnhanceProjectDetailsOutput> {
  return enhanceProjectDetailsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceProjectDetailsPrompt',
  input: {schema: EnhanceProjectDetailsInputSchema},
  output: {schema: EnhanceProjectDetailsOutputSchema},
  prompt: `You are an expert project manager and tech marketer. Your task is to refine a project's description to make it more compelling for a portfolio showcase.

Project Name: {{{name}}}
Original Description: {{{description}}}

Based on the provided information, generate an improved, engaging description and a list of relevant technology tags.`,
});

const enhanceProjectDetailsFlow = ai.defineFlow(
  {
    name: 'enhanceProjectDetailsFlow',
    inputSchema: EnhanceProjectDetailsInputSchema,
    outputSchema: EnhanceProjectDetailsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
