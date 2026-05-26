import SiteLayout from "@/components/SiteLayout";

const Index = () => {
  return (
    <SiteLayout>
      <div style={{ textAlign: "center", padding: "100px 20px" }}>
        <h1 style={{ fontSize: "48px", color: "#ff0000" }}>
          America First Citizens Network
        </h1>
        <p style={{ fontSize: "28px", margin: "30px 0" }}>
          — Active Citizenship for the Next 250 Years —
        </p>
        <a href="/play-darts.html" 
           style={{ 
             background: "#ff0000", 
             color: "white", 
             padding: "20px 40px", 
             fontSize: "24px", 
             textDecoration: "none", 
             borderRadius: "8px" 
           }}>
          → PLAY MAGA-DARTS NOW!
        </a>
      </div>

      <div style={{ background: "#0a2540", color: "white", padding: "60px 20px", textAlign: "center" }}>
        <h2>Be Active</h2>
        <p style={{ fontSize: "22px" }}>
          Any America First patriot can play <strong>MAGA DARTS</strong> and earn points daily.
        </p>
      </div>

      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>The Vision</h2>
        <p style={{ fontSize: "20px", maxWidth: "800px", margin: "0 auto" }}>
          America First Citizens Network is your organization to secure the future for the next 250 years.
        </p>
      </div>
    </SiteLayout>
  );
};

export default Index;
