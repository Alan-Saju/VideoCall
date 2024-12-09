export const extractVideoId = (url: string): string | null => {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^"&?\/\s]{11})/
  );
  return match ? match[1] : null;
};

export const validateYouTubeUrl = (url: string): boolean => {
  return !!extractVideoId(url);
};