
"use server";

import { z } from "zod";

// Schema for the casting form
const CastingApplicationSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  age: z.coerce.number().min(18, { message: "You must be at least 18 years old." }),
  country: z.string().min(2, { message: "Country is required." }),
  introduction: z.string().min(50, { message: "Introduction must be at least 50 characters." }).max(1000),
  videoUrl: z.string().url({ message: "Please enter a valid URL." }),
});

export async function submitCastingApplication(prevState: any, formData: FormData) {
  try {
    const validatedFields = CastingApplicationSchema.safeParse({
      name: formData.get("name"),
      age: formData.get("age"),
      country: formData.get("country"),
      introduction: formData.get("introduction"),
      videoUrl: formData.get("videoUrl"),
    });

    if (!validatedFields.success) {
      return {
        status: "error",
        message: "Invalid form data.",
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }
    
    // In a real application, you would save the application to a database here.
    
    return { status: "success", message: "Application submitted successfully! We will review it shortly." };
  } catch (error) {
    return { status: "error", message: "An unexpected error occurred. Please try again." };
  }
}
