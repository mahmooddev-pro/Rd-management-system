import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* ================= TOP NAVBAR ================= */}
      <nav style={styles.navbar}>
        <div style={styles.brandSection}>
          <div style={styles.logo}>₹</div>

          <div>
            <h2 style={styles.brand}>RD BANKING</h2>
            <span style={styles.brandSub}>Management Portal</span>
          </div>
        </div>

        <div style={styles.adminSection}>
          <div style={styles.onlineDot}></div>

          <div>
            <div style={styles.adminName}>Administrator</div>
            <div style={styles.adminRole}>Secure Access</div>
          </div>

          <div style={styles.adminIcon}>👤</div>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section style={styles.hero}>
        <div>
          <div style={styles.welcomeBadge}>
            <span>●</span> SYSTEM ONLINE
          </div>

         <h1 style={styles.heroTitle}>
  Welcome to your
  <span style={styles.heroHighlight}> RD Management Dashboard</span>
</h1>

          <p style={styles.heroText}>
            Manage recurring deposits, customer accounts and passbook
            transactions from one secure banking portal.
          </p>

          <div style={styles.heroButtons}>
           <button
  style={styles.primaryButton}
  onClick={() => navigate("/Rduser")}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow =
      "0 14px 35px rgba(37, 99, 235, 0.35)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 8px 22px rgba(15, 23, 42, 0.18)";
  }}
>
  <span style={styles.buttonIcon}>👤</span>

  <span style={styles.buttonText}>
    Manage RD Customers
  </span>

  <span style={styles.arrow}>→</span>
  
</button>

            
          </div>
        </div>

    
      <div style={styles.heroVisual}>
  <div style={styles.glow}></div>

  <div
    style={styles.bankCard}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform =
        "perspective(1000px) rotateX(4deg) rotateY(-5deg) translateY(-10px) scale(1.02)";
      e.currentTarget.style.boxShadow =
        "0 35px 70px rgba(15,23,42,.35), 0 0 45px rgba(37,99,235,.25)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";
      e.currentTarget.style.boxShadow =
        "0 25px 55px rgba(15,23,42,.25)";
    }}
  >
   
    <div style={styles.cardShine}></div>

    <div style={styles.cardTop}>
      <div>
        <span style={styles.cardLabel}>
          RD ACCOUNT
        </span>

        <div style={styles.cardMiniText}>
          RECURRING DEPOSIT
        </div>
      </div>

      <div style={styles.cardChip}>
        ◈
      </div>
    </div>

    <div style={styles.cardAmount}>
      ₹ ••••••
    </div>

    <div style={styles.cardBottom}>
      <div>
        <small style={styles.cardSmall}>
          ACCOUNT STATUS
        </small>

        <strong style={styles.activeText}>
          <span style={styles.activeDot}>●</span>
          ACTIVE
        </strong>
      </div>

      <div style={styles.cardBank}>
        <span style={styles.bankSymbol}>₹</span>
        RD BANK
      </div>
    </div>
  </div>
</div>
      </section>


     <section style={styles.statsGrid}>

  {/* RD USERS */}
  <div
    style={{ ...styles.statCard, ...styles.blueCard }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-6px)";
      e.currentTarget.style.boxShadow =
        "0 18px 38px rgba(37,99,235,.15)";
      e.currentTarget.querySelector(".stat-icon").style.transform =
        "scale(1.08)";
      e.currentTarget.querySelector(".stat-arrow").style.transform =
        "translateX(5px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow =
        "0 8px 24px rgba(15,23,42,.07)";
      e.currentTarget.querySelector(".stat-icon").style.transform =
        "scale(1)";
      e.currentTarget.querySelector(".stat-arrow").style.transform =
        "translateX(0)";
    }}
  >
    <div
      className="stat-icon"
      style={{
        ...styles.statIcon,
        background: "#edf4ff",
      }}
    >
      👥
    </div>

    <div style={styles.statContent}>
      <span style={styles.statLabel}>CUSTOMERS</span>
      <h2 style={styles.statValue}>RD Users</h2>
      <p style={styles.statDesc}>Manage customer accounts</p>
    </div>

    <span className="stat-arrow" style={styles.statArrow}>
      →
    </span>
  </div>


  {/* PASSBOOK */}
  <div
    style={{ ...styles.statCard, ...styles.greenCard }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-6px)";
      e.currentTarget.style.boxShadow =
        "0 18px 38px rgba(16,185,129,.15)";
      e.currentTarget.querySelector(".stat-icon").style.transform =
        "scale(1.08)";
      e.currentTarget.querySelector(".stat-arrow").style.transform =
        "translateX(5px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow =
        "0 8px 24px rgba(15,23,42,.07)";
      e.currentTarget.querySelector(".stat-icon").style.transform =
        "scale(1)";
      e.currentTarget.querySelector(".stat-arrow").style.transform =
        "translateX(0)";
    }}
  >
    <div
      className="stat-icon"
      style={{
        ...styles.statIcon,
        background: "#ebfaf4",
      }}
    >
      💰
    </div>

    <div style={styles.statContent}>
      <span style={styles.statLabel}>TRANSACTIONS</span>
      <h2 style={styles.statValue}>Passbook</h2>
      <p style={styles.statDesc}>Track deposit transactions</p>
    </div>

    <span className="stat-arrow" style={styles.statArrow}>
      →
    </span>
  </div>


  {/* RD ACCOUNTS */}
  <div
    style={{ ...styles.statCard, ...styles.orangeCard }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-6px)";
      e.currentTarget.style.boxShadow =
        "0 18px 38px rgba(245,158,11,.15)";
      e.currentTarget.querySelector(".stat-icon").style.transform =
        "scale(1.08)";
      e.currentTarget.querySelector(".stat-arrow").style.transform =
        "translateX(5px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow =
        "0 8px 24px rgba(15,23,42,.07)";
      e.currentTarget.querySelector(".stat-icon").style.transform =
        "scale(1)";
      e.currentTarget.querySelector(".stat-arrow").style.transform =
        "translateX(0)";
    }}
  >
    <div
      className="stat-icon"
      style={{
        ...styles.statIcon,
        background: "#fff7e8",
      }}
    >
      📊
    </div>

    <div style={styles.statContent}>
      <span style={styles.statLabel}>MANAGEMENT</span>
      <h2 style={styles.statValue}>RD Accounts</h2>
      <p style={styles.statDesc}>Monitor account activity</p>
    </div>

    <span className="stat-arrow" style={styles.statArrow}>
      →
    </span>
  </div>


  {/* SECURITY */}
  <div
    style={{ ...styles.statCard, ...styles.purpleCard }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-6px)";
      e.currentTarget.style.boxShadow =
        "0 18px 38px rgba(124,58,237,.15)";
      e.currentTarget.querySelector(".stat-icon").style.transform =
        "scale(1.08)";
      e.currentTarget.querySelector(".stat-arrow").style.transform =
        "translateX(3px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow =
        "0 8px 24px rgba(15,23,42,.07)";
      e.currentTarget.querySelector(".stat-icon").style.transform =
        "scale(1)";
      e.currentTarget.querySelector(".stat-arrow").style.transform =
        "translateX(0)";
    }}
  >
    <div
      className="stat-icon"
      style={{
        ...styles.statIcon,
        background: "#f3edff",
      }}
    >
      🔐
    </div>

    <div style={styles.statContent}>
      <span style={styles.statLabel}>SECURITY</span>
      <h2 style={styles.statValue}>Protected</h2>
      <p style={styles.statDesc}>Secure management portal</p>
    </div>

    <span
      className="stat-arrow"
      style={{
        ...styles.statArrow,
        color: "#16a34a",
      }}
    >
      ✓
    </span>
  </div>

</section>

   
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <div>
            <span style={styles.sectionTag}>CORE MODULES</span>
            <h2 style={styles.sectionTitle}>Banking Operations</h2>
          </div>

          <span style={styles.secureBadge}>🔒 Secure Environment</span>
        </div>

        <div style={styles.moduleGrid}>
        
         <button
  style={styles.primaryButton}
  onClick={() => navigate("/Rduser")}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow =
      "0 14px 35px rgba(37, 99, 235, 0.35)";

    e.currentTarget.querySelector(".rd-arrow").style.transform =
      "translateX(5px)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 8px 22px rgba(15, 23, 42, 0.18)";

    e.currentTarget.querySelector(".rd-arrow").style.transform =
      "translateX(0)";
  }}
>
  <span style={styles.buttonIcon}>👤</span>

  <span style={styles.buttonText}>
    Manage RD Customers
  </span>

  <span className="rd-arrow" style={styles.arrow}>
    →
  </span>
</button>

          {/* PASSBOOK */}
          <div
            style={styles.moduleCard}
            onClick={() => navigate("/pasbok")}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 25px 50px rgba(16,185,129,0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 15px 35px rgba(15,23,42,0.08)";
            }}
          >
            <div style={styles.moduleIconGreen}>💰</div>

            <div style={styles.moduleContent}>
              <span style={styles.moduleNumber}>02</span>

              <h3 style={styles.moduleTitle}>Passbook Management</h3>

              <p style={styles.moduleText}>
                View deposit records, track installments, fines and maintain
                complete passbook history.
              </p>

              
            </div>
          </div>
        </div>
      </section>

      {/* ================= SYSTEM STATUS ================= */}
    <section style={styles.statusSection}>

  {/* LEFT CONTENT */}
  <div style={styles.statusIntro}>

    <span style={styles.sectionTag}>
      SYSTEM STATUS
    </span>

    <h2 style={styles.statusTitle}>
      Everything is running smoothly.
    </h2>

    <p style={styles.statusText}>
      Your RD management environment is ready for
      daily banking operations.
    </p>

  </div>


  {/* RIGHT STATUS ITEMS */}
  <div style={styles.statusItems}>

    <div style={styles.statusItem}>

      <span style={styles.statusCircle}>
        ✓
      </span>

      <div style={styles.statusItemContent}>
        <strong>
          System Online
        </strong>

        <small>
          All services operational
        </small>
      </div>

    </div>


    <div style={styles.statusItem}>

      <span style={styles.statusCircle}>
        ✓
      </span>

      <div style={styles.statusItemContent}>
        <strong>
          Database Connected
        </strong>

        <small>
          Data services available
        </small>
      </div>

    </div>


    <div style={styles.statusItem}>

      <span style={styles.statusCircle}>
        ✓
      </span>

      <div style={styles.statusItemContent}>
        <strong>
          Secure Session
        </strong>

        <small>
          Protected administrator access
        </small>
      </div>

    </div>

  </div>

</section>

      {/* ================= FOOTER ================= */}
      <footer style={styles.footer}>
  <div style={styles.footerBrand}>
    <div style={styles.footerLogo}>₹</div>

    <div>
     <div style={styles.footerTitle}>
  RD BANKING <span style={{ color: "#60a5fa" }}>MANAGEMENT SYSTEM</span>
</div>

      <p style={styles.footerSubtitle}>
        Secure • Reliable • Professional Recurring Deposit Management
      </p>
    </div>
  </div>

  <div style={styles.footerRight}>
    <div style={styles.secureBadge}>
      <span style={styles.secureDot}></span>
      Secure Banking Portal
    </div>

    <div style={styles.footerDivider}></div>

    <span style={styles.copyright}>
      © 2026 RD Banking
    </span>
  </div>
</footer>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #f8fafc 0%, #eef4ff 50%, #f8fafc 100%)",
    color: "#0f172a",
    fontFamily:
      "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    paddingBottom: "40px",
  },

  /* NAVBAR */
  navbar: {
    height: "82px",
    padding: "0 6%",
    background: "rgba(255,255,255,0.88)",
    backdropFilter: "blur(15px)",
    borderBottom: "1px solid rgba(148,163,184,0.18)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },

  brandSection: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  logo: {
    width: "46px",
    height: "46px",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg,#0d6efd,#164eac)",
    color: "white",
    fontSize: "25px",
    fontWeight: "800",
    boxShadow: "0 8px 20px rgba(13,110,253,0.28)",
  },

  brand: {
    margin: 0,
    fontSize: "17px",
    fontWeight: "800",
    letterSpacing: "1px",
  },

  brandSub: {
    fontSize: "11px",
    color: "#64748b",
    letterSpacing: "0.5px",
  },

  adminSection: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  onlineDot: {
    width: "9px",
    height: "9px",
    background: "#22c55e",
    borderRadius: "50%",
    boxShadow: "0 0 0 4px rgba(34,197,94,0.12)",
  },

  adminName: {
    fontSize: "13px",
    fontWeight: "700",
  },

  adminRole: {
    fontSize: "11px",
    color: "#64748b",
  },

  adminIcon: {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    background: "#eef4ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  /* HERO */
  hero: {
    maxWidth: "1250px",
    margin: "45px auto 0",
    padding: "50px 6%",
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr",
    gap: "50px",
    alignItems: "center",
  },

  welcomeBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "7px 13px",
    borderRadius: "30px",
    background: "#eaf7ef",
    color: "#15803d",
    fontSize: "11px",
    fontWeight: "800",
    letterSpacing: "1px",
  },

  heroTitle: {
    fontSize: "48px",
    lineHeight: "1.08",
    margin: "20px 0 16px",
    fontWeight: "800",
    letterSpacing: "-1.5px",
  },

  heroHighlight: {
    color: "#0d6efd",
  },

  heroText: {
    maxWidth: "650px",
    color: "#64748b",
    fontSize: "16px",
    lineHeight: "1.7",
    marginBottom: "28px",
  },

  heroButtons: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },

  primaryButton: {
    border: "none",
    padding: "14px 20px",
    borderRadius: "12px",
    background: "linear-gradient(135deg,#0d6efd,#1456b8)",
    color: "white",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(13,110,253,0.25)",
    transition: "all .25s ease",
  },

  secondaryButton: {
    border: "1px solid #dbe3ef",
    padding: "14px 20px",
    borderRadius: "12px",
    background: "white",
    color: "#334155",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all .25s ease",
  },

  arrow: {
    marginLeft: "12px",
    fontSize: "17px",
  },

  /* HERO CARD */
  heroVisual: {
    position: "relative",
    minHeight: "280px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  glow: {
    position: "absolute",
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    background: "rgba(13,110,253,0.13)",
    filter: "blur(45px)",
  },

  bankCard: {
    position: "relative",
    width: "340px",
    minHeight: "205px",
    padding: "25px",
    borderRadius: "24px",
    color: "white",
    background:
      "linear-gradient(135deg,#0f172a 0%,#1e3a8a 55%,#2563eb 100%)",
    boxShadow: "0 30px 60px rgba(15,23,42,0.25)",
    transform: "rotate(2deg)",
  },

  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardLabel: {
    fontSize: "11px",
    letterSpacing: "2px",
    opacity: ".75",
  },

  cardChip: {
    fontSize: "25px",
  },

  cardAmount: {
    fontSize: "30px",
    fontWeight: "800",
    marginTop: "35px",
    letterSpacing: "4px",
  },

  cardBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    marginTop: "30px",
  },

  cardSmall: {
    display: "block",
    fontSize: "8px",
    opacity: ".65",
    marginBottom: "5px",
  },

  activeText: {
    fontSize: "11px",
    color: "#86efac",
  },

  cardBank: {
    fontSize: "14px",
    fontWeight: "800",
    letterSpacing: "2px",
  },

  /* STATS */
  statsGrid: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 6%",
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "16px",
  },

  statCard: {
    background: "rgba(255,255,255,.85)",
    border: "1px solid rgba(148,163,184,.18)",
    borderRadius: "17px",
    padding: "18px",
    display: "flex",
    alignItems: "center",
    gap: "13px",
    position: "relative",
    transition: "all .25s ease",
    boxShadow: "0 8px 25px rgba(15,23,42,.05)",
  },

  statIcon: {
    width: "46px",
    height: "46px",
    borderRadius: "13px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "21px",
    flexShrink: 0,
  },

  statLabel: {
    fontSize: "9px",
    color: "#94a3b8",
    fontWeight: "800",
    letterSpacing: "1px",
  },

  statValue: {
    margin: "3px 0",
    fontSize: "15px",
    fontWeight: "800",
  },

  statDesc: {
    margin: 0,
    fontSize: "10px",
    color: "#64748b",
  },

  statArrow: {
    marginLeft: "auto",
    color: "#94a3b8",
    fontWeight: "700",
  },

  /* MODULE SECTION */
  section: {
    maxWidth: "1200px",
    margin: "55px auto",
    padding: "0 6%",
  },

  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    marginBottom: "20px",
  },

  sectionTag: {
    color: "#0d6efd",
    fontSize: "10px",
    fontWeight: "900",
    letterSpacing: "1.5px",
  },

  sectionTitle: {
    margin: "5px 0 0",
    fontSize: "27px",
    fontWeight: "800",
  },

  secureBadge: {
    padding: "8px 13px",
    borderRadius: "20px",
    background: "#ecfdf5",
    color: "#047857",
    fontSize: "11px",
    fontWeight: "700",
  },

  moduleGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "22px",
  },

  moduleCard: {
    background: "white",
    borderRadius: "22px",
    padding: "28px",
    display: "flex",
    gap: "22px",
    border: "1px solid #e5eaf1",
    boxShadow: "0 15px 35px rgba(15,23,42,0.08)",
    cursor: "pointer",
    transition: "all .3s ease",
  },

  moduleIconBlue: {
    width: "62px",
    height: "62px",
    borderRadius: "18px",
    background: "linear-gradient(135deg,#e8f1ff,#dbeafe)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "29px",
    flexShrink: 0,
  },

  moduleIconGreen: {
    width: "62px",
    height: "62px",
    borderRadius: "18px",
    background: "linear-gradient(135deg,#e8fff3,#d1fae5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "29px",
    flexShrink: 0,
  },

  moduleContent: {
    flex: 1,
  },

  moduleNumber: {
    fontSize: "10px",
    fontWeight: "900",
    color: "#94a3b8",
    letterSpacing: "1px",
  },

  moduleTitle: {
    margin: "7px 0",
    fontSize: "20px",
    fontWeight: "800",
  },

  moduleText: {
    margin: "0 0 18px",
    color: "#64748b",
    fontSize: "13px",
    lineHeight: "1.6",
  },

  moduleButton: {
    border: "none",
    background: "#0d6efd",
    color: "white",
    borderRadius: "9px",
    padding: "10px 15px",
    fontSize: "12px",
    fontWeight: "700",
    cursor: "pointer",
  },

  /* STATUS */
  statusSection: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "30px 6%",
    borderRadius: "22px",
    background: "linear-gradient(135deg,#0f172a,#172554)",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "30px",
  },

  statusTitle: {
    margin: "8px 0",
    fontSize: "24px",
  },

  statusText: {
    margin: 0,
    color: "#94a3b8",
    fontSize: "13px",
  },

  statusItems: {
    display: "flex",
    gap: "25px",
    flexWrap: "wrap",
  },

  statusItem: {
    display: "flex",
    alignItems: "center",
    gap: "9px",
  },

  statusCircle: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    background: "rgba(34,197,94,.15)",
    color: "#4ade80",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
  },

  // statusItem strong: {
  //   display: "block",
  // },

  /* FOOTER */
  footer: {
    maxWidth: "1200px",
    margin: "35px auto 0",
    padding: "0 6%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#64748b",
    fontSize: "11px",
  },

  footerRight: {
    display: "flex",
    gap: "8px",
  },

heroVisual: {
  position: "relative",
  width: "100%",
  minHeight: "360px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  perspective: "1200px",
},

glow: {
  position: "absolute",
  width: "280px",
  height: "280px",
  borderRadius: "50%",
  background:
    "radial-gradient(circle, rgba(37,99,235,.38), rgba(37,99,235,0) 70%)",
  filter: "blur(15px)",
  animation: "pulseGlow 3s ease-in-out infinite",
},

bankCard: {
  width: "390px",
  minHeight: "235px",
  padding: "28px",
  position: "relative",
  overflow: "hidden",
  borderRadius: "24px",

  background:
    "linear-gradient(135deg,#111827 0%,#172554 45%,#1e3a8a 100%)",

  border:
    "1px solid rgba(255,255,255,.16)",

  boxShadow:
    "0 25px 55px rgba(15,23,42,.25)",

  color: "#ffffff",

  transition:
    "all .45s cubic-bezier(.2,.8,.2,1)",

  transform:
    "perspective(1000px) rotateX(0deg) rotateY(0deg)",

  cursor: "pointer",

  zIndex: 2,
},

cardShine: {
  position: "absolute",
  top: "-100%",
  left: "-80%",
  width: "60%",
  height: "300%",
  transform: "rotate(25deg)",

  background:
    "linear-gradient(90deg,transparent,rgba(255,255,255,.13),transparent)",

  pointerEvents: "none",

  animation:
    "cardShineMove 5s ease-in-out infinite",
},

cardTop: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  position: "relative",
  zIndex: 2,
},

cardLabel: {
  display: "block",
  fontSize: "10px",
  fontWeight: "900",
  letterSpacing: "2px",
  color: "#bfdbfe",
},

cardMiniText: {
  marginTop: "5px",
  fontSize: "7px",
  letterSpacing: "1.4px",
  color: "rgba(255,255,255,.45)",
  fontWeight: "700",
},

cardChip: {
  width: "45px",
  height: "34px",
  borderRadius: "9px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  background:
    "linear-gradient(135deg,#f8fafc,#94a3b8)",

  color: "#334155",
  fontSize: "22px",

  boxShadow:
    "inset 0 1px 2px rgba(255,255,255,.8), 0 5px 12px rgba(0,0,0,.18)",
},

cardAmount: {
  marginTop: "55px",
  fontSize: "27px",
  fontWeight: "700",
  letterSpacing: "6px",
  color: "#f8fafc",
  textShadow:
    "0 3px 15px rgba(0,0,0,.25)",
  position: "relative",
  zIndex: 2,
},

cardBottom: {
  position: "absolute",
  left: "28px",
  right: "28px",
  bottom: "25px",

  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",

  zIndex: 2,
},

cardSmall: {
  display: "block",
  fontSize: "7px",
  letterSpacing: "1.3px",
  color: "rgba(255,255,255,.48)",
  marginBottom: "4px",
},

activeText: {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  fontSize: "10px",
  letterSpacing: "1px",
  color: "#86efac",
},

activeDot: {
  fontSize: "9px",
  color: "#22c55e",
  filter:
    "drop-shadow(0 0 5px rgba(34,197,94,.8))",
},

cardBank: {
  display: "flex",
  alignItems: "center",
  gap: "7px",

  fontSize: "11px",
  fontWeight: "900",
  letterSpacing: "1.5px",
  color: "#ffffff",
},

bankSymbol: {
  width: "25px",
  height: "25px",
  borderRadius: "8px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  background:
    "rgba(255,255,255,.12)",

  border:
    "1px solid rgba(255,255,255,.12)",

  fontSize: "13px",
},


  primaryButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",

    padding: "14px 22px",
    minWidth: "245px",

    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: "14px",

    background:
      "linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%)",

    color: "#ffffff",
    fontSize: "15px",
    fontWeight: "700",
    letterSpacing: "0.3px",

    cursor: "pointer",

    boxShadow: "0 8px 22px rgba(15, 23, 42, 0.18)",

    transition:
      "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",

    position: "relative",
    overflow: "hidden",
  },

  buttonIcon: {
    width: "34px",
    height: "34px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: "10px",

    background: "rgba(255,255,255,0.16)",
    border: "1px solid rgba(255,255,255,0.2)",

    fontSize: "17px",

    boxShadow: "inset 0 1px 1px rgba(255,255,255,0.2)",
  },

  buttonText: {
    flex: 1,
    textAlign: "left",
    whiteSpace: "nowrap",
  },

  arrow: {
    width: "30px",
    height: "30px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: "50%",

    background: "rgba(255,255,255,0.13)",

    fontSize: "20px",
    fontWeight: "500",

    transition: "all 0.3s ease",
  },

  
  primaryButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",

    minWidth: "250px",
    padding: "14px 20px",

    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: "15px",

    background:
      "linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e3a8a 100%)",

    color: "#ffffff",

    fontSize: "15px",
    fontWeight: "700",
    letterSpacing: "0.3px",

    cursor: "pointer",

    boxShadow: "0 8px 22px rgba(15, 23, 42, 0.18)",

    transition:
      "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",

    position: "relative",
    overflow: "hidden",
  },

  buttonIcon: {
    width: "36px",
    height: "36px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: "10px",

    background: "rgba(255,255,255,0.16)",
    border: "1px solid rgba(255,255,255,0.2)",

    fontSize: "18px",

    boxShadow:
      "inset 0 1px 2px rgba(255,255,255,0.25)",
  },

  buttonText: {
    flex: 1,
    textAlign: "left",
    whiteSpace: "nowrap",
  },

  arrow: {
    width: "32px",
    height: "32px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: "50%",

    background: "rgba(255,255,255,0.14)",

    fontSize: "21px",
    fontWeight: "500",

    transition: "transform 0.3s ease",
  },
 

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: "18px",
    width: "100%",
  },

  statCard: {
    position: "relative",
    minHeight: "125px",

    display: "flex",
    alignItems: "center",

    gap: "15px",

    padding: "20px",

    background:
      "linear-gradient(145deg, #ffffff, #fbfdff)",

    border: "1px solid #e5ebf0",

    borderRadius: "17px",

    boxShadow:
      "0 8px 24px rgba(15,23,42,.07)",

    cursor: "pointer",

    overflow: "hidden",

    transition:
      "transform .28s ease, box-shadow .28s ease",
  },

  blueCard: {
    borderTop: "3px solid #3b82f6",
  },

  greenCard: {
    borderTop: "3px solid #10b981",
  },

  orangeCard: {
    borderTop: "3px solid #f59e0b",
  },

  purpleCard: {
    borderTop: "3px solid #8b5cf6",
  },

  statIcon: {
    width: "52px",
    height: "52px",

    flexShrink: 0,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: "14px",

    fontSize: "22px",

    border: "1px solid rgba(0,0,0,.04)",

    boxShadow:
      "0 5px 14px rgba(15,23,42,.06)",

    transition: "transform .28s ease",
  },

  statContent: {
    minWidth: 0,
  },

  statLabel: {
    display: "block",

    marginBottom: "5px",

    color: "#8a98a4",

    fontSize: "10px",

    fontWeight: "800",

    letterSpacing: "1.1px",
  },

  statValue: {
    margin: 0,

    color: "#1e293b",

    fontSize: "18px",

    fontWeight: "750",

    lineHeight: "1.25",
  },

  statDesc: {
    margin: "5px 0 0",

    color: "#7a8995",

    fontSize: "11.5px",

    fontWeight: "500",
  },

  statArrow: {
    position: "absolute",

    right: "17px",

    top: "50%",

    transform: "translateY(-50%)",

    color: "#94a3b8",

    fontSize: "19px",

    transition: "transform .28s ease",
  },

  statusSection: {
  width: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  gap: "35px",

  marginTop: "24px",

  padding: "26px 28px",

  background:
    "linear-gradient(145deg, #ffffff 0%, #f8fbfd 100%)",

  border:
    "1px solid #e3ebef",

  borderRadius: "18px",

  boxShadow:
    "0 8px 28px rgba(15,23,42,.06)",

  position: "relative",
  overflow: "hidden",
},


statusIntro: {
  flex: 1,

  minWidth: 0,
},


sectionTag: {
  display: "inline-flex",

  alignItems: "center",

  padding: "5px 9px",

  borderRadius: "6px",

  background: "#edf7fa",

  color: "#19718d",

  fontSize: "9px",

  fontWeight: "800",

  letterSpacing: "1.2px",
},


statusTitle: {
  margin:
    "10px 0 7px",

  color: "#1d3440",

  fontSize: "21px",

  fontWeight: "750",

  letterSpacing: "-.3px",

  lineHeight: "1.25",
},


statusText: {
  margin: 0,

  maxWidth: "520px",

  color: "#71818b",

  fontSize: "12.5px",

  fontWeight: "500",

  lineHeight: "1.6",
},


/* ================= STATUS LIST ================= */

statusItems: {
  display: "flex",

  alignItems: "stretch",

  gap: "10px",

  flexShrink: 0,
},


statusItem: {
  minWidth: "175px",

  display: "flex",

  alignItems: "center",

  gap: "10px",

  padding: "12px 14px",

  borderRadius: "12px",

  background: "#ffffff",

  border:
    "1px solid #e5ecef",

  boxShadow:
    "0 4px 12px rgba(15,23,42,.04)",

  transition:
    "transform .25s ease, box-shadow .25s ease, border-color .25s ease",

  cursor: "default",
},


statusCircle: {
  width: "30px",
  height: "30px",

  flexShrink: 0,

  display: "flex",

  alignItems: "center",
  justifyContent: "center",

  borderRadius: "50%",

  background:
    "linear-gradient(135deg, #e8f9f0, #d9f4e5)",

  color: "#15945b",

  border:
    "1px solid #c8ead7",

  fontSize: "13px",

  fontWeight: "900",

  boxShadow:
    "0 4px 10px rgba(21,148,91,.08)",
},


statusItemContent: {
  display: "flex",

  flexDirection: "column",

  gap: "3px",
},


statusItemStrong: {
  color: "#263d48",
},


statusItemSmall: {
  color: "#81909a",
},
footer: {
  marginTop: "40px",
  padding: "22px 30px",
  background:
    "linear-gradient(135deg, #07111f 0%, #0b1728 55%, #0f2035 100%)",
  borderTop: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 -10px 35px rgba(0,0,0,0.12)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
  color: "#fff",
  position: "relative",
  overflow: "hidden",
},

footerBrand: {
  display: "flex",
  alignItems: "center",
  gap: "14px",
},

footerLogo: {
  width: "42px",
  height: "42px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "22px",
  fontWeight: "800",
  color: "#ffffff",
  background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
  boxShadow: "0 8px 22px rgba(37,99,235,0.35)",
},

footerTitle: {
  fontSize: "14px",
  fontWeight: "800",
  letterSpacing: "1.2px",
  color: "#ffffff",
},

// footerTitle span: {
//   color: "#60a5fa",
// },

footerSubtitle: {
  margin: "5px 0 0",
  fontSize: "12px",
  color: "#94a3b8",
  letterSpacing: "0.2px",
},

footerRight: {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  fontSize: "12px",
},

secureBadge: {
  display: "flex",
  alignItems: "center",
  gap: "7px",
  padding: "7px 12px",
  borderRadius: "20px",
  background: "rgba(34,197,94,0.08)",
  border: "1px solid rgba(34,197,94,0.18)",
  color: "#86efac",
  fontWeight: "600",
},

secureDot: {
  width: "7px",
  height: "7px",
  borderRadius: "50%",
  background: "#22c55e",
  boxShadow: "0 0 10px rgba(34,197,94,0.8)",
},

footerDivider: {
  width: "1px",
  height: "20px",
  background: "rgba(255,255,255,0.12)",
},

copyright: {
  color: "#64748b",
  fontWeight: "500",
},








};

export default Home;