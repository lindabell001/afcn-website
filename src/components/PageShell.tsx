import SiteLayout from "@/components/SiteLayout";

const PageHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <section className="bg-patriot-blue text-primary-foreground">
    <div className="container py-14 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">{title}</h1>
      {subtitle && <p className="mt-3 text-lg text-white/85 max-w-2xl mx-auto">{subtitle}</p>}
      <div className="mt-6 mx-auto h-1 w-24 bg-patriot-red" />
    </div>
  </section>
);

export const PageShell = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => (
  <SiteLayout>
    <PageHeader title={title} subtitle={subtitle} />
    <section className="py-16">
      <div className="container-narrow">{children}</div>
    </section>
  </SiteLayout>
);

export default PageShell;
