import Feed from "@components/Feed";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Sparking Brilliance
        <br />
        <span className="magenta_gradient text-center mt-4">Amplified by AI</span>
      </h1>
      <p className="desc text-center">
        Discover and share AI-Powered prompts to ignite engaging conversations,
        inspire creativity, and foster collaborative thinking.
      </p>
      <Feed/>
    </section>
  );
}
