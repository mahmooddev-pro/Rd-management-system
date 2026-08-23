package com.cs.demo.Entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="rduser")

public class Rduser {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long rid;
	private String name;
	private String address;
	@Column(name = "dob")
	private LocalDate dob;
	private String gender;
	@Column(name = "rddate")
	private LocalDate rddate;
	private int rdamt;
	private String accupation;
	private String acno;
	@Column(name = "adharno", unique = true, nullable = false)
	private String adharno;
	private String panno;
	private String nname;
	private String naddr;
	private String nadharno;
	private String npanno;
	private boolean agree;
	public long getRid() {
		return rid;
	}
	public void setRid(long rid) {
		this.rid = rid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public LocalDate getDob() {
		return dob;
	}
	public void setDob(LocalDate dob) {
		this.dob = dob;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public LocalDate getRddate() {
		return rddate;
	}
	public void setRddate(LocalDate rddate) {
		this.rddate = rddate;
	}
	public int getRdamt() {
		return rdamt;
	}
	public void setRdamt(int rdamt) {
		this.rdamt = rdamt;
	}
	public String getAccupation() {
		return accupation;
	}
	public void setAccupation(String accupation) {
		this.accupation = accupation;
	}
	public String getAcno() {
		return acno;
	}
	public void setAcno(String acno) {
		this.acno = acno;
	}
	public String getAdharno() {
		return adharno;
	}
	public void setAdharno(String adharno) {
		this.adharno = adharno;
	}
	public String getPanno() {
		return panno;
	}
	public void setPanno(String panno) {
		this.panno = panno;
	}
	public String getNname() {
		return nname;
	}
	public void setNname(String nname) {
		this.nname = nname;
	}
	public String getNaddr() {
		return naddr;
	}
	public void setNaddr(String naddr) {
		this.naddr = naddr;
	}
	public String getNadharno() {
		return nadharno;
	}
	public void setNadharno(String nadharno) {
		this.nadharno = nadharno;
	}
	public String getNpanno() {
		return npanno;
	}
	public void setNpanno(String npanno) {
		this.npanno = npanno;
	}
	public boolean isAgree() {
		return agree;
	}
	public void setAgree(boolean agree) {
		this.agree = agree;
	}
	private String mob;

	public String getMob() {
	    return mob;
	}

	public void setMob(String mob) {
	    this.mob = mob;
	}
	
	

}