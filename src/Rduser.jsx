import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { Container, Table, Button, Card } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FaEdit, FaTrash, FaBookOpen, FaEye } from "react-icons/fa";

export default function Rduser() {
  const [data, SetData] = useState([]);
  const [rid, SetRid] = useState("");
  const [accupation, SetAccu] = useState("");
  const [acno, SetAcco] = useState("");
  const [address, SetAdd] = useState("");
  const [dob, SetDob] = useState("");
  const [gender, SetGen] = useState("");
  const [name, SetNm] = useState("");
  const [naddr, SetNaddr] = useState("");
  const [nadharno, SetNadhrno] = useState("");
  const [nname, SetNnm] = useState("");
  const [npanno, SetNpano] = useState("");
  const [panno, SetPanno] = useState("");
  const [rdamt, SetRdamt] = useState("");
  const [rddate, SetRddtt] = useState("");
  const [adharno, SetAdhrno] = useState("");
  const [agree, SetAgree] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    SetRid("");
  };

  const [searchRD, setSearchRD] = useState("");
  const filteredRDData = data.filter((item) => {
    const searchValue = searchRD.toLowerCase().trim();

    return (
      item.name?.toLowerCase().includes(searchValue) ||
      item.acno?.toString().toLowerCase().includes(searchValue) ||
      item.adharno?.toString().toLowerCase().includes(searchValue) ||
      item.panno?.toString().toLowerCase().includes(searchValue)
    );
  });

  const [pageNumberRD, setPageNumberRD] = useState(1);
  const rowsPerPageRD = 5;

  const firstRecordRD = (pageNumberRD - 1) * rowsPerPageRD;
  const lastRecordRD = firstRecordRD + rowsPerPageRD;

  const visibleRecordsRD = filteredRDData.slice(firstRecordRD, lastRecordRD);

  const pageCountRD = Math.ceil(filteredRDData.length / rowsPerPageRD);

  //passbook add part//
  const [Pasbokdata, PasbokSetData] = useState([]);

  const [pasbokfmt, PassbokSetFmt] = useState("0");
  const [pasboklday, PassbokSetLday] = useState("0");
  const [pasbokrdamt, PassbokSetRdamt] = useState("0");
  const [pasbokrddate, PassbokSetRddate] = useState("0");

  const handlpasbokfmt = (p) => {
    PassbokSetFmt(p.target.value);
  };
  const handlpasboklday = (p) => {
    PassbokSetLday(p.target.value);
  };
  const handlpasbokrdamt = (p) => {
    PassbokSetRdamt(p.target.value);
  };
  const handlpasbokrddate = (p) => {
    PassbokSetRddate(p.target.value);
  };

  const [passshow, passsetShow] = useState(false);

  const handlepassClose = () => {
    passsetShow(false);
    PassbokSetFmt("");
    PassbokSetLday("");
    PassbokSetRdamt("");
    PassbokSetRddate("");
    SetRid("");
  };

  const handleAddPassbook = () => {
    if (Pdata.length >= 12) {
      Swal.fire({
        icon: "warning",
        title: "Limit Reached",
        text: "Maximum 12 installments are allowed.",
      });
      return;
    }
    const obj = {
      fmt: pasbokfmt,
      lday: pasboklday,
      rdamt: pasbokrdamt,
      rddate: pasbokrddate,

      rduser: {
        rid: rid,
      },
    };

    console.log("OBJ :", obj);
    console.log("RID :", rid);

    axios
      .post("http://localhost:8080/savepassbook", obj)
      .then((res) => {
        console.log(res.data);
        PasbokSetData(res.data);

        Swal.fire({
          icon: "success",
          title: "Passbook Entry Added Successfully",
          timer: 1500,
          showConfirmButton: false,
        });

        passsetShow(false);

        PassbokSetFmt("0");
        PassbokSetLday("0");
        PassbokSetRdamt("0");
        PassbokSetRddate("");

        viewData(rid);
      })
      .catch((err) => {
        console.log("Full Error :", err);

        const status = err.response?.status;
        const data = err.response?.data;

        console.log("Status :", status);
        console.log("Data :", data);

        Swal.fire({
          icon: "error",
          title: "Passbook Entry Failed",
          text: data
            ? JSON.stringify(data)
            : err.message || "Something went wrong",
        });
      });
  };

  const handleShow = () => {
    SetRid("");
    SetAccu("");
    SetAcco("");
    SetAdd("");
    SetDob("");
    SetGen("");
    SetNm("");
    SetNaddr("");
    SetNadhrno("");
    SetNnm("");
    SetNpano("");
    SetPanno("");
    SetRdamt("");
    SetRddtt("");
    SetAdhrno("");
    SetAgree(false);

    setShow(true);
  };

  const editData = (item) => {
    SetRid(item.rid);
    SetAccu(item.accupation);
    SetAcco(item.acno);
    SetAdd(item.address);
    SetDob(item.dob);
    SetGen(item.gender);
    SetNm(item.name);
    SetNaddr(item.naddr);
    SetNadhrno(item.nadharno);
    SetNnm(item.nname);
    SetNpano(item.npanno);
    SetPanno(item.panno);
    SetRdamt(item.rdamt);
    SetRddtt(item.rddate);
    SetAdhrno(item.adharno);
    SetAgree(item.agree);
    setShow(true);
  };

  const updateData = () => {
    const obj = {
      rid,
      accupation,
      acno,
      address,
      dob,
      gender,
      name,
      naddr,
      nadharno,
      nname,
      npanno,
      panno,
      rdamt,
      rddate,
      adharno,
      agree,
    };

    axios.put("http://localhost:8080/uddtuser", obj).then(() => {
      Swal.fire({
        icon: "success",
        title: "Updated Successfully",
      });

      handleClose();
      rdapi();
      SetRid("");
    });
  };

  const rdapi = () => {
    axios.get("http://localhost:8080/rduser").then((res) => {
      console.log(res.data);
      SetData(res.data);
    });
  };
  useEffect(() => {
    rdapi();
  }, []);

  const [Pshow, setPShow] = useState(false);
  const handlePClose = () => {
    setPShow(false);
  };

  const [Pdata, SetPData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  const totalPages = Math.ceil(Pdata.length / recordsPerPage);

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const currentData = Pdata.slice(firstIndex, lastIndex);

  const [summary, SetSummary] = useState({});

  const viewData = (id) => {
    SetRid(id);

    axios
      .get("http://localhost:8080/getpassbookById/" + id)
      .then((res) => {
        const data = res.data;

        if (data.length > 0) {
          SetPData(data);

          const totalInstallment = 12;

          const paidInstallment = data.length;

          const pendingInstallment = Math.max(
            totalInstallment - paidInstallment,
            0,
          );

          const customerName = data[0].name;

          const monthlyAmount = Number(data[0].rdamt);

          const openingDate = data[0].rddate;

          const currentDate = new Date().toISOString().split("T")[0];

          let totalDeposit = 0;
          let totalFine = 0;
          let totalLateDays = 0;

          data.forEach((item) => {
            totalDeposit += Number(item.rdamt);

            totalFine += Number(item.fmt);

            totalLateDays += Number(item.lday);
          });

          const maturityDeposit = monthlyAmount * totalInstallment;

          const interestRate = 14;

          const interest = (maturityDeposit * interestRate) / 100;

          const maturityAmount = maturityDeposit + interest;

          const netPayable = maturityAmount - totalFine;

          SetSummary({
            customerName,

            monthlyAmount,

            openingDate,

            currentDate,

            totalInstallment,

            paidInstallment,

            pendingInstallment,

            totalDeposit,

            interestRate,

            interest,

            maturityAmount,

            maturityDeposit,

            totalFine,

            totalLateDays,

            netPayable,
          });

          Swal.fire({
            icon: "success",
            title: "Passbook Loaded",
            text: "Customer passbook loaded successfully.",
            timer: 1200,
            showConfirmButton: false,
          }).then(() => {
            setPShow(true);
          });
        } else {
          Swal.fire({
            icon: "info",

            title: "No Records Found",

            text: "No passbook entries available.",
          });
        }
      })
      .catch((err) => {
        console.log(err);

        Swal.fire({
          icon: "error",

          title: "Oops...",

          text: "Unable to fetch passbook details.",
        });
      });
  };
  const handleLoanEligibility = () => {
    const paidInstallment = Number(summary.paidInstallment || 0);

    if (paidInstallment >= 6) {
      Swal.fire({
        icon: "success",
        title: "Loan Eligible ✅",
        html: `
        <div style="text-align:left; padding:5px 10px;">

          <div style="
            background:#eaf8f0;
            border-radius:12px;
            padding:15px;
            margin-bottom:15px;
            border:1px solid #c8ead7;
          ">
            <div style="
              font-size:15px;
              color:#198754;
              font-weight:600;
              margin-bottom:8px;
            ">
              ✓ Customer is eligible for loan
            </div>

            <div style="
              display:flex;
              justify-content:space-between;
              font-size:15px;
              margin-top:8px;
            ">
              <span style="color:#6c757d;">
                Paid Installments
              </span>

              <strong style="color:#198754;">
                ${paidInstallment} Months
              </strong>
            </div>
          </div>

          <div style="
            background:#f8f9fa;
            border-radius:12px;
            padding:15px;
            margin-bottom:15px;
          ">
            <div style="
              font-weight:600;
              color:#343a40;
              margin-bottom:8px;
            ">
              📋 Loan Eligibility Rules
            </div>

            <div style="
              font-size:14px;
              color:#6c757d;
              line-height:1.8;
            ">
              • Minimum 6 months completed<br/>
              • R.D. account must be active<br/>
              • Customer must be an R.D. holder
            </div>
          </div>

          <div style="
            background:#fff8e6;
            color:#856404;
            padding:12px;
            border-radius:10px;
            font-size:13px;
            line-height:1.6;
          ">
            <strong>मराठी नियम:</strong><br/>
            कर्ज फक्त R.D. धारकांना मिळेल व R.D. खाते सहा महिने जुने व चालू असावे.
          </div>

        </div>
      `,
        confirmButtonText: "Continue",
        confirmButtonColor: "#198754",
        allowOutsideClick: false,
        width: "480px",
      });
    } else {
      const remainingMonths = 6 - paidInstallment;

      Swal.fire({
        icon: "warning",
        title: "Loan Not Eligible",
        html: `
        <div style="text-align:left; padding:5px 10px;">

          <div style="
            background:#fff3cd;
            border-radius:12px;
            padding:15px;
            margin-bottom:15px;
          ">
            <div style="
              color:#856404;
              font-weight:600;
              font-size:16px;
              margin-bottom:8px;
            ">
              ⚠️ Minimum 6 months required
            </div>

            <div style="
              display:flex;
              justify-content:space-between;
              margin-top:10px;
            ">
              <span style="color:#6c757d;">
                Paid Installments
              </span>

              <strong>
                ${paidInstallment} Months
              </strong>
            </div>

            <div style="
              display:flex;
              justify-content:space-between;
              margin-top:8px;
            ">
              <span style="color:#6c757d;">
                Remaining
              </span>

              <strong style="color:#dc3545;">
                ${remainingMonths} Months
              </strong>
            </div>
          </div>

          <div style="
            background:#f8f9fa;
            border-radius:12px;
            padding:15px;
            font-size:14px;
            color:#6c757d;
            line-height:1.7;
          ">
            <strong style="color:#343a40;">
              Loan Eligibility Rule
            </strong>
            <br/>
            R.D. account must be at least 6 months old
            and active to be eligible for a loan.
          </div>

          <div style="
            background:#eef4ff;
            color:#2456a6;
            padding:12px;
            border-radius:10px;
            margin-top:12px;
            font-size:13px;
            line-height:1.6;
          ">
            <strong>कर्ज पात्रता नियम:</strong><br/>
            R.D. खाते सहा महिने जुने व चालू असणे आवश्यक आहे.
          </div>

        </div>
      `,
        confirmButtonText: "Okay",
        confirmButtonColor: "#0d6efd",
        allowOutsideClick: false,
        width: "480px",
      });
    }
  };

  const handleCloseRD = async () => {
    const totalPaid = summary.totalDeposit;
    const payableAmount = totalPaid / 2;

    Swal.fire({
      title: "Close RD Account?",
      html: `
      <div style="text-align: left; padding: 10px 15px;">
        <div style="
          background: #f8f9fa;
          border-radius: 12px;
          padding: 15px;
          margin-bottom: 15px;
        ">
          <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
            <span style="color:#6c757d;">Total Paid</span>
            <strong>₹ ${totalPaid.toLocaleString()}</strong>
          </div>

          <div style="display:flex; justify-content:space-between;">
            <span style="color:#6c757d;">Closure Benefit (50%)</span>
            <strong style="color:#198754;">
              ₹ ${payableAmount.toLocaleString()}
            </strong>
          </div>
        </div>

        <div style="
          background: #fff3cd;
          color: #856404;
          padding: 12px;
          border-radius: 10px;
          font-size: 14px;
        ">
          ⚠️ After closing this RD account, the account will be marked as closed.
        </div>
      </div>
    `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Close Account",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#198754",
      cancelButtonColor: "#6c757d",
      reverseButtons: true,
      focusCancel: true,
      allowOutsideClick: false,
      borderRadius: "16px",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.put(`http://localhost:8080/closeRD/${rid}`);
        Swal.fire({
          title: "RD Account Closed",
          html: `
          <div style="font-size:16px; color:#6c757d;">
            Payable Amount
          </div>
          <div style="
            font-size:32px;
            font-weight:700;
            color:#198754;
            margin-top:8px;
          ">
            ₹ ${payableAmount.toLocaleString()}
          </div>
        `,
          icon: "success",
          confirmButtonText: "Done",
          confirmButtonColor: "#198754",
          allowOutsideClick: false,
        });

        console.log("Total Paid:", totalPaid);
        console.log("50% Payable:", payableAmount);
      }
    });
  };

  const deleteData = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this record!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8080/delusr/${id}`)
          .then((res) => {
            console.log(res.data);

            rdapi();

            Swal.fire({
              icon: "success",
              title: "Deleted! 🎉",
              text: "User record deleted successfully.",
              timer: 1800,
              showConfirmButton: false,
            });
          })
          .catch((err) => {
            console.error(err);

            Swal.fire({
              icon: "error",
              title: "Delete Failed ❌",
              text: "Something went wrong.",
            });
          });
      }
    });
  };

  const saveData = () => {
    const obj = {
      accupation,
      acno,
      name,
      address,
      dob,
      gender,
      naddr,
      nadharno,
      nname,
      npanno,
      panno,
      rdamt,
      rddate,
      adharno,
      agree,
    };

    console.log(obj);

    axios
      .post("http://localhost:8080/saverduser", obj)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text: "RD customer has been added successfully.",
          confirmButtonText: "Done",
          confirmButtonColor: "#198754",
          timer: 2500,
          timerProgressBar: true,
          showConfirmButton: true,
        });

        handleClose();
        rdapi();
      })
      .catch((err) => {
        console.error(err);

        Swal.fire({
          icon: "error",
          title: "Registration Failed!",
          text: "Unable to add RD customer. Please try again.",
          confirmButtonText: "Try Again",
          confirmButtonColor: "#dc3545",
        });
      });
  };
  const openPassbookModal = (id, dt, amt) => {
    const previousDate = new Date(dt);
    const currentDate = new Date();

    const diffTime = currentDate - previousDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    console.log("Amount :", amt);
    console.log("Previous Date :", dt);
    console.log("Current Date :", currentDate.toISOString().split("T")[0]);
    console.log("Gap in Days :", diffDays);

    const fmt = diffDays * 50;

    PassbokSetFmt(fmt);
    PassbokSetLday(diffDays);
    PassbokSetRdamt(amt);
    PassbokSetRddate(currentDate.toISOString().split("T")[0]);

    SetRid(id);

    passsetShow(true);
  };

  return (
    <>
      <Modal show={passshow} onHide={handlepassClose}>
        <Modal.Header closeButton>
          <h1>
            <Modal.Title>PASSBOOK ENTRY</Modal.Title>
          </h1>
        </Modal.Header>
        <Modal.Body className="bg-light p-4">
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Fine Amount (₹)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Fine Amount"
              value={pasbokfmt}
              min="0"
              onChange={handlpasbokfmt}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Late Days</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Late Days"
              value={pasboklday}
              min="0"
              onChange={handlpasboklday}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">RD Deposit Amount (₹)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter RD Deposit Amount"
              value={pasbokrdamt}
              min="100"
              onChange={handlpasbokrdamt}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Deposit Date</Form.Label>
            <Form.Control
              type="date"
              value={pasbokrddate}
              onChange={handlpasbokrddate}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer className="bg-white">
          <Button
            variant="secondary"
            onClick={handlepassClose}
            className="px-4 fw-bold"
          >
            Close
          </Button>

          <Button
            variant="success"
            onClick={handleAddPassbook}
            className="px-4 fw-bold"
          >
            Add Passbook Entry
          </Button>
        </Modal.Footer>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal
        className="passbook-print"
        show={Pshow}
        onHide={handlePClose}
        size="xl"
        centered
        backdrop="static"
      >
        <Modal.Header closeButton className="rd-modal-header">
          <div className="rd-modal-title-wrapper">
            <div className="rd-modal-icon">₹</div>

            <div>
              <div className="rd-modal-title">RD Passbook Details</div>

              <div className="rd-modal-subtitle">
                Recurring Deposit Transaction Information
              </div>
            </div>
          </div>
        </Modal.Header>

        <Modal.Body className="bg-light passbook-print-body">
          <div className="card-body summary-body">
            <div className="row g-3">
              <div className="col-md-4">
                <div className="summary-customer-card">
                  <div className="customer-glow glow-one"></div>
                  <div className="customer-glow glow-two"></div>

                  <div className="customer-card-content">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <div className="metric-label light-label">
                          CUSTOMER PROFILE
                        </div>

                        <h3 className="customer-name-large">
                          {summary.customerName}
                        </h3>

                        <div className="customer-account-label">
                          Recurring Deposit Account
                        </div>
                      </div>

                      <div className="customer-avatar-large">
                        {summary.customerName?.charAt(0)?.toUpperCase() || "C"}
                      </div>
                    </div>

                    <div className="customer-divider"></div>

                    <div className="d-flex justify-content-between align-items-end">
                      <div>
                        <div className="metric-label light-label">
                          ACCOUNT STATUS
                        </div>

                        <div className="active-status">
                          <span className="active-dot"></span>
                          Active
                        </div>
                      </div>

                      <div className="text-end">
                        <div className="metric-label light-label">PLAN</div>

                        <div className="premium-plan">RD Premium</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ================= MONTHLY RD ================= */}

              <div className="col-md-4">
                <div className="summary-card">
                  <div className="summary-card-top">
                    <div className="metric-label">MONTHLY RD</div>

                    <div className="metric-icon blue-icon">₹</div>
                  </div>

                  <div className="metric-value">
                    ₹ {summary.monthlyAmount?.toLocaleString("en-IN")}
                  </div>

                  <div className="metric-description">
                    Scheduled monthly contribution
                  </div>
                </div>
              </div>

              {/* ================= OPENING DATE ================= */}

              <div className="col-md-4">
                <div className="summary-card">
                  <div className="summary-card-top">
                    <div className="metric-label">ACCOUNT OPENED</div>

                    <div className="metric-icon purple-icon">▣</div>
                  </div>

                  <div className="metric-value date-value">
                    {summary.openingDate}
                  </div>

                  <div className="metric-description">
                    RD account opening date
                  </div>
                </div>
              </div>

              {/* ================= INSTALLMENT METRICS ================= */}

              <div className="col-md-3">
                <div className="mini-metric-card blue-metric">
                  <div className="mini-metric-icon">12</div>

                  <div>
                    <div className="mini-metric-label">TOTAL INSTALLMENTS</div>

                    <div className="mini-metric-value">
                      {summary.totalInstallment}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="mini-metric-card green-metric">
                  <div className="mini-metric-icon">✓</div>

                  <div>
                    <div className="mini-metric-label">PAID INSTALLMENTS</div>

                    <div className="mini-metric-value">
                      {summary.paidInstallment}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="mini-metric-card red-metric">
                  <div className="mini-metric-icon">!</div>

                  <div>
                    <div className="mini-metric-label">
                      PENDING INSTALLMENTS
                    </div>

                    <div className="mini-metric-value">
                      {summary.pendingInstallment}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="mini-metric-card orange-metric">
                  <div className="mini-metric-icon">⏱</div>

                  <div>
                    <div className="mini-metric-label">TOTAL LATE DAYS</div>

                    <div className="mini-metric-value">
                      {summary.totalLateDays}
                    </div>
                  </div>
                </div>
              </div>

              {/* ================= FINANCIAL SUMMARY ================= */}

              <div className="col-md-4">
                <div className="financial-card">
                  <div className="financial-heading">
                    <span>PAID DEPOSIT</span>
                    <span className="financial-icon green-financial">₹</span>
                  </div>

                  <h3 className="financial-value green-value">
                    ₹ {summary.totalDeposit?.toLocaleString("en-IN")}
                  </h3>

                  <div className="financial-description">
                    Total amount deposited to date
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="financial-card">
                  <div className="financial-heading">
                    <span>12 MONTHS DEPOSIT</span>
                    <span className="financial-icon blue-financial">₹</span>
                  </div>

                  <h3 className="financial-value blue-value">
                    ₹{" "}
                    {(
                      summary.monthlyAmount * summary.totalInstallment
                    )?.toLocaleString("en-IN")}
                  </h3>

                  <div className="financial-description">
                    Total scheduled principal
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="financial-card">
                  <div className="financial-heading">
                    <span>INTEREST RATE</span>
                    <span className="financial-icon cyan-financial">%</span>
                  </div>

                  <h3 className="financial-value cyan-value">
                    {summary.interestRate}%
                  </h3>

                  <div className="financial-description">
                    Applicable RD interest rate
                  </div>
                </div>
              </div>

              {/* ================= EARNED INTEREST ================= */}

              <div className="col-md-4">
                <div className="financial-card">
                  <div className="financial-heading">
                    <span>EARNED INTEREST</span>
                    <span className="financial-icon green-financial">↗</span>
                  </div>

                  <h3 className="financial-value green-value">
                    ₹{" "}
                    {(
                      ((summary.monthlyAmount *
                        summary.totalInstallment *
                        summary.interestRate) /
                        100 /
                        summary.totalInstallment) *
                      summary.paidInstallment
                    ).toLocaleString("en-IN")}
                  </h3>

                  <div className="financial-description">
                    Interest earned on {summary.paidInstallment} paid months
                  </div>
                </div>
              </div>

              {/* ================= FINE ================= */}

              <div className="col-md-4">
                <div className="financial-card">
                  <div className="financial-heading">
                    <span>FINE AMOUNT</span>
                    <span className="financial-icon red-financial">!</span>
                  </div>

                  <h3 className="financial-value red-value">
                    ₹ {summary.totalFine?.toLocaleString("en-IN")}
                  </h3>

                  <div className="financial-description">
                    Total accumulated late payment charges
                  </div>
                </div>
              </div>

              {/* ================= EXPECTED MATURITY ================= */}

              <div className="col-md-4">
                <div className="financial-card">
                  <div className="financial-heading">
                    <span>EXPECTED MATURITY</span>
                    <span className="financial-icon dark-financial">◆</span>
                  </div>

                  <h3 className="financial-value dark-value">
                    ₹{" "}
                    {(
                      summary.monthlyAmount * summary.totalInstallment +
                      (summary.monthlyAmount *
                        summary.totalInstallment *
                        summary.interestRate) /
                        100
                    ).toLocaleString("en-IN")}
                  </h3>

                  <div className="financial-description">
                    Principal plus projected interest
                  </div>
                </div>
              </div>

              {/* ================= FINAL VALUES ================= */}

              <div className="col-md-6">
                <div className="final-value-card maturity-card">
                  <div>
                    <div className="final-label">MATURITY AMOUNT</div>

                    <div className="final-description">
                      Estimated amount payable at maturity
                    </div>
                  </div>

                  <div className="final-amount">
                    ₹ {summary.maturityAmount?.toLocaleString("en-IN")}
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="final-value-card payable-card">
                  <div>
                    <div className="final-label">NET PAYABLE</div>

                    <div className="final-description">
                      Final payable amount after applicable adjustments
                    </div>
                  </div>

                  <div className="final-amount">
                    ₹ {summary.netPayable?.toLocaleString("en-IN")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Card className="passbook-card border-0 mt-4">
            <Card.Header className="passbook-header">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-3">
                  <div className="passbook-icon">
                    <span>₹</span>
                  </div>

                  <div>
                    <h4 className="passbook-title mb-1">Customer Passbook</h4>

                    <div className="passbook-subtitle">
                      Recurring Deposit Transaction History
                    </div>
                  </div>
                </div>

                <div className="entry-counter">
                  <span className="counter-label">TOTAL ENTRIES</span>
                  <strong>{Pdata.length}</strong>
                </div>
              </div>
            </Card.Header>

            <Card.Body className="passbook-body">
              <div className="table-wrapper">
                <Table
                  hover
                  className="passbook-table align-middle text-center mb-0"
                >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th className="text-start">CUSTOMER</th>
                      <th>FINE</th>
                      <th>RD DEPOSIT</th>
                      <th>LATE DAYS</th>
                      <th>DEPOSIT DATE</th>
                      <th>PAYMENT STATUS</th>
                    </tr>
                  </thead>

                  <tbody>
                    {Pdata.length > 0 ? (
                      currentData.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <span className="serial-number">
                              {firstIndex + index + 1}
                            </span>
                          </td>

                          <td className="text-start">
                            <div className="customer-cell">
                              <div className="customer-avatar">
                                {item.name?.charAt(0)?.toUpperCase() || "C"}
                              </div>

                              <div>
                                <div className="customer-name">{item.name}</div>

                                <div className="customer-label">
                                  RD Customer
                                </div>
                              </div>
                            </div>
                          </td>

                          <td>
                            <span className="amount-badge fine-amount">
                              ₹ {Number(item.fmt).toLocaleString("en-IN")}
                            </span>
                          </td>

                          <td>
                            <span className="amount-badge deposit-amount">
                              ₹ {Number(item.rdamt).toLocaleString("en-IN")}
                            </span>
                          </td>

                          <td>
                            <span className="late-badge">{item.lday} Days</span>
                          </td>

                          <td>
                            <div className="date-cell">
                              <span className="calendar-icon">▣</span>
                              {item.rddate}
                            </div>
                          </td>

                          <td>
                            {Number(item.fmt) > 0 ? (
                              <span className="status-badge status-late">
                                <span className="status-dot"></span>
                                Late Payment
                              </span>
                            ) : (
                              <span className="status-badge status-paid">
                                <span className="status-dot"></span>
                                On Time
                              </span>
                            )}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7">
                          <div className="empty-state">
                            <div className="empty-icon">₹</div>

                            <h5>No Passbook Records</h5>

                            <p>
                              No recurring deposit transactions have been
                              recorded yet.
                            </p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </div>

              {/* Pagination */}

              <div className="pagination-area">
                <button
                  className="pagination-btn"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  <span>‹</span>
                  Previous
                </button>

                <div className="page-indicator">
                  <span>PAGE</span>
                  <strong>{currentPage}</strong>
                  <small>OF {totalPages}</small>
                </div>

                <button
                  className="pagination-btn"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                  <span>›</span>
                </button>
              </div>

              {/* Action Buttons */}

              <div className="passbook-actions">
                <button
                  className="bank-action-btn print-action"
                  onClick={() => window.print()}
                >
                  <span className="action-icon">▣</span>

                  <span>
                    <strong>Print Passbook</strong>
                    <small>Generate transaction statement</small>
                  </span>
                </button>

                <button
                  className="bank-action-btn close-action"
                  onClick={() => handleCloseRD()}
                >
                  <span className="action-icon">▢</span>

                  <span>
                    <strong>Close RD Account</strong>
                    <small>Process account closure</small>
                  </span>
                </button>

                <button
                  className="bank-action-btn loan-action"
                  onClick={() => handleLoanEligibility()}
                >
                  <span className="action-icon">₹</span>

                  <span>
                    <strong>Loan Eligibility</strong>
                    <small>Check customer eligibility</small>
                  </span>
                </button>
              </div>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>

      <br />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4 className="rd-customer-name">
              <b>RD Customer Name</b>
            </h4>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Full Name</Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter Full Name"
              value={name}
              maxLength={50}
              onChange={(e) => {
                const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                SetNm(value);
              }}
              required
            />

            <Form.Text className="text-muted">
              Enter your full name as per official records.
            </Form.Text>
          </Form.Group>
          <br />

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Address</Form.Label>

            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter Your Address"
              value={address}
              maxLength={200}
              onChange={(e) => SetAdd(e.target.value)}
              required
            />

            <Form.Text className="text-muted">
              Enter your complete residential address.
            </Form.Text>
          </Form.Group>
          <br />
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Date of Birth</Form.Label>

            <Form.Control
              type="date"
              value={dob}
              onChange={(e) => SetDob(e.target.value)}
              required
              max={new Date().toISOString().split("T")[0]}
            />

            <Form.Text className="text-muted">
              Select your date of birth.
            </Form.Text>
          </Form.Group>
          <br />
          <Form.Label>Gender</Form.Label>

          <Form.Check
            type="radio"
            label="Male"
            name="gender"
            value="Male"
            checked={gender === "Male"}
            onChange={(e) => SetGen(e.target.value)}
          />

          <Form.Check
            type="radio"
            label="Female"
            name="gender"
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => SetGen(e.target.value)}
          />

          <Form.Check
            type="radio"
            label="Other"
            name="gender"
            value="Other"
            checked={gender === "Other"}
            onChange={(e) => SetGen(e.target.value)}
          />
          <br />
          <Form.Group className="mb-3">
            <Form.Label>RD Opening Date</Form.Label>
            <Form.Control
              type="date"
              value={rddate}
              onChange={(e) => SetRddtt(e.target.value)}
            />
          </Form.Group>
          <br />

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">RD Amount</Form.Label>

            <Form.Control
              type="number"
              placeholder="Enter RD Amount"
              value={rdamt}
              min={100}
              step={100}
              onChange={(e) => SetRdamt(e.target.value)}
              required
            />

            <Form.Text className="text-muted">
              Enter the monthly RD deposit amount.
            </Form.Text>
          </Form.Group>

          <br />
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Occupation</Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter Occupation"
              value={accupation}
              maxLength={50}
              onChange={(e) => {
                const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                SetAccu(value);
              }}
              required
            />

            <Form.Text className="text-muted">
              Enter your current occupation.
            </Form.Text>
          </Form.Group>
          <br />

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Account Number</Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter Account Number"
              value={acno}
              maxLength={18}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                SetAcco(value);
              }}
              required
            />

            <Form.Text className="text-muted">
              Enter your account number.
            </Form.Text>
          </Form.Group>
          <br />
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Aadhar Number</Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter Aadhar Number"
              value={adharno}
              maxLength={12}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                SetAdhrno(value);
              }}
              required
            />

            <Form.Text className="text-muted">
              Enter your 12-digit Aadhar number.
            </Form.Text>
          </Form.Group>
          <br />
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">PAN Number</Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter PAN Number"
              value={panno}
              maxLength={10}
              onChange={(e) => {
                const value = e.target.value
                  .toUpperCase()
                  .replace(/[^A-Z0-9]/g, "");
                SetPanno(value);
              }}
              required
            />

            <Form.Text className="text-muted">
              Enter your 10-character PAN number.
            </Form.Text>
          </Form.Group>
          <br />
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Nominee Name</Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter Nominee Name"
              value={nname}
              maxLength={50}
              onChange={(e) => {
                const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                SetNnm(value);
              }}
              required
            />

            <Form.Text className="text-muted">
              Enter the nominee's full name.
            </Form.Text>
          </Form.Group>

          <br />
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Nominee Address</Form.Label>

            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter Nominee Address"
              value={naddr}
              maxLength={200}
              onChange={(e) => SetNaddr(e.target.value)}
              required
            />

            <Form.Text className="text-muted">
              Enter the nominee's complete residential address.
            </Form.Text>
          </Form.Group>
          <br />

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">
              Nominee Aadhar Number
            </Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter Nominee Aadhar Number"
              value={nadharno}
              maxLength={12}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, ""); // Only numbers
                SetNadhrno(value);
              }}
              required
            />

            <Form.Text className="text-muted">
              Enter the nominee's 12-digit Aadhar number.
            </Form.Text>
          </Form.Group>
          <br />

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Nominee PAN Number</Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter Nominee PAN Number"
              value={npanno}
              maxLength={10}
              onChange={(e) => {
                const value = e.target.value
                  .toUpperCase()
                  .replace(/[^A-Z0-9]/g, "");
                SetNpano(value);
              }}
              required
            />

            <Form.Text className="text-muted">
              Enter the nominee's 10-character PAN number.
            </Form.Text>
          </Form.Group>
          <br />

          <Form.Check
            className="mt-4 p-3 border rounded bg-light"
            type="checkbox"
            checked={agree}
            onChange={(e) => SetAgree(e.target.checked)}
            label={
              <>
                <strong>Declaration & Consent</strong>
                <br />I confirm that the information furnished above is true and
                correct. I have carefully read and accepted the{" "}
                <span className="text-primary fw-bold">
                  Terms & Conditions
                </span>{" "}
                applicable to the Recurring Deposit (RD) Account and authorize
                the bank to verify the information provided whenever required.
              </>
            }
          />
        </Modal.Body>

        <Modal.Footer className="border-0 pt-0">
          <Button
            variant="secondary"
            onClick={handleClose}
            className="px-4 py-2 fw-semibold shadow-sm"
            style={{
              borderRadius: "10px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
            }}
          >
            ✕ Close
          </Button>

          {rid === "" ? (
            <Button
              variant="primary"
              onClick={saveData}
              className="px-4 py-2 fw-semibold shadow-sm"
              style={{
                borderRadius: "10px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-2px) scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(13,110,253,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 2px 6px rgba(13,110,253,0.15)";
              }}
            >
              💾 Save
            </Button>
          ) : (
            <Button
              variant="warning"
              onClick={updateData}
              className="px-4 py-2 fw-semibold shadow-sm"
              style={{
                borderRadius: "10px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-2px) scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(255,193,7,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 2px 6px rgba(255,193,7,0.15)";
              }}
            >
              ✏️ Update
            </Button>
          )}
        </Modal.Footer>
      </Modal>

      <Container className="mt-5">
        <Card className="shadow-lg border-0 rounded-4">
          <Card.Header
            className="text-white rounded-top-4"
            style={{
              background: "linear-gradient(135deg, #0b3d5c, #0f6b8f)",
              padding: "18px 24px",
              border: "none",
            }}
          >
            <div className="rd-header-content">
              <div className="rd-header-info">
                <div className="rd-header-icon">
                  <span>₹</span>
                </div>

                <div>
                  <h3 className="rd-header-title">RD Users Details</h3>

                  <div className="rd-header-subtitle">
                    Recurring Deposit Account Management
                  </div>
                </div>
              </div>

              <Button onClick={handleShow} className="add-rd-btn">
                <span className="add-rd-icon">+</span>

                <span className="add-rd-text">Add RD User</span>

                <span className="add-rd-arrow">→</span>
              </Button>
            </div>
          </Card.Header>

          <Card.Body>
            <div className="table-responsive">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div style={{ maxWidth: "350px", width: "100%" }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="🔍 Search Name / Account / Aadhaar / PAN..."
                    // value={}
                    onChange={(e) => {
                      setSearchRD(e.target.value);
                      setPageNumberRD(1);
                    }}
                  />
                </div>
              </div>
              <Table
                striped
                bordered
                hover
                className="align-middle text-center mb-0"
              >
                <thead className="rd-table-head text-nowrap">
                  <tr>
                    <th>ID</th>
                    <th>Customer Name</th>
                    <th>Account No.</th>
                    <th>Occupation</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th>Aadhaar No.</th>
                    <th>PAN No.</th>
                    <th>RD Amount</th>
                    <th>RD Date</th>
                    <th>Nominee Name</th>
                    <th>Nominee Address</th>
                    <th>Nominee Aadhaar No.</th>
                    <th>Nominee PAN No.</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody className="rd-table-body">
                  {visibleRecordsRD.map((item, index) => (
                    <tr key={item.rid}>
                      <td className="rd-id-cell">{index + 1}</td>

                      <td>
                        <div className="rd-customer-cell">
                          <span className="rd-avatar">
                            {item.name?.charAt(0)?.toUpperCase()}
                          </span>

                          <span className="rd-customer-name">{item.name}</span>
                        </div>
                      </td>

                      <td>
                        <span className="rd-account-no">{item.acno}</span>
                      </td>

                      <td>{item.accupation}</td>

                      <td>{item.dob}</td>

                      <td>
                        <span className="rd-gender-badge">{item.gender}</span>
                      </td>

                      <td>{item.address}</td>

                      <td>
                        <span className="rd-document-no">{item.adharno}</span>
                      </td>

                      <td>
                        <span className="rd-pan-no">{item.panno}</span>
                      </td>

                      <td className="rd-amount-cell">
                        ₹ {Number(item.rdamt).toLocaleString("en-IN")}
                      </td>

                      <td>{item.rddate}</td>

                      <td className="rd-nominee-name">{item.nname}</td>

                      <td>{item.naddr}</td>

                      <td>
                        <span className="rd-document-no">{item.nadharno}</span>
                      </td>

                      <td>
                        <span className="rd-pan-no">{item.npanno}</span>
                      </td>

                      {/* ================= ACTIONS ================= */}

                      <td>
                        <div className="rd-action-buttons">
                          {/* View */}

                          <button
                            className="rd-action-btn rd-view-btn"
                            title="View Passbook"
                            onClick={() => viewData(item.rid)}
                          >
                            <FaEye />
                          </button>

                          {/* Add Passbook */}

                          <button
                            className="rd-action-btn rd-passbook-btn"
                            title="Add Passbook"
                            onClick={() =>
                              openPassbookModal(
                                item.rid,
                                item.rddate,
                                item.rdamt,
                              )
                            }
                          >
                            <FaBookOpen />
                          </button>

                          {/* Edit */}

                          <button
                            className="rd-action-btn rd-edit-btn"
                            title="Edit Customer"
                            onClick={() => editData(item)}
                          >
                            <FaEdit />
                          </button>

                          {/* Delete */}

                          <button
                            className="rd-action-btn rd-delete-btn"
                            title="Delete Customer"
                            onClick={() => deleteData(item.rid)}
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="text-muted fw-semibold">
                  Showing {data.length === 0 ? 0 : firstRecordRD + 1}
                  {" - "}
                  {Math.min(lastRecordRD, data.length)}
                  {" of "}
                  {data.length}
                </span>

                <div className="d-flex gap-2">
                  <button
                    className="btn btn-sm btn-outline-primary"
                    disabled={pageNumberRD === 1}
                    onClick={() => setPageNumberRD(pageNumberRD - 1)}
                  >
                    ← Previous
                  </button>

                  <span className="btn btn-sm btn-primary">
                    Page {pageNumberRD} of {pageCountRD}
                  </span>

                  <button
                    className="btn btn-sm btn-outline-primary"
                    disabled={pageNumberRD === pageCountRD}
                    onClick={() => setPageNumberRD(pageNumberRD + 1)}
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
