import React from "react";
import { Table } from "react-bootstrap";
import {
  FaClipboardList,
  FaCalendarCheck,
  FaExclamationTriangle,
  FaLock,
  FaHandHoldingUsd,
  FaUserShield,
  FaCheckCircle,
  FaFileSignature,
} from "react-icons/fa";

function Rules() {
  const rules = [
    {
      icon: <FaCalendarCheck />,
      title: "पूर्ण 12 महिन्यांचा कालावधी",
      text: "R.D. ची रक्कम ही पूर्ण बारा महिने ठेवावी लागेल.",
    },
    {
      icon: <FaExclamationTriangle />,
      title: "मासिक हप्ता व विलंब शुल्क",
      text: "R.D. ची रक्कम दिलेल्या दर महिन्याच्या तारखेला भरणे बंधनकारक आहे. तारीख चुकल्यास ₹50 प्रति दिवस दंड आकारला जाईल.",
    },
    {
      icon: <FaLock />,
      title: "मुदतपूर्व खाते बंद",
      text: "सुरू केलेले R.D. खाते मध्येच बंद करता येणार नाही. बंद केल्यास जमा रकमेवर 40% दंड कपात केली जाईल.",
    },
    {
      icon: <FaHandHoldingUsd />,
      title: "कर्जासाठी पात्रता",
      text: "आपल्या संस्थेमार्फत मिळणारे कर्ज फक्त R.D. धारकांनाच मिळेल व R.D. खाते किमान 6 महिने जुने व चालू असावे.",
    },
    {
      icon: <FaUserShield />,
      title: "दोन जामीनदार आवश्यक",
      text: "कर्ज घेण्यासाठी दोन जामीनदार असणे आवश्यक आहे.",
    },
  ];

  const loanData = [
    {
      amount: "₹2,000",
      loan: "₹20,000",
    },
    {
      amount: "₹2,500",
      loan: "₹20,000",
    },
    {
      amount: "₹3,000",
      loan: "₹30,000 - ₹50,000",
    },
  ];

  return (
    <div style={styles.container}>
      {/* Background glow */}
      <div style={styles.glowOne}></div>
      <div style={styles.glowTwo}></div>

      {/* ================= HEADER ================= */}
      <div style={styles.header}>
        <div style={styles.headerBadge}>
          <FaClipboardList />
          OFFICIAL POLICY DOCUMENT
        </div>

        <h1 style={styles.heading}>
          Rules &
          <span style={styles.headingBlue}> Regulations</span>
        </h1>

        <p style={styles.subtitle}>
          R.D. Management System अंतर्गत लागू असलेल्या नियम,
          अटी आणि कर्ज पात्रतेची अधिकृत माहिती.
        </p>
      </div>

      {/* ================= MAIN POLICY CARD ================= */}
      <div style={styles.mainCard}>
        {/* Card Header */}
        <div style={styles.cardHeader}>
          <div style={styles.headerIcon}>
            <FaClipboardList />
          </div>

          <div>
            <span style={styles.sectionTag}>RD ACCOUNT POLICY</span>

            <h2 style={styles.cardTitle}>
              नियम व अटी
            </h2>

            <p style={styles.cardSubtitle}>
              कृपया R.D. योजना सुरू करण्यापूर्वी खालील सर्व नियम
              व अटी काळजीपूर्वक वाचा.
            </p>
          </div>

          <div style={styles.policyBadge}>
            <FaCheckCircle />
            Active Policy
          </div>
        </div>

        {/* ================= RULES ================= */}
        <div style={styles.rulesContainer}>
          {rules.map((rule, index) => (
            <div
              key={index}
              style={styles.ruleCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 14px 30px rgba(15,23,42,.09)";
                e.currentTarget.style.borderColor = "#bfdbfe";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 7px 18px rgba(15,23,42,.04)";
                e.currentTarget.style.borderColor = "#e5e7eb";
              }}
            >
              {/* Number */}
              <div style={styles.ruleNumber}>
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div style={styles.ruleIcon}>
                {rule.icon}
              </div>

              {/* Content */}
              <div style={styles.ruleContent}>
                <h3 style={styles.ruleTitle}>
                  {rule.title}
                </h3>

                <p style={styles.ruleText}>
                  {rule.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= DIVIDER ================= */}
        <div style={styles.divider}></div>

        {/* ================= LOAN SECTION ================= */}
        <div style={styles.loanSection}>
          <div style={styles.loanHeader}>
            <div>
              <span style={styles.sectionTag}>
                LOAN FACILITY
              </span>

              <h2 style={styles.loanTitle}>
                💰 Loan Eligibility
              </h2>

              <p style={styles.loanSubtitle}>
                R.D. धारकांसाठी उपलब्ध कर्ज पात्रतेचे प्रमाण.
              </p>
            </div>

            <div style={styles.loanIcon}>
              ₹
            </div>
          </div>

          {/* Loan Table */}
          <div style={styles.tableWrapper}>
            <Table responsive className="mb-0 align-middle">
              <thead>
                <tr>
                  <th style={styles.tableHead}>
                    R.D. AMOUNT
                  </th>

                  <th style={styles.tableHead}>
                    ELIGIBLE LOAN AMOUNT
                  </th>
                </tr>
              </thead>

              <tbody>
                {loanData.map((item, index) => (
                  <tr
                    key={index}
                    style={styles.tableRow}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "#f8fbff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "#ffffff";
                    }}
                  >
                    <td style={styles.amountCell}>
                      <span style={styles.rupeeIcon}>₹</span>
                      {item.amount.replace("₹", "")}
                    </td>

                    <td style={styles.loanAmountCell}>
                      {item.loan}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          {/* Loan Note */}
         <div style={styles.loanNote}>
  <FaExclamationTriangle />

  <div>
    <strong>महत्त्वाची सूचना</strong>

    <p
      style={{
        margin: "3px 0 0",
        fontSize: "10px",
        lineHeight: "1.5",
      }}
    >
      कर्ज सुविधा घेण्यासाठी R.D. खाते किमान 6 महिने
      जुने व चालू असणे तसेच दोन जामीनदार असणे आवश्यक आहे.
    </p>
  </div>
</div>
        </div>

        {/* ================= DECLARATION ================= */}
        <div style={styles.declaration}>
          <div style={styles.declarationIcon}>
            <FaFileSignature />
          </div>

          <div style={styles.declarationContent}>
            <span style={styles.sectionTag}>
              CUSTOMER DECLARATION
            </span>

            <h3 style={styles.declarationTitle}>
              📢 Declaration
            </h3>

            <p style={styles.declarationText}>
              मी सही करणार, मला वरील नियम व अटी मान्य आहेत.
              मला ही योजना करण्यास कोणतीही जबरदस्ती किंवा आग्रह
              करण्यात आलेला नाही. मी माझ्या स्वखुशीने ही योजना
              करत आहे.
            </p>

            <div style={styles.agreement}>
              <FaCheckCircle />
              <span>
                वरील नियम व अटी वाचून मान्य केले आहेत.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div style={styles.footer}>
        <div>
          <strong>₹ RD BANKING MANAGEMENT SYSTEM</strong>
          <p>
            Professional Recurring Deposit Management Portal
          </p>
        </div>

        <div style={styles.footerRight}>
          <span>🔐 Secure Records</span>
          <span>•</span>
          <span>© 2026</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "45px 6% 40px",
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
    top: "-180px",
    right: "-120px",
    pointerEvents: "none",
  },

  glowTwo: {
    position: "absolute",
    width: "350px",
    height: "350px",
    borderRadius: "50%",
    background: "rgba(99,102,241,.06)",
    filter: "blur(85px)",
    bottom: "200px",
    left: "-180px",
    pointerEvents: "none",
  },

  /* ================= HEADER ================= */

  header: {
    maxWidth: "850px",
    margin: "0 auto 40px",
    textAlign: "center",
    position: "relative",
    zIndex: 1,
  },

  headerBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 14px",
    borderRadius: "30px",
    background: "rgba(255,255,255,.82)",
    border: "1px solid #dbe5f1",
    color: "#2563eb",
    fontSize: "9px",
    fontWeight: "900",
    letterSpacing: "1.5px",
    boxShadow: "0 8px 25px rgba(15,23,42,.04)",
  },

  heading: {
    margin: "18px 0 10px",
    fontSize: "47px",
    fontWeight: "850",
    letterSpacing: "-1.8px",
  },

  headingBlue: {
    color: "#0d6efd",
  },

  subtitle: {
    maxWidth: "680px",
    margin: "0 auto",
    color: "#64748b",
    fontSize: "14px",
    lineHeight: "1.7",
  },

  /* ================= MAIN CARD ================= */

  mainCard: {
    maxWidth: "1150px",
    margin: "0 auto",
    padding: "32px",
    background: "rgba(255,255,255,.94)",
    border: "1px solid #e2e8f0",
    borderRadius: "26px",
    position: "relative",
    zIndex: 1,
    boxShadow: "0 25px 60px rgba(15,23,42,.08)",
  },

  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    paddingBottom: "25px",
  },

  headerIcon: {
    width: "58px",
    height: "58px",
    borderRadius: "17px",
    background:
      "linear-gradient(135deg,#eaf2ff,#dbeafe)",
    color: "#2563eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "23px",
    flexShrink: 0,
  },

  sectionTag: {
    color: "#2563eb",
    fontSize: "9px",
    fontWeight: "900",
    letterSpacing: "1.5px",
  },

  cardTitle: {
    margin: "4px 0",
    fontSize: "25px",
    fontWeight: "850",
  },

  cardSubtitle: {
    margin: 0,
    color: "#64748b",
    fontSize: "11px",
  },

  policyBadge: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "8px 12px",
    borderRadius: "20px",
    background: "#f0fdf4",
    color: "#15803d",
    fontSize: "9px",
    fontWeight: "800",
  },

  /* ================= RULES ================= */

  rulesContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "15px",
  },

  ruleCard: {
    minHeight: "145px",
    padding: "21px",
    borderRadius: "17px",
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    display: "flex",
    alignItems: "flex-start",
    gap: "14px",
    position: "relative",
    transition: "all .28s ease",
    boxShadow: "0 7px 18px rgba(15,23,42,.04)",
  },

  ruleNumber: {
    position: "absolute",
    right: "16px",
    top: "14px",
    fontSize: "10px",
    fontWeight: "900",
    color: "#cbd5e1",
  },

  ruleIcon: {
    width: "45px",
    height: "45px",
    borderRadius: "13px",
    background: "#eef4ff",
    color: "#2563eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    flexShrink: 0,
  },

  ruleContent: {
    paddingRight: "20px",
  },

  ruleTitle: {
    margin: "2px 0 8px",
    fontSize: "14px",
    fontWeight: "800",
    color: "#1e293b",
  },

  ruleText: {
    margin: 0,
    color: "#64748b",
    fontSize: "11px",
    lineHeight: "1.75",
  },

  divider: {
    height: "1px",
    background: "#e5e7eb",
    margin: "30px 0",
  },

  /* ================= LOAN ================= */

  loanSection: {
    padding: "5px 0",
  },

  loanHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },

  loanTitle: {
    margin: "5px 0 3px",
    fontSize: "23px",
    fontWeight: "850",
  },

  loanSubtitle: {
    margin: 0,
    color: "#64748b",
    fontSize: "11px",
  },

  loanIcon: {
    width: "58px",
    height: "58px",
    borderRadius: "17px",
    background:
      "linear-gradient(135deg,#ecfdf5,#d1fae5)",
    color: "#15803d",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "25px",
    fontWeight: "900",
  },

  tableWrapper: {
    border: "1px solid #e2e8f0",
    borderRadius: "16px",
    overflow: "hidden",
  },

  tableHead: {
    padding: "15px 20px",
    background: "#f1f5f9",
    color: "#475569",
    fontSize: "9px",
    letterSpacing: "1px",
    fontWeight: "900",
    border: "none",
  },

  tableRow: {
    background: "#ffffff",
    transition: "all .2s ease",
  },

  amountCell: {
    padding: "17px 20px",
    fontSize: "13px",
    fontWeight: "800",
    color: "#334155",
  },

  rupeeIcon: {
    display: "inline-flex",
    width: "27px",
    height: "27px",
    borderRadius: "8px",
    alignItems: "center",
    justifyContent: "center",
    background: "#eaf2ff",
    color: "#2563eb",
    marginRight: "9px",
    fontSize: "11px",
  },

  loanAmountCell: {
    padding: "17px 20px",
    fontSize: "14px",
    fontWeight: "900",
    color: "#15803d",
  },

  loanNote: {
    marginTop: "16px",
    padding: "13px 15px",
    borderRadius: "13px",
    background: "#fff7ed",
    border: "1px solid #fed7aa",
    color: "#9a3412",
    display: "flex",
    gap: "10px",
    alignItems: "flex-start",
    fontSize: "12px",
  },
loanNote: {
  marginTop: "16px",
  padding: "13px 15px",
  borderRadius: "13px",
  background: "#fff7ed",
  border: "1px solid #fed7aa",
  color: "#9a3412",
  display: "flex",
  gap: "10px",
  alignItems: "flex-start",
  fontSize: "12px",
},

  /* ================= DECLARATION ================= */

  declaration: {
    marginTop: "30px",
    padding: "22px",
    borderRadius: "18px",
    background:
      "linear-gradient(135deg,#f8fafc,#f1f5f9)",
    border: "1px solid #e2e8f0",
    display: "flex",
    gap: "15px",
  },

  declarationIcon: {
    width: "48px",
    height: "48px",
    borderRadius: "14px",
    background: "#eaf2ff",
    color: "#2563eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    flexShrink: 0,
  },

  declarationTitle: {
    margin: "5px 0",
    fontSize: "17px",
    fontWeight: "850",
  },

  declarationText: {
    margin: 0,
    color: "#64748b",
    fontSize: "11px",
    lineHeight: "1.75",
  },

  agreement: {
    marginTop: "12px",
    display: "inline-flex",
    alignItems: "center",
    gap: "7px",
    padding: "7px 10px",
    borderRadius: "8px",
    background: "#f0fdf4",
    color: "#15803d",
    fontSize: "9px",
    fontWeight: "800",
  },

  /* ================= FOOTER ================= */

  footer: {
    maxWidth: "1150px",
    margin: "28px auto 0",
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
};

export default Rules;