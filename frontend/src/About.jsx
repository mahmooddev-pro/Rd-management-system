import React from "react";

function About() {
  return (
    <div style={styles.container}>
      {/* Background glow */}
      <div style={styles.glowOne}></div>
      <div style={styles.glowTwo}></div>

      {/* ================= HERO ================= */}
     <section style={styles.hero}>

  {/* ================= LEFT CONTENT ================= */}

  <div style={styles.heroLeft}>

    <div style={styles.badge}>
      <span style={styles.badgeDot}></span>
      TRUSTED RD MANAGEMENT PLATFORM
    </div>


    <h1 style={styles.heading}>
      Simplifying
      <span style={styles.headingBlue}>
        {" "}Your RD Journey
      </span>
    </h1>


    <p style={styles.description}>
      A secure and modern platform designed to simplify
      Recurring Deposit operations, customer management,
      and digital passbook tracking through one centralized
      banking environment.
    </p>


    <div style={styles.heroActions}>

      <div style={styles.secureBadge}>
        <span>🔐</span>
        Secure Records
      </div>

      <div style={styles.secureBadge}>
        <span>⚡</span>
        Fast Operations
      </div>

      <div style={styles.secureBadge}>
        <span>📊</span>
        Digital Management
      </div>

    </div>

  </div>


  {/* ================= PREMIUM RD CARD ================= */}

  <div style={styles.visualWrapper}>

    <div style={styles.outerGlow}></div>


    <div
      style={styles.bankCard}

      onMouseEnter={(e) => {

        e.currentTarget.style.transform =
          "perspective(1100px) rotateX(4deg) rotateY(-5deg) translateY(-10px) scale(1.025)";

        e.currentTarget.style.boxShadow =
          "0 35px 75px rgba(15,23,42,.32), 0 0 50px rgba(37,99,235,.20)";
      }}

      onMouseLeave={(e) => {

        e.currentTarget.style.transform =
          "perspective(1100px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";

        e.currentTarget.style.boxShadow =
          "0 25px 55px rgba(15,23,42,.25)";
      }}
    >

      {/* Shine */}

      <div style={styles.cardShine}></div>


      {/* Header */}

      <div style={styles.cardHeader}>

        <div>

          <small style={styles.cardSmall}>
            RECURRING DEPOSIT
          </small>

          <h3 style={styles.cardTitle}>
            RD BANKING
          </h3>

        </div>


        <div style={styles.cardLogo}>
          ₹
        </div>

      </div>


      {/* Divider */}

      <div style={styles.cardLine}></div>


      {/* Center */}

      <div style={styles.cardCenter}>

        <span style={styles.cardLabel}>
          ACCOUNT MANAGEMENT
        </span>

        <strong style={styles.cardValue}>
          SMART • SECURE • SIMPLE
        </strong>

      </div>


      {/* Footer */}

      <div style={styles.cardFooter}>

        <span style={styles.systemActive}>

          <span style={styles.activeDot}>
            ●
          </span>

          SYSTEM ACTIVE

        </span>


        <span style={styles.year}>
          2026
        </span>

      </div>

    </div>

  </div>

</section>
      {/* ================= ABOUT STRIP ================= */}
      <section style={styles.aboutStrip}>
        <div>
          <span style={styles.sectionTag}>OUR PLATFORM</span>

          <h2 style={styles.sectionTitle}>Built for smarter RD management.</h2>
        </div>

        <p style={styles.stripText}>
          A centralized solution for managing customer accounts, deposits,
          passbook records and recurring deposit activities with efficiency and
          clarity.
        </p>
      </section>

      {/* ================= SERVICES ================= */}
      <section style={styles.section}>

  <div style={styles.sectionHeading}>

    <span style={styles.sectionTag}>
      CORE CAPABILITIES
    </span>

    <h2 style={styles.sectionTitle}>
      Everything you need, in one place.
    </h2>

    <p style={styles.sectionDescription}>
      Built around the everyday requirements of a modern
      and professional RD management environment.
    </p>

  </div>


  <div style={styles.cardGrid}>

    {/* ================= CUSTOMER ================= */}

    <div
      style={{
        ...styles.featureCard,
        ...styles.blueFeature,
      }}

      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "translateY(-7px)";

        e.currentTarget.style.boxShadow =
          "0 20px 42px rgba(37,99,235,.13)";

        e.currentTarget.querySelector(".feature-icon").style.transform =
          "scale(1.08)";

        e.currentTarget.querySelector(".feature-arrow").style.transform =
          "translateX(5px)";
      }}

      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "translateY(0)";

        e.currentTarget.style.boxShadow =
          "0 8px 25px rgba(15,23,42,.06)";

        e.currentTarget.querySelector(".feature-icon").style.transform =
          "scale(1)";

        e.currentTarget.querySelector(".feature-arrow").style.transform =
          "translateX(0)";
      }}
    >

      <div
        className="feature-icon"
        style={{
          ...styles.icon,
          background: "#edf4ff",
        }}
      >
        👤
      </div>

      <span style={styles.number}>
        01
      </span>

      <h3 style={styles.featureTitle}>
        Customer Management
      </h3>

      <p style={styles.featureText}>
        Manage RD customer records efficiently through
        a centralized and well-organized customer
        management environment.
      </p>

      <div style={styles.featureLine}></div>

      <span style={styles.featureLink}>
        Account Management

        <span
          className="feature-arrow"
          style={styles.featureArrow}
        >
          →
        </span>
      </span>

    </div>


    {/* ================= PASSBOOK ================= */}

    <div
      style={{
        ...styles.featureCard,
        ...styles.greenFeature,
      }}

      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "translateY(-7px)";

        e.currentTarget.style.boxShadow =
          "0 20px 42px rgba(16,185,129,.13)";

        e.currentTarget.querySelector(".feature-icon").style.transform =
          "scale(1.08)";

        e.currentTarget.querySelector(".feature-arrow").style.transform =
          "translateX(5px)";
      }}

      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "translateY(0)";

        e.currentTarget.style.boxShadow =
          "0 8px 25px rgba(15,23,42,.06)";

        e.currentTarget.querySelector(".feature-icon").style.transform =
          "scale(1)";

        e.currentTarget.querySelector(".feature-arrow").style.transform =
          "translateX(0)";
      }}
    >

      <div
        className="feature-icon"
        style={{
          ...styles.icon,
          background: "#ebfaf4",
        }}
      >
        💰
      </div>

      <span style={styles.number}>
        02
      </span>

      <h3 style={styles.featureTitle}>
        Deposit & Passbook
      </h3>

      <p style={styles.featureText}>
        Track recurring deposits, passbook entries and
        transaction history through a structured digital
        record system.
      </p>

      <div style={styles.featureLine}></div>

      <span style={styles.featureLink}>
        Transaction Management

        <span
          className="feature-arrow"
          style={styles.featureArrow}
        >
          →
        </span>
      </span>

    </div>


    {/* ================= SECURITY ================= */}

    <div
      style={{
        ...styles.featureCard,
        ...styles.purpleFeature,
      }}

      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "translateY(-7px)";

        e.currentTarget.style.boxShadow =
          "0 20px 42px rgba(124,58,237,.13)";

        e.currentTarget.querySelector(".feature-icon").style.transform =
          "scale(1.08)";

        e.currentTarget.querySelector(".feature-arrow").style.transform =
          "translateX(5px)";
      }}

      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "translateY(0)";

        e.currentTarget.style.boxShadow =
          "0 8px 25px rgba(15,23,42,.06)";

        e.currentTarget.querySelector(".feature-icon").style.transform =
          "scale(1)";

        e.currentTarget.querySelector(".feature-arrow").style.transform =
          "translateX(0)";
      }}
    >

      <div
        className="feature-icon"
        style={{
          ...styles.icon,
          background: "#f3edff",
        }}
      >
        🔐
      </div>

      <span style={styles.number}>
        03
      </span>

      <h3 style={styles.featureTitle}>
        Secure Records
      </h3>

      <p style={styles.featureText}>
        Keep important RD information organized within
        a controlled environment designed for reliable
        record handling.
      </p>

      <div style={styles.featureLine}></div>

      <span style={styles.featureLink}>
        Secure Environment

        <span
          className="feature-arrow"
          style={styles.featureArrow}
        >
          →
        </span>
      </span>

    </div>

  </div>

</section>

      {/* ================= FEATURES ================= */}
     <section style={styles.featuresSection}>

  <div style={styles.featuresHeader}>
    <span style={styles.sectionTag}>
      WHY THIS SYSTEM
    </span>

    <h2 style={styles.sectionTitle}>
      Simple. Powerful. Professional.
    </h2>

    <p style={styles.featuresSubtitle}>
      Designed to make everyday RD management faster,
      clearer and more organized.
    </p>
  </div>


  <div style={styles.featureList}>

    {/* 01 */}
    <div
      style={styles.featureItem}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow =
          "0 14px 30px rgba(37,99,235,.10)";
        e.currentTarget.querySelector(".feature-check").style.transform =
          "scale(1.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 6px 18px rgba(15,23,42,.045)";
        e.currentTarget.querySelector(".feature-check").style.transform =
          "scale(1)";
      }}
    >
      <div className="feature-check" style={styles.check}>
        ✓
      </div>

      <div>
        <span style={styles.itemNumber}>01</span>

        <h4 style={styles.itemTitle}>
          Easy Customer Management
        </h4>

        <p style={styles.itemText}>
          Keep customer information structured, organized
          and easy to access whenever required.
        </p>
      </div>
    </div>


    {/* 02 */}
    <div
      style={styles.featureItem}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow =
          "0 14px 30px rgba(16,185,129,.10)";
        e.currentTarget.querySelector(".feature-check").style.transform =
          "scale(1.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 6px 18px rgba(15,23,42,.045)";
        e.currentTarget.querySelector(".feature-check").style.transform =
          "scale(1)";
      }}
    >
      <div className="feature-check" style={styles.check}>
        ✓
      </div>

      <div>
        <span style={styles.itemNumber}>02</span>

        <h4 style={styles.itemTitle}>
          Fast RD Operations
        </h4>

        <p style={styles.itemText}>
          Streamline recurring deposit activities and
          passbook operations through one system.
        </p>
      </div>
    </div>


    {/* 03 */}
    <div
      style={styles.featureItem}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow =
          "0 14px 30px rgba(245,158,11,.10)";
        e.currentTarget.querySelector(".feature-check").style.transform =
          "scale(1.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 6px 18px rgba(15,23,42,.045)";
        e.currentTarget.querySelector(".feature-check").style.transform =
          "scale(1)";
      }}
    >
      <div className="feature-check" style={styles.check}>
        ✓
      </div>

      <div>
        <span style={styles.itemNumber}>03</span>

        <h4 style={styles.itemTitle}>
          Digital Record System
        </h4>

        <p style={styles.itemText}>
          Maintain organized digital records for smooth
          and reliable day-to-day operations.
        </p>
      </div>
    </div>


    {/* 04 */}
    <div
      style={styles.featureItem}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow =
          "0 14px 30px rgba(124,58,237,.10)";
        e.currentTarget.querySelector(".feature-check").style.transform =
          "scale(1.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 6px 18px rgba(15,23,42,.045)";
        e.currentTarget.querySelector(".feature-check").style.transform =
          "scale(1)";
      }}
    >
      <div className="feature-check" style={styles.check}>
        ✓
      </div>

      <div>
        <span style={styles.itemNumber}>04</span>

        <h4 style={styles.itemTitle}>
          Professional Interface
        </h4>

        <p style={styles.itemText}>
          A clean and intuitive dashboard experience
          designed for efficient daily usage.
        </p>
      </div>
    </div>

  </div>

</section>

      {/* ================= BOTTOM CTA ================= */}
     <section
  style={styles.cta}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-3px)";
    e.currentTarget.style.boxShadow =
      "0 22px 45px rgba(15,23,42,.14)";
    e.currentTarget.querySelector(".cta-icon").style.transform =
      "rotate(-4deg) scale(1.05)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 12px 30px rgba(15,23,42,.09)";
    e.currentTarget.querySelector(".cta-icon").style.transform =
      "rotate(0) scale(1)";
  }}
>
  <div style={styles.ctaContent}>

    <span style={styles.ctaTag}>
      RD MANAGEMENT SYSTEM
    </span>

    <h2 style={styles.ctaTitle}>
      Managing recurring deposits,
      <br />
      <span style={styles.ctaHighlight}>
        made simpler.
      </span>
    </h2>

    <p style={styles.ctaText}>
      One platform. Organized records. Better management.
    </p>

  </div>


  <div
    className="cta-icon"
    style={styles.ctaIcon}
  >
    ₹
  </div>

</section>

      {/* ================= FOOTER ================= */}
<footer style={styles.footer}>
  <div style={styles.footerBrand}>

    <div style={styles.footerLogo}>
      ₹
    </div>

    <div>
      <div style={styles.footerTitle}>
        RD BANKING
        <span style={styles.footerTitleAccent}> MANAGEMENT SYSTEM</span>
      </div>

      <div style={styles.footerSubtitle}>
        Professional Recurring Deposit Management Portal
      </div>
    </div>

  </div>

  <div style={styles.footerRight}>

    <div style={styles.secureStatus}>
      <span style={styles.secureDot}></span>
      Secure &amp; Trusted
    </div>

    <div style={styles.footerDivider}></div>

   <div style={styles.copyright}>
  © 2026 <span style={{ color: "#94a3b8" }}>RD Banking</span>
</div>

  </div>
</footer>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "45px 6% 35px",
    position: "relative",
    overflow: "hidden",
    background:
      "linear-gradient(135deg, #f8fafc 0%, #eef4ff 48%, #f8fafc 100%)",
    fontFamily:
      "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    color: "#0f172a",
  },

  glowOne: {
    position: "absolute",
    width: "380px",
    height: "380px",
    borderRadius: "50%",
    background: "rgba(37,99,235,.08)",
    filter: "blur(80px)",
    top: "-150px",
    right: "-100px",
    pointerEvents: "none",
  },

  glowTwo: {
    position: "absolute",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "rgba(99,102,241,.06)",
    filter: "blur(75px)",
    bottom: "200px",
    left: "-150px",
    pointerEvents: "none",
  },

  /* HERO */
  hero: {
    maxWidth: "1200px",
    margin: "0 auto",
    minHeight: "390px",
    display: "grid",
    gridTemplateColumns: "1.25fr .75fr",
    alignItems: "center",
    gap: "70px",
    position: "relative",
    zIndex: 1,
  },

  heroLeft: {
    maxWidth: "700px",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "9px",
    padding: "8px 14px",
    borderRadius: "30px",
    background: "rgba(255,255,255,.75)",
    border: "1px solid #dbe5f1",
    color: "#2563eb",
    fontSize: "10px",
    fontWeight: "900",
    letterSpacing: "1.4px",
    boxShadow: "0 8px 25px rgba(15,23,42,.04)",
  },

  badgeDot: {
    width: "7px",
    height: "7px",
    background: "#22c55e",
    borderRadius: "50%",
    boxShadow: "0 0 0 4px rgba(34,197,94,.12)",
  },

  heading: {
    margin: "20px 0 15px",
    fontSize: "49px",
    lineHeight: "1.08",
    fontWeight: "850",
    letterSpacing: "-1.8px",
  },

  headingBlue: {
    color: "#0d6efd",
  },

  description: {
    color: "#64748b",
    fontSize: "16px",
    lineHeight: "1.8",
    maxWidth: "680px",
    margin: 0,
  },

  heroActions: {
    display: "flex",
    gap: "10px",
    marginTop: "25px",
    flexWrap: "wrap",
  },

  secureBadge: {
    padding: "9px 13px",
    background: "rgba(255,255,255,.8)",
    border: "1px solid #e2e8f0",
    borderRadius: "10px",
    fontSize: "11px",
    fontWeight: "700",
    color: "#475569",
  },

  /* BANK CARD */
  visualWrapper: {
    minHeight: "290px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  outerGlow: {
    position: "absolute",
    width: "240px",
    height: "240px",
    borderRadius: "50%",
    background: "rgba(37,99,235,.13)",
    filter: "blur(55px)",
  },

  bankCard: {
    width: "330px",
    minHeight: "205px",
    padding: "25px",
    borderRadius: "25px",
    background: "linear-gradient(135deg,#0f172a 0%,#172554 50%,#2563eb 100%)",
    color: "white",
    position: "relative",
    zIndex: 2,
    boxShadow: "0 30px 60px rgba(15,23,42,.28)",
    transform: "rotate(3deg)",
    transition: "all .4s ease",
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardSmall: {
    fontSize: "8px",
    letterSpacing: "2px",
    opacity: ".6",
  },

  cardTitle: {
    margin: "4px 0 0",
    fontSize: "17px",
    letterSpacing: "1px",
  },

  cardLogo: {
    width: "42px",
    height: "42px",
    borderRadius: "13px",
    background: "rgba(255,255,255,.12)",
    border: "1px solid rgba(255,255,255,.18)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px",
    fontWeight: "800",
  },

  cardLine: {
    height: "1px",
    background: "rgba(255,255,255,.15)",
    margin: "25px 0",
  },

  cardCenter: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  cardLabel: {
    fontSize: "8px",
    opacity: ".55",
    letterSpacing: "1.5px",
  },

  cardValue: {
    fontSize: "13px",
    letterSpacing: "1px",
  },

  cardFooter: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "32px",
    fontSize: "9px",
    color: "#93c5fd",
    fontWeight: "700",
  },

  /* STRIP */
  aboutStrip: {
    maxWidth: "1200px",
    margin: "30px auto 70px",
    padding: "25px 30px",
    background: "rgba(255,255,255,.72)",
    backdropFilter: "blur(14px)",
    border: "1px solid rgba(148,163,184,.18)",
    borderRadius: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
    position: "relative",
    zIndex: 1,
    boxShadow: "0 12px 30px rgba(15,23,42,.05)",
  },

  sectionTag: {
    fontSize: "10px",
    fontWeight: "900",
    letterSpacing: "1.7px",
    color: "#2563eb",
  },

  sectionTitle: {
    margin: "6px 0 0",
    fontSize: "28px",
    fontWeight: "850",
    letterSpacing: "-.6px",
  },

  stripText: {
    maxWidth: "550px",
    color: "#64748b",
    fontSize: "13px",
    lineHeight: "1.7",
    margin: 0,
  },

  /* SERVICES */
  section: {
    maxWidth: "1200px",
    margin: "0 auto 70px",
    position: "relative",
    zIndex: 1,
  },

  sectionHeading: {
    marginBottom: "25px",
  },

  sectionDescription: {
    color: "#64748b",
    fontSize: "13px",
    marginTop: "8px",
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "20px",
  },

  featureCard: {
    background: "rgba(255,255,255,.9)",
    border: "1px solid #e2e8f0",
    borderRadius: "21px",
    padding: "27px",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 12px 30px rgba(15,23,42,.06)",
    transition: "all .3s ease",
    cursor: "default",
  },

  icon: {
    width: "53px",
    height: "53px",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "23px",
    marginBottom: "20px",
  },

  number: {
    position: "absolute",
    right: "25px",
    top: "27px",
    color: "#cbd5e1",
    fontSize: "12px",
    fontWeight: "900",
  },

  featureTitle: {
    fontSize: "18px",
    margin: "0 0 10px",
    fontWeight: "800",
  },

  featureText: {
    color: "#64748b",
    fontSize: "12px",
    lineHeight: "1.7",
    minHeight: "63px",
  },

  featureLine: {
    height: "1px",
    background: "#e8edf3",
    margin: "20px 0 14px",
  },

  featureLink: {
    color: "#2563eb",
    fontSize: "11px",
    fontWeight: "800",
  },

  /* FEATURES */
  featuresSection: {
    maxWidth: "1200px",
    margin: "0 auto 65px",
    padding: "35px",
    borderRadius: "24px",
    background: "linear-gradient(135deg,#0f172a,#172554)",
    color: "white",
    position: "relative",
    zIndex: 1,
    boxShadow: "0 25px 50px rgba(15,23,42,.16)",
  },

  featuresHeader: {
    marginBottom: "25px",
  },

  featureList: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "18px",
  },

  featureItem: {
    display: "flex",
    gap: "13px",
    alignItems: "flex-start",
    padding: "15px",
    borderRadius: "14px",
    background: "rgba(255,255,255,.05)",
    border: "1px solid rgba(255,255,255,.07)",
  },

  check: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    background: "rgba(34,197,94,.15)",
    color: "#4ade80",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    fontWeight: "800",
  },

  itemTitle: {
    margin: "0 0 4px",
    fontSize: "13px",
  },

  itemText: {
    margin: 0,
    color: "#94a3b8",
    fontSize: "11px",
    lineHeight: "1.5",
  },

  /* CTA */
  cta: {
    maxWidth: "1200px",
    margin: "0 auto 35px",
    padding: "35px 40px",
    borderRadius: "24px",
    background: "linear-gradient(135deg,#eaf2ff,#f8fbff)",
    border: "1px solid #dbe7f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    zIndex: 1,
  },

  ctaTag: {
    color: "#2563eb",
    fontSize: "9px",
    fontWeight: "900",
    letterSpacing: "1.5px",
  },

  ctaTitle: {
    fontSize: "25px",
    lineHeight: "1.25",
    margin: "7px 0",
    fontWeight: "850",
  },

  ctaText: {
    margin: 0,
    color: "#64748b",
    fontSize: "12px",
  },

  ctaIcon: {
    width: "75px",
    height: "75px",
    borderRadius: "22px",
    background: "linear-gradient(135deg,#0d6efd,#1e40af)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "35px",
    fontWeight: "800",
    boxShadow: "0 15px 30px rgba(13,110,253,.25)",
  },

  /* FOOTER */
  footer: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#64748b",
    fontSize: "10px",
    position: "relative",
    zIndex: 1,
  },

  footerRight: {
    display: "flex",
    gap: "8px",
  },

  visualWrapper: {
    position: "relative",
    minHeight: "360px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    perspective: "1200px",
  },

  outerGlow: {
    position: "absolute",
    width: "300px",
    height: "300px",
    borderRadius: "50%",

    background:
      "radial-gradient(circle, rgba(37,99,235,.35), rgba(37,99,235,0) 70%)",

    filter: "blur(20px)",

    animation: "premiumCardGlow 4s ease-in-out infinite",
  },

  bankCard: {
    width: "400px",
    minHeight: "245px",

    padding: "29px",

    position: "relative",
    overflow: "hidden",

    borderRadius: "25px",

    background: "linear-gradient(135deg,#07111f 0%,#0f172a 42%,#172554 100%)",

    border: "1px solid rgba(255,255,255,.15)",

    boxShadow: "0 25px 55px rgba(15,23,42,.27)",

    color: "#ffffff",

    transition: "all .45s cubic-bezier(.2,.8,.2,1)",

    transform: "perspective(1100px) rotateX(0deg) rotateY(0deg)",

    cursor: "pointer",

    zIndex: 2,
  },

  cardShine: {
    position: "absolute",
    top: "-100%",
    left: "-100%",

    width: "65%",
    height: "300%",

    transform: "rotate(25deg)",

    background:
      "linear-gradient(90deg,transparent,rgba(255,255,255,.13),transparent)",

    pointerEvents: "none",

    animation: "premiumCardShine 5s ease-in-out infinite",
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    position: "relative",
    zIndex: 2,
  },

  cardSmall: {
    display: "block",

    color: "#93c5fd",

    fontSize: "8px",

    fontWeight: "800",

    letterSpacing: "2px",
  },

  cardTitle: {
    margin: "5px 0 0",

    fontSize: "22px",

    fontWeight: "900",

    letterSpacing: "1px",

    color: "#ffffff",

    textShadow: "0 3px 15px rgba(0,0,0,.25)",
  },

  cardLogo: {
    width: "48px",
    height: "48px",

    borderRadius: "15px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    background: "linear-gradient(135deg,#2563eb,#3b82f6)",

    color: "#ffffff",

    fontSize: "24px",

    fontWeight: "900",

    border: "1px solid rgba(255,255,255,.2)",

    boxShadow: "0 8px 25px rgba(37,99,235,.35)",
  },

  cardLine: {
    height: "1px",

    marginTop: "25px",

    background:
      "linear-gradient(90deg,rgba(255,255,255,.25),rgba(255,255,255,.04),transparent)",
  },

  cardCenter: {
    marginTop: "42px",

    display: "flex",
    flexDirection: "column",
    gap: "8px",

    position: "relative",
    zIndex: 2,
  },

  cardLabel: {
    fontSize: "8px",

    letterSpacing: "2px",

    color: "rgba(255,255,255,.45)",

    fontWeight: "800",
  },

  cardValue: {
    fontSize: "16px",

    letterSpacing: "2px",

    color: "#e2e8f0",

    fontWeight: "800",
  },

  cardFooter: {
    position: "absolute",

    left: "29px",
    right: "29px",
    bottom: "24px",

    display: "flex",

    alignItems: "center",

    justifyContent: "space-between",

    fontSize: "8px",

    letterSpacing: "1.2px",

    fontWeight: "800",

    zIndex: 2,
  },

  systemActive: {
    display: "flex",

    alignItems: "center",

    gap: "6px",

    color: "#86efac",
  },

  activeDot: {
    color: "#22c55e",

    fontSize: "9px",

    filter: "drop-shadow(0 0 6px rgba(34,197,94,.9))",
  },

  year: {
    color: "rgba(255,255,255,.45)",

    fontWeight: "800",
  },



  hero: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    gap: "70px",

    width: "100%",

    padding: "55px 5%",

    background:
      "linear-gradient(135deg, #f8fbfd 0%, #ffffff 55%, #f3f8fb 100%)",

    borderRadius: "22px",

    overflow: "hidden",

    position: "relative",
  },


  heroLeft: {
    flex: "1",

    maxWidth: "650px",

    zIndex: 2,
  },


  /* ================= BADGE ================= */

  badge: {
    display: "inline-flex",

    alignItems: "center",

    gap: "8px",

    padding: "7px 12px",

    borderRadius: "20px",

    background: "#edf7fa",

    border: "1px solid #d9ebf0",

    color: "#226b82",

    fontSize: "9px",

    fontWeight: "800",

    letterSpacing: "1.1px",

    boxShadow:
      "0 4px 12px rgba(25,105,130,.05)",
  },


  badgeDot: {
    width: "7px",
    height: "7px",

    borderRadius: "50%",

    background: "#22a06b",

    boxShadow:
      "0 0 0 4px rgba(34,160,107,.10)",
  },


  /* ================= HEADING ================= */

  heading: {
    margin: "20px 0 14px",

    color: "#172f3b",

    fontSize: "42px",

    fontWeight: "800",

    lineHeight: "1.12",

    letterSpacing: "-1.3px",
  },


  headingBlue: {
    color: "#176b91",

    display: "inline-block",
  },


  /* ================= DESCRIPTION ================= */

  description: {
    maxWidth: "610px",

    margin: 0,

    color: "#687b86",

    fontSize: "14px",

    fontWeight: "500",

    lineHeight: "1.75",
  },


  /* ================= ACTION BADGES ================= */

  heroActions: {
    display: "flex",

    flexWrap: "wrap",

    gap: "9px",

    marginTop: "24px",
  },


  secureBadge: {
    display: "inline-flex",

    alignItems: "center",

    gap: "7px",

    padding: "8px 11px",

    borderRadius: "9px",

    background: "#ffffff",

    border: "1px solid #e1e9ed",

    color: "#536a75",

    fontSize: "10.5px",

    fontWeight: "650",

    boxShadow:
      "0 5px 15px rgba(15,23,42,.045)",

    transition:
      "all .25s ease",

    cursor: "default",
  },


  /* ================= CARD WRAPPER ================= */

  visualWrapper: {
    width: "420px",

    height: "280px",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    position: "relative",

    perspective: "1100px",

    flexShrink: 0,
  },


  outerGlow: {
    position: "absolute",

    width: "270px",

    height: "190px",

    borderRadius: "50%",

    background:
      "rgba(37,99,235,.12)",

    filter: "blur(55px)",

    zIndex: 0,
  },


  /* ================= BANK CARD ================= */

  bankCard: {
    width: "370px",

    height: "225px",

    padding: "25px",

    position: "relative",

    display: "flex",

    flexDirection: "column",

    justifyContent: "space-between",

    overflow: "hidden",

    borderRadius: "20px",

    background:
      "linear-gradient(135deg, #0b1d2b 0%, #12384a 52%, #176b83 100%)",

    border:
      "1px solid rgba(255,255,255,.16)",

    boxShadow:
      "0 25px 55px rgba(15,23,42,.25)",

    color: "#ffffff",

    transform:
      "perspective(1100px) rotateX(0deg) rotateY(0deg)",

    transition:
      "transform .45s ease, box-shadow .45s ease",

    zIndex: 1,
  },


  /* ================= CARD SHINE ================= */

  cardShine: {
    position: "absolute",

    top: "-100px",

    right: "-80px",

    width: "240px",

    height: "240px",

    borderRadius: "50%",

    background:
      "rgba(255,255,255,.07)",

    filter: "blur(5px)",

    pointerEvents: "none",
  },


  /* ================= CARD HEADER ================= */

  cardHeader: {
    display: "flex",

    alignItems: "center",

    justifyContent: "space-between",

    position: "relative",

    zIndex: 2,
  },


  cardSmall: {
    display: "block",

    color: "rgba(255,255,255,.58)",

    fontSize: "8px",

    fontWeight: "700",

    letterSpacing: "1.5px",

    marginBottom: "5px",
  },


  cardTitle: {
    margin: 0,

    color: "#ffffff",

    fontSize: "19px",

    fontWeight: "800",

    letterSpacing: ".4px",
  },


  cardLogo: {
    width: "43px",

    height: "43px",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    borderRadius: "12px",

    color: "#e6c76a",

    background:
      "rgba(255,255,255,.08)",

    border:
      "1px solid rgba(255,255,255,.13)",

    fontSize: "22px",

    fontWeight: "800",

    boxShadow:
      "inset 0 1px rgba(255,255,255,.12)",
  },


  cardLine: {
    width: "100%",

    height: "1px",

    background:
      "rgba(255,255,255,.12)",
  },


  /* ================= CENTER ================= */

  cardCenter: {
    display: "flex",

    flexDirection: "column",

    gap: "7px",
  },


  cardLabel: {
    color:
      "rgba(255,255,255,.52)",

    fontSize: "8px",

    fontWeight: "700",

    letterSpacing: "1.4px",
  },


  cardValue: {
    color: "#ffffff",

    fontSize: "13px",

    fontWeight: "700",

    letterSpacing: "1.1px",
  },


  /* ================= FOOTER ================= */

  cardFooter: {
    display: "flex",

    alignItems: "center",

    justifyContent: "space-between",
  },


  systemActive: {
    display: "flex",

    alignItems: "center",

    gap: "6px",

    color: "#9ce5bd",

    fontSize: "8px",

    fontWeight: "800",

    letterSpacing: ".8px",
  },


  activeDot: {
    color: "#35d486",

    fontSize: "9px",

    textShadow:
      "0 0 8px rgba(53,212,134,.8)",
  },


  year: {
    color:
      "rgba(255,255,255,.48)",

    fontSize: "9px",

    fontWeight: "700",

    letterSpacing: "1px",
  },

 

  section: {
    width: "100%",
    padding: "55px 5%",
    background: "#ffffff",
  },


  /* ================= HEADING ================= */

  sectionHeading: {
    textAlign: "center",
    maxWidth: "680px",
    margin: "0 auto 35px",
  },


  sectionTag: {
    display: "inline-flex",
    alignItems: "center",

    padding: "6px 11px",

    borderRadius: "20px",

    background: "#edf7fa",

    border: "1px solid #dcecf0",

    color: "#226b82",

    fontSize: "9px",

    fontWeight: "800",

    letterSpacing: "1.2px",
  },


  sectionTitle: {
    margin: "13px 0 9px",

    color: "#19313d",

    fontSize: "29px",

    fontWeight: "800",

    letterSpacing: "-.6px",
  },


  sectionDescription: {
    margin: 0,

    color: "#71818b",

    fontSize: "13px",

    lineHeight: "1.7",

    fontWeight: "500",
  },


  /* ================= GRID ================= */

  cardGrid: {
    display: "grid",

    gridTemplateColumns:
      "repeat(3, minmax(0, 1fr))",

    gap: "20px",

    maxWidth: "1200px",

    margin: "0 auto",
  },


  /* ================= CARD ================= */

  featureCard: {
    position: "relative",

    minHeight: "310px",

    padding: "25px",

    background:
      "linear-gradient(145deg, #ffffff, #fbfdff)",

    border:
      "1px solid #e4ebef",

    borderRadius: "18px",

    boxShadow:
      "0 8px 25px rgba(15,23,42,.06)",

    overflow: "hidden",

    transition:
      "transform .28s ease, box-shadow .28s ease",

    cursor: "default",
  },


  blueFeature: {
    borderTop: "3px solid #3b82f6",
  },


  greenFeature: {
    borderTop: "3px solid #10b981",
  },


  purpleFeature: {
    borderTop: "3px solid #8b5cf6",
  },


  /* ================= ICON ================= */

  icon: {
    width: "52px",
    height: "52px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: "14px",

    fontSize: "22px",

    border:
      "1px solid rgba(0,0,0,.035)",

    boxShadow:
      "0 6px 15px rgba(15,23,42,.05)",

    transition:
      "transform .28s ease",
  },


  /* ================= NUMBER ================= */

  number: {
    position: "absolute",

    top: "27px",
    right: "25px",

    color: "#c7d1d7",

    fontSize: "11px",

    fontWeight: "800",

    letterSpacing: "1px",
  },


  /* ================= TEXT ================= */

  featureTitle: {
    margin: "22px 0 9px",

    color: "#203742",

    fontSize: "19px",

    fontWeight: "750",

    letterSpacing: "-.2px",
  },


  featureText: {
    margin: 0,

    color: "#71818b",

    fontSize: "12.5px",

    lineHeight: "1.7",

    fontWeight: "500",
  },


  /* ================= BOTTOM ================= */

  featureLine: {
    width: "100%",

    height: "1px",

    margin:
      "22px 0 15px",

    background:
      "#e8eef1",
  },


  featureLink: {
    display: "flex",

    alignItems: "center",

    justifyContent: "space-between",

    color: "#4f6874",

    fontSize: "10.5px",

    fontWeight: "750",

    letterSpacing: ".2px",
  },


  featureArrow: {
    color: "#7b8d96",

    fontSize: "17px",

    transition:
      "transform .28s ease",
  },
  featuresSection: {
  width: "100%",
  padding: "55px 5%",
  background: "#f8fbfc",
},

featuresHeader: {
  textAlign: "center",
  maxWidth: "650px",
  margin: "0 auto 32px",
},

featuresSubtitle: {
  margin: "10px auto 0",
  color: "#71818b",
  fontSize: "13px",
  lineHeight: "1.6",
},

featureList: {
  maxWidth: "1050px",
  margin: "0 auto",

  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "15px",
},

featureItem: {
  display: "flex",
  alignItems: "flex-start",
  gap: "15px",

  padding: "20px",

  background:
    "linear-gradient(145deg, #ffffff, #fbfdff)",

  border: "1px solid #e4ebef",
  borderRadius: "15px",

  boxShadow:
    "0 6px 18px rgba(15,23,42,.045)",

  transition:
    "transform .28s ease, box-shadow .28s ease",

  cursor: "default",
},

check: {
  width: "40px",
  height: "40px",
  flexShrink: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "12px",

  background:
    "linear-gradient(135deg, #e9f8f0, #dff5e8)",

  border: "1px solid #ccebdd",

  color: "#15945b",

  fontSize: "16px",
  fontWeight: "900",

  boxShadow:
    "0 5px 12px rgba(21,148,91,.08)",

  transition: "transform .28s ease",
},

itemNumber: {
  display: "block",

  marginBottom: "3px",

  color: "#9aa8b0",

  fontSize: "9px",
  fontWeight: "800",

  letterSpacing: "1px",
},

itemTitle: {
  margin: "0 0 6px",

  color: "#203742",

  fontSize: "16px",
  fontWeight: "750",

  letterSpacing: "-.1px",
},

itemText: {
  margin: 0,

  color: "#71818b",

  fontSize: "12px",

  lineHeight: "1.6",
},
cta: {
  width: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  gap: "30px",

  marginTop: "35px",

  padding: "30px 34px",

  borderRadius: "20px",

  background:
    "linear-gradient(135deg, #0b1d2b 0%, #12384a 55%, #176b83 100%)",

  border:
    "1px solid rgba(255,255,255,.10)",

  boxShadow:
    "0 12px 30px rgba(15,23,42,.09)",

  position: "relative",

  overflow: "hidden",

  transition:
    "transform .3s ease, box-shadow .3s ease",
},


ctaContent: {
  position: "relative",
  zIndex: 2,
},


ctaTag: {
  display: "inline-flex",

  padding: "6px 10px",

  borderRadius: "20px",

  background:
    "rgba(255,255,255,.08)",

  border:
    "1px solid rgba(255,255,255,.12)",

  color: "#9bd1df",

  fontSize: "9px",

  fontWeight: "800",

  letterSpacing: "1.2px",
},


ctaTitle: {
  margin: "12px 0 8px",

  color: "#ffffff",

  fontSize: "28px",

  fontWeight: "800",

  lineHeight: "1.25",

  letterSpacing: "-.6px",
},


ctaHighlight: {
  color: "#8fd1df",
},


ctaText: {
  margin: 0,

  color: "rgba(255,255,255,.60)",

  fontSize: "12.5px",

  fontWeight: "500",

  letterSpacing: ".1px",
},


ctaIcon: {
  width: "70px",
  height: "70px",

  flexShrink: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "20px",

  background:
    "linear-gradient(145deg, rgba(255,255,255,.13), rgba(255,255,255,.05))",

  border:
    "1px solid rgba(255,255,255,.15)",

  color: "#e5c86b",

  fontSize: "34px",

  fontWeight: "800",

  boxShadow:
    "inset 0 1px rgba(255,255,255,.10), 0 12px 25px rgba(0,0,0,.18)",

  transition:
    "transform .3s ease",
},
footer: {
  marginTop: "45px",
  padding: "20px 28px",
  minHeight: "76px",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  background:
    "linear-gradient(135deg, #07111f 0%, #0b1728 50%, #0f1f33 100%)",

  borderTop: "1px solid rgba(148, 163, 184, 0.12)",
  boxShadow: "0 -12px 35px rgba(2, 6, 23, 0.15)",

  position: "relative",
  overflow: "hidden",

  color: "#ffffff",
},

footerBrand: {
  display: "flex",
  alignItems: "center",
  gap: "14px",
},

footerLogo: {
  width: "44px",
  height: "44px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "13px",

  background:
    "linear-gradient(145deg, #2563eb, #1d4ed8)",

  color: "#ffffff",

  fontSize: "22px",
  fontWeight: "800",

  boxShadow:
    "0 8px 25px rgba(37, 99, 235, 0.28), inset 0 1px 0 rgba(255,255,255,0.2)",

  border: "1px solid rgba(255,255,255,0.12)",
},

footerTitle: {
  fontSize: "14px",
  fontWeight: "800",
  letterSpacing: "1.1px",
  color: "#f8fafc",
  lineHeight: "1.4",
},

footerTitleAccent: {
  color: "#60a5fa",
},

footerSubtitle: {
  marginTop: "4px",
  fontSize: "11.5px",
  fontWeight: "500",
  letterSpacing: "0.25px",
  color: "#94a3b8",
},

footerRight: {
  display: "flex",
  alignItems: "center",
  gap: "15px",
},

secureStatus: {
  display: "flex",
  alignItems: "center",
  gap: "7px",

  padding: "7px 12px",

  borderRadius: "20px",

  background: "rgba(34, 197, 94, 0.07)",
  border: "1px solid rgba(34, 197, 94, 0.16)",

  color: "#86efac",

  fontSize: "11px",
  fontWeight: "600",
  letterSpacing: "0.3px",
},

secureDot: {
  width: "7px",
  height: "7px",

  borderRadius: "50%",

  background: "#22c55e",

  boxShadow:
    "0 0 0 3px rgba(34,197,94,0.08), 0 0 10px rgba(34,197,94,0.65)",
},

footerDivider: {
  width: "1px",
  height: "22px",
  background: "rgba(148, 163, 184, 0.16)",
},

copyright: {
  fontSize: "11px",
  fontWeight: "500",
  color: "#64748b",
  letterSpacing: "0.25px",
},

// copyright span: {
//   color: "#94a3b8",
// },


footerBrand: {
  display: "flex",
  alignItems: "center",

  gap: "11px",
},


footerLogo: {
  width: "36px",
  height: "36px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "10px",

  background:
    "rgba(255,255,255,.08)",

  border:
    "1px solid rgba(255,255,255,.12)",

  color: "#e5c86b",

  fontSize: "18px",

  fontWeight: "800",

  boxShadow:
    "inset 0 1px rgba(255,255,255,.08)",
},


footerTitle: {
  display: "block",

  color: "#ffffff",

  fontSize: "11px",

  fontWeight: "800",

  letterSpacing: ".5px",
},


footerSubtitle: {
  margin: "4px 0 0",

  color: "rgba(255,255,255,.45)",

  fontSize: "9.5px",

  fontWeight: "500",
},


footerRight: {
  display: "flex",
  alignItems: "center",

  gap: "10px",

  color: "rgba(255,255,255,.45)",

  fontSize: "9.5px",

  fontWeight: "600",

  whiteSpace: "nowrap",
},


secureStatus: {
  display: "flex",
  alignItems: "center",

  gap: "6px",

  color: "#8ed8b2",

  fontWeight: "700",
},


secureDot: {
  width: "6px",
  height: "6px",

  borderRadius: "50%",

  background: "#32c982",

  boxShadow:
    "0 0 0 4px rgba(50,201,130,.10)",
},


footerDivider: {
  color: "rgba(255,255,255,.16)",
},


copyright: {
  color: "rgba(255,255,255,.48)",
},





};

export default About;
