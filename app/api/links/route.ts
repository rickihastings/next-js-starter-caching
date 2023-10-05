export function GET() {
  console.log('Returning links')

  return Response.json([
    {
      "link": "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
      "heading": "Docs",
      "content": "Learn about Next.js in an interactive course with quizzes!"
    },
    {
      "link": "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
      "heading": "Learn",
      "content": "Find in-depth information about Next.js features and API."
    },
    {
      "link": "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
      "heading": "Templates",
      "content": "Explore the Next.js 13 playground."
    },
    {
      "link": "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
      "heading": "Deploy",
      "content": "Instantly deploy your Next.js site to a shareable URL with Vercel."
    }
  ]);
}
