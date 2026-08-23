import React from "react";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";

function Contect() {
  const handleSupport = () => {
    Swal.fire({
      title: "Contact Support",
      html: `
        <div style="
          text-align:left;
          font-size:14px;
          line-height:1.8;
          color:#475569;
          padding:5px 10px;
        ">
          <div style="
            padding:14px;
            background:#f8fafc;
            border-radius:12px;
            margin-bottom:10px;
          ">
            📞 <b>Call:</b> +91 7058636093
          </div>

          <div style="
            padding:14px;
            background:#f8fafc;
            border-radius:12px;
            margin-bottom:10px;
          ">
            💬 <b>WhatsApp:</b> +91 7058636093
          </div>

          <div style="
            padding:14px;
            background:#f8fafc;
            border-radius:12px;
          ">
            📧 <b>Email:</b> mahemoodshaikh955@gmail.com
          </div>
        </div>
      `,
      icon: "info",
      showDenyButton: true,
      showCancelButton: true,

      confirmButtonText: "💬 WhatsApp",
      denyButtonText: "📞 Call",
      cancelButtonText: "📧 Email",

      confirmButtonColor: "#16a34a",
      denyButtonColor: "#2563eb",
      cancelButtonColor: "#475569",

      background: "#ffffff",
      color: "#0f172a",
      borderRadius: "22px",
      buttonsStyling: true,
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(
          "https://wa.me/917058636093?text=Hello%20Support,%20I%20need%20help%20regarding%20the%20RD%20Management%20System.",
          "_blank"
        );
      } else if (result.isDenied) {
        window.location.href = "tel:+917058636093";
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        window.location.href =
          "mailto:mahemoodshaikh955@gmail.com?subject=RD Management System Support";
      }
    });
  };

  const openMaps = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Umang+Fine+Investment+Solutions%2C+S%2FA%2F3+Shop+No+4%2C+Ajmera+Housing+Society%2C+Pimpri%2C+Pune+411018",
      "_blank"
    );
  };

  return (
    <div style={styles.container}>
      {/* Background Effects */}
      <div style={styles.glowOne}></div>
      <div style={styles.glowTwo}></div>

      {/* ================= HEADER ================= */}
      <div style={styles.header}>
        <div style={styles.headerBadge}>
          <span style={styles.onlineDot}></span>
          SUPPORT CENTER
        </div>

        <h1 style={styles.heading}>
          We're here to
          <span style={styles.headingBlue}> help.</span>
        </h1>

        <p style={styles.subtitle}>
          Get in touch with our support team for assistance with the
          RD Management System.
        </p>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div style={styles.mainGrid}>
        {/* ================= LEFT CONTACT CARD ================= */}
        <div style={styles.contactCard}>
          <div style={styles.cardTop}>
            <div>
              <span style={styles.sectionTag}>CONTACT INFORMATION</span>

              <h2 style={styles.cardTitle}>Let's connect</h2>

              <p style={styles.cardDescription}>
                Choose your preferred way to reach us. Our support
                channels are available for your assistance.
              </p>
            </div>

<div
  style={styles.supportIcon}
  onClick={() => {
    window.location.href = "tel:+917058636093";
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform =
      "translateY(-6px) scale(1.08)";
    e.currentTarget.style.boxShadow =
      "0 18px 40px rgba(37,99,235,.45)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform =
      "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow =
      "0 12px 30px rgba(37,99,235,.30)";
  }}
  title="Call Support"
>
  <span style={styles.callPulse}></span>
  <span style={styles.callIcon}>☎</span>
</div>
          </div>

          {/* Phone */}
          <div
            style={styles.contactItem}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(6px)";
              e.currentTarget.style.borderColor = "#bfdbfe";
              e.currentTarget.style.background = "#f8fbff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
              e.currentTarget.style.borderColor = "#e2e8f0";
              e.currentTarget.style.background = "#ffffff";
            }}
          >
            <div style={{ ...styles.contactIcon, background: "#eaf2ff" }}>
              📞
            </div>

            <div>
              <span style={styles.contactLabel}>PHONE SUPPORT</span>
              <h3 style={styles.contactValue}>+91 7058636093</h3>
              <span style={styles.contactHint}>Available for assistance</span>
            </div>
          </div>

          {/* Email */}
          <div
            style={styles.contactItem}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(6px)";
              e.currentTarget.style.borderColor = "#c7d2fe";
              e.currentTarget.style.background = "#fafaff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
              e.currentTarget.style.borderColor = "#e2e8f0";
              e.currentTarget.style.background = "#ffffff";
            }}
          >
            <div style={{ ...styles.contactIcon, background: "#eef2ff" }}>
              ✉️
            </div>

            <div>
              <span style={styles.contactLabel}>EMAIL SUPPORT</span>
              <h3 style={styles.contactValue}>
                mahemoodshaikh955@gmail.com
              </h3>
              <span style={styles.contactHint}>
                Send us your queries
              </span>
            </div>
          </div>

          {/* WhatsApp */}
          <div
            style={styles.contactItem}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(6px)";
              e.currentTarget.style.borderColor = "#bbf7d0";
              e.currentTarget.style.background = "#f8fff9";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
              e.currentTarget.style.borderColor = "#e2e8f0";
              e.currentTarget.style.background = "#ffffff";
            }}
          >
            <div style={{ ...styles.contactIcon, background: "#eafaf1" }}>
              💬
            </div>

            <div>
              <span style={styles.contactLabel}>WHATSAPP</span>
              <h3 style={styles.contactValue}>+91 7058636093</h3>
              <span style={styles.contactHint}>
                Quick support via WhatsApp
              </span>
            </div>
          </div>

          {/* CTA */}
          <button
            style={styles.supportButton}
            onClick={handleSupport}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 15px 30px rgba(37,99,235,.28)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(37,99,235,.20)";
            }}
          >
            <span>Contact Support</span>
            <span style={styles.buttonArrow}>→</span>
          </button>
        </div>

        {/* ================= RIGHT LOCATION CARD ================= */}
        <div style={styles.locationCard}>
          <div style={styles.locationHeader}>
            <div>
              <span style={styles.sectionTag}>OUR LOCATION</span>

              <h2 style={styles.cardTitle}>Visit our office</h2>
            </div>

<div
  style={styles.mapIcon}
  onClick={() =>
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Umang+Fine+Investment+Solutions%2C+S%2FA%2F3+Shop+No+4%2C+Ajmera+Housing+Society%2C+Pimpri%2C+Pune+411018",
      "_blank"
    )
  }
  onMouseEnter={(e) => {
    e.currentTarget.style.transform =
      "translateY(-6px) scale(1.08)";
    e.currentTarget.style.boxShadow =
      "0 18px 40px rgba(239,68,68,.35)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform =
      "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow =
      "0 10px 25px rgba(239,68,68,.20)";
  }}
  title="Open Office Location"
>
  <span style={styles.mapPulse}></span>
  <span style={styles.mapPin}>📍</span>
</div>
          </div>

          {/* Address */}
          <div style={styles.addressBox}>
            <div style={styles.addressIcon}>🏢</div>

            <div>
              <span style={styles.addressLabel}>BRANCH OFFICE</span>

              <p style={styles.addressText}>
                S/A Shop No. 4, Ajmera Housing Society,
                <br />
                Near S.S. Ajmera School,
                <br />
                Pimpri, Pune - 411018
              </p>
            </div>
          </div>

          {/* Map */}
          <div style={styles.mapWrapper}>
            <iframe
              title="Office Location"
              src="https://www.google.com/maps?q=Umang+Fine+Investment+Solutions,+S/A/3+Shop+No+4,+Ajmera+Housing+Society,+Pimpri,+Pune+411018&output=embed"
              width="100%"
              height="100%"
              style={styles.map}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div style={styles.mapOverlay}>
              <span>📍</span>
              <strong>Pimpri, Pune</strong>
            </div>
          </div>

          <button
            style={styles.mapButton}
            onClick={openMaps}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#0d6efd";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.borderColor = "#0d6efd";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#ffffff";
              e.currentTarget.style.color = "#0d6efd";
              e.currentTarget.style.borderColor = "#bfdbfe";
            }}
          >
            <span>📍</span>
            Open in Google Maps
            <span>↗</span>
          </button>
        </div>
      </div>

      {/* ================= HEAD OFFICE ================= */}
      <div style={styles.officeCard}>
        <div style={styles.officeIcon}>🏦</div>

        <div style={styles.officeContent}>
          <span style={styles.sectionTag}>HEAD OFFICE</span>

          <h3 style={styles.officeTitle}>
            Shree Ganesh Sapphire
          </h3>

          <p style={styles.officeAddress}>
            302, Shree Ganesh Sapphire, P.N. 05, Mumbai Naka,
            Nashik - 422001, Maharashtra
          </p>
        </div>

        <div style={styles.officeStatus}>
          <span style={styles.statusDot}></span>
          Office Information
        </div>
      </div>

      {/* ================= SECURITY STRIP ================= */}
      <div style={styles.securityStrip}>
        <div style={styles.securityIcon}>🔐</div>

        <div>
          <h3 style={styles.securityTitle}>
            Secure Support Environment
          </h3>

          <p style={styles.securityText}>
            Your communication and support requests are handled through
            dedicated contact channels.
          </p>
        </div>

        <div style={styles.securePill}>
          ✓ Secure
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer style={styles.footer}>
        <div>
          <strong>₹ RD BANKING MANAGEMENT SYSTEM</strong>
          <p>Professional Recurring Deposit Management Portal</p>
        </div>

        <div style={styles.footerRight}>
          <span>🔐 Secure</span>
          <span>•</span>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "50px 6% 40px",
    position: "relative",
    overflow: "hidden",
    background:
      "linear-gradient(135deg,#f8fafc 0%,#eef4ff 50%,#f8fafc 100%)",
    fontFamily:
      "Inter,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",
    color: "#0f172a",
  },

  glowOne: {
    position: "absolute",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background: "rgba(37,99,235,.08)",
    filter: "blur(90px)",
    top: "-170px",
    right: "-120px",
    pointerEvents: "none",
  },

  glowTwo: {
    position: "absolute",
    width: "320px",
    height: "320px",
    borderRadius: "50%",
    background: "rgba(99,102,241,.06)",
    filter: "blur(80px)",
    bottom: "250px",
    left: "-170px",
    pointerEvents: "none",
  },

  /* HEADER */
  header: {
    maxWidth: "850px",
    margin: "0 auto 45px",
    textAlign: "center",
    position: "relative",
    zIndex: 1,
  },

  headerBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "9px",
    padding: "8px 14px",
    borderRadius: "30px",
    background: "rgba(255,255,255,.8)",
    border: "1px solid #dbe5f1",
    color: "#2563eb",
    fontSize: "10px",
    fontWeight: "900",
    letterSpacing: "1.5px",
    boxShadow: "0 8px 25px rgba(15,23,42,.04)",
  },

  onlineDot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    background: "#22c55e",
    boxShadow: "0 0 0 4px rgba(34,197,94,.12)",
  },

  heading: {
    margin: "18px 0 12px",
    fontSize: "48px",
    fontWeight: "850",
    letterSpacing: "-1.7px",
  },

  headingBlue: {
    color: "#0d6efd",
  },

  subtitle: {
    maxWidth: "650px",
    margin: "0 auto",
    color: "#64748b",
    fontSize: "15px",
    lineHeight: "1.7",
  },

  /* MAIN */
  mainGrid: {
    maxWidth: "1200px",
    margin: "0 auto 25px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "22px",
    position: "relative",
    zIndex: 1,
  },

  contactCard: {
    background: "rgba(255,255,255,.92)",
    border: "1px solid #e2e8f0",
    borderRadius: "24px",
    padding: "30px",
    boxShadow: "0 18px 40px rgba(15,23,42,.07)",
  },

  locationCard: {
    background: "rgba(255,255,255,.92)",
    border: "1px solid #e2e8f0",
    borderRadius: "24px",
    padding: "30px",
    boxShadow: "0 18px 40px rgba(15,23,42,.07)",
  },

  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    marginBottom: "22px",
  },

  sectionTag: {
    color: "#2563eb",
    fontSize: "9px",
    fontWeight: "900",
    letterSpacing: "1.5px",
  },

  cardTitle: {
    margin: "5px 0 6px",
    fontSize: "25px",
    fontWeight: "850",
    letterSpacing: "-.5px",
  },

  cardDescription: {
    margin: 0,
    color: "#64748b",
    fontSize: "12px",
    lineHeight: "1.6",
  },

  supportIcon: {
    width: "52px",
    height: "52px",
    borderRadius: "16px",
    background: "linear-gradient(135deg,#eaf2ff,#dbeafe)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "23px",
    flexShrink: 0,
  },

  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "14px",
    marginBottom: "11px",
    borderRadius: "15px",
    border: "1px solid #e2e8f0",
    background: "#ffffff",
    transition: "all .25s ease",
  },

  contactIcon: {
    width: "45px",
    height: "45px",
    borderRadius: "13px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "19px",
    flexShrink: 0,
  },

  contactLabel: {
    display: "block",
    color: "#94a3b8",
    fontSize: "8px",
    fontWeight: "900",
    letterSpacing: "1px",
    marginBottom: "3px",
  },

  contactValue: {
    margin: 0,
    fontSize: "13px",
    fontWeight: "800",
    color: "#1e293b",
  },

  contactHint: {
    display: "block",
    color: "#94a3b8",
    fontSize: "9px",
    marginTop: "2px",
  },

  supportButton: {
    width: "100%",
    border: "none",
    borderRadius: "13px",
    padding: "14px 18px",
    marginTop: "8px",
    background: "linear-gradient(135deg,#0d6efd,#1d4ed8)",
    color: "#ffffff",
    fontSize: "13px",
    fontWeight: "800",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    boxShadow: "0 10px 25px rgba(37,99,235,.20)",
    transition: "all .25s ease",
  },

  buttonArrow: {
    fontSize: "17px",
  },

  /* LOCATION */
  locationHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "18px",
  },

  mapIcon: {
    width: "52px",
    height: "52px",
    borderRadius: "16px",
    background: "#fff1f2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
  },

  addressBox: {
    display: "flex",
    gap: "12px",
    padding: "14px",
    borderRadius: "15px",
    background: "#f8fafc",
    border: "1px solid #edf1f5",
    marginBottom: "15px",
  },

  addressIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "11px",
    background: "#eaf2ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  addressLabel: {
    fontSize: "8px",
    color: "#94a3b8",
    fontWeight: "900",
    letterSpacing: "1px",
  },

  addressText: {
    margin: "4px 0 0",
    fontSize: "11px",
    lineHeight: "1.6",
    color: "#475569",
  },

  mapWrapper: {
    width: "100%",
    height: "250px",
    borderRadius: "17px",
    overflow: "hidden",
    position: "relative",
    border: "1px solid #e2e8f0",
  },

  map: {
    width: "100%",
    height: "100%",
    border: 0,
  },

  mapOverlay: {
    position: "absolute",
    left: "12px",
    bottom: "12px",
    padding: "8px 11px",
    background: "rgba(255,255,255,.94)",
    backdropFilter: "blur(8px)",
    borderRadius: "10px",
    display: "flex",
    gap: "6px",
    alignItems: "center",
    fontSize: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,.12)",
  },

  mapButton: {
    width: "100%",
    marginTop: "12px",
    padding: "12px",
    borderRadius: "11px",
    background: "#ffffff",
    border: "1px solid #bfdbfe",
    color: "#0d6efd",
    fontSize: "12px",
    fontWeight: "800",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    transition: "all .25s ease",
  },

  /* OFFICE */
  officeCard: {
    maxWidth: "1200px",
    margin: "0 auto 22px",
    padding: "22px 25px",
    background: "rgba(255,255,255,.82)",
    border: "1px solid #e2e8f0",
    borderRadius: "19px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
    position: "relative",
    zIndex: 1,
    boxShadow: "0 10px 25px rgba(15,23,42,.04)",
  },

  officeIcon: {
    width: "50px",
    height: "50px",
    borderRadius: "14px",
    background: "#eef2ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    flexShrink: 0,
  },

  officeContent: {
    flex: 1,
  },

  officeTitle: {
    margin: "4px 0",
    fontSize: "15px",
    fontWeight: "800",
  },

  officeAddress: {
    margin: 0,
    color: "#64748b",
    fontSize: "11px",
  },

  officeStatus: {
    padding: "8px 12px",
    borderRadius: "20px",
    background: "#f0fdf4",
    color: "#15803d",
    fontSize: "9px",
    fontWeight: "800",
  },

  statusDot: {
    display: "inline-block",
    width: "6px",
    height: "6px",
    background: "#22c55e",
    borderRadius: "50%",
    marginRight: "6px",
  },

  /* SECURITY */
  securityStrip: {
    maxWidth: "1200px",
    margin: "0 auto 35px",
    padding: "22px 25px",
    borderRadius: "20px",
    background: "linear-gradient(135deg,#0f172a,#172554)",
    color: "white",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    position: "relative",
    zIndex: 1,
    boxShadow: "0 20px 40px rgba(15,23,42,.15)",
  },

  securityIcon: {
    width: "45px",
    height: "45px",
    borderRadius: "13px",
    background: "rgba(255,255,255,.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
  },

  securityTitle: {
    margin: 0,
    fontSize: "14px",
  },

  securityText: {
    margin: "3px 0 0",
    color: "#94a3b8",
    fontSize: "10px",
  },

  securePill: {
    marginLeft: "auto",
    padding: "8px 12px",
    borderRadius: "20px",
    background: "rgba(34,197,94,.12)",
    color: "#4ade80",
    fontSize: "10px",
    fontWeight: "800",
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
supportIcon: {
  width: "64px",
  height: "64px",
  borderRadius: "20px",
  background:
    "linear-gradient(135deg,#2563eb,#1d4ed8)",
  color: "#ffffff",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  position: "relative",
  cursor: "pointer",

  fontSize: "25px",

  boxShadow:
    "0 12px 30px rgba(37,99,235,.30)",

  transition:
    "all .35s cubic-bezier(.2,.8,.2,1)",

  zIndex: 1,
},

callIcon: {
  position: "relative",
  zIndex: 3,

  display: "inline-block",

  animation:
    "callRing 2s ease-in-out infinite",
},

callPulse: {
  position: "absolute",
  inset: "-7px",

  borderRadius: "24px",

  border:
    "2px solid rgba(37,99,235,.35)",

  animation:
    "callPulse 2s ease-out infinite",

  pointerEvents: "none",
},

mapIcon: {
  width: "64px",
  height: "64px",
  borderRadius: "20px",

  background:
    "linear-gradient(135deg,#ef4444,#dc2626)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  position: "relative",

  cursor: "pointer",

  fontSize: "27px",

  boxShadow:
    "0 10px 25px rgba(239,68,68,.20)",

  transition:
    "all .35s cubic-bezier(.2,.8,.2,1)",

  zIndex: 1,
},

mapPin: {
  position: "relative",
  zIndex: 3,

  display: "inline-block",

  animation:
    "mapBounce 2s ease-in-out infinite",
},

mapPulse: {
  position: "absolute",
  inset: "-7px",

  borderRadius: "24px",

  border:
    "2px solid rgba(239,68,68,.35)",

  animation:
    "mapPulse 2s ease-out infinite",

  pointerEvents: "none",
},



};

export default Contect;