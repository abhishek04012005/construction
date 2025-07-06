"use client"

import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Define environment variables type check
const getSupabaseCredentials = (): { url: string; key: string } => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) {
    throw new Error('Missing Supabase credentials in environment variables')
  }

  return { url, key }
}

// Initialize Supabase client with type
const { url, key } = getSupabaseCredentials()
const supabase: SupabaseClient = createClient(url, key)

export { supabase }