import linda from "@/assets/linda-headshot.jpg";
import norine from "@/assets/norine-headshot.jpg";
import randy from "@/assets/randy-headshot.jpg";

const Bio = ({
  name,
  title,
  image,
  children,
}: {
  name: string;
  title: string;
  image: string;
  children: React.ReactNode;
}) => (
  <article className="grid md:grid-cols-[240px_1fr] gap-8 items-start bg-card border border-border rounded-md p-6 md:p-8 shadow-card">
    <img
      src={image}
      alt={`Portrait of ${name}`}
      loading="lazy"
      width={768}
      height={768}
      className="w-full aspect-square object-cover rounded-sm bg-cream"
    />
    <div>
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-patriot-red font-semibold uppercase tracking-wide text-sm mt-1">
        {title}
      </p>
      <div className="mt-4 space-y-4 text-foreground/85 leading-relaxed">{children}</div>
    </div>
  </article>
);

const About = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-red-600 mb-4">About Us</h1>
          <p className="text-2xl text-gray-700 max-w-2xl mx-auto">
            Meet the patriots leading the America First Citizens Network.
          </p>
        </div>

        <div className="space-y-10">
          <Bio name="Linda Bell Harrell" title="Chair, America First Citizens Network (@lindabell0091)" image={linda}>
            <p>
              My name is Linda Bell Harrell. As an 80-year-old great-grandmother who took the
              class "Americanism vs Communism" the semester before President John F. Kennedy was
              murdered, I have watched our beloved country descend into totalitarianism...
            </p>
            <p>
              With Donald Trump, I am watching America turn back to the America envisioned by our
              Founders... That is why I built the MAGA DARTS game...
            </p>
          </Bio>

          <Bio name="Norine Cantor" title="Director of Membership (@NCantor58)" image={norine}>
            <p>
              My name is Norine Cantor, and I serve as Director of Membership for America First
              Citizens Network.
            </p>
            <p>
              I am a longtime America First grassroots patriot and an original Tea Party member...
            </p>
            <p>
              You can reach Norine directly at{" "}
              <a href="mailto:nhcantor58@gmail.com" className="text-patriot-red font-semibold hover:underline">
                nhcantor58@gmail.com
              </a>.
            </p>
          </Bio>

          <Bio name="Randy Cooper" title="President (@MAGABuzzPac)" image={randy}>
            <p>
              My name is Randy Cooper, and I serve as President of America First Citizens Network.
            </p>
            <p>
              I am a proud America First patriot and Marine veteran... I am honored to lead AFCN alongside Linda and Norine.
            </p>
          </Bio>
        </div>
      </div>
    </>
  );
};

export default About;
