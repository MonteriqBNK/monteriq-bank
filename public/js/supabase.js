// ============================================
// SUPABASE INITIALIZATION
// ============================================

(function () {
    const SUPABASE_URL = 'https://gpcgtccuerdnvuzsrxcw.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwY2d0Y2N1ZXJkbnZ1enNyeGN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MDc5OTEsImV4cCI6MjA4ODM4Mzk5MX0.NyXJ3wgWYYUorSbR9NqmFn3IHX4B2tJAOWIWIpTpJoU';

    if (!window.supabase || typeof window.supabase.createClient !== 'function') {
        console.error('❌ Supabase CDN not loaded. Make sure the CDN <script> tag comes before supabase.js');
        return;
    }

    const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: false,
            storage: window.localStorage
        }
    });

    // Expose under both names so auth.js and dashboard.js always find it
    window.supabaseClient = client;
    window.db = client;

    console.log('✅ Supabase initialized');
})();