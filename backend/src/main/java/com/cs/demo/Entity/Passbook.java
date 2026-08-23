package com.cs.demo.Entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

	@Entity
	public class Passbook {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private Long pid;
	private int rdamt;
	@Column(name = "rddate")
	private LocalDate rddate;
	private int lday;
	private int fmt;
	private int flg;
	@ManyToOne
	@JoinColumn(name="rid")
	private Rduser rduser;
	
	
	
	
	public Long getPid() {
		return pid;
	}
	public void setPid(Long pid) {
		this.pid = pid;
	}
	public int getRdamt() {
		return rdamt;
	}
	public void setRdamt(int rdamt) {
		this.rdamt = rdamt;
	}
	public LocalDate getRddate() {
		return rddate;
	}
	public void setRddate(LocalDate rddate) {
		this.rddate = rddate;
	}
	public int getLday() {
		return lday;
	}
	public void setLday(int lday) {
		this.lday = lday;
	}
	public int getFmt() {
		return fmt;
	}
	public void setFmt(int fmt) {
		this.fmt = fmt;
	}
	public int getFlg() {
		return flg;
	}
	public void setFlg(int flg) {
		this.flg = flg;
	}
	public Rduser getRduser() {
		return rduser;
	}
	public void setRduser(Rduser rduser) {
		this.rduser = rduser;
	}
	
	
	

}
