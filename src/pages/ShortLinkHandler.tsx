'use client'

import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export default function ShortLinkHandler() {
  const { shortLink } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const checkShortLink = async () => {
      if (!shortLink) return;

      let slug = shortLink;

      // Handle @Xhandle
      if (shortLink.startsWith('@')) {
        slug = shortLink.substring(1);
      }

      const { data } = await supabase
        .from('podcasts')
        .select('slug')
        .or(`slug.eq.${slug},x_handle.eq.${slug}`)
        .single();

      if (data) {
        navigate(`/resources/podcasts/${data.slug}`);
      } else {
        navigate('/my-podcasts'); // Fallback
      }
    };

    checkShortLink();
  }, [shortLink, navigate]);

  return <div className="text-center py-20">Redirecting...</div>;
}
