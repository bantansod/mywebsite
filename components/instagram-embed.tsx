"use client"

interface InstagramEmbedProps {
  url: string
  className?: string
}

export function InstagramEmbed({ url, className = "" }: InstagramEmbedProps) {
  // Extract post ID from Instagram URL using string methods instead of regex
  const getEmbedUrl = (instagramUrl: string) => {
    // Remove any query parameters first (like ?img_index=1)
    const cleanUrl = instagramUrl.split("?")[0]

    // Find the /p/ part in the URL
    const pIndex = cleanUrl.indexOf("/p/")
    if (pIndex === -1) return cleanUrl

    // Extract everything after /p/
    const afterP = cleanUrl.substring(pIndex + 3)

    // Get the post ID (everything before the next / or end of string)
    const slashIndex = afterP.indexOf("/")
    const postId = slashIndex === -1 ? afterP : afterP.substring(0, slashIndex)

    // Clean any remaining parameters
    const cleanPostId = postId.trim()

    return `https://www.instagram.com/p/${cleanPostId}/embed/`
  }

  return (
    <iframe
      src={getEmbedUrl(url)}
      width="100%"
      height="600"
      frameBorder={0}
      scrolling="no"
      allowTransparency
      className={`rounded-lg shadow-lg ${className}`}
      loading="lazy"
    />
  )
}
