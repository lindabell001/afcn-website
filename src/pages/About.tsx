import PageShell from "@/components/PageShell";
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
    <PageShell
      title="About Us"
      subtitle="Meet the patriots leading the America First Citizens Network."
    >
      <div className="space-y-10">
        <Bio name="Linda Bell Harrell" title="Chair, America First Citizens Network (@lindabell0091)" image={linda}>
          <p>
            My name is Linda Bell Harrell. As an 80-year-old great-grandmother who took the
            class "Americanism vs Communism" the semester before President John F. Kennedy was
            murdered, I have watched our beloved country descend into totalitarianism. In recent
            years I have seen the color revolution being enacted on our own soil.
          </p>
          <p>
            With Donald Trump, I am watching America turn back to the America envisioned by our
            Founders. I want American citizens to become the kind of citizens Benjamin Franklin
            envisioned — and to pass that legacy of freedom on to my great-grandsons (paternal
            twins) so they can live in a country of freedom.
          </p>
          <p>
            That is why I built the MAGA DARTS game — as a tech geek and patriot, I wanted to
            create a fun way for everyday people to get involved, earn points for America First
            advocacy, and support our mission. This is the original Tea Party spirit on
            steroids. I am giving everything I have left to this fight because this is our
            moment. Every American who loves this country can be part of the solution.
          </p>
        </Bio>

        <Bio name="Norine Cantor" title="Director of Membership (@NCantor58)" image={norine}>
          <p>
            My name is Norine Cantor, and I serve as Director of Membership for America First
            Citizens Network.
          </p>
          <p>
            I am a longtime America First grassroots patriot and an original Tea Party member.
            From the very beginning, I have fought to return our government to We the People and
            defend the Constitution our Founders gave us. I have served as President of the
            Lanier Republican Assembly, held leadership roles with the Georgia Republican
            Assembly (GRA), run for 2nd Vice Chair of the Georgia GOP, and served as First Vice
            Chair of the Hall County GOP.
          </p>
          <p>
            I have seen too many good people grow discouraged, but I refuse to quit. My heart is
            still fully in this fight. Today I am honored to help build AFCN's membership and
            local chapters so ordinary patriots across Georgia — and across the nation — can
            stand together, get involved, and take our country back.
          </p>
          <p>
            This work feels like the original Tea Party spirit brought back stronger than ever.
            I am grateful to stand shoulder-to-shoulder with Linda and every member who wants to
            restore the Republic for our children and grandchildren.
          </p>
          <p>
            You can reach Norine directly at{" "}
            <a
              href="mailto:nhcantor58@gmail.com"
              className="text-patriot-red font-semibold hover:underline"
            >
              nhcantor58@gmail.com
            </a>
            .
          </p>
        </Bio>

        <Bio name="Randy Cooper" title="President (@MAGABuzzPac)" image={randy}>
          <p>
            My name is Randy Cooper, and I serve as President of America First Citizens Network.
          </p>
          <p>
            I am a proud America First patriot and Marine veteran who has spent years building
            tools, content, and technology to amplify our movement. Through MAGA Buzz PAC and
            other projects, I work to engage everyday citizens, spread the America First
            message, and make it easier for patriots to get involved.
          </p>
          <p>
            Like so many of us, I grew tired of watching our nation drift away from the
            principles our Founders gave us. I decided to do something about it — using my
            skills in web development, AI, and media to create practical ways for people to
            participate and contribute.
          </p>
          <p>
            I am honored to lead AFCN alongside Linda and Norine. Together we are building a
            strong, grassroots network that puts country first and gives every patriot a place
            to belong and a way to fight.
          </p>
          <p>
            This is the original fighting spirit of the Tea Party and the MAGA movement — alive
            and growing stronger every day.
          </p>
        </Bio>
      </div>
    </PageShell>
  );
};

export default About;
