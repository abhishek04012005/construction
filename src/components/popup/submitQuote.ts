import { supabase } from "../../supabase/Supabase";

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  project_type: string;
  requirements: string;
}

export const submitQuote = async (quoteData: QuoteFormData) => {
  try {
    const { data, error } = await supabase.from("quotes").insert([
      {
        name: quoteData.name,
        email: quoteData.email,
        phone: quoteData.phone,
        project_type: quoteData.project_type,
        requirements: quoteData.requirements,
        status: "pending",
      },
    ]);

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error("Error submitting quote:", error);
    return { success: false, error };
  }
};