package com.cs.demo.DTO;

import java.time.LocalDate;

public class passbookDTO {
	private String name;
	private int rdamt;
	private LocalDate rddate;
	private int lday;
	private int fmt;
	private Long pid;
	public passbookDTO(String name, int rdamt, LocalDate rddate, int lday, int fmt, Long pid) {
		super();
		this.name = name;
		this.rdamt = rdamt;
		this.rddate = rddate;
		this.lday = lday;
		this.fmt = fmt;
		this.pid = pid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
	public Long getPid() {
		return pid;
	}
	public void setPid(Long pid) {
		this.pid = pid;
	}
	
	
	
	

}
