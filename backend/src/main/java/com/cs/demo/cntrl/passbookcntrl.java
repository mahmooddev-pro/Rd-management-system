package com.cs.demo.cntrl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.cs.demo.DTO.passbookDTO;
import com.cs.demo.DTO.passbookcontDTO;
import com.cs.demo.Entity.Passbook;
import com.cs.demo.Repo.passbookrepo;



@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class passbookcntrl {
	
@Autowired
	private passbookrepo prepo;
	
	@GetMapping("passbook")
	List<passbookDTO> getpsbk(){
		List<passbookDTO> lst= prepo.getpassbookdata();
		return lst;
	}
	
	@GetMapping("/getpassbookById/{rid}")
	List<passbookDTO > Getuserbyid(@PathVariable("rid") Long rid) {
		List<passbookDTO > lst=prepo.getPassbookByPid(rid);
		return lst;
	}
	
	
	@GetMapping("/getpassbookCnt/{rid}")
	Map<String, Object> GetpassbookCnt(@PathVariable("rid") Long rid) {
		Long lst=prepo.getPassbookByRid(rid);
		Map<String, Object> result = new HashMap<>();
		result.put("passbook_count", lst);
		return result;
	
	}
	
	

	@GetMapping("/getpassbookAmt/{rid}")
	Map<String, Object> getpassbookAmt(@PathVariable("rid") Long rid) {
		Long lst=prepo.getpassbookAmt(rid);
		Map<String, Object> result = new HashMap<>();
		result.put("passbook_Amount", lst);
		return result;
	
	}
	
	
	
	@PostMapping("/savepassbook")
	public Passbook saveuser(@RequestBody Passbook p) {

	    Long rid = p.getRduser().getRid();

	    Long count = prepo.getPassbookByRid(rid);

	    if (count >= 12) {
	        throw new RuntimeException("Maximum 12 installments allowed.");
	    }

	    Passbook saved = prepo.save(p);

	    if (count + 1 == 12) {
	        prepo.closeRD(rid);
	    }

	    return saved;
	}
	
		@PutMapping("/uddtpassbook")
		public Passbook updateps(@RequestBody Passbook p)
		{
			return prepo.save(p);
		}
	
	@DeleteMapping("/delpassbook/{pid}")
	public String DeleteBlg(@PathVariable("pid") Long pid)
	
	{
		prepo.deleteById(pid);
		return "Record Delete Successfully.....!";
	}
	
	@PutMapping("/closeRD/{rid}")
	public String closeRD(@PathVariable("rid") Long rid) {

	    prepo.closeRD(rid);

	    return "RD Account Closed Successfully";
	}
	
	

	
	

}

	


